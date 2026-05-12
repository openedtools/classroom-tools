# Intel Scenario Trainer — Static MVP

A dependency-free static web app that drives intelligence-training scenarios for IITC / IIAOC. The first scenario pack is **Block 4 — Operation Northern Veil**, set in the fictional Eurasia operating environment.

This is a **scenario engine**, not a one-off page. New scenario packs are added by creating a folder under `scenarios/` — no core code changes.

## Run it

The app uses `fetch()` to load local JSON, which most browsers block on `file://` for security. Serve the folder over a tiny static server:

```bash
# from this folder:
python -m http.server 8000
# then open:
#   http://localhost:8000/
```

Any other static server works (`npx serve`, `php -S`, VS Code Live Server, etc.). No npm install. No build step.

## What you'll see

- **Top bar** — scenario selector, progress, Export, Reset.
- **Left sidebar** — phase rail (Overview → Final Assessment) and an Objective Coverage tracker (presented → applied → evaluated).
- **Center workspace** — an interactive SVG map of the Eurasia region with layer toggles (Political / Terrain / GEOINT / Radar / IR / Cyber / Space) and preset views (Regional / Donovia-Gorgas Border / Gorgas / Caucasus / Donovia).
- **Right panel** — current inject card, evidence cards, student tasks (concept tagging, single-select, kill-chain ordering, short answer, confidence slider), analyst notes.
- **Final Assessment** — BLUF / Most likely COA / Most dangerous COA / indicators / gaps / recommended collection / confidence + Markdown and JSON export.

Donovia renders in muted sage, Gorgas in muted red, the Donovia-Gorgas border in a 2.5px muted-red highlight. Other countries are neutral gray. Colors come from `assets/maps/eurasia/styles/map_styles.json` and can be retuned without touching code.

## Folder layout

```
intel-scenario-trainer/
  index.html
  README.md
  styles/main.css
  src/
    app.js               # orchestrator
    scenarioLoader.js    # fetch scenario-pack JSON
    state.js             # session state + localStorage
    mapRenderer.js       # GeoJSON -> SVG (no map library)
    ui.js                # render functions
    export.js            # Markdown + JSON download
  scenarios/
    index.json
    block-4-operation-northern-veil/
      scenario.json  actors.json   objectives.json
      phases.json    injects.json  evidence.json
      mapLayers.json rubrics.json  glossary.json
    block-5-pacific-stub/         # proves the engine is content-driven
  assets/
    maps/eurasia/
      map_manifest.json
      geojson/  (countries_simplified, donovia_gorgas_border, capitals, etc.)
      styles/map_styles.json
```

## How a scenario pack works

A scenario pack is **only** local files. The core app does not know any scenario-specific names, places, or objectives until it loads the pack.

Each pack needs nine JSON files. Minimum schemas:

- `scenario.json` — id, title, block, region, summary, commanderPIR, `objectiveFamilies` (drives the coverage tracker).
- `phases.json` — `[{ id, sequence, title, shortLabel, summary }]`.
- `injects.json` — story beats. Each inject lists `phaseId`, `presetView`, `mapLayersToEnable`, `evidenceIds`, `objectivesCovered`, and `studentTasks`. Set `isFinalAssessment: true` on the last inject to swap the right panel into the final builder.
- `evidence.json` — `[{ id, type, title, summary, details }]`. The `type` drives the colored left-border accent in the UI (imagery-report, elint-report, cyber-report, io-report, ir-report, space-report, commander-guidance, osint-note).
- `mapLayers.json` — a list of layer objects. Each non-`political` layer is `{ id, title, defaultVisible, annotations: [...] }`. Annotation shapes supported: `marker`, `circle` (lat/lon center + radiusKm), `arc` (center + radiusKm + start/endAngle in degrees), `box` (bbox), `line` (lon/lat coords).
- `objectives.json`, `actors.json`, `rubrics.json`, `glossary.json` — supporting reference (rubrics and glossary are not yet surfaced in the v1 UI; objectives back the coverage labels indirectly).

### Task types supported by `injects.json`

| `type`            | UI                                                | Auto-feedback              |
|-------------------|---------------------------------------------------|----------------------------|
| `concept-tagging` | multi-select chips; `correctTags` optional        | ✓/✗ if `correctTags` set   |
| `single-select`   | dropdown; `correctOption` optional                | ✓/✗ if `correctOption` set |
| `ordering`        | drag-to-reorder list; `correctOrder` optional     | ✓/✗ if `correctOrder` set  |
| `short-answer`    | textarea                                          | none (instructor-reviewed) |
| `confidence`      | 0–100 slider                                      | none                       |

### Adding a new scenario pack

1. Copy `scenarios/block-5-pacific-stub/` to `scenarios/<your-id>/`.
2. Edit the nine JSON files.
3. Add an entry to `scenarios/index.json` so it appears in the top-bar selector.

That's it. No code changes.

## Map assets

GeoJSON, manifest, and palette live in `assets/maps/eurasia/`. The MVP uses the **simplified** files for performance:

- `geojson/countries_simplified.geojson`
- `geojson/donovia_gorgas_border.geojson`
- `geojson/capital_cities.geojson`
- `geojson/country_label_points.geojson`
- `geojson/boundary_lines_simplified.geojson`
- `styles/map_styles.json`
- `map_manifest.json` (preset views + country metadata)

The renderer (`src/mapRenderer.js`) uses an equirectangular projection with a cos(midLat) longitude correction, reprojected per preset view. No tile servers, no Leaflet, no Mapbox.

## Persistence

Student work is mirrored to `localStorage` keyed by `ist:session:<scenarioId>`. The app works fine without it — closing the tab without it persisted just resets that session.

The **Reset** button clears storage for the current pack.

## Non-goals (v1)

No backend. No DB. No auth. No external APIs. No live operational data. No reproduction of controlled test items. No real grading engine.

## Acceptance check (v1)

- App runs locally over a static server.
- Loads Operation Northern Veil from local JSON.
- Phase rail, map dashboard with toggleable layers, inject workspace, evidence cards, student response widgets, objective coverage tracker, final assessment screen with Markdown + JSON export.
- Switching the scenario dropdown to the stub pack loads it cleanly — confirms the engine is generic.
