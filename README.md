# KH Completionist

A standalone, static Kingdom Hearts 100% completion tracker, served by
GitHub Pages. No accounts, no backend — every checkbox is saved in your
browser's `localStorage`, and nothing leaves your device.

> The site name "KH Completionist" lives in the lang files (the
> `logo-name` / `page-title` keys), so it can be changed in one place per
> language without touching any HTML.

## Structure

```
index.html                  Landing page — series total + per-game progress
tools/index.html            Tools listing (Games > series > game > tool cards)
tools/kh1-tracker.html …    One Achievement Tracker page per game
tools/kh-melding.html       KH Birth by Sleep — Command Melding Calculator
css/main.css                Shared theme (night + day palettes, landing, banners)
css/kh.css                  KH game-tool styles (tables, checklists, melding)
js/i18n.js                  Language system (loads one JSON per page)
js/theme.js                 Night/Day theme toggle (night is the default)
js/banners.js               Reveals a game banner only once its image loads
js/kh-summary.js            DOM-free completion totals (used by the landing page)
js/landing.js               Builds the landing page from those totals
js/kh-tracker.js            Generic tracker engine (TRACKER_GAME data modules)
js/kh-bbs-tracker.js        Birth by Sleep tracker engine
js/kh-*-data.js             Per-game data modules
lang/messages/en|fr/        All visible text, one JSON file per page
images/banners/             Optional per-game banner photos — see its README
images/kh/                  Command-type icons — see images/kh/README.md
```

## Landing page & progress totals

`index.html` shows total completion across the whole series plus one card
per game, each linking to its tracker. The numbers are computed live from
`localStorage` by `js/kh-summary.js`, which mirrors the two tracker
engines' counting exactly but without any DOM — so progress shows for
**every** game whether or not its tracker has been opened. Each generic
game registers itself on `window.KH_GAMES` (see the data modules) and
Birth by Sleep exposes `window.KH_BBS_DATA`, letting the landing page load
them all on one page.

## Theme (night / day)

A Night/Day toggle sits in the top-right of every page. **Night is the
default** (the dark palette); Day is an opt-in, muted light palette. The
choice persists in `localStorage` (`preferred-theme`) and is applied in
`<head>` before first paint, so there is no bright flash. Both palettes
are CSS variables in `css/main.css` (`:root` and `[data-theme="day"]`).
Per-game background art and tinting will be layered on top of these.

## Banners

Each game can have a banner photo in `images/banners/` — see
`images/banners/README.md` for the expected filenames. Banners are
optional: a missing file simply shows nothing (no broken-image icon).

## Editing text

No text is hardcoded in the HTML. Every page loads its strings from
`lang/messages/en/<page>.json` (and `…/fr/…`) — edit those to change
content. Keys map to element `id`s. (The French translations are a
work in progress.)

## Trackers

The two Birth by Sleep tools share `localStorage`: the active character is
the same in both, and commands marked owned in the melding calculator
(`bbs_meld_tracker_v1`) appear unlocked in the tracker. Tracker progress
is keyed by item index, so keep item order stable in the
`js/*-tracker-data.js` modules.

Other games use the generic engine: `js/kh-tracker.js` renders any game
described by a `TRACKER_GAME` config (tabs > sections, optional per-
character variants). Adding a game = one data module + one page copied
from `tools/kh2-tracker.html` + two lang JSON files, then add it to the
`GAMES` list in `js/landing.js`. Game order: KH1, Chain of Memories, KH2,
Birth by Sleep, Dream Drop Distance, 0.2, then KH3.

## URLs

Internal links use the `.html` suffix so they work on any server
(including local `python -m http.server`). The home page is linked as `/`
and the tools index as `/tools/`. GitHub Pages also serves every page
without the suffix.
