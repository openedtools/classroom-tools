/* global window */
// ═══════════════════════════════════════════════════════════════════════════════
//  SCENARIO DATA FILE — fill this file with your operation's content.
//  The framework (app.jsx / styles.css) reads this automatically.
//  Do NOT edit app.jsx or styles.css for content changes — everything you
//  need to touch is in this one file.
// ═══════════════════════════════════════════════════════════════════════════════

window.ScenarioContent = {

  // ─────────────────────────────────────────────────────────────────────────────
  // SECTION 1 — CONFIGURATION
  // These values control the header, access codes, and phase order.
  // ─────────────────────────────────────────────────────────────────────────────
  config: {
    opName:          "IRON CURTAIN",           // Displayed as "OPERATION IRON CURTAIN" in header
    opCode:          "OP-IC-26",               // Short code shown in the top-left badge
    studentPassword: "OperationIronCurt4in",   // Access code students type on the login screen
    sessionKey:      "op-ic-session-v1",       // Unique localStorage key — change for each new op
                                               // so students don't inherit a previous op's progress

    // List every phase ID in the order they should appear.
    // Must match the id fields in the phases object below.
    // Minimum 1 phase. No maximum.
    phaseIds: [
      "phase-0-overview",
      "phase-1-lesson-a",
      "phase-2-lesson-b",
      "phase-3-lesson-c",
      "phase-4-final",
    ],
  },


  // ─────────────────────────────────────────────────────────────────────────────
  // SECTION 2 — PHASES
  // Each key in this object must match a phaseId listed in config.phaseIds above.
  //
  // Every phase has:
  //   id          — must match the config.phaseIds entry exactly
  //   title       — shown in the phase tab and the phase banner (keep short)
  //   subtitle    — lesson reference or domain label shown below the title
  //   domain      — optional icon tag; one of: io | cyber | geoint | sigint |
  //                 humint | imint | masint | space | all (or null for none)
  //   objectiveIds — list of learning objective IDs covered in this phase
  //                  (can be empty []; objectives are defined in Section 3)
  //   inject      — the operational situation paragraph students read.
  //                 Use backtick strings for multi-line text.
  //   evidenceCards — array of evidence items students review (see examples)
  //   activities  — array of scored activities (see Section 4 for all types)
  // ─────────────────────────────────────────────────────────────────────────────
  phases: {

    // ── PHASE 0 — ORIENTATION (always include this, no activities needed) ──────
    "phase-0-overview": {
      id:           "phase-0-overview",
      title:        "Scenario Orientation",
      subtitle:     "Operation Iron Curtain",
      domain:       null,
      objectiveIds: [],
      inject: `Replace this text with the overall scenario situation. This is the "hook"
that sets the stage for all subsequent phases. Describe the operational environment,
the threat, and the student's role. Write it in second-person present tense.

Example: You are the all-source intelligence cell assigned to support the 3rd
Combined Arms Army. Tensions along the northern border have escalated following
three incidents in the past 72 hours. The commander has issued a Priority
Intelligence Requirement and your cell has been tasked to provide timely,
accurate, and actionable intelligence across all domains.`,
      evidenceCards: [
        {
          id:      "ev-pir-001",
          title:   "Commander Priority Intelligence Requirement",
          summary: "Replace with the commander's main question (the PIR).",
          detail:  "Expand on the PIR here — what does the commander need answered, by when, and why does it matter? List any specific indicators or sub-requirements."
        }
      ],
      activities: []   // Phase 0 typically has no scored activities
    },


    // ── PHASE 1 — FIRST LESSON ────────────────────────────────────────────────
    "phase-1-lesson-a": {
      id:           "phase-1-lesson-a",
      title:        "Phase 1 - [Lesson Title]",
      subtitle:     "Lesson [X.X] - [Full Lesson Name]",
      domain:       "io",    // Change to the appropriate domain icon
      objectiveIds: ["obj-1a", "obj-1b"],
      inject: `Describe the specific situation for this phase. Connect it to the
overarching scenario. What new development has occurred? What is the student
being asked to do? What intelligence questions are at stake?`,
      evidenceCards: [
        {
          id:      "ev-p1-001",
          title:   "Evidence Item 1 Title",
          summary: "One-sentence summary of what this piece of evidence is.",
          detail:  "Full contextual detail. Include who produced it, when, what it says, and any analytical caveats. This is what the student reads to gather information before answering the activities."
        },
        {
          id:      "ev-p1-002",
          title:   "Evidence Item 2 Title",
          summary: "One-sentence summary.",
          detail:  "Full detail for evidence item 2."
        }
        // Add as many evidence cards as needed — no limit.
      ],
      activities: [
        // ── See SECTION 4 below for all activity types with full documentation.
        // ── Copy and paste the appropriate template for each activity type.
      ]
    },


    // ── PHASE 2 — SECOND LESSON ───────────────────────────────────────────────
    "phase-2-lesson-b": {
      id:           "phase-2-lesson-b",
      title:        "Phase 2 - [Lesson Title]",
      subtitle:     "Lesson [X.X] - [Full Lesson Name]",
      domain:       "cyber",
      objectiveIds: ["obj-2a"],
      inject: `Inject text for phase 2.`,
      evidenceCards: [],
      activities: []
    },


    // ── PHASE 3 — THIRD LESSON ────────────────────────────────────────────────
    "phase-3-lesson-c": {
      id:           "phase-3-lesson-c",
      title:        "Phase 3 - [Lesson Title]",
      subtitle:     "Lesson [X.X] - [Full Lesson Name]",
      domain:       "geoint",
      objectiveIds: ["obj-3a"],
      inject: `Inject text for phase 3.`,
      evidenceCards: [],
      activities: []
    },


    // ── PHASE 4 — FINAL ASSESSMENT ────────────────────────────────────────────
    "phase-4-final": {
      id:           "phase-4-final",
      title:        "Phase 4 - Final Assessment",
      subtitle:     "Integrated Analysis",
      domain:       "all",
      objectiveIds: ["obj-1a", "obj-1b", "obj-2a", "obj-3a"],
      inject: `The final assessment inject. Synthesize the scenario. What is the
commander asking for now? What does the student need to integrate from all
previous phases to answer?`,
      evidenceCards: [],
      activities: []
    }

    // ── ADD MORE PHASES: just duplicate one of the above blocks, ──────────────
    // give it a new id, and add that id to config.phaseIds above. ──────────────
  },


  // ─────────────────────────────────────────────────────────────────────────────
  // SECTION 3 — LEARNING OBJECTIVES  (optional but recommended)
  // Used for the objectives coverage tracker panel.
  // ─────────────────────────────────────────────────────────────────────────────
  objectives: [
    { id: "obj-1a", text: "Identify the three dimensions of the Information Environment." },
    { id: "obj-1b", text: "Classify types of information operations by category." },
    { id: "obj-2a", text: "Describe key indicators of a cyber intrusion." },
    { id: "obj-3a", text: "Analyze GEOINT imagery to identify militarily significant features." },
  ],


  // ─────────────────────────────────────────────────────────────────────────────
  // SECTION 4 — GLOSSARY  (optional)
  // Appears in the glossary modal when students click "?".
  // ─────────────────────────────────────────────────────────────────────────────
  glossary: [
    { term: "PIR",              definition: "Priority Intelligence Requirement — the commander's most critical intelligence question." },
    { term: "BLUF",             definition: "Bottom Line Up Front — the conclusion stated first, followed by supporting detail." },
    { term: "COA",              definition: "Course of Action — a possible enemy or friendly action plan." },
    // Add as many terms as needed.
  ],

};


// ═══════════════════════════════════════════════════════════════════════════════
//  SECTION 4 — ACTIVITY TYPE REFERENCE
//
//  Copy any block below and paste it into the activities: [] array of a phase.
//  Each activity requires a unique id (use a naming convention like p1a1, p1a2,
//  p2a1, etc. where "p1" = phase 1, "a1" = activity 1).
//
//  SCORING: Each activity has a "points" field. The framework calculates
//  partial credit automatically where applicable. Total possible score is
//  the sum of all points across all activities.
// ═══════════════════════════════════════════════════════════════════════════════


// ── ACTIVITY TYPE 1: CLASSIFICATION ─────────────────────────────────────────
// Students drag/assign each item to one of several categories using a dropdown.
// Use when: categorizing items into 2–5 distinct buckets.
// Partial credit: 1 point per correct item (points = number of items).
//
// {
//   id:          "p1a1",
//   type:        "classification",
//   typeLabel:   "Activity 1 of 4 - Classification",
//   points:      3,                // Set equal to the number of items
//   instruction: "Assign each item to the category it belongs to.",
//   objectiveIds: ["obj-1a"],
//   items: [
//     {
//       id:          "i1",
//       text:        "The broadcast satellite transmitter",
//       correct:     "physical",         // Must match one of the category ids below
//       explanation: "This is hardware — the physical dimension."
//     },
//     {
//       id:          "i2",
//       text:        "The fabricated video file",
//       correct:     "informational",
//       explanation: "This is the content/data — the informational dimension."
//     },
//     {
//       id:          "i3",
//       text:        "The commander's decision after watching the broadcast",
//       correct:     "cognitive",
//       explanation: "This is a human decision effect — the cognitive dimension."
//     },
//   ],
//   categories: [
//     { id: "physical",      label: "Physical Dimension" },
//     { id: "informational", label: "Informational Dimension" },
//     { id: "cognitive",     label: "Cognitive Dimension" },
//   ],
//   feedback: {
//     correct:   "All correct! Well done.",
//     partial:   "Some correct. Review the incorrect items.",
//     incorrect: "Review the three dimensions of the IE.",
//   },
// },


// ── ACTIVITY TYPE 2: DECISION (Single Best Answer) ───────────────────────────
// Students select ONE answer from a list of options.
// Use when: asking for the best course of action, most likely assessment,
//           or a single factual answer among distractors.
// All-or-nothing scoring.
//
// {
//   id:          "p1a2",
//   type:        "decision",
//   typeLabel:   "Activity 2 of 4 - Decision",
//   points:      2,
//   instruction: "Based on the evidence, what is the most likely enemy course of action?",
//   objectiveIds: ["obj-1b"],
//   options: [
//     {
//       id:          "opt-a",
//       text:        "Limited cross-border raid to seize the Zabzimek corridor.",
//       correct:     true,
//       explanation: "Correct. The indicators collectively point to a limited raid."
//     },
//     {
//       id:          "opt-b",
//       text:        "Full-scale invasion across the northern border.",
//       correct:     false,
//       explanation: "Incorrect. Logistics indicators do not support a full invasion."
//     },
//     {
//       id:          "opt-c",
//       text:        "Information operations campaign only, no kinetic action.",
//       correct:     false,
//       explanation: "Incorrect. Physical force indicators suggest kinetic intent."
//     },
//     {
//       id:          "opt-d",
//       text:        "Strategic withdrawal to avoid international pressure.",
//       correct:     false,
//       explanation: "Incorrect. Troop posture is offensive, not retrograde."
//     },
//   ],
//   feedback: {
//     correct:   "Correct. The limited raid is the most likely COA given available indicators.",
//     incorrect: "Incorrect. Re-examine the logistics and force positioning indicators.",
//   },
// },


// ── ACTIVITY TYPE 3: FILL SLOT (Fill in the Blank) ───────────────────────────
// Students complete a sentence or paragraph by choosing a word for each blank.
// Use when: completing doctrine definitions, completing an assessment framework,
//           filling in a report template.
// Partial credit: 1 point per correct slot.
//
// {
//   id:          "p1a3",
//   type:        "fillslot",
//   typeLabel:   "Activity 3 of 4 - Fill in the Blank",
//   points:      3,               // Set equal to number of slots
//   instruction: "Complete the BLUF assessment by selecting the correct term for each blank.",
//   objectiveIds: ["obj-1a"],
//   parts: [
//     {
//       type: "text",             // "text" = a plain text segment (no blank)
//       content: "The Donovian operation is best characterized as "
//     },
//     {
//       type:    "slot",          // "slot" = a dropdown the student fills
//       id:      "slot1",
//       correct: "influence",     // Must match one of the option values below
//       options: [
//         { value: "influence",   label: "an influence operation" },
//         { value: "kinetic",     label: "a kinetic strike" },
//         { value: "logistics",   label: "a logistics resupply" },
//       ]
//     },
//     {
//       type: "text",
//       content: " targeting the "
//     },
//     {
//       type:    "slot",
//       id:      "slot2",
//       correct: "cognitive",
//       options: [
//         { value: "cognitive",    label: "cognitive dimension" },
//         { value: "physical",     label: "physical dimension" },
//         { value: "informational",label: "informational dimension" },
//       ]
//     },
//     {
//       type: "text",
//       content: " of the information environment."
//     },
//   ],
//   feedback: {
//     correct:   "All blanks correct.",
//     partial:   "Some blanks correct. Review incorrect selections.",
//     incorrect: "Review the definition and key terms.",
//   },
// },


// ── ACTIVITY TYPE 4: MATCHING ─────────────────────────────────────────────────
// Students connect items on the left to targets on the right.
// Use when: matching terms to definitions, sources to collection disciplines,
//           indicators to assessments.
// Partial credit: 1 point per correct pair. Points = number of pairs.
//
// {
//   id:          "p2a1",
//   type:        "matching",
//   typeLabel:   "Activity 1 of 3 - Matching",
//   points:      4,              // Set equal to number of items/targets
//   instruction: "Match each collection discipline to its primary sensor.",
//   objectiveIds: ["obj-2a"],
//   items: [
//     { id: "m1", text: "GEOINT" },
//     { id: "m2", text: "SIGINT" },
//     { id: "m3", text: "HUMINT" },
//     { id: "m4", text: "MASINT" },
//   ],
//   targets: [
//     { id: "t1", text: "Satellites and aerial imagery systems",     matchId: "m1" },
//     { id: "t2", text: "Electronic intercept and traffic analysis", matchId: "m2" },
//     { id: "t3", text: "Human source networks and debriefs",        matchId: "m3" },
//     { id: "t4", text: "Radar, seismic, and spectral sensors",      matchId: "m4" },
//   ],
//   feedback: {
//     correct:   "All pairs matched correctly.",
//     partial:   "Some pairs correct. Review doctrine for the missed disciplines.",
//     incorrect: "Review the collection discipline definitions in your references.",
//   },
// },


// ── ACTIVITY TYPE 5: SEQUENCING ──────────────────────────────────────────────
// Students reorder a shuffled list into the correct sequence using ▲/▼ buttons.
// Use when: putting steps of a process in order (intelligence cycle, planning
//           sequence, targeting cycle, etc.).
// All-or-nothing scoring (full points for correct order only).
// The list is automatically shuffled on load — do NOT pre-arrange in correct order.
//
// {
//   id:          "p2a2",
//   type:        "sequencing",
//   typeLabel:   "Activity 2 of 3 - Sequencing",
//   points:      3,
//   instruction: "Place the steps of the Intelligence Cycle in the correct order (1 = first).",
//   objectiveIds: ["obj-2a"],
//   items: [
//     { id: "s1", text: "Planning & Direction" },
//     { id: "s2", text: "Collection" },
//     { id: "s3", text: "Processing & Exploitation" },
//     { id: "s4", text: "Analysis & Production" },
//     { id: "s5", text: "Dissemination & Integration" },
//   ],
//   correct: ["s1", "s2", "s3", "s4", "s5"],  // IDs in correct order
//   feedback: {
//     correct:   "Correct sequence. The intelligence cycle flows Planning → Collection → Processing → Analysis → Dissemination.",
//     incorrect: "Incorrect sequence. Review the Intelligence Cycle doctrine.",
//   },
// },


// ── ACTIVITY TYPE 6: RANKING ─────────────────────────────────────────────────
// Students assign a numeric rank (1 = highest priority) to each item.
// Use when: prioritizing collection requirements, ranking threat indicators,
//           ordering analytic confidence levels.
// Partial credit: 1 point per correctly ranked item.
// Items are automatically shuffled on load.
//
// {
//   id:          "p3a1",
//   type:        "ranking",
//   typeLabel:   "Activity 1 of 2 - Ranking",
//   points:      4,              // Set equal to number of items
//   instruction: "Rank these collection requirements from highest priority (1) to lowest (4).",
//   objectiveIds: ["obj-3a"],
//   items: [
//     { id: "r1", text: "Bridge crossing capacity at Checkpoint Bravo",    correct: 1 },
//     { id: "r2", text: "Fuel depot locations within 50km of the border",  correct: 2 },
//     { id: "r3", text: "Air defense radar coverage gaps",                 correct: 3 },
//     { id: "r4", text: "Enemy command post location",                     correct: 4 },
//   ],
//   feedback: {
//     correct:   "Correct prioritization. Bridge capacity and logistics are the highest-value indicators.",
//     partial:   "Partially correct. Review the collection planning priorities in the inject.",
//     incorrect: "Incorrect. Reconsider which indicators most directly answer the PIR.",
//   },
// },


// ── ACTIVITY TYPE 7: MULTI-SELECT ────────────────────────────────────────────
// Students select ALL that apply from a list of options. Multiple answers can
// be correct. Incorrect selections count against the score.
// Use when: identifying multiple valid indicators, selecting all applicable
//           regulations, choosing all correct characteristics.
// Scoring: +1 per correct selection, -1 per incorrect selection (floor 0).
//
// {
//   id:          "p3a2",
//   type:        "multiselect",
//   typeLabel:   "Activity 2 of 2 - Multi-Select",
//   points:      4,
//   instruction: "Select ALL statements that are true about the ISR collection process.",
//   objectiveIds: ["obj-3a"],
//   options: [
//     {
//       id:      "ms1",
//       text:    "Planning & Direction is where the PIR is turned into tasking.",
//       correct: true
//     },
//     {
//       id:      "ms2",
//       text:    "DCGS is used during Processing & Exploitation.",
//       correct: true
//     },
//     {
//       id:      "ms3",
//       text:    "Reconnaissance is the same thing as continuous surveillance.",
//       correct: false    // Distractor
//     },
//     {
//       id:      "ms4",
//       text:    "Surveillance means persistent watch over an area or subject.",
//       correct: true
//     },
//     {
//       id:      "ms5",
//       text:    "The ISR cycle begins with dissemination.",
//       correct: false    // Distractor
//     },
//   ],
//   feedback: {
//     correct:   "All correct. You identified every true statement and avoided the distractors.",
//     partial:   "Partially correct. Check which statements you missed or incorrectly selected.",
//     incorrect: "Incorrect. Review the ISR process and cycle definitions.",
//   },
// },
