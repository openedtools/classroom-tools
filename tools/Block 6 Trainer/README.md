# Block 6 Trainer — Blank Canvas

This is a clone of the Block 4 (Operation Northern Veil) trainer with all
scenario-specific content stripped out and replaced with `[TBD]` placeholders.
The UI, scoring, activity types, instructor mode, glossary, sources modal,
completion report, and all other UX behavior are identical to Block 4.

## Files in this folder

| File | What it is |
| --- | --- |
| `Block 6 Trainer.html` | Entry point. Open this in a browser. |
| `phaseData.js` | **Per-phase content** — inject text, evidence cards, activities. **Edit this to add Block 6 content.** |
| `app.jsx` | React app. Do not change unless you want UI changes. |
| `styles.css` | Shared styles, identical to Block 4. |
| `tweaks-panel.jsx` | Tweaks panel (accent, density, classification, map options). |
| `assets/` | Map images. Replace if Block 6 uses a different region. |

## Sister data folder

The trainer also fetches scenario metadata as JSON from a sibling directory:

```
tools/intel-scenario-trainer/scenarios/block-6-tbd/
  scenario.json     ← commander PIR, situation text, region
  phases-v2.json    ← phase ids/titles/summaries shown in the nav
  objectives.json   ← block objectives shown in coverage sidebar
  actors.json       ← ORBAT panel
  glossary.json     ← glossary modal
```

The phase IDs in `phases-v2.json` must match the keys in `phaseData.js`
under `phases:`. The `block-6-tbd` folder name is referenced in `app.jsx`
as `DATA_BASE` — rename both together if you give the scenario a real
short name.

## What to edit when you fill in Block 6

1. `phaseData.js`:
   - Set `config.opName`, `config.opCode`, `config.studentPassword`.
   - Define each phase under `phases:` with its inject text, evidence
     cards, and activities. Phase 1 in the skeleton shows one example
     of every supported activity type — copy/delete as needed.
2. `tools/intel-scenario-trainer/scenarios/block-6-tbd/`:
   - Fill in `scenario.json` (commander PIR, situation text).
   - Fill in `phases-v2.json` to match the phase IDs in `phaseData.js`.
   - Fill in `objectives.json`, `actors.json`, `glossary.json`.
3. `Block 6 Trainer.html`:
   - Update the `<title>` once you have an operation name.
4. `app.jsx` — only if you want different chrome:
   - `BLOCK 6 APPLIED REVIEW` sub-line in `TopBar`.
   - Mission-brief sub-line under `MissionBrief`.
   - `BEGIN PHASE 01` text under `BeginBar`.
   - Default pin label (currently `[TBD FOCUS]`).
   - `INSTRUCTOR_PASSWORD` (currently `IITCInstructors`).

## Supported activity types

`classification`, `decision`, `fillslot`, `matching`, `sequencing`,
`ranking`, `multiselect`. See the comment block at the top of
`phaseData.js` for shape examples.
