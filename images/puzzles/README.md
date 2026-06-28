# Puzzle icons

These PNGs are the puzzle-piece icons used by the **Journal** view of the
KH2 Achievement Tracker's Puzzles tab. Each of the six KH2 puzzles has one
icon; every piece tile in the journal shows the icon of the puzzle it
belongs to (over a per-puzzle gradient) once owned. Unowned tiles share
`images/commands/cmd-incomplete.png`.

**To add/replace one: drop the PNG in this folder using the filename
below.** Square PNGs work best (they render at ~60 px, so ~64–128 px
sources look good). Tiles are full-bleed, so art that fills the square
(like the in-game puzzle thumbnails) looks best; until a file is present
the tile shows its gradient placeholder.

| File | Puzzle |
| --- | --- |
| `puzzle-awakening.png` | Awakening |
| `puzzle-heart.png` | Heart |
| `puzzle-duality.png` | Duality |
| `puzzle-frontier.png` | Frontier |
| `puzzle-daylight.png` | Daylight |
| `puzzle-sunset.png` | Sunset |

The filename ↔ puzzle mapping lives in `js/kh2-tracker-data.js` under the
Puzzles section's `journal.icons.map`, and the per-puzzle gradients are the
`.jrnl-tile.jt-icon.cat-<name>` rules in `css/kh.css`.
