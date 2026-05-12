// Render functions. Each one writes into a container with the current pack + session.
// Re-render on each user action; cheap because the DOM is small.

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else if (v !== undefined && v !== null) node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) {
    if (c == null) continue;
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return node;
}

// ---------- Top bar ----------
export function renderTopBar(pack, session, indexEntries, handlers) {
  const sel = document.getElementById('scenarioSelect');
  sel.innerHTML = '';
  for (const e of indexEntries) {
    const opt = document.createElement('option');
    opt.value = e.id; opt.textContent = `${e.block ? e.block + ' — ' : ''}${e.title}`;
    if (e.id === pack.id) opt.selected = true;
    sel.appendChild(opt);
  }
  sel.onchange = () => handlers.onScenarioChange(sel.value);

  document.getElementById('scenarioTitle').textContent = pack.scenario.title || pack.id;
  document.getElementById('scenarioSub').textContent = `${pack.scenario.block || ''} — ${pack.scenario.subtitle || ''}`;
  document.getElementById('exportBtn').onclick = handlers.onExport;
  document.getElementById('resetBtn').onclick = handlers.onReset;
}

export function renderProgress(pack, currentInjectId) {
  const injects = pack.injects;
  const idx = Math.max(0, injects.findIndex(i => i.id === currentInjectId));
  const pct = Math.round(((idx + 1) / Math.max(1, injects.length)) * 100);
  const bar = document.getElementById('progressBar');
  bar.style.setProperty('--p', pct + '%');
  document.getElementById('progressText').textContent = `${idx + 1} / ${injects.length}`;
}

// ---------- Phase rail ----------
export function renderPhaseList(pack, session, handlers) {
  const list = document.getElementById('phaseList');
  list.innerHTML = '';
  const currentInject = pack.injects.find(i => i.id === session.currentInjectId) || pack.injects[0];
  const currentPhaseId = currentInject?.phaseId;
  for (const phase of pack.phases) {
    const firstInject = pack.injects.find(i => i.phaseId === phase.id);
    const visited = firstInject ? !!session.responses[firstInject.id] || phase.sequence < (pack.injects.find(i => i.id === session.currentInjectId)?.sequence ?? -1) : false;
    const isActive = phase.id === currentPhaseId;
    const li = el('li', { class: `phase-item${isActive ? ' is-active' : ''}${visited ? ' is-done' : ''}`, onclick: () => firstInject && handlers.onSelectInject(firstInject.id) },
      [
        el('div', { class: 'phase-num' }, String(phase.sequence)),
        el('div', {}, [
          el('div', { class: 'phase-label' }, phase.title),
          el('div', { class: 'phase-sub' }, phase.shortLabel === phase.title ? '' : (phase.summary || '')),
        ])
      ]);
    list.appendChild(li);
  }
}

// ---------- Objective coverage ----------
export function renderCoverage(pack, session) {
  const list = document.getElementById('coverageList');
  list.innerHTML = '';
  const families = pack.scenario.objectiveFamilies || [];
  for (const fam of families) {
    const lvl = session.objectiveCoverage[fam];
    const row = el('li', { class: 'coverage-row' }, [
      el('span', {}, fam),
      el('span', {}, [
        el('span', { class: `dot${lvl ? ' on-' + lvl : ''}`, title: `${fam}: ${lvl || 'not touched'}` }, '')
      ])
    ]);
    list.appendChild(row);
  }
}

// ---------- Layer chips + preset dropdown ----------
export function renderLayerChips(pack, map, handlers) {
  const host = document.getElementById('layerChips');
  host.innerHTML = '';
  const layers = pack.mapLayers && pack.mapLayers.length
    ? pack.mapLayers
    : [{ id: 'political', title: 'Political' }];
  for (const layer of layers) {
    const on = map.isLayerOn(layer.id);
    const cls = `chip${on ? ' is-on' : ''}${layer.id === 'radar' || layer.id === 'ir' ? ' chip-red' : ''}`;
    const chip = el('button', { class: cls, onclick: () => handlers.onToggleLayer(layer.id) }, [
      el('span', { class: 'chip-dot' }, ''),
      layer.title || layer.id
    ]);
    host.appendChild(chip);
  }

  const presetSel = document.getElementById('presetSelect');
  presetSel.innerHTML = '';
  for (const v of map.assets.manifest.presetViews) {
    const o = document.createElement('option');
    o.value = v.id; o.textContent = v.label;
    if (v.id === map.preset?.id) o.selected = true;
    presetSel.appendChild(o);
  }
  presetSel.onchange = () => handlers.onPresetChange(presetSel.value);
}

// ---------- Analysis panel ----------
export function renderAnalysisPanel(pack, session, handlers) {
  const panel = document.getElementById('analysisPanel');
  panel.innerHTML = '';
  const inject = pack.injects.find(i => i.id === session.currentInjectId) || pack.injects[0];

  if (inject.isFinalAssessment) {
    panel.appendChild(renderFinalAssessment(pack, session, handlers));
    return;
  }

  // Inject card
  panel.appendChild(renderInjectCard(inject, pack, session, handlers));
  // Evidence
  panel.appendChild(renderEvidence(inject, pack));
  // Tasks
  panel.appendChild(renderTasks(inject, pack, session, handlers));
  // Analyst notes (free-form, always available)
  panel.appendChild(renderNotes(inject, session, handlers));
  // Navigation
  panel.appendChild(renderNav(inject, pack, handlers));
}

function renderInjectCard(inject, pack, session) {
  const phase = pack.phases.find(p => p.id === inject.phaseId);
  return el('section', { class: 'card' }, [
    el('div', { class: 'inject-head' }, [
      el('h3', { class: 'inject-title' }, inject.title),
      el('div', { class: 'inject-meta' }, [
        el('span', { class: 'pill' }, phase?.shortLabel || phase?.title || ''),
        el('span', {}, inject.timestamp || ''),
      ])
    ]),
    inject.objective ? el('div', { class: 'inject-objective' }, [
      el('strong', {}, 'Objective for this inject — '),
      document.createTextNode(inject.objective)
    ]) : null,
    el('p', { class: 'inject-story' }, inject.storyText || '')
  ]);
}

function renderEvidence(inject, pack) {
  const ids = inject.evidenceIds || [];
  const cards = ids.map(id => pack.evidence.find(e => e.id === id)).filter(Boolean);
  return el('section', { class: 'card' }, [
    el('h2', { class: 'card-title' }, `Evidence (${cards.length})`),
    el('div', { class: 'evidence-grid' }, cards.map(ev => el('div', { class: 'evidence-card', 'data-type': ev.type }, [
      el('div', { class: 'ev-type' }, ev.type.replace(/-/g, ' ')),
      el('h4', {}, ev.title),
      el('div', {}, ev.summary),
      ev.details ? el('details', {}, [
        el('summary', {}, 'Details'),
        el('div', { class: 'ev-details' }, ev.details)
      ]) : null
    ])))
  ]);
}

function renderTasks(inject, pack, session, handlers) {
  const tasks = inject.studentTasks || [];
  const responses = session.responses[inject.id] || {};
  const container = el('section', { class: 'card' }, [ el('h2', { class: 'card-title' }, 'Student Tasks') ]);
  if (!tasks.length) {
    container.appendChild(el('div', { class: 'muted' }, 'No required tasks for this inject.'));
    return container;
  }

  const tasksWrap = el('div', { class: 'tasks' });
  for (const task of tasks) {
    const taskNode = el('div', { class: 'task' }, [ el('p', { class: 'task-prompt' }, task.prompt) ]);
    const currentVal = responses[task.id];

    if (task.type === 'concept-tagging') {
      const selected = new Set(Array.isArray(currentVal) ? currentVal : []);
      const opts = el('div', { class: 'tag-options' }, task.options.map(opt => {
        const b = el('button', {
          class: `tag-opt${selected.has(opt) ? ' is-on' : ''}`,
          onclick: () => {
            if (selected.has(opt)) selected.delete(opt); else selected.add(opt);
            handlers.onTaskChange(inject.id, task.id, Array.from(selected));
          }
        }, opt);
        return b;
      }));
      taskNode.appendChild(opts);
      if (task.correctTags && currentVal) {
        const right = task.correctTags.every(t => selected.has(t)) && Array.from(selected).every(t => task.correctTags.includes(t));
        taskNode.appendChild(el('div', { class: `task-feedback ${right ? 'ok' : 'warn'}` }, right ? '✓ matches expected tags' : 'Compare your tags with the rubric expectations.'));
      }
    } else if (task.type === 'single-select') {
      const sel = el('select', { onchange: (e) => handlers.onTaskChange(inject.id, task.id, e.target.value) });
      sel.appendChild(el('option', { value: '' }, '— choose —'));
      for (const opt of task.options) {
        const o = el('option', { value: opt }, opt);
        if (opt === currentVal) o.setAttribute('selected', 'selected');
        sel.appendChild(o);
      }
      taskNode.appendChild(sel);
      if (task.correctOption && currentVal) {
        const ok = currentVal === task.correctOption;
        taskNode.appendChild(el('div', { class: `task-feedback ${ok ? 'ok' : 'warn'}` }, ok ? '✓ matches expected answer' : 'Reconsider — see rubric.'));
      }
    } else if (task.type === 'ordering') {
      const items = Array.isArray(currentVal) && currentVal.length === task.options.length ? currentVal.slice() : task.options.slice();
      const list = el('ol', { class: 'ordering-list' });
      items.forEach((item, idx) => {
        const li = el('li', { draggable: 'true', 'data-item': item }, [
          el('span', { class: 'ord-num' }, String(idx + 1)),
          el('span', {}, item),
        ]);
        list.appendChild(li);
      });
      // simple drag-and-drop
      let dragged = null;
      list.addEventListener('dragstart', (e) => { dragged = e.target.closest('li'); dragged.classList.add('dragging'); });
      list.addEventListener('dragend', () => { dragged && dragged.classList.remove('dragging'); dragged = null; });
      list.addEventListener('dragover', (e) => { e.preventDefault(); const over = e.target.closest('li'); if (!over || over === dragged) return;
        const rect = over.getBoundingClientRect(); const before = (e.clientY - rect.top) < rect.height / 2;
        list.insertBefore(dragged, before ? over : over.nextSibling);
      });
      list.addEventListener('drop', () => {
        const order = Array.from(list.querySelectorAll('li')).map(li => li.dataset.item);
        // refresh numbering
        Array.from(list.children).forEach((li, i) => { li.querySelector('.ord-num').textContent = String(i + 1); });
        handlers.onTaskChange(inject.id, task.id, order);
      });
      taskNode.appendChild(list);
      if (task.correctOrder && Array.isArray(currentVal)) {
        const ok = currentVal.length === task.correctOrder.length && currentVal.every((v, i) => v === task.correctOrder[i]);
        taskNode.appendChild(el('div', { class: `task-feedback ${ok ? 'ok' : 'warn'}` }, ok ? '✓ correct order' : 'Order not yet matching the kill-chain rubric.'));
      }
    } else if (task.type === 'short-answer') {
      const ta = el('textarea', { class: 'short-answer', placeholder: 'Type your reasoning...', oninput: (e) => handlers.onTaskChange(inject.id, task.id, e.target.value) });
      ta.value = currentVal || '';
      taskNode.appendChild(ta);
    } else if (task.type === 'confidence') {
      const valNow = currentVal ?? 50;
      const row = el('div', { class: 'confidence-row' });
      const range = el('input', { type: 'range', min: '0', max: '100', value: String(valNow), oninput: (e) => { valSpan.textContent = e.target.value; handlers.onTaskChange(inject.id, task.id, Number(e.target.value)); } });
      const valSpan = el('span', { class: 'conf-val' }, String(valNow) + '%');
      row.appendChild(range);
      row.appendChild(valSpan);
      taskNode.appendChild(row);
    }
    tasksWrap.appendChild(taskNode);
  }
  container.appendChild(tasksWrap);
  return container;
}

function renderNotes(inject, session, handlers) {
  const val = (session.responses[inject.id]?.__notes) || '';
  return el('section', { class: 'card' }, [
    el('h2', { class: 'card-title' }, 'Analyst Notes'),
    (() => {
      const ta = el('textarea', { class: 'short-answer', placeholder: 'Personal notes, hypotheses, questions...', oninput: (e) => handlers.onNotesChange(inject.id, e.target.value) });
      ta.value = val;
      return ta;
    })()
  ]);
}

function renderNav(inject, pack, handlers) {
  const idx = pack.injects.findIndex(i => i.id === inject.id);
  const prev = pack.injects[idx - 1];
  const next = pack.injects[idx + 1];
  return el('div', { class: 'nav-row' }, [
    el('button', { class: 'btn', disabled: prev ? null : '', onclick: () => prev && handlers.onSelectInject(prev.id) }, '← Previous'),
    el('button', { class: 'btn btn-primary', disabled: next ? null : '', onclick: () => next && handlers.onSelectInject(next.id) }, next?.isFinalAssessment ? 'Go to Final Assessment →' : 'Next →'),
  ]);
}

function renderFinalAssessment(pack, session, handlers) {
  const fa = session.finalAssessment;
  const field = (label, key, opts = {}) => {
    const ta = el('textarea', { rows: opts.rows || 3, oninput: (e) => handlers.onFinalChange(key, e.target.value) });
    ta.value = fa[key] || '';
    return el('div', { class: 'field' }, [el('label', {}, label), ta]);
  };
  return el('section', { class: 'card final' }, [
    el('h2', {}, 'Final Assessment — Commander Update'),
    el('p', { class: 'inject-story' }, `Commander PIR: ${pack.scenario.commanderPIR || '(none specified)'}`),
    el('div', { class: 'field' }, [
      el('label', {}, 'Student / Session name (optional)'),
      (() => { const i = el('input', { type: 'text', oninput: (e) => handlers.onFinalChange('studentName', e.target.value) }); i.value = fa.studentName || ''; return i; })(),
    ]),
    field('BLUF', 'bluf'),
    el('div', { class: 'row-2' }, [
      field('Most likely COA', 'mostLikelyCoa'),
      field('Most dangerous COA', 'mostDangerousCoa'),
    ]),
    field('Key indicators', 'indicators'),
    field('Collection gaps', 'gaps'),
    field('Recommended follow-on collection', 'recommendedCollection'),
    el('div', { class: 'field' }, [
      el('label', {}, `Confidence: ${fa.confidence}%`),
      (() => {
        const r = el('input', { type: 'range', min: '0', max: '100', value: String(fa.confidence), oninput: (e) => handlers.onFinalChange('confidence', Number(e.target.value)) });
        return r;
      })()
    ]),
    el('div', { class: 'nav-row' }, [
      el('button', { class: 'btn', onclick: handlers.onExportMd }, 'Export Markdown'),
      el('button', { class: 'btn btn-primary', onclick: handlers.onExportJson }, 'Export JSON'),
      el('button', { class: 'btn btn-ghost', onclick: handlers.onReset }, 'Restart Scenario'),
    ])
  ]);
}

export function setMapSelectionText(text) {
  const node = document.getElementById('mapSelection');
  node.textContent = text || '';
}
