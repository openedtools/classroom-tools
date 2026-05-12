/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

// ──────────────────────────────────────────────────────────────────────────
// DATA LOADING
// ──────────────────────────────────────────────────────────────────────────

const DATA_BASE = "../intel-scenario-trainer/scenarios/block-4-operation-northern-veil";

async function loadScenarioData() {
  const [scenario, phases, objectives, actors, injects, evidenceArr] = await Promise.all([
    fetch(`${DATA_BASE}/scenario.json`).then(r => r.json()),
    fetch(`${DATA_BASE}/phases.json`).then(r => r.json()),
    fetch(`${DATA_BASE}/objectives.json`).then(r => r.json()),
    fetch(`${DATA_BASE}/actors.json`).then(r => r.json()),
    fetch(`${DATA_BASE}/injects.json`).then(r => r.json()),
    fetch(`${DATA_BASE}/evidence.json`).then(r => r.json()),
  ]);
  const evidence = {};
  evidenceArr.forEach(ev => { evidence[ev.id] = ev; });
  return { scenario, phases, objectives, actors, injects, evidence };
}

// ──────────────────────────────────────────────────────────────────────────
// ADAPTERS  (engine shapes → design shapes)
// ──────────────────────────────────────────────────────────────────────────

const PHASE_SHORT = ["ORIENT", "IO", "CYB", "GEO", "EMS", "IR", "SPC", "RVW"];
const PHASE_LONG  = ["ORIENTATION", "INFO OPS", "CYBER", "GEOINT", "EMS / RADAR", "INFRARED", "SPACE / ISR", "FINAL REVIEW"];

function adaptPhases(raw) {
  return raw.map((p, i) => ({
    id:      p.sequence === 7 ? "FR" : String(p.sequence).padStart(2, "0"),
    phaseId: p.id,
    short:   PHASE_SHORT[i] ?? p.shortLabel.slice(0, 3).toUpperCase(),
    long:    PHASE_LONG[i]  ?? p.title.toUpperCase(),
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
    return { id: o.id, domain, code, label: o.title, state: 0 };
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

// ──────────────────────────────────────────────────────────────────────────
// SESSION STATE
// ──────────────────────────────────────────────────────────────────────────

const SESSION_KEY = "onv-session-v1";

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return {
        responses:       p.responses       ?? {},
        notes:           p.notes           ?? {},
        submitted:       p.submitted       ?? {},
        visited:         p.visited         ?? {},
        finalAssessment: p.finalAssessment ?? {},
        finalSubmitted:  p.finalSubmitted  ?? false,
      };
    }
  } catch {}
  return { responses: {}, notes: {}, submitted: {}, visited: {}, finalAssessment: {}, finalSubmitted: false };
}

function saveSession(s) {
  try { localStorage.setItem(SESSION_KEY, JSON.stringify(s)); } catch {}
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
        phases:        adaptPhases(raw.phases),
        objectives:    adaptObjectives(raw.objectives),
        actors:        adaptActors(raw.actors),
        injects:       raw.injects,
        evidence:      raw.evidence,
        pirText:       raw.scenario.commanderPIR,
        pirIssuedBy:   raw.scenario.pirIssuedBy  ?? "COALITION J2",
        pirIssuedDTG:  raw.scenario.pirIssuedDTG ?? "",
        situationText: raw.scenario.situationText ?? [],
      }))
      .catch(err => setError(err));
  }, []);
  return { data, error };
}

// ──────────────────────────────────────────────────────────────────────────
// STATIC COPY  (describes the UI, not the scenario)
// ──────────────────────────────────────────────────────────────────────────

const HOW_STEPS = [
  { n: "01", title: "READ THE BRIEF",       body: "Each phase opens with a 2-min intel report describing what is happening in that domain." },
  { n: "02", title: "REVIEW EVIDENCE",      body: "Click any evidence card to expand the full report detail before answering." },
  { n: "03", title: "COMPLETE ACTIVITIES",  body: "Each phase has 2–5 structured tasks: matching, sequencing, classifying, ranking, decision-making." },
  { n: "04", title: "RECEIVE FEEDBACK",     body: "Submit each task to see immediate feedback, including why the correct answer matters for this scenario." },
  { n: "05", title: "TRACK COVERAGE",       body: "Sidebar shows your Block 4 objective coverage. Filled marker means demonstrated." },
  { n: "06", title: "SYNTHESIZE",           body: "The final phase fuses all domains into a structured assessment of Donovian intent." },
];

const EV_TYPE_COLOR = {
  'io-report':          'var(--contested)',
  'osint-note':         'var(--info)',
  'cyber-report':       'var(--contested)',
  'imagery-report':     'var(--friendly)',
  'elint-report':       'var(--accent)',
  'ir-report':          'var(--hostile)',
  'space-report':       'var(--info)',
  'commander-guidance': 'var(--accent)',
};

// ──────────────────────────────────────────────────────────────────────────
// PRIMITIVES
// ──────────────────────────────────────────────────────────────────────────

const StateGlyph = ({ state }) => {
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
      <span>{level} // TRAINING USE ONLY // NOT FOR OPERATIONAL PLANNING</span>
    </div>
  );
}

function TopBar({ dtg, opName, opCode, status, instructor, onLockClick }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="op-block">
          <div className="op-line">
            <span className="op-code">{opCode}</span>
            <span className="op-sep">/</span>
            <span className="op-name">OPERATION {opName}</span>
          </div>
          <div className="op-sub">BLOCK 4 APPLIED REVIEW · MULTI-DOMAIN SCENARIO TRAINER</div>
        </div>
      </div>
      <div className="topbar-right">
        <div className="dtg">
          <span className="dtg-label">DTG</span>
          <span className="dtg-value">{dtg}</span>
        </div>
        <div className="trainee-block">
          <span className="trainee-label">TRAINEE</span>
          <span className="trainee-id">CDT-4471 · WALSH, T.</span>
        </div>
        <div className={`op-status status-${status.tone}`}>
          <span className="status-dot" />
          <span className="status-text">{status.label}</span>
        </div>
        <button
          className={`iconbtn lockbtn ${instructor ? 'unlocked' : ''}`}
          title={instructor ? 'Instructor mode active — click to exit' : 'Instructor mode'}
          onClick={onLockClick}
        >
          <span className="lockbtn-glyph">{instructor ? '◈' : '⌬'}</span>
          <span className="lockbtn-text">{instructor ? 'INSTRUCTOR' : 'INSTRUCTOR'}</span>
        </button>
        <button className="iconbtn" title="Glossary">?</button>
      </div>
    </header>
  );
}

function PhaseNav({ active, phases, onChange }) {
  return (
    <nav className="phasenav">
      <div className="phasenav-rail" />
      {phases.map((p, i) => {
        const isActive = p.id === active;
        const idx = phases.findIndex(x => x.id === active);
        const isPast = i < idx;
        return (
          <button
            key={p.id}
            className={`phase ${isActive ? "active" : ""} ${isPast ? "past" : ""}`}
            onClick={() => onChange(p.id)}
          >
            <span className="phase-num">{p.id}</span>
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
  const total = objectives.length;
  const done = objectives.filter(o => o.state === 2).length;
  const partial = objectives.filter(o => o.state === 1).length;

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
              <span className="dom-count">{items.filter(i => i.state === 2).length}/{items.length}</span>
            </div>
            {items.map(o => (
              <div className={`obj-row state-${o.state}`} key={o.code}>
                <StateGlyph state={o.state} />
                <span className="obj-code">{o.code}</span>
                <span className="obj-label">{o.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <span className="save-dot" />
        <span className="save-text">AUTOSAVED · LOCAL SESSION</span>
      </div>
    </aside>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// ORIENTATION SCREEN COMPONENTS
// ──────────────────────────────────────────────────────────────────────────

function MissionBrief() {
  return (
    <section className="brief">
      <div className="brief-meta">
        <span className="meta-chip">INTSUM</span>
        <span className="meta-chip muted">SER 047-26</span>
        <span className="meta-chip muted">SRC // ALL-SOURCE</span>
        <span className="meta-chip muted">REL TO TRAINEE</span>
      </div>
      <h1 className="brief-title">
        <span className="brief-pre">MISSION BRIEF //</span>
        <span className="brief-h">OPERATION NORTHERN VEIL</span>
      </h1>
      <div className="brief-sub">
        Coalition intelligence cell · Tasked to assess Donovian intent toward Gorgas across six intelligence domains.
      </div>
    </section>
  );
}

function MapPanel({ showReticle, showGrid, instructor, pin, onPinChange }) {
  const safePin = pin && typeof pin.x === "number" ? pin : { x: 46, y: 61, label: "GORGAS — FOCUS" };
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
        <img src="assets/eurasia-map.png" alt="Eurasia Region Map" className="map-img" draggable={false} />
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
        <span className="panel-meta deadline">DEADLINE T-72:00:00</span>
      </header>
      <div className="pir-body">
        <span className="quote-mark">"</span>
        <p className="pir-text">{pirText}</p>
        <div className="pir-foot">
          <span className="pir-issued">ISSUED · {pirIssuedBy} · {pirIssuedDTG}</span>
          <span className="pir-class">REL TO TRAINEE</span>
        </div>
      </div>
    </section>
  );
}

function SituationPanel({ situationText }) {
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
          <div><span className="kv-k">EVIDENCE</span><span className="kv-v">23 CARDS</span></div>
          <div><span className="kv-k">ACTIVITIES</span><span className="kv-v">18 TASKS</span></div>
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

function BeginBar({ onBegin }) {
  return (
    <div className="begin-bar">
      <div className="begin-meta">
        <div className="bm-row">
          <span className="bm-k">NEXT</span>
          <span className="bm-v">PHASE 01 · INFORMATION OPERATIONS</span>
        </div>
        <div className="bm-row">
          <span className="bm-k">OBJECTIVES</span>
          <span className="bm-v">3 IN SCOPE · 0/3 DEMONSTRATED</span>
        </div>
      </div>
      <button className="begin-btn" onClick={onBegin}>
        <span className="bb-tag">EXEC</span>
        <span className="bb-text">BEGIN PHASE 01 — INFO OPS</span>
        <span className="bb-arrow">→</span>
      </button>
    </div>
  );
}

function Phase0Task({ inject, session, onResponse, onSubmit }) {
  const task = inject.studentTasks[0];
  if (!task) return null;
  const resp = (session.responses[inject.id] ?? {})[task.id] ?? '';
  const submitted = session.submitted[inject.id] ?? false;
  return (
    <section className="panel">
      <header className="panel-head">
        <span className="panel-tag">TASK</span>
        <span className="panel-title">ORIENTATION TASK · PHASE 00</span>
      </header>
      <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p className="task-prompt">{task.prompt}</p>
        <textarea
          className="short-answer-input"
          value={resp}
          onChange={e => !submitted && onResponse(inject.id, task.id, e.target.value)}
          disabled={submitted}
          placeholder="Type your response here…"
          rows={3}
        />
        {!submitted ? (
          <button className="submit-btn" onClick={() => onSubmit(inject.id)} disabled={!resp.trim()}>
            <span className="bb-tag">EVAL</span>
            SUBMIT RESPONSE
          </button>
        ) : (
          <div className="task-feedback fb-info">Response recorded — compare with rubric during debrief.</div>
        )}
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// EVIDENCE
// ──────────────────────────────────────────────────────────────────────────

function EvidenceCard({ ev }) {
  const [expanded, setExpanded] = useState(false);
  const color = EV_TYPE_COLOR[ev.type] ?? 'var(--text-2)';
  const typeLabel = ev.type.replace(/-/g, ' ').toUpperCase();
  return (
    <div className="panel ev-card">
      <div className="ev-head" onClick={() => setExpanded(x => !x)}>
        <span className="mono ev-type" style={{ color }}>{typeLabel}</span>
        <span className="ev-title">{ev.title}</span>
        <span className="mono ev-toggle">{expanded ? '▲' : '▼'}</span>
      </div>
      <div className="ev-summary">{ev.summary}</div>
      {expanded && <div className="ev-details">{ev.details}</div>}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// TASK TYPES
// ──────────────────────────────────────────────────────────────────────────

function ConceptTagging({ options, value, onChange, submitted, correctTags }) {
  const selected = value ?? [];
  return (
    <div>
      <div className="tag-options">
        {options.map(opt => {
          const isSel = selected.includes(opt);
          const isCorr = correctTags?.includes(opt);
          let cls = 'tag-opt';
          if (submitted) {
            if (isCorr) cls += ' fb-correct';
            else if (isSel) cls += ' fb-wrong';
          } else if (isSel) cls += ' selected';
          return (
            <button
              key={opt}
              className={cls}
              onClick={() => {
                if (submitted) return;
                onChange(isSel ? selected.filter(s => s !== opt) : [...selected, opt]);
              }}
              disabled={submitted}
            >{opt}</button>
          );
        })}
      </div>
      {submitted && correctTags && (
        <p className="fb-correct-inline">Correct: {correctTags.join(' · ')}</p>
      )}
    </div>
  );
}

function SingleSelect({ options, value, onChange, submitted, correctOption }) {
  return (
    <div className="select-opts">
      {options.map(opt => {
        let cls = 'select-opt';
        if (submitted) {
          if (opt === correctOption) cls += ' fb-correct';
          else if (value === opt) cls += ' fb-wrong';
        } else if (value === opt) cls += ' selected';
        return (
          <button
            key={opt}
            className={cls}
            onClick={() => !submitted && onChange(opt)}
            disabled={submitted}
          >{opt}</button>
        );
      })}
    </div>
  );
}

function OrderingTask({ options, value, onChange, submitted, correctOrder }) {
  const items = (value && value.length > 0) ? value : options;
  const dragRef = useRef(null);
  const [dragOver, setDragOver] = useState(null);

  useEffect(() => {
    if (!value || value.length === 0) onChange([...options]);
  }, []); // eslint-disable-line

  if (submitted) {
    const isCorrect = JSON.stringify(items) === JSON.stringify(correctOrder);
    return (
      <div className="order-list">
        {items.map((item, i) => (
          <div key={item} className={`order-item locked ${isCorrect ? 'fb-correct' : ''}`}>
            <span className="order-num">{i + 1}</span>
            <span>{item}</span>
          </div>
        ))}
        <div className={`task-feedback ${isCorrect ? 'fb-correct' : 'fb-info'}`}>
          {isCorrect ? '✓ CORRECT ORDER' : `Reference: ${correctOrder.join(' → ')}`}
        </div>
      </div>
    );
  }

  return (
    <div className="order-list">
      {items.map((item, i) => (
        <div
          key={item}
          className={`order-item ${dragOver === i ? 'drag-target' : ''}`}
          draggable
          onDragStart={() => { dragRef.current = i; }}
          onDragOver={e => { e.preventDefault(); setDragOver(i); }}
          onDrop={e => {
            e.preventDefault();
            const from = dragRef.current;
            if (from === null || from === i) { setDragOver(null); return; }
            const next = [...items];
            const [moved] = next.splice(from, 1);
            next.splice(i, 0, moved);
            dragRef.current = null;
            setDragOver(null);
            onChange(next);
          }}
          onDragEnd={() => { dragRef.current = null; setDragOver(null); }}
        >
          <span className="order-num">{i + 1}</span>
          <span>{item}</span>
          <span className="order-drag">⠿</span>
        </div>
      ))}
    </div>
  );
}

function TaskBlock({ task, value, onChange, submitted }) {
  return (
    <div className={`task-block${task.type === 'confidence' ? ' task-block-conf' : ''}`}>
      <p className="task-prompt">{task.prompt}</p>

      {task.type === 'concept-tagging' && (
        <ConceptTagging
          options={task.options} value={value} onChange={onChange}
          submitted={submitted} correctTags={task.correctTags}
        />
      )}
      {task.type === 'single-select' && (
        <SingleSelect
          options={task.options} value={value} onChange={onChange}
          submitted={submitted} correctOption={task.correctOption}
        />
      )}
      {task.type === 'ordering' && (
        <OrderingTask
          options={task.options} value={value} onChange={onChange}
          submitted={submitted} correctOrder={task.correctOrder}
        />
      )}
      {task.type === 'short-answer' && (
        <>
          <textarea
            className="short-answer-input"
            value={value ?? ''}
            onChange={e => !submitted && onChange(e.target.value)}
            disabled={submitted}
            placeholder="Type your response here…"
            rows={4}
          />
          {submitted && (
            <div className="task-feedback fb-info">Response recorded — compare with rubric during debrief.</div>
          )}
        </>
      )}
      {task.type === 'confidence' && (
        <div className="confidence-block">
          <div className="confidence-row">
            <input
              type="range" className="confidence-slider"
              min="0" max="100" step="5"
              value={value ?? 50}
              onChange={e => !submitted && onChange(Number(e.target.value))}
              disabled={submitted}
            />
            <span className="confidence-val">{value ?? 50}%</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// PHASE CONTENT
// ──────────────────────────────────────────────────────────────────────────

function PhaseNavBar({ phases, prevId, nextId, onPrev, onNext }) {
  const prevPhase = phases.find(p => p.id === prevId);
  const nextPhase = phases.find(p => p.id === nextId);
  return (
    <div className="phase-nav-bar">
      <button className="nav-btn" onClick={onPrev} disabled={!prevId}>
        ← {prevPhase ? prevPhase.long : 'PREV'}
      </button>
      {nextId && (
        <button className="nav-btn nav-next" onClick={onNext}>
          {nextPhase ? nextPhase.long : 'NEXT'} →
        </button>
      )}
    </div>
  );
}

function PhaseContent({ inject, evidenceMap, session, phases, onResponse, onNotes, onSubmit, prevId, nextId, onPrev, onNext }) {
  const resp      = session.responses[inject.id] ?? {};
  const notes     = session.notes[inject.id]     ?? '';
  const submitted = session.submitted[inject.id] ?? false;
  const evidence  = inject.evidenceIds.map(id => evidenceMap[id]).filter(Boolean);
  const phaseNum  = phases.find(p => p.phaseId === inject.phaseId)?.id ?? '??';

  const allAnswered = inject.studentTasks.every(t => {
    if (t.type === 'confidence' || t.type === 'ordering') return true;
    const r = resp[t.id];
    if (t.type === 'concept-tagging') return r && r.length > 0;
    if (t.type === 'single-select')   return r != null;
    if (t.type === 'short-answer')    return r && r.trim().length > 0;
    return false;
  });

  return (
    <div className="phase-screen">
      <div className="inject-header">
        <div className="brief-meta">
          <span className="meta-chip">PHASE {phaseNum}</span>
          <span className="meta-chip muted">{inject.timestamp}</span>
          {submitted && (
            <span className="meta-chip" style={{ background: 'var(--friendly-bg)', borderColor: 'var(--friendly-border)', color: 'var(--friendly)' }}>
              SUBMITTED
            </span>
          )}
        </div>
        <h2 className="inject-title">{inject.title}</h2>
        <p className="inject-objective">{inject.objective}</p>
      </div>

      <section className="panel">
        <header className="panel-head">
          <span className="panel-tag">SITREP</span>
          <span className="panel-title">SITUATION REPORT</span>
          <span className="panel-meta">{inject.timestamp}</span>
        </header>
        <div className="story-body"><p>{inject.storyText}</p></div>
      </section>

      {evidence.length > 0 && (
        <div className="evidence-section">
          <div className="ev-section-label">
            <span className="side-title">EVIDENCE</span>
            <span className="meta-chip muted">{evidence.length} REPORT{evidence.length > 1 ? 'S' : ''}</span>
          </div>
          <div className="evidence-grid">
            {evidence.map(ev => <EvidenceCard key={ev.id} ev={ev} />)}
          </div>
        </div>
      )}

      {inject.studentTasks.length > 0 && (
        <div className="tasks-section">
          <div className="ev-section-label">
            <span className="side-title">STUDENT TASKS</span>
            <span className="meta-chip muted">{inject.studentTasks.length} TASK{inject.studentTasks.length > 1 ? 'S' : ''}</span>
          </div>
          {inject.studentTasks.map(task => (
            <TaskBlock
              key={task.id}
              task={task}
              value={resp[task.id]}
              onChange={v => onResponse(inject.id, task.id, v)}
              submitted={submitted}
            />
          ))}
          {!submitted && (
            <button className="submit-btn" onClick={() => onSubmit(inject.id)} disabled={!allAnswered}>
              <span className="bb-tag">EVAL</span>
              SUBMIT RESPONSES
            </button>
          )}
        </div>
      )}

      <div className="notes-block">
        <span className="notes-label">ANALYST NOTES</span>
        <textarea
          className="notes-input"
          value={notes}
          onChange={e => onNotes(inject.id, e.target.value)}
          placeholder="Free-form notes for this phase…"
          rows={3}
        />
      </div>

      <PhaseNavBar phases={phases} prevId={prevId} nextId={nextId} onPrev={onPrev} onNext={onNext} />
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// FINAL ASSESSMENT
// ──────────────────────────────────────────────────────────────────────────

function FinalAssessmentContent({ inject, evidenceMap, session, phases, onFinalChange, onFinalSubmit, prevId, onPrev }) {
  const fa        = session.finalAssessment;
  const submitted = session.finalSubmitted;
  const evidence  = inject.evidenceIds.map(id => evidenceMap[id]).filter(Boolean);

  return (
    <div className="phase-screen">
      <div className="inject-header">
        <div className="brief-meta">
          <span className="meta-chip">PHASE FR</span>
          <span className="meta-chip muted">{inject.timestamp}</span>
          {submitted && (
            <span className="meta-chip" style={{ background: 'var(--friendly-bg)', borderColor: 'var(--friendly-border)', color: 'var(--friendly)' }}>
              SUBMITTED
            </span>
          )}
        </div>
        <h2 className="inject-title">{inject.title}</h2>
        <p className="inject-objective">{inject.objective}</p>
      </div>

      <section className="panel">
        <header className="panel-head">
          <span className="panel-tag flag-amber">TASKING</span>
          <span className="panel-title">COMMANDER GUIDANCE</span>
        </header>
        <div className="story-body"><p>{inject.storyText}</p></div>
      </section>

      {evidence.length > 0 && (
        <div className="evidence-section">
          <div className="evidence-grid">
            {evidence.map(ev => <EvidenceCard key={ev.id} ev={ev} />)}
          </div>
        </div>
      )}

      <section className="panel">
        <header className="panel-head">
          <span className="panel-tag flag-amber">ASSESSMENT</span>
          <span className="panel-title">STRUCTURED INTELLIGENCE ASSESSMENT</span>
        </header>
        <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>

          <div className="final-field">
            <span className="final-label">ANALYST NAME</span>
            <input
              className="field-input"
              type="text"
              value={fa.studentName ?? ''}
              onChange={e => onFinalChange('studentName', e.target.value)}
              disabled={submitted}
              placeholder="Last, First"
            />
          </div>

          <div className="final-field">
            <span className="final-label">BLUF — BOTTOM LINE UP FRONT</span>
            <textarea
              className="final-textarea"
              value={fa.bluf ?? ''}
              onChange={e => onFinalChange('bluf', e.target.value)}
              disabled={submitted}
              placeholder="One sentence answering the PIR…"
              rows={3}
            />
          </div>

          <div className="final-grid">
            <div className="final-field">
              <span className="final-label">MOST LIKELY COA</span>
              <textarea
                className="final-textarea"
                value={fa.mostLikelyCoa ?? ''}
                onChange={e => onFinalChange('mostLikelyCoa', e.target.value)}
                disabled={submitted}
                placeholder="Describe Donovia's most likely course of action…"
                rows={4}
              />
            </div>
            <div className="final-field">
              <span className="final-label">MOST DANGEROUS COA</span>
              <textarea
                className="final-textarea"
                value={fa.mostDangerousCoa ?? ''}
                onChange={e => onFinalChange('mostDangerousCoa', e.target.value)}
                disabled={submitted}
                placeholder="Describe Donovia's most dangerous course of action…"
                rows={4}
              />
            </div>
          </div>

          <div className="final-field">
            <span className="final-label">KEY INDICATORS</span>
            <textarea
              className="final-textarea"
              value={fa.indicators ?? ''}
              onChange={e => onFinalChange('indicators', e.target.value)}
              disabled={submitted}
              placeholder="What indicators support your assessment?"
              rows={3}
            />
          </div>

          <div className="final-grid">
            <div className="final-field">
              <span className="final-label">COLLECTION GAPS</span>
              <textarea
                className="final-textarea"
                value={fa.gaps ?? ''}
                onChange={e => onFinalChange('gaps', e.target.value)}
                disabled={submitted}
                placeholder="What gaps remain in your collection picture?"
                rows={3}
              />
            </div>
            <div className="final-field">
              <span className="final-label">RECOMMENDED COLLECTION</span>
              <textarea
                className="final-textarea"
                value={fa.recommendedCollection ?? ''}
                onChange={e => onFinalChange('recommendedCollection', e.target.value)}
                disabled={submitted}
                placeholder="What collection would fill your priority gaps?"
                rows={3}
              />
            </div>
          </div>

          <div className="final-field">
            <span className="final-label">ANALYTIC CONFIDENCE</span>
            <div className="confidence-row">
              <input
                type="range" className="confidence-slider"
                min="0" max="100" step="5"
                value={fa.confidence ?? 50}
                onChange={e => onFinalChange('confidence', Number(e.target.value))}
                disabled={submitted}
              />
              <span className="confidence-val">{fa.confidence ?? 50}%</span>
            </div>
          </div>

          <div className="final-submit-row">
            {submitted ? (
              <div className="final-complete">✓ ASSESSMENT SUBMITTED · EXERCISE COMPLETE</div>
            ) : (
              <button
                className="final-submit-btn"
                onClick={onFinalSubmit}
                disabled={!fa.bluf?.trim()}
              >
                <span className="bb-tag">SUBMIT</span>
                SUBMIT FINAL ASSESSMENT →
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="phase-nav-bar">
        <button className="nav-btn" onClick={onPrev} disabled={!prevId}>
          ← {phases.find(p => p.id === prevId)?.long ?? 'PREV'}
        </button>
      </div>
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
const PIN_DEFAULT = { x: 53, y: 62, label: "GORGAS — FOCUS" };

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

function App() {
  const [tw, setTweak] = window.useTweaks
    ? window.useTweaks(TWEAK_DEFAULTS)
    : [TWEAK_DEFAULTS, () => {}];

  const { data, error } = useScenarioData();

  const [activePhase, setActivePhase] = useState("00");
  const [dtg, setDtg] = useState("121216ZMAY26");

  const [instructor, setInstructor] = useState(() => {
    try { return localStorage.getItem("onv-instructor-v2") === "1"; } catch { return false; }
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [pin, setPin] = useState(() => {
    try {
      const raw = localStorage.getItem("onv-pin-v2");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && typeof parsed.x === "number") return { ...PIN_DEFAULT, ...parsed };
      }
    } catch {}
    return PIN_DEFAULT;
  });

  const [session, setSession] = useState(loadSession);

  useEffect(() => { try { localStorage.setItem("onv-pin-v2", JSON.stringify(pin)); } catch {} }, [pin]);
  useEffect(() => { try { localStorage.setItem("onv-instructor-v2", instructor ? "1" : "0"); } catch {} }, [instructor]);
  useEffect(() => { saveSession(session); }, [session]);

  // Mark inject visited whenever active phase changes (after data loads)
  useEffect(() => {
    if (!data) return;
    const phase = data.phases.find(p => p.id === activePhase);
    if (!phase) return;
    const inj = data.injects.find(i => i.phaseId === phase.phaseId);
    if (!inj) return;
    setSession(s => ({ ...s, visited: { ...(s.visited ?? {}), [inj.id]: true } }));
  }, [activePhase, data]);

  useEffect(() => {
    const upd = () => {
      const d = new Date();
      const pad = n => String(n).padStart(2, "0");
      const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
      setDtg(`${pad(d.getUTCDate())}${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}Z${months[d.getUTCMonth()]}${String(d.getUTCFullYear()).slice(-2)}`);
    };
    upd();
    const id = setInterval(upd, 60000);
    return () => clearInterval(id);
  }, []);

  const onLockClick = () => { if (instructor) setInstructor(false); else setModalOpen(true); };

  // Session handlers
  const setResponse = (injectId, taskId, value) =>
    setSession(s => ({ ...s, responses: { ...s.responses, [injectId]: { ...(s.responses[injectId] ?? {}), [taskId]: value } } }));

  const setNotes = (injectId, value) =>
    setSession(s => ({ ...s, notes: { ...(s.notes ?? {}), [injectId]: value } }));

  const submitInject = (injectId) =>
    setSession(s => ({ ...s, submitted: { ...(s.submitted ?? {}), [injectId]: true } }));

  const setFinalField = (field, value) =>
    setSession(s => ({ ...s, finalAssessment: { ...(s.finalAssessment ?? {}), [field]: value } }));

  const submitFinal = () =>
    setSession(s => ({ ...s, finalSubmitted: true }));

  // Loading gate — all hooks called above, safe to return early
  if (!data) {
    return (
      <div className={`app accent-${tw.accent}`}>
        <ClassificationBar level={tw.classification} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
          <span className="mono" style={{ color: "var(--text-2)", letterSpacing: "0.14em", fontSize: "11px" }}>
            {error ? "ERROR · FAILED TO LOAD SCENARIO DATA" : "LOADING · OPERATION NORTHERN VEIL"}
          </span>
        </div>
        <ClassificationBar level={tw.classification} />
      </div>
    );
  }

  // Phase navigation helpers
  const phaseIds     = data.phases.map(p => p.id);
  const currentIdx   = phaseIds.indexOf(activePhase);
  const prevPhaseId  = currentIdx > 0 ? phaseIds[currentIdx - 1] : null;
  const nextPhaseId  = currentIdx < phaseIds.length - 1 ? phaseIds[currentIdx + 1] : null;
  const navigateTo   = (id) => { if (id) setActivePhase(id); };

  // Current inject for active phase
  const currentPhase  = data.phases.find(p => p.id === activePhase);
  const currentInject = currentPhase ? data.injects.find(inj => inj.phaseId === currentPhase.phaseId) : null;

  // Compute objective coverage states from session
  const objectivesWithState = data.objectives.map(o => {
    let state = 0;
    data.injects.forEach(inj => {
      if (inj.objectivesCovered && inj.objectivesCovered.includes(o.id)) {
        if (session.submitted?.[inj.id] || session.finalSubmitted) state = Math.max(state, 2);
        else if (session.visited?.[inj.id]) state = Math.max(state, 1);
      }
    });
    return { ...o, state };
  });

  // Content routing
  const renderMainContent = () => {
    if (activePhase === "00") {
      const phase0Inject = data.injects.find(i => i.phaseId === "phase-0-overview");
      return (
        <>
          <MissionBrief />
          <div className="grid-row primary-row">
            <div className="col-map">
              <MapPanel showReticle={tw.showReticle} showGrid={tw.showGrid} instructor={instructor} pin={pin} onPinChange={setPin} />
            </div>
            <div className="col-side">
              <PIRPanel pirText={data.pirText} pirIssuedBy={data.pirIssuedBy} pirIssuedDTG={data.pirIssuedDTG} />
              <ActorsPanel actors={data.actors} />
            </div>
          </div>
          <SituationPanel situationText={data.situationText} />
          <HowItWorks />
          {phase0Inject && (
            <Phase0Task inject={phase0Inject} session={session} onResponse={setResponse} onSubmit={submitInject} />
          )}
          <BeginBar onBegin={() => navigateTo("01")} />
        </>
      );
    }

    if (activePhase === "FR" && currentInject) {
      return (
        <FinalAssessmentContent
          inject={currentInject}
          evidenceMap={data.evidence}
          session={session}
          phases={data.phases}
          onFinalChange={setFinalField}
          onFinalSubmit={submitFinal}
          prevId={prevPhaseId}
          onPrev={() => navigateTo(prevPhaseId)}
        />
      );
    }

    if (currentInject) {
      return (
        <PhaseContent
          inject={currentInject}
          evidenceMap={data.evidence}
          session={session}
          phases={data.phases}
          onResponse={setResponse}
          onNotes={setNotes}
          onSubmit={submitInject}
          prevId={prevPhaseId}
          nextId={nextPhaseId}
          onPrev={() => navigateTo(prevPhaseId)}
          onNext={() => navigateTo(nextPhaseId)}
        />
      );
    }

    return null;
  };

  const statusLabel = instructor ? "INSTRUCTOR MODE"
    : activePhase === "00" ? "AWAITING START"
    : session.finalSubmitted ? "EXERCISE COMPLETE"
    : "IN PROGRESS";

  return (
    <div className={`app accent-${tw.accent} density-${tw.density} phase-style-${tw.phaseStyle}`}>
      <ClassificationBar level={tw.classification} />

      <TopBar
        dtg={dtg}
        opName="NORTHERN VEIL"
        opCode="OP-NV-26"
        status={{ label: statusLabel, tone: "amber" }}
        instructor={instructor}
        onLockClick={onLockClick}
      />

      <PhaseNav active={activePhase} phases={data.phases} onChange={navigateTo} />

      <main className="layout">
        <ObjectiveSidebar objectives={objectivesWithState} />
        <div className="content">
          {renderMainContent()}
        </div>
      </main>

      <ClassificationBar level={tw.classification} />

      <InstructorModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onUnlock={() => setInstructor(true)}
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
              options={[{ value: "compact", label: "Compact" }, { value: "comfortable", label: "Comfort" }]}
            />
            <window.TweakRadio
              label="Phase Nav"
              value={tw.phaseStyle}
              onChange={v => setTweak("phaseStyle", v)}
              options={[{ value: "tabs", label: "Tabs" }, { value: "hex", label: "Hex" }]}
            />
          </window.TweakSection>
          <window.TweakSection label="Map">
            <window.TweakToggle label="Grid overlay"   value={tw.showGrid}    onChange={v => setTweak("showGrid", v)} />
            <window.TweakToggle label="Target reticle" value={tw.showReticle} onChange={v => setTweak("showReticle", v)} />
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
