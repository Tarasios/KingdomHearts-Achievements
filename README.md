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

### Also lives at tarasios.ca, with progress sync

The same app is mirrored as a self-contained section of
[tarasios.ca](https://tarasios.ca/games/kingdom-hearts/). Because
`localStorage` is per-origin, the GitHub Pages copy and the tarasios.ca copy
keep separate saves. Each tool page has a **Sync** button (next to
Export/Import) that merges progress **both ways** with the other origin: it
opens the partner site's `bridge.html` in a pop-up (a first-party context, so
its storage is always readable), and the two windows exchange and union their
saves over `postMessage` — a check on either side wins, nothing is lost. The
partner origins are configured at the top of `js/kh-sync.js`; on any other
origin (e.g. `localhost`) the button simply doesn't appear. Manual JSON
Export/Import remains the always-works fallback.

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
credits.html                Credits page (guides + wiki the trackers were built from)
tools/index.html            Tools listing (Games › series › game › tool cards)
tools/kh1-tracker.html …    One tracker page per game
tools/kh-melding.html       Birth by Sleep — Command Melding Calculator
tools/kh-dream-guide.html   Dream Drop Distance — Dream Eater guide
css/main.css                Shared theme (night + day palettes, landing, banners)
css/kh.css                  Game-tool styles (tables, checklists, world view, melding)
js/i18n.js                  Language system (class I18n; loads one JSON per page)
js/theme.js                 Night/Day theme toggle (night is the default)
js/nav.js                   Site chrome: header nav (built from ONE menu
                            definition), Games dropdown, Credits footer, SW registration
js/kh-common.js             KH namespace: DOM/text helpers + KH.KEYS (every
                            cross-file localStorage key in one place)
js/kh-page.js               KH.Page — shared page lifecycle (i18n init,
                            translate/format, language/storage re-render hooks)
js/kh-store.js              Persistence classes: JsonStore, TrackerStore,
                            BbsStore (incl. the arena migration), ViewStore, CharPref
js/kh-counting.js           KH.GameCounter + KH.BbsCounter — the single, DOM-free
                            source of all completion math and auto-unlock cascades
js/kh-widgets.js            Shared tracker UI: Popover, MilestoneToaster,
                            toolbar / view toggle / world entry table / char buttons
js/kh-summary.js            Thin façade binding the counters to localStorage
                            snapshots (used by the landing page)
js/landing.js               LandingPage (a KH.Page) — builds the landing page
js/kh-tracker.js            GenericTrackerPage — engine for TRACKER_GAME modules
js/kh-bbs-tracker.js        BbsTrackerPage — bespoke Birth by Sleep engine
js/kh-melding.js            Birth by Sleep melding calculator
js/kh-progress.js           Export / Import bar (backs up all KH localStorage keys)
js/kh-sync.js               Cross-origin progress Sync button + bridge logic
js/*-tracker-data.js        Per-game data modules (plain data, no logic)
sw.js                       Service worker (caches the heavy data modules + images)
bridge.html                 Sync pop-up, opened by the partner site (see kh-sync.js)
lang/messages/en|fr/        All visible text, one JSON file per page
images/                     backgrounds, banners, heroes, logos, command icons
dev/verify/                 Dev-only Playwright checks: golden.js (golden-master
                            diff of every page's rendered numbers under a committed
                            localStorage fixture) + smoke.js (behavior suite)
```

### How the trackers work

Most games run on the generic engine (`js/kh-tracker.js`), whose
`GenericTrackerPage` class renders any game described by a `TRACKER_GAME`
config (tabs › sections, optional per-character variants, an opt-in
`worldSummary`). Birth by Sleep has its own `BbsTrackerPage`
(`js/kh-bbs-tracker.js`) and shares `localStorage` with the melding calculator.

Both engines are `KH.Page` subclasses composed from the same shared parts:
stores from `js/kh-store.js` own persistence and the save-file shapes;
`KH.GameCounter` / `KH.BbsCounter` (`js/kh-counting.js`) own every counting
rule and auto-unlock cascade — the SAME instances of that math also power the
landing page through `js/kh-summary.js`, so a rule changed there changes
everywhere; and `js/kh-widgets.js` provides the toolbar, popover, toast and
world-table UI. Progress is keyed by item index, so keep item order stable in
the data modules.

Before shipping a change, run the verification suite (needs Node + Playwright
with Chromium, site served locally):

```bash
node dev/verify/golden.js     # rendered numbers match the committed baseline
node dev/verify/smoke.js      # pages load clean, ticks persist, nav/i18n behave
```

If a change intentionally alters counted output, re-baseline with
`node dev/verify/golden.js --baseline` and say why in the commit.

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

1. Write a data module (`js/khX-tracker-data.js`) following the `TRACKER_GAME`
   shape in `js/kh-com-tracker-data.js`, and give it a fresh `storeKey` prefix
   (add that prefix to `KH.KEYS.RE` in `js/kh-common.js` so Export/Sync move it).
2. Copy `tools/kh2-tracker.html`, change its 4 page-specific lines (title,
   `data-page`, logo image, data-module script tag).
3. Add `lang/messages/en/khX-tracker.json` (and `fr/` when translated).
4. Add the game to `GAMES_MENU` in `js/nav.js` (one place — every page's menu)
   and to the `LANDING_GAMES`/`LANDING_COLLECTIONS` lists in `js/landing.js`.

Images go in `images/` by fixed path; any image that fails to load is simply
hidden. If the data module's filename doesn't end in `-tracker-data.js`, also
extend the `HEAVY` regex in `sw.js` so it gets cached.
