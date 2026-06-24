/* =====================================================================
   Kingdom Hearts Dream Drop Distance — Ability Link board layouts.

   THIS FILE IS SAFE AND EASY TO HAND-EDIT. The Dream Guide reads it
   straight from window.DG_BOARDS, so a change here shows up on the site
   immediately (just reload). No build step is required.

   Three parts, each keyed by Spirit name:

   1. boards  — the CONTENTS of each tile (what sits ON it). Never changes
                when you only want to fix how tiles connect.
        g    grid coordinate, "<column letter>-<row number>" (e.g. "C-2").
             Columns A,B,C,… left→right; rows 1,2,3,… top→bottom.
        t    type: "Stat Ability", "Support Ability", "Magic Command",
             "Attack Command", "Quota" (a gate), "Secret", etc.
        n    the ability/command name (or "Checkpoint" / "Secret: Red"…).
        c    cost or gate requirement (e.g. "100 LP", "Link x3").
        cond optional condition text. A disposition gate ("…when in X
             disposition") colours the trail; "Changes to … after Secret:
             Red" makes a 2-stage cell (two tiles sharing a g, first = before).

   2. links   — THE PATHING MAP: how tiles connect, as compass directions.
        For each coordinate, the letters N/S/E/W list which neighbours it
        links to (N=up, S=down, E=right, W=left). The map is undirected:
        marking a link on EITHER tile is enough, but it is stored on both
        sides for easy reading. To change how the board branches, just edit
        these letters — the trails and unlock order are derived from them,
        re-rooted automatically from the start. Tile contents are untouched.

   3. starts  — the single gold keyhole each board grows from. Exactly one
                coordinate per board; trails flow outward from it.

   See docs/ability-board-review.md for notes. Pathing source: the
   per-Spirit compass maps in KH_DDD_Ability_Link_Boards.xlsx.
   ===================================================================== */
window.DG_BOARDS = {
  "boards": {
  "Aura Lion": [
    {
      "g": "C-2",
      "t": "Magic Command",
      "n": "Curaga",
      "c": "10 LP",
      "cond": "Changes to Faith after Secret: Red at D-7 is unlocked."
    },
    {
      "g": "C-2",
      "t": "Magic Command",
      "n": "Faith",
      "c": "10 LP",
      "cond": "Changes to Faith after Secret: Red at D-7 is unlocked."
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Attack Command",
      "n": "Limit Storm",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "60 LP",
      "cond": "Becomes available when in Clear Mind disposition."
    },
    {
      "g": "B-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x1",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Clear Mind disposition."
    },
    {
      "g": "A-4",
      "t": "Support Ability",
      "n": "Leaf Bracer",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Lionheart disposition."
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Lionheart disposition."
    },
    {
      "g": "C-7",
      "t": "Secret",
      "n": "Secret: Red",
      "c": "250 LP",
      "cond": "Becomes available after unlocking Secret: Green at E-6"
    },
    {
      "g": "D-6",
      "t": "Attack Command",
      "n": "Sacrifice",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "D-7",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": "Becomes available after unlocking Secret: Green at E-6"
    },
    {
      "g": "E-6",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "F-5",
      "t": "Support Ability",
      "n": "Second Chance",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "E-7",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": "Becomes available after unlocking Secret: Green at E-6"
    }
  ],
  "Beatalike": [
    {
      "g": "C-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x1",
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
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x1",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Attack Command",
      "n": "Confusing Strike",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-6",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": ""
    },
    {
      "g": "F-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "A-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "G-4",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "A-3",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "100 LP",
      "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
    },
    {
      "g": "C-1",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Psychic disposition."
    },
    {
      "g": "E-1",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Groovy disposition."
    },
    {
      "g": "G-3",
      "t": "Attack Command",
      "n": "Ars Arcanum",
      "c": "400 LP",
      "cond": ""
    },
    {
      "g": "A-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
    },
    {
      "g": "B-1",
      "t": "Attack Command",
      "n": "Limit Storm",
      "c": "200 LP",
      "cond": "Becomes available when in Psychic disposition."
    },
    {
      "g": "F-1",
      "t": "Support Ability",
      "n": "Air Combo Plus",
      "c": "200 LP",
      "cond": "Becomes available when in Groovy disposition."
    },
    {
      "g": "G-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": "Becomes available after Secret: Green at A-4 has been unlocked."
    },
    {
      "g": "A-1",
      "t": "Support Ability",
      "n": "Combo Plus",
      "c": "200 LP",
      "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
    },
    {
      "g": "G-1",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": "Becomes available after Secret: Green at A-4 has been unlocked."
    }
  ],
  "Catanuki": [
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Confusion Block",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at E-2 has been unlocked."
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Mini Block",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Slow Block",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Defender",
      "c": "150 LP",
      "cond": "Becomes available after Secret: Green at A-6 has been unlocked."
    },
    {
      "g": "A-4",
      "t": "Magic Command",
      "n": "Vanish",
      "c": "300 LP",
      "cond": "Becomes available after Secret: Green at E-2 has been unlocked."
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Poison Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Attack Command",
      "n": "Spark Raid",
      "c": "300 LP",
      "cond": "Becomes available after Secret: Green at A-6 has been unlocked."
    },
    {
      "g": "A-5",
      "t": "Support Ability",
      "n": "Treasure Magnet",
      "c": "50 LP",
      "cond": "Becomes available after Secret: Green at E-2 has been unlocked."
    },
    {
      "g": "C-1",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-7",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Stop Block",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at A-6 has been unlocked."
    },
    {
      "g": "A-6",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-1 has been unlocked."
    },
    {
      "g": "B-1",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Teakettle disposition."
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Sleep Block",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-7 has been unlocked."
    },
    {
      "g": "B-7",
      "t": "Stat Ability",
      "n": "Blindness Block",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at C-1 has been unlocked."
    },
    {
      "g": "D-7",
      "t": "Magic Command",
      "n": "Sparkra",
      "c": "150 LP",
      "cond": "Becomes available when in Raccoon disposition."
    },
    {
      "g": "E-2",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-7 has been unlocked."
    },
    {
      "g": "A-7",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": "Becomes available after Secret: Green at C-1 has been unlocked."
    },
    {
      "g": "A-1",
      "t": "Magic Command",
      "n": "Blackout",
      "c": "150 LP",
      "cond": "Becomes available when in Teakettle disposition."
    },
    {
      "g": "E-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": "Becomes available after Secret: Green at C-7 has been unlocked."
    },
    {
      "g": "E-7",
      "t": "Spirits Ability",
      "n": "Support Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Raccoon disposition."
    }
  ],
  "Cera Terror": [
    {
      "g": "C-2",
      "t": "Reprisal Command",
      "n": "Steep Climb",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x5",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Attack Command",
      "n": "Dark Break",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Defender",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Mini Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "A-4",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": ""
    },
    {
      "g": "A-5",
      "t": "Stat Ability",
      "n": "Sleep Block",
      "c": "30 LP",
      "cond": "Becomes available when in Demolisher disposition."
    },
    {
      "g": "C-7",
      "t": "Support Ability",
      "n": "EXP Boost",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Drill Sarge disposition."
    },
    {
      "g": "F-4",
      "t": "Attack Command",
      "n": "Zantetsuken",
      "c": "400 LP",
      "cond": ""
    },
    {
      "g": "A-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": "Becomes available when in Demolisher disposition."
    },
    {
      "g": "E-6",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Drill Sarge disposition."
    },
    {
      "g": "A-7",
      "t": "Attack Command",
      "n": "Sonic Blade",
      "c": "250 LP",
      "cond": "Becomes available when in Demolisher disposition."
    }
  ],
  "Chef Kyroo": [
    {
      "g": "C-2",
      "t": "Magic Command",
      "n": "Cura",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Support Ability",
      "n": "Air Combo Plus",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Attack Command",
      "n": "Aerial Slam",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "A-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": "Becomes available after unlocking Secret: Green at A-3. | Becomes available when in Patissier disposition."
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "A-4",
      "t": "Magic Command",
      "n": "Fira",
      "c": "100 LP",
      "cond": "Becomes available after unlocking Secret: Green at A-3. | Becomes available when in Patissier disposition."
    },
    {
      "g": "B-5",
      "t": "Magic Command",
      "n": "Firaga",
      "c": "150 LP",
      "cond": "Becomes available after unlocking Secret: Green at A-3. | Becomes available when in Patissier disposition."
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Patissier disposition. | Becomes available when in Commis disposition."
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Patissier disposition. | Becomes available when in Commis disposition."
    },
    {
      "g": "A-6",
      "t": "Attack Command",
      "n": "Blitz",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "E-6",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-7",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Commis disposition."
    },
    {
      "g": "C-8",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Commis disposition."
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
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Attack Command",
      "n": "Thunder Dash",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 10",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Thunder Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Donner disposition."
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Donner disposition."
    },
    {
      "g": "E-1",
      "t": "Magic Command",
      "n": "Thundara",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Confusion Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "F-1",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Comet disposition."
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": "Becomes available when in Comet disposition."
    },
    {
      "g": "G-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": ""
    },
    {
      "g": "H-2",
      "t": "Magic Command",
      "n": "Thundaga",
      "c": "150 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "A-5",
      "t": "Stat Ability",
      "n": "Reload Boost",
      "c": "75 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "B-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Ice Dream Cone x1",
      "cond": ""
    },
    {
      "g": "B-8",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "15 LP",
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Item Command",
      "n": "Mega-Potion",
      "c": "25 LP",
      "cond": ""
    },
    {
      "g": "C-8",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Paint Gun: Yellow x10",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Vibrant Figment x2",
      "cond": ""
    },
    {
      "g": "D-6",
      "t": "Support Ability",
      "n": "Once More",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "D-8",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Support Ability",
      "n": "Treasure Magnet",
      "c": "25 LP",
      "cond": ""
    },
    {
      "g": "E-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Savage Fantasy x1",
      "cond": ""
    },
    {
      "g": "E-7",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "25 LP",
      "cond": ""
    },
    {
      "g": "E-8",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Dulcet Fantasy x1",
      "cond": ""
    },
    {
      "g": "F-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Shield Cookie x1",
      "cond": ""
    },
    {
      "g": "F-4",
      "t": "Item Command",
      "n": "Megalixir",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "F-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Wild Fantasy x1",
      "cond": ""
    },
    {
      "g": "F-7",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Paint Gun: Blue x10",
      "cond": ""
    },
    {
      "g": "F-8",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "G-1",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "15 LP",
      "cond": ""
    },
    {
      "g": "G-5",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "G-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Block-it Chocolate 2 x1",
      "cond": ""
    },
    {
      "g": "H-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Wondrous Fantasy x2",
      "cond": ""
    },
    {
      "g": "H-2",
      "t": "Stat Ability",
      "n": "Defender",
      "c": "75 LP",
      "cond": ""
    },
    {
      "g": "H-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Water Barrel x1",
      "cond": ""
    },
    {
      "g": "H-4",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "25 LP",
      "cond": ""
    },
    {
      "g": "H-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Noble Fantasy x1",
      "cond": ""
    },
    {
      "g": "H-6",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "50 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Mini Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Stop Block",
      "c": "30 LP",
      "cond": "Becomes available after unlocking Secret: Green at C-3."
    },
    {
      "g": "E-1",
      "t": "Attack Command",
      "n": "Blitz",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": "Becomes available after unlocking Secret: Green at C-3."
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": "Becomes available when in Destroyer disposition."
    },
    {
      "g": "F-1",
      "t": "Stat Ability",
      "n": "Slow Block",
      "c": "30 LP",
      "cond": "Becomes available when in Drill Sarge disposition."
    },
    {
      "g": "F-2",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "F-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": "Becomes available after unlocking Secret: Green at C-3."
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Destroyer disposition."
    },
    {
      "g": "G-1",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Drill Sarge disposition."
    },
    {
      "g": "G-3",
      "t": "Attack Command",
      "n": "Sonic Blade",
      "c": "250 LP",
      "cond": "Becomes available after unlocking Secret: Green at C-3."
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
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Water Barrel x1",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "15 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "B-8",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Confetti Candy x1",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Item Command",
      "n": "Mega-Potion",
      "c": "25 LP",
      "cond": ""
    },
    {
      "g": "D-8",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Ice Dream Cone 2 x1",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Treasure Goggles x2",
      "cond": ""
    },
    {
      "g": "E-6",
      "t": "Support Ability",
      "n": "Damage Syphon",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "E-8",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "F-1",
      "t": "Support Ability",
      "n": "Treasure Magnet",
      "c": "25 LP",
      "cond": ""
    },
    {
      "g": "F-5",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "F-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Royal Cake x2",
      "cond": ""
    },
    {
      "g": "F-7",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "25 LP",
      "cond": ""
    },
    {
      "g": "F-8",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Confetti Candy 3 x1",
      "cond": ""
    },
    {
      "g": "G-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Paint Gun: Green x10",
      "cond": ""
    },
    {
      "g": "G-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Paint Gun: Black x10",
      "cond": ""
    },
    {
      "g": "G-6",
      "t": "Spirits Ability",
      "n": "Support Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "H-1",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "H-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Paint Gun: Purple x10",
      "cond": ""
    },
    {
      "g": "H-3",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "15 LP",
      "cond": ""
    },
    {
      "g": "H-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Paint Gun: Yellow x10",
      "cond": ""
    },
    {
      "g": "H-5",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "25 LP",
      "cond": ""
    },
    {
      "g": "H-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Paint Gun: White x10",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Slow Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Attack Command",
      "n": "Aerial Slam",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Ace disposition."
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Magic Command",
      "n": "Firaga Burst",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "F-1",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "150 LP",
      "cond": "Becomes available when in Ace disposition."
    },
    {
      "g": "F-2",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Vulcan disposition."
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "G-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": "Becomes available when in Vulcan disposition."
    },
    {
      "g": "G-3",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "50 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Confusion Block",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at E-3 has been unlocked."
    },
    {
      "g": "E-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at E-3 has been unlocked."
    },
    {
      "g": "F-1",
      "t": "Magic Command",
      "n": "Triple Plasma",
      "c": "200 LP",
      "cond": "Becomes available after Secret: Green at E-3 has been unlocked."
    },
    {
      "g": "F-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": "Becomes available after Secret: Green at E-3 has been unlocked."
    },
    {
      "g": "F-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x2",
      "cond": ""
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": "Becomes available after Secret: Green at E-3 has been unlocked."
    },
    {
      "g": "F-5",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": "Becomes available after Secret: Green at E-3 has been unlocked."
    },
    {
      "g": "G-1",
      "t": "Spirits Ability",
      "n": "Support Boost",
      "c": "200 LP",
      "cond": "Becomes available after Secret: Green at E-3 has been unlocked."
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
      "cond": "Becomes available after Secret: Green at E-3 has been unlocked."
    },
    {
      "g": "H-1",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": "Becomes available while in Shock Therapist disposition."
    },
    {
      "g": "H-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "150 LP",
      "cond": "Becomes available while in Shock Therapist disposition."
    },
    {
      "g": "H-4",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Capacitor disposition."
    },
    {
      "g": "H-5",
      "t": "Support Ability",
      "n": "Leaf Bracer",
      "c": "300 LP",
      "cond": "Becomes available when in Capacitor disposition."
    }
  ],
  "Escarglow": [
    {
      "g": "B-1",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Blindsider disposition."
    },
    {
      "g": "B-2",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Blindsider disposition."
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
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Thunder Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "40 LP",
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
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Snail Support disposition."
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "20 LP",
      "cond": "Becomes available when in Snail Support disposition."
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
      "cond": ""
    },
    {
      "g": "A-5",
      "t": "Attack Command",
      "n": "Gravity Strike",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "A-6",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Grunt disposition."
    },
    {
      "g": "A-7",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": "Becomes available when in Grunt disposition."
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": "Becomes available after unlocking Secret: Green at B-5."
    },
    {
      "g": "B-7",
      "t": "Magic Command",
      "n": "Zero Gravira",
      "c": "100 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-5."
    },
    {
      "g": "B-8",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": "Becomes available after unlocking Secret: Green at B-5."
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Sleep Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Slow Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-8",
      "t": "Magic Command",
      "n": "Zero Graviga",
      "c": "150 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-5."
    },
    {
      "g": "D-2",
      "t": "Spirits Ability",
      "n": "Support Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Diver disposition."
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": "Becomes available when in Diver disposition."
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
      "cond": ""
    },
    {
      "g": "A-4",
      "t": "Support Ability",
      "n": "Leaf Bracer",
      "c": "300 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Hitman disposition."
    },
    {
      "g": "B-6",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Hitman disposition."
    },
    {
      "g": "C-1",
      "t": "Stat Ability",
      "n": "Poison Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": ""
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
      "cond": "Becomes available when in Anchor disposition."
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Anchor disposition."
    },
    {
      "g": "D-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": ""
    },
    {
      "g": "D-6",
      "t": "Magic Command",
      "n": "Zero Graviga",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Attack Command",
      "n": "Dark Break",
      "c": "200 LP",
      "cond": ""
    }
  ],
  "Flowbermeow": [
    {
      "g": "A-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-2."
    },
    {
      "g": "A-3",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "150 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-2."
    },
    {
      "g": "B-1",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "150 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-2."
    },
    {
      "g": "B-2",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": "Becomes available after unlocking Secret: Green at B-2."
    },
    {
      "g": "B-5",
      "t": "Magic Command",
      "n": "Sparkga",
      "c": "150 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-2."
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
      "cond": "Becomes available after unlocking Secret: Green at B-2."
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
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
      "cond": "Becomes available after unlocking Secret: Green at B-2."
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "60 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-2."
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Reload Boost",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "E-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": ""
    },
    {
      "g": "F-6",
      "t": "Magic Command",
      "n": "Faith",
      "c": "300 LP",
      "cond": ""
    }
  ],
  "Frootz Cat": [
    {
      "g": "A-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "200 LP",
      "cond": "Becomes available when in Pretty Kitty disposition."
    },
    {
      "g": "A-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "A-5",
      "t": "Spirits Ability",
      "n": "Support Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Sweetheart disposition."
    },
    {
      "g": "B-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "200 LP",
      "cond": "Becomes available when in Pretty Kitty disposition."
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "150 LP",
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
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Magic Command",
      "n": "Triple Plasma",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "G-2",
      "t": "Attack Command",
      "n": "Salvation",
      "c": "250 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "100 LP",
      "cond": "Becomes available when in Phantom disposition."
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x1",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Support Ability",
      "n": "Treasure Magnet",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Blindness Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": "Becomes available when in Phantom disposition."
    },
    {
      "g": "E-1",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Slow Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "60 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Attack Command",
      "n": "Dark Aura",
      "c": "400 LP",
      "cond": ""
    },
    {
      "g": "F-1",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "80 LP",
      "cond": "Becomes available when in Split Personality disposition."
    },
    {
      "g": "F-2",
      "t": "Magic Command",
      "n": "Vanish",
      "c": "300 LP",
      "cond": "Becomes available when in Split Personality disposition."
    }
  ],
  "Halbird": [
    {
      "g": "A-2",
      "t": "Magic Command",
      "n": "Tornado",
      "c": "400 LP",
      "cond": ""
    },
    {
      "g": "B-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "150 LP",
      "cond": "Becomes available when in Harrier disposition."
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Stop Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "150 LP",
      "cond": "Becomes available when in Harrier disposition."
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
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": "Available after unlocking Secret: Green at E-5."
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": "Available after unlocking Secret: Green at E-5."
    },
    {
      "g": "E-5",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "E-6",
      "t": "Attack Command",
      "n": "Timestorm",
      "c": "100 LP",
      "cond": "Becomes available when in Sky Master disposition."
    },
    {
      "g": "E-7",
      "t": "Support Ability",
      "n": "Air Combo Plus",
      "c": "200 LP",
      "cond": "Becomes available when in Sky Master disposition."
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
      "cond": "Available after unlocking Secret: Green at E-5."
    },
    {
      "g": "G-2",
      "t": "Attack Command",
      "n": "Break Time",
      "c": "200 LP",
      "cond": "Available after unlocking Secret: Green at E-5."
    }
  ],
  "Hebby Repp": [
    {
      "g": "A-4",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "60 LP",
      "cond": "Becomes available when in Wheeler disposition."
    },
    {
      "g": "A-5",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Wheeler disposition."
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
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "40 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Slow Block",
      "c": "30 LP",
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
      "t": "Magic Command",
      "n": "Fira",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "D-6",
      "t": "Attack Command",
      "n": "Fire Windmill",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Salamander disposition."
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Salamander disposition."
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
      "cond": "Becomes available when in Wingman disposition."
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
      "cond": "Becomes available when in Wingman disposition."
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Stop Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Magic Command",
      "n": "Blizzaga",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Slider disposition."
    },
    {
      "g": "F-5",
      "t": "Magic Command",
      "n": "Ice Barrage",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "G-2",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Slider disposition."
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
      "cond": ""
    },
    {
      "g": "A-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 10",
      "cond": ""
    },
    {
      "g": "A-6",
      "t": "Magic Command",
      "n": "Bind",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "A-7",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 15",
      "cond": ""
    },
    {
      "g": "A-8",
      "t": "Magic Command",
      "n": "Balloonra",
      "c": "150 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Stat Ability",
      "n": "Thunder Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Chicken disposition."
    },
    {
      "g": "B-7",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Chicken disposition."
    },
    {
      "g": "C-2",
      "t": "Support Ability",
      "n": "Treasure Magnet",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
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
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "Blindness Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Thunder Screen",
      "c": "60 LP",
      "cond": "Becomes available when in Flake disposition."
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Flake disposition."
    },
    {
      "g": "E-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": "Becomes available after unlocking Secret: Green at D-2."
    },
    {
      "g": "F-2",
      "t": "Attack Command",
      "n": "Collision Magnet",
      "c": "150 LP",
      "cond": "Becomes available after unlocking Secret: Green at D-2."
    }
  ],
  "Juggle Pup": [
    {
      "g": "A-2",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-1",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "A-3",
      "t": "Magic Command",
      "n": "Balloonra",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at A-2 has been unlocked."
    },
    {
      "g": "B-2",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at A-2 has been unlocked."
    },
    {
      "g": "C-1",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": "Becomes available after Secret: Green at A-2 has been unlocked."
    },
    {
      "g": "A-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at A-2 has been unlocked."
    },
    {
      "g": "B-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at A-2 has been unlocked."
    },
    {
      "g": "C-2",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at A-2 has been unlocked."
    },
    {
      "g": "D-1",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at A-2 has been unlocked."
    },
    {
      "g": "B-4",
      "t": "Magic Command",
      "n": "Blizzaga",
      "c": "150 LP",
      "cond": "Becomes available after Secret: Green at C-2 has been unlocked."
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "20 LP",
      "cond": "Becomes available after Secret: Green at C-2 has been unlocked."
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at C-2 has been unlocked."
    },
    {
      "g": "B-5",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-2 has been unlocked."
    },
    {
      "g": "C-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-2 has been unlocked."
    },
    {
      "g": "D-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-2 has been unlocked."
    },
    {
      "g": "E-2",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-2 has been unlocked."
    },
    {
      "g": "C-5",
      "t": "Attack Command",
      "n": "Slot Edge",
      "c": "200 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "40 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "C-6",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "D-5",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "E-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "F-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at E-4 has been unlocked."
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at E-4 has been unlocked."
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "50 LP",
      "cond": "Becomes available after Secret: Green at E-4 has been unlocked."
    },
    {
      "g": "G-3",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "60 LP",
      "cond": "Becomes available after Secret: Green at E-4 has been unlocked."
    },
    {
      "g": "D-7",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": "Becomes available after Secret: Green at E-2 has been unlocked."
    },
    {
      "g": "E-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": "Becomes available after Secret: Green at B-5 has been unlocked."
    },
    {
      "g": "F-5",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at F-3 has been unlocked."
    },
    {
      "g": "F-6",
      "t": "Magic Command",
      "n": "Balloonga",
      "c": "150 LP",
      "cond": "Becomes available after Secret: Green at B-5 has been unlocked."
    },
    {
      "g": "G-5",
      "t": "Support Ability",
      "n": "Leaf Bracer",
      "c": "300 LP",
      "cond": ""
    }
  ],
  "KO Kabuto": [
    {
      "g": "C-2",
      "t": "Defense Ability",
      "n": "Link Block",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "A-2",
      "t": "Stat Ability",
      "n": "Reload Boost",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Thunder Screen",
      "c": "20 LP",
      "cond": "Becomes available after Secret: Green at A-3 is unlocked."
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Magic Command",
      "n": "Fira",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "A-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Thunder Screen",
      "c": "40 LP",
      "cond": "Becomes available after Secret: Green at A-3 is unlocked."
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "A-4",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Grenadier disposition."
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Thunder Screen",
      "c": "60 LP",
      "cond": "Becomes available after Secret: Green at A-3 is unlocked."
    },
    {
      "g": "C-6",
      "t": "Attack Command",
      "n": "Circle Raid",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Bodyguard disposition."
    },
    {
      "g": "B-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": "Becomes available after Secret: Green at A-3 is unlocked."
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "60 LP",
      "cond": ""
    },
    {
      "g": "B-7",
      "t": "Attack Command",
      "n": "Icebreaker",
      "c": "100 LP",
      "cond": "Becomes available after Secret: Green at A-3 is unlocked."
    }
  ],
  "Kab Kannon": [
    {
      "g": "A-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": "Becomes available after unlocking Secret: Green at D-4."
    },
    {
      "g": "A-2",
      "t": "Magic Command",
      "n": "Zero Graviga",
      "c": "150 LP",
      "cond": "Becomes available after unlocking Secret: Green at D-4."
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
      "cond": ""
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
      "cond": "Becomes available after unlocking Secret: Green at D-4."
    },
    {
      "g": "B-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 10",
      "cond": "Becomes available after unlocking Secret: Green at D-4."
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Ack-Ack disposition."
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x1",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Ack-Ack disposition."
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
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Bodyguard disposition."
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Thunder Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Bodyguard disposition."
    },
    {
      "g": "D-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Magic Command",
      "n": "Dark Firaga",
      "c": "10 LP",
      "cond": ""
    }
  ],
  "Keeba Tiger": [
    {
      "g": "A-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x5",
      "cond": ""
    },
    {
      "g": "B-2",
      "t": "Attack Command",
      "n": "Sacrifice",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "A-4",
      "t": "Support Ability",
      "n": "EXP Boost",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "B-1",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Sleep Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Usurper disposition."
    },
    {
      "g": "D-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "300 LP",
      "cond": "Becomes available when in Usurper disposition."
    },
    {
      "g": "E-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": "Becomes available after unlocking Secret: Green at D-3."
    },
    {
      "g": "F-2",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Attack Command",
      "n": "Dark Aura",
      "c": "400 LP",
      "cond": "Becomes available after unlocking Secret: Green at D-3."
    },
    {
      "g": "F-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "F-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": "Becomes available when in Conqueror disposition."
    },
    {
      "g": "G-3",
      "t": "Attack Command",
      "n": "Dark Splicer",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "G-1",
      "t": "Magic Command",
      "n": "Meteor",
      "c": "400 LP",
      "cond": "Becomes available when in Conqueror disposition."
    }
  ],
  "Komory Bat": [
    {
      "g": "B-3",
      "t": "Spirits Ability",
      "n": "Waking Dream",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Magic Command",
      "n": "Confuse",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Magic Command",
      "n": "Zero Gravity",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Attack Command",
      "n": "Drain Dive",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x2",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Confusion Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Rescuer disposition."
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Magic Command",
      "n": "Zero Gravira",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": "Becomes available when in Rescuer disposition."
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": "Becomes available when in Aggro disposition."
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Aggro disposition."
    },
    {
      "g": "G-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x2",
      "cond": ""
    },
    {
      "g": "H-3",
      "t": "Attack Command",
      "n": "Confusing Strike",
      "c": "100 LP",
      "cond": ""
    }
  ],
  "Kooma Panda": [
    {
      "g": "B-2",
      "t": "Attack Command",
      "n": "Circle Raid",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "A-2",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "A-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Blindness Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "A-4",
      "t": "Attack Command",
      "n": "Aerial Slam",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Magic Command",
      "n": "Bind",
      "c": "50 LP",
      "cond": "Becomes available after unlocking Secret: Green at D-2."
    },
    {
      "g": "A-5",
      "t": "Stat Ability",
      "n": "Confusion Block",
      "c": "30 LP",
      "cond": "Becomes available when in Wrestler disposition."
    },
    {
      "g": "B-6",
      "t": "Stat Ability",
      "n": "Mini Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Wrestler disposition."
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "50 LP",
      "cond": "Becomes available after unlocking Secret: Green at D-2."
    },
    {
      "g": "A-6",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Bruiser disposition."
    },
    {
      "g": "B-7",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": "Becomes available when in Bruiser disposition."
    },
    {
      "g": "E-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": "Becomes available after unlocking Secret: Green at D-2."
    },
    {
      "g": "F-4",
      "t": "Support Ability",
      "n": "Combo Plus",
      "c": "200 LP",
      "cond": "Becomes available after unlocking Secret: Green at D-2."
    }
  ],
  "Lord Kyroo": [
    {
      "g": "B-2",
      "t": "Attack Command",
      "n": "Blitz",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-2",
      "t": "Attack Command",
      "n": "Ars Arcanum",
      "c": "10 LP",
      "cond": "Becomes Ars Arcanum after Secret: Red at G-4 has been unlocked."
    },
    {
      "g": "A-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "A-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x5",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Defender",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": "Becomes available after unlocking Secret: Green at D-3."
    },
    {
      "g": "A-4",
      "t": "Support Ability",
      "n": "Combo Master",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Magic Command",
      "n": "Triple Plasma",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Attack Command",
      "n": "Zantetsuken",
      "c": "400 LP",
      "cond": "Becomes available after unlocking Secret: Green at D-3."
    },
    {
      "g": "D-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Warmonger disposition."
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": "Becomes available when in Warmonger disposition."
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": "Becomes available when in Selfless Ruler disposition."
    },
    {
      "g": "E-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Selfless Ruler disposition."
    },
    {
      "g": "F-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": "Becomes available after unlocking Secret: Green at E-4."
    },
    {
      "g": "G-4",
      "t": "Secret",
      "n": "Secret: Red",
      "c": "350 LP",
      "cond": "Becomes available after unlocking Secret: Green at E-4."
    }
  ],
  "Majik Lapin": [
    {
      "g": "C-2",
      "t": "Defense Command",
      "n": "Dark Barrier",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "150 LP",
      "cond": "Becomes available when in Accomplice disposition."
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "A-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "200 LP",
      "cond": "Becomes available when in Accomplice disposition."
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Stop Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Magic Command",
      "n": "Deep Freeze",
      "c": "400 LP",
      "cond": ""
    },
    {
      "g": "A-5",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": ""
    },
    {
      "g": "D-6",
      "t": "Magic Command",
      "n": "Zero Graviza",
      "c": "150 LP",
      "cond": "Becomes available when in Illusionist disposition."
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "A-6",
      "t": "Magic Command",
      "n": "Firaga Burst",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "E-6",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "300 LP",
      "cond": "Becomes available when in Illusionist disposition."
    }
  ],
  "Me Me Bunny": [
    {
      "g": "B-1",
      "t": "Defense Command",
      "n": "Dark Barrier",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-2",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Bruiser disposition."
    },
    {
      "g": "C-3",
      "t": "Attack Command",
      "n": "Prism Windmill",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Stat Ability",
      "n": "Defender",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Support Ability",
      "n": "Combo Plus",
      "c": "200 LP",
      "cond": "Becomes available when in Bruiser disposition."
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Slow Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": "Becomes available when in Space Invader disposition."
    },
    {
      "g": "C-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x2",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Space Invader disposition."
    },
    {
      "g": "D-6",
      "t": "Attack Command",
      "n": "Break Time",
      "c": "200 LP",
      "cond": ""
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
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 10",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Magic Command",
      "n": "Slow",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Magic Command",
      "n": "Cura",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Poison Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Magic Command",
      "n": "Spark",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "F-1",
      "t": "Stat Ability",
      "n": "Confusion Block",
      "c": "30 LP",
      "cond": "Becomes available when in Stray disposition."
    },
    {
      "g": "F-2",
      "t": "Support Ability",
      "n": "Leaf Bracer",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": "Becomes available when in Smart Cookie disposition."
    },
    {
      "g": "G-1",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": "Becomes available when in Stray disposition."
    },
    {
      "g": "G-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": ""
    },
    {
      "g": "G-3",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Smart Cookie disposition."
    },
    {
      "g": "H-2",
      "t": "Magic Command",
      "n": "Curaga",
      "c": "150 LP",
      "cond": ""
    }
  ],
  "Meowjesty": [
    {
      "g": "A-1",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "A-4",
      "t": "Magic Command",
      "n": "Sparkra",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "A-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 15",
      "cond": ""
    },
    {
      "g": "B-1",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "30 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "20 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Attack Command",
      "n": "Thunder Dash",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Magic Command",
      "n": "Cura",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "F-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": ""
    },
    {
      "g": "G-3",
      "t": "Magic Command",
      "n": "Curaga",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "H-3",
      "t": "Support Ability",
      "n": "Second Chance",
      "c": "300 LP",
      "cond": ""
    }
  ],
  "Necho Cat": [
    {
      "g": "C-6",
      "t": "Magic Command",
      "n": "Thunder",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Sleep Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Confusion Block",
      "c": "30 LP",
      "cond": "Becomes available when in Diva disposition."
    },
    {
      "g": "C-3",
      "t": "Magic Command",
      "n": "Sleepra",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Magic Command",
      "n": "Time Bomb",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "A-4",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Diva disposition."
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Artist disposition."
    },
    {
      "g": "B-1",
      "t": "Spirits Ability",
      "n": "Support Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "150 LP",
      "cond": "Becomes available when in Artist disposition."
    }
  ],
  "Peepsta Hoo": [
    {
      "g": "B-1",
      "t": "Magic Command",
      "n": "Blackout",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-2",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "30 LP",
      "cond": "Becomes available when in Sweeper disposition."
    },
    {
      "g": "C-1",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Paint Gun: Red x10",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Blindness Block",
      "c": "30 LP",
      "cond": "Becomes available when in Watcher disposition."
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Magic Command",
      "n": "Fira",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Paint Gun: Blue x20",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Poison Block",
      "c": "30 LP",
      "cond": "Becomes available when in Scout disposition."
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Magic Command",
      "n": "Blizzara",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "F-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Paint Gun: Yellow x30",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "Confusion Block",
      "c": "30 LP",
      "cond": "Becomes available when in Patroller disposition."
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "G-3",
      "t": "Magic Command",
      "n": "Thundara",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "F-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "G-5",
      "t": "Spirits Ability",
      "n": "Support Boost",
      "c": "200 LP",
      "cond": ""
    }
  ],
  "Pegaslick": [
    {
      "g": "B-3",
      "t": "Attack Command",
      "n": "Prism Windmill",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "20 LP",
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
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "60 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Support Ability",
      "n": "Air Combo Plus",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Magic Command",
      "n": "Sparkra",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "100 LP",
      "cond": "Becomes available when in Hurricane disposition."
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "80 LP",
      "cond": "Becomes available when in Stormgoer disposition."
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "150 LP",
      "cond": "Becomes available when in Hurricane disposition."
    },
    {
      "g": "E-1",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Stormgoer disposition."
    },
    {
      "g": "G-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": ""
    },
    {
      "g": "H-3",
      "t": "Magic Command",
      "n": "Sparkga",
      "c": "250 LP",
      "cond": ""
    }
  ],
  "Pricklemane": [
    {
      "g": "B-2",
      "t": "Attack Command",
      "n": "Strike Raid",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Stop Block",
      "c": "30 LP",
      "cond": "Becomes available when in Intellectual disposition."
    },
    {
      "g": "A-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Magic Command",
      "n": "Time Bomb",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Sleep Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": "Becomes available when in Intellectual disposition."
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 10",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x5",
      "cond": ""
    },
    {
      "g": "A-5",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Support Ability",
      "n": "Combo Plus",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "A-6",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-6."
    },
    {
      "g": "B-7",
      "t": "Stat Ability",
      "n": "Poison Block",
      "c": "30 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-6."
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-6."
    },
    {
      "g": "B-8",
      "t": "Attack Command",
      "n": "Circle Raid",
      "c": "100 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-6."
    }
  ],
  "R & R Seal": [
    {
      "g": "A-2",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "A-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at B-1 has been unlocked."
    },
    {
      "g": "A-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at B-1 has been unlocked."
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
      "cond": "Becomes available after Secret: Green at B-1 has been unlocked."
    },
    {
      "g": "B-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at B-1 has been unlocked."
    },
    {
      "g": "B-4",
      "t": "Attack Command",
      "n": "Shadowbreaker",
      "c": "100 LP",
      "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
    },
    {
      "g": "B-5",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
    },
    {
      "g": "C-1",
      "t": "Stat Ability",
      "n": "Confusion Block",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at B-1 has been unlocked."
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
      "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
    },
    {
      "g": "C-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "150 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "C-6",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
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
      "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
    },
    {
      "g": "D-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "D-5",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at C-6 has been unlocked."
    },
    {
      "g": "D-7",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": "Becomes available after Secret: Green at A-4 has been unlocked."
    },
    {
      "g": "E-2",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "100 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "E-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "200 LP",
      "cond": "Becomes available after Secret: Green at C-6 has been unlocked."
    },
    {
      "g": "E-6",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at E-2 has been unlocked."
    },
    {
      "g": "F-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 10",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "F-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after Secret: Green at C-4 has been unlocked."
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "Slow Block",
      "c": "30 LP",
      "cond": "Becomes available after Secret: Green at C-6 has been unlocked."
    },
    {
      "g": "F-5",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": "Becomes available after Secret: Green at A-4 has been unlocked."
    },
    {
      "g": "F-6",
      "t": "Item Command",
      "n": "Megalixir",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "G-2",
      "t": "Magic Command",
      "n": "Balloonga",
      "c": "150 LP",
      "cond": "Becomes available after Secret: Green at A-4 has been unlocked."
    }
  ],
  "Ryu Dragon": [
    {
      "g": "B-1",
      "t": "Movement Command",
      "n": "Superglide",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x1",
      "cond": ""
    },
    {
      "g": "A-1",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-2",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Support Ability",
      "n": "Combo Plus",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "A-2",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Attack Command",
      "n": "Meteor Crash",
      "c": "400 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Wyvern disposition."
    },
    {
      "g": "B-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "200 LP",
      "cond": "Becomes available after unlocking Secret: Green at C-4."
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Wyvern disposition."
    },
    {
      "g": "A-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": "Becomes available after unlocking Secret: Green at B-4."
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Bahamut disposition."
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Reload Boost",
      "c": "150 LP",
      "cond": "Becomes available after unlocking Secret: Green at C-4."
    },
    {
      "g": "A-5",
      "t": "Magic Command",
      "n": "Firaga Burst",
      "c": "300 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-4."
    },
    {
      "g": "E-5",
      "t": "Support Ability",
      "n": "Combo Master",
      "c": "300 LP",
      "cond": "Becomes available when in Bahamut disposition."
    },
    {
      "g": "F-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x5",
      "cond": "Becomes available after unlocking Secret: Green at C-4."
    },
    {
      "g": "G-4",
      "t": "Magic Command",
      "n": "Mega Flare",
      "c": "400 LP",
      "cond": "Becomes available after unlocking Secret: Green at C-4."
    }
  ],
  "Sir Kyroo": [
    {
      "g": "B-2",
      "t": "Attack Command",
      "n": "Strike Raid",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Stop Block",
      "c": "30 LP",
      "cond": "Becomes available when in Paladin disposition."
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Paladin disposition."
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "A-6",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "60 LP",
      "cond": "Becomes available when in Warrior disposition."
    },
    {
      "g": "B-7",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": "Becomes available when in Warrior disposition."
    },
    {
      "g": "G-2",
      "t": "Support Ability",
      "n": "Combo Plus",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "B-8",
      "t": "Attack Command",
      "n": "Blitz",
      "c": "100 LP",
      "cond": ""
    }
  ],
  "Skelterwild": [
    {
      "g": "C-2",
      "t": "Attack Command",
      "n": "Limit Storm",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x5",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Savage disposition."
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Support Ability",
      "n": "EXP Walker",
      "c": "400 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Savage disposition."
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "200 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-4."
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "300 LP",
      "cond": "Becomes available when in Fiend disposition."
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Poison Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "A-5",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-4."
    },
    {
      "g": "B-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": "Becomes available after unlocking Secret: Green at B-4."
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Fiend disposition."
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "Reload Boost",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "A-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": "Becomes available after unlocking Secret: Green at A-5."
    },
    {
      "g": "B-7",
      "t": "Magic Command",
      "n": "Ice Barrage",
      "c": "300 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-4."
    },
    {
      "g": "E-6",
      "t": "Magic Command",
      "n": "Deep Freeze",
      "c": "400 LP",
      "cond": ""
    },
    {
      "g": "A-7",
      "t": "Attack Command",
      "n": "Ars Arcanum",
      "c": "400 LP",
      "cond": "Becomes available after unlocking Secret: Green at A-5."
    }
  ],
  "Staggerceps": [
    {
      "g": "B-2",
      "t": "Defense Command",
      "n": "Link Block",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x2",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Stat Ability",
      "n": "Combo Plus",
      "c": "200 LP",
      "cond": "Becomes available when in Heavy Hitter disposition."
    },
    {
      "g": "D-2",
      "t": "Attack Command",
      "n": "Collision Magnet",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Defender",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "60 LP",
      "cond": "Becomes available when in Heavy Hitter disposition."
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "40 LP",
      "cond": "Becomes available after unlocking Secret: Green at E-4."
    },
    {
      "g": "D-5",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": "Becomes available after unlocking Secret: Green at E-4."
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Light Screen",
      "c": "60 LP",
      "cond": "Becomes available after unlocking Secret: Green at D-5."
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": "Becomes available after unlocking Secret: Green at E-4."
    },
    {
      "g": "E-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": "Becomes available after unlocking Secret: Green at D-5."
    },
    {
      "g": "F-5",
      "t": "Magic Command",
      "n": "Blizzara",
      "c": "100 LP",
      "cond": "Becomes available after unlocking Secret: Green at E-4."
    },
    {
      "g": "F-6",
      "t": "Attack Command",
      "n": "Zantetsuken",
      "c": "400 LP",
      "cond": "Becomes available after unlocking Secret: Green at D-5."
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
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Slow Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Attack Command",
      "n": "Circle Raid",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "F-1",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Reload Boost",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "G-1",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "G-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "G-3",
      "t": "Attack Command",
      "n": "Slot Edge",
      "c": "200 LP",
      "cond": ""
    }
  ],
  "Tama Sheep": [
    {
      "g": "A-2",
      "t": "Magic Command",
      "n": "Sleep",
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
      "g": "B-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "A-4",
      "t": "Stats Ability",
      "n": "Sleep Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stats Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stats Ability",
      "n": "Slow Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Magic Command",
      "n": "Balloon",
      "c": "50 LP",
      "cond": "Available after Secret: Green at D-2 has been unlocked."
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Stop Block",
      "c": "30 LP",
      "cond": "Available after Secret: Green at D-2 has been unlocked."
    },
    {
      "g": "D-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x1",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": "Available after Secret: Green at D-2 has been unlocked."
    },
    {
      "g": "F-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": "Available after Secret: Green at D-2 has been unlocked."
    },
    {
      "g": "E-4",
      "t": "Magic Command",
      "n": "Sleepra",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Mumbler disposition."
    },
    {
      "g": "G-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": "Available after Secret: Green at D-2 has been unlocked."
    },
    {
      "g": "F-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x2",
      "cond": ""
    },
    {
      "g": "G-3",
      "t": "Spirits Ability",
      "n": "Support Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Mumbler disposition."
    },
    {
      "g": "G-4",
      "t": "Magic Command",
      "n": "Sleepga",
      "c": "150 LP",
      "cond": ""
    }
  ],
  "Tatsu Blaze": [
    {
      "g": "C-2",
      "t": "Magic Command",
      "n": "Fira",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Magic Command",
      "n": "Firaga",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Attack Command",
      "n": "Meteor Crash",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": "Becomes available after unlocking Secret: Green at C-5."
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "30 LP",
      "cond": "Becomes available after unlocking Secret: Green at C-5."
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "50 LP",
      "cond": "Becomes available after unlocking Secret: Green at C-5."
    },
    {
      "g": "G-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Two-face disposition."
    },
    {
      "g": "C-7",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": "Becomes available after unlocking Secret: Green at C-5."
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": "Becomes available when in Deadeye disposition."
    },
    {
      "g": "G-3",
      "t": "Secret",
      "n": "Secret: Red",
      "c": "250 LP",
      "cond": ""
    },
    {
      "g": "A-6",
      "t": "Spirits Ability",
      "n": "Support Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Two-face disposition."
    },
    {
      "g": "D-7",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": "Becomes available when in Deadeye disposition."
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
      "cond": ""
    },
    {
      "g": "A-6",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": "Becomes available when in Tactician disposition."
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
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Confusion Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "60 LP",
      "cond": "Becomes available when in Tactician disposition."
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "Blizzard Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "C-7",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": ""
    },
    {
      "g": "C-8",
      "t": "Magic Command",
      "n": "Blizzaga",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Magic Command",
      "n": "Blizzara",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Trap Jockey disposition."
    },
    {
      "g": "E-6",
      "t": "Stat Ability",
      "n": "Blizzard Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Trap Jockey disposition."
    }
  ],
  "Thunderaffe": [
    {
      "g": "B-2",
      "t": "Magic Command",
      "n": "Thundara",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-1",
      "t": "Stat Ability",
      "n": "Thunder Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Support Ability",
      "n": "Damage Syphon",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Thunder Screen",
      "c": "60 LP",
      "cond": "Becomes available when in Photon Don disposition."
    },
    {
      "g": "D-2",
      "t": "Magic Command",
      "n": "Thundaga",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Magic Command",
      "n": "Triple Plasma",
      "c": "150 LP",
      "cond": "Changes to Triple Plasma after Secret: Red at E-1 has been unlocked."
    },
    {
      "g": "D-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Photon Don disposition."
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Secret",
      "n": "Secret: Red",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Slow Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "F-1",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "150 LP",
      "cond": "Becomes available when in Blue Streak disposition."
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Thunder Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "G-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": ""
    },
    {
      "g": "G-1",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "200 LP",
      "cond": "Becomes available when in Blue Streak disposition."
    },
    {
      "g": "H-2",
      "t": "Attack Command",
      "n": "Zantetsuken",
      "c": "200 LP",
      "cond": ""
    }
  ],
  "Toximander": [
    {
      "g": "B-3",
      "t": "Magic Command",
      "n": "Poison",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-2",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Confusion Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Blindness Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x2",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "30 LP",
      "cond": "Becomes available when in Hunter disposition."
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Poison Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Support Ability",
      "n": "Treasure Magnet",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Hunter disposition."
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Attack Command",
      "n": "Gravity Strike",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 15",
      "cond": ""
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "Mini Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "G-2",
      "t": "Attack Command",
      "n": "Poison Dive",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "G-4",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "30 LP",
      "cond": "Becomes available when in Basilisk disposition."
    },
    {
      "g": "H-4",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Basilisk disposition."
    }
  ],
  "Tubguin Ace": [
    {
      "g": "C-7",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "E-7",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-7",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x1",
      "cond": ""
    },
    {
      "g": "F-7",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x1",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "F-6",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "A-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x1",
      "cond": ""
    },
    {
      "g": "G-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 10",
      "cond": ""
    },
    {
      "g": "A-5",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "G-5",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "A-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 15",
      "cond": ""
    },
    {
      "g": "G-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x2",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x2",
      "cond": ""
    },
    {
      "g": "F-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x2",
      "cond": ""
    },
    {
      "g": "B-2",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Sauna disposition."
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "60 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "60 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Whirlpool disposition."
    },
    {
      "g": "B-1",
      "t": "Attack Command",
      "n": "Fire Windmill",
      "c": "150 LP",
      "cond": "Becomes available when in Sauna disposition."
    },
    {
      "g": "D-3",
      "t": "Support Ability",
      "n": "Combo Plus",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "F-1",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available when in Whirlpool disposition."
    },
    {
      "g": "D-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": "Becomes available after Secret: Green at F-1 has been unlocked."
    },
    {
      "g": "D-4",
      "t": "Magic Command",
      "n": "Balloonra",
      "c": "150 LP",
      "cond": "Becomes available after Secret: Green at F-1 has been unlocked."
    },
    {
      "g": "D-1",
      "t": "Magic Command",
      "n": "Dark Firaga",
      "c": "400 LP",
      "cond": "Becomes available after Secret: Green at F-1 has been unlocked."
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
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 25",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Flametongue disposition."
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "300 LP",
      "cond": "Becomes available when in Flametongue disposition."
    },
    {
      "g": "E-1",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Magic Command",
      "n": "Firaga Burst",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "F-1",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x5",
      "cond": ""
    },
    {
      "g": "F-3",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "F-4",
      "t": "Attack Command",
      "n": "Meteor Crash",
      "c": "400 LP",
      "cond": "Becomes available after unlocking Secret: Green at F-3."
    },
    {
      "g": "G-1",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Tyrant disposition."
    },
    {
      "g": "G-2",
      "t": "Support Ability",
      "n": "Once More",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "G-4",
      "t": "Secret",
      "n": "Secret: Green",
      "c": "10 LP",
      "cond": "Becomes available after unlocking Secret: Green at F-3."
    },
    {
      "g": "G-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 30",
      "cond": "Becomes available after unlocking Sercet: Green at G-4."
    },
    {
      "g": "G-6",
      "t": "Magic Command",
      "n": "Mega Flare",
      "c": "400 LP",
      "cond": "Becomes available after unlocking Sercet: Green at G-4."
    },
    {
      "g": "H-1",
      "t": "Stat Ability",
      "n": "Fire Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Tyrant disposition."
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
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-3."
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "150 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-3."
    },
    {
      "g": "C-2",
      "t": "Attack Command",
      "n": "Aerial Slam",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Blindness Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "Defender",
      "c": "150 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-3."
    },
    {
      "g": "D-2",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Sleep Block",
      "c": "30 LP",
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
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "200 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-3."
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Item Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "300 LP",
      "cond": "Becomes available after unlocking Secret: Green at B-3."
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Attack Boost",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "F-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "F-5",
      "t": "Attack Command",
      "n": "Blitz",
      "c": "150 LP",
      "cond": ""
    }
  ],
  "Wheeflower": [
    {
      "g": "A-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": "Becomes available when in Multi-tasker disposition."
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "60 LP",
      "cond": "Becomes available when in Multi-tasker disposition."
    },
    {
      "g": "B-5",
      "t": "Magic Command",
      "n": "Blizzara",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-3",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 10",
      "cond": ""
    },
    {
      "g": "C-7",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "50 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Magic Command",
      "n": "Esuna",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "D-6",
      "t": "Stat Ability",
      "n": "Sleep Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-7",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "E-6",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "E-7",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "100 LP",
      "cond": "Becomes available when in Spell Slinger disposition."
    },
    {
      "g": "F-6",
      "t": "Magic Command",
      "n": "Blizzaga",
      "c": "150 LP",
      "cond": ""
    },
    {
      "g": "G-4",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Spell Slinger disposition."
    }
  ],
  "Woeflower": [
    {
      "g": "B-1",
      "t": "Magic Command",
      "n": "Sleepra",
      "c": "100 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "C-1",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "D-3",
      "t": "Attack Command",
      "n": "Drain Dive",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Magic Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "100 LP",
      "cond": "Becomes available when in Natural disposition."
    },
    {
      "g": "F-3",
      "t": "Stat Ability",
      "n": "Magic Haste",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "F-4",
      "t": "Stat Ability",
      "n": "Attack Haste",
      "c": "100 LP",
      "cond": "Becomes available when in Bag of Tricks disposition."
    },
    {
      "g": "G-2",
      "t": "Stat Ability",
      "n": "Dark Screen",
      "c": "40 LP",
      "cond": "Becomes available when in Natural disposition."
    },
    {
      "g": "G-3",
      "t": "Attack Command",
      "n": "Poison Dive",
      "c": "200 LP",
      "cond": ""
    },
    {
      "g": "G-4",
      "t": "Stat Ability",
      "n": "Blindness Block",
      "c": "30 LP",
      "cond": "Becomes available when in Bag of Tricks disposition."
    }
  ],
  "Yoggy Ram": [
    {
      "g": "A-3",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "80 LP",
      "cond": "Becomes available when in Trailblazer disposition."
    },
    {
      "g": "A-4",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Trailblazer disposition."
    },
    {
      "g": "B-3",
      "t": "Magic Command",
      "n": "Esuna",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Stats Ability",
      "n": "Fire Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "B-5",
      "t": "Stat Ability",
      "n": "Bind Block",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-6",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "B-7",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "60 LP",
      "cond": ""
    },
    {
      "g": "B-8",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
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
      "cond": ""
    },
    {
      "g": "D-1",
      "t": "Stat Ability",
      "n": "Fire Screen",
      "c": "100 LP",
      "cond": "Becomes available when in Powerhouse disposition."
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
      "cond": ""
    },
    {
      "g": "E-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 10",
      "cond": ""
    },
    {
      "g": "F-2",
      "t": "Magic Command",
      "n": "Fira",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "G-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "H-2",
      "t": "Magic Command",
      "n": "Firaga",
      "c": "150 LP",
      "cond": ""
    }
  ],
  "Zolephant": [
    {
      "g": "B-1",
      "t": "Support Ability",
      "n": "Second Chance",
      "c": "300 LP",
      "cond": ""
    },
    {
      "g": "B-2",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Link x3",
      "cond": ""
    },
    {
      "g": "B-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Attack Command",
      "n": "Collision Magnet",
      "c": "10 LP",
      "cond": ""
    },
    {
      "g": "B-4",
      "t": "Attack Command",
      "n": "Magnet Spiral",
      "c": "10 LP",
      "cond": "Becomes Magnet Spiral after Secret: Red at G-4 has been unlocked."
    },
    {
      "g": "C-4",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "20 LP",
      "cond": ""
    },
    {
      "g": "C-5",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "150 LP",
      "cond": "Becomes available when in Fighter disposition."
    },
    {
      "g": "C-6",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Fighter disposition."
    },
    {
      "g": "D-3",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "30 LP",
      "cond": ""
    },
    {
      "g": "D-4",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "40 LP",
      "cond": ""
    },
    {
      "g": "D-5",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "E-1",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "200 LP",
      "cond": "Becomes available when in Nozzle-Nose disposition."
    },
    {
      "g": "E-2",
      "t": "Stat Ability",
      "n": "Water Boost",
      "c": "50 LP",
      "cond": "Becomes available when in Nozzle-Nose disposition."
    },
    {
      "g": "E-3",
      "t": "Stat Ability",
      "n": "HP Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-4",
      "t": "Stat Ability",
      "n": "Defense Boost",
      "c": "100 LP",
      "cond": ""
    },
    {
      "g": "E-5",
      "t": "Stat Ability",
      "n": "Water Screen",
      "c": "60 LP",
      "cond": ""
    },
    {
      "g": "E-6",
      "t": "Stat Ability",
      "n": "Cure Boost",
      "c": "50 LP",
      "cond": ""
    },
    {
      "g": "F-4",
      "t": "Quota",
      "n": "Checkpoint",
      "c": "Level 20",
      "cond": ""
    },
    {
      "g": "G-4",
      "t": "Secret",
      "n": "Secret: Red",
      "c": "150 LP",
      "cond": ""
    }
  ]
},
  "links": {
  "Aura Lion": {
    "C-1": "S",
    "C-2": "NS",
    "B-3": "SE",
    "C-3": "NSEW",
    "D-3": "SW",
    "A-4": "E",
    "B-4": "NW",
    "C-4": "NS",
    "D-4": "N",
    "B-5": "SE",
    "C-5": "NSEW",
    "D-5": "SEW",
    "E-5": "EW",
    "F-5": "W",
    "B-6": "NE",
    "C-6": "NEW",
    "D-6": "NEW",
    "E-6": "SW",
    "C-7": "E",
    "D-7": "EW",
    "E-7": "NW"
  },
  "Beatalike": {
    "A-1": "S",
    "B-1": "E",
    "C-1": "EW",
    "D-1": "SEW",
    "E-1": "EW",
    "F-1": "EW",
    "G-1": "SW",
    "A-2": "NS",
    "D-2": "NS",
    "G-2": "NS",
    "A-3": "NS",
    "D-3": "NS",
    "G-3": "N",
    "A-4": "NE",
    "B-4": "EW",
    "C-4": "SEW",
    "D-4": "NEW",
    "E-4": "SEW",
    "F-4": "EW",
    "G-4": "W",
    "C-5": "NS",
    "D-5": "S",
    "E-5": "NS",
    "C-6": "NE",
    "D-6": "NEW",
    "E-6": "NW"
  },
  "Catanuki": {
    "A-1": "E",
    "B-1": "EW",
    "C-1": "SEW",
    "D-1": "EW",
    "E-1": "SW",
    "C-2": "NS",
    "E-2": "NS",
    "C-3": "NS",
    "E-3": "NS",
    "A-4": "SE",
    "B-4": "W",
    "C-4": "NS",
    "D-4": "E",
    "E-4": "NW",
    "A-5": "NS",
    "C-5": "NS",
    "A-6": "NS",
    "C-6": "NS",
    "A-7": "NE",
    "B-7": "EW",
    "C-7": "NEW",
    "D-7": "EW",
    "E-7": "W"
  },
  "Cera Terror": {
    "C-1": "S",
    "C-2": "NS",
    "B-3": "SE",
    "C-3": "NSEW",
    "D-3": "SW",
    "A-4": "E",
    "B-4": "NSW",
    "C-4": "NS",
    "D-4": "NSE",
    "E-4": "EW",
    "F-4": "W",
    "A-5": "SE",
    "B-5": "NW",
    "C-5": "NS",
    "D-5": "NE",
    "E-5": "SW",
    "A-6": "NS",
    "C-6": "NS",
    "E-6": "N",
    "A-7": "N",
    "C-7": "N"
  },
  "Chef Kyroo": {
    "C-1": "S",
    "B-2": "SE",
    "C-2": "NEW",
    "D-2": "SW",
    "A-3": "SE",
    "B-3": "NW",
    "D-3": "NS",
    "A-4": "NE",
    "B-4": "SW",
    "D-4": "NS",
    "B-5": "N",
    "C-5": "E",
    "D-5": "NSEW",
    "E-5": "W",
    "A-6": "E",
    "B-6": "EW",
    "C-6": "SEW",
    "D-6": "NEW",
    "E-6": "W",
    "C-7": "NS",
    "C-8": "N"
  },
  "Cyber Yog": {
    "A-1": "S",
    "D-1": "SE",
    "E-1": "W",
    "F-1": "S",
    "A-2": "NE",
    "B-2": "SEW",
    "C-2": "SEW",
    "D-2": "NSEW",
    "E-2": "EW",
    "F-2": "NSEW",
    "G-2": "EW",
    "H-2": "W",
    "B-3": "NSE",
    "C-3": "NW",
    "D-3": "NS",
    "F-3": "NS",
    "B-4": "NS",
    "D-4": "N",
    "F-4": "N",
    "B-5": "N"
  },
  "Drak Quack": {
    "A-1": "SE",
    "B-1": "EW",
    "C-1": "EW",
    "D-1": "EW",
    "E-1": "EW",
    "F-1": "EW",
    "G-1": "EW",
    "H-1": "SW",
    "A-2": "NS",
    "H-2": "NS",
    "A-3": "NS",
    "H-3": "NS",
    "A-4": "NS",
    "F-4": "S",
    "H-4": "NS",
    "A-5": "NS",
    "F-5": "NE",
    "G-5": "SW",
    "H-5": "NS",
    "A-6": "NS",
    "D-6": "E",
    "E-6": "SW",
    "G-6": "NE",
    "H-6": "NW",
    "A-7": "NS",
    "E-7": "NE",
    "F-7": "SW",
    "A-8": "NE",
    "B-8": "EW",
    "C-8": "EW",
    "D-8": "EW",
    "E-8": "EW",
    "F-8": "NW"
  },
  "Drill Sye": {
    "A-1": "E",
    "B-1": "SEW",
    "C-1": "EW",
    "D-1": "EW",
    "E-1": "SEW",
    "F-1": "EW",
    "G-1": "W",
    "B-2": "NS",
    "C-2": "SE",
    "D-2": "EW",
    "E-2": "NEW",
    "F-2": "W",
    "B-3": "N",
    "C-3": "NE",
    "D-3": "EW",
    "E-3": "SEW",
    "F-3": "EW",
    "G-3": "W",
    "E-4": "NE",
    "F-4": "W"
  },
  "Ducky Goose": {
    "A-1": "E",
    "B-1": "SEW",
    "C-1": "EW",
    "D-1": "EW",
    "E-1": "EW",
    "F-1": "EW",
    "G-1": "EW",
    "H-1": "SW",
    "B-2": "NS",
    "H-2": "NS",
    "B-3": "NS",
    "H-3": "NS",
    "B-4": "NS",
    "E-4": "S",
    "H-4": "NS",
    "B-5": "NS",
    "E-5": "NE",
    "F-5": "EW",
    "G-5": "SW",
    "H-5": "NS",
    "B-6": "NS",
    "E-6": "E",
    "F-6": "SW",
    "G-6": "NE",
    "H-6": "NW",
    "B-7": "NS",
    "F-7": "NS",
    "B-8": "NE",
    "C-8": "EW",
    "D-8": "EW",
    "E-8": "EW",
    "F-8": "NW"
  },
  "Eaglider": {
    "A-1": "SE",
    "B-1": "EW",
    "C-1": "SEW",
    "D-1": "EW",
    "E-1": "EW",
    "F-1": "W",
    "A-2": "NS",
    "C-2": "NE",
    "D-2": "SEW",
    "E-2": "EW",
    "F-2": "EW",
    "G-2": "W",
    "A-3": "N",
    "D-3": "NE",
    "E-3": "SEW",
    "F-3": "EW",
    "G-3": "W",
    "E-4": "NS",
    "E-5": "N"
  },
  "Electricorn": {
    "F-1": "SE",
    "G-1": "EW",
    "H-1": "SW",
    "E-2": "SE",
    "F-2": "NW",
    "H-2": "N",
    "A-3": "E",
    "B-3": "EW",
    "C-3": "EW",
    "D-3": "EW",
    "E-3": "NSEW",
    "F-3": "EW",
    "G-3": "W",
    "E-4": "NE",
    "F-4": "SW",
    "H-4": "S",
    "F-5": "NE",
    "G-5": "EW",
    "H-5": "NW"
  },
  "Escarglow": {
    "B-1": "S",
    "B-2": "NS",
    "C-2": "SE",
    "D-2": "EW",
    "E-2": "SW",
    "B-3": "NS",
    "C-3": "NE",
    "D-3": "W",
    "E-3": "NS",
    "F-3": "S",
    "A-4": "E",
    "B-4": "NSEW",
    "C-4": "EW",
    "D-4": "EW",
    "E-4": "NEW",
    "F-4": "NW",
    "B-5": "NS",
    "B-6": "N"
  },
  "Fin Fatale": {
    "A-1": "S",
    "A-2": "NS",
    "D-2": "S",
    "A-3": "NSE",
    "B-3": "SEW",
    "C-3": "SEW",
    "D-3": "NW",
    "A-4": "NS",
    "B-4": "NS",
    "C-4": "NS",
    "A-5": "NS",
    "B-5": "NS",
    "C-5": "NS",
    "A-6": "NS",
    "B-6": "NS",
    "C-6": "N",
    "A-7": "N",
    "B-7": "NS",
    "B-8": "NE",
    "C-8": "W"
  },
  "Fishboné": {
    "A-1": "SE",
    "B-1": "EW",
    "C-1": "SEW",
    "D-1": "EW",
    "E-1": "W",
    "A-2": "N",
    "B-2": "E",
    "C-2": "NSEW",
    "D-2": "W",
    "A-3": "SE",
    "B-3": "EW",
    "C-3": "NSEW",
    "D-3": "W",
    "A-4": "N",
    "C-4": "NS",
    "B-5": "SE",
    "C-5": "NEW",
    "D-5": "SW",
    "B-6": "N",
    "D-6": "N"
  },
  "Flowbermeow": {
    "B-1": "SE",
    "C-1": "SW",
    "A-2": "SE",
    "B-2": "NSEW",
    "C-2": "NSEW",
    "D-2": "SW",
    "A-3": "NE",
    "B-3": "NSEW",
    "C-3": "NSEW",
    "D-3": "NW",
    "B-4": "NSE",
    "C-4": "NSW",
    "B-5": "N",
    "C-5": "NS",
    "A-6": "E",
    "B-6": "EW",
    "C-6": "NEW",
    "D-6": "EW",
    "E-6": "EW",
    "F-6": "W"
  },
  "Frootz Cat": {
    "C-1": "S",
    "A-2": "E",
    "B-2": "SW",
    "C-2": "NSE",
    "D-2": "EW",
    "E-2": "EW",
    "F-2": "EW",
    "G-2": "W",
    "B-3": "NSE",
    "C-3": "NEW",
    "D-3": "SW",
    "A-4": "E",
    "B-4": "NEW",
    "C-4": "SEW",
    "D-4": "NEW",
    "E-4": "W",
    "A-5": "E",
    "B-5": "EW",
    "C-5": "NSW",
    "C-6": "N"
  },
  "Ghostabocky": {
    "A-1": "E",
    "B-1": "EW",
    "C-1": "SEW",
    "D-1": "SEW",
    "E-1": "SEW",
    "F-1": "SW",
    "C-2": "NS",
    "D-2": "NS",
    "E-2": "NS",
    "F-2": "N",
    "C-3": "NS",
    "D-3": "N",
    "E-3": "NS",
    "C-4": "NSE",
    "D-4": "EW",
    "E-4": "NSW",
    "C-5": "NE",
    "D-5": "W",
    "E-5": "N"
  },
  "Halbird": {
    "D-1": "S",
    "A-2": "E",
    "B-2": "SW",
    "C-2": "E",
    "D-2": "NSW",
    "F-2": "SE",
    "G-2": "W",
    "B-3": "NE",
    "C-3": "SW",
    "D-3": "NS",
    "E-3": "SE",
    "F-3": "NW",
    "C-4": "NE",
    "D-4": "NSW",
    "E-4": "NS",
    "D-5": "NSE",
    "E-5": "NW",
    "D-6": "NE",
    "E-6": "SW",
    "E-7": "N"
  },
  "Hebby Repp": {
    "A-1": "E",
    "B-1": "EW",
    "C-1": "EW",
    "D-1": "SW",
    "D-2": "NS",
    "B-3": "SE",
    "C-3": "EW",
    "D-3": "NEW",
    "E-3": "EW",
    "F-3": "W",
    "A-4": "SE",
    "B-4": "NSW",
    "D-4": "S",
    "A-5": "N",
    "B-5": "NE",
    "C-5": "EW",
    "D-5": "NSW",
    "D-6": "N"
  },
  "Iceguin Ace": {
    "A-1": "E",
    "B-1": "EW",
    "C-1": "EW",
    "D-1": "SEW",
    "E-1": "SW",
    "B-2": "E",
    "C-2": "EW",
    "D-2": "NSW",
    "E-2": "NSE",
    "F-2": "EW",
    "G-2": "W",
    "D-3": "NSE",
    "E-3": "NSW",
    "D-4": "NS",
    "E-4": "NS",
    "D-5": "NE",
    "E-5": "NEW",
    "F-5": "W"
  },
  "Jestabocky": {
    "A-1": "S",
    "A-2": "NSE",
    "B-2": "EW",
    "C-2": "EW",
    "D-2": "EW",
    "E-2": "EW",
    "F-2": "W",
    "A-3": "NSE",
    "B-3": "EW",
    "C-3": "SW",
    "A-4": "NS",
    "C-4": "NS",
    "A-5": "NS",
    "C-5": "NS",
    "D-5": "S",
    "A-6": "NS",
    "B-6": "SE",
    "C-6": "NEW",
    "D-6": "NW",
    "A-7": "NS",
    "B-7": "N",
    "A-8": "N"
  },
  "Juggle Pup": {
    "A-1": "SE",
    "B-1": "W",
    "C-1": "SE",
    "D-1": "W",
    "A-2": "NS",
    "B-2": "SE",
    "C-2": "NEW",
    "D-2": "SEW",
    "E-2": "SW",
    "A-3": "NSE",
    "B-3": "NW",
    "C-3": "SE",
    "D-3": "NW",
    "E-3": "NSE",
    "F-3": "EW",
    "G-3": "W",
    "A-4": "N",
    "B-4": "SE",
    "C-4": "NSW",
    "D-4": "SE",
    "E-4": "NSEW",
    "F-4": "SW",
    "B-5": "N",
    "C-5": "NSE",
    "D-5": "NSEW",
    "E-5": "NSW",
    "F-5": "NE",
    "G-5": "W",
    "C-6": "N",
    "D-6": "NSE",
    "E-6": "NEW",
    "F-6": "W",
    "D-7": "N"
  },
  "KO Kabuto": {
    "C-1": "S",
    "A-2": "SE",
    "B-2": "EW",
    "C-2": "NSW",
    "A-3": "NE",
    "B-3": "SW",
    "C-3": "NSE",
    "D-3": "SW",
    "A-4": "E",
    "B-4": "NSW",
    "C-4": "NS",
    "D-4": "NSE",
    "E-4": "W",
    "B-5": "NS",
    "C-5": "NS",
    "D-5": "NS",
    "B-6": "NS",
    "C-6": "N",
    "D-6": "N",
    "B-7": "N"
  },
  "Kab Kannon": {
    "A-1": "SE",
    "B-1": "W",
    "C-1": "SE",
    "D-1": "EW",
    "E-1": "SW",
    "A-2": "NE",
    "B-2": "SEW",
    "C-2": "NEW",
    "D-2": "SW",
    "E-2": "NS",
    "A-3": "SE",
    "B-3": "NSW",
    "D-3": "NS",
    "E-3": "NS",
    "A-4": "NS",
    "B-4": "NE",
    "C-4": "EW",
    "D-4": "NW",
    "E-4": "NS",
    "A-5": "NE",
    "B-5": "EW",
    "C-5": "EW",
    "D-5": "EW",
    "E-5": "NW"
  },
  "Keeba Tiger": {
    "B-1": "SE",
    "C-1": "EW",
    "D-1": "SW",
    "F-1": "SE",
    "G-1": "W",
    "A-2": "SE",
    "B-2": "NSEW",
    "C-2": "SW",
    "D-2": "NSE",
    "E-2": "EW",
    "F-2": "NSW",
    "A-3": "NS",
    "B-3": "N",
    "C-3": "NS",
    "D-3": "NE",
    "E-3": "SW",
    "F-3": "NE",
    "G-3": "W",
    "A-4": "N",
    "C-4": "NS",
    "E-4": "N",
    "C-5": "N"
  },
  "Komory Bat": {
    "C-1": "SE",
    "D-1": "W",
    "C-2": "NSE",
    "D-2": "SW",
    "E-2": "S",
    "A-3": "E",
    "B-3": "EW",
    "C-3": "NSEW",
    "D-3": "NSEW",
    "E-3": "NEW",
    "F-3": "EW",
    "G-3": "EW",
    "H-3": "W",
    "C-4": "NSE",
    "D-4": "NEW",
    "E-4": "EW",
    "F-4": "W",
    "C-5": "NE",
    "D-5": "W"
  },
  "Kooma Panda": {
    "B-1": "S",
    "A-2": "SE",
    "B-2": "NSEW",
    "C-2": "EW",
    "D-2": "EW",
    "E-2": "SW",
    "A-3": "NS",
    "B-3": "NS",
    "E-3": "NS",
    "A-4": "N",
    "B-4": "NS",
    "E-4": "NE",
    "F-4": "W",
    "A-5": "E",
    "B-5": "NSEW",
    "C-5": "W",
    "A-6": "E",
    "B-6": "NSEW",
    "C-6": "W",
    "B-7": "N"
  },
  "Lord Kyroo": {
    "B-1": "S",
    "D-1": "S",
    "A-2": "SE",
    "B-2": "NSEW",
    "C-2": "W",
    "D-2": "NS",
    "A-3": "NS",
    "B-3": "NS",
    "D-3": "NS",
    "A-4": "N",
    "B-4": "NSE",
    "C-4": "SEW",
    "D-4": "NSEW",
    "E-4": "EW",
    "F-4": "EW",
    "G-4": "W",
    "B-5": "NS",
    "C-5": "NS",
    "D-5": "NS",
    "B-6": "N",
    "C-6": "N",
    "D-6": "N"
  },
  "Majik Lapin": {
    "C-1": "S",
    "C-2": "NSE",
    "D-2": "W",
    "A-3": "E",
    "B-3": "SW",
    "C-3": "NS",
    "B-4": "NSE",
    "C-4": "NSEW",
    "D-4": "EW",
    "E-4": "W",
    "A-5": "E",
    "B-5": "NSW",
    "C-5": "NE",
    "D-5": "EW",
    "E-5": "SW",
    "A-6": "E",
    "B-6": "NW",
    "D-6": "E",
    "E-6": "NW"
  },
  "Me Me Bunny": {
    "A-1": "E",
    "B-1": "EW",
    "C-1": "SEW",
    "D-1": "EW",
    "E-1": "W",
    "B-2": "SE",
    "C-2": "NEW",
    "D-2": "SW",
    "B-3": "NE",
    "C-3": "SEW",
    "D-3": "NSW",
    "B-4": "SE",
    "C-4": "NSW",
    "D-4": "NE",
    "E-4": "W",
    "B-5": "N",
    "C-5": "NS",
    "C-6": "NE",
    "D-6": "W"
  },
  "Meow Wow": {
    "C-1": "SE",
    "D-1": "EW",
    "E-1": "EW",
    "F-1": "EW",
    "G-1": "W",
    "A-2": "E",
    "B-2": "EW",
    "C-2": "NSEW",
    "D-2": "EW",
    "E-2": "EW",
    "F-2": "EW",
    "G-2": "EW",
    "H-2": "W",
    "C-3": "NE",
    "D-3": "EW",
    "E-3": "SEW",
    "F-3": "EW",
    "G-3": "W",
    "E-4": "N"
  },
  "Meowjesty": {
    "A-1": "E",
    "B-1": "EW",
    "C-1": "SEW",
    "D-1": "EW",
    "E-1": "W",
    "C-2": "NS",
    "B-3": "E",
    "C-3": "NSEW",
    "D-3": "EW",
    "E-3": "EW",
    "F-3": "EW",
    "G-3": "EW",
    "H-3": "W",
    "A-4": "S",
    "C-4": "NS",
    "A-5": "NE",
    "B-5": "EW",
    "C-5": "NEW",
    "D-5": "EW",
    "E-5": "W"
  },
  "Necho Cat": {
    "B-1": "E",
    "C-1": "SW",
    "C-2": "NSE",
    "D-2": "EW",
    "E-2": "W",
    "B-3": "E",
    "C-3": "NSEW",
    "D-3": "SW",
    "A-4": "E",
    "B-4": "EW",
    "C-4": "NSEW",
    "D-4": "NW",
    "B-5": "SE",
    "C-5": "NSEW",
    "D-5": "W",
    "B-6": "NE",
    "C-6": "NSW",
    "C-7": "N"
  },
  "Peepsta Hoo": {
    "A-1": "E",
    "B-1": "SEW",
    "C-1": "SEW",
    "D-1": "EW",
    "E-1": "SW",
    "B-2": "N",
    "C-2": "NSE",
    "D-2": "SW",
    "E-2": "NE",
    "F-2": "SW",
    "C-3": "N",
    "D-3": "NSE",
    "E-3": "SW",
    "F-3": "NE",
    "G-3": "W",
    "D-4": "N",
    "E-4": "NSE",
    "F-4": "SW",
    "E-5": "N",
    "F-5": "NE",
    "G-5": "W"
  },
  "Pegaslick": {
    "D-1": "SE",
    "E-1": "W",
    "C-2": "SE",
    "D-2": "NW",
    "A-3": "E",
    "B-3": "SEW",
    "C-3": "NSEW",
    "D-3": "EW",
    "E-3": "EW",
    "F-3": "EW",
    "G-3": "EW",
    "H-3": "W",
    "B-4": "NS",
    "C-4": "NE",
    "D-4": "SW",
    "B-5": "NS",
    "D-5": "NE",
    "E-5": "W",
    "B-6": "N"
  },
  "Pricklemane": {
    "B-1": "S",
    "B-2": "NS",
    "C-2": "SE",
    "D-2": "W",
    "A-3": "E",
    "B-3": "NSEW",
    "C-3": "NEW",
    "D-3": "EW",
    "E-3": "W",
    "B-4": "NSE",
    "C-4": "EW",
    "D-4": "W",
    "A-5": "E",
    "B-5": "NSEW",
    "C-5": "W",
    "A-6": "E",
    "B-6": "NSEW",
    "C-6": "W",
    "B-7": "NS",
    "B-8": "N"
  },
  "R & R Seal": {
    "A-1": "SE",
    "B-1": "SW",
    "C-1": "SE",
    "D-1": "SW",
    "A-2": "N",
    "B-2": "NSE",
    "C-2": "NW",
    "D-2": "NSE",
    "E-2": "EW",
    "F-2": "SEW",
    "G-2": "W",
    "A-3": "SE",
    "B-3": "NW",
    "C-3": "SE",
    "D-3": "NW",
    "E-3": "SE",
    "F-3": "NSW",
    "A-4": "N",
    "B-4": "SE",
    "C-4": "NEW",
    "D-4": "SEW",
    "E-4": "NSW",
    "F-4": "NS",
    "B-5": "N",
    "C-5": "SE",
    "D-5": "NEW",
    "E-5": "NSEW",
    "F-5": "NW",
    "C-6": "NE",
    "D-6": "SEW",
    "E-6": "NEW",
    "F-6": "W",
    "D-7": "N"
  },
  "Ryu Dragon": {
    "A-1": "SE",
    "B-1": "EW",
    "C-1": "SEW",
    "D-1": "EW",
    "E-1": "W",
    "A-2": "NE",
    "B-2": "EW",
    "C-2": "NSW",
    "B-3": "SE",
    "C-3": "NSW",
    "D-3": "SE",
    "E-3": "W",
    "A-4": "SE",
    "B-4": "NW",
    "C-4": "NE",
    "D-4": "NEW",
    "E-4": "SEW",
    "F-4": "EW",
    "G-4": "W",
    "A-5": "N",
    "D-5": "E",
    "E-5": "NW"
  },
  "Sir Kyroo": {
    "E-1": "S",
    "A-2": "E",
    "B-2": "SEW",
    "C-2": "EW",
    "D-2": "SEW",
    "E-2": "NSEW",
    "F-2": "EW",
    "G-2": "W",
    "B-3": "NS",
    "D-3": "NS",
    "E-3": "N",
    "B-4": "NS",
    "D-4": "N",
    "B-5": "NS",
    "A-6": "E",
    "B-6": "NSEW",
    "C-6": "W",
    "B-7": "NS",
    "B-8": "N"
  },
  "Skelterwild": {
    "C-1": "S",
    "C-2": "NSE",
    "D-2": "EW",
    "E-2": "W",
    "B-3": "SE",
    "C-3": "NSEW",
    "D-3": "EW",
    "E-3": "SW",
    "B-4": "NS",
    "C-4": "NS",
    "E-4": "NS",
    "A-5": "SE",
    "B-5": "NSW",
    "C-5": "N",
    "E-5": "NS",
    "A-6": "NS",
    "B-6": "NS",
    "C-6": "E",
    "D-6": "EW",
    "E-6": "NW",
    "A-7": "N",
    "B-7": "N"
  },
  "Staggerceps": {
    "C-1": "E",
    "D-1": "SW",
    "A-2": "E",
    "B-2": "SEW",
    "C-2": "EW",
    "D-2": "NSW",
    "B-3": "NS",
    "C-3": "E",
    "D-3": "NSW",
    "E-3": "SE",
    "F-3": "W",
    "B-4": "NS",
    "D-4": "NSE",
    "E-4": "NSW",
    "B-5": "N",
    "D-5": "NS",
    "E-5": "NE",
    "F-5": "W",
    "D-6": "NE",
    "E-6": "EW",
    "F-6": "W"
  },
  "Sudo Neku": {
    "B-1": "SE",
    "C-1": "SW",
    "D-1": "SE",
    "E-1": "SW",
    "F-1": "SE",
    "G-1": "SW",
    "A-2": "E",
    "B-2": "NSW",
    "C-2": "NSE",
    "D-2": "NW",
    "E-2": "NS",
    "F-2": "NS",
    "G-2": "NS",
    "B-3": "NE",
    "C-3": "NW",
    "E-3": "NE",
    "F-3": "NW",
    "G-3": "N"
  },
  "Tama Sheep": {
    "A-1": "S",
    "A-2": "NSE",
    "B-2": "EW",
    "C-2": "EW",
    "D-2": "SW",
    "E-2": "SE",
    "F-2": "SEW",
    "G-2": "W",
    "A-3": "NS",
    "D-3": "NE",
    "E-3": "NW",
    "F-3": "NE",
    "G-3": "W",
    "A-4": "NE",
    "B-4": "EW",
    "C-4": "EW",
    "D-4": "EW",
    "E-4": "EW",
    "F-4": "EW",
    "G-4": "W"
  },
  "Tatsu Blaze": {
    "C-1": "S",
    "C-2": "NSE",
    "D-2": "EW",
    "E-2": "EW",
    "F-2": "EW",
    "G-2": "SW",
    "C-3": "NS",
    "G-3": "N",
    "B-4": "E",
    "C-4": "NSEW",
    "D-4": "W",
    "B-5": "SE",
    "C-5": "NSEW",
    "D-5": "SW",
    "A-6": "E",
    "B-6": "NW",
    "C-6": "NS",
    "D-6": "NS",
    "C-7": "N",
    "D-7": "N"
  },
  "Tatsu Steed": {
    "A-1": "S",
    "A-2": "NSE",
    "B-2": "EW",
    "C-2": "EW",
    "D-2": "W",
    "A-3": "NS",
    "A-4": "NE",
    "B-4": "EW",
    "C-4": "SW",
    "B-5": "SE",
    "C-5": "NSEW",
    "D-5": "SW",
    "A-6": "E",
    "B-6": "NW",
    "C-6": "NS",
    "D-6": "NE",
    "E-6": "W",
    "C-7": "NS",
    "C-8": "N"
  },
  "Thunderaffe": {
    "B-1": "SE",
    "C-1": "W",
    "D-1": "SE",
    "E-1": "W",
    "F-1": "SE",
    "G-1": "W",
    "A-2": "E",
    "B-2": "NSEW",
    "C-2": "SEW",
    "D-2": "NEW",
    "E-2": "SEW",
    "F-2": "NEW",
    "G-2": "EW",
    "H-2": "W",
    "B-3": "NS",
    "C-3": "NE",
    "D-3": "W",
    "E-3": "NE",
    "F-3": "W",
    "B-4": "N"
  },
  "Toximander": {
    "C-1": "S",
    "B-2": "S",
    "C-2": "NS",
    "D-2": "SE",
    "E-2": "EW",
    "F-2": "EW",
    "G-2": "W",
    "A-3": "E",
    "B-3": "NSEW",
    "C-3": "NSEW",
    "D-3": "NSW",
    "B-4": "N",
    "C-4": "NS",
    "D-4": "NE",
    "E-4": "EW",
    "F-4": "EW",
    "G-4": "EW",
    "H-4": "W",
    "C-5": "N"
  },
  "Tubguin Ace": {
    "B-1": "S",
    "D-1": "S",
    "F-1": "S",
    "B-2": "NS",
    "D-2": "NS",
    "F-2": "NS",
    "B-3": "NSE",
    "C-3": "EW",
    "D-3": "NSEW",
    "E-3": "EW",
    "F-3": "NSW",
    "A-4": "SE",
    "B-4": "NW",
    "D-4": "N",
    "F-4": "NE",
    "G-4": "SW",
    "A-5": "NS",
    "G-5": "NS",
    "A-6": "NE",
    "B-6": "SW",
    "F-6": "SE",
    "G-6": "NW",
    "B-7": "NE",
    "C-7": "EW",
    "D-7": "EW",
    "E-7": "EW",
    "F-7": "NW"
  },
  "Tyranto Rex": {
    "A-1": "E",
    "B-1": "SEW",
    "C-1": "EW",
    "D-1": "EW",
    "E-1": "EW",
    "F-1": "SEW",
    "G-1": "EW",
    "H-1": "W",
    "B-2": "NS",
    "F-2": "NSE",
    "G-2": "W",
    "B-3": "NE",
    "C-3": "EW",
    "D-3": "SEW",
    "E-3": "W",
    "F-3": "NS",
    "D-4": "NS",
    "F-4": "NE",
    "G-4": "SW",
    "D-5": "N",
    "G-5": "NS",
    "G-6": "N"
  },
  "Ursa Circus": {
    "A-1": "E",
    "B-1": "EW",
    "C-1": "SW",
    "C-2": "NSE",
    "D-2": "SW",
    "B-3": "SE",
    "C-3": "NSW",
    "D-3": "NSE",
    "E-3": "SEW",
    "F-3": "W",
    "B-4": "NS",
    "C-4": "N",
    "D-4": "N",
    "E-4": "NE",
    "F-4": "SW",
    "B-5": "NE",
    "C-5": "EW",
    "D-5": "EW",
    "E-5": "W",
    "F-5": "N"
  },
  "Wheeflower": {
    "D-1": "S",
    "D-2": "NS",
    "A-3": "E",
    "B-3": "EW",
    "C-3": "EW",
    "D-3": "NSW",
    "D-4": "NSE",
    "E-4": "EW",
    "F-4": "EW",
    "G-4": "W",
    "B-5": "E",
    "C-5": "EW",
    "D-5": "NSW",
    "D-6": "NSE",
    "E-6": "EW",
    "F-6": "W",
    "C-7": "E",
    "D-7": "NEW",
    "E-7": "W"
  },
  "Woeflower": {
    "B-1": "SE",
    "C-1": "EW",
    "D-1": "W",
    "B-2": "NS",
    "E-2": "SE",
    "F-2": "EW",
    "G-2": "W",
    "A-3": "E",
    "B-3": "NSEW",
    "C-3": "EW",
    "D-3": "EW",
    "E-3": "NSEW",
    "F-3": "EW",
    "G-3": "W",
    "B-4": "NS",
    "E-4": "NE",
    "F-4": "EW",
    "G-4": "W",
    "B-5": "N"
  },
  "Yoggy Ram": {
    "C-1": "SE",
    "D-1": "W",
    "B-2": "SE",
    "C-2": "NSEW",
    "D-2": "EW",
    "E-2": "EW",
    "F-2": "EW",
    "G-2": "EW",
    "H-2": "W",
    "A-3": "SE",
    "B-3": "NSEW",
    "C-3": "NSEW",
    "D-3": "W",
    "A-4": "N",
    "B-4": "NS",
    "C-4": "N",
    "B-5": "NS",
    "B-6": "NS",
    "B-7": "NS",
    "B-8": "N"
  },
  "Zolephant": {
    "B-1": "S",
    "E-1": "S",
    "B-2": "NS",
    "E-2": "NS",
    "B-3": "NS",
    "D-3": "SE",
    "E-3": "NW",
    "A-4": "E",
    "B-4": "NEW",
    "C-4": "SEW",
    "D-4": "NSEW",
    "E-4": "EW",
    "F-4": "EW",
    "G-4": "W",
    "C-5": "NS",
    "D-5": "NE",
    "E-5": "SW",
    "C-6": "N",
    "E-6": "N"
  }
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
  "Cyber Yog": [
    "A-1"
  ],
  "Drak Quack": [
    "A-1"
  ],
  "Drill Sye": [
    "A-1"
  ],
  "Ducky Goose": [
    "A-1"
  ],
  "Eaglider": [
    "A-1"
  ],
  "Electricorn": [
    "A-3"
  ],
  "Escarglow": [
    "A-4"
  ],
  "Fin Fatale": [
    "A-1"
  ],
  "Fishboné": [
    "A-2"
  ],
  "Flowbermeow": [
    "A-6"
  ],
  "Frootz Cat": [
    "C-6"
  ],
  "Ghostabocky": [
    "A-1"
  ],
  "Halbird": [
    "D-2"
  ],
  "Hebby Repp": [
    "A-1"
  ],
  "Iceguin Ace": [
    "A-1"
  ],
  "Jestabocky": [
    "A-1"
  ],
  "Juggle Pup": [
    "A-1"
  ],
  "KO Kabuto": [
    "C-1"
  ],
  "Kab Kannon": [
    "E-5"
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
  "Meow Wow": [
    "A-2"
  ],
  "Meowjesty": [
    "B-3"
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
  "R & R Seal": [
    "A-1"
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
  "Sudo Neku": [
    "A-2"
  ],
  "Tama Sheep": [
    "A-1"
  ],
  "Tatsu Blaze": [
    "C-1"
  ],
  "Tatsu Steed": [
    "A-1"
  ],
  "Thunderaffe": [
    "A-2"
  ],
  "Toximander": [
    "A-3"
  ],
  "Tubguin Ace": [
    "D-7"
  ],
  "Tyranto Rex": [
    "A-1"
  ],
  "Ursa Circus": [
    "C-1"
  ],
  "Wheeflower": [
    "D-1"
  ],
  "Woeflower": [
    "A-3"
  ],
  "Yoggy Ram": [
    "B-2"
  ],
  "Zolephant": [
    "A-4"
  ]
}
};
