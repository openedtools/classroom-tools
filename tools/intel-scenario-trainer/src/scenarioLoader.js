async function loadJson(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}

export async function loadScenarioIndex() {
  return loadJson('scenarios/index.json');
}

const PACK_FILES = ['scenario', 'actors', 'objectives', 'phases', 'injects', 'evidence', 'mapLayers', 'rubrics', 'glossary'];

export async function loadScenarioPack(id) {
  const base = `scenarios/${id}`;
  const entries = await Promise.all(PACK_FILES.map(async (f) => {
    try { return [f, await loadJson(`${base}/${f}.json`)]; }
    catch (err) {
      console.warn(`Scenario "${id}" missing ${f}.json — defaulting to empty.`);
      return [f, f === 'scenario' ? {} : []];
    }
  }));
  const pack = Object.fromEntries(entries);
  pack.id = id;
  return pack;
}
