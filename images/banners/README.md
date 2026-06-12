# Game selector banners

Wide banner tiles used as the "pick this game" cards on the landing page
(`index.html`), plus `series.jpg` for the landing hero.

Current files (the per-game filename, including extension, is listed in
`js/landing.js` under `GAME` — update it there if you change one):

| File         | Game / use                         |
|--------------|------------------------------------|
| `series.jpg` | Landing hero                       |
| `kh1.png`    | Kingdom Hearts Final Mix           |
| `khcom.png`  | Re:Chain of Memories               |
| `kh2.jpg`    | Kingdom Hearts II                  |
| `bbs.png`    | Birth by Sleep                     |
| `khddd.png`  | Dream Drop Distance                |
| `kh02.png`   | Kingdom Hearts 0.2                 |
| `kh3.jpg`    | Kingdom Hearts III                 |

Any banner that fails to load is hidden (no broken-image icon), so the
card keeps its title + progress row. Wide art (~2:1) works best.

Related image folders: `../backgrounds/` (per-game night wallpapers),
`../heroes/` (wide hero strips, incl. the HD-collection heroes used on the
landing page), `../logos/` (transparent logos shown in tracker headers).
