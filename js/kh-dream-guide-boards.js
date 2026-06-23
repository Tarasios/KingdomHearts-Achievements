/* =====================================================================
   Kingdom Hearts Dream Drop Distance — Ability Link board layouts.

   THIS FILE IS SAFE AND EASY TO HAND-EDIT. It is the only place the
   per-Spirit boards live; the Dream Guide reads it straight from
   window.DG_BOARDS, so a change here shows up on the site immediately
   (just reload). No build step is required.

   Shape:
     window.DG_BOARDS = {
       boards: { "<Spirit>": [ <node>, <node>, ... ], ... },
       starts: { "<Spirit>": [ "<keyhole coord>", ... ] }   // the gold Start
     }

   A <node> is one tile on the grid:
     g    grid coordinate, "<column letter>-<row number>", e.g. "C-2".
          Column letters are A,B,C,… left→right; rows 1,2,3,… top→bottom.
     frm  the PREDECESSOR tile this one unlocks from — the blue trail is
          drawn between `frm` and `g`. MUST be an orthogonally-adjacent
          coordinate (one step up/down/left/right). Omit it for a start tile.
     t    type: "Stat Ability", "Support Ability", "Magic Command",
          "Attack Command", "Item Command", "Reprisal Command",
          "Defense Command", "Movement Command", "Quota" (a gate),
          "Secret" (Secret: Green / Secret: Red), etc.
     n    the ability/command name (or "Checkpoint" / "Secret: Red"…).
     c    cost or gate requirement, e.g. "100 LP", "Link x3", "Level 30".
     cond optional condition text, e.g. "Becomes available when in Lionheart
          disposition." (a disposition there colours the trail) or
          "Changes to Faith after Secret: Red…" (makes it a 2-stage tile).
     s    set to 1 to force this tile to be a Start (gold ring).

   To FIX a board:
     1. Find the Spirit's array below.
     2. Correct each tile's `g` (position) and `frm` (where its trail comes
        from). Keep `frm` adjacent to `g`. Two tiles sharing a `g` form a
        2-stage "changes after Red Secret" cell (first listed = before).
     3. For a fixed keyhole/start, add the coord to `starts["<Spirit>"]`
        (an empty cell) OR give the first tile `"s": 1`.
   See docs/ability-board-review.md for which boards still need a pass.
   Source: KH Wiki exact grids (21) + dozingdevil GameFAQs diagrams (28).
   ===================================================================== */
window.DG_BOARDS = {
  "boards": {
    "Aura Lion": [
      {
        "g": "C-2",
        "t": "Magic Command",
        "n": "Curaga",
        "c": "10 LP",
        "cond": "Changes to Faith after Secret: Red at D-7 is unlocked.",
        "frm": "C-1"
      },
      {
        "g": "C-2",
        "t": "Magic Command",
        "n": "Faith",
        "c": "10 LP",
        "cond": "Changes to Faith after Secret: Red at D-7 is unlocked.",
        "frm": "C-1"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-4",
        "t": "Attack Command",
        "n": "Limit Storm",
        "c": "200 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "60 LP",
        "cond": "Becomes available when in Clear Mind disposition.",
        "frm": "C-3"
      },
      {
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Clear Mind disposition.",
        "frm": "C-4"
      },
      {
        "g": "A-4",
        "t": "Support Ability",
        "n": "Leaf Bracer",
        "c": "300 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Lionheart disposition.",
        "frm": "B-4"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "B-6",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Lionheart disposition.",
        "frm": "B-5"
      },
      {
        "g": "C-7",
        "t": "Secret",
        "n": "Secret: Red",
        "c": "250 LP",
        "cond": "Becomes available after unlocking Secret: Green at E-6",
        "frm": "C-6"
      },
      {
        "g": "D-6",
        "t": "Attack Command",
        "n": "Sacrifice",
        "c": "200 LP",
        "cond": "",
        "frm": "C-6"
      },
      {
        "g": "E-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "D-7",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available after unlocking Secret: Green at E-6",
        "frm": "C-7"
      },
      {
        "g": "E-6",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "D-6"
      },
      {
        "g": "F-5",
        "t": "Support Ability",
        "n": "Second Chance",
        "c": "300 LP",
        "cond": "",
        "frm": "E-5"
      },
      {
        "g": "E-7",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available after unlocking Secret: Green at E-6",
        "frm": "D-7"
      }
    ],
    "Beatalike": [
      {
        "g": "C-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "10 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "E-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "D-3",
        "t": "Attack Command",
        "n": "Confusing Strike",
        "c": "100 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "E-6",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "D-6"
      },
      {
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "F-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "A-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "D-1",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "G-4",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "F-4"
      },
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked.",
        "frm": "A-4"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Psychic disposition.",
        "frm": "D-1"
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Groovy disposition.",
        "frm": "D-1"
      },
      {
        "g": "G-3",
        "t": "Attack Command",
        "n": "Ars Arcanum",
        "c": "400 LP",
        "cond": "",
        "frm": "G-4"
      },
      {
        "g": "A-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked.",
        "frm": "A-3"
      },
      {
        "g": "B-1",
        "t": "Attack Command",
        "n": "Limit Storm",
        "c": "200 LP",
        "cond": "Becomes available when in Psychic disposition.",
        "frm": "C-1"
      },
      {
        "g": "F-1",
        "t": "Support Ability",
        "n": "Air Combo Plus",
        "c": "200 LP",
        "cond": "Becomes available when in Groovy disposition.",
        "frm": "E-1"
      },
      {
        "g": "G-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after Secret: Green at A-4 has been unlocked.",
        "frm": "G-3"
      },
      {
        "g": "A-1",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked.",
        "frm": "A-2"
      },
      {
        "g": "G-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at A-4 has been unlocked.",
        "frm": "F-1"
      }
    ],
    "Catanuki": [
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at E-2 has been unlocked.",
        "frm": "C-4"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Mini Block",
        "c": "10 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Slow Block",
        "c": "10 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Defender",
        "c": "150 LP",
        "cond": "Becomes available after Secret: Green at A-6 has been unlocked.",
        "frm": "C-4"
      },
      {
        "g": "A-4",
        "t": "Magic Command",
        "n": "Vanish",
        "c": "300 LP",
        "cond": "Becomes available after Secret: Green at E-2 has been unlocked.",
        "frm": "B-4"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "E-4",
        "t": "Attack Command",
        "n": "Spark Raid",
        "c": "300 LP",
        "cond": "Becomes available after Secret: Green at A-6 has been unlocked.",
        "frm": "D-4"
      },
      {
        "g": "A-5",
        "t": "Support Ability",
        "n": "Treasure Magnet",
        "c": "50 LP",
        "cond": "Becomes available after Secret: Green at E-2 has been unlocked.",
        "frm": "A-4"
      },
      {
        "g": "C-1",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-7",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "C-6"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Stop Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at A-6 has been unlocked.",
        "frm": "E-4"
      },
      {
        "g": "A-6",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-1 has been unlocked.",
        "frm": "A-5"
      },
      {
        "g": "B-1",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Teakettle disposition.",
        "frm": "C-1"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Sleep Block",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-7 has been unlocked.",
        "frm": "C-1"
      },
      {
        "g": "B-7",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at C-1 has been unlocked.",
        "frm": "C-7"
      },
      {
        "g": "D-7",
        "t": "Magic Command",
        "n": "Sparkra",
        "c": "150 LP",
        "cond": "Becomes available when in Raccoon disposition.",
        "frm": "C-7"
      },
      {
        "g": "E-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-7 has been unlocked.",
        "frm": "E-3"
      },
      {
        "g": "A-7",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after Secret: Green at C-1 has been unlocked.",
        "frm": "A-6"
      },
      {
        "g": "A-1",
        "t": "Magic Command",
        "n": "Blackout",
        "c": "150 LP",
        "cond": "Becomes available when in Teakettle disposition.",
        "frm": "B-1"
      },
      {
        "g": "E-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after Secret: Green at C-7 has been unlocked.",
        "frm": "D-1"
      },
      {
        "g": "E-7",
        "t": "Spirits Ability",
        "n": "Support Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Raccoon disposition.",
        "frm": "D-7"
      }
    ],
    "Cera Terror": [
      {
        "g": "C-2",
        "t": "Reprisal Command",
        "n": "Steep Climb",
        "c": "10 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "B-4",
        "t": "Attack Command",
        "n": "Dark Break",
        "c": "200 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Defender",
        "c": "150 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Mini Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "A-4",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "C-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "E-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "A-5",
        "t": "Stat Ability",
        "n": "Sleep Block",
        "c": "30 LP",
        "cond": "Becomes available when in Demolisher disposition.",
        "frm": "A-4"
      },
      {
        "g": "C-7",
        "t": "Support Ability",
        "n": "EXP Boost",
        "c": "300 LP",
        "cond": "",
        "frm": "C-6"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Drill Sarge disposition.",
        "frm": "D-5"
      },
      {
        "g": "F-4",
        "t": "Attack Command",
        "n": "Zantetsuken",
        "c": "400 LP",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "A-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available when in Demolisher disposition.",
        "frm": "A-5"
      },
      {
        "g": "E-6",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Drill Sarge disposition.",
        "frm": "E-5"
      },
      {
        "g": "A-7",
        "t": "Attack Command",
        "n": "Sonic Blade",
        "c": "250 LP",
        "cond": "Becomes available when in Demolisher disposition.",
        "frm": "A-6"
      }
    ],
    "Chef Kyroo": [
      {
        "g": "C-2",
        "t": "Magic Command",
        "n": "Cura",
        "c": "10 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "B-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "B-3",
        "t": "Support Ability",
        "n": "Air Combo Plus",
        "c": "200 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "D-3",
        "t": "Attack Command",
        "n": "Aerial Slam",
        "c": "100 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "A-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "Becomes available after unlocking Secret: Green at A-3. | Becomes available when in Patissier disposition.",
        "frm": "B-3"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "A-4",
        "t": "Magic Command",
        "n": "Fira",
        "c": "100 LP",
        "cond": "Becomes available after unlocking Secret: Green at A-3. | Becomes available when in Patissier disposition.",
        "frm": "A-3"
      },
      {
        "g": "B-5",
        "t": "Magic Command",
        "n": "Firaga",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at A-3. | Becomes available when in Patissier disposition.",
        "frm": "B-4"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "B-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Patissier disposition. | Becomes available when in Commis disposition.",
        "frm": "B-5"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Patissier disposition. | Becomes available when in Commis disposition.",
        "frm": "D-5"
      },
      {
        "g": "A-6",
        "t": "Attack Command",
        "n": "Blitz",
        "c": "150 LP",
        "cond": "",
        "frm": "B-6"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-6"
      },
      {
        "g": "E-6",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "D-6"
      },
      {
        "g": "C-7",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Commis disposition.",
        "frm": "C-6"
      },
      {
        "g": "C-8",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Commis disposition.",
        "frm": "C-7"
      }
    ],
    "Cyber Yog": [
      {
        "g": "A-2",
        "t": "Magic Command",
        "n": "Thunder",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "B-5",
        "t": "Support Ability",
        "n": "Treasure Magnet",
        "c": "50 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "C-2",
        "t": "Attack Command",
        "n": "Thunder Dash",
        "c": "150 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Donner disposition.",
        "s": 1
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Donner disposition.",
        "s": 1
      },
      {
        "g": "E-1",
        "t": "Magic Command",
        "n": "Thundara",
        "c": "100 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "F-1",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "F-2"
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Comet disposition.",
        "frm": "F-2"
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available when in Comet disposition.",
        "frm": "F-3"
      },
      {
        "g": "G-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "",
        "frm": "F-2"
      },
      {
        "g": "H-2",
        "t": "Magic Command",
        "n": "Thundaga",
        "c": "150 LP",
        "cond": "",
        "frm": "G-2"
      }
    ],
    "Drak Quack": [
      {
        "g": "A-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Sky Blue x10",
        "cond": ""
      },
      {
        "g": "A-3",
        "t": "Item Command",
        "n": "Drop-Me-Never",
        "c": "50 LP",
        "cond": ""
      },
      {
        "g": "A-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Troubling Figment x2",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "A-5",
        "t": "Stat Ability",
        "n": "Reload Boost",
        "c": "75 LP",
        "cond": "",
        "frm": "A-4"
      },
      {
        "g": "A-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Balloon x1",
        "cond": ""
      },
      {
        "g": "A-7",
        "t": "Item Command",
        "n": "Dream Candy",
        "c": "50 LP",
        "cond": ""
      },
      {
        "g": "A-8",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Wondrous Fancy x2",
        "cond": "",
        "frm": "A-7"
      },
      {
        "g": "B-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Ice Dream Cone x1",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "B-8",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "15 LP",
        "cond": "",
        "frm": "A-8"
      },
      {
        "g": "C-1",
        "t": "Item Command",
        "n": "Mega-Potion",
        "c": "25 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "C-8",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Yellow x10",
        "cond": "",
        "frm": "B-8"
      },
      {
        "g": "D-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Vibrant Figment x2",
        "cond": "",
        "frm": "E-1"
      },
      {
        "g": "D-6",
        "t": "Support Ability",
        "n": "Once More",
        "c": "150 LP",
        "cond": "",
        "frm": "E-6"
      },
      {
        "g": "D-8",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "C-8"
      },
      {
        "g": "E-1",
        "t": "Support Ability",
        "n": "Treasure Magnet",
        "c": "25 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "E-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Savage Fantasy x1",
        "cond": "",
        "frm": "E-7"
      },
      {
        "g": "E-7",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "25 LP",
        "cond": "",
        "frm": "E-6"
      },
      {
        "g": "E-8",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Dulcet Fantasy x1",
        "cond": "",
        "frm": "D-8"
      },
      {
        "g": "F-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Shield Cookie x1",
        "cond": "",
        "frm": "G-1"
      },
      {
        "g": "F-4",
        "t": "Item Command",
        "n": "Megalixir",
        "c": "50 LP",
        "cond": "",
        "frm": "F-5"
      },
      {
        "g": "F-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Wild Fantasy x1",
        "cond": "",
        "frm": "G-5"
      },
      {
        "g": "F-7",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Blue x10",
        "cond": "",
        "frm": "F-8"
      },
      {
        "g": "F-8",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "E-8"
      },
      {
        "g": "G-1",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "15 LP",
        "cond": "",
        "frm": "F-1"
      },
      {
        "g": "G-5",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "F-5"
      },
      {
        "g": "G-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Block-it Chocolate 2 x1",
        "cond": "",
        "frm": "H-6"
      },
      {
        "g": "H-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Wondrous Fantasy x2",
        "cond": "",
        "frm": "H-2"
      },
      {
        "g": "H-2",
        "t": "Stat Ability",
        "n": "Defender",
        "c": "75 LP",
        "cond": "",
        "frm": "H-1"
      },
      {
        "g": "H-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Water Barrel x1",
        "cond": "",
        "frm": "H-4"
      },
      {
        "g": "H-4",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "25 LP",
        "cond": "",
        "frm": "H-3"
      },
      {
        "g": "H-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Noble Fantasy x1",
        "cond": "",
        "s": 1
      },
      {
        "g": "H-6",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "G-6"
      }
    ],
    "Drill Sye": [
      {
        "g": "B-1",
        "t": "Attack Command",
        "n": "Circle Raid",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
        "cond": ""
      },
      {
        "g": "B-3",
        "t": "Support Ability",
        "n": "EXP Boost",
        "c": "300 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "C-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Mini Block",
        "c": "30 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Stop Block",
        "c": "30 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-3.",
        "frm": "C-3"
      },
      {
        "g": "E-1",
        "t": "Attack Command",
        "n": "Blitz",
        "c": "150 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "E-1"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-3.",
        "frm": "D-3"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "Becomes available when in Destroyer disposition.",
        "frm": "E-3"
      },
      {
        "g": "F-1",
        "t": "Stat Ability",
        "n": "Slow Block",
        "c": "30 LP",
        "cond": "Becomes available when in Drill Sarge disposition.",
        "frm": "E-1"
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "F-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available after unlocking Secret: Green at C-3.",
        "frm": "E-3"
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Destroyer disposition.",
        "frm": "E-4"
      },
      {
        "g": "G-1",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Drill Sarge disposition.",
        "frm": "F-1"
      },
      {
        "g": "G-3",
        "t": "Attack Command",
        "n": "Sonic Blade",
        "c": "250 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-3.",
        "frm": "F-3"
      }
    ],
    "Ducky Goose": [
      {
        "g": "B-1",
        "t": "Item Command",
        "n": "Dream Candy",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Shield Cookie x1",
        "cond": ""
      },
      {
        "g": "B-3",
        "t": "Item Command",
        "n": "Drop-Me-Never",
        "c": "50 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Water Barrel x1",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "15 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "B-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Block-it Chocolate 2 x1",
        "cond": ""
      },
      {
        "g": "B-7",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "15 LP",
        "cond": "",
        "frm": "B-6"
      },
      {
        "g": "B-8",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Confetti Candy x1",
        "cond": "",
        "frm": "B-7"
      },
      {
        "g": "C-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Red x1",
        "cond": ""
      },
      {
        "g": "C-8",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-8"
      },
      {
        "g": "D-1",
        "t": "Item Command",
        "n": "Mega-Potion",
        "c": "25 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-8",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Ice Dream Cone 2 x1",
        "cond": "",
        "frm": "C-8"
      },
      {
        "g": "E-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Balloon x1",
        "cond": ""
      },
      {
        "g": "E-4",
        "t": "Item Command",
        "n": "Elixir",
        "c": "50 LP",
        "cond": "",
        "frm": "E-5"
      },
      {
        "g": "E-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Treasure Goggles x2",
        "cond": "",
        "frm": "F-5"
      },
      {
        "g": "E-6",
        "t": "Support Ability",
        "n": "Damage Syphon",
        "c": "150 LP",
        "cond": "",
        "frm": "E-5"
      },
      {
        "g": "E-8",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "10 LP",
        "cond": "",
        "frm": "D-8"
      },
      {
        "g": "F-1",
        "t": "Support Ability",
        "n": "Treasure Magnet",
        "c": "25 LP",
        "cond": "",
        "frm": "E-1"
      },
      {
        "g": "F-5",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "E-5"
      },
      {
        "g": "F-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Royal Cake x2",
        "cond": "",
        "frm": "F-5"
      },
      {
        "g": "F-7",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "25 LP",
        "cond": "",
        "frm": "F-6"
      },
      {
        "g": "F-8",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Confetti Candy 3 x1",
        "cond": "",
        "frm": "E-8"
      },
      {
        "g": "G-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Green x10",
        "cond": "",
        "frm": "F-1"
      },
      {
        "g": "G-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Black x10",
        "cond": "",
        "frm": "G-6"
      },
      {
        "g": "G-6",
        "t": "Spirits Ability",
        "n": "Support Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "F-6"
      },
      {
        "g": "H-1",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "G-1"
      },
      {
        "g": "H-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Purple x10",
        "cond": "",
        "frm": "H-1"
      },
      {
        "g": "H-3",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "15 LP",
        "cond": "",
        "frm": "H-2"
      },
      {
        "g": "H-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Yellow x10",
        "cond": "",
        "frm": "H-3"
      },
      {
        "g": "H-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "25 LP",
        "cond": "",
        "frm": "G-5"
      },
      {
        "g": "H-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: White x10",
        "cond": "",
        "frm": "H-5"
      }
    ],
    "Eaglider": [
      {
        "g": "A-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": ""
      },
      {
        "g": "A-3",
        "t": "Support Ability",
        "n": "Air Combo Plus",
        "c": "200 LP",
        "cond": ""
      },
      {
        "g": "B-1",
        "t": "Magic Command",
        "n": "Firaga",
        "c": "10 LP",
        "cond": "",
        "s": 1
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Slow Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-2",
        "t": "Attack Command",
        "n": "Aerial Slam",
        "c": "100 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Ace disposition.",
        "frm": "D-1"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "E-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "E-5",
        "t": "Magic Command",
        "n": "Firaga Burst",
        "c": "300 LP",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "F-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "150 LP",
        "cond": "Becomes available when in Ace disposition.",
        "frm": "E-1"
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Vulcan disposition.",
        "s": 1
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "G-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Vulcan disposition.",
        "s": 1
      },
      {
        "g": "G-3",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "F-3"
      }
    ],
    "Electricorn": [
      {
        "g": "B-3",
        "t": "Reprisal Command",
        "n": "Rapid Descent",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at E-3 has been unlocked.",
        "frm": "E-3"
      },
      {
        "g": "E-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at E-3 has been unlocked.",
        "frm": "E-3"
      },
      {
        "g": "F-1",
        "t": "Magic Command",
        "n": "Triple Plasma",
        "c": "200 LP",
        "cond": "Becomes available after Secret: Green at E-3 has been unlocked.",
        "frm": "F-2"
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available after Secret: Green at E-3 has been unlocked.",
        "frm": "E-2"
      },
      {
        "g": "F-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at E-3 has been unlocked.",
        "frm": "E-4"
      },
      {
        "g": "F-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at E-3 has been unlocked.",
        "frm": "F-4"
      },
      {
        "g": "G-1",
        "t": "Spirits Ability",
        "n": "Support Boost",
        "c": "200 LP",
        "cond": "Becomes available after Secret: Green at E-3 has been unlocked.",
        "frm": "F-1"
      },
      {
        "g": "G-3",
        "t": "Attack Command",
        "n": "Spark Raid",
        "c": "200 LP",
        "cond": ""
      },
      {
        "g": "G-5",
        "t": "Magic Command",
        "n": "Curaga",
        "c": "150 LP",
        "cond": "Becomes available after Secret: Green at E-3 has been unlocked.",
        "frm": "F-5"
      },
      {
        "g": "H-1",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "Becomes available while in Shock Therapist disposition.",
        "frm": "G-1"
      },
      {
        "g": "H-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "150 LP",
        "cond": "Becomes available while in Shock Therapist disposition.",
        "frm": "H-1"
      },
      {
        "g": "H-4",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Capacitor disposition.",
        "s": 1
      },
      {
        "g": "H-5",
        "t": "Support Ability",
        "n": "Leaf Bracer",
        "c": "300 LP",
        "cond": "Becomes available when in Capacitor disposition.",
        "s": 1
      }
    ],
    "Escarglow": [
      {
        "g": "B-1",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Blindsider disposition.",
        "frm": "B-2"
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Blindsider disposition.",
        "frm": "B-3"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Defender",
        "c": "150 LP",
        "cond": ""
      },
      {
        "g": "B-4",
        "t": "Magic Command",
        "n": "Slow",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": ""
      },
      {
        "g": "B-6",
        "t": "Support Ability",
        "n": "Second Chance",
        "c": "200 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Snail Support disposition.",
        "s": 1
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
        "cond": "Becomes available when in Snail Support disposition.",
        "s": 1
      }
    ],
    "Fin Fatale": [
      {
        "g": "A-2",
        "t": "Magic Command",
        "n": "Zero Gravity",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "A-4",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "A-5",
        "t": "Attack Command",
        "n": "Gravity Strike",
        "c": "100 LP",
        "cond": "",
        "frm": "A-4"
      },
      {
        "g": "A-6",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Grunt disposition.",
        "frm": "A-5"
      },
      {
        "g": "A-7",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Grunt disposition.",
        "frm": "A-6"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "B-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "B-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "Becomes available after unlocking Secret: Green at B-5.",
        "frm": "B-5"
      },
      {
        "g": "B-7",
        "t": "Magic Command",
        "n": "Zero Gravira",
        "c": "100 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-5.",
        "frm": "B-6"
      },
      {
        "g": "B-8",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "Becomes available after unlocking Secret: Green at B-5.",
        "frm": "B-7"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Sleep Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Slow Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "C-8",
        "t": "Magic Command",
        "n": "Zero Graviga",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-5.",
        "frm": "B-8"
      },
      {
        "g": "D-2",
        "t": "Spirits Ability",
        "n": "Support Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Diver disposition.",
        "frm": "D-3"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available when in Diver disposition.",
        "frm": "C-3"
      }
    ],
    "Fishboné": [
      {
        "g": "A-1",
        "t": "Attack Command",
        "n": "Poison Dive",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "A-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "A-4",
        "t": "Support Ability",
        "n": "Leaf Bracer",
        "c": "300 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "B-1",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Hitman disposition.",
        "frm": "C-5"
      },
      {
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Hitman disposition.",
        "frm": "B-5"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": ""
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Anchor disposition.",
        "s": 1
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Anchor disposition.",
        "s": 1
      },
      {
        "g": "D-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "D-6",
        "t": "Magic Command",
        "n": "Zero Graviga",
        "c": "150 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "E-1",
        "t": "Attack Command",
        "n": "Dark Break",
        "c": "200 LP",
        "cond": "",
        "frm": "D-1"
      }
    ],
    "Flowbermeow": [
      {
        "g": "A-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-2.",
        "frm": "B-2"
      },
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-2.",
        "frm": "B-3"
      },
      {
        "g": "B-1",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-2.",
        "frm": "B-2"
      },
      {
        "g": "B-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after unlocking Secret: Green at B-2.",
        "frm": "C-4"
      },
      {
        "g": "B-5",
        "t": "Magic Command",
        "n": "Sparkga",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-2.",
        "frm": "B-4"
      },
      {
        "g": "B-6",
        "t": "Magic Command",
        "n": "Sparkra",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-2.",
        "frm": "B-1"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-6"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "20 LP",
        "cond": ""
      },
      {
        "g": "D-2",
        "t": "Support Ability",
        "n": "Once More",
        "c": "300 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-2.",
        "frm": "C-2"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "60 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-2.",
        "frm": "C-3"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Reload Boost",
        "c": "150 LP",
        "cond": "",
        "frm": "C-6"
      },
      {
        "g": "E-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "",
        "frm": "D-6"
      },
      {
        "g": "F-6",
        "t": "Magic Command",
        "n": "Faith",
        "c": "300 LP",
        "cond": "",
        "frm": "E-6"
      }
    ],
    "Frootz Cat": [
      {
        "g": "A-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "200 LP",
        "cond": "Becomes available when in Pretty Kitty disposition.",
        "s": 1
      },
      {
        "g": "A-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "150 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "A-5",
        "t": "Spirits Ability",
        "n": "Support Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Sweetheart disposition.",
        "frm": "B-5"
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "200 LP",
        "cond": "Becomes available when in Pretty Kitty disposition.",
        "s": 1
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "A-4"
      },
      {
        "g": "B-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "Becomes available when in Sweetheart disposition."
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Reload Boost",
        "c": "150 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "150 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "C-5",
        "t": "Magic Command",
        "n": "Thundara",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "D-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "E-2",
        "t": "Magic Command",
        "n": "Triple Plasma",
        "c": "200 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "F-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "G-2",
        "t": "Attack Command",
        "n": "Salvation",
        "c": "250 LP",
        "cond": "",
        "frm": "F-2"
      }
    ],
    "Ghostabocky": [
      {
        "g": "B-1",
        "t": "Magic Command",
        "n": "Zero Gravira",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "100 LP",
        "cond": "Becomes available when in Phantom disposition.",
        "s": 1
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "D-3",
        "t": "Support Ability",
        "n": "Treasure Magnet",
        "c": "50 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Phantom disposition.",
        "s": 1
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Slow Block",
        "c": "30 LP",
        "cond": "",
        "frm": "E-1"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "60 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "E-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "E-5",
        "t": "Attack Command",
        "n": "Dark Aura",
        "c": "400 LP",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "F-1",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "80 LP",
        "cond": "Becomes available when in Split Personality disposition.",
        "frm": "E-1"
      },
      {
        "g": "F-2",
        "t": "Magic Command",
        "n": "Vanish",
        "c": "300 LP",
        "cond": "Becomes available when in Split Personality disposition.",
        "frm": "F-1"
      }
    ],
    "Halbird": [
      {
        "g": "A-2",
        "t": "Magic Command",
        "n": "Tornado",
        "c": "400 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "150 LP",
        "cond": "Becomes available when in Harrier disposition.",
        "s": 1
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Stop Block",
        "c": "30 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "150 LP",
        "cond": "Becomes available when in Harrier disposition.",
        "s": 1
      },
      {
        "g": "D-3",
        "t": "Reprisal Command",
        "n": "Steep Climb",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "D-5",
        "t": "Support Ability",
        "n": "Air Combo Plus",
        "c": "200 LP",
        "cond": ""
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Available after unlocking Secret: Green at E-5.",
        "frm": "E-4"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "Available after unlocking Secret: Green at E-5.",
        "frm": "E-5"
      },
      {
        "g": "E-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "E-6",
        "t": "Attack Command",
        "n": "Timestorm",
        "c": "100 LP",
        "cond": "Becomes available when in Sky Master disposition.",
        "frm": "D-6"
      },
      {
        "g": "E-7",
        "t": "Support Ability",
        "n": "Air Combo Plus",
        "c": "200 LP",
        "cond": "Becomes available when in Sky Master disposition.",
        "frm": "E-6"
      },
      {
        "g": "F-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Available after unlocking Secret: Green at E-5."
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Available after unlocking Secret: Green at E-5.",
        "frm": "E-3"
      },
      {
        "g": "G-2",
        "t": "Attack Command",
        "n": "Break Time",
        "c": "200 LP",
        "cond": "Available after unlocking Secret: Green at E-5.",
        "frm": "F-2"
      }
    ],
    "Hebby Repp": [
      {
        "g": "A-4",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "60 LP",
        "cond": "Becomes available when in Wheeler disposition.",
        "frm": "B-4"
      },
      {
        "g": "A-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Wheeler disposition.",
        "frm": "A-4"
      },
      {
        "g": "B-1",
        "t": "Magic Command",
        "n": "Fire",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "A-4"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Slow Block",
        "c": "30 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "D-4",
        "t": "Magic Command",
        "n": "Fira",
        "c": "100 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "D-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "D-6",
        "t": "Attack Command",
        "n": "Fire Windmill",
        "c": "150 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Salamander disposition.",
        "s": 1
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Salamander disposition.",
        "s": 1
      }
    ],
    "Iceguin Ace": [
      {
        "g": "B-1",
        "t": "Magic Command",
        "n": "Icicle Splitter",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Wingman disposition.",
        "s": 1
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
        "cond": "Becomes available when in Wingman disposition.",
        "s": 1
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "E-1"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Stop Block",
        "c": "30 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "E-1"
      },
      {
        "g": "E-3",
        "t": "Magic Command",
        "n": "Blizzaga",
        "c": "150 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "E-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Slider disposition.",
        "frm": "E-2"
      },
      {
        "g": "F-5",
        "t": "Magic Command",
        "n": "Ice Barrage",
        "c": "300 LP",
        "cond": "",
        "frm": "E-5"
      },
      {
        "g": "G-2",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Slider disposition.",
        "frm": "F-2"
      }
    ],
    "Jestabocky": [
      {
        "g": "A-2",
        "t": "Magic Command",
        "n": "Balloon",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "A-4",
        "t": "Magic Command",
        "n": "Spark",
        "c": "50 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "A-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": "",
        "frm": "A-4"
      },
      {
        "g": "A-6",
        "t": "Magic Command",
        "n": "Bind",
        "c": "50 LP",
        "cond": "",
        "frm": "A-5"
      },
      {
        "g": "A-7",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 15",
        "cond": "",
        "frm": "A-6"
      },
      {
        "g": "A-8",
        "t": "Magic Command",
        "n": "Balloonra",
        "c": "150 LP",
        "cond": "",
        "frm": "A-7"
      },
      {
        "g": "B-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": ""
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Chicken disposition.",
        "frm": "C-6"
      },
      {
        "g": "B-7",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Chicken disposition.",
        "frm": "B-6"
      },
      {
        "g": "C-2",
        "t": "Support Ability",
        "n": "Treasure Magnet",
        "c": "50 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "D-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "60 LP",
        "cond": "Becomes available when in Flake disposition.",
        "s": 1
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Flake disposition.",
        "s": 1
      },
      {
        "g": "E-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "Becomes available after unlocking Secret: Green at D-2.",
        "frm": "D-2"
      },
      {
        "g": "F-2",
        "t": "Attack Command",
        "n": "Collision Magnet",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-2.",
        "frm": "E-2"
      }
    ],
    "Juggle Pup": [
      {
        "g": "A-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "A-1"
      },
      {
        "g": "B-1",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "A-1"
      },
      {
        "g": "A-3",
        "t": "Magic Command",
        "n": "Balloonra",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at A-2 has been unlocked.",
        "frm": "A-2"
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at A-2 has been unlocked.",
        "frm": "A-2"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at A-2 has been unlocked.",
        "frm": "B-1"
      },
      {
        "g": "A-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at A-2 has been unlocked.",
        "frm": "A-3"
      },
      {
        "g": "B-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at A-2 has been unlocked.",
        "frm": "A-3"
      },
      {
        "g": "C-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at A-2 has been unlocked.",
        "frm": "B-2"
      },
      {
        "g": "D-1",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at A-2 has been unlocked.",
        "frm": "C-1"
      },
      {
        "g": "B-4",
        "t": "Magic Command",
        "n": "Blizzaga",
        "c": "150 LP",
        "cond": "Becomes available after Secret: Green at C-2 has been unlocked.",
        "frm": "A-4"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "20 LP",
        "cond": "Becomes available after Secret: Green at C-2 has been unlocked.",
        "frm": "B-3"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at C-2 has been unlocked.",
        "frm": "C-2"
      },
      {
        "g": "B-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-2 has been unlocked.",
        "frm": "B-4"
      },
      {
        "g": "C-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-2 has been unlocked.",
        "frm": "B-4"
      },
      {
        "g": "D-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-2 has been unlocked.",
        "frm": "C-3"
      },
      {
        "g": "E-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-2 has been unlocked.",
        "frm": "D-2"
      },
      {
        "g": "C-5",
        "t": "Attack Command",
        "n": "Slot Edge",
        "c": "200 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "B-5"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "40 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "C-4"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "D-3"
      },
      {
        "g": "C-6",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "C-5"
      },
      {
        "g": "D-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "C-5"
      },
      {
        "g": "E-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "D-4"
      },
      {
        "g": "F-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "E-3"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at E-4 has been unlocked.",
        "frm": "C-6"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at E-4 has been unlocked.",
        "frm": "D-5"
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "50 LP",
        "cond": "Becomes available after Secret: Green at E-4 has been unlocked.",
        "frm": "E-4"
      },
      {
        "g": "G-3",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "60 LP",
        "cond": "Becomes available after Secret: Green at E-4 has been unlocked.",
        "frm": "F-3"
      },
      {
        "g": "D-7",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at E-2 has been unlocked.",
        "frm": "D-6"
      },
      {
        "g": "E-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "Becomes available after Secret: Green at B-5 has been unlocked.",
        "frm": "D-6"
      },
      {
        "g": "F-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at F-3 has been unlocked.",
        "frm": "E-5"
      },
      {
        "g": "F-6",
        "t": "Magic Command",
        "n": "Balloonga",
        "c": "150 LP",
        "cond": "Becomes available after Secret: Green at B-5 has been unlocked.",
        "frm": "E-6"
      },
      {
        "g": "G-5",
        "t": "Support Ability",
        "n": "Leaf Bracer",
        "c": "300 LP",
        "cond": "",
        "frm": "F-5"
      }
    ],
    "KO Kabuto": [
      {
        "g": "C-2",
        "t": "Defense Ability",
        "n": "Link Block",
        "c": "10 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "B-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "A-2",
        "t": "Stat Ability",
        "n": "Reload Boost",
        "c": "150 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "20 LP",
        "cond": "Becomes available after Secret: Green at A-3 is unlocked.",
        "frm": "B-2"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-3",
        "t": "Magic Command",
        "n": "Fira",
        "c": "100 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "A-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "A-2"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "40 LP",
        "cond": "Becomes available after Secret: Green at A-3 is unlocked.",
        "frm": "B-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "A-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Grenadier disposition.",
        "frm": "A-3"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "60 LP",
        "cond": "Becomes available after Secret: Green at A-3 is unlocked.",
        "frm": "B-4"
      },
      {
        "g": "C-6",
        "t": "Attack Command",
        "n": "Circle Raid",
        "c": "100 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Bodyguard disposition.",
        "frm": "D-4"
      },
      {
        "g": "B-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "Becomes available after Secret: Green at A-3 is unlocked.",
        "frm": "B-5"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "60 LP",
        "cond": "",
        "frm": "C-6"
      },
      {
        "g": "B-7",
        "t": "Attack Command",
        "n": "Icebreaker",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at A-3 is unlocked.",
        "frm": "B-6"
      }
    ],
    "Kab Kannon": [
      {
        "g": "A-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "Becomes available after unlocking Secret: Green at D-4.",
        "frm": "A-2"
      },
      {
        "g": "A-2",
        "t": "Magic Command",
        "n": "Zero Graviga",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-4.",
        "frm": "A-1"
      },
      {
        "g": "A-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": ""
      },
      {
        "g": "A-4",
        "t": "Stat Ability",
        "n": "Reload Boost",
        "c": "150 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "A-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": ""
      },
      {
        "g": "B-1",
        "t": "Attack Command",
        "n": "Salvation",
        "c": "250 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-4.",
        "frm": "A-1"
      },
      {
        "g": "B-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": "Becomes available after unlocking Secret: Green at D-4.",
        "frm": "C-2"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "300 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Ack-Ack disposition.",
        "s": 1
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "C-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Ack-Ack disposition.",
        "s": 1
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "20 LP",
        "cond": ""
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Defender",
        "c": "150 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Bodyguard disposition.",
        "frm": "C-2"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Bodyguard disposition.",
        "frm": "D-2"
      },
      {
        "g": "D-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "20 LP",
        "cond": ""
      },
      {
        "g": "E-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "E-4",
        "t": "Magic Command",
        "n": "Dark Firaga",
        "c": "10 LP",
        "cond": "",
        "s": 1
      }
    ],
    "Keeba Tiger": [
      {
        "g": "A-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
        "cond": "",
        "frm": "A-2"
      },
      {
        "g": "B-2",
        "t": "Attack Command",
        "n": "Sacrifice",
        "c": "10 LP",
        "cond": "",
        "frm": "A-2"
      },
      {
        "g": "A-4",
        "t": "Support Ability",
        "n": "EXP Boost",
        "c": "300 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "B-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Sleep Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Usurper disposition.",
        "frm": "C-3"
      },
      {
        "g": "D-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "150 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "300 LP",
        "cond": "Becomes available when in Usurper disposition.",
        "frm": "C-4"
      },
      {
        "g": "E-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available after unlocking Secret: Green at D-3.",
        "frm": "D-3"
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "E-4",
        "t": "Attack Command",
        "n": "Dark Aura",
        "c": "400 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-3.",
        "frm": "E-3"
      },
      {
        "g": "F-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "F-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available when in Conqueror disposition.",
        "frm": "F-2"
      },
      {
        "g": "G-3",
        "t": "Attack Command",
        "n": "Dark Splicer",
        "c": "300 LP",
        "cond": "",
        "frm": "F-3"
      },
      {
        "g": "G-1",
        "t": "Magic Command",
        "n": "Meteor",
        "c": "400 LP",
        "cond": "Becomes available when in Conqueror disposition.",
        "frm": "F-1"
      }
    ],
    "Komory Bat": [
      {
        "g": "B-3",
        "t": "Spirits Ability",
        "n": "Waking Dream",
        "c": "10 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "C-3",
        "t": "Magic Command",
        "n": "Confuse",
        "c": "50 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-2",
        "t": "Magic Command",
        "n": "Zero Gravity",
        "c": "50 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-3",
        "t": "Attack Command",
        "n": "Drain Dive",
        "c": "50 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Rescuer disposition.",
        "frm": "C-4"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "D-1",
        "t": "Magic Command",
        "n": "Zero Gravira",
        "c": "100 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Rescuer disposition.",
        "frm": "C-5"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "Becomes available when in Aggro disposition.",
        "frm": "D-4"
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Aggro disposition.",
        "frm": "E-4"
      },
      {
        "g": "G-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": "",
        "frm": "F-3"
      },
      {
        "g": "H-3",
        "t": "Attack Command",
        "n": "Confusing Strike",
        "c": "100 LP",
        "cond": "",
        "frm": "G-3"
      }
    ],
    "Kooma Panda": [
      {
        "g": "B-2",
        "t": "Attack Command",
        "n": "Circle Raid",
        "c": "10 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "A-2",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "A-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "A-2"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "D-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "A-4",
        "t": "Attack Command",
        "n": "Aerial Slam",
        "c": "100 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "E-2",
        "t": "Magic Command",
        "n": "Bind",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-2.",
        "frm": "D-2"
      },
      {
        "g": "A-5",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "Becomes available when in Wrestler disposition.",
        "frm": "A-4"
      },
      {
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Mini Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Wrestler disposition.",
        "frm": "B-5"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-2.",
        "frm": "E-2"
      },
      {
        "g": "A-6",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Bruiser disposition.",
        "frm": "A-5"
      },
      {
        "g": "B-7",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "B-6"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "Becomes available when in Bruiser disposition.",
        "frm": "B-6"
      },
      {
        "g": "E-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "Becomes available after unlocking Secret: Green at D-2.",
        "frm": "E-3"
      },
      {
        "g": "F-4",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-2.",
        "frm": "E-4"
      }
    ],
    "Lord Kyroo": [
      {
        "g": "B-2",
        "t": "Attack Command",
        "n": "Blitz",
        "c": "10 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "B-2",
        "t": "Attack Command",
        "n": "Ars Arcanum",
        "c": "10 LP",
        "cond": "Becomes Ars Arcanum after Secret: Red at G-4 has been unlocked.",
        "frm": "B-1"
      },
      {
        "g": "A-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "A-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
        "cond": "",
        "frm": "A-2"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Defender",
        "c": "150 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "D-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "Becomes available after unlocking Secret: Green at D-3.",
        "frm": "C-2"
      },
      {
        "g": "A-4",
        "t": "Support Ability",
        "n": "Combo Master",
        "c": "300 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "C-4",
        "t": "Magic Command",
        "n": "Triple Plasma",
        "c": "200 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "D-1",
        "t": "Attack Command",
        "n": "Zantetsuken",
        "c": "400 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-3.",
        "frm": "D-2"
      },
      {
        "g": "D-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Warmonger disposition.",
        "frm": "B-5"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available when in Warmonger disposition.",
        "frm": "B-6"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "Becomes available when in Selfless Ruler disposition.",
        "frm": "C-5"
      },
      {
        "g": "E-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Selfless Ruler disposition.",
        "frm": "C-6"
      },
      {
        "g": "F-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available after unlocking Secret: Green at E-4.",
        "frm": "E-4"
      },
      {
        "g": "G-4",
        "t": "Secret",
        "n": "Secret: Red",
        "c": "350 LP",
        "cond": "Becomes available after unlocking Secret: Green at E-4.",
        "frm": "F-4"
      }
    ],
    "Majik Lapin": [
      {
        "g": "C-2",
        "t": "Defense Command",
        "n": "Dark Barrier",
        "c": "10 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "150 LP",
        "cond": "Becomes available when in Accomplice disposition.",
        "frm": "C-3"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "200 LP",
        "cond": "Becomes available when in Accomplice disposition.",
        "frm": "B-3"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Stop Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "E-4",
        "t": "Magic Command",
        "n": "Deep Freeze",
        "c": "400 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "A-5",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "B-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "D-6",
        "t": "Magic Command",
        "n": "Zero Graviza",
        "c": "150 LP",
        "cond": "Becomes available when in Illusionist disposition.",
        "frm": "D-5"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "A-6",
        "t": "Magic Command",
        "n": "Firaga Burst",
        "c": "300 LP",
        "cond": "",
        "frm": "A-5"
      },
      {
        "g": "E-6",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "300 LP",
        "cond": "Becomes available when in Illusionist disposition.",
        "frm": "D-6"
      }
    ],
    "Me Me Bunny": [
      {
        "g": "B-1",
        "t": "Defense Command",
        "n": "Dark Barrier",
        "c": "10 LP",
        "cond": "",
        "frm": "A-1"
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "D-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Bruiser disposition.",
        "frm": "B-3"
      },
      {
        "g": "C-3",
        "t": "Attack Command",
        "n": "Prism Windmill",
        "c": "150 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Defender",
        "c": "150 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "B-5",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": "Becomes available when in Bruiser disposition.",
        "frm": "B-4"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Slow Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Space Invader disposition.",
        "frm": "C-4"
      },
      {
        "g": "C-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Space Invader disposition.",
        "frm": "D-4"
      },
      {
        "g": "D-6",
        "t": "Attack Command",
        "n": "Break Time",
        "c": "200 LP",
        "cond": "",
        "frm": "C-6"
      }
    ],
    "Meow Wow": [
      {
        "g": "B-2",
        "t": "Spirits Ability",
        "n": "Link Critical",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-2",
        "t": "Magic Command",
        "n": "Cure",
        "c": "50 LP",
        "cond": ""
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-3",
        "t": "Magic Command",
        "n": "Slow",
        "c": "50 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "E-2",
        "t": "Magic Command",
        "n": "Cura",
        "c": "100 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "E-4",
        "t": "Magic Command",
        "n": "Spark",
        "c": "50 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "F-1",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "Becomes available when in Stray disposition.",
        "frm": "E-1"
      },
      {
        "g": "F-2",
        "t": "Support Ability",
        "n": "Leaf Bracer",
        "c": "300 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "Becomes available when in Smart Cookie disposition.",
        "frm": "E-3"
      },
      {
        "g": "G-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available when in Stray disposition.",
        "frm": "F-1"
      },
      {
        "g": "G-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "",
        "frm": "F-2"
      },
      {
        "g": "G-3",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Smart Cookie disposition.",
        "frm": "F-3"
      },
      {
        "g": "H-2",
        "t": "Magic Command",
        "n": "Curaga",
        "c": "150 LP",
        "cond": "",
        "frm": "G-2"
      }
    ],
    "Meowjesty": [
      {
        "g": "A-1",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "A-4",
        "t": "Magic Command",
        "n": "Sparkra",
        "c": "150 LP",
        "cond": "",
        "frm": "A-5"
      },
      {
        "g": "A-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 15",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "B-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "C-3",
        "t": "Magic Command",
        "n": "Spark",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": ""
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "E-1",
        "t": "Attack Command",
        "n": "Thunder Dash",
        "c": "100 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "E-3",
        "t": "Magic Command",
        "n": "Cura",
        "c": "50 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "F-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "G-3",
        "t": "Magic Command",
        "n": "Curaga",
        "c": "150 LP",
        "cond": "",
        "frm": "F-3"
      },
      {
        "g": "H-3",
        "t": "Support Ability",
        "n": "Second Chance",
        "c": "300 LP",
        "cond": "",
        "frm": "G-3"
      }
    ],
    "Necho Cat": [
      {
        "g": "C-6",
        "t": "Magic Command",
        "n": "Thunder",
        "c": "10 LP",
        "cond": "",
        "frm": "C-7"
      },
      {
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-6"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-6"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "B-6"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Sleep Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "Becomes available when in Diva disposition.",
        "frm": "B-5"
      },
      {
        "g": "C-3",
        "t": "Magic Command",
        "n": "Sleepra",
        "c": "100 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-4",
        "t": "Magic Command",
        "n": "Time Bomb",
        "c": "50 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "A-4",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Diva disposition.",
        "frm": "B-4"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Artist disposition.",
        "frm": "C-2"
      },
      {
        "g": "B-1",
        "t": "Spirits Ability",
        "n": "Support Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "150 LP",
        "cond": "Becomes available when in Artist disposition.",
        "frm": "D-2"
      }
    ],
    "Peepsta Hoo": [
      {
        "g": "B-1",
        "t": "Magic Command",
        "n": "Blackout",
        "c": "10 LP",
        "cond": "",
        "frm": "A-1"
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "Becomes available when in Sweeper disposition.",
        "frm": "B-1"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "D-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Red x10",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
        "cond": "Becomes available when in Watcher disposition.",
        "frm": "C-2"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "E-1",
        "t": "Magic Command",
        "n": "Fira",
        "c": "100 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "E-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Blue x20",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": "Becomes available when in Scout disposition.",
        "frm": "D-3"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "F-2",
        "t": "Magic Command",
        "n": "Blizzara",
        "c": "100 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "F-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Yellow x30",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "Becomes available when in Patroller disposition.",
        "frm": "E-4"
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "G-3",
        "t": "Magic Command",
        "n": "Thundara",
        "c": "100 LP",
        "cond": "",
        "frm": "F-3"
      },
      {
        "g": "F-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "E-5"
      },
      {
        "g": "G-5",
        "t": "Spirits Ability",
        "n": "Support Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "F-5"
      }
    ],
    "Pegaslick": [
      {
        "g": "B-3",
        "t": "Attack Command",
        "n": "Prism Windmill",
        "c": "10 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "B-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "60 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "B-6",
        "t": "Support Ability",
        "n": "Air Combo Plus",
        "c": "200 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "E-3",
        "t": "Magic Command",
        "n": "Sparkra",
        "c": "100 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "100 LP",
        "cond": "Becomes available when in Hurricane disposition.",
        "frm": "D-4"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "80 LP",
        "cond": "Becomes available when in Stormgoer disposition.",
        "frm": "D-2"
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "150 LP",
        "cond": "Becomes available when in Hurricane disposition.",
        "frm": "D-5"
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Stormgoer disposition.",
        "frm": "D-1"
      },
      {
        "g": "G-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "",
        "frm": "F-3"
      },
      {
        "g": "H-3",
        "t": "Magic Command",
        "n": "Sparkga",
        "c": "250 LP",
        "cond": "",
        "frm": "G-3"
      }
    ],
    "Pricklemane": [
      {
        "g": "B-2",
        "t": "Attack Command",
        "n": "Strike Raid",
        "c": "10 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Stop Block",
        "c": "30 LP",
        "cond": "Becomes available when in Intellectual disposition.",
        "frm": "B-2"
      },
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "B-4",
        "t": "Magic Command",
        "n": "Time Bomb",
        "c": "100 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Sleep Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Intellectual disposition.",
        "frm": "C-2"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "C-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "D-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "A-5",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "B-6",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "E-3",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "A-6",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-6.",
        "frm": "A-5"
      },
      {
        "g": "B-7",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-6.",
        "frm": "B-6"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-6.",
        "frm": "B-6"
      },
      {
        "g": "B-8",
        "t": "Attack Command",
        "n": "Circle Raid",
        "c": "100 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-6.",
        "frm": "B-7"
      }
    ],
    "R & R Seal": [
      {
        "g": "A-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at B-1 has been unlocked.",
        "frm": "A-2"
      },
      {
        "g": "A-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at B-1 has been unlocked.",
        "frm": "A-3"
      },
      {
        "g": "B-1",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-2",
        "t": "Support Ability",
        "n": "Second Chance",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at B-1 has been unlocked.",
        "frm": "A-2"
      },
      {
        "g": "B-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at B-1 has been unlocked.",
        "frm": "A-3"
      },
      {
        "g": "B-4",
        "t": "Attack Command",
        "n": "Shadowbreaker",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked.",
        "frm": "A-4"
      },
      {
        "g": "B-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked.",
        "frm": "C-5"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at B-1 has been unlocked.",
        "frm": "B-1"
      },
      {
        "g": "C-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at B-1 has been unlocked."
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked.",
        "frm": "B-3"
      },
      {
        "g": "C-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked.",
        "frm": "C-5"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "150 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "B-5"
      },
      {
        "g": "C-6",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "C-5"
      },
      {
        "g": "D-1",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at B-1 has been unlocked."
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Mini Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked.",
        "frm": "C-2"
      },
      {
        "g": "D-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked.",
        "frm": "D-4"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "C-4"
      },
      {
        "g": "D-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "C-5"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at C-6 has been unlocked.",
        "frm": "C-6"
      },
      {
        "g": "D-7",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at A-4 has been unlocked.",
        "frm": "D-6"
      },
      {
        "g": "E-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked.",
        "frm": "E-3"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "D-3"
      },
      {
        "g": "E-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "D-4"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "200 LP",
        "cond": "Becomes available after Secret: Green at C-6 has been unlocked.",
        "frm": "F-5"
      },
      {
        "g": "E-6",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at E-2 has been unlocked.",
        "frm": "E-5"
      },
      {
        "g": "F-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "E-2"
      },
      {
        "g": "F-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-4 has been unlocked.",
        "frm": "E-3"
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Slow Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at C-6 has been unlocked.",
        "frm": "F-5"
      },
      {
        "g": "F-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at A-4 has been unlocked.",
        "s": 1
      },
      {
        "g": "F-6",
        "t": "Item Command",
        "n": "Megalixir",
        "c": "100 LP",
        "cond": "",
        "frm": "E-6"
      },
      {
        "g": "G-2",
        "t": "Magic Command",
        "n": "Balloonga",
        "c": "150 LP",
        "cond": "Becomes available after Secret: Green at A-4 has been unlocked.",
        "frm": "F-2"
      }
    ],
    "Ryu Dragon": [
      {
        "g": "B-1",
        "t": "Movement Command",
        "n": "Superglide",
        "c": "10 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "A-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "E-1",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "A-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "A-1"
      },
      {
        "g": "B-3",
        "t": "Attack Command",
        "n": "Meteor Crash",
        "c": "400 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Wyvern disposition.",
        "frm": "C-3"
      },
      {
        "g": "B-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-4.",
        "frm": "C-4"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Wyvern disposition.",
        "frm": "D-3"
      },
      {
        "g": "A-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available after unlocking Secret: Green at B-4.",
        "frm": "B-4"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Bahamut disposition.",
        "frm": "D-4"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Reload Boost",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-4.",
        "frm": "D-4"
      },
      {
        "g": "A-5",
        "t": "Magic Command",
        "n": "Firaga Burst",
        "c": "300 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-4.",
        "frm": "A-4"
      },
      {
        "g": "E-5",
        "t": "Support Ability",
        "n": "Combo Master",
        "c": "300 LP",
        "cond": "Becomes available when in Bahamut disposition.",
        "frm": "D-5"
      },
      {
        "g": "F-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
        "cond": "Becomes available after unlocking Secret: Green at C-4.",
        "frm": "E-4"
      },
      {
        "g": "G-4",
        "t": "Magic Command",
        "n": "Mega Flare",
        "c": "400 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-4.",
        "frm": "F-4"
      }
    ],
    "Sir Kyroo": [
      {
        "g": "B-2",
        "t": "Attack Command",
        "n": "Strike Raid",
        "c": "10 LP",
        "cond": "",
        "frm": "A-2"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Stop Block",
        "c": "30 LP",
        "cond": "Becomes available when in Paladin disposition.",
        "frm": "D-2"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Paladin disposition.",
        "frm": "D-3"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "F-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "A-6",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "60 LP",
        "cond": "Becomes available when in Warrior disposition.",
        "frm": "B-6"
      },
      {
        "g": "B-7",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "B-6"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available when in Warrior disposition.",
        "frm": "B-6"
      },
      {
        "g": "G-2",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": "",
        "frm": "F-2"
      },
      {
        "g": "B-8",
        "t": "Attack Command",
        "n": "Blitz",
        "c": "100 LP",
        "cond": "",
        "frm": "B-7"
      }
    ],
    "Skelterwild": [
      {
        "g": "C-2",
        "t": "Attack Command",
        "n": "Limit Storm",
        "c": "10 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Savage disposition.",
        "frm": "C-3"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "E-2",
        "t": "Support Ability",
        "n": "EXP Walker",
        "c": "400 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "B-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Savage disposition.",
        "frm": "C-4"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-4.",
        "frm": "B-4"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "300 LP",
        "cond": "Becomes available when in Fiend disposition.",
        "frm": "C-5"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "A-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-4.",
        "frm": "B-5"
      },
      {
        "g": "B-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available after unlocking Secret: Green at B-4.",
        "frm": "B-5"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Fiend disposition.",
        "frm": "C-6"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "Reload Boost",
        "c": "150 LP",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "A-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after unlocking Secret: Green at A-5.",
        "frm": "A-5"
      },
      {
        "g": "B-7",
        "t": "Magic Command",
        "n": "Ice Barrage",
        "c": "300 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-4.",
        "frm": "B-6"
      },
      {
        "g": "E-6",
        "t": "Magic Command",
        "n": "Deep Freeze",
        "c": "400 LP",
        "cond": "",
        "frm": "D-6"
      },
      {
        "g": "A-7",
        "t": "Attack Command",
        "n": "Ars Arcanum",
        "c": "400 LP",
        "cond": "Becomes available after unlocking Secret: Green at A-5.",
        "frm": "A-6"
      }
    ],
    "Staggerceps": [
      {
        "g": "B-2",
        "t": "Defense Command",
        "n": "Link Block",
        "c": "10 LP",
        "cond": "",
        "frm": "A-2"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": "Becomes available when in Heavy Hitter disposition.",
        "frm": "C-2"
      },
      {
        "g": "D-2",
        "t": "Attack Command",
        "n": "Collision Magnet",
        "c": "150 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Defender",
        "c": "150 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "60 LP",
        "cond": "Becomes available when in Heavy Hitter disposition.",
        "frm": "C-1"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "40 LP",
        "cond": "Becomes available after unlocking Secret: Green at E-4.",
        "frm": "D-3"
      },
      {
        "g": "D-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "E-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available after unlocking Secret: Green at E-4.",
        "frm": "E-3"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "60 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-5.",
        "frm": "D-5"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at E-4.",
        "frm": "D-5"
      },
      {
        "g": "E-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "Becomes available after unlocking Secret: Green at D-5.",
        "frm": "D-6"
      },
      {
        "g": "F-5",
        "t": "Magic Command",
        "n": "Blizzara",
        "c": "100 LP",
        "cond": "Becomes available after unlocking Secret: Green at E-4.",
        "frm": "E-5"
      },
      {
        "g": "F-6",
        "t": "Attack Command",
        "n": "Zantetsuken",
        "c": "400 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-5.",
        "frm": "E-6"
      }
    ],
    "Sudo Neku": [
      {
        "g": "B-1",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "B-2",
        "t": "Magic Command",
        "n": "Fira",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Slow Block",
        "c": "30 LP",
        "cond": "",
        "frm": "E-1"
      },
      {
        "g": "E-3",
        "t": "Attack Command",
        "n": "Circle Raid",
        "c": "150 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "F-1",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "F-2"
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "150 LP",
        "cond": "",
        "frm": "F-3"
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Reload Boost",
        "c": "150 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "G-1",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "300 LP",
        "cond": "",
        "frm": "F-1"
      },
      {
        "g": "G-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "G-1"
      },
      {
        "g": "G-3",
        "t": "Attack Command",
        "n": "Slot Edge",
        "c": "200 LP",
        "cond": "",
        "frm": "G-2"
      }
    ],
    "Tama Sheep": [
      {
        "g": "A-2",
        "t": "Magic Command",
        "n": "Sleep",
        "c": "10 LP",
        "cond": "",
        "frm": "A-1"
      },
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "A-2"
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "A-2"
      },
      {
        "g": "A-4",
        "t": "Stats Ability",
        "n": "Sleep Block",
        "c": "30 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-4",
        "t": "Stats Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "A-4"
      },
      {
        "g": "D-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-4",
        "t": "Stats Ability",
        "n": "Slow Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "D-3",
        "t": "Magic Command",
        "n": "Balloon",
        "c": "50 LP",
        "cond": "Available after Secret: Green at D-2 has been unlocked.",
        "frm": "D-2"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Stop Block",
        "c": "30 LP",
        "cond": "Available after Secret: Green at D-2 has been unlocked.",
        "frm": "D-2"
      },
      {
        "g": "D-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Available after Secret: Green at D-2 has been unlocked.",
        "frm": "D-3"
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "Available after Secret: Green at D-2 has been unlocked.",
        "frm": "E-2"
      },
      {
        "g": "E-4",
        "t": "Magic Command",
        "n": "Sleepra",
        "c": "100 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Mumbler disposition.",
        "frm": "E-3"
      },
      {
        "g": "G-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "Available after Secret: Green at D-2 has been unlocked.",
        "frm": "F-2"
      },
      {
        "g": "F-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "G-3",
        "t": "Spirits Ability",
        "n": "Support Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Mumbler disposition.",
        "frm": "F-3"
      },
      {
        "g": "G-4",
        "t": "Magic Command",
        "n": "Sleepga",
        "c": "150 LP",
        "cond": "",
        "frm": "F-4"
      }
    ],
    "Tatsu Blaze": [
      {
        "g": "C-2",
        "t": "Magic Command",
        "n": "Fira",
        "c": "10 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "E-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "C-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "F-2",
        "t": "Magic Command",
        "n": "Firaga",
        "c": "150 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "F-2",
        "t": "Attack Command",
        "n": "Meteor Crash",
        "c": "150 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-5.",
        "frm": "B-4"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-5.",
        "frm": "C-5"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-5.",
        "frm": "C-5"
      },
      {
        "g": "G-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "",
        "frm": "F-2"
      },
      {
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Two-face disposition.",
        "frm": "B-5"
      },
      {
        "g": "C-7",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-5.",
        "frm": "C-6"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Deadeye disposition.",
        "frm": "C-6"
      },
      {
        "g": "G-3",
        "t": "Secret",
        "n": "Secret: Red",
        "c": "250 LP",
        "cond": "",
        "frm": "G-2"
      },
      {
        "g": "A-6",
        "t": "Spirits Ability",
        "n": "Support Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Two-face disposition.",
        "frm": "B-6"
      },
      {
        "g": "D-7",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Deadeye disposition.",
        "frm": "C-7"
      }
    ],
    "Tatsu Steed": [
      {
        "g": "A-2",
        "t": "Magic Command",
        "n": "Bind",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "A-4",
        "t": "Magic Command",
        "n": "Mini",
        "c": "100 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "A-6",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Tactician disposition.",
        "frm": "B-6"
      },
      {
        "g": "B-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": ""
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "A-4"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "60 LP",
        "cond": "Becomes available when in Tactician disposition.",
        "frm": "B-5"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "C-7",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "",
        "frm": "C-6"
      },
      {
        "g": "C-8",
        "t": "Magic Command",
        "n": "Blizzaga",
        "c": "150 LP",
        "cond": "",
        "frm": "C-7"
      },
      {
        "g": "D-2",
        "t": "Magic Command",
        "n": "Blizzara",
        "c": "100 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Trap Jockey disposition.",
        "frm": "D-5"
      },
      {
        "g": "E-6",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Trap Jockey disposition.",
        "frm": "D-6"
      }
    ],
    "Thunderaffe": [
      {
        "g": "B-2",
        "t": "Magic Command",
        "n": "Thundara",
        "c": "10 LP",
        "cond": "",
        "frm": "A-2"
      },
      {
        "g": "B-1",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "B-4",
        "t": "Support Ability",
        "n": "Damage Syphon",
        "c": "300 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "60 LP",
        "cond": "Becomes available when in Photon Don disposition.",
        "frm": "B-3"
      },
      {
        "g": "D-2",
        "t": "Magic Command",
        "n": "Thundaga",
        "c": "150 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-2",
        "t": "Magic Command",
        "n": "Triple Plasma",
        "c": "150 LP",
        "cond": "Changes to Triple Plasma after Secret: Red at E-1 has been unlocked.",
        "frm": "C-2"
      },
      {
        "g": "D-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Photon Don disposition.",
        "frm": "C-3"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "E-1",
        "t": "Secret",
        "n": "Secret: Red",
        "c": "50 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Slow Block",
        "c": "30 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "F-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "150 LP",
        "cond": "Becomes available when in Blue Streak disposition.",
        "frm": "E-1"
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "G-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "",
        "frm": "F-2"
      },
      {
        "g": "G-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "200 LP",
        "cond": "Becomes available when in Blue Streak disposition.",
        "frm": "F-1"
      },
      {
        "g": "H-2",
        "t": "Attack Command",
        "n": "Zantetsuken",
        "c": "200 LP",
        "cond": "",
        "frm": "G-2"
      }
    ],
    "Toximander": [
      {
        "g": "B-3",
        "t": "Magic Command",
        "n": "Poison",
        "c": "10 LP",
        "cond": "",
        "frm": "A-3"
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "C-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "Becomes available when in Hunter disposition.",
        "frm": "B-4"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-1",
        "t": "Support Ability",
        "n": "Treasure Magnet",
        "c": "50 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Hunter disposition.",
        "frm": "C-4"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "E-4",
        "t": "Attack Command",
        "n": "Gravity Strike",
        "c": "100 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "F-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 15",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Mini Block",
        "c": "30 LP",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "G-2",
        "t": "Attack Command",
        "n": "Poison Dive",
        "c": "200 LP",
        "cond": "",
        "frm": "F-2"
      },
      {
        "g": "G-4",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "Becomes available when in Basilisk disposition.",
        "frm": "F-4"
      },
      {
        "g": "H-4",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Basilisk disposition.",
        "frm": "G-4"
      }
    ],
    "Tubguin Ace": [
      {
        "g": "C-7",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "10 LP",
        "cond": "",
        "frm": "D-7"
      },
      {
        "g": "E-7",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "10 LP",
        "cond": "",
        "frm": "D-7"
      },
      {
        "g": "B-7",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "C-7"
      },
      {
        "g": "F-7",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "E-7"
      },
      {
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-7"
      },
      {
        "g": "F-6",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "F-7"
      },
      {
        "g": "A-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": "",
        "frm": "B-6"
      },
      {
        "g": "G-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": "",
        "frm": "F-6"
      },
      {
        "g": "A-5",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "A-6"
      },
      {
        "g": "G-5",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "G-6"
      },
      {
        "g": "A-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 15",
        "cond": "",
        "frm": "A-5"
      },
      {
        "g": "G-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": "",
        "frm": "G-5"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "A-4"
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "G-4"
      },
      {
        "g": "B-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "F-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": "",
        "frm": "F-4"
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Sauna disposition.",
        "frm": "B-3"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "60 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "60 LP",
        "cond": "",
        "frm": "F-3"
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Whirlpool disposition.",
        "frm": "F-3"
      },
      {
        "g": "B-1",
        "t": "Attack Command",
        "n": "Fire Windmill",
        "c": "150 LP",
        "cond": "Becomes available when in Sauna disposition.",
        "frm": "B-2"
      },
      {
        "g": "D-3",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "F-1",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available when in Whirlpool disposition.",
        "frm": "F-2"
      },
      {
        "g": "D-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after Secret: Green at F-1 has been unlocked.",
        "frm": "D-3"
      },
      {
        "g": "D-4",
        "t": "Magic Command",
        "n": "Balloonra",
        "c": "150 LP",
        "cond": "Becomes available after Secret: Green at F-1 has been unlocked.",
        "frm": "D-3"
      },
      {
        "g": "D-1",
        "t": "Magic Command",
        "n": "Dark Firaga",
        "c": "400 LP",
        "cond": "Becomes available after Secret: Green at F-1 has been unlocked.",
        "frm": "D-2"
      }
    ],
    "Tyranto Rex": [
      {
        "g": "B-1",
        "t": "Reprisal Command",
        "n": "Rapid Descent",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "20 LP",
        "cond": ""
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Flametongue disposition.",
        "frm": "D-3"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "300 LP",
        "cond": "Becomes available when in Flametongue disposition.",
        "frm": "D-4"
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "D-1"
      },
      {
        "g": "E-3",
        "t": "Magic Command",
        "n": "Firaga Burst",
        "c": "300 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "F-1",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "E-1"
      },
      {
        "g": "F-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
        "cond": "",
        "frm": "F-1"
      },
      {
        "g": "F-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "F-4"
      },
      {
        "g": "F-4",
        "t": "Attack Command",
        "n": "Meteor Crash",
        "c": "400 LP",
        "cond": "Becomes available after unlocking Secret: Green at F-3.",
        "frm": "F-3"
      },
      {
        "g": "G-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Tyrant disposition.",
        "frm": "F-1"
      },
      {
        "g": "G-2",
        "t": "Support Ability",
        "n": "Once More",
        "c": "300 LP",
        "cond": "",
        "frm": "F-2"
      },
      {
        "g": "G-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after unlocking Secret: Green at F-3.",
        "frm": "F-4"
      },
      {
        "g": "G-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available after unlocking Sercet: Green at G-4.",
        "frm": "G-4"
      },
      {
        "g": "G-6",
        "t": "Magic Command",
        "n": "Mega Flare",
        "c": "400 LP",
        "cond": "Becomes available after unlocking Sercet: Green at G-4.",
        "frm": "G-5"
      },
      {
        "g": "H-1",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Tyrant disposition.",
        "frm": "G-1"
      }
    ],
    "Ursa Circus": [
      {
        "g": "A-1",
        "t": "Support Ability",
        "n": "Damage Syphon",
        "c": "300 LP",
        "cond": ""
      },
      {
        "g": "B-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
        "cond": ""
      },
      {
        "g": "B-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-3.",
        "frm": "B-3"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-3.",
        "frm": "B-4"
      },
      {
        "g": "C-2",
        "t": "Attack Command",
        "n": "Aerial Slam",
        "c": "10 LP",
        "cond": "",
        "s": 1
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Defender",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-3.",
        "frm": "B-5"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "C-2"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Sleep Block",
        "c": "30 LP",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "200 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-3.",
        "frm": "C-5"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "300 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-3.",
        "frm": "D-5"
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "F-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "F-5",
        "t": "Attack Command",
        "n": "Blitz",
        "c": "150 LP",
        "cond": "",
        "frm": "F-4"
      }
    ],
    "Wheeflower": [
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Multi-tasker disposition.",
        "s": 1
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "60 LP",
        "cond": "Becomes available when in Multi-tasker disposition.",
        "s": 1
      },
      {
        "g": "B-5",
        "t": "Magic Command",
        "n": "Blizzara",
        "c": "100 LP",
        "cond": "",
        "frm": "C-5"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "C-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "C-7",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "D-7"
      },
      {
        "g": "D-2",
        "t": "Magic Command",
        "n": "Blizzard",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "D-5",
        "t": "Magic Command",
        "n": "Esuna",
        "c": "50 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Sleep Block",
        "c": "30 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "D-7",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "D-6"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "E-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "D-6"
      },
      {
        "g": "E-7",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "D-7"
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Spell Slinger disposition.",
        "frm": "E-4"
      },
      {
        "g": "F-6",
        "t": "Magic Command",
        "n": "Blizzaga",
        "c": "150 LP",
        "cond": "",
        "frm": "E-6"
      },
      {
        "g": "G-4",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Spell Slinger disposition.",
        "frm": "F-4"
      }
    ],
    "Woeflower": [
      {
        "g": "B-1",
        "t": "Magic Command",
        "n": "Sleepra",
        "c": "100 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "B-3",
        "t": "Magic Command",
        "n": "Poison",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": ""
      },
      {
        "g": "B-5",
        "t": "Support Ability",
        "n": "Treasure Magnet",
        "c": "50 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "C-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "B-1"
      },
      {
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "D-1",
        "t": "Magic Command",
        "n": "Sleepga",
        "c": "150 LP",
        "cond": "",
        "frm": "C-1"
      },
      {
        "g": "D-3",
        "t": "Attack Command",
        "n": "Drain Dive",
        "c": "50 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Natural disposition.",
        "frm": "E-2"
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "",
        "frm": "E-3"
      },
      {
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Bag of Tricks disposition.",
        "frm": "E-4"
      },
      {
        "g": "G-2",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Natural disposition.",
        "frm": "F-2"
      },
      {
        "g": "G-3",
        "t": "Attack Command",
        "n": "Poison Dive",
        "c": "200 LP",
        "cond": "",
        "frm": "F-3"
      },
      {
        "g": "G-4",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
        "cond": "Becomes available when in Bag of Tricks disposition.",
        "frm": "F-4"
      }
    ],
    "Yoggy Ram": [
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "80 LP",
        "cond": "Becomes available when in Trailblazer disposition.",
        "s": 1
      },
      {
        "g": "A-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Trailblazer disposition.",
        "s": 1
      },
      {
        "g": "B-3",
        "t": "Magic Command",
        "n": "Esuna",
        "c": "10 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "B-4",
        "t": "Stats Ability",
        "n": "Fire Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "B-5"
      },
      {
        "g": "B-7",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "60 LP",
        "cond": "",
        "frm": "B-6"
      },
      {
        "g": "B-8",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "B-7"
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available when in Powerhouse disposition."
      },
      {
        "g": "C-2",
        "t": "Magic Command",
        "n": "Fire",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "C-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x4",
        "cond": ""
      },
      {
        "g": "C-4",
        "t": "Support Ability",
        "n": "Treasure Magnet",
        "c": "50 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "100 LP",
        "cond": "Becomes available when in Powerhouse disposition.",
        "frm": "C-1"
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "D-3",
        "t": "Attack Command",
        "n": "Fire Windmill",
        "c": "150 LP",
        "cond": "",
        "frm": "C-3"
      },
      {
        "g": "E-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": "",
        "frm": "D-2"
      },
      {
        "g": "F-2",
        "t": "Magic Command",
        "n": "Fira",
        "c": "100 LP",
        "cond": "",
        "frm": "E-2"
      },
      {
        "g": "G-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "F-2"
      },
      {
        "g": "H-2",
        "t": "Magic Command",
        "n": "Firaga",
        "c": "150 LP",
        "cond": "",
        "frm": "G-2"
      }
    ],
    "Zolephant": [
      {
        "g": "B-1",
        "t": "Support Ability",
        "n": "Second Chance",
        "c": "300 LP",
        "cond": "",
        "frm": "B-2"
      },
      {
        "g": "B-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "",
        "frm": "B-3"
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "B-4",
        "t": "Attack Command",
        "n": "Collision Magnet",
        "c": "10 LP",
        "cond": "",
        "s": 1
      },
      {
        "g": "B-4",
        "t": "Attack Command",
        "n": "Magnet Spiral",
        "c": "10 LP",
        "cond": "Becomes Magnet Spiral after Secret: Red at G-4 has been unlocked.",
        "s": 1
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "20 LP",
        "cond": "",
        "frm": "B-4"
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "150 LP",
        "cond": "Becomes available when in Fighter disposition.",
        "frm": "C-4"
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Fighter disposition.",
        "frm": "C-5"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "30 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "40 LP",
        "cond": "",
        "frm": "C-4"
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Nozzle-Nose disposition.",
        "s": 1
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Nozzle-Nose disposition.",
        "s": 1
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "D-3"
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "",
        "frm": "D-4"
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "60 LP",
        "cond": "",
        "frm": "D-5"
      },
      {
        "g": "E-6",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "50 LP",
        "cond": "",
        "frm": "E-5"
      },
      {
        "g": "F-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "",
        "frm": "E-4"
      },
      {
        "g": "G-4",
        "t": "Secret",
        "n": "Secret: Red",
        "c": "150 LP",
        "cond": "",
        "frm": "F-4"
      }
    ]
  },
  "starts": {
    "Aura Lion": [
      "C-1"
    ],
    "Beatalike": [
      "D-5"
    ],
    "Catanuki": [
      "C-4"
    ],
    "Cera Terror": [
      "C-1"
    ],
    "Chef Kyroo": [
      "C-1"
    ],
    "Juggle Pup": [
      "A-1"
    ],
    "KO Kabuto": [
      "C-1"
    ],
    "Keeba Tiger": [
      "A-2"
    ],
    "Komory Bat": [
      "A-3"
    ],
    "Kooma Panda": [
      "B-1"
    ],
    "Lord Kyroo": [
      "B-1"
    ],
    "Majik Lapin": [
      "C-1"
    ],
    "Me Me Bunny": [
      "A-1"
    ],
    "Necho Cat": [
      "C-7"
    ],
    "Peepsta Hoo": [
      "A-1"
    ],
    "Pegaslick": [
      "A-3"
    ],
    "Pricklemane": [
      "B-1"
    ],
    "Ryu Dragon": [
      "C-1"
    ],
    "Sir Kyroo": [
      "A-2"
    ],
    "Skelterwild": [
      "C-1"
    ],
    "Staggerceps": [
      "A-2"
    ],
    "Tama Sheep": [
      "A-1"
    ],
    "Tatsu Blaze": [
      "C-1"
    ],
    "Thunderaffe": [
      "A-2"
    ],
    "Toximander": [
      "A-3"
    ],
    "Tubguin Ace": [
      "D-7"
    ]
  }
};
