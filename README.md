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
images/backgrounds/         Per-game page wallpapers (Background_<GAME>.png)
images/banners/             Per-game selector banners (landing cards)
images/heroes/              Wide hero strips (per game + per HD collection)
images/logos/               Transparent game logos (shown in tracker headers)
images/commands/            Command-type icons — see images/commands/README.md
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

In **night** mode each tracker page also shows its own dark KH-motif
wallpaper from `images/backgrounds/` (keyed on the page's `data-page` in
`css/main.css`). 0.2 uses an Aqua-blue–tinted version of the Birth by
Sleep wallpaper (`Background_KH02.png`, generated from `Background_BBS.png`).
Bright per-game backgrounds for **day** mode are not wired up yet — day
falls back to the shared light palette.

## Images

All images live under `images/` and are referenced by fixed paths, so
adding/replacing a file just works:

- `backgrounds/Background_<GAME>.png` — night wallpaper per game.
- `banners/<id>.(png|jpg)` — the selector banner on the landing page; the
  exact filename per game is listed in `js/landing.js` (`GAME`).
- `heroes/<name>.(png|jpg)` — wide hero strips; the landing page uses the
  collection heroes `kh1525` and `kh28`, plus `kh3`.
- `logos/<GAME>.png` — transparent logo shown at the top of each tracker.

Any image that fails to load is hidden (no broken-image icon).

## Editing text

No text is hardcoded in the HTML. Every page loads its strings from
`lang/messages/en/<page>.json` — edit those to change content. Most keys
map to an element `id`; a tracker's **per-item** text (names, "where to
find it", "how to obtain it", rewards, descriptions …) lives in that same
file under an `"items"` map:

```
"items": { "<section>": [ { "name": "…", "where": "…" }, … ] }
```

keyed by section (its store id; per-character sections use
`<section>-<char>`) then item index, matching the order in the game's
`js/*-tracker-data.js` module. The data module now holds only structure
plus each item's `name`, kept as a stable id for trophy / auto-unlock
matching (KH1 also keeps `num`; Birth by Sleep also keeps `g`, the arena
`rank`, mission `reward` and the per-character flavor locations, which the
engine uses as ids). So to edit visible tracker text, edit the lang file;
the engine falls back to the data module for any field not yet moved. Keep
item order in sync between the two. All seven games work this way now. (The
French files are a work in progress.)

### Inline markup (icons & tooltips)

Any tracker header or item name in a lang file can use two shorthands
(everything else is escaped — no other HTML is allowed):

- `{{name}}` → a small inline icon from `images/icons/name.png`, sized to
  the text. E.g. set `bt-finish-for` to `{{finish}} Finish Commands — %1`.
  Leave it out and the header is unchanged.
- `[[text|tip]]` → `text` with a dotted underline that shows `tip` on
  hover. E.g. `Defeat [[Vanitas|Badlands, after the Final Episode]]`.

See `images/icons/README.md`.

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

## URLs & paths

All links and asset references are **relative**, never root-absolute, so
the site works the same whether it is served from a domain root
(`example.com/`), a GitHub project subpath
(`user.github.io/KingdomHearts-Achievements/`), or a local
`python -m http.server`. Root-level pages reference `css/…`, `js/…`,
`images/…`; pages in `tools/` use `../css/…` etc., and each page's
`data-root` (`./` at the root, `../` in `tools/`) tells `js/i18n.js` where
to find `lang/`. Keep new references relative — a leading `/` will 404 on
a project subpath.
