import { loadScenarioIndex, loadScenarioPack } from './scenarioLoader.js';
import { MapRenderer } from './mapRenderer.js';
import {
  createSession, restore, persist, clearPersisted,
  markPresented, markApplied, markEvaluated, recordResponse,
} from './state.js';
import {
  renderTopBar, renderPhaseList, renderCoverage, renderLayerChips,
  renderAnalysisPanel, renderProgress, setMapSelectionText,
} from './ui.js';
import { exportMarkdown, exportJSON } from './export.js';

const app = {
  index: null,
  pack: null,
  session: null,
  map: null,
};

async function boot() {
  app.index = await loadScenarioIndex();
  app.map = new MapRenderer(document.getElementById('map'));
  await app.map.init();
  app.map.onCountrySelect = ({ name }) => setMapSelectionText(`Selected: ${name}`);

  const defaultId = app.index.packs[0].id;
  await loadPack(defaultId);
}

async function loadPack(id) {
  app.pack = await loadScenarioPack(id);
  const session = restore(id) || createSession(id, app.pack.scenario.objectiveFamilies || []);
  app.session = session;

  // initialize current inject if missing
  if (!session.currentInjectId && app.pack.injects.length) {
    session.currentInjectId = app.pack.injects[0].id;
  }
  // Mark all families "presented" up-front so coverage isn't blank.
  markPresented(session, app.pack.scenario.objectiveFamilies || []);

  // Map setup for this pack
  app.map.setLayerDefs(app.pack.mapLayers || []);
  const inject = currentInject();
  app.map.setPreset(inject?.presetView || app.pack.scenario.defaultPresetView || app.map.assets.manifest.presetViews[0].id);
  if (inject?.mapLayersToEnable) app.map.setLayers(inject.mapLayersToEnable);
  app.map.render();

  renderAll();
  persist(session);
}

function currentInject() {
  return app.pack.injects.find(i => i.id === app.session.currentInjectId) || app.pack.injects[0];
}

// ---------- Handlers ----------
const handlers = {
  onScenarioChange: async (id) => { await loadPack(id); },

  onSelectInject: (id) => {
    app.session.currentInjectId = id;
    const inj = currentInject();
    // Mark families applied when entering an inject
    if (inj.objectivesCovered?.length) markApplied(app.session, inj.objectivesCovered);
    if (inj.presetView) app.map.setPreset(inj.presetView);
    if (inj.mapLayersToEnable) app.map.setLayers(inj.mapLayersToEnable);
    app.map.render();
    renderAll();
    persist(app.session);
  },

  onToggleLayer: (layerId) => {
    app.map.toggleLayer(layerId);
    app.map.render();
    renderAll();
  },

  onPresetChange: (presetId) => {
    app.map.setPreset(presetId);
    app.map.render();
  },

  onTaskChange: (injectId, taskId, value) => {
    recordResponse(app.session, injectId, taskId, value);
    const inj = app.pack.injects.find(i => i.id === injectId);
    if (inj?.objectivesCovered?.length) markEvaluated(app.session, inj.objectivesCovered);
    renderCoverage(app.pack, app.session);
    persist(app.session);
  },

  onNotesChange: (injectId, value) => {
    recordResponse(app.session, injectId, '__notes', value);
    persist(app.session);
  },

  onFinalChange: (key, value) => {
    app.session.finalAssessment[key] = value;
    persist(app.session);
  },

  onExport: () => {
    // Top-bar "Export" defaults to Markdown.
    exportMarkdown(app.session, app.pack);
  },

  onExportMd: () => exportMarkdown(app.session, app.pack),
  onExportJson: () => exportJSON(app.session, app.pack),

  onReset: () => {
    if (!confirm('Reset this scenario? All responses for this pack will be cleared.')) return;
    clearPersisted(app.pack.id);
    app.session = createSession(app.pack.id, app.pack.scenario.objectiveFamilies || []);
    app.session.currentInjectId = app.pack.injects[0]?.id || null;
    markPresented(app.session, app.pack.scenario.objectiveFamilies || []);
    app.map.setLayerDefs(app.pack.mapLayers || []);
    const inj = currentInject();
    app.map.setPreset(inj?.presetView || app.pack.scenario.defaultPresetView);
    if (inj?.mapLayersToEnable) app.map.setLayers(inj.mapLayersToEnable);
    app.map.render();
    renderAll();
  },
};

function renderAll() {
  renderTopBar(app.pack, app.session, app.index.packs, handlers);
  renderPhaseList(app.pack, app.session, handlers);
  renderCoverage(app.pack, app.session);
  renderLayerChips(app.pack, app.map, handlers);
  renderProgress(app.pack, app.session.currentInjectId);
  renderAnalysisPanel(app.pack, app.session, handlers);
  // Reset-view button
  document.getElementById('resetViewBtn').onclick = () => {
    const inj = currentInject();
    app.map.setPreset(inj?.presetView || app.pack.scenario.defaultPresetView);
    app.map.render();
    renderLayerChips(app.pack, app.map, handlers);
  };
}

boot().catch(err => {
  console.error(err);
  document.body.insertAdjacentHTML('afterbegin', `<pre style="color:#c95048;padding:14px">Boot error: ${String(err.message || err)}</pre>`);
});
