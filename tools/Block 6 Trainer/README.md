# Block 6 Trainer — Operation Iron Anvil

Coalition AOC scenario picking up after Operation Northern Veil. Donovia
invaded Gorgas and seized the Zabzimek Corridor. The student is now an
international Liaison Officer at the Coalition AOC at Atropian Air Base,
learning the air tasking cycle across all Block 6 lessons.

## Phases

| # | Phase | Lesson |
| --- | --- | --- |
| 0 | Scenario Orientation | — |
| 1 | Establishing the Coalition Command | 6.1 Joint Forces |
| 2 | Building the Air Control System | 6.2 TACS |
| 3 | Welcome to the AOC | 6.3 AOC |
| 4 | The Strategy Team Has a Problem | 6.4 SRD |
| 5 | The Planning Frenzy | 6.5 CPD |
| 6 | The Heat of Execution | 6.6 COD |
| 7 | Eyes Everywhere | 6.7 ISRD |
| 8 | Crisis at FOB Ararat | 6.8 AMD |
| 9 | Final Synthesis | All Block 6 lessons |

## Files in this folder

| File | What it is |
| --- | --- |
| `Block 6 Trainer.html` | Entry point. Open this in a browser. |
| `phaseData.js` | Per-phase content for all 10 phases. |
| `app.jsx` | React app. Same as Block 4 with Block 6 chrome. |
| `styles.css` | Shared styles, identical to Block 4. |
| `tweaks-panel.jsx` | Tweaks panel (accent, density, classification, map options). |
| `assets/` | Map images. |

## Sister data folder

Scenario metadata as JSON:

```
tools/intel-scenario-trainer/scenarios/block-6-operation-iron-anvil/
  scenario.json     ← JFACC mission, situation text, region
  phases-v2.json    ← phase nav (id, sequence, title, shortLabel, summary)
  objectives.json   ← Block 6 objectives (6.1 through 6.8)
  actors.json       ← CJTF-CAU, Donovia, Gorgas, partners
  glossary.json     ← Block 6 terms (COCOM, OPCON, AOC, TACS, etc.)
```

## Student access

- Student password (set in `phaseData.js` → `config.studentPassword`): `OperationIronAnvil`
- Instructor password (hardcoded in `app.jsx`): `IITCInstructors`

## Known follow-ups

- `objectives.json` was generated from the objective IDs referenced
  across phases with titles inferred from the scenario content. Refine
  these against the actual Block 6 LPs in
  `Block 6\Practical\LPs\` if you want exact LP language.
- 6.7 ISRD has no LP in the LPs folder yet; objectives for 6.7 in
  `objectives.json` were derived from the scenario content only.
- `restoredThrough` in `phaseData.js` is set to `phase-9-synthesis`.
