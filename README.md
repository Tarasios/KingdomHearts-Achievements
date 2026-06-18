# KH Completionist

A free, fast **100% completion tracker for the entire Kingdom Hearts series**.
Tick off every trophy, treasure, command, collectible and side-task across all
seven games — it runs entirely in your browser, with **no account, no backend,
and nothing leaving your device**.

**▶ Live site: <https://tarasios.github.io/KingdomHearts-Achievements/>**

> The site name "KH Completionist" lives in the language files (the `logo-name`
> / `page-title` keys), so it can be renamed in one place per language.

## Games covered

A dedicated tracker for each game, plus a Birth by Sleep command tool:

- **Kingdom Hearts** (Final Mix)
- **Chain of Memories** (Re:Chain of Memories)
- **Kingdom Hearts II** (Final Mix)
- **Birth by Sleep** (Final Mix)
- **Dream Drop Distance**
- **0.2 Birth by Sleep – A Fragmentary Passage**
- **Kingdom Hearts III**
- **Command Melding Calculator** for Birth by Sleep

## Features

- **Everything in checklists** — trophies/achievements, treasures, synthesis,
  journals & reports, minigames, and each game's special collectibles (KH2
  Puzzles & Mushroom XIII, KH3 Lucky Emblems & Flantastic Seven, BBS stickers
  & ice cream, CoM cards & sleights, DDD Dream Eaters & portals, and more).
- **Achievements vs. 100%** — the landing page shows two bars per game: how
  close you are to all the platform trophies, and to true 100% completion. You
  don't need every gummi ship or max rank to earn all the achievements, and the
  trackers know the difference.
- **Collectibles by World** — an optional per-world summary that gathers a
  game's collectibles by world, with live checkboxes synced to their home tabs.
- **Smart cross-offs** — checking one thing fills in the linked entry
  elsewhere: melding a command marks it owned, clearing an Unversed mission
  fills its journal + records, arena ↔ records stay in sync, and so on.
- **Per-character tracking** — where a game splits (Terra/Ventus/Aqua,
  Sora/Riku), each character keeps their own progress and signature accent colour.
- **Where to find it** — location notes and hover tips for collectibles (e.g.
  KH2 treasure locations, CoM map-card drop worlds).
- **Save, export, import** — progress is stored in your browser; back it up or
  move it between devices as a JSON file.
- **Completion toasts**, **day / night themes**, and **English / French**
  (French is a work in progress).
- **Fast & offline** — a service worker caches the heavy game data, so repeat
  visits load instantly and work without a connection.

## Your data stays yours

All progress lives in your browser's `localStorage`. No accounts, no analytics,
no server. The in-app reset (or clearing your browser data) wipes it, and an
export file is the only copy that ever leaves your device.

## Running it locally

It's a plain static site with no build step. Clone it and serve the folder over
HTTP so the language files can load — don't open the HTML directly with `file://`:

```bash
git clone https://github.com/tarasios/KingdomHearts-Achievements.git
cd KingdomHearts-Achievements
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## For contributors

Built with plain HTML, CSS and JavaScript — no framework, no bundler — served by
GitHub Pages. Every link and asset path is **relative**, so the site works the
same from a domain root, a GitHub project subpath, or `localhost`.

### Structure

```
index.html                  Landing page — series total + per-game progress
tools/index.html            Tools listing (Games › series › game › tool cards)
tools/kh1-tracker.html …    One tracker page per game
tools/kh-melding.html       Birth by Sleep — Command Melding Calculator
css/main.css                Shared theme (night + day palettes, landing, banners)
css/kh.css                  Game-tool styles (tables, checklists, world view, melding)
js/i18n.js                  Language system (loads one JSON per page)
js/theme.js                 Night/Day theme toggle (night is the default)
js/kh-summary.js            DOM-free completion totals (used by the landing page)
js/landing.js               Builds the landing page from those totals
js/kh-tracker.js            Generic tracker engine (TRACKER_GAME data modules)
js/kh-bbs-tracker.js        Birth by Sleep tracker engine
js/kh-melding.js            Birth by Sleep melding calculator
js/*-tracker-data.js        Per-game data modules
sw.js                       Service worker (caches the heavy data modules + images)
lang/messages/en|fr/        All visible text, one JSON file per page
images/                     backgrounds, banners, heroes, logos, command icons
```

### How the trackers work

Most games run on the generic engine (`js/kh-tracker.js`), which renders any
game described by a `TRACKER_GAME` config (tabs › sections, optional per-character
variants, an opt-in `worldSummary`). Birth by Sleep has its own engine
(`js/kh-bbs-tracker.js`) and shares `localStorage` with the melding calculator.
Progress is keyed by item index, so keep item order stable in the data modules.

### Editing text

No text is hardcoded in the HTML — every page loads its strings from
`lang/messages/en/<page>.json`. A tracker's per-item text (names, "where to find
it", "how to obtain it", rewards, descriptions …) lives in that file under an
`"items"` map, keyed by section then item index, matching the data module order:

```json
"items": { "<section>": [ { "name": "…", "where": "…" }, … ] }
```

Header and item text supports three inline shorthands (everything else is
escaped — no raw HTML):

- `{{name}}` → a small inline icon from `images/icons/name.png`.
- `[[text|tip]]` → `text` with a dotted underline that shows `tip` on hover.
- `[text](https://…)` → a link.

### Adding a game

One data module + a page copied from `tools/kh2-tracker.html` + two lang JSON
files, then add it to the `GAME`/collection lists in `js/landing.js`. Images go
in `images/` by fixed path; any image that fails to load is simply hidden.
