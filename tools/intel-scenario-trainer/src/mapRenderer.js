// GeoJSON -> SVG renderer for the Eurasia assets.
// No external dependencies. Equirectangular-with-latitude-correction projection.
// Supports preset views (re-bounded), country click selection, and annotation overlays.

const SVG_NS = 'http://www.w3.org/2000/svg';

async function loadJson(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}

// ----- Projection -----
// Adjust longitude scale by cos(midLat) so the Caucasus doesn't look stretched.
function makeProjector(bounds, width, height, pad = 18) {
  const [minX, minY, maxX, maxY] = bounds;
  const midLat = (minY + maxY) / 2;
  const lonScale = Math.cos((midLat * Math.PI) / 180);
  const dx = (maxX - minX) * lonScale;
  const dy = (maxY - minY);
  const sx = (width - pad * 2) / dx;
  const sy = (height - pad * 2) / dy;
  const scale = Math.min(sx, sy);
  const offsetX = (width - dx * scale) / 2;
  const offsetY = (height - dy * scale) / 2;
  const project = ([lon, lat]) => [
    offsetX + (lon - minX) * lonScale * scale,
    height - (offsetY + (lat - minY) * scale),
  ];
  project.scale = scale;
  project.lonScale = lonScale;
  // pixels-per-km estimate at midLat: 1 deg lat ~ 111 km
  project.kmToPx = (km) => (km / 111) * scale;
  return project;
}

function ringPath(ring, project) {
  return ring.map((pt, i) => {
    const [x, y] = project(pt);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ') + ' Z';
}
function lineString(coords, project) {
  return coords.map((pt, i) => {
    const [x, y] = project(pt);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(' ');
}
function geomToPath(geometry, project) {
  const g = geometry;
  if (g.type === 'Polygon') return g.coordinates.map(r => ringPath(r, project)).join(' ');
  if (g.type === 'MultiPolygon') return g.coordinates.flatMap(p => p.map(r => ringPath(r, project))).join(' ');
  if (g.type === 'LineString') return lineString(g.coordinates, project);
  if (g.type === 'MultiLineString') return g.coordinates.map(l => lineString(l, project)).join(' ');
  return '';
}

// ----- Asset cache (loaded once) -----
const MAP_BASE = 'assets/maps/eurasia';
let _assets = null;
async function loadAssets() {
  if (_assets) return _assets;
  const [countries, border, capitals, labels, manifest, styles] = await Promise.all([
    loadJson(`${MAP_BASE}/geojson/countries_simplified.geojson`),
    loadJson(`${MAP_BASE}/geojson/donovia_gorgas_border.geojson`),
    loadJson(`${MAP_BASE}/geojson/capital_cities.geojson`),
    loadJson(`${MAP_BASE}/geojson/country_label_points.geojson`),
    loadJson(`${MAP_BASE}/map_manifest.json`),
    loadJson(`${MAP_BASE}/styles/map_styles.json`),
  ]);
  _assets = { countries, border, capitals, labels, manifest, styles };
  return _assets;
}

export function getPresetViews(manifest) { return manifest.presetViews; }

function styleForCountry(id, styles) {
  return styles.countryStyles?.[id] || { fill: styles.palette.otherCountryFill, stroke: styles.palette.countryStroke, strokeWidth: 0.9 };
}

// ----- Main map controller -----
export class MapRenderer {
  constructor(svgEl) {
    this.svg = svgEl;
    this.width = 1000;
    this.height = 640;
    this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
    this.layerState = { political: true };
    this.preset = null;
    this.assets = null;
    this.layerDefs = []; // from scenario mapLayers.json
    this.onCountrySelect = null;
  }
  async init() {
    this.assets = await loadAssets();
    return this.assets;
  }
  setLayerDefs(layerDefs) {
    this.layerDefs = layerDefs || [];
    // default visibility from layer definitions
    this.layerState = {};
    for (const l of this.layerDefs) this.layerState[l.id] = !!l.defaultVisible;
    if (this.layerState.political === undefined) this.layerState.political = true;
  }
  setPreset(presetId) {
    const p = this.assets.manifest.presetViews.find(v => v.id === presetId);
    this.preset = p || this.assets.manifest.presetViews[0];
  }
  toggleLayer(id, on) {
    if (typeof on === 'boolean') this.layerState[id] = on;
    else this.layerState[id] = !this.layerState[id];
  }
  setLayers(ids) {
    // turn ON every id in the list (additive — does not turn others off automatically)
    for (const id of ids) this.layerState[id] = true;
  }
  isLayerOn(id) { return !!this.layerState[id]; }

  render() {
    const { countries, border, capitals, labels, styles } = this.assets;
    const bounds = this.preset?.bounds || [-179.99, 25, 179.99, 82];
    const project = makeProjector(bounds, this.width, this.height);

    // wipe
    while (this.svg.firstChild) this.svg.removeChild(this.svg.firstChild);

    // background
    const bg = document.createElementNS(SVG_NS, 'rect');
    bg.setAttribute('x', 0); bg.setAttribute('y', 0);
    bg.setAttribute('width', this.width); bg.setAttribute('height', this.height);
    bg.setAttribute('fill', styles.palette.background);
    this.svg.appendChild(bg);

    // Political layer (countries + capitals + labels + border highlight)
    if (this.layerState.political !== false) {
      const gC = document.createElementNS(SVG_NS, 'g');
      gC.setAttribute('class', 'g-countries');
      for (const f of countries.features) {
        const id = f.properties.id || (f.properties.display_name || '').toLowerCase();
        const st = styleForCountry(id, styles);
        const path = document.createElementNS(SVG_NS, 'path');
        path.setAttribute('d', geomToPath(f.geometry, project));
        path.setAttribute('fill', st.fill);
        path.setAttribute('stroke', st.stroke);
        path.setAttribute('stroke-width', st.strokeWidth ?? 1);
        path.setAttribute('class', 'country');
        path.setAttribute('data-country-id', id);
        path.addEventListener('click', () => {
          this.svg.querySelectorAll('.country.is-selected').forEach(n => n.classList.remove('is-selected'));
          path.classList.add('is-selected');
          this.onCountrySelect?.({ id, name: f.properties.display_name || f.properties.NAME_SHORT });
        });
        gC.appendChild(path);
      }
      this.svg.appendChild(gC);

      // Donovia-Gorgas border highlight
      const gB = document.createElementNS(SVG_NS, 'g');
      for (const f of border.features) {
        const p = document.createElementNS(SVG_NS, 'path');
        p.setAttribute('d', geomToPath(f.geometry, project));
        p.setAttribute('class', 'border-highlight');
        gB.appendChild(p);
      }
      this.svg.appendChild(gB);

      // Country labels
      for (const f of labels.features) {
        const [x, y] = project(f.geometry.coordinates);
        if (x < -50 || x > this.width + 50 || y < -50 || y > this.height + 50) continue;
        const t = document.createElementNS(SVG_NS, 'text');
        t.setAttribute('x', x.toFixed(1)); t.setAttribute('y', y.toFixed(1));
        t.setAttribute('text-anchor', 'middle');
        const cid = (f.properties.country_id || '').toLowerCase();
        t.setAttribute('class', `country-label${cid === 'donovia' ? ' label-donovia' : ''}`);
        t.textContent = (f.properties.display_name || '').toUpperCase();
        this.svg.appendChild(t);
      }
      // Capitals
      for (const f of capitals.features) {
        const [x, y] = project(f.geometry.coordinates);
        if (x < 0 || x > this.width || y < 0 || y > this.height) continue;
        const dot = document.createElementNS(SVG_NS, 'circle');
        dot.setAttribute('cx', x.toFixed(1)); dot.setAttribute('cy', y.toFixed(1));
        dot.setAttribute('r', 3); dot.setAttribute('class', 'capital-dot');
        this.svg.appendChild(dot);
        const lbl = document.createElementNS(SVG_NS, 'text');
        lbl.setAttribute('x', (x + 5).toFixed(1)); lbl.setAttribute('y', (y + 3).toFixed(1));
        lbl.setAttribute('class', 'capital-label');
        lbl.textContent = f.properties.display_name || f.properties.name || '';
        this.svg.appendChild(lbl);
      }
    }

    // Scenario annotation overlays (radar, ir, cyber, geoint, space, terrain)
    for (const layer of this.layerDefs) {
      if (layer.id === 'political' || !this.layerState[layer.id]) continue;
      const g = document.createElementNS(SVG_NS, 'g');
      g.setAttribute('class', `g-annot g-annot-${layer.id}`);
      for (const a of (layer.annotations || [])) {
        const node = renderAnnotation(a, project);
        if (node) g.appendChild(node);
      }
      this.svg.appendChild(g);
    }
  }
}

function renderAnnotation(a, project) {
  const g = document.createElementNS(SVG_NS, 'g');
  if (a.shape === 'marker') {
    const [x, y] = project(a.coords);
    const c = document.createElementNS(SVG_NS, 'circle');
    c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', 4.5);
    c.setAttribute('fill', a.color || '#444'); c.setAttribute('stroke', 'white'); c.setAttribute('stroke-width', 1.2);
    g.appendChild(c);
    if (a.label) {
      const t = document.createElementNS(SVG_NS, 'text');
      t.setAttribute('x', (x + 7).toFixed(1)); t.setAttribute('y', (y + 3).toFixed(1));
      t.setAttribute('class', 'annot-label'); t.textContent = a.label;
      g.appendChild(t);
    }
  } else if (a.shape === 'circle') {
    const [x, y] = project(a.center);
    const r = project.kmToPx(a.radiusKm);
    const c = document.createElementNS(SVG_NS, 'circle');
    c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', r.toFixed(1));
    c.setAttribute('fill', a.fill || 'rgba(0,0,0,0.05)');
    c.setAttribute('stroke', a.stroke || '#444');
    c.setAttribute('stroke-width', a.strokeWidth ?? 1);
    if (a.strokeDash) c.setAttribute('stroke-dasharray', a.strokeDash);
    g.appendChild(c);
    if (a.label) {
      const t = document.createElementNS(SVG_NS, 'text');
      t.setAttribute('x', (x + r + 4).toFixed(1)); t.setAttribute('y', y.toFixed(1));
      t.setAttribute('class', 'annot-label'); t.textContent = a.label;
      g.appendChild(t);
    }
  } else if (a.shape === 'arc') {
    const [cx, cy] = project(a.center);
    const r = project.kmToPx(a.radiusKm);
    const a0 = (a.startAngle ?? 0) * Math.PI / 180;
    const a1 = (a.endAngle ?? 90) * Math.PI / 180;
    // In SVG y grows downward; flip y for math
    const sx = cx + r * Math.cos(a0);
    const sy = cy - r * Math.sin(a0);
    const ex = cx + r * Math.cos(a1);
    const ey = cy - r * Math.sin(a1);
    const large = Math.abs(a1 - a0) > Math.PI ? 1 : 0;
    const sweep = 0;
    const d = `M${cx},${cy} L${sx.toFixed(1)},${sy.toFixed(1)} A${r.toFixed(1)},${r.toFixed(1)} 0 ${large} ${sweep} ${ex.toFixed(1)},${ey.toFixed(1)} Z`;
    const p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', d);
    p.setAttribute('fill', a.fill || 'rgba(0,0,0,0.05)');
    p.setAttribute('stroke', a.stroke || '#444');
    p.setAttribute('stroke-width', a.strokeWidth ?? 1);
    if (a.strokeDash) p.setAttribute('stroke-dasharray', a.strokeDash);
    g.appendChild(p);
  } else if (a.shape === 'box') {
    const [x0, y0] = project([a.bbox[0], a.bbox[3]]);
    const [x1, y1] = project([a.bbox[2], a.bbox[1]]);
    const rect = document.createElementNS(SVG_NS, 'rect');
    rect.setAttribute('x', Math.min(x0, x1).toFixed(1));
    rect.setAttribute('y', Math.min(y0, y1).toFixed(1));
    rect.setAttribute('width', Math.abs(x1 - x0).toFixed(1));
    rect.setAttribute('height', Math.abs(y1 - y0).toFixed(1));
    rect.setAttribute('fill', a.fill || 'rgba(0,0,0,0.05)');
    rect.setAttribute('stroke', a.stroke || '#444');
    rect.setAttribute('stroke-width', a.strokeWidth ?? 1);
    if (a.strokeDash) rect.setAttribute('stroke-dasharray', a.strokeDash);
    g.appendChild(rect);
    if (a.label) {
      const t = document.createElementNS(SVG_NS, 'text');
      t.setAttribute('x', Math.min(x0, x1).toFixed(1));
      t.setAttribute('y', (Math.min(y0, y1) - 3).toFixed(1));
      t.setAttribute('class', 'annot-label'); t.textContent = a.label;
      g.appendChild(t);
    }
  } else if (a.shape === 'line') {
    const d = lineString(a.coords, project);
    const p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', d); p.setAttribute('fill', 'none');
    p.setAttribute('stroke', a.stroke || '#444');
    p.setAttribute('stroke-width', a.strokeWidth ?? 1.5);
    if (a.strokeDash) p.setAttribute('stroke-dasharray', a.strokeDash);
    g.appendChild(p);
  }
  return g;
}
