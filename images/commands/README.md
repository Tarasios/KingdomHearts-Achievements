# Command-type icons

These PNGs are the command-category icons used by the Kingdom Hearts
tools (the melding calculator's result rows / category headers, and the
group headers of the BBS Achievement Tracker's Command Collection).

**To replace one with your own art: overwrite the file, keep the same
filename.** Any square PNG works (they render at 17–19 px, so ~22–44 px
sources look best). The current files are programmatic recreations —
they're meant to be replaced by the real sprites.

| File | Category |
| --- | --- |
| `cmd-attack.png` | Attack Commands |
| `cmd-magic.png` | Magic Commands |
| `cmd-movement.png` | Action Commands — Movement |
| `cmd-defense.png` | Action Commands — Defense |
| `cmd-reprisal.png` | Action Commands — Reprisals |
| `cmd-shotlock.png` | Shotlock Commands |

## Adding the remaining categories

The BBS Command Collection also has Items, Friendship, Dimension Links,
Finish Commands and Abilities groups, which have no icons yet. To add
one (e.g. Dimension Links):

1. Drop the PNG in this folder, following the naming pattern —
   `cmd-dlink.png`.
2. Add the group → icon mapping in **both** places:
   - `js/kh-bbs-tracker.js`, the `GROUP_ICON` map (tracker group
     headers): `"Miscellaneous - Dimension Links": "dlink"`
   - `js/kh-melding.js`, the `ICON_GROUP` map (melding calculator),
     if the category's commands can appear there.

The exact group-heading strings to map are the `"g"` values in
`js/kh-bbs-tracker-data.js`:
`Battle Commands - Items`, `Battle Commands - Friendship`,
`Miscellaneous - Dimension Links`, `Miscellaneous - Finish Commands`,
`Miscellaneous - Abilities`.
