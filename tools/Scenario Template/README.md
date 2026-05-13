# Scenario Trainer — Build Guide

This template lets you create a new **Operation [NAME]** trainer for any block
without touching the shared framework. You only ever edit two files:

1. `scenarioData.js` — all your content (config, phases, activities, objectives, glossary)  
2. `Operation [NAME].html` — just the title tag and the cache-bust version numbers

The framework (`app.jsx`, `styles.css`, `tweaks-panel.jsx`) lives in `tools/UI Design/`
and is shared by every scenario. It updates automatically for all ops when improved.

---

## Quick-Start Checklist

- [ ] Copy this entire `Scenario Template/` folder
- [ ] Rename the folder to your operation name, e.g. `Operation Iron Curtain/`
- [ ] Rename `Operation [NAME].html` to `Operation Iron Curtain.html`
- [ ] Edit `Operation [NAME].html` — update the `<title>` tag
- [ ] Open `scenarioData.js` and fill in Section 1 (config)
- [ ] Write your phases, injects, evidence cards, and activities in Section 2
- [ ] Add learning objectives (Section 3) and glossary terms (Section 4)
- [ ] Add your new scenario to the launcher at `tools/index.html`
- [ ] Push to GitHub — done

---

## File Structure

```
tools/
├── UI Design/                   ← SHARED FRAMEWORK — do not copy
│   ├── app.jsx                  ← All UI logic
│   ├── styles.css               ← All visual styling
│   ├── tweaks-panel.jsx         ← Instructor customization panel
│   └── Operation Northern Veil/ ← Reference scenario (do not modify)
│
├── Scenario Template/           ← THIS FOLDER — copy to start a new op
│   ├── README.md                ← This guide
│   ├── Operation [NAME].html    ← Entry point (rename per op)
│   └── scenarioData.js          ← Your content (rename optional)
│
└── Operation Iron Curtain/      ← Example of a completed new op
    ├── Operation Iron Curtain.html
    └── scenarioData.js
```

---

## Section 1 — Config Reference

In `scenarioData.js`, the `config` object controls the app header and access:

```js
config: {
  opName:          "IRON CURTAIN",           // → "OPERATION IRON CURTAIN" in header
  opCode:          "OP-IC-26",               // → badge in top-left
  studentPassword: "OperationIronCurt4in",   // → students enter this to unlock
  sessionKey:      "op-ic-session-v1",       // → unique per op; prevents progress carryover
  phaseIds: [                                // → determines phase order and tab count
    "phase-0-overview",
    "phase-1-lesson-a",
    "phase-2-lesson-b",
    "phase-4-final",
  ],
},
```

**sessionKey rule:** always change this for each new operation. Use a pattern like
`op-[abbreviation]-session-v1`. If two ops share a key, a student who completed
Op A would appear to have already answered Op B's questions.

**studentPassword rule:** make it memorable but not trivially guessable. Capitalize
the first letter of each word and substitute at least one number (e.g., `3il` → `3il`).

---

## Section 2 — Phase Structure

Each phase entry follows this shape:

```js
"phase-1-lesson-a": {
  id:           "phase-1-lesson-a",    // Must match a phaseId in config
  title:        "Phase 1 - IO",        // Short name shown in the tab
  subtitle:     "Lesson 4.6 - Information Operations",
  domain:       "io",                  // Icon tag (see Domain Values below)
  objectiveIds: ["obj-1a", "obj-1b"],  // Which objectives this phase covers
  inject:       `...`,                 // Situation paragraph (backtick string)
  evidenceCards: [...],                // Evidence items (see Evidence Cards below)
  activities:    [...],                // Scored activities (see Activity Types below)
},
```

### Domain Values

| Value    | Label shown   | When to use                            |
|----------|---------------|----------------------------------------|
| `io`     | IO            | Information Operations                 |
| `cyber`  | CYBER         | Cyber intelligence                     |
| `geoint` | GEOINT        | Imagery and geospatial intelligence    |
| `sigint` | SIGINT        | Signals intelligence                   |
| `humint` | HUMINT        | Human intelligence                     |
| `imint`  | IMINT         | Imagery intelligence (subset of GEOINT)|
| `masint` | MASINT        | Measurement and signature intelligence |
| `space`  | SPACE         | Space domain                           |
| `all`    | ALL DOMAIN    | Final assessments covering everything  |
| `null`   | (none)        | Overview/orientation phases            |

### Evidence Cards

Evidence cards are the "source documents" students read before answering activities.
There is no limit on how many you add per phase.

```js
{
  id:      "ev-p1-001",                    // Unique ID, any string
  title:   "SIGINT Report — Northern Grid",// Displayed as a card header
  summary: "One sentence summary.",        // Shown collapsed
  detail:  "Full text of the evidence...", // Shown when card is expanded
}
```

**Tips:**
- Write evidence so that it is *necessary* to answer at least one activity
- Include some ambiguity — not all evidence should point the same direction
- Label the source (SIGINT, OSINT, imagery description, etc.) for realism

---

## Section 3 — All Activity Types

### TYPE 1 — CLASSIFICATION
**Purpose:** Students assign items to categories using a dropdown.  
**Best for:** Categorizing examples into doctrine buckets (dimensions of IE,
intelligence disciplines, threat actor types, etc.)  
**Scoring:** 1 point per correct item. Set `points` equal to number of items.

```js
{
  id:          "p1a1",
  type:        "classification",
  typeLabel:   "Activity 1 of 3 - Classification",
  points:      3,
  instruction: "Assign each item to the dimension of the Information Environment it represents.",
  objectiveIds: ["obj-1a"],
  items: [
    { id: "i1", text: "The broadcast transmitter",            correct: "physical",      explanation: "Hardware = physical dimension." },
    { id: "i2", text: "The fabricated video file",            correct: "informational", explanation: "Content/data = informational dimension." },
    { id: "i3", text: "The commander's decision after viewing", correct: "cognitive",   explanation: "Human decision effect = cognitive dimension." },
  ],
  categories: [
    { id: "physical",      label: "Physical Dimension" },
    { id: "informational", label: "Informational Dimension" },
    { id: "cognitive",     label: "Cognitive Dimension" },
  ],
  feedback: {
    correct:   "All three correct.",
    partial:   "Some correct. Review the IE dimensions.",
    incorrect: "Review the three dimensions of the Information Environment.",
  },
},
```

---

### TYPE 2 — DECISION (Single Best Answer)
**Purpose:** Students pick ONE correct answer from a list.  
**Best for:** Best COA, most likely assessment, single doctrine answer.  
**Scoring:** All-or-nothing.

```js
{
  id:          "p1a2",
  type:        "decision",
  typeLabel:   "Activity 2 of 3 - Decision",
  points:      2,
  instruction: "What is the most likely enemy course of action?",
  objectiveIds: ["obj-1b"],
  options: [
    { id: "opt-a", text: "Limited raid to seize the corridor.", correct: true,  explanation: "Correct. Indicators support a limited, targeted operation." },
    { id: "opt-b", text: "Full-scale invasion.",                correct: false, explanation: "Logistics do not support a full invasion." },
    { id: "opt-c", text: "IO campaign only, no kinetic action.", correct: false, explanation: "Physical force indicators suggest kinetic intent." },
    { id: "opt-d", text: "Strategic withdrawal.",               correct: false, explanation: "Posture is offensive, not retrograde." },
  ],
  feedback: {
    correct:   "Correct. The limited raid is best supported by available indicators.",
    incorrect: "Incorrect. Re-examine the logistics and force positioning evidence.",
  },
},
```

---

### TYPE 3 — FILL SLOT (Fill in the Blank)
**Purpose:** Students complete a sentence by choosing words for each blank.  
**Best for:** Completing doctrine statements, filling assessment templates, completing BLUF formats.  
**Scoring:** 1 point per correct slot.

```js
{
  id:          "p1a3",
  type:        "fillslot",
  typeLabel:   "Activity 3 of 3 - Fill in the Blank",
  points:      2,
  instruction: "Complete the assessment statement.",
  objectiveIds: ["obj-1a"],
  parts: [
    { type: "text",  content: "This operation targets the " },
    { type: "slot",  id: "slot1", correct: "cognitive",
      options: [
        { value: "cognitive",     label: "cognitive dimension" },
        { value: "physical",      label: "physical dimension" },
        { value: "informational", label: "informational dimension" },
      ]
    },
    { type: "text",  content: " through the use of " },
    { type: "slot",  id: "slot2", correct: "disinformation",
      options: [
        { value: "disinformation", label: "disinformation" },
        { value: "propaganda",     label: "propaganda" },
        { value: "misinformation", label: "misinformation" },
      ]
    },
    { type: "text", content: "." },
  ],
  feedback: {
    correct:   "Correct.",
    partial:   "Partially correct. Review the incorrect blanks.",
    incorrect: "Incorrect. Review the key terms and definitions.",
  },
},
```

---

### TYPE 4 — MATCHING
**Purpose:** Students connect each item on the left to its pair on the right.  
**Best for:** Term-to-definition, discipline-to-sensor, indicator-to-assessment.  
**Scoring:** 1 point per correct pair. The list is shuffled automatically.

```js
{
  id:          "p2a1",
  type:        "matching",
  typeLabel:   "Activity 1 of 2 - Matching",
  points:      4,
  instruction: "Match each intelligence discipline to its primary collection method.",
  objectiveIds: ["obj-2a"],
  items: [
    { id: "m1", text: "GEOINT" },
    { id: "m2", text: "SIGINT" },
    { id: "m3", text: "HUMINT" },
    { id: "m4", text: "MASINT" },
  ],
  targets: [
    { id: "t1", text: "Satellites and aerial imagery",          matchId: "m1" },
    { id: "t2", text: "Electronic intercept and traffic analysis", matchId: "m2" },
    { id: "t3", text: "Human source networks and debriefs",     matchId: "m3" },
    { id: "t4", text: "Radar, seismic, and spectral sensors",   matchId: "m4" },
  ],
  feedback: {
    correct:   "All pairs matched correctly.",
    partial:   "Some pairs correct. Review the missed disciplines.",
    incorrect: "Review collection discipline definitions.",
  },
},
```

---

### TYPE 5 — SEQUENCING
**Purpose:** Students reorder a shuffled list into the correct sequence using ▲/▼ buttons.  
**Best for:** Steps in a process (Intelligence Cycle, targeting cycle, planning sequence).  
**Scoring:** All-or-nothing. The list is automatically shuffled on load — do NOT pre-order.  
**Key field:** `correct` is an array of item IDs in the right order.

```js
{
  id:          "p2a2",
  type:        "sequencing",
  typeLabel:   "Activity 2 of 2 - Sequencing",
  points:      3,
  instruction: "Arrange the steps of the Intelligence Cycle in the correct order (1 = first).",
  objectiveIds: ["obj-2a"],
  items: [
    { id: "s1", text: "Planning & Direction" },
    { id: "s2", text: "Collection" },
    { id: "s3", text: "Processing & Exploitation" },
    { id: "s4", text: "Analysis & Production" },
    { id: "s5", text: "Dissemination & Integration" },
  ],
  correct: ["s1", "s2", "s3", "s4", "s5"],
  feedback: {
    correct:   "Correct sequence.",
    incorrect: "Incorrect sequence. Review the Intelligence Cycle.",
  },
},
```

---

### TYPE 6 — RANKING
**Purpose:** Students assign a numeric priority rank to each item (1 = highest).  
**Best for:** Prioritizing collection requirements, ranking threat severity, ordering analytic confidence.  
**Scoring:** 1 point per item ranked correctly. Items are shuffled on load.  
**Key field:** `correct` on each item is the correct rank number.

```js
{
  id:          "p3a1",
  type:        "ranking",
  typeLabel:   "Activity 1 of 2 - Ranking",
  points:      4,
  instruction: "Rank these collection requirements from highest priority (1) to lowest (4).",
  objectiveIds: ["obj-3a"],
  items: [
    { id: "r1", text: "Bridge crossing capacity at Checkpoint Bravo",   correct: 1 },
    { id: "r2", text: "Fuel depot locations within 50km of the border", correct: 2 },
    { id: "r3", text: "Air defense radar coverage gaps",                correct: 3 },
    { id: "r4", text: "Enemy command post location",                    correct: 4 },
  ],
  feedback: {
    correct:   "Correct prioritization.",
    partial:   "Partially correct. Review collection planning priorities.",
    incorrect: "Incorrect. Reconsider which indicators most directly answer the PIR.",
  },
},
```

---

### TYPE 7 — MULTI-SELECT (Select All That Apply)
**Purpose:** Students select every correct option from a list. Multiple answers are correct.  
**Best for:** Identifying all valid indicators, selecting all applicable doctrine points,
choosing all correct characteristics.  
**Scoring:** +1 per correct selection chosen, 0 for correct not chosen, -1 for wrong selection chosen (floor 0).  
**Important:** Wrong selections are NOT highlighted red until after Submit is clicked.

```js
{
  id:          "p3a2",
  type:        "multiselect",
  typeLabel:   "Activity 2 of 2 - Multi-Select",
  points:      4,
  instruction: "Select ALL statements that are true about the ISR collection process.",
  objectiveIds: ["obj-3a"],
  options: [
    { id: "ms1", text: "Planning & Direction is where the PIR becomes tasking.",  correct: true  },
    { id: "ms2", text: "DCGS is used during Processing & Exploitation.",          correct: true  },
    { id: "ms3", text: "Reconnaissance is the same as continuous surveillance.",  correct: false },
    { id: "ms4", text: "Surveillance means persistent watch over an area.",       correct: true  },
    { id: "ms5", text: "The ISR cycle begins with dissemination.",                correct: false },
  ],
  feedback: {
    correct:   "All correct. You identified every true statement.",
    partial:   "Partially correct. Check what you missed or incorrectly selected.",
    incorrect: "Incorrect. Review the ISR process definitions.",
  },
},
```

---

## Scaling Phases

Add or remove phases freely. The tab bar, progress bar, and Next Phase button
all update automatically based on `config.phaseIds`.

**Minimum viable scenario:** 2 phases (phase-0-overview + 1 content phase).  
**Typical scenario:** 5–9 phases.  
**No coded maximum.**

```js
phaseIds: [
  "phase-0-overview",      // Always keep this as the first phase
  "phase-1-lesson-a",
  "phase-2-lesson-b",
  "phase-3-lesson-c",
  "phase-4-lesson-d",
  "phase-5-lesson-e",
  "phase-6-final",         // Final assessment phase — rename as needed
],
```

---

## Deployment Checklist

Before publishing a new scenario to GitHub Pages:

1. **Unique sessionKey** — verify it doesn't match any previous operation
2. **All phase IDs match** — every id in `phases: {}` must be in `config.phaseIds`
3. **Activity IDs are unique** — no two activities share an id across the whole file
4. **Points add up** — total `points` across all activities = the max score students see
5. **Correct answers set** — every item, option, slot, or rank has its `correct` field
6. **Feedback written** — every activity has `correct`, `partial` (if applicable), and `incorrect` feedback
7. **Evidence supports activities** — every activity can be answered from the evidence cards
8. **Version bumped** — increment `?v=` in the HTML file before pushing

---

## Adding to the Site Launcher

Open `tools/index.html` and add a card:

```html
<article class="card">
  <h2 class="title">Intel Scenario Trainer — Operation Iron Curtain</h2>
  <p class="desc">Brief one-sentence description of what this block covers.</p>
  <a class="launch" href="./Operation Iron Curtain/Operation Iron Curtain.html" target="_blank" rel="noopener">Open Tool</a>
</article>
```

---

## Quick Reference — Activity Points Guide

| Activity Type  | Scoring              | Recommended Points           |
|----------------|----------------------|------------------------------|
| Classification | 1 pt per item        | = number of items (2–6)      |
| Decision       | All or nothing       | 1–3 pts                      |
| Fill Slot      | 1 pt per slot        | = number of blanks (2–5)     |
| Matching       | 1 pt per pair        | = number of pairs (3–6)      |
| Sequencing     | All or nothing       | 2–4 pts                      |
| Ranking        | 1 pt per correct rank| = number of items (3–6)      |
| Multi-Select   | +1 correct, -1 wrong | 3–5 pts                      |

**Total score target:** 20–30 points per phase, 80–120 points per scenario.
