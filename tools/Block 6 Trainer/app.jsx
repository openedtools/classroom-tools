/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;
const SCORE_UNIT = 100;

function formatScore(value) {
  return new Intl.NumberFormat("en-US").format(Number(value) || 0);
}

function useRollingNumber(target, enabled = true) {
  const [display, setDisplay] = useState(target);
  const [rolling, setRolling] = useState(false);
  const currentRef = useRef(target);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      currentRef.current = target;
      setDisplay(target);
      setRolling(false);
      return;
    }
    const from = currentRef.current;
    if (from === target) return;

    window.cancelAnimationFrame(frameRef.current);
    setRolling(true);
    const delta = target - from;
    const duration = Math.min(1200, 420 + Math.abs(delta) * 0.02);
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const wobble = Math.sin(t * 12) * Math.min(24, Math.abs(delta) * 0.01);
      const next = Math.round(from + (delta * eased) + (delta >= 0 ? wobble : -wobble));
      currentRef.current = next;
      setDisplay(next);
      if (t < 1) {
        frameRef.current = window.requestAnimationFrame(tick);
      } else {
        currentRef.current = target;
        setDisplay(target);
        setRolling(false);
      }
    };

    frameRef.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameRef.current);
  }, [target, enabled]);

  return { display, rolling };
}

// ──────────────────────────────────────────────────────────────────────────
// DATA LOADING
// ──────────────────────────────────────────────────────────────────────────

const DATA_BASE = "../intel-scenario-trainer/scenarios/block-6-operation-iron-anvil";
async function loadScenarioData() {
  const fetchJson = async (path, label) => {
    const response = await fetch(path, { cache: "reload" });
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch (err) {
      console.error(`loadScenarioData parse failed for ${label} ${JSON.stringify({
        status: response.status,
        url: response.url,
        preview: text.slice(0, 1200),
      })}`);
      throw err;
    }
  };
  const [scenario, phases, objectives, actors, glossary] = await Promise.all([
    fetchJson(`${DATA_BASE}/scenario.json`, "scenario.json"),
    fetchJson(`${DATA_BASE}/phases-v2.json`, "phases-v2.json"),
    fetchJson(`${DATA_BASE}/objectives.json`, "objectives.json"),
    fetchJson(`${DATA_BASE}/actors.json`, "actors.json"),
    fetchJson(`${DATA_BASE}/glossary.json`, "glossary.json"),
  ]);
  return { scenario, phases, objectives, actors, glossary };
}

// ──────────────────────────────────────────────────────────────────────────
// ADAPTERS  (engine shapes → design shapes)
// ──────────────────────────────────────────────────────────────────────────

// Blank canvas: leave these empty so adaptPhases() falls back to the
// shortLabel and title from phases-v2.json.  Fill in custom labels here
// only if you need to override the JSON values.
const PHASE_SHORT = [];
const PHASE_LONG  = [];

function adaptPhases(raw) {
  return raw.map((p, i) => ({
    id:    p.id,
    num:   String(p.sequence).padStart(2, "0"),
    short: PHASE_SHORT[i] ?? p.shortLabel.slice(0, 3).toUpperCase(),
    long:  PHASE_LONG[i]  ?? p.title.toUpperCase(),
  }));
}

const FAMILY_TO_DOMAIN = {
  GEOINT: "GEO", EMS: "EMS", RADAR: "RAD", IR: "IR",
  Cyber:  "CYB", IO:  "IO",  ISR:   "ISR", Space: "SPC",
};

function adaptObjectives(raw) {
  const counters = {};
  return raw.map(o => {
    const domain = FAMILY_TO_DOMAIN[o.family] ?? o.family;
    counters[domain] = (counters[domain] ?? 0) + 1;
    const lessonNum = o.lesson.match(/^(\d+\.\d+)/)?.[1] ?? "0.0";
    const majorNum  = lessonNum.split(".")[0];
    const code = `${majorNum}.${String(counters[domain]).padStart(2, "0")}`;
    return { domain, code, label: o.title, state: 0 };
  });
}

function adaptActors(raw) {
  return raw
    .filter(a => a.posture != null)
    .map(a => ({
      code:    a.code,
      name:    a.displayName.toUpperCase(),
      posture: a.posture,
      stance:  a.stance,
      color:   a.color,
      tags:    a.tags,
      desc:    a.summary,
    }));
}

function adaptGlossary(raw) {
  return (raw || []).map(entry => ({
    term: entry.term,
    def: entry.def,
    aliases: entry.aliases || [],
  }));
}

// ──────────────────────────────────────────────────────────────────────────
// DATA HOOK
// ──────────────────────────────────────────────────────────────────────────

function useScenarioData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    loadScenarioData()
      .then(raw => setData({
        phases:       adaptPhases(raw.phases),
        objectives:   adaptObjectives(raw.objectives),
        actors:       adaptActors(raw.actors),
        glossary:     adaptGlossary(raw.glossary),
        pirText:      raw.scenario.commanderPIR,
        pirIssuedBy:  raw.scenario.pirIssuedBy  ?? "COALITION J2",
        pirIssuedDTG: raw.scenario.pirIssuedDTG ?? "",
        situationText: raw.scenario.situationText ?? [],
      }))
      .catch(err => {
        console.error("loadScenarioData failed", err);
        setError(err);
      });
  }, []);
  return { data, error };
}

// ──────────────────────────────────────────────────────────────────────────
// STATIC / UX COPY  (describes the UI, not the scenario)
// ──────────────────────────────────────────────────────────────────────────

const HOW_STEPS = [
  { n: "01", title: "READ THE BRIEF",       body: "Each phase opens with a 2-min intel report describing what is happening in that domain." },
  { n: "02", title: "REVIEW EVIDENCE",      body: "Click any evidence card to expand the full report detail before answering." },
  { n: "03", title: "COMPLETE ACTIVITIES",  body: "Each phase has 2–5 structured tasks: matching, sequencing, classifying, ranking, decision-making." },
  { n: "04", title: "RECEIVE FEEDBACK",     body: "Submit each task to see immediate feedback, including why the correct answer matters for this scenario." },
  { n: "05", title: "TRACK COVERAGE",       body: "Track your block objective progress. Filled marker means demonstrated." },
  { n: "06", title: "SYNTHESIZE",           body: "The final phase fuses all domains into a structured assessment for the commander PIR." },
];

// ──────────────────────────────────────────────────────────────────────────
// PRIMITIVES
// ──────────────────────────────────────────────────────────────────────────

const StateGlyph = ({ state }) => {
  // 0 = empty, 1 = half, 2 = full
  if (state === 2) return <span className="glyph glyph-full">●</span>;
  if (state === 1) return <span className="glyph glyph-half">◐</span>;
  return <span className="glyph glyph-empty">○</span>;
};

const Corners = () => (
  <>
    <span className="corner tl" />
    <span className="corner tr" />
    <span className="corner bl" />
    <span className="corner br" />
  </>
);

// ──────────────────────────────────────────────────────────────────────────
// TOP CHROME
// ──────────────────────────────────────────────────────────────────────────

function ClassificationBar({ level }) {
  const cls = level === "SECRET" ? "secret" : level === "CONFIDENTIAL" ? "conf" : "unclass";
  return (
    <div className={`class-bar ${cls}`}>
      <span>{level} // TRAINING USE ONLY // FICTIONAL SCENARIO ONLY</span>
    </div>
  );
}

function TopBar({ dtg, opName, opCode, status, instructor, onLockClick, onGlossary, onSources, onReset, teamName, scoreValue, scoreMax }) {
  const { display: rollingScore, rolling } = useRollingNumber(scoreValue, scoreValue > 0);
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="op-block">
          <div className="op-line">
            <span className="op-code">{opCode}</span>
            <span className="op-sep">/</span>
            <span className="op-name">OPERATION {opName}</span>
          </div>
          <div className="op-sub">BLOCK 6 APPLIED REVIEW · MULTI-DOMAIN SCENARIO TRAINER</div>
        </div>
      </div>
      <div className="topbar-right">
        {teamName && (
          <div className="team-pill">
            <span className="team-label">TEAM</span>
            <span className="team-value">{teamName}</span>
          </div>
        )}
        {scoreMax > 0 && (
          <div className={`score-pill ${rolling ? "rolling" : ""}`} aria-live="polite" aria-atomic="true">
            <span className="team-label">SCORE</span>
            <span className="score-value">{formatScore(rollingScore)}</span>
            <span className="score-sub">OF {formatScore(scoreMax)} POINTS</span>
          </div>
        )}
        <div className="dtg">
          <span className="dtg-label">DTG</span>
          <span className="dtg-value">{dtg}</span>
        </div>
        {status?.label && (
          <div className={`op-status status-${status.tone || "amber"}`}>
            <span className="status-dot" />
            <span className="status-text">{status.label}</span>
          </div>
        )}
        <button
          className={`iconbtn lockbtn ${instructor ? 'unlocked' : ''}`}
          title={instructor ? 'Instructor mode active — click to exit' : 'Instructor mode'}
          onClick={onLockClick}
        >
          <span className="lockbtn-glyph">{instructor ? '◈' : '⌬'}</span>
          <span className="lockbtn-text">{instructor ? 'INSTRUCTOR' : 'INSTRUCTOR'}</span>
        </button>
        <button className="iconbtn" title="Glossary" aria-label="Open glossary" onClick={onGlossary}>?</button>
        <button className="iconbtn" title="Sources &amp; References" aria-label="View sources and references" onClick={onSources}>§</button>
        <button className="iconbtn" title="Reset Exercise" aria-label="Reset exercise" onClick={onReset}>↺</button>
      </div>
    </header>
  );
}

function GlossaryModal({ open, terms, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const q = query.trim().toLowerCase();
  const filtered = terms.filter(entry => {
    if (!q) return true;
    const haystack = [entry.term, entry.def, ...(entry.aliases || [])].join(" ").toLowerCase();
    return haystack.includes(q);
  });

  return (
    <div className="modal-shade glossary-shade" onClick={onClose}>
      <div className="modal glossary-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head glossary-head">
          <span className="modal-tag">GLOSS</span>
          <span className="modal-title">SEARCHABLE GLOSSARY</span>
          <button className="modal-x" type="button" onClick={onClose}>×</button>
        </div>
        <div className="glossary-body">
          <div className="modal-lede">
            Search acronyms and technical terms used across Block 6. Terms are searchable by acronym, full name, or definition.
          </div>
          <div className="modal-field">
            <label className="field-label" htmlFor="glossary-search">SEARCH TERMS</label>
            <input
              id="glossary-search"
              className="field-input glossary-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type an acronym or term..."
              autoFocus
            />
          </div>
          <div className="glossary-meta">
            {filtered.length} of {terms.length} terms
          </div>
          <div className="glossary-list">
            {filtered.length > 0 ? filtered.map(entry => (
              <article className="glossary-item" key={entry.term}>
                <div className="glossary-term">{entry.term}</div>
                <div className="glossary-def">{entry.def}</div>
              </article>
            )) : (
              <div className="glossary-empty">No matching terms found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const SOURCES = [
  {
    section: "SCENARIO FRAMEWORK",
    items: [
      {
        name: "TRADOC ODIN Dateworld",
        detail: "US Army Training and Doctrine Command — Operational Environment and Threat Analysis Directorate (ODIN). Decisive Action Training Environment (DATE) fictional nation-states: Donovia, Gorgas, Atropia, Limaria, and Ariana. All countries, units, and political entities in this exercise are derived from this unclassified training construct.",
        url: "https://odin.t2com.army.mil/DATEWORLD",
        urlLabel: "odin.t2com.army.mil/DATEWORLD",
      },
      {
        name: "TRADOC Pamphlet 525-3-1",
        detail: "The U.S. Army in Multi-Domain Operations 2028. Headquarters, US Army Training and Doctrine Command (Dec 2018). Unclassified concept document establishing the Multi-Domain Operations (MDO) framework used throughout this exercise.",
      },
    ],
  },
  {
    section: "INTELLIGENCE DOCTRINE",
    items: [
      { name: "JP 2-0 — Joint Intelligence", detail: "Joint Chiefs of Staff (01 Oct 2013). Defines the joint intelligence enterprise, collection disciplines (GEOINT, SIGINT, HUMINT, MASINT, OSINT), all-source analysis, and the PIR/IR process used throughout this exercise." },
      { name: "FM 2-0 — Intelligence", detail: "Headquarters, Department of the Army (06 Jul 2018). Army intelligence doctrine covering collection management and ISR operations." },
      { name: "ADP 2-0 — Intelligence", detail: "Headquarters, Department of the Army (Jul 2019). Foundational Army doctrine defining intelligence principles and the commander's critical information requirements (CCIR) process." },
      { name: "ATP 2-01 — Planning Requirements and Assessing Collection", detail: "Headquarters, Department of the Army. ISR tasking and collection management procedures underpinning the objective coverage framework." },
    ],
  },
  {
    section: "GEOSPATIAL INTELLIGENCE",
    items: [
      { name: "GEOINT Basic Doctrine Publication 1-0 (BDP 1-0)", detail: "National Geospatial-Intelligence Agency (NGA). Unclassified foundational doctrine covering imagery intelligence (IMINT), full-motion video (FMV), wide-area motion imagery (WAMI), and synthetic aperture radar (SAR) — all referenced in imagery injects." },
    ],
  },
  {
    section: "ELECTROMAGNETIC SPECTRUM & RADAR",
    items: [
      { name: "JP 3-85 — Joint Electromagnetic Spectrum Operations", detail: "Joint Chiefs of Staff (22 May 2020). Defines JEMSO, electronic warfare (EW), electronic attack/protection/support, and spectrum management used in ELINT and radar injects." },
      { name: "FM 3-12 — Cyberspace and Electronic Warfare Operations", detail: "Headquarters, Department of the Army (11 Apr 2017). Army doctrine for integrated cyberspace and EW operations including GNSS jamming, IADS, and counter-UAS content." },
    ],
  },
  {
    section: "CYBERSPACE OPERATIONS",
    items: [
      { name: "JP 3-12 — Cyberspace Operations", detail: "Joint Chiefs of Staff (08 Jun 2018). Joint doctrine for offensive cyberspace operations (OCO), defensive cyberspace operations (DCO), and the cyber threat landscape framing adversarial APT activity in this exercise." },
      { name: "Cyber Kill Chain® Framework", detail: "Hutchins, E.M., Cloppert, M.J., & Amin, R.M. (2011). Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains. Lockheed Martin Corporation. Publicly available white paper used to structure cyber inject analysis tasks." },
      { name: "MITRE ATT&CK® Framework", detail: "MITRE Corporation. Publicly available knowledge base of adversary tactics, techniques, and procedures (TTPs) used to categorize threat actor behavior in cyber injects.", url: "https://attack.mitre.org", urlLabel: "attack.mitre.org" },
    ],
  },
  {
    section: "INFORMATION OPERATIONS",
    items: [
      { name: "JP 3-13 — Information Operations", detail: "Joint Chiefs of Staff (20 Nov 2014). Defines IO core capabilities including military deception (MILDEC), military information support operations (MISO), OPSEC, and the information environment." },
      { name: "FM 3-53 — Military Information Support Operations", detail: "Headquarters, Department of the Army (03 Jan 2013). MISO planning and execution doctrine informing disinformation and social media narrative analysis tasks." },
    ],
  },
  {
    section: "SPACE & INFRARED OPERATIONS",
    items: [
      { name: "JP 3-14 — Space Operations", detail: "Joint Chiefs of Staff (10 Apr 2018, Change 1 — 26 Oct 2020). Covers space control, ISR from space, satellite communications, positioning/navigation/timing (PNT), and space situational awareness referenced in space-domain injects." },
      { name: "Infrared & Electro-Optical Systems", detail: "DoD unclassified publications on forward-looking infrared (FLIR), infrared search and track (IRST), space-based infrared systems (SBIRS), and EO collection principles. Content is based on publicly available system characteristics only." },
    ],
  },
];

function SourcesModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-shade sources-shade" onClick={onClose}>
      <div className="modal sources-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <span className="modal-tag">SRC</span>
          <span className="modal-title">SOURCES &amp; REFERENCES</span>
          <button className="modal-x" type="button" onClick={onClose}>×</button>
        </div>
        <div className="sources-body">
          <div className="modal-lede">
            All content is based on a completely fictional scenario using notional countries
            developed by US Army TRADOC for educational purposes only. No classified, CUI, or
            FOUO material was used in this exercise. All sources listed below are publicly
            available and unclassified.
          </div>
          {SOURCES.map(({ section, items }) => (
            <div className="sources-section" key={section}>
              <div className="sources-section-title">{section}</div>
              {items.map(({ name, detail, url, urlLabel }) => (
                <div className="source-item" key={name}>
                  <div className="source-name">{name}</div>
                  <div className="source-detail">{detail}</div>
                  {url && (
                    <a className="source-url" href={url} target="_blank" rel="noopener noreferrer">
                      {urlLabel || url}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-solid" onClick={onClose}>CLOSE</button>
        </div>
      </div>
    </div>
  );
}

function PhaseNav({ active, phases, onChange, doneIds = [] }) {
  return (
    <nav className="phasenav">
      <div className="phasenav-rail" />
      {phases.map((p, i) => {
        const isActive = p.id === active;
        const idx = phases.findIndex(x => x.id === active);
        const isPast = i < idx;
        const isDone = doneIds.includes(p.id);
        return (
          <button
            key={p.id}
            className={`phase ${isActive ? "active" : ""} ${isPast ? "past" : ""} ${isDone ? "done" : ""}`}
            onClick={() => onChange(p.id)}
          >
            <span className="phase-num">{p.num}</span>
            <span className="phase-name">{p.long}</span>
            <span className="phase-tick" />
          </button>
        );
      })}
    </nav>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// SIDEBAR
// ──────────────────────────────────────────────────────────────────────────

function ObjectiveSidebar({ objectives }) {
  return null;
  const total = objectives.length;
  const done = objectives.filter(o => o.state === 2).length;
  const partial = objectives.filter(o => o.state === 1).length;

  // group by domain
  const groups = {};
  objectives.forEach(o => {
    if (!groups[o.domain]) groups[o.domain] = [];
    groups[o.domain].push(o);
  });

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="side-title">OBJECTIVE COVERAGE</div>
        <div className="side-count">
          <span className="num-done">{done}</span>
          <span className="num-slash">/</span>
          <span className="num-total">{total}</span>
        </div>
      </div>

      <div className="cov-bar">
        <div className="cov-bar-fill cov-done" style={{ width: `${(done/total)*100}%` }} />
        <div className="cov-bar-fill cov-partial" style={{ width: `${(partial/total)*100}%`, left: `${(done/total)*100}%` }} />
      </div>

      <div className="legend">
        <span className="legend-item"><StateGlyph state={0}/> NOT YET</span>
        <span className="legend-item"><StateGlyph state={1}/> PRACTICED</span>
        <span className="legend-item"><StateGlyph state={2}/> DEMONSTRATED</span>
      </div>

      <div className="obj-list">
        {Object.entries(groups).map(([domain, items]) => (
          <div className="obj-group" key={domain}>
            <div className="obj-domain">
              <span className="dom-tag">{domain}</span>
              <span className="dom-rule" />
              <span className="dom-count">{items.filter(i=>i.state===2).length}/{items.length}</span>
            </div>
            {items.map(o => (
              <div className={`obj-row state-${o.state}`} key={o.code}>
                <StateGlyph state={o.state} />
                <span className="obj-label">{o.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <span className="save-dot" />
        <span className="save-text">AUTOSAVED 06:16Z · LOCAL</span>
      </div>
    </aside>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// MAIN — MAP, ACTORS, BRIEF
// ──────────────────────────────────────────────────────────────────────────

function MissionBrief() {
  return (
    <section className="brief">
      <div className="brief-meta">
        <span className="meta-chip">INTSUM</span>
        <span className="meta-chip muted">SER 047-26</span>
        <span className="meta-chip muted">SRC // ALL-SOURCE</span>
      </div>
      <h1 className="brief-title">
        <span className="brief-pre">MISSION BRIEF //</span>
      </h1>
      <div className="brief-sub">
        Coalition Air Operations Center · You are a newly arrived international Liaison Officer. Learn how the AOC is organized, what each division produces, and who holds authority — before the first ATO executes.
      </div>
    </section>
  );
}

function MapPanel({ showReticle, showGrid, instructor, pin, onPinChange }) {
  const safePin = pin && typeof pin.x === "number" ? { ...pin, label: pin.label || "ATROPIAN AB · CAOC" } : { x: 66.5, y: 83.6, label: "ATROPIAN AB · CAOC" };
  const wrapRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [editingLabel, setEditingLabel] = useState(false);

  const onPointerDown = (e) => {
    if (!instructor) return;
    e.preventDefault();
    setDragging(true);
    const move = (ev) => {
      const r = wrapRef.current.getBoundingClientRect();
      const x = Math.max(2, Math.min(98, ((ev.clientX - r.left) / r.width) * 100));
      const y = Math.max(2, Math.min(98, ((ev.clientY - r.top) / r.height) * 100));
      onPinChange({ ...safePin, x, y });
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    move(e);
  };

  return (
    <section className="panel map-panel">
      <header className="panel-head">
        <span className="panel-tag">AOR</span>
        <span className="panel-title">AREA OF RESPONSIBILITY · EURASIA CENTRAL</span>
        <span className="panel-meta">SCALE 1:18M · WGS84</span>
      </header>
      <div className={`map-wrap ${instructor ? 'instructor' : ''} ${dragging ? 'dragging' : ''}`} ref={wrapRef}>
        {showGrid && <div className="map-grid" />}
        <img src="assets/Eurasia_map_small.png" alt="Eurasia Region Map" className="map-img" draggable={false} />
        {instructor && (
          <div className="map-instructor-hint">
            <span className="hint-dot" /> INSTRUCTOR · DRAG PIN · CLICK LABEL TO RENAME
          </div>
        )}
        {showReticle && (
          <div
            className={`reticle ${instructor ? 'editable' : ''}`}
            style={{ left: `${safePin.x}%`, top: `${safePin.y}%` }}
            onPointerDown={onPointerDown}
          >
            <div className="ret-ring" />
            <div className="ret-cross" />
            <div className="ret-label" onPointerDown={(e) => e.stopPropagation()}>
              {editingLabel && instructor ? (
                <input
                  className="ret-name-input"
                  autoFocus
                  value={safePin.label}
                  onChange={(e) => onPinChange({ ...safePin, label: e.target.value })}
                  onBlur={() => setEditingLabel(false)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === 'Escape') setEditingLabel(false); }}
                />
              ) : (
                <span
                  className="ret-name"
                  onClick={() => instructor && setEditingLabel(true)}
                  title={instructor ? 'Click to rename' : ''}
                >{safePin.label}</span>
              )}
              <span className="ret-coord">{(() => {
                const { lat, lon } = pctToLatLon(safePin.x, safePin.y);
                const ns = lat >= 0 ? "N" : "S";
                const ew = lon >= 0 ? "E" : "W";
                return `${Math.abs(lat).toFixed(1)}°${ns} · ${Math.abs(lon).toFixed(1)}°${ew}`;
              })()}</span>
            </div>
          </div>
        )}
        <div className="map-coords map-coords-x">
          {["20°E","30°E","40°E","50°E","60°E"].map(c => <span key={c}>{c}</span>)}
        </div>
        <div className="map-coords map-coords-y">
          {["60°N","50°N","40°N","30°N"].map(c => <span key={c}>{c}</span>)}
        </div>
        <Corners />
      </div>
      <footer className="panel-foot">
        <span>SRC: ESRI · TOMTOM · GARMIN · FAO · NOAA · USGS</span>
        <span className="foot-pull">STATIC MAP · OPERATIONAL OVERLAY</span>
      </footer>
    </section>
  );
}

function ActorsPanel({ actors }) {
  return (
    <section className="panel actors">
      <header className="panel-head">
        <span className="panel-tag">ORBAT</span>
        <span className="panel-title">ACTORS · ORDER OF BATTLE</span>
        <span className="panel-meta">{actors.length} ENTITIES</span>
      </header>
      <div className="actor-list">
        {actors.map(a => (
          <div key={a.code} className={`actor faction-${a.color}`}>
            <div className="actor-row">
              <div className="actor-glyph">
                <span className="actor-dot" />
                <span className="actor-ring" />
              </div>
              <div className="actor-main">
                <div className="actor-top">
                  <span className="actor-name">{a.name}</span>
                  <span className="actor-code">{a.code}</span>
                </div>
                <div className="actor-meta">
                  <span className={`posture posture-${a.color}`}>{a.posture}</span>
                  <span className="stance">· {a.stance}</span>
                </div>
              </div>
            </div>
            <div className="actor-desc">{a.desc}</div>
            <div className="actor-tags">
              {a.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PIRPanel({ pirText, pirIssuedBy, pirIssuedDTG }) {
  return (
    <section className="panel pir">
      <header className="panel-head pir-head">
        <span className="panel-tag flag-amber">PIR</span>
        <span className="panel-title">COMMANDER'S PRIORITY INTELLIGENCE REQUIREMENT</span>
      </header>
      <div className="pir-body">
        <span className="quote-mark">"</span>
        <p className="pir-text">{pirText}</p>
        <div className="pir-foot">
          <span className="pir-issued">ISSUED · {pirIssuedBy} · {pirIssuedDTG}</span>
        </div>
      </div>
    </section>
  );
}

function SituationPanel({ situationText, evidenceCount, activityCount }) {
  return (
    <section className="panel situation">
      <header className="panel-head">
        <span className="panel-tag">SITREP</span>
        <span className="panel-title">SITUATION</span>
        <span className="panel-meta">EFFECTIVE 0500Z 12 MAY 26</span>
      </header>
      <div className="sit-body">
        {situationText.map((html, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
        <div className="sit-meta">
          <div><span className="kv-k">DOMAINS</span><span className="kv-v">6</span></div>
          <div><span className="kv-k">EVIDENCE</span><span className="kv-v">{evidenceCount} CARDS</span></div>
          <div><span className="kv-k">ACTIVITIES</span><span className="kv-v">{activityCount} TASKS</span></div>
          <div><span className="kv-k">EST. TIME</span><span className="kv-v">45–60 MIN</span></div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="panel howto">
      <header className="panel-head">
        <span className="panel-tag">SOP</span>
        <span className="panel-title">HOW TO RUN THIS EXERCISE</span>
        <span className="panel-meta">6 STEPS</span>
      </header>
      <ol className="steps">
        {HOW_STEPS.map(s => (
          <li className="step" key={s.n}>
            <div className="step-n">{s.n}</div>
            <div className="step-body">
              <div className="step-title">{s.title}</div>
              <div className="step-text">{s.body}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function BeginBar({ onBegin, nextPhaseLabel }) {
  const label = nextPhaseLabel ? nextPhaseLabel.toUpperCase() : "PHASE 01";
  return (
    <div className="begin-bar">
      <div className="begin-meta">
        <div className="bm-row">
          <span className="bm-k">NEXT</span>
          <span className="bm-v">PHASE 01 · {label}</span>
        </div>
      </div>
      <button className="begin-btn" onClick={onBegin}>
        <span className="bb-tag">EXEC</span>
        <span className="bb-text">BEGIN PHASE 01 — {label}</span>
        <span className="bb-arrow">→</span>
      </button>
    </div>
  );
}

// ── Scenario data: blank-canvas trainer reads from window.ScenarioContent.
//    See phaseData.js for the config shape (opName, phaseIds, etc.).
const _sc  = window.ScenarioContent || {};
const _cfg = _sc.config || {};
const TRAINING_PHASES    = _sc.phases || {};
const RESTORED_PHASE_IDS = _cfg.phaseIds || ["phase-0-overview"];
const SESSION_KEY        = _cfg.sessionKey || "block6-student-session-v1";
const STUDENT_PASSWORD   = _cfg.studentPassword || "ChangeMe";
const INSTRUCTOR_KEY     = `${SESSION_KEY}-instructor`;
const PIN_KEY            = `${SESSION_KEY}-pin-v3`;

// PHASE_ALIASES lets legacy phase IDs redirect to the current canonical
// IDs (used when phase IDs are renamed mid-deployment to keep saved
// sessions working).  Empty for a fresh blank canvas — add entries here
// only if you rename a phase ID after students have started.
const PHASE_ALIASES = {};

function resolvePhaseId(phaseId) {
  return PHASE_ALIASES[phaseId] || phaseId;
}

function getPhaseContent(phaseId) {
  return TRAINING_PHASES[resolvePhaseId(phaseId)] || null;
}

function findTrainingActivity(activityId) {
  for (const phase of Object.values(TRAINING_PHASES)) {
    const found = phase.activities?.find(activity => activity.id === activityId);
    if (found) return found;
  }
  return null;
}

function phaseIsComplete(phaseId, responses) {
  const phase = getPhaseContent(phaseId);
  if (!phase || !phase.activities || !phase.activities.length) return false;
  return phase.activities.every(activity => responses[activity.id]?.submitted);
}

function makeDefaultSession() {
  return {
    ready: false,
    teamName: "",
    activePhase: "phase-0-overview",
    responses: {},
    objectiveStates: {},
    activityScores: {},
  };
}

function loadStudentSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return makeDefaultSession();
    const parsed = JSON.parse(raw);
    return { ...makeDefaultSession(), ...parsed };
  } catch {
    return makeDefaultSession();
  }
}

function saveStudentSession(session) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {}
}

function activityKey(activityId) {
  return activityId;
}

function emptyResponseFor(activity) {
  switch (activity.type) {
    case "classification":
      return { answers: {}, submitted: false, score: 0, correct: false };
    case "decision":
      return { selected: "", submitted: false, score: 0, correct: false };
    case "fillslot":
      return { slots: {}, submitted: false, score: 0, correct: false };
    case "matching":
      return { pairs: {}, pending: null, submitted: false, score: 0, correct: false };
    case "sequencing": {
      const ids = activity.correct || activity.items.map(item => item.id);
      return { order: seededShuffle([...ids], activity.id + ':init'), submitted: false, score: 0, correct: false };
    }
    case "ranking":
      return { ranks: {}, submitted: false, score: 0, correct: false };
    case "multiselect":
      return { selected: [], submitted: false, score: 0, correct: false };
    default:
      return { submitted: false, score: 0, correct: false };
  }
}

function initResponse(activity, responses) {
  const key = activityKey(activity.id);
  if (!responses[key]) return emptyResponseFor(activity);
  const current = responses[key];
  const fallback = emptyResponseFor(activity);
  return { ...fallback, ...current };
}

function scoreActivity(activity, response) {
  let score = 0;
  switch (activity.type) {
    case "classification": {
      activity.items.forEach(item => {
        if (response.answers && response.answers[item.id] === item.correct) score += 1;
      });
      break;
    }
    case "decision": {
      const selected = activity.options.find(option => option.id === response.selected);
      score = selected && selected.correct ? activity.points : 0;
      break;
    }
    case "fillslot": {
      activity.sentence.filter(part => part.type === "slot").forEach(slot => {
        if (response.slots && response.slots[slot.id] === slot.correct) score += 1;
      });
      break;
    }
    case "matching": {
      activity.items.forEach(item => {
        const target = activity.targets.find(t => t.correct === item.id);
        if (target && response.pairs && response.pairs[item.id] === target.id) score += 1;
      });
      break;
    }
    case "sequencing": {
      const correctOrder = activity.correct || [...activity.items].map(item => item.id);
      const matches = (response.order || []).filter((id, index) => id === correctOrder[index]).length;
      const pct = matches / correctOrder.length;
      if (matches === correctOrder.length) score = activity.points;
      else if (pct >= 0.8) score = Math.max(1, activity.points - 1);
      else if (pct >= 0.5) score = Math.floor(activity.points * 0.5);
      else score = 0;
      break;
    }
    case "ranking": {
      activity.items.forEach(item => {
        if (Number(response.ranks && response.ranks[item.id]) === Number(item.correct)) score += 1;
      });
      score = Math.min(score, activity.points);
      break;
    }
    case "multiselect": {
      activity.options.forEach(option => {
        if (option.correct && response.selected && response.selected.includes(option.id)) score += 1;
      });
      score = Math.min(score, activity.points);
      break;
    }
    default:
      score = 0;
  }
  score = Math.min(score, activity.points);
  return score * SCORE_UNIT;
}

function objectiveBoost(activity, submitted) {
  const ids = activity.objectiveIds || [];
  const state = submitted ? 2 : 1;
  return ids.reduce((acc, id) => {
    acc[id] = Math.max(acc[id] || 0, state);
    return acc;
  }, {});
}

function hashString(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededShuffle(items, seed) {
  const out = [...items];
  let s = hashString(seed) || 1;
  for (let i = out.length - 1; i > 0; i -= 1) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function labelForCategory(activity, id) {
  return activity.categories?.find(cat => cat.id === id)?.label || id || "Not selected";
}

function answerText(value) {
  return value ? String(value) : "Not selected";
}

function ordinal(n) {
  const num = Number(n);
  const suffix = (num % 100 >= 11 && num % 100 <= 13) ? "th" : ({ 1: "st", 2: "nd", 3: "rd" }[num % 10] || "th");
  return `${num}${suffix}`;
}

function buildReviewExplanation(activity, row, context = {}) {
  const { item, target, option, correctItem, selected, correct, slot } = context;
  if (row.explanation) return row.explanation;

  switch (activity.type) {
    case "classification":
      return `${row.correct} is the right category for this item.`;
    case "decision":
      return correct?.explanation || `The correct answer is ${row.correct}.`;
    case "fillslot":
      return `The blank should be ${row.correct}.`;
    case "matching": {
      const termText = item?.text || "this term";
      return `${termText} matches: ${row.correct}.`;
    }
    case "sequencing":
      return `${row.correct} belongs in position ${ordinal(context.position)}.`;
    case "ranking": {
      const itemText = item?.text || "this item";
      return `${itemText} belongs at rank ${row.correct}.`;
    }
    case "multiselect":
      return context.item.correct
        ? `This statement should be selected.`
        : `This statement should not be selected.`;
    default:
      return "";
  }
}

function reviewExplanationText(activity, row, context = {}) {
  if (row.explanation) return row.explanation;

  const base = buildReviewExplanation(activity, row, context).trim();

  if (row.ok) {
    return base;
  }

  const extraParts = [];
  const correct = row.correct && row.correct !== "No correct option defined" ? row.correct : "";

  switch (activity.type) {
    case "classification":
      extraParts.push("Think about what the item really is or does, not just what it mentions.");
      break;
    case "decision":
      break;
    case "fillslot":
      extraParts.push("Read the full sentence. The missing word must make the statement accurate.");
      break;
    case "matching":
      break;
    case "sequencing": {
      const correctIds = activity.correct || activity.items.map(item => item.id);
      const index = correctIds.indexOf(context.correctId);
      const prevItem = index > 0 ? activity.items.find(item => item.id === correctIds[index - 1]) : null;
      const nextItem = index >= 0 && index < correctIds.length - 1 ? activity.items.find(item => item.id === correctIds[index + 1]) : null;
      extraParts.push("This step has to sit in the order shown in the lesson.");
      if (prevItem && nextItem) {
        extraParts.push(`It comes after "${prevItem.text}" and before "${nextItem.text}".`);
      } else if (prevItem) {
        extraParts.push(`It comes after "${prevItem.text}".`);
      } else if (nextItem) {
        extraParts.push(`It comes before "${nextItem.text}".`);
      }
      break;
    }
    case "ranking":
      break;
    case "multiselect":
      extraParts.push(correct === "Should be selected"
        ? "This is one of the correct options."
        : "This option should not be selected.");
      break;
    default:
      break;
  }

  return [base, ...extraParts].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}

function activityReviewRows(activity, response) {
  const rows = [];
  switch (activity.type) {
    case "classification":
      activity.items.forEach(item => {
        const user = response.answers?.[item.id] || "";
        rows.push({
          label: item.text,
          user: labelForCategory(activity, user),
          correct: labelForCategory(activity, item.correct),
          ok: user === item.correct,
          explanation: reviewExplanationText(activity, {
            ok: user === item.correct,
            user: labelForCategory(activity, user),
            correct: labelForCategory(activity, item.correct),
            explanation: item.explanation || activity.feedback?.explanations?.[item.id],
          }, { label: item.text, correct: labelForCategory(activity, item.correct) }),
        });
      });
      break;
    case "decision": {
      const selected = activity.options.find(opt => opt.id === response.selected);
      const correct = activity.options.find(opt => opt.correct);
      rows.push({
        label: "Selected answer",
        user: selected ? selected.text : "Not selected",
        correct: correct ? correct.text : "No correct option defined",
        ok: Boolean(selected && selected.correct),
        explanation: reviewExplanationText(activity, {
          ok: Boolean(selected && selected.correct),
          user: selected ? selected.text : "Not selected",
          correct: correct ? correct.text : "No correct option defined",
          explanation: selected?.explanation || correct?.explanation,
        }, { selected, correct }),
      });
      break;
    }
    case "fillslot":
      activity.sentence.filter(part => part.type === "slot").forEach(slot => {
        const user = response.slots?.[slot.id] || "";
        rows.push({
          label: slot.id.replace(/^slot/, "Blank "),
          user: answerText(user),
          correct: answerText(slot.correct),
          ok: user === slot.correct,
          explanation: reviewExplanationText(activity, {
            ok: user === slot.correct,
            user: answerText(user),
            correct: answerText(slot.correct),
            explanation: slot.explanation,
          }, { slot }),
        });
      });
      break;
    case "matching":
      activity.items.forEach(item => {
        const correctTarget = activity.targets.find(target => target.correct === item.id);
        const userTargetId = response.pairs?.[item.id];
        const userTarget = activity.targets.find(target => target.id === userTargetId);
        rows.push({
          label: item.text,
          user: userTarget ? userTarget.text : "Not matched",
          correct: correctTarget ? correctTarget.text : "No correct target defined",
          ok: userTargetId === correctTarget?.id,
          explanation: reviewExplanationText(activity, {
            ok: userTargetId === correctTarget?.id,
            user: userTarget ? userTarget.text : "Not matched",
            correct: correctTarget ? correctTarget.text : "No correct target defined",
            explanation: item.explanation || correctTarget?.explanation,
          }, { item, target: correctTarget }),
        });
      });
      break;
    case "sequencing": {
      const correctOrder = activity.correct || activity.items.map(item => item.id);
      const currentOrder = response.order || [];
      correctOrder.forEach((id, index) => {
        const correctItem = activity.items.find(item => item.id === id);
        const userItem = activity.items.find(item => item.id === currentOrder[index]);
        rows.push({
          label: `Position ${index + 1}`,
          user: userItem ? userItem.text : "Missing",
          correct: correctItem ? correctItem.text : "Missing",
          ok: currentOrder[index] === id,
          explanation: reviewExplanationText(activity, {
            ok: currentOrder[index] === id,
            user: userItem ? userItem.text : "Missing",
            correct: correctItem ? correctItem.text : "Missing",
            explanation: correctItem?.explanation,
          }, { position: index + 1, correctId: id }),
        });
      });
      break;
    }
    case "ranking":
      activity.items.forEach(item => {
        rows.push({
          label: item.text,
          user: answerText(response.ranks?.[item.id]),
          correct: String(item.correct),
          ok: Number(response.ranks?.[item.id]) === Number(item.correct),
          explanation: reviewExplanationText(activity, {
            ok: Number(response.ranks?.[item.id]) === Number(item.correct),
            user: answerText(response.ranks?.[item.id]),
            correct: String(item.correct),
            explanation: item.explanation,
          }, { item }),
        });
      });
      break;
    case "multiselect": {
      const selected = new Set(response.selected || []);
      activity.options.forEach(option => {
        rows.push({
          label: option.text,
          user: selected.has(option.id) ? "Selected" : "Not selected",
          correct: option.correct ? "Should be selected" : "Should not be selected",
          ok: selected.has(option.id) === option.correct,
          explanation: reviewExplanationText(activity, {
            ok: selected.has(option.id) === option.correct,
            user: selected.has(option.id) ? "Selected" : "Not selected",
            correct: option.correct ? "Should be selected" : "Should not be selected",
            explanation: option.explanation,
          }, { item: option }),
        });
      });
      break;
    }
    default:
      break;
  }
  return rows;
}

function objectiveStateLabel(state) {
  if (state >= 2) return "Demonstrated";
  if (state === 1) return "Practiced";
  return "Not yet";
}

function sanitizeFileStem(text) {
  return (text || "team")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "team";
}

function buildCompletionReportMarkdown({ teamName, dtg, scoreText, pirText, phases, responses, objectives }) {
  const lines = [];
  lines.push(`# Operation ${_cfg.opName || "[TBD]"} - Commander Review Report`);
  lines.push("");
  lines.push(`- Team: ${teamName || "Anonymous Team"}`);
  lines.push(`- DTG: ${dtg}`);
  lines.push(`- Score: ${scoreText}`);
  lines.push(`- Status: All restored activities complete`);
  lines.push("");
  lines.push("## Commander PIR");
  lines.push(pirText || "No PIR text available.");
  lines.push("");
  lines.push("## Phase Summary");

  phases.forEach(phase => {
    const content = getPhaseContent(phase.id);
    const activities = content?.activities || [];
    if (!activities.length) return;
    const phaseScore = activities.reduce((sum, activity) => sum + Number(responses[activity.id]?.score || 0), 0);
    const phasePossible = activities.reduce((sum, activity) => sum + Number(activity.points || 0) * SCORE_UNIT, 0);
    lines.push("");
    lines.push(`### ${content.title}`);
    lines.push(`- Score: ${formatScore(phaseScore)}/${formatScore(phasePossible)}`);
    activities.forEach(activity => {
      const response = responses[activity.id] || emptyResponseFor(activity);
      const rows = activityReviewRows(activity, response);
      lines.push(`- ${activity.typeLabel || activity.type}: ${response.submitted ? `${formatScore(response.score)}/${formatScore(activity.points * SCORE_UNIT)}` : `0/${formatScore(activity.points * SCORE_UNIT)}`}`);
      rows.forEach(row => {
        lines.push(`  - ${row.label}: ${row.user} (correct: ${row.correct})${row.ok ? "" : " - review recommended"}`);
      });
    });
  });

  if (objectives?.length) {
    lines.push("");
    lines.push("## Objective Coverage");
    objectives.forEach(obj => {
      lines.push(`- ${obj.code} ${obj.label}: ${objectiveStateLabel(obj.state)}`);
    });
  }

  lines.push("");
  lines.push("## Commander Note");
  lines.push("This report captures the final synthesis product for instructor review before the test.");
  return lines.join("\n");
}

function downloadMarkdownReport(filename, content) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function StudentAccessModal({ open, onSubmit, error, onSources }) {
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (open) {
      setTeamName("");
      setPassword("");
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-shade student-shade">
      <form
        className="modal student-modal"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ teamName, password });
        }}
      >
        <div className="modal-head">
          <span className="modal-tag">ACCESS</span>
          <span className="modal-title">WELCOME TO OPERATION {(_cfg.opName || "[TBD]").toUpperCase()}</span>
        </div>
        <div className="modal-body">
          <div className="modal-lede">
            Enter your team name and the access code to begin the trainer.
            The UI will keep your score, phase progress, and objective coverage.
          </div>
          <label className="modal-field">
            <span className="field-label">TEAM NAME</span>
            <input
              className="field-input"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Team Falcon"
              autoFocus
            />
          </label>
          <label className="modal-field">
            <span className="field-label">ACCESS CODE</span>
            <input
              className={`field-input ${error ? "err" : ""}`}
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter access code"
            />
          </label>
          {error && <span className="field-err">INVALID ACCESS CODE</span>}
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-ghost" onClick={onSources}>SOURCES</button>
          <button type="submit" className="btn-solid">BEGIN TRAINING</button>
        </div>
      </form>
    </div>
  );
}

function EvidenceCard({ card }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className={`evidence-card ${open ? "open" : ""}`}
      onClick={() => setOpen(v => !v)}
      type="button"
      aria-expanded={open}
    >
      <div className="evidence-head">
        <div className="evidence-head-left">
          <span className="evidence-tag">EVIDENCE</span>
          <span className="evidence-title">{card.title}</span>
        </div>
        <span className="evidence-toggle">{open ? "COLLAPSE" : "EXPAND"} ▾</span>
      </div>
      <div className="evidence-summary">{card.summary}</div>
      <div className="evidence-hint">{open ? "Click to hide details" : "Click to expand details"}</div>
      {open && <div className="evidence-detail">{card.detail}</div>}
    </button>
  );
}

function ActivityHeader({ activity }) {
  return (
    <div className="activity-head">
      <div>
        <div className="activity-kicker">{activity.typeLabel}</div>
        <h3 className="activity-title">{activity.instruction}</h3>
      </div>
      <div className="activity-points">{formatScore(activity.points * SCORE_UNIT)} pts</div>
    </div>
  );
}

function ActivityFeedback({ activity, response }) {
  if (!response?.submitted) return null;
  const correct = response.score >= activity.points * SCORE_UNIT;
  const rows = activityReviewRows(activity, response);
  return (
    <div className={`feedback-box ${correct ? "good" : "bad"}`}>
      <div className="feedback-title">{correct ? "Correct" : "Review"}</div>
      <div className="feedback-copy">{correct ? activity.feedback.correct : activity.feedback.incorrect}</div>
      {rows.length > 0 && (
        <div className="feedback-review">
          {rows.map((row, index) => (
            <div className={`feedback-row ${row.ok ? "row-good" : "row-bad"}`} key={`${activity.id}-${index}`}>
              <div className="feedback-row-label">{row.label}</div>
              <div className="feedback-row-values">
                {row.ok ? (
                  <span className="feedback-chip chip-good">Correct — {row.correct}</span>
                ) : (
                  <>
                    <span className="feedback-chip chip-bad">Your answer: {row.user}</span>
                    <span className="feedback-chip chip-good">Correct answer: {row.correct}</span>
                  </>
                )}
              </div>
              {row.explanation && (
                <div className="feedback-row-expl"><strong>Explanation:</strong> {row.explanation}</div>
              )}
            </div>
          ))}
        </div>
      )}
      {(activity.feedback.whyMatters || activity.feedback.evidenceClue) && (
        <div className="feedback-context expanded">
          <div className="feedback-context-label">Context</div>
          {activity.feedback.whyMatters && (
            <div className="feedback-copy subtle">
              <strong>Why this matters:</strong> {activity.feedback.whyMatters}
            </div>
          )}
          {activity.feedback.evidenceClue && (
            <div className="feedback-copy subtle">
              <strong>Where to find it:</strong> {activity.feedback.evidenceClue}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ActivityCard({
  activity,
  response,
  onChange,
  onSubmit,
}) {
  const submitted = response?.submitted;
  const locked = Boolean(submitted);
  const matchingItems = activity.type === "matching" ? seededShuffle(activity.items || [], `${activity.id}:items`) : activity.items || [];
  const matchingTargets = activity.type === "matching" ? seededShuffle(activity.targets || [], `${activity.id}:targets`) : activity.targets || [];
  const classificationCategories = activity.type === "classification" ? seededShuffle(activity.categories || [], `${activity.id}:categories`) : activity.categories || [];
  const rankingItems = activity.type === "ranking" ? seededShuffle(activity.items || [], `${activity.id}:ranking`) : activity.items || [];

  return (
    <section className={`activity-card panel ${locked ? "submitted" : ""}`}>
      <ActivityHeader activity={activity} />
      <div className="activity-body">
        {activity.type === "classification" && (
          <div className="classification-grid">
            {activity.items.map(item => (
              <label className={`classify-row ${submitted ? (response.answers?.[item.id] === item.correct ? "row-good" : "row-bad") : ""}`} key={item.id}>
                <span className="classify-text">{item.text}</span>
                <select
                  className="classify-select"
                  value={response.answers?.[item.id] || ""}
                  onChange={(e) => onChange("classification", activity.id, { itemId: item.id, value: e.target.value })}
                  disabled={locked}
                >
                  <option value="">Choose...</option>
                  {classificationCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        )}

        {activity.type === "decision" && (
          <div className="decision-grid">
            {activity.options.map(option => (
              <label
                className={`decision-option ${
                  response.selected === option.id
                    ? submitted
                      ? option.correct
                        ? "selected selected-good"
                        : "selected selected-bad"
                      : "selected"
                    : submitted && option.correct
                      ? "correct-answer"
                      : ""
                }`}
                key={option.id}
              >
                <input
                  type="radio"
                  name={activity.id}
                  checked={response.selected === option.id}
                  onChange={() => onChange("decision", activity.id, option.id)}
                  disabled={locked}
                />
                <span>{option.text}</span>
              </label>
            ))}
          </div>
        )}

        {activity.type === "fillslot" && (
          <div className="fill-sentence">
            {activity.sentence.map((part, index) => {
              if (part.type === "text") return <span key={index}>{part.text}</span>;
              const slotOptions = seededShuffle(part.options || [], `${activity.id}:${part.id}:options`);
              return (
                <select
                  key={part.id}
                  className="slot-select"
                  value={response.slots?.[part.id] || ""}
                  onChange={(e) => onChange("fillslot", activity.id, { slotId: part.id, value: e.target.value })}
                  disabled={locked}
                >
                  <option value="">Choose...</option>
                  {slotOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              );
            })}
          </div>
        )}

        {activity.type === "matching" && (
          <div className="matching-grid">
            <div className="match-status match-status-top">
              {response.pending
                ? `Selected term: ${matchingItems.find(item => item.id === response.pending)?.text || response.pending}. Click the matching description.`
                : "Click a term on the left, then choose the matching description."}
            </div>
            <div className="match-column">
              <div className="match-label">Terms</div>
              {matchingItems.map(item => (
                <button
                  key={item.id}
                  type="button"
                  className={`match-term ${response.pending === item.id ? "selected" : ""}`}
                  onClick={() => onChange("matchPick", activity.id, item.id)}
                  disabled={locked}
                >
                  {item.text}
                </button>
              ))}
            </div>
            <div className="match-column">
              <div className="match-label">Descriptions</div>
              {matchingTargets.map(target => {
                const paired = response.pairs && Object.entries(response.pairs).find(([, value]) => value === target.id);
                const pairedText = paired ? matchingItems.find(item => item.id === paired[0])?.text : null;
                return (
                  <button
                    key={target.id}
                    type="button"
                    className={`match-target ${pairedText ? "paired" : ""}`}
                    onClick={() => onChange("matchDrop", activity.id, target.id)}
                    disabled={locked || !response.pending}
                  >
                    <span className="match-target-text">{target.text}</span>
                    {pairedText && <span className="slot-chip">Matched: {pairedText}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {activity.type === "ranking" && (
          <div className="ranking-grid">
            {rankingItems.map(item => (
              <label className="rank-row" key={item.id}>
                <span className="rank-text">{item.text}</span>
                <select
                  className="rank-select"
                  value={response.ranks?.[item.id] || ""}
                  onChange={(e) => onChange("rank", activity.id, { itemId: item.id, value: e.target.value })}
                  disabled={locked}
                >
                  <option value="">Rank...</option>
                  {activity.items.map((_, idx) => (
                    <option key={idx + 1} value={String(idx + 1)}>{idx + 1}</option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        )}

        {activity.type === "sequencing" && (
          <ol className="seq-list">
            {response.order?.map((id, index) => {
              const item = activity.items.find(entry => entry.id === id);
              if (!item) return null;
              return (
                <li key={id} className="seq-item">
                  <span className="seq-num">{index + 1}</span>
                  <span className="seq-text">{item.text}</span>
                  {!locked && (
                    <div className="seq-btns">
                      <button type="button" className="seq-btn" onClick={() => onChange("seqUp", activity.id, index)} disabled={index === 0}>▲</button>
                      <button type="button" className="seq-btn" onClick={() => onChange("seqDown", activity.id, index)} disabled={index === response.order.length - 1}>▼</button>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        )}

        {activity.type === "multiselect" && (
          <div className="ms-options">
            {activity.options.map(option => {
              const selected = response.selected?.includes(option.id);
              return (
                <button
                  key={option.id}
                  type="button"
                  className={`ms-opt ${
                    submitted && selected && option.correct ? "mso-selected mso-good" :
                    submitted && selected && !option.correct ? "mso-selected mso-bad" :
                    submitted && !selected && option.correct ? "mso-correct" :
                    selected ? "mso-selected" : ""
                  }`}
                  onClick={() => onChange("toggle", activity.id, option.id)}
                  disabled={locked}
                >
                  <span className="ms-check">{selected ? "✓" : ""}</span>
                  <span>{option.text}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
      {!submitted && (
        <div className="activity-footer">
          <button type="button" className="btn-solid" onClick={() => onSubmit(activity.id)} disabled={locked}>
            Submit for scoring
          </button>
        </div>
      )}
      {submitted && (
        <div className="activity-scoreline">
          Score: {formatScore(response.score)}/{formatScore(activity.points * SCORE_UNIT)}
        </div>
      )}
      <ActivityFeedback activity={activity} response={response} />
    </section>
  );
}

const PhaseWorkspace = React.forwardRef(function PhaseWorkspace({ phase, responses, onChange, onSubmit, onNextPhase, nextPhaseName }, ref) {
  if (!phase) return null;
  const restored = Boolean(phase.activities && phase.activities.length);
  return (
    <section className="phase-workspace" ref={ref}>
      <div className="phase-banner">
        <div>
          <div className="phase-banner-tag">RESTORED PHASE</div>
          <h2 className="phase-banner-title">{phase.title}</h2>
          <div className="phase-banner-sub">{phase.subtitle}</div>
          {phase.placeholder && (
            <div className="phase-placeholder-note">This phase will be rebuilt next.</div>
          )}
        </div>
        {phase.domain && <div className="phase-domain">{phase.domain.toUpperCase()}</div>}
      </div>

      {phase.inject && (
        <div className="phase-inject panel">
          <header className="panel-head">
            <span className="panel-tag">INJECT</span>
            <span className="panel-title">SCENARIO TEXT</span>
          </header>
          <div className="phase-inject-body">{phase.inject}</div>
        </div>
      )}

      {phase.evidenceCards?.length > 0 && (
        <div className="evidence-grid">
          {phase.evidenceCards.map(card => <EvidenceCard key={card.id} card={card} />)}
        </div>
      )}

      {restored && (
        <div className="activity-stack">
          {phase.activities.map(activity => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              response={responses[activity.id] || emptyResponseFor(activity)}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          ))}
        </div>
      )}

      {restored && (
        <div className="phase-footer">
          <button
            type="button"
            className="btn-ghost phase-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Go to Top
          </button>
          {onNextPhase && (
            <button
              type="button"
              className="btn-solid phase-next-btn"
              onClick={() => { onNextPhase(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              Next Phase{nextPhaseName ? `: ${nextPhaseName}` : ""} →
            </button>
          )}
        </div>
      )}
    </section>
  );
});

function PhaseConsole({ phase, responses, onChange, onSubmit, onNextPhase, nextPhaseName }) {
  return (
    <div className="phase-console">
      <PhaseWorkspace
        phase={phase}
        responses={responses}
        onChange={onChange}
        onSubmit={onSubmit}
        onNextPhase={onNextPhase}
        nextPhaseName={nextPhaseName}
      />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// APP
// ──────────────────────────────────────────────────────────────────────────

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "amber",
  "density": "comfortable",
  "showGrid": true,
  "showReticle": true,
  "classification": "UNCLASSIFIED",
  "phaseStyle": "tabs"
}/*EDITMODE-END*/;

const INSTRUCTOR_PASSWORD = "IITCInstructors";
// Atropian Air Base — the Coalition AOC where the students (international LNOs)
// are assigned. This reticle marks "you are here." Map projection runs 20°E-60°E
// horizontal and 60°N-30°N vertical; the CAOC sits at roughly 46°E / 34°N →
// (66.5, 83.6) in map-percentage coordinates.
const PIN_DEFAULT = { x: 66.5, y: 83.6, label: "ATROPIAN AB · CAOC" };

// Map overlay shows 20°E–60°E horizontally, 60°N–30°N vertically.
// Overlay axes inset from the wrap edges; approximate ranges below.
const pctToLatLon = (x, y) => {
  const lon = 20 + ((x - 8) / (98 - 8)) * 40;
  const lat = 60 - ((y - 3) / (96 - 3)) * 30;
  return { lon, lat };
};

function InstructorModal({ open, onClose, onUnlock }) {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  useEffect(() => { if (open) { setPw(""); setErr(false); } }, [open]);
  if (!open) return null;
  const submit = (e) => {
    e.preventDefault();
    if (pw === INSTRUCTOR_PASSWORD) { onUnlock(); onClose(); }
    else setErr(true);
  };
  return (
    <div className="modal-shade" onClick={onClose}>
      <form className="modal" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <div className="modal-head">
          <span className="modal-tag">AUTH</span>
          <span className="modal-title">INSTRUCTOR MODE · RESTRICTED ACCESS</span>
          <button type="button" className="modal-x" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="modal-lede">
            Instructor mode unlocks scenario authoring controls: drag the focus pin,
            rename focus area, and (more controls coming soon).
          </div>
          <label className="modal-field">
            <span className="field-label">ACCESS KEY</span>
            <input
              className={`field-input ${err ? "err" : ""}`}
              type="password"
              autoFocus
              value={pw}
              onChange={(e) => { setPw(e.target.value); setErr(false); }}
              placeholder="••••••••••"
            />
            {err && <span className="field-err">INVALID KEY · ACCESS DENIED</span>}
          </label>
        </div>
        <div className="modal-foot">
          <button type="button" className="btn-ghost" onClick={onClose}>CANCEL</button>
          <button type="submit" className="btn-solid">AUTHORIZE →</button>
        </div>
      </form>
    </div>
  );
}

function narrativeOutcome(earned, possible) {
  if (!possible || possible <= 0) return null;
  const pct = (earned / possible) * 100;
  if (pct >= 90) return {
    tier: "outstanding",
    headline: "OPERATION IRON ANVIL — DECISIVE SUCCESS",
    text: "The coalition air campaign launches on time and on target. Every ATO cycle runs as planned. The JFACC briefs higher headquarters with confidence — your AOC team built a machine that works. Donovian forces in the Zabzimek Corridor are isolated and degraded within 96 hours. Coalition partners trust the system because your team made it trustworthy."
  };
  if (pct >= 70) return {
    tier: "adequate",
    headline: "OPERATION IRON ANVIL — MISSION ACCOMPLISHED WITH FRICTION",
    text: "The AOC functions, but coordination delays cost the campaign early momentum. Some CAS requests were routed to the wrong division. An ISR gap left one target set uncovered for a full ATO cycle. The JFACC had to intervene personally on decisions that should have been handled at the division level. The coalition air campaign succeeds — but the AOC team knows it could have been sharper."
  };
  return {
    tier: "critical",
    headline: "OPERATION IRON ANVIL — SIGNIFICANT SHORTFALLS",
    text: "Critical errors in the AOC standup slow the air campaign. Targeting data arrives late. A CAS request from the Gorgan 3rd Brigade is misrouted and the strike window closes. A time-sensitive target is missed because the wrong division tried to process it. The JFACC orders a stand-down review before the next ATO cycle. The coalition air campaign continues — but the learning curve cost lives and time that the ground force did not have."
  };
}

function CompletionModal({ open, teamName, scoreText, earnedScore, possibleScore, reportMarkdown, onClose, onDownload }) {
  if (!open) return null;
  const narrative = narrativeOutcome(earnedScore, possibleScore);
  return (
    <div className="modal-shade completion-shade" onClick={onClose}>
      <div className="modal completion-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <span className="modal-tag">MISSION COMPLETE</span>
          <span className="modal-title">{narrative ? narrative.headline : "CONGRATULATIONS"}</span>
          <button type="button" className="modal-x" onClick={onClose}>×</button>
        </div>
        <div className="modal-body completion-body">
          <div className="completion-lede">
            Team <strong>{teamName || "Anonymous Team"}</strong> completed Operation {_cfg.opName || "[TBD]"}.
          </div>
          <div className="completion-board">
            <div className="completion-board-label">WRITE THIS ON THE BOARD</div>
            <div className="completion-board-row">
              <span className="completion-board-team">{teamName || "Anonymous Team"}</span>
              <span className="completion-board-score">{scoreText}</span>
            </div>
            <div className="completion-board-sub">TEAM NAME / SCORE</div>
          </div>
          {narrative && (
            <div className={`completion-narrative narrative-${narrative.tier}`}>
              <div className="completion-narrative-text">{narrative.text}</div>
            </div>
          )}
          <div className="completion-copy">
            Share the team name and score, then download the markdown report for shared-drive review and instructor feedback before the test tomorrow.
          </div>
        </div>
        <div className="modal-foot completion-foot">
          <button type="button" className="btn-ghost" onClick={onClose}>CLOSE</button>
          <button type="button" className="btn-solid" onClick={() => onDownload(reportMarkdown)}>DOWNLOAD REPORT (.MD)</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [tw, setTweak] = window.useTweaks
    ? window.useTweaks(TWEAK_DEFAULTS)
    : [TWEAK_DEFAULTS, () => {}];

  const { data, error } = useScenarioData();
  const [studentSession, setStudentSession] = useState(() => loadStudentSession());
  const [accessError, setAccessError] = useState(false);
  const [activePhase, setActivePhase] = useState(studentSession.activePhase || "phase-0-overview");
  const [teamName, setTeamName] = useState(studentSession.teamName || "");
  const [studentReady, setStudentReady] = useState(Boolean(studentSession.ready));
  const [responses, setResponses] = useState(studentSession.responses || {});
  const [objectiveStates, setObjectiveStates] = useState(studentSession.objectiveStates || {});
  const [dtg, setDtg] = useState("121216ZMAY26");

  const [instructor, setInstructor] = useState(() => {
    try { return localStorage.getItem(INSTRUCTOR_KEY) === "1"; } catch { return false; }
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const [completionModalOpen, setCompletionModalOpen] = useState(false);
  const [completionCelebrated, setCompletionCelebrated] = useState(false);
  const [pin, setPin] = useState(() => {
    try {
      const raw = localStorage.getItem(PIN_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && typeof parsed.x === "number" && typeof parsed.y === "number") {
          const next = { ...PIN_DEFAULT, ...parsed };
          if (!next.label) next.label = PIN_DEFAULT.label;
          return next;
        }
      }
    } catch {}
    return PIN_DEFAULT;
  });
  useEffect(() => {
    try { localStorage.setItem(PIN_KEY, JSON.stringify(pin)); } catch {}
  }, [pin]);
  useEffect(() => {
    try { localStorage.setItem(INSTRUCTOR_KEY, instructor ? "1" : "0"); } catch {}
  }, [instructor]);
  useEffect(() => {
    if (!data) return;
    const phases = data?.phases || [];
    const resolvedActive = resolvePhaseId(activePhase);
    const phase = phases.find(phase => phase.id === resolvedActive || phase.num === resolvedActive);
    if (!phase) {
      setActivePhase(phases[0]?.id || "phase-0-overview");
    } else if (phase.id !== resolvedActive) {
      setActivePhase(phase.id);
    }
  }, [data, activePhase]);
  useEffect(() => {
    const nextSession = {
      ready: studentReady,
      teamName,
      activePhase,
      responses,
      objectiveStates,
    };
    setStudentSession(nextSession);
    saveStudentSession(nextSession);
  }, [studentReady, teamName, activePhase, responses, objectiveStates]);
  const onLockClick = () => {
    if (instructor) setInstructor(false);
    else setModalOpen(true);
  };

  const allRestoredActivities = RESTORED_PHASE_IDS.flatMap(phaseId => getPhaseContent(phaseId)?.activities || []);
  const allRestoredEvidence = RESTORED_PHASE_IDS.flatMap(phaseId => getPhaseContent(phaseId)?.evidenceCards || []);
  const possibleScore = allRestoredActivities.reduce((sum, activity) => sum + (activity.points * SCORE_UNIT), 0);
  const earnedScore = allRestoredActivities.reduce((sum, activity) => {
    const response = responses[activity.id];
    return sum + (response?.submitted ? Number(response.score || 0) : 0);
  }, 0);
  const scoreText = studentReady ? `${formatScore(earnedScore)} / ${formatScore(possibleScore)}` : "LOCKED";
  const allActivitiesComplete = studentReady && allRestoredActivities.length > 0 && allRestoredActivities.every(activity => responses[activity.id]?.submitted);
  const evidenceCount = allRestoredEvidence.length;
  const activityCount = allRestoredActivities.length;
  const phases = data?.phases || [];
  const objectives = data?.objectives || [];
  const glossary = data?.glossary || [];
  const resolvedActivePhase = resolvePhaseId(activePhase);
  const navPhase = phases.find(phase => phase.id === resolvedActivePhase) || phases[0] || {
    id: "phase-0-overview",
    title: "Scenario Orientation",
    summary: _cfg.opName || "[TBD Operation]",
  };
  const restoredPhase = getPhaseContent(resolvedActivePhase);
  const currentPhase = restoredPhase || {
    id: navPhase.id,
    title: navPhase.title,
    subtitle: navPhase.summary || "",
    domain: null,
    inject: "This phase has no content yet. Add it to phaseData.js under the matching phase id.",
    evidenceCards: [],
    activities: [],
    placeholder: true,
  };
  const doneIds = phases.filter(phase => phaseIsComplete(phase.id, responses)).map(phase => phase.id);
  const currentPhaseIndex = RESTORED_PHASE_IDS.indexOf(resolvedActivePhase);
  const nextPhaseId = currentPhaseIndex >= 0 && currentPhaseIndex < RESTORED_PHASE_IDS.length - 1
    ? RESTORED_PHASE_IDS[currentPhaseIndex + 1] : null;
  const nextPhase = nextPhaseId ? phases.find(p => p.id === nextPhaseId) : null;
  const handleNextPhase = nextPhaseId ? () => setActivePhase(nextPhaseId) : null;

  const handleAccess = ({ teamName: submittedTeamName, password }) => {
    if (password !== STUDENT_PASSWORD) {
      setAccessError(true);
      return;
    }
    setAccessError(false);
    const nextTeam = submittedTeamName.trim() || "Anonymous Team";
    setTeamName(nextTeam);
    setStudentReady(true);
    setActivePhase(resolvePhaseId(studentSession.activePhase || "phase-0-overview"));
  };

  const handleResetExercise = () => {
    const ok = window.confirm("Reset the exercise and clear saved progress for this browser?");
    if (!ok) return;
    try { localStorage.removeItem(SESSION_KEY); } catch {}
    setStudentSession(makeDefaultSession());
    setStudentReady(false);
    setTeamName("");
    setActivePhase("phase-0-overview");
    setResponses({});
    setObjectiveStates({});
    setGlossaryOpen(false);
    setModalOpen(false);
    setCompletionModalOpen(false);
    setCompletionCelebrated(false);
    setInstructor(false);
  };

  const handleActivityChange = (kind, activityId, value) => {
    const activity = findTrainingActivity(activityId);
    if (!activity) return;
    setResponses(prev => {
      const currentResponse = initResponse(activity, prev);
      if (currentResponse.submitted) return prev;
      const next = { ...prev };
      const current = initResponse(activity, prev);
      const updated = {
        ...current,
        submitted: false,
        score: 0,
        correct: false,
      };

      switch (kind) {
        case "classification":
          updated.answers = { ...(current.answers || {}), [value.itemId]: value.value };
          break;
        case "decision":
          updated.selected = value;
          break;
        case "fillslot":
          updated.slots = { ...(current.slots || {}), [value.slotId]: value.value };
          break;
        case "matchPick":
          updated.pending = current.pending === value ? null : value;
          break;
        case "matchDrop": {
          if (!current.pending) return prev;
          const pairs = { ...(current.pairs || {}) };
          Object.keys(pairs).forEach(key => { if (pairs[key] === value) delete pairs[key]; });
          pairs[current.pending] = value;
          updated.pairs = pairs;
          updated.pending = null;
          break;
        }
        case "seqUp": {
          const order = [...(current.order || [])];
          const index = value;
          const swapIndex = index - 1;
          if (swapIndex < 0) return prev;
          [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
          updated.order = order;
          break;
        }
        case "seqDown": {
          const order = [...(current.order || [])];
          const index = value;
          const swapIndex = index + 1;
          if (swapIndex >= order.length) return prev;
          [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
          updated.order = order;
          break;
        }
        case "rank":
          updated.ranks = { ...(current.ranks || {}), [value.itemId]: value.value };
          break;
        case "toggle": {
          const selected = new Set(current.selected || []);
          if (selected.has(value)) selected.delete(value);
          else selected.add(value);
          updated.selected = Array.from(selected);
          break;
        }
        default:
          break;
      }

      next[activityId] = updated;
      return next;
    });

    setObjectiveStates(prev => ({ ...prev, ...objectiveBoost(activity, false) }));
  };

  const handleActivitySubmit = (activityId) => {
    const activity = findTrainingActivity(activityId);
    if (!activity) return;
    const response = initResponse(activity, responses);
    if (response.submitted) return;
    const score = scoreActivity(activity, response);
    setResponses(prev => ({
      ...prev,
      [activityId]: {
        ...initResponse(activity, prev),
        submitted: true,
        score,
        correct: score >= activity.points * SCORE_UNIT,
      }
    }));
    setObjectiveStates(prev => ({ ...prev, ...objectiveBoost(activity, true) }));
  };

  useEffect(() => {
    const upd = () => {
      const d = new Date();
      const pad = n => String(n).padStart(2, "0");
      const day = pad(d.getUTCDate());
      const hh = pad(d.getUTCHours());
      const mm = pad(d.getUTCMinutes());
      const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
      const mon = months[d.getUTCMonth()];
      const yr = String(d.getUTCFullYear()).slice(-2);
      setDtg(`${day}${hh}${mm}Z${mon}${yr}`);
    };
    upd();
    const id = setInterval(upd, 60000);
    return () => clearInterval(id);
  }, []);

  // Loading gate — all hooks are called above, so early return is safe
  useEffect(() => {
    if (allActivitiesComplete && !completionCelebrated) {
      setCompletionModalOpen(true);
      setCompletionCelebrated(true);
    }
    if (!studentReady) {
      setCompletionCelebrated(false);
    }
  }, [allActivitiesComplete, completionCelebrated, studentReady]);

  const completionReportMarkdown = buildCompletionReportMarkdown({
    teamName,
    dtg,
    scoreText,
    pirText: data?.pirText,
    phases,
    responses,
    objectives,
  });
  const completionReportFilename = `${sanitizeFileStem(_cfg.opName || "block-6")}-${sanitizeFileStem(teamName)}-${dtg}.md`;

  if (!data) {
    return (
      <div className={`app accent-${tw.accent}`}>
        <ClassificationBar level={tw.classification} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
          <span className="mono" style={{ color: "var(--text-2)", letterSpacing: "0.14em", fontSize: "11px" }}>
            {error ? "ERROR · FAILED TO LOAD SCENARIO DATA" : `LOADING · OPERATION ${(_cfg.opName || "[TBD]").toUpperCase()}`}
          </span>
        </div>
        <ClassificationBar level={tw.classification} />
      </div>
    );
  }

  return (
    <div
      className={`app accent-${tw.accent} density-${tw.density} phase-style-${tw.phaseStyle}`}
      data-screen-label={currentPhase?.title || "00 Orientation"}
    >
      <div className="sticky-chrome">
        <ClassificationBar level={tw.classification} />

        <TopBar
          dtg={dtg}
          opName={_cfg.opName || "[TBD]"}
          opCode={_cfg.opCode || "OP-TBD-26"}
          status={instructor ? { label: "INSTRUCTOR MODE", tone: "amber" } : null}
          instructor={instructor}
          onLockClick={onLockClick}
          onGlossary={() => setGlossaryOpen(true)}
          onSources={() => setSourcesOpen(true)}
          onReset={handleResetExercise}
          teamName={teamName}
          scoreValue={earnedScore}
          scoreMax={possibleScore}
        />

        <PhaseNav active={activePhase} phases={phases} onChange={setActivePhase} doneIds={doneIds} />
      </div>

      <GlossaryModal
        open={glossaryOpen}
        terms={glossary}
        onClose={() => setGlossaryOpen(false)}
      />

      <SourcesModal
        open={sourcesOpen}
        onClose={() => setSourcesOpen(false)}
      />

      <main className="layout">
        <div className="content">
          {activePhase === "phase-0-overview" ? (
            <>
              <MissionBrief />

              <div className="grid-row primary-row">
                <div className="col-map">
                  <MapPanel
                    showReticle={tw.showReticle}
                    showGrid={tw.showGrid}
                    instructor={instructor}
                    pin={pin}
                    onPinChange={setPin}
                  />
                </div>
                <div className="col-side">
                  <PIRPanel
                    pirText={data.pirText}
                    pirIssuedBy={data.pirIssuedBy}
                    pirIssuedDTG={data.pirIssuedDTG}
                  />
                  <ActorsPanel actors={data.actors} />
                </div>
              </div>

              <SituationPanel situationText={data.situationText} evidenceCount={evidenceCount} activityCount={activityCount} />
              <HowItWorks />
              <BeginBar
                onBegin={() => setActivePhase(RESTORED_PHASE_IDS[1] || "phase-1-tbd")}
                nextPhaseLabel={(() => {
                  const firstContentPhaseId = RESTORED_PHASE_IDS[1];
                  if (!firstContentPhaseId) return null;
                  const navMeta = phases.find(p => p.id === firstContentPhaseId);
                  if (navMeta?.long) return navMeta.long;
                  const content = getPhaseContent(firstContentPhaseId);
                  return content?.subtitle?.replace(/^Lesson\s+[\d.]+\s*[—-]\s*/i, "") || content?.title || null;
                })()}
              />
            </>
          ) : (
            <PhaseConsole
              phase={currentPhase}
              responses={responses}
              onChange={handleActivityChange}
              onSubmit={handleActivitySubmit}
              onNextPhase={handleNextPhase}
              nextPhaseName={nextPhase?.title || null}
            />
          )}
        </div>
      </main>

      <ClassificationBar level={tw.classification} />

      <StudentAccessModal
        open={!studentReady}
        error={accessError}
        onSubmit={handleAccess}
        onSources={() => setSourcesOpen(true)}
      />

      <InstructorModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onUnlock={() => setInstructor(true)}
      />

      <CompletionModal
        open={completionModalOpen}
        teamName={teamName}
        scoreText={scoreText}
        earnedScore={earnedScore}
        possibleScore={possibleScore}
        reportMarkdown={completionReportMarkdown}
        onClose={() => setCompletionModalOpen(false)}
        onDownload={(markdown) => downloadMarkdownReport(completionReportFilename, markdown)}
      />

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection label="Aesthetic">
            <window.TweakSelect
              label="Accent"
              value={tw.accent}
              onChange={v => setTweak("accent", v)}
              options={[
                { value: "amber",  label: "Amber (default)" },
                { value: "cyan",   label: "Cyan" },
                { value: "green",  label: "Green" },
                { value: "violet", label: "Violet" },
              ]}
            />
            <window.TweakRadio
              label="Density"
              value={tw.density}
              onChange={v => setTweak("density", v)}
              options={[
                { value: "compact",     label: "Compact" },
                { value: "comfortable", label: "Comfort" },
              ]}
            />
            <window.TweakRadio
              label="Phase Nav"
              value={tw.phaseStyle}
              onChange={v => setTweak("phaseStyle", v)}
              options={[
                { value: "tabs", label: "Tabs" },
                { value: "hex",  label: "Hex" },
              ]}
            />
          </window.TweakSection>
          <window.TweakSection label="Map">
            <window.TweakToggle label="Grid overlay"    value={tw.showGrid}    onChange={v => setTweak("showGrid", v)} />
            <window.TweakToggle label="Target reticle"  value={tw.showReticle} onChange={v => setTweak("showReticle", v)} />
          </window.TweakSection>
          <window.TweakSection label="Classification">
            <window.TweakSelect
              label="Level"
              value={tw.classification}
              onChange={v => setTweak("classification", v)}
              options={[
                { value: "UNCLASSIFIED", label: "UNCLASSIFIED" },
                { value: "CONFIDENTIAL", label: "CONFIDENTIAL" },
                { value: "SECRET",       label: "SECRET" },
              ]}
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
