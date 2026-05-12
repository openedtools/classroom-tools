// Session state for the active scenario. In-memory; mirrors to localStorage when available.

const COVERAGE_ORDER = { presented: 1, applied: 2, evaluated: 3 };
const COVERAGE_BY_ORDER = { 1: 'presented', 2: 'applied', 3: 'evaluated' };

function lsKey(scenarioId) { return `ist:session:${scenarioId}`; }

export function createSession(scenarioId, families = []) {
  const coverage = Object.fromEntries(families.map(f => [f, null]));
  return {
    scenarioId,
    currentInjectId: null,
    responses: {},          // injectId -> { taskId -> value }
    objectiveCoverage: coverage,
    finalAssessment: {
      bluf: '', mostLikelyCoa: '', mostDangerousCoa: '',
      indicators: '', gaps: '', recommendedCollection: '',
      confidence: 50, studentName: ''
    },
    completedAt: null,
  };
}

export function bumpCoverage(session, family, level) {
  if (!family || !(family in session.objectiveCoverage)) return;
  const cur = session.objectiveCoverage[family];
  const curOrder = cur ? COVERAGE_ORDER[cur] : 0;
  const nextOrder = COVERAGE_ORDER[level] || 0;
  if (nextOrder > curOrder) session.objectiveCoverage[family] = level;
}

export function markPresented(session, families) { families.forEach(f => bumpCoverage(session, f, 'presented')); }
export function markApplied(session, families)   { families.forEach(f => bumpCoverage(session, f, 'applied')); }
export function markEvaluated(session, families) { families.forEach(f => bumpCoverage(session, f, 'evaluated')); }

export function recordResponse(session, injectId, taskId, value) {
  if (!session.responses[injectId]) session.responses[injectId] = {};
  session.responses[injectId][taskId] = value;
}

export function persist(session) {
  try { localStorage.setItem(lsKey(session.scenarioId), JSON.stringify(session)); } catch {}
}

export function restore(scenarioId) {
  try {
    const raw = localStorage.getItem(lsKey(scenarioId));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}

export function clearPersisted(scenarioId) {
  try { localStorage.removeItem(lsKey(scenarioId)); } catch {}
}
