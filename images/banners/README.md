# Game banner images

Drop banner photos here to make them appear on the landing page and at
the top of each game's tracker. Banners are **optional** — any file that
is missing simply shows nothing (no broken-image icon), so you can add
them one at a time.

Expected filenames (JPEG, `.jpg`):

| File          | Where it shows                                            |
|---------------|-----------------------------------------------------------|
| `series.jpg`  | Landing page hero (whole-series banner)                   |
| `kh1.jpg`     | KH Final Mix — landing card + tracker header              |
| `khcom.jpg`   | Re:Chain of Memories — landing card + tracker header      |
| `kh2.jpg`     | Kingdom Hearts II — landing card + tracker header         |
| `bbs.jpg`     | Birth by Sleep — landing card + tracker + melding header  |
| `khddd.jpg`   | Dream Drop Distance — landing card + tracker header       |
| `kh02.jpg`    | Kingdom Hearts 0.2 — landing card + tracker header        |
| `kh3.jpg`     | Kingdom Hearts III — landing card + tracker header        |

Notes
- The basename must match exactly (it is the game's `id`). If you prefer a
  different image format, change the `.jpg` extension in `js/landing.js`
  (`bannerFigure`) and in each `tools/*.html` banner `<img src>`.
- Wide images work best (they span the card / page width). The per-game
  background art and night/day tinting will be layered on top of these
  later.
