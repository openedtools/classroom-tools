/* global window */
//
// Block 6 Trainer — scenario content (BLANK CANVAS)
// =====================================================================
// This file holds the per-phase content (inject text, evidence cards,
// activities) that the trainer renders.  It is consumed via the global
//   window.ScenarioContent
// which app.jsx reads on load.
//
// Sister file (engine-side scenario metadata) lives at:
//   tools/intel-scenario-trainer/scenarios/block-6-tbd/
//     - scenario.json    (commander PIR, situation text, region, ...)
//     - phases-v2.json   (phase ids, titles, summaries — used by the nav)
//     - objectives.json  (block objectives shown in coverage sidebar)
//     - actors.json      (ORBAT panel)
//     - glossary.json    (glossary modal)
// Keep phase IDs in this file in sync with phases-v2.json.
//
// Supported activity types (use any combination per phase):
//   classification | decision | fillslot | matching | sequencing | ranking | multiselect
//
// Shape reference for each activity type is shown in the example phase
// below.  Delete the unused types when you fill in real content.
// =====================================================================

window.ScenarioContent = {
  config: {
    opName: "[TBD]",                              // shown in TopBar as "OPERATION [TBD]"
    opCode: "OP-TBD-26",                          // shown next to the op name
    studentPassword: "ChangeMe",                  // access code for the student modal
    sessionKey: "block6-student-session-v1",      // localStorage key for student progress
    phaseIds: [
      "phase-0-overview",
      "phase-1-tbd",
      "phase-2-tbd",
      "phase-3-tbd",
      "phase-4-final"
    ]
  },
  restoredThrough: "phase-4-final",
  phases: {

    // -------------------------------------------------------------
    // PHASE 0 — Scenario Orientation (no activities, no evidence)
    // -------------------------------------------------------------
    "phase-0-overview": {
      id: "phase-0-overview",
      title: "Scenario Orientation",
      subtitle: "[TBD Operation Name]",
      domain: null,
      objectiveIds: [],
      inject: `[TBD orientation paragraph — what the student is told before they begin.  This appears under the mission brief and frames the PIR.]`,
      evidenceCards: [
        {
          id: "ev-cmdr-001",
          title: "Commander Priority Intelligence Requirement",
          summary: "[TBD restated PIR — the single question the scenario asks.]",
          detail: "[TBD what the commander wants in the final answer — BLUF, COAs, indicators, gaps, etc.]"
        }
      ],
      activities: []
    },

    // -------------------------------------------------------------
    // PHASE 1 — Example phase showing all 7 activity types
    // Delete activity types you do not need; duplicate the ones you do.
    // -------------------------------------------------------------
    "phase-1-tbd": {
      id: "phase-1-tbd",
      title: "Phase 1 - [TBD Domain Title]",
      subtitle: "[TBD Lesson Reference - e.g. Lesson 6.x - Topic]",
      domain: "tbd",
      objectiveIds: ["6.x-objective-1"],
      inject: `[TBD phase inject — 1-3 short paragraphs describing what is happening in this domain.  Use \\n\\n for paragraph breaks.]

[TBD second paragraph framing what the cell is being asked to do.]`,
      evidenceCards: [
        {
          id: "e1-1",
          title: "[TBD Evidence Card 1 Title]",
          summary: "[TBD one-sentence summary visible on the collapsed card.]",
          detail: "[TBD full detail visible when the student expands the card.]"
        },
        {
          id: "e1-2",
          title: "[TBD Evidence Card 2 Title]",
          summary: "[TBD summary]",
          detail: "[TBD detail]"
        }
      ],
      activities: [

        // ── CLASSIFICATION ─────────────────────────────────────────
        // Student assigns each item to one of the categories via dropdown.
        {
          id: "p1a1",
          type: "classification",
          typeLabel: "Activity 1 of N - Classification",
          points: 3,
          instruction: "[TBD instruction line shown above the items.]",
          objectiveIds: ["6.x-objective-1"],
          items: [
            { id: "i1", text: "[TBD item 1 text]", correct: "cat-a", explanation: "[TBD explanation for this item.]" },
            { id: "i2", text: "[TBD item 2 text]", correct: "cat-b", explanation: "[TBD explanation.]" },
            { id: "i3", text: "[TBD item 3 text]", correct: "cat-a", explanation: "[TBD explanation.]" }
          ],
          categories: [
            { id: "cat-a", label: "[TBD Category A]" },
            { id: "cat-b", label: "[TBD Category B]" }
          ],
          feedback: {
            correct: "[TBD shown when all items are correct.]",
            incorrect: "[TBD shown when at least one item is wrong — explain the discriminator.]",
            whyMatters: "[TBD why the distinction matters operationally.]",
            evidenceClue: "[TBD pointer back to the evidence cards above.]"
          }
        },

        // ── DECISION (single-choice best answer) ───────────────────
        {
          id: "p1a2",
          type: "decision",
          typeLabel: "Activity 2 of N - Best Answer",
          points: 1,
          instruction: "[TBD prompt — usually a 'what should the intelligence officer do?' style question.]",
          objectiveIds: ["6.x-objective-1"],
          options: [
            { id: "a", text: "[TBD correct option text]", correct: true, explanation: "[TBD why this is correct.]" },
            { id: "b", text: "[TBD distractor 1]", explanation: "[TBD why this is wrong.]" },
            { id: "c", text: "[TBD distractor 2]", explanation: "[TBD why this is wrong.]" },
            { id: "d", text: "[TBD distractor 3]", explanation: "[TBD why this is wrong.]" }
          ],
          feedback: {
            correct: "[TBD]",
            incorrect: "[TBD]",
            whyMatters: "[TBD]",
            evidenceClue: "[TBD]"
          }
        },

        // ── FILLSLOT (sentence with dropdown slots) ────────────────
        {
          id: "p1a3",
          type: "fillslot",
          typeLabel: "Activity 3 of N - Fill the Assessment",
          points: 2,
          instruction: "[TBD instruction — usually 'complete the assessment sentence'.]",
          objectiveIds: ["6.x-objective-1"],
          sentence: [
            { type: "text", text: "[TBD opening text] " },
            { type: "slot", id: "slot1", options: ["[TBD A]", "[TBD B]", "[TBD C]"], correct: "[TBD A]", explanation: "[TBD why slot 1 is this answer.]" },
            { type: "text", text: " [TBD bridging text] " },
            { type: "slot", id: "slot2", options: ["[TBD X]", "[TBD Y]"], correct: "[TBD X]", explanation: "[TBD why slot 2 is this answer.]" },
            { type: "text", text: " [TBD closing text]." }
          ],
          feedback: {
            correct: "[TBD]",
            incorrect: "[TBD]",
            whyMatters: "[TBD]",
            evidenceClue: "[TBD]"
          }
        },

        // ── MATCHING (term <-> definition pairs) ───────────────────
        {
          id: "p1a4",
          type: "matching",
          typeLabel: "Activity 4 of N - Matching",
          points: 4,
          instruction: "[TBD instruction — usually 'match each term to the correct description'.]",
          objectiveIds: ["6.x-objective-1"],
          items: [
            { id: "m1", text: "[TBD Term 1]", explanation: "[TBD plain-English description of Term 1 — shown after submit.]" },
            { id: "m2", text: "[TBD Term 2]", explanation: "[TBD description of Term 2.]" }
          ],
          targets: [
            { id: "t1", text: "[TBD description that matches Term 1]", correct: "m1" },
            { id: "t2", text: "[TBD description that matches Term 2]", correct: "m2" }
          ],
          feedback: {
            correct: "[TBD]",
            incorrect: "[TBD]",
            whyMatters: "[TBD]",
            evidenceClue: "[TBD]"
          }
        },

        // ── SEQUENCING (correct order) ─────────────────────────────
        {
          id: "p1a5",
          type: "sequencing",
          typeLabel: "Activity 5 of N - Put in Order",
          points: 3,
          instruction: "[TBD instruction — e.g. 'arrange these steps in the correct sequence'.]",
          objectiveIds: ["6.x-objective-1"],
          items: [
            { id: "s1", text: "[TBD step 1 - first]", explanation: "[TBD why s1 is first.]" },
            { id: "s2", text: "[TBD step 2]", explanation: "[TBD why s2 follows.]" },
            { id: "s3", text: "[TBD step 3 - last]", explanation: "[TBD why s3 is last.]" }
          ],
          correct: ["s1", "s2", "s3"],
          feedback: {
            correct: "[TBD]",
            incorrect: "[TBD]",
            whyMatters: "[TBD]",
            evidenceClue: "[TBD]"
          }
        },

        // ── RANKING (rank each item 1..N) ──────────────────────────
        {
          id: "p1a6",
          type: "ranking",
          typeLabel: "Activity 6 of N - Ranking",
          points: 3,
          instruction: "[TBD instruction — e.g. 'rank from most to least imminent'.]",
          objectiveIds: ["6.x-objective-1"],
          items: [
            { id: "r1", text: "[TBD item — rank 1]", correctRank: 1, explanation: "[TBD why this is rank 1.]" },
            { id: "r2", text: "[TBD item — rank 2]", correctRank: 2, explanation: "[TBD why this is rank 2.]" },
            { id: "r3", text: "[TBD item — rank 3]", correctRank: 3, explanation: "[TBD why this is rank 3.]" }
          ],
          feedback: {
            correct: "[TBD]",
            incorrect: "[TBD]",
            whyMatters: "[TBD]",
            evidenceClue: "[TBD]"
          }
        },

        // ── MULTISELECT (choose all that apply) ────────────────────
        {
          id: "p1a7",
          type: "multiselect",
          typeLabel: "Activity 7 of N - Select All That Apply",
          points: 3,
          instruction: "[TBD instruction — e.g. 'select ALL of the following that are X'.]",
          objectiveIds: ["6.x-objective-1"],
          options: [
            { id: "ms1", text: "[TBD correct option 1]", correct: true,  explanation: "[TBD why correct.]" },
            { id: "ms2", text: "[TBD correct option 2]", correct: true,  explanation: "[TBD why correct.]" },
            { id: "ms3", text: "[TBD distractor 1]",     correct: false, explanation: "[TBD why this is NOT the answer.]" },
            { id: "ms4", text: "[TBD distractor 2]",     correct: false, explanation: "[TBD why this is NOT the answer.]" }
          ],
          feedback: {
            correct: "[TBD]",
            incorrect: "[TBD]",
            whyMatters: "[TBD]",
            evidenceClue: "[TBD]"
          }
        }
      ]
    },

    // -------------------------------------------------------------
    // PHASE 2 — Skeleton (duplicate activities from phase 1 as needed)
    // -------------------------------------------------------------
    "phase-2-tbd": {
      id: "phase-2-tbd",
      title: "Phase 2 - [TBD Domain Title]",
      subtitle: "[TBD Lesson Reference]",
      domain: "tbd",
      objectiveIds: [],
      inject: `[TBD phase 2 inject.]`,
      evidenceCards: [],
      activities: []
    },

    // -------------------------------------------------------------
    // PHASE 3 — Skeleton
    // -------------------------------------------------------------
    "phase-3-tbd": {
      id: "phase-3-tbd",
      title: "Phase 3 - [TBD Domain Title]",
      subtitle: "[TBD Lesson Reference]",
      domain: "tbd",
      objectiveIds: [],
      inject: `[TBD phase 3 inject.]`,
      evidenceCards: [],
      activities: []
    },

    // -------------------------------------------------------------
    // FINAL PHASE — Commander Synthesis Brief
    // The final phase typically reuses evidence/conclusions from
    // earlier phases and asks the student to integrate them into a
    // BLUF + indicator matrix + COA sort + gaps + final PIR call.
    // -------------------------------------------------------------
    "phase-4-final": {
      id: "phase-4-final",
      title: "Phase 4 - Commander Synthesis Brief",
      subtitle: "Final Review - PIR Answer & Multi-Domain Integration",
      domain: "review",
      objectiveIds: [],
      inject: `[TBD final-phase inject.  Restate the commander PIR and tell the student exactly what synthesis product is expected — BLUF, indicators, MLCOA, MDCOA, gaps, final PIR call.]`,
      evidenceCards: [
        {
          id: "e-final-1",
          domain: "review",
          title: "Commander PIR - Restated for the Brief",
          summary: "[TBD restated PIR.]",
          detail: "[TBD detail on what the synthesis product must contain.]"
        }
      ],
      activities: []
    }

  }
};
