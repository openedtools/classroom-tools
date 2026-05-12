/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

// ──────────────────────────────────────────────────────────────────────────
// DATA LOADING
// ──────────────────────────────────────────────────────────────────────────

const DATA_BASE = "../intel-scenario-trainer/scenarios/block-4-operation-northern-veil";

async function loadScenarioData() {
  const [scenario, phases, objectives, actors] = await Promise.all([
    fetch(`${DATA_BASE}/scenario.json`).then(r => r.json()),
    fetch(`${DATA_BASE}/phases.json`).then(r => r.json()),
    fetch(`${DATA_BASE}/objectives.json`).then(r => r.json()),
    fetch(`${DATA_BASE}/actors.json`).then(r => r.json()),
  ]);
  return { scenario, phases, objectives, actors };
}

// ──────────────────────────────────────────────────────────────────────────
// ADAPTERS  (engine shapes → design shapes)
// ──────────────────────────────────────────────────────────────────────────

const PHASE_SHORT = ["ORIENT", "IO", "CYB", "GEO", "EMS", "IR", "SPC", "RVW"];
const PHASE_LONG  = ["ORIENTATION", "INFO OPS", "CYBER", "GEOINT", "EMS / RADAR", "INFRARED", "SPACE / ISR", "FINAL REVIEW"];

function adaptPhases(raw) {
  return raw.map((p, i) => ({
    id:    p.sequence === 7 ? "FR" : String(p.sequence).padStart(2, "0"),
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
        pirText:      raw.scenario.commanderPIR,
        pirIssuedBy:  raw.scenario.pirIssuedBy  ?? "COALITION J2",
        pirIssuedDTG: raw.scenario.pirIssuedDTG ?? "",
        situationText: raw.scenario.situationText ?? [],
      }))
      .catch(err => setError(err));
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
  { n: "05", title: "TRACK COVERAGE",       body: "Sidebar shows your Block 4 objective coverage. Filled marker means demonstrated." },
  { n: "06", title: "SYNTHESIZE",           body: "The final phase fuses all domains into a structured assessment of Donovian intent." },
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
      <span>{level} // TRAINING USE ONLY // NOT FOR OPERATIONAL PLANNING</span>
    </div>
  );
}

function TopBar({ dtg, opName, opCode, status, instructor, onLockClick, teamName, scoreText }) {
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
        {teamName && (
          <div className="team-pill">
            <span className="team-label">TEAM</span>
            <span className="team-value">{teamName}</span>
          </div>
        )}
        {scoreText && (
          <div className="score-pill">
            <span className="team-label">SCORE</span>
            <span className="team-value">{scoreText}</span>
          </div>
        )}
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
                <span className="obj-code">{o.code}</span>
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

const TRAINING_PHASES = window.NorthernVeilContent?.phases || {};
const RESTORED_PHASE_IDS = ["phase-0-overview", "phase-1-info", "phase-2-cyber", "phase-3-geoint"];
const SESSION_KEY = "onv-student-session-v1";
const STUDENT_PASSWORD = "OperationalV3il";

function getPhaseContent(phaseId) {
  return TRAINING_PHASES[phaseId] || null;
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
    case "sequencing":
      return { order: [...(activity.correct || activity.items.map(item => item.id))], submitted: false, score: 0, correct: false };
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
  switch (activity.type) {
    case "classification": {
      let score = 0;
      activity.items.forEach(item => {
        if (response.answers && response.answers[item.id] === item.correct) score += 1;
      });
      return score;
    }
    case "decision": {
      const selected = activity.options.find(option => option.id === response.selected);
      return selected && selected.correct ? activity.points : 0;
    }
    case "fillslot": {
      let score = 0;
      activity.sentence.filter(part => part.type === "slot").forEach(slot => {
        if (response.slots && response.slots[slot.id] === slot.correct) score += 1;
      });
      return score;
    }
    case "matching": {
      let score = 0;
      activity.items.forEach(item => {
        const target = activity.targets.find(t => t.correct === item.id);
        if (target && response.pairs && response.pairs[item.id] === target.id) score += 1;
      });
      return score;
    }
    case "sequencing": {
      const correctOrder = activity.correct || [...activity.items].map(item => item.id);
      const matches = (response.order || []).filter((id, index) => id === correctOrder[index]).length;
      if (matches === correctOrder.length) return activity.points;
      const pct = matches / correctOrder.length;
      if (pct >= 0.8) return Math.max(1, activity.points - 1);
      if (pct >= 0.5) return Math.floor(activity.points * 0.5);
      return 0;
    }
    case "multiselect": {
      let score = 0;
      activity.options.forEach(option => {
        if (option.correct && response.selected && response.selected.includes(option.id)) score += 1;
      });
      return Math.min(score, activity.points);
    }
    default:
      return 0;
  }
}

function objectiveBoost(activity, submitted) {
  const ids = activity.objectiveIds || [];
  const state = submitted ? 2 : 1;
  return ids.reduce((acc, id) => {
    acc[id] = Math.max(acc[id] || 0, state);
    return acc;
  }, {});
}

function StudentAccessModal({ open, onSubmit, error }) {
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
          <span className="modal-title">WELCOME TO OPERATION NORTHERN VEIL</span>
        </div>
        <div className="modal-body">
          <div className="modal-lede">
            Enter your team name and the access code to begin the restored trainer.
            The new UI will keep your score, phase progress, and objective coverage.
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="OperationalV3il"
            />
          </label>
          {error && <span className="field-err">INVALID ACCESS CODE</span>}
        </div>
        <div className="modal-foot">
          <button type="submit" className="btn-solid">BEGIN TRAINING</button>
        </div>
      </form>
    </div>
  );
}

function EvidenceCard({ card }) {
  const [open, setOpen] = useState(false);
  return (
    <button className={`evidence-card ${open ? "open" : ""}`} onClick={() => setOpen(v => !v)} type="button">
      <div className="evidence-head">
        <span className="evidence-tag">EVIDENCE</span>
        <span className="evidence-title">{card.title}</span>
      </div>
      <div className="evidence-summary">{card.summary}</div>
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
      <div className="activity-points">{activity.points} pts</div>
    </div>
  );
}

function ActivityFeedback({ activity, response }) {
  if (!response?.submitted) return null;
  const correct = response.score >= activity.points;
  return (
    <div className={`feedback-box ${correct ? "good" : "bad"}`}>
      <div className="feedback-title">{correct ? "Correct" : "Review"}</div>
      <div className="feedback-copy">{correct ? activity.feedback.correct : activity.feedback.incorrect}</div>
      <div className="feedback-copy subtle">{activity.feedback.whyMatters}</div>
      {activity.feedback.evidenceClue && <div className="feedback-copy subtle">{activity.feedback.evidenceClue}</div>}
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

  return (
    <section className={`activity-card ${locked ? "submitted" : ""}`}>
      <ActivityHeader activity={activity} />
      <div className="activity-body">
        {activity.type === "classification" && (
          <div className="classification-grid">
            {activity.items.map(item => (
              <label className="classify-row" key={item.id}>
                <span className="classify-text">{item.text}</span>
                <select
                  className="classify-select"
                  value={response.answers?.[item.id] || ""}
                  onChange={(e) => onChange("classification", activity.id, { itemId: item.id, value: e.target.value })}
                  disabled={locked}
                >
                  <option value="">Choose...</option>
                  {activity.categories.map(cat => (
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
              <label className={`decision-option ${response.selected === option.id ? "selected" : ""}`} key={option.id}>
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
              return (
                <select
                  key={part.id}
                  className="slot-select"
                  value={response.slots?.[part.id] || ""}
                  onChange={(e) => onChange("fillslot", activity.id, { slotId: part.id, value: e.target.value })}
                  disabled={locked}
                >
                  <option value="">Choose...</option>
                  {part.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              );
            })}
          </div>
        )}

        {activity.type === "matching" && (
          <div className="matching-grid">
            <div>
              <div className="match-label">Terms</div>
              {activity.items.map(item => (
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
            <div>
              <div className="match-label">Descriptions</div>
              {activity.targets.map(target => {
                const paired = response.pairs && Object.entries(response.pairs).find(([, value]) => value === target.id);
                const pairedText = paired ? activity.items.find(item => item.id === paired[0])?.text : null;
                return (
                  <button
                    key={target.id}
                    type="button"
                    className="match-target"
                    onClick={() => onChange("matchDrop", activity.id, target.id)}
                    disabled={locked || !response.pending}
                  >
                    <span>{target.text}</span>
                    {pairedText && <span className="slot-chip">{pairedText}</span>}
                  </button>
                );
              })}
            </div>
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
                  className={`ms-opt ${selected ? "mso-selected" : ""}`}
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
          <button type="button" className="btn btn-primary" onClick={() => onSubmit(activity.id)} disabled={locked}>
            Submit for scoring
          </button>
        </div>
      )}
      {submitted && (
        <div className="activity-scoreline">
          Score: {response.score}/{activity.points}
        </div>
      )}
      <ActivityFeedback activity={activity} response={response} />
    </section>
  );
}

function PhaseWorkspace({ phase, responses, onChange, onSubmit }) {
  if (!phase) return null;
  const restored = Boolean(phase.activities && phase.activities.length);
  return (
    <section className="phase-workspace">
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
    </section>
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
    try { return localStorage.getItem("onv-instructor-v2") === "1"; } catch { return false; }
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [pin, setPin] = useState(() => {
    try {
      const raw = localStorage.getItem("onv-pin-v2");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && typeof parsed.x === "number" && typeof parsed.y === "number") {
          return { ...PIN_DEFAULT, ...parsed };
        }
      }
    } catch {}
    return PIN_DEFAULT;
  });
  useEffect(() => {
    try { localStorage.setItem("onv-pin-v2", JSON.stringify(pin)); } catch {}
  }, [pin]);
  useEffect(() => {
    try { localStorage.setItem("onv-instructor-v2", instructor ? "1" : "0"); } catch {}
  }, [instructor]);
  useEffect(() => {
    if (!data) return;
    const phases = data?.phases || [];
    if (!phases.some(phase => phase.id === activePhase)) {
      setActivePhase(phases[0]?.id || "phase-0-overview");
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
  const possibleScore = allRestoredActivities.reduce((sum, activity) => sum + activity.points, 0);
  const earnedScore = allRestoredActivities.reduce((sum, activity) => {
    const response = responses[activity.id];
    return sum + (response?.submitted ? Number(response.score || 0) : 0);
  }, 0);
  const scoreText = studentReady ? `${earnedScore}/${possibleScore}` : "LOCKED";
  const evidenceCount = allRestoredEvidence.length;
  const activityCount = allRestoredActivities.length;
  const phases = data?.phases || [];
  const objectives = data?.objectives || [];
  const navPhase = phases.find(phase => phase.id === activePhase) || phases[0] || {
    id: "phase-0-overview",
    title: "Scenario Orientation",
    summary: "Operation Northern Veil",
  };
  const restoredPhase = getPhaseContent(activePhase);
  const currentPhase = restoredPhase || {
    id: navPhase.id,
    title: navPhase.title,
    subtitle: navPhase.summary || "",
    domain: null,
    inject: "This phase has not been restored yet. The rebuilt trainer currently covers the introductory screen through Phase 3 GEOINT.",
    evidenceCards: [],
    activities: [],
    placeholder: true,
  };
  const doneIds = phases.filter(phase => phaseIsComplete(phase.id, responses)).map(phase => phase.id);
  const coveredObjectives = objectives.map(obj => ({ ...obj, state: objectiveStates[obj.id] || 0 }));

  const handleAccess = ({ teamName: submittedTeamName, password }) => {
    if (password !== STUDENT_PASSWORD) {
      setAccessError(true);
      return;
    }
    setAccessError(false);
    const nextTeam = submittedTeamName.trim() || "Anonymous Team";
    setTeamName(nextTeam);
    setStudentReady(true);
    setActivePhase(studentSession.activePhase || "phase-0-overview");
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
        correct: score >= activity.points,
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

  return (
    <div
      className={`app accent-${tw.accent} density-${tw.density} phase-style-${tw.phaseStyle}`}
      data-screen-label={currentPhase?.title || "00 Orientation"}
    >
      <ClassificationBar level={tw.classification} />

      <TopBar
        dtg={dtg}
        opName="NORTHERN VEIL"
        opCode="OP-NV-26"
        status={{ label: instructor ? "INSTRUCTOR MODE" : "AWAITING START", tone: "amber" }}
        instructor={instructor}
        onLockClick={onLockClick}
        teamName={teamName}
        scoreText={scoreText}
      />

      <PhaseNav active={activePhase} phases={phases} onChange={setActivePhase} doneIds={doneIds} />

      <main className="layout">
        <ObjectiveSidebar objectives={coveredObjectives} />

        <div className="content">
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
          {activePhase === "phase-0-overview" && (
            <BeginBar onBegin={() => setActivePhase("phase-1-info")} />
          )}
          <PhaseWorkspace
            phase={currentPhase}
            responses={responses}
            onChange={handleActivityChange}
            onSubmit={handleActivitySubmit}
          />
        </div>
      </main>

      <ClassificationBar level={tw.classification} />

      <StudentAccessModal
        open={!studentReady}
        error={accessError}
        onSubmit={handleAccess}
      />

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
