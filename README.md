# tarasios.ca

Personal site, served by GitHub Pages (custom domain via `CNAME`).

## Structure

```
index.html                  Landing page (about me)
tools/index.html            Tools listing (Games > series > game > tool cards)
tools/kh-melding.html       KH Birth by Sleep — Command Melding Calculator
tools/kh-bbs-tracker.html   KH Birth by Sleep — Achievement Tracker
projects/<name>.html        One page per project
projects/project-template.html  Copy this to add a new project (instructions inside)
css/                        Stylesheets (main.css = shared theme, kh.css = KH game tools)
js/                         Scripts (i18n.js = language system, one file per page;
                            kh-*-data.js = game data modules)
lang/messages/en|fr/        All visible text, one JSON file per page
images/                     Project screenshots (pages hide the slot if missing)
images/kh/                  Command-type icons — see images/kh/README.md to
                            replace them with your own PNGs or add new ones
```

The two Birth by Sleep tools share localStorage: the active character is the
same in both, and commands marked as owned in the melding calculator
(`bbs_meld_tracker_v1`) appear as unlocked in the tracker's Command
Collection (`bbs_progress_v1`). Tracker progress is keyed by item index, so
keep item order stable in the `js/*-tracker-data.js` modules.

Other games use the generic tracker engine: `js/kh-tracker.js` renders any
game described by a `TRACKER_GAME` config (tabs > sections, optional
per-character variants like Sora/Riku) — see `js/kh-com-tracker-data.js`
and `js/kh2-tracker-data.js`. Adding a game = one data module + one page
copied from `tools/kh2-tracker.html` + two lang JSON files. Game order on
the Tools page: KH1, Chain of Memories, KH2, Birth by Sleep, Dream Drop
Distance, then later titles.

## Editing text

No text is hardcoded in the HTML. Every page loads its strings from
`lang/messages/en/<page>.json` and `lang/messages/fr/<page>.json` — edit those
to change content. The EN/FR toggle in the top right persists via localStorage.

## URLs

Internal links use the `.html` suffix so they work on any server (including
local `python -m http.server`). The home page is linked as `/` and section
indexes as `/tools/`, so the address bar never shows `index.html`. GitHub
Pages also serves every page without the suffix (e.g.
`tarasios.ca/tools/kh-melding` works when deployed) — the suffix in links is
just the always-works option.
