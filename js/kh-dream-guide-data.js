/* =====================================================================
   Kingdom Hearts Dream Drop Distance — Dream Guide data.

   Static reference data for the Dream Guide sub-tool (js/kh-dream-guide.js):
     materials / tiers ... canonical material names + the three tiers
                           (Figment < Fancy < Fantasy)
     drops ............... per material+tier: which Dream Eater drops it,
                           from which source, at what % (Material Drops sheet)
     obtain .............. extra "Rewards"/"Other methods" obtainment text
                           per material (Material Obtainment sheet)
     recipes ............. every synthesis recipe (official flag, rank,
                           materials + quantities, success %, rare form) —
                           also feeds the future creation calculator
     spirits ............. the 54 Spirits with base stats + profile

   Worlds-per-enemy, the recipe-item checklist and Treasure cross-offs are
   NOT duplicated here: they are read live from the Dream Drop Distance
   tracker data (TRACKER_GAME in js/kh-ddd-tracker-data.js) and its progress
   store, so there is a single source of truth. Game terms stay English in
   every language; only UI chrome is translated in the lang JSON files.

   Source: KH Wiki (khwiki.com) exports — Kingdom Hearts 3D: Dream Drop
   Distance only. Material type 18 ("Recipe") was not supplied.
   ===================================================================== */
window.DREAM_GUIDE = {
  "materials": [
    "Lofty",
    "Rampant",
    "Dulcet",
    "Intrepid",
    "Noble",
    "Grim",
    "Vibrant",
    "Troubling",
    "Wondrous",
    "Fleeting",
    "Malleable",
    "Prickly",
    "Wild",
    "Epic",
    "Charming",
    "Brilliant",
    "Savage"
  ],
  "tiers": [
    "Figment",
    "Fancy",
    "Fantasy"
  ],
  "enemyFix": {
    "R Seal": "R & R Seal"
  },
  "drops": [
    {
      "m": "Brilliant",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Lord Kyroo",
      "r": 4
    },
    {
      "m": "Brilliant",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Keeba Tiger",
      "r": 4
    },
    {
      "m": "Brilliant",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Kab Kannon",
      "r": 4
    },
    {
      "m": "Charming",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Frootz Cat",
      "r": 4
    },
    {
      "m": "Dulcet",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Keeba Tiger",
      "r": 12
    },
    {
      "m": "Dulcet",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Ducky Goose",
      "r": 12
    },
    {
      "m": "Dulcet",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Ducky Goose",
      "r": 16
    },
    {
      "m": "Dulcet",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Necho Cat",
      "r": 8
    },
    {
      "m": "Dulcet",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Keeba Tiger",
      "r": 16
    },
    {
      "m": "Dulcet",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Ducky Goose",
      "r": 16
    },
    {
      "m": "Dulcet",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Frootz Cat",
      "r": 16
    },
    {
      "m": "Dulcet",
      "t": "Fantasy",
      "src": "Nightmares",
      "e": "Majik Lapin",
      "r": 6
    },
    {
      "m": "Dulcet",
      "t": "Fantasy",
      "src": "Rare Nightmares",
      "e": "Ducky Goose",
      "r": 8
    },
    {
      "m": "Dulcet",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Ducky Goose",
      "r": 8
    },
    {
      "m": "Dulcet",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Necho Cat",
      "r": 8
    },
    {
      "m": "Dulcet",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Majik Lapin",
      "r": 8
    },
    {
      "m": "Dulcet",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Necho Cat",
      "r": 12
    },
    {
      "m": "Dulcet",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Tatsu Steed",
      "r": 6
    },
    {
      "m": "Dulcet",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Necho Cat",
      "r": 16
    },
    {
      "m": "Dulcet",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Necho Cat",
      "r": 16
    },
    {
      "m": "Epic",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Ursa Circus",
      "r": 4
    },
    {
      "m": "Grim",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Staggerceps",
      "r": 12
    },
    {
      "m": "Grim",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Tatsu Blaze",
      "r": 12
    },
    {
      "m": "Grim",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Staggerceps",
      "r": 16
    },
    {
      "m": "Grim",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Staggerceps",
      "r": 16
    },
    {
      "m": "Grim",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Tatsu Blaze",
      "r": 16
    },
    {
      "m": "Grim",
      "t": "Fantasy",
      "src": "Nightmares",
      "e": "Cera Terror",
      "r": 12
    },
    {
      "m": "Grim",
      "t": "Fantasy",
      "src": "Nightmares",
      "e": "Skelterwild",
      "r": 12
    },
    {
      "m": "Grim",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Cera Terror",
      "r": 16
    },
    {
      "m": "Grim",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Skelterwild",
      "r": 16
    },
    {
      "m": "Grim",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Staggerceps",
      "r": 8
    },
    {
      "m": "Grim",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Tatsu Blaze",
      "r": 8
    },
    {
      "m": "Grim",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Yoggy Ram",
      "r": 12
    },
    {
      "m": "Grim",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Fin Fatale",
      "r": 6
    },
    {
      "m": "Grim",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Tama Sheep",
      "r": 6
    },
    {
      "m": "Grim",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Escarglow",
      "r": 6
    },
    {
      "m": "Grim",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Staggerceps",
      "r": 6
    },
    {
      "m": "Grim",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Cyber Yog",
      "r": 6
    },
    {
      "m": "Grim",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Yoggy Ram",
      "r": 16
    },
    {
      "m": "Grim",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Yoggy Ram",
      "r": 16
    },
    {
      "m": "Intrepid",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Aura Lion",
      "r": 12
    },
    {
      "m": "Intrepid",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Me Me Bunny",
      "r": 12
    },
    {
      "m": "Intrepid",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Cera Terror",
      "r": 6
    },
    {
      "m": "Intrepid",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Aura Lion",
      "r": 16
    },
    {
      "m": "Intrepid",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Me Me Bunny",
      "r": 16
    },
    {
      "m": "Intrepid",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Drill Sye",
      "r": 8
    },
    {
      "m": "Intrepid",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Aura Lion",
      "r": 16
    },
    {
      "m": "Intrepid",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Ursa Circus",
      "r": 16
    },
    {
      "m": "Intrepid",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Sudo Neku",
      "r": 16
    },
    {
      "m": "Intrepid",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Me Me Bunny",
      "r": 16
    },
    {
      "m": "Intrepid",
      "t": "Fantasy",
      "src": "Nightmares",
      "e": "Aura Lion",
      "r": 6
    },
    {
      "m": "Intrepid",
      "t": "Fantasy",
      "src": "Nightmares",
      "e": "Keeba Tiger",
      "r": 6
    },
    {
      "m": "Intrepid",
      "t": "Fantasy",
      "src": "Nightmares",
      "e": "Tyranto Rex",
      "r": 6
    },
    {
      "m": "Intrepid",
      "t": "Fantasy",
      "src": "Rare Nightmares",
      "e": "Me Me Bunny",
      "r": 8
    },
    {
      "m": "Intrepid",
      "t": "Fantasy",
      "src": "Rare Nightmares",
      "e": "Aura Lion",
      "r": 8
    },
    {
      "m": "Intrepid",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Me Me Bunny",
      "r": 8
    },
    {
      "m": "Intrepid",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Cera Terror",
      "r": 8
    },
    {
      "m": "Intrepid",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Pricklemane",
      "r": 12
    },
    {
      "m": "Intrepid",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Hebby Repp",
      "r": 12
    },
    {
      "m": "Intrepid",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Kooma Panda",
      "r": 6
    },
    {
      "m": "Intrepid",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Zolephant",
      "r": 6
    },
    {
      "m": "Intrepid",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Pricklemane",
      "r": 16
    },
    {
      "m": "Intrepid",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Hebby Repp",
      "r": 16
    },
    {
      "m": "Lofty",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Halbird",
      "r": 12
    },
    {
      "m": "Lofty",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Pegaslick",
      "r": 12
    },
    {
      "m": "Lofty",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Ryu Dragon",
      "r": 12
    },
    {
      "m": "Lofty",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Halbird",
      "r": 16
    },
    {
      "m": "Lofty",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Pegaslick",
      "r": 16
    },
    {
      "m": "Lofty",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Ryu Dragon",
      "r": 16
    },
    {
      "m": "Lofty",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Halbird",
      "r": 16
    },
    {
      "m": "Lofty",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Pegaslick",
      "r": 16
    },
    {
      "m": "Lofty",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Ryu Dragon",
      "r": 16
    },
    {
      "m": "Lofty",
      "t": "Fantasy",
      "src": "Rare Nightmares",
      "e": "Halbird",
      "r": 8
    },
    {
      "m": "Lofty",
      "t": "Fantasy",
      "src": "Rare Nightmares",
      "e": "Pegaslick",
      "r": 8
    },
    {
      "m": "Lofty",
      "t": "Fantasy",
      "src": "Rare Nightmares",
      "e": "Ryu Dragon",
      "r": 8
    },
    {
      "m": "Lofty",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Halbird",
      "r": 8
    },
    {
      "m": "Lofty",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Pegaslick",
      "r": 8
    },
    {
      "m": "Lofty",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Eaglider",
      "r": 8
    },
    {
      "m": "Lofty",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Tatsu Steed",
      "r": 8
    },
    {
      "m": "Lofty",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Escarglow",
      "r": 8
    },
    {
      "m": "Lofty",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Wheeflower",
      "r": 12
    },
    {
      "m": "Lofty",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Eaglider",
      "r": 12
    },
    {
      "m": "Lofty",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Tatsu Steed",
      "r": 12
    },
    {
      "m": "Lofty",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Woeflower",
      "r": 6
    },
    {
      "m": "Lofty",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Tatsu Blaze",
      "r": 6
    },
    {
      "m": "Lofty",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Wheeflower",
      "r": 16
    },
    {
      "m": "Lofty",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Eaglider",
      "r": 16
    },
    {
      "m": "Lofty",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Tatsu Steed",
      "r": 16
    },
    {
      "m": "Malleable",
      "t": "Fantasy",
      "src": "Nightmares",
      "e": "Flowbermeow",
      "r": 3
    },
    {
      "m": "Malleable",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Meowjesty",
      "r": 4
    },
    {
      "m": "Malleable",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Flowbermeow",
      "r": 3
    },
    {
      "m": "Noble",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Lord Kyroo",
      "r": 12
    },
    {
      "m": "Noble",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Sir Kyroo",
      "r": 12
    },
    {
      "m": "Noble",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "KO Kabuto",
      "r": 8
    },
    {
      "m": "Noble",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Lord Kyroo",
      "r": 16
    },
    {
      "m": "Noble",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Sir Kyroo",
      "r": 16
    },
    {
      "m": "Noble",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Kab Kannon",
      "r": 16
    },
    {
      "m": "Noble",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Sir Kyroo",
      "r": 8
    },
    {
      "m": "Noble",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Zolephant",
      "r": 8
    },
    {
      "m": "Noble",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "KO Kabuto",
      "r": 8
    },
    {
      "m": "Noble",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Drill Sye",
      "r": 8
    },
    {
      "m": "Noble",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Cyber Yog",
      "r": 8
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Zolephant",
      "r": 12
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Nightmares",
      "e": "KO Kabuto",
      "r": 12
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Drill Sye",
      "r": 12
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Cyber Yog",
      "r": 12
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Sir Kyroo",
      "r": 6
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Zolephant",
      "r": 16
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "KO Kabuto",
      "r": 16
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Drill Sye",
      "r": 16
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Zolephant",
      "r": 16
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "KO Kabuto",
      "r": 16
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Drill Sye",
      "r": 16
    },
    {
      "m": "Noble",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Cyber Yog",
      "r": 16
    },
    {
      "m": "Prickly",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "R & R Seal",
      "r": 4
    },
    {
      "m": "Rampant",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Iceguin Ace",
      "r": 12
    },
    {
      "m": "Rampant",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Fin Fatale",
      "r": 12
    },
    {
      "m": "Rampant",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Drak Quack",
      "r": 6
    },
    {
      "m": "Rampant",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Iceguin Ace",
      "r": 16
    },
    {
      "m": "Rampant",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Meow Wow",
      "r": 8
    },
    {
      "m": "Rampant",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Zolephant",
      "r": 8
    },
    {
      "m": "Rampant",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Iceguin Ace",
      "r": 16
    },
    {
      "m": "Rampant",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Fin Fatale",
      "r": 16
    },
    {
      "m": "Rampant",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Meowjesty",
      "r": 16
    },
    {
      "m": "Rampant",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Meow Wow",
      "r": 8
    },
    {
      "m": "Rampant",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Zolephant",
      "r": 8
    },
    {
      "m": "Rampant",
      "t": "Fantasy",
      "src": "Rare Nightmares",
      "e": "Iceguin Ace",
      "r": 8
    },
    {
      "m": "Rampant",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Iceguin Ace",
      "r": 8
    },
    {
      "m": "Rampant",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Wheeflower",
      "r": 8
    },
    {
      "m": "Rampant",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Fin Fatale",
      "r": 8
    },
    {
      "m": "Rampant",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Drak Quack",
      "r": 8
    },
    {
      "m": "Rampant",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Pricklemane",
      "r": 8
    },
    {
      "m": "Rampant",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Meow Wow",
      "r": 8
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Meow Wow",
      "r": 12
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Flowbermeow",
      "r": 12
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Iceguin Ace",
      "r": 6
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Wheeflower",
      "r": 6
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Komory Bat",
      "r": 6
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Drill Sye",
      "r": 6
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Pricklemane",
      "r": 6
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Zolephant",
      "r": 12
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Meow Wow",
      "r": 16
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Flowbermeow",
      "r": 16
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Meow Wow",
      "r": 16
    },
    {
      "m": "Rampant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Flowbermeow",
      "r": 16
    },
    {
      "m": "Savage",
      "t": "Fantasy",
      "src": "Nightmares",
      "e": "Skelterwild",
      "r": 3
    },
    {
      "m": "Savage",
      "t": "Fantasy",
      "src": "Nightmares",
      "e": "Ryu Dragon",
      "r": 3
    },
    {
      "m": "Savage",
      "t": "Fantasy",
      "src": "Rare Nightmares",
      "e": "Tyranto Rex",
      "r": 4
    },
    {
      "m": "Savage",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Tyranto Rex",
      "r": 4
    },
    {
      "m": "Savage",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Aura Lion",
      "r": 4
    },
    {
      "m": "Savage",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Skelterwild",
      "r": 4
    },
    {
      "m": "Savage",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Ryu Dragon",
      "r": 4
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Komory Bat",
      "r": 12
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Hebby Repp",
      "r": 6
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Toximander",
      "r": 6
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Necho Cat",
      "r": 6
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Peepsta Hoo",
      "r": 6
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Ghostabocky",
      "r": 6
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Toximander",
      "r": 12
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Woeflower",
      "r": 12
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Ghostabocky",
      "r": 8
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Komory Bat",
      "r": 16
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Toximander",
      "r": 16
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Woeflower",
      "r": 16
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Ghostabocky",
      "r": 8
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Komory Bat",
      "r": 8
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Toximander",
      "r": 8
    },
    {
      "m": "Troubling",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Woeflower",
      "r": 8
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Meow Wow",
      "r": 6
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Tama Sheep",
      "r": 12
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Yoggy Ram",
      "r": 6
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Kooma Panda",
      "r": 12
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Eaglider",
      "r": 6
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Juggle Pup",
      "r": 6
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Lord Kyroo",
      "r": 6
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Halbird",
      "r": 6
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Juggle Pup",
      "r": 12
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Jestabocky",
      "r": 12
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Tama Sheep",
      "r": 16
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Kooma Panda",
      "r": 16
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Tama Sheep",
      "r": 8
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Yoggy Ram",
      "r": 8
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Kooma Panda",
      "r": 8
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Juggle Pup",
      "r": 16
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Rare Nightmares",
      "e": "Juggle Pup",
      "r": 8
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Tama Sheep",
      "r": 16
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Kooma Panda",
      "r": 16
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Juggle Pup",
      "r": 16
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Jestabocky",
      "r": 16
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "R & R Seal",
      "r": 16
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Juggle Pup",
      "r": 8
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Jestabocky",
      "r": 8
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Kooma Panda",
      "r": 8
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Tama Sheep",
      "r": 8
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Hebby Repp",
      "r": 8
    },
    {
      "m": "Vibrant",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Yoggy Ram",
      "r": 8
    },
    {
      "m": "Wild",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Sudo Neku",
      "r": 4
    },
    {
      "m": "Wondrous",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Chef Kyroo",
      "r": 12
    },
    {
      "m": "Wondrous",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Tyranto Rex",
      "r": 12
    },
    {
      "m": "Wondrous",
      "t": "Fancy",
      "src": "Nightmares",
      "e": "Ducky Goose",
      "r": 6
    },
    {
      "m": "Wondrous",
      "t": "Fancy",
      "src": "Rare Nightmares",
      "e": "Tyranto Rex",
      "r": 16
    },
    {
      "m": "Wondrous",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Chef Kyroo",
      "r": 16
    },
    {
      "m": "Wondrous",
      "t": "Fancy",
      "src": "Streetpass Portals",
      "e": "Tyranto Rex",
      "r": 16
    },
    {
      "m": "Wondrous",
      "t": "Fantasy",
      "src": "Nightmares",
      "e": "Ghostabocky",
      "r": 12
    },
    {
      "m": "Wondrous",
      "t": "Fantasy",
      "src": "Nightmares",
      "e": "Drak Quack",
      "r": 12
    },
    {
      "m": "Wondrous",
      "t": "Fantasy",
      "src": "Rare Nightmares",
      "e": "Ghostabocky",
      "r": 16
    },
    {
      "m": "Wondrous",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Ghostabocky",
      "r": 16
    },
    {
      "m": "Wondrous",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Drak Quack",
      "r": 16
    },
    {
      "m": "Wondrous",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Chef Kyroo",
      "r": 8
    },
    {
      "m": "Wondrous",
      "t": "Fantasy",
      "src": "Streetpass Portals",
      "e": "Peepsta Hoo",
      "r": 8
    },
    {
      "m": "Wondrous",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Peepsta Hoo",
      "r": 12
    },
    {
      "m": "Wondrous",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Jestabocky",
      "r": 6
    },
    {
      "m": "Wondrous",
      "t": "Figment",
      "src": "Nightmares",
      "e": "Chef Kyroo",
      "r": 6
    },
    {
      "m": "Wondrous",
      "t": "Figment",
      "src": "Streetpass Portals",
      "e": "Peepsta Hoo",
      "r": 16
    }
  ],
  "obtain": {
    "Lofty": {
      "Rewards": "Lofty Figment : Sora : La Cité des Cloches : Reward for Battle Portal 11, 20, 37, and 46 (67%); reward for Battle Portal 17 and 22 (33%). The Grid : Reward for Battle Portal 15 (67%). Riku : La Cité des Cloches : Reward for Battle Portal 11, 20, and 33 (67%); reward for Battle Portal 22 (33%). The Grid : Reward for Battle Portal 15 (67%). Lofty Fancy : Sora : Symphony of Sorcery : Reward for Battle Portal 5 (67%); reward for Battle Portal 16 (33%). Riku : Symphony of Sorcery : Reward for Battle Portal 37 (67%). The World That Never Was : Reward for Battle Portal 7 (67%). Lofty Fantasy : Sora : La Cité des Cloches : Reward for Sora's first, second, third, and fourth Special Portal (33%); reward for Battle Portal 17 and 22 (67%); reward for Battle Portal 25, 37, and 46 (33%). The Grid : Reward for Sora's first, second, and third Special Portal (33%); reward for Battle Portal 2, 20, 25, and 27 (33%). Prankster's Paradise : Reward for Sora's second Special Portal (33%); reward for Battle Portal 5, 9, 14, and 16 (33%). Country of the Musketeers : Reward for Battle Portal 8, 9, and 31 (33%). Riku : La Cité des Cloches : Reward for Riku's first, second, and third Special Portal (33%); reward for Battle Portal 22 (67%); reward for Battle Portal 25 and 33 (33%). The Grid : Reward for Riku's first, second, and third Special Portal (33%); reward for Battle Portal 2, 20, 27, and 28 (33%). Prankster's Paradise : Reward for Riku's second Special Portal (33%); reward for Battle Portal 30, 34, 37, 42, and 43 (33%). Country of the Musketeers : Reward for Battle Portal 21, 22, and 31 (33%)."
    },
    "Rampant": {
      "Rewards": "Rampant Figment : Sora : Traverse Town : Reward for Battle Portal 3, 4, and 35 (67%); reward for Battle Portal 19 (33%). Riku : Traverse Town : Reward for Battle Portal 4 and 35 (67%). Rampant Fancy : Sora : Prankster's Paradise : Reward for Battle Portal 5, 14, 15, 18, and 19 (67%). Riku : Prankster's Paradise : Reward for Battle Portal 26, 37, 42, and 43 (67%). Rampant Fantasy : Sora : Traverse Town : Reward for Sora's first, second, and third Special Portal (33%); reward for Battle Portal 19 (67%); reward for Battle Portal 4, 27, 28, 35, and 44 (33%). The Grid : Reward for Battle Portal 12 and 22 (33%). Prankster's Paradise : Reward for Sora's first and third Special Portal (33%). Riku : Traverse Town : Reward for Riku's first, second, and third Special Portal (33%); reward for Battle Portal 4, 27, 28, 33, 35, and 44 (33%). The Grid : Reward for Battle Portal 12 and 22 (33%). Prankster's Paradise : Reward for Riku's first and third Special Portal (33%).",
      "Other methods": "Rampant Figment : Obtained during the Create Spirits tutorial (Sora: x5, Riku: x3); random Treasure Goggles treasure [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty C, battle rating 4 or 5) [ KH 3D ] . Rampant Fancy : Random Treasure Goggles treasure (Shop Lv 4 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A or B, battle rating 4 or 5) [ KH 3D ] . Rampant Fantasy : Random Treasure Goggles treasure (Shop Lv 2 or higher, Affinity Lv 4 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A, B, or C, battle rating 5) [ KH 3D ] ; obtained for an expired Iceguin Ace, Wheeflower, Fin Fatale, Drak Quack, Pricklemane or Meow Wow."
    },
    "Dulcet": {
      "Rewards": "Dulcet Figment : Sora : La Cité des Cloches : Reward for Battle Portal 7, 15, 35, 36, 39, 40, and 41 (67%); reward for Battle Portal 28 (33%). The Grid : Reward for Battle Portal 21 (67%). Riku : La Cité des Cloches : Reward for Battle Portal 7, 13, 15, and 21 (67%); reward for Battle Portal 28 (33%). The Grid : Reward for Battle Portal 21 (67%). Dulcet Fancy : Sora : Symphony of Sorcery : Reward for Battle Portal 12 (67%). The World That Never Was : Reward for Battle Portal 4 (67%). Riku : Symphony of Sorcery : Reward for Battle Portal 30 (67%); reward for Battle Portal 28 (33%). Dulcet Fantasy : Sora : La Cité des Cloches : Reward for Sora's first, second, third, and fourth Special Portal (33%); reward for Battle Portal 28 (67%), reward for Battle Portal 7, 15, 35, 36, 39, 40, and 41 (33%). The Grid : Reward for Sora's first, second, and third Special Portal (33%); reward for Battle Portal 21 (33%). Prankster's Paradise : Reward for Sora's second Special Portal (33%); reward for Battle Portal 2, 12, and 15 (33%). Country of the Musketeers : Reward for Battle Portal 11 (33%). Riku : La Cité des Cloches : Reward for Riku's first, second, and third fourth Special Portal (33%); reward for Battle Portal 28 (67%), reward for Battle Portal 7, 13, 15, and 21 (33%). The Grid : Reward for Riku's first, second, and third Special Portal (33%); reward for Battle Portal 21 (33%). Prankster's Paradise : Reward for Riku's second Special Portal (33%); reward for Battle Portal 26, 31, 33, 39, 40, and 46 (33%). Country of the Musketeers : Reward for Battle Portal 29 (33%).",
      "Other methods": "Dulcet Figment : Random Treasure Goggles treasure (Shop Lv 2 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty B, battle rating 4 or 5) [ KH 3D ] . Dulcet Fancy : Random Treasure Goggles treasure (Shop Lv 7 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A, battle rating 4 or 5) [ KH 3D ] . Dulcet Fantasy : Random Treasure Goggles treasure (Shop Lv 3 or higher, Affinity Lv 4 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A, or B, battle rating 5) [ KH 3D ] ; obtained for an expired Necho Cat, Ducky Goose, or Majik Lapin."
    },
    "Intrepid": {
      "Rewards": "Intrepid Figment : Sora : Traverse Town : Reward for Battle Portal 17, 28, and 37 (67%); reward for Battle Portal 38 (33%). Riku : Traverse Town : Reward for Battle Portal 28 (67%); reward for Battle Portal 26 (33%). Intrepid Fancy : Sora : Symphony of Sorcery : Reward for Battle Portal 1b and 21 (67%); reward for Battle Portal 2b and 19 (33%) The World That Never Was : Reward for Battle Portal 5 (67%). Riku : Symphony of Sorcery : Reward for Battle Portal 1b and 27 (67%); reward for Battle Portal 2b (33%). The World That Never Was : Reward for Battle Portal 10 (67%). Intrepid Fantasy : Sora : Symphony of Sorcery : Reward for Sora's second and third Special Portal (33%); reward for Battle Portal 2b and 19 (67%); reward for Battle Portal 1b and 21 (33%). The World That Never Was : Reward for Sora's first Special Portal (33%); reward for Battle Portal 5 (67%). Riku : Symphony of Sorcery : Reward for Riku's first, second, and third Special Portal (33%); reward for Battle Portal 2b (67%); reward for Battle Portal 1b and 27 (33%). The World That Never Was : Reward for Riku's first Special Portal (33%); reward for Battle Portal 10 (67%).",
      "Other methods": "Intrepid Figment : Random Treasure Goggles treasure [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty C, battle rating 4 or 5) [ KH 3D ] . Intrepid Fancy : Random Treasure Goggles treasure (Shop Lv 7 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A, battle rating 4 or 5) [ KH 3D ] . Intrepid Fantasy : Random Treasure Goggles treasure (Shop Lv 7 or higher, Affinity Lv 4 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A, battle rating 5) [ KH 3D ] ; obtained for an expired Cera Terror or Me Me Bunny."
    },
    "Noble": {
      "Rewards": "Noble Figment : Sora : The Grid : Reward for Battle Portal 12 (67%). Riku : The Grid : Reward for Battle Portal 12 (67%). Noble Fancy : Sora : Prankster's Paradise : Reward for Battle Portal 3, 7, 9, 16, 22, and 25 (67%). Riku : Prankster's Paradise : Reward for Battle Portal 30, 33, 34, and 46 (67%). Noble Fantasy : Sora : La Cité des Cloches : Reward for Sora's first, second, third, and fourth Special Portal (33%); reward for Battle Portal 1, 11, 20, 30, 42, and 47 (33%). The Grid : Reward for Sora's first, second, and third Special Portal (33%); reward for Battle Portal 5, 11, 14, and 26 (33%). Prankster's Paradise : Reward for Sora's second Special Portal (33%); reward for Battle Portal 3, 7, 19, 22, and 25 (33%). Country of the Musketeers : Reward for Battle Portal 17 (67%); reward for Battle Portal 14 and 21 (33%). Riku : La Cité des Cloches : Reward for Riku's first, second, and third fourth Special Portal (33%); reward for Battle Portal 2 (67%), reward for Battle Portal 1, 11, 20, and 30 (33%). The Grid : Reward for Riku's first, second, and third Special Portal (33%); reward for Battle Portal 5, 11, 14, 26, and 29 (33%). Prankster's Paradise : Reward for Riku's second Special Portal (33%); reward for Battle Portal 27 and 46 (33%). Country of the Musketeers : Reward for Battle Portal 33 (33%).",
      "Other methods": "Noble Figment : Random Treasure Goggles treasure (Shop Lv 2 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty B, battle rating 4 or 5) [ KH 3D ] . Noble Fancy : Random Treasure Goggles treasure (Shop Lv 4 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A or B, battle rating 4 or 5) [ KH 3D ] . Noble Fantasy : Random Treasure Goggles treasure (Shop Lv 3 or higher, Affinity Lv 4 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A, or B, battle rating 5) [ KH 3D ] ; obtained for an expired Sir Kyroo, Zolephant, KO Kabuto, Drill Sye, or Cyber Yog; obtained for an expired Catanuki [ KH 3D HD ] ."
    },
    "Grim": {
      "Rewards": "Grim Figment : Sora : Traverse Town : Reward for Battle Portal 14, 15, 27, and 44 (67%); reward for Battle Portal 34 (33%). Riku : Traverse Town : Reward for Battle Portal 14, 15, 27, and 44 (67%); reward for Battle Portal 42 (33%). Grim Fancy : Sora : Country of the Musketeers : Reward for Battle Portal 25 (67%); reward for Battle Portal 1, 13, and 17 (33%). Symphony of Sorcery : Reward for Battle Portal 4 (67%). Riku : Country of the Musketeers : Reward for Battle Portal 21, 22, 25, and 36 (67%). Symphony of Sorcery : Reward for Battle Portal 35 (67%). Grim Fantasy : Sora : Country of the Musketeers : Reward for Sora's first, second, and third Special Portal (33%/67%/33%); reward for Battle Portal 1 (67%); reward for Battle Portal 2 (33%). Symphony of Sorcery : Reward for Sora's first and second Special Portal (33%); reward for Battle Portal 2, 4, 12, 15 (33%). The World That Never Was : Reward for Battle Portal 4 (33%). Riku : Country of the Musketeers : Reward for Riku's first, second, and third Special Portal (33%/67%/67%); reward for Battle Portal 28 (67%); reward for Battle Portal 36, 41, and 46 (33%). Symphony of Sorcery : Reward for Riku's first, second, and third Special Portal (33%); reward for Battle Portal 28 (67%); reward for Battle Portal 2, 30, and 35 (33%).",
      "Other methods": "Grim Figment : Random Treasure Goggles treasure [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty C, battle rating 4 or 5) [ KH 3D ] . Grim Fancy : Random Treasure Goggles treasure (Shop Lv 5 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A, battle rating 4 or 5) [ KH 3D ] . Grim Fantasy : Random Treasure Goggles treasure (Shop Lv 5 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A, battle rating 4 or 5) [ KH 3D ] ; obtained for an expired Staggerceps or Tatsu Blaze."
    },
    "Vibrant": {
      "Rewards": "Vibrant Figment : Sora : Traverse Town : Reward for Battle Portal 6 and 7 (67%). Riku : Traverse Town : Reward for Battle Portal 6 and 7 (67%); reward for Battle Portal 9 (33%). Vibrant Fancy : Sora : Prankster's Paradise : Reward for Battle Portal 2, 10, and 12 (67%). Riku : Prankster's Paradise : Reward for Battle Portal 27, 31, 39, 40, and 46 (67%). Vibrant Fantasy : Sora : Traverse Town : Reward for Sora's first, second, and third Special Portal (33%); reward for Battle Portal 6, 7, 14, and 37 (33%). Prankster's Paradise : Reward for Sora's first and third Special Portal (33%). Riku : Traverse Town : Reward for Riku's first, second, and third Special Portal (33%); reward for Battle Portal 9, 26, and 42 (67%); reward for Battle Portal 6, 7, and 14 (33%). The Grid : Reward for Battle Portal 32 (33%). Prankster's Paradise : Reward for Riku's first and third Special Portal (33%).",
      "Other methods": "Vibrant Figment : Obtained during the Create Spirits tutorial (Sora: x3); random Treasure Goggles treasure [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty C, battle rating 4 or 5) [ KH 3D ] . Vibrant Fancy : Random Treasure Goggles treasure (Shop Lv 4 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A or B, battle rating 4 or 5) [ KH 3D ] . Vibrant Fantasy : Random Treasure Goggles treasure (Shop Lv 2 or higher, Affinity Lv 4 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A, B, or C, battle rating 5) [ KH 3D ] ; obtained for an expired Juggle Pup, Jestabocky, Kooma Panda, Tama Sheep, Hebby Repp, or Yoggy Ram."
    },
    "Troubling": {
      "Rewards": "Troubling Figment : Riku : Traverse Town : Reward for Battle Portal 20, 23, 33, and 40 (67%). Troubling Fancy : Sora : La Cité des Cloches : Reward for Battle Portal 1, 25, 30, 42, and 47 (67%). The Grid : Reward for Battle Portal 5 (67%). Riku : La Cité des Cloches : Reward for Battle Portal 1, 25, 30 (67%); reward for Battle Portal 2 (33%). The Grid : Reward for Battle Portal 5 and 28 (67%). Troubling Fantasy : Sora : Traverse Town : Reward for Sora's first, second, and third Special Portal (33%); reward for Battle Portal 34 and 38 (67%); reward for Battle Portal 3, 15, and 17 (33%). The Grid : Reward for Battle Portal 1 and 15 (33%). Prankster's Paradise : Reward for Sora's first and third Special Portal (33%). Riku : Traverse Town : Reward for Riku's first, second, and third Special Portal (33%); reward for Battle Portal 15, 20, 23, and 40 (33%). The Grid : Reward for Battle Portal 1 and 15 (33%). Prankster's Paradise : Reward for Riku's first and third Special Portal (33%).",
      "Other methods": "Troubling Figment : Obtained during the Create Spirits tutorial (Riku: x5); random Treasure Goggles treasure [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty C, battle rating 4 or 5) [ KH 3D ] . Troubling Fancy : Random Treasure Goggles treasure (Shop Lv 2 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty B, battle rating 4 or 5) [ KH 3D ] . Troubling Fantasy : Random Treasure Goggles treasure (Shop Lv 2 or higher, Affinity Lv 4 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Battle rating 5) [ KH 3D ] ; obtained for an expired Ghostabocky, Komory Bat, Toximander, or Woeflower."
    },
    "Wondrous": {
      "Rewards": "Wondrous Figment : Sora : The Grid : Reward for Battle Portal 1, 2, 11, 25, and 26 (67%). Riku : The Grid : Reward for Battle Portal 1, 2, 11, 25, 26, and 32 (67%). Wondrous Fancy : Sora : Country of the Musketeers : Reward for Battle Portal 2, 8, 9, 14, and 21 (67%). Symphony of Sorcery : Reward for Battle Portal 2a and 15 (67%). Riku : Country of the Musketeers : Reward for Battle Portal 33, 42, and 45 (67%); reward for Battle Portal 32 (33%). Symphony of Sorcery : Reward for Battle Portal 2a (67%). Wondrous Fantasy : Sora : The World That Never Was : Reward for Battle Portal 1 (67%). Riku : The World That Never Was : Reward for Battle Portal 14 (67%).",
      "Other methods": "Wondrous Figment : Random Treasure Goggles treasure (Shop Lv 3 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A or B, battle rating 4 or 5) [ KH 3D ] . Wondrous Fancy : Random Treasure Goggles treasure (Shop Lv 5 or higher) [ KH 3D ] ; random Streetpass Battle Portal reward (Difficulty A, battle rating 4 or 5) [ KH 3D ] . Wondrous Fantasy : Random Treasure Goggles treasure (Shop Lv 8) [ KH 3D ] ; random Streetpass Battle Portal reward (Battle rating A, battle rating 4 or 5) [ KH 3D ] ; obtained for an expired Chef Kyroo, Peepsta Hoo, or Fishboné."
    },
    "Malleable": {
      "Rewards": "Malleable Fantasy : Sora : Traverse Town : Reward for Sora's fourth, fifth, and sixth Special Portal (100%). La Cité des Cloches : Reward for Sora's fifth and sixth Special Portal (100%). The Grid : Reward for Sora's fourth, fifth, and sixth Special Portal (100%).",
      "Other methods": "Malleable Fantasy : Random Streetpass Battle Portal reward (Difficulty A, or B, battle rating 5) [ KH 3D ] ; obtained for an expired Meowjesty or Flowbermeow."
    },
    "Prickly": {
      "Rewards": "Prickly Fantasy : Sora : Prankster's Paradise : Reward for Sora's fourth, fifth, and sixth Special Portal (100%). Country of the Musketeers : Reward for Sora's fourth, fifth, and sixth Special Portal (100%). Symphony of Sorcery : Reward for Sora's fourth and fifth Special Portal (67%).",
      "Other methods": "Prickly Fantasy : Random Streetpass Battle Portal reward (Difficulty A, battle rating 5) [ KH 3D ] ; obtained for an expired R & R Seal."
    },
    "Wild": {
      "Rewards": "Wild Fantasy : Sora : Symphony of Sorcery : Reward for Sora's sixth Special Portal (100%). The World That Never Was : Reward for Sora's first Special Portal (33%); reward for Sora's second Special Portal (67%); reward for Sora's third Special Portal (100%).",
      "Other methods": "Wild Fantasy : Obtained for an expired Sudo Neku."
    },
    "Epic": {
      "Rewards": "Epic Fantasy : Riku : Prankster's Paradise : Reward for Riku's fourth, fifth, and sixth Special Portal (100%). Country of the Musketeers : Reward for Riku's fourth, fifth, and sixth Special Portal (100%). Symphony of Sorcery : Reward for Riku's fourth and fifth Special Portal (67%).",
      "Other methods": "Epic Fantasy : Random Streetpass Battle Portal reward (Difficulty A, battle rating 5) [ KH 3D ] ; obtained for an expired Ursa Circus; obtained for an expired Kab Kannon [ KH 3D HD ] ."
    },
    "Charming": {
      "Rewards": "Charming Fantasy : Riku : Traverse Town : Reward for Riku's fourth, fifth, and sixth Special Portal (100%). La Cité des Cloches : Reward for Riku's fourth, fifth, and sixth Special Portal (100%). The Grid : Reward for Riku's fourth, fifth, and sixth Special Portal (100%).",
      "Other methods": "Charming Fantasy : Random Streetpass Battle Portal reward (Difficulty A, battle rating 5) [ KH 3D ] ; obtained for an expired Frootz Cat"
    },
    "Brilliant": {
      "Rewards": "Brilliant Fantasy : Riku : Symphony of Sorcery : Reward for Riku's sixth Special Portal (100%). The World That Never Was : Reward for Riku's first Special Portal (33%); reward for Riku's second Special Portal (67%); reward for Riku's third Special Portal (100%).",
      "Other methods": "Brilliant Fantasy : Obtained for an expired Lord Kyroo or Keeba Tiger; obtained for an expired Kab Kannon [ KH 3D ] ."
    },
    "Savage": {
      "Rewards": "Savage Fantasy : Sora : Symphony of Sorcery : Reward for Sora's first, second, third, fourth, and fifth Special Portal (33%). The World That Never Was : Reward for Sora's first and second Special Portal (33%); reward for Battle Portal 1 (33%). Riku : Symphony of Sorcery : Reward for Riku's fourth and fifth Special Portal (33%). The World That Never Was : Reward for Riku's first and second Special Portal (33%); reward for Battle Portal 14 (33%).",
      "Other methods": "Savage Fantasy : Random Streetpass Battle Portal reward (Difficulty A, battle rating 5) [ KH 3D ] ; obtained for an expired Aura Lion, Tyranto Rex, Skelterwild, or Ryu Dragon; obtained for an expired Beatalike [ KH 3D HD ] ."
    }
  },
  "recipes": [
    {
      "sp": "Aura Lion",
      "rank": "D",
      "off": true,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Noble",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Aura Lion",
      "rank": "C",
      "off": false,
      "m1": "Savage",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Noble",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Aura Lion",
      "rank": "B",
      "off": false,
      "m1": "Brilliant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Intrepid",
      "t2": "Fantasy",
      "q2": 4,
      "pct": 60,
      "rare": ""
    },
    {
      "sp": "Beatalike",
      "rank": "C",
      "off": true,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Noble",
      "t2": "Figment",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Beatalike",
      "rank": "B",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Savage",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Beatalike",
      "rank": "A",
      "off": false,
      "m1": "Wild",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 8,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Catanuki",
      "rank": "D",
      "off": true,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Vibrant",
      "t2": "Fantasy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Catanuki",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Dulcet",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Catanuki",
      "rank": "A",
      "off": false,
      "m1": "Charming",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Noble",
      "t2": "Fantasy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Cera Terror",
      "rank": "E",
      "off": true,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 8,
      "m2": "Grim",
      "t2": "Fantasy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Cera Terror",
      "rank": "D",
      "off": false,
      "m1": "Fleeting",
      "t1": "Fancy",
      "q1": 8,
      "m2": "Grim",
      "t2": "Fantasy",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Cera Terror",
      "rank": "C",
      "off": false,
      "m1": "Fleeting",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Grim",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Chef Kyroo",
      "rank": "F",
      "off": false,
      "m1": "Troubling",
      "t1": "Figment",
      "q1": 8,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Chef Kyroo",
      "rank": "E",
      "off": true,
      "m1": "Noble",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Chef Kyroo",
      "rank": "D",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 10,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 6,
      "pct": 40,
      "rare": ""
    },
    {
      "sp": "Cyber Yog",
      "rank": "F",
      "off": false,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 3,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Cyber Yog",
      "rank": "E",
      "off": true,
      "m1": "Noble",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Grim",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Cyber Yog",
      "rank": "D",
      "off": false,
      "m1": "Noble",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Grim",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Drak Quack",
      "rank": "E",
      "off": true,
      "m1": "Vibrant",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Drak Quack",
      "rank": "B",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 5,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Drak Quack",
      "rank": "A",
      "off": false,
      "m1": "Wild",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 5,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Drill Sye",
      "rank": "D",
      "off": true,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 5,
      "m2": "Noble",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Drill Sye",
      "rank": "C",
      "off": false,
      "m1": "Fleeting",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Noble",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Drill Sye",
      "rank": "B",
      "off": false,
      "m1": "Wild",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Intrepid",
      "t2": "Figment",
      "q2": 4,
      "pct": 20,
      "rare": ""
    },
    {
      "sp": "Ducky Goose",
      "rank": "E",
      "off": true,
      "m1": "Dulcet",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Ducky Goose",
      "rank": "B",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 5,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Ducky Goose",
      "rank": "A",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Prickly",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Eaglider",
      "rank": "E",
      "off": false,
      "m1": "Prickly",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Troubling",
      "t2": "Figment",
      "q2": 8,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Eaglider",
      "rank": "D",
      "off": true,
      "m1": "Prickly",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Grim",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Eaglider",
      "rank": "C",
      "off": false,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 3,
      "m2": "Prickly",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Electricorn",
      "rank": "D",
      "off": true,
      "m1": "Fleeting",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Lofty",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Electricorn",
      "rank": "C",
      "off": false,
      "m1": "Fleeting",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Lofty",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Electricorn",
      "rank": "C",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Grim",
      "t2": "Fantasy",
      "q2": 5,
      "pct": 30,
      "rare": ""
    },
    {
      "sp": "Escarglow",
      "rank": "E",
      "off": true,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 3,
      "m2": "Grim",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Escarglow",
      "rank": "D",
      "off": false,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 4,
      "m2": "Noble",
      "t2": "Figment",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Escarglow",
      "rank": "C",
      "off": false,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 2,
      "m2": "Vibrant",
      "t2": "Figment",
      "q2": 11,
      "pct": 70,
      "rare": ""
    },
    {
      "sp": "Fin Fatale",
      "rank": "E",
      "off": true,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Noble",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Fin Fatale",
      "rank": "D",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Troubling",
      "t2": "Figment",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Fin Fatale",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 6,
      "m2": "Troubling",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Fishboné",
      "rank": "E",
      "off": true,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 6,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Fishboné",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 5,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Fishboné",
      "rank": "C",
      "off": false,
      "m1": "Noble",
      "t1": "Figment",
      "q1": 4,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 4,
      "pct": 40,
      "rare": ""
    },
    {
      "sp": "Flowbermeow",
      "rank": "C",
      "off": true,
      "m1": "Fleeting",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Flowbermeow",
      "rank": "B",
      "off": false,
      "m1": "Malleable",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Flowbermeow",
      "rank": "A",
      "off": false,
      "m1": "Malleable",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 10,
      "rare": ""
    },
    {
      "sp": "Frootz Cat",
      "rank": "C",
      "off": false,
      "m1": "Charming",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Ghostabocky",
      "rank": "F",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Ghostabocky",
      "rank": "E",
      "off": true,
      "m1": "Dulcet",
      "t1": "Figment",
      "q1": 5,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Ghostabocky",
      "rank": "D",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Halbird",
      "rank": "D",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Rampant",
      "t2": "Fancy",
      "q2": 5,
      "pct": 40,
      "rare": "Iceguin Ace"
    },
    {
      "sp": "Halbird",
      "rank": "D",
      "off": true,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Halbird",
      "rank": "C",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 6,
      "m2": "",
      "t2": "",
      "q2": null,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Hebby Repp",
      "rank": "E",
      "off": true,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 4,
      "m2": "Noble",
      "t2": "Figment",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Hebby Repp",
      "rank": "D",
      "off": false,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 2,
      "m2": "Intrepid",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Hebby Repp",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Intrepid",
      "t2": "Figment",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Iceguin Ace",
      "rank": "E",
      "off": false,
      "m1": "Lofty",
      "t1": "Figment",
      "q1": 6,
      "m2": "Rampant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Iceguin Ace",
      "rank": "D",
      "off": true,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Rampant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Iceguin Ace",
      "rank": "C",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Rampant",
      "t2": "Fancy",
      "q2": 5,
      "pct": 60,
      "rare": ""
    },
    {
      "sp": "Jestabocky",
      "rank": "E",
      "off": true,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 4,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Jestabocky",
      "rank": "C",
      "off": false,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 2,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 11,
      "pct": 30,
      "rare": "Escarglow"
    },
    {
      "sp": "Jestabocky",
      "rank": "B",
      "off": false,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 8,
      "m2": "",
      "t2": "",
      "q2": null,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Juggle Pup",
      "rank": "D",
      "off": true,
      "m1": "Vibrant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Juggle Pup",
      "rank": "C",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Juggle Pup",
      "rank": "B",
      "off": false,
      "m1": "Fleeting",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Vibrant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "KO Kabuto",
      "rank": "E",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 4,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "KO Kabuto",
      "rank": "D",
      "off": true,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 6,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "KO Kabuto",
      "rank": "C",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Kab Kannon",
      "rank": "C",
      "off": false,
      "m1": "Savage",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Keeba Tiger",
      "rank": "D",
      "off": true,
      "m1": "Prickly",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Savage",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Keeba Tiger",
      "rank": "C",
      "off": false,
      "m1": "Brilliant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Intrepid",
      "t2": "Fantasy",
      "q2": 4,
      "pct": 40,
      "rare": "Aura Lion"
    },
    {
      "sp": "Keeba Tiger",
      "rank": "B",
      "off": false,
      "m1": "Savage",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "",
      "t2": "",
      "q2": null,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Komory Bat",
      "rank": "E",
      "off": true,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 2,
      "m2": "Troubling",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Komory Bat",
      "rank": "D",
      "off": false,
      "m1": "Lofty",
      "t1": "Figment",
      "q1": 2,
      "m2": "Troubling",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Komory Bat",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 3,
      "m2": "Troubling",
      "t2": "Fancy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Kooma Panda",
      "rank": "F",
      "off": false,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 8,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Kooma Panda",
      "rank": "E",
      "off": true,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 5,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Kooma Panda",
      "rank": "D",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Lord Kyroo",
      "rank": "E",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 30,
      "rare": "Chef Kyroo"
    },
    {
      "sp": "Lord Kyroo",
      "rank": "D",
      "off": true,
      "m1": "Brilliant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 5,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Lord Kyroo",
      "rank": "C",
      "off": false,
      "m1": "Brilliant",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "",
      "t2": "",
      "q2": null,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Majik Lapin",
      "rank": "E",
      "off": false,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 4,
      "m2": "Dulcet",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Majik Lapin",
      "rank": "D",
      "off": true,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Troubling",
      "t2": "Figment",
      "q2": 8,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Majik Lapin",
      "rank": "C",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Troubling",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Me Me Bunny",
      "rank": "F",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Troubling",
      "t2": "Figment",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Me Me Bunny",
      "rank": "E",
      "off": true,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 6,
      "m2": "Intrepid",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Me Me Bunny",
      "rank": "D",
      "off": false,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 6,
      "m2": "Intrepid",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Meow Wow",
      "rank": "E",
      "off": true,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 3,
      "m2": "Vibrant",
      "t2": "Figment",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Meow Wow",
      "rank": "D",
      "off": false,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 4,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Meow Wow",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 6,
      "m2": "Vibrant",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Meowjesty",
      "rank": "C",
      "off": true,
      "m1": "Rampant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Meowjesty",
      "rank": "B",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Necho Cat",
      "rank": "E",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Troubling",
      "t2": "Figment",
      "q2": 8,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Necho Cat",
      "rank": "D",
      "off": true,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 6,
      "m2": "Dulcet",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Necho Cat",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 6,
      "m2": "Dulcet",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Peepsta Hoo",
      "rank": "E",
      "off": true,
      "m1": "Dulcet",
      "t1": "Figment",
      "q1": 3,
      "m2": "Wondrous",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Peepsta Hoo",
      "rank": "D",
      "off": false,
      "m1": "Troubling",
      "t1": "Figment",
      "q1": 8,
      "m2": "Wondrous",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Peepsta Hoo",
      "rank": "C",
      "off": false,
      "m1": "Dulcet",
      "t1": "Figment",
      "q1": 4,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Pegaslick",
      "rank": "E",
      "off": true,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Dulcet",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Pegaslick",
      "rank": "D",
      "off": false,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 8,
      "m2": "Lofty",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Pegaslick",
      "rank": "C",
      "off": false,
      "m1": "Fleeting",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Lofty",
      "t2": "Fancy",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Pricklemane",
      "rank": "E",
      "off": true,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 2,
      "m2": "Intrepid",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Pricklemane",
      "rank": "D",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Intrepid",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Pricklemane",
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 5,
      "m2": "Vibrant",
      "t2": "Figment",
      "q2": 4,
      "pct": 40,
      "rare": ""
    },
    {
      "sp": "R & R Seal",
      "rank": "C",
      "off": false,
      "m1": "Wild",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Ryu Dragon",
      "rank": "E",
      "off": true,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Ryu Dragon",
      "rank": "E",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 4,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 20,
      "rare": "Pegaslick"
    },
    {
      "sp": "Ryu Dragon",
      "rank": "D",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "",
      "t2": "",
      "q2": null,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Sir Kyroo",
      "rank": "E",
      "off": true,
      "m1": "Noble",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Grim",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Sir Kyroo",
      "rank": "D",
      "off": false,
      "m1": "Lofty",
      "t1": "Figment",
      "q1": 5,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Sir Kyroo",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 7,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Skelterwild",
      "rank": "F",
      "off": false,
      "m1": "Wild",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Noble",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 20,
      "rare": "Fishboné"
    },
    {
      "sp": "Skelterwild",
      "rank": "D",
      "off": true,
      "m1": "Wild",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Skelterwild",
      "rank": "B",
      "off": false,
      "m1": "Prickly",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "",
      "t2": "",
      "q2": null,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Staggerceps",
      "rank": "E",
      "off": true,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 4,
      "m2": "Grim",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Staggerceps",
      "rank": "D",
      "off": false,
      "m1": "Fleeting",
      "t1": "Figment",
      "q1": 4,
      "m2": "Grim",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Staggerceps",
      "rank": "D",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Grim",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Sudo Neku",
      "rank": "C",
      "off": true,
      "m1": "Wild",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Noble",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Sudo Neku",
      "rank": "B",
      "off": false,
      "m1": "Fleeting",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tama Sheep",
      "rank": "E",
      "off": true,
      "m1": "Vibrant",
      "t1": "Figment",
      "q1": 3,
      "m2": "Troubling",
      "t2": "Figment",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tama Sheep",
      "rank": "D",
      "off": false,
      "m1": "Dulcet",
      "t1": "Figment",
      "q1": 3,
      "m2": "Vibrant",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tama Sheep",
      "rank": "C",
      "off": false,
      "m1": "Vibrant",
      "t1": "Figment",
      "q1": 6,
      "m2": "Wondrous",
      "t2": "Figment",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tatsu Blaze",
      "rank": "F",
      "off": false,
      "m1": "Lofty",
      "t1": "Figment",
      "q1": 5,
      "m2": "Grim",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tatsu Blaze",
      "rank": "E",
      "off": true,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Grim",
      "t2": "Fancy",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tatsu Blaze",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Dulcet",
      "t2": "Figment",
      "q2": 5,
      "pct": 40,
      "rare": ""
    },
    {
      "sp": "Tatsu Steed",
      "rank": "E",
      "off": true,
      "m1": "Lofty",
      "t1": "Figment",
      "q1": 3,
      "m2": "Wondrous",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tatsu Steed",
      "rank": "D",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Wondrous",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tatsu Steed",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Dulcet",
      "t2": "Figment",
      "q2": 5,
      "pct": 60,
      "rare": ""
    },
    {
      "sp": "Thunderaffe",
      "rank": "F",
      "off": false,
      "m1": "Fleeting",
      "t1": "Fancy",
      "q1": 5,
      "m2": "Noble",
      "t2": "Figment",
      "q2": 9,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Thunderaffe",
      "rank": "E",
      "off": true,
      "m1": "Fleeting",
      "t1": "Fancy",
      "q1": 9,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 7,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Thunderaffe",
      "rank": "D",
      "off": false,
      "m1": "Fleeting",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Toximander",
      "rank": "E",
      "off": true,
      "m1": "Vibrant",
      "t1": "Figment",
      "q1": 6,
      "m2": "Troubling",
      "t2": "Figment",
      "q2": 5,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Toximander",
      "rank": "D",
      "off": false,
      "m1": "Troubling",
      "t1": "Figment",
      "q1": 7,
      "m2": "Wondrous",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Toximander",
      "rank": "C",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 4,
      "m2": "Troubling",
      "t2": "Figment",
      "q2": 5,
      "pct": 30,
      "rare": ""
    },
    {
      "sp": "Tubguin Ace",
      "rank": "E",
      "off": true,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tubguin Ace",
      "rank": "D",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Grim",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tubguin Ace",
      "rank": "C",
      "off": false,
      "m1": "Brilliant",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Vibrant",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tyranto Rex",
      "rank": "D",
      "off": true,
      "m1": "Epic",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Intrepid",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tyranto Rex",
      "rank": "B",
      "off": false,
      "m1": "Wild",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Savage",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tyranto Rex",
      "rank": "A",
      "off": false,
      "m1": "Prickly",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 4,
      "pct": 60,
      "rare": ""
    },
    {
      "sp": "Ursa Circus",
      "rank": "C",
      "off": true,
      "m1": "Epic",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Intrepid",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Ursa Circus",
      "rank": "B",
      "off": false,
      "m1": "Epic",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 12,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Wheeflower",
      "rank": "E",
      "off": true,
      "m1": "Lofty",
      "t1": "Figment",
      "q1": 3,
      "m2": "Rampant",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Wheeflower",
      "rank": "D",
      "off": false,
      "m1": "Lofty",
      "t1": "Figment",
      "q1": 4,
      "m2": "Dulcet",
      "t2": "Figment",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Wheeflower",
      "rank": "B",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Rampant",
      "t2": "Figment",
      "q2": 8,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Woeflower",
      "rank": "D",
      "off": true,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Troubling",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Woeflower",
      "rank": "C",
      "off": false,
      "m1": "Troubling",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Wondrous",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Woeflower",
      "rank": "B",
      "off": false,
      "m1": "Lofty",
      "t1": "Figment",
      "q1": 4,
      "m2": "Troubling",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 40,
      "rare": ""
    },
    {
      "sp": "Yoggy Ram",
      "rank": "E",
      "off": true,
      "m1": "Dulcet",
      "t1": "Figment",
      "q1": 2,
      "m2": "Grim",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Yoggy Ram",
      "rank": "D",
      "off": false,
      "m1": "Grim",
      "t1": "Figment",
      "q1": 4,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Yoggy Ram",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 2,
      "m2": "Grim",
      "t2": "Figment",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Zolephant",
      "rank": "E",
      "off": false,
      "m1": "Malleable",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Intrepid",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Zolephant",
      "rank": "D",
      "off": true,
      "m1": "Dulcet",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Zolephant",
      "rank": "D",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Troubling",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    }
  ],
  "spirits": [
    {
      "name": "Aura Lion",
      "hp": "47.8",
      "str": "11",
      "mag": "10.8",
      "def": "7.6",
      "dp": "Savage Fantasy",
      "attr": "Light",
      "style": "Physical/Light",
      "link": "Aura Raid",
      "rank": "D"
    },
    {
      "name": "Beatalike",
      "hp": "???",
      "str": "???",
      "mag": "???",
      "def": "???",
      "dp": "Savage Fantasy",
      "attr": "Water",
      "style": "Aqua",
      "link": "Berserker Bronco",
      "rank": "C"
    },
    {
      "name": "Catanuki",
      "hp": "???",
      "str": "???",
      "mag": "???",
      "def": "???",
      "dp": "Noble Fantasy",
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Meow Wounce",
      "rank": "D"
    },
    {
      "name": "Cera Terror",
      "hp": "50",
      "str": "11.2",
      "mag": "7.6",
      "def": "7.2",
      "dp": "Intrepid Fantasy",
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Roll Call",
      "rank": "E"
    },
    {
      "name": "Chef Kyroo",
      "hp": "38.1",
      "str": "8.4",
      "mag": "10.8",
      "def": "6.9",
      "dp": "Wondrous Fantasy",
      "attr": "Fire",
      "style": "Fire",
      "link": "Decussation",
      "rank": "F"
    },
    {
      "name": "Cyber Yog",
      "hp": "42.4",
      "str": "10",
      "mag": "10.8",
      "def": "7.5",
      "dp": "Noble Fantasy",
      "attr": "Thunder",
      "style": "Thunder",
      "link": "Whirling Bronco",
      "rank": "F"
    },
    {
      "name": "Drak Quack",
      "hp": "36",
      "str": "10",
      "mag": "8.2",
      "def": "6.7",
      "dp": "Rampant Fantasy",
      "attr": "Fire",
      "style": "Fire",
      "link": "Tail Groove",
      "rank": "E"
    },
    {
      "name": "Drill Sye",
      "hp": "48.9",
      "str": "10.7",
      "mag": "7.6",
      "def": "7.1",
      "dp": "Noble Fantasy",
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Roll Call",
      "rank": "D"
    },
    {
      "name": "Ducky Goose",
      "hp": "34.9",
      "str": "7.9",
      "mag": "9.8",
      "def": "6.6",
      "dp": "Dulcet Fantasy",
      "attr": "Blizzard",
      "style": "Physical/Light",
      "link": "Tail Groove",
      "rank": "E"
    },
    {
      "name": "Eaglider",
      "hp": "43.5",
      "str": "10.5",
      "mag": "8.1",
      "def": "6.4",
      "dp": "Lofty Fantasy",
      "attr": "Fire",
      "style": "Fire",
      "link": "Fly-By Knight",
      "rank": "E"
    },
    {
      "name": "Electricorn",
      "hp": "46.8",
      "str": "10.2",
      "mag": "10.3",
      "def": "7.2",
      "dp": "Fleeting Fantasy",
      "attr": "Thunder",
      "style": "Thunder",
      "link": "Equestrian Raid",
      "rank": "D"
    },
    {
      "name": "Escarglow",
      "hp": "34.9",
      "str": "10.2",
      "mag": "10.3",
      "def": "7.2",
      "dp": "Lofty Fantasy",
      "attr": "Physical",
      "style": "Aqua",
      "link": "Roll Call",
      "rank": "E"
    },
    {
      "name": "Fin Fatale",
      "hp": "36",
      "str": "8.4",
      "mag": "8.4",
      "def": "7.1",
      "dp": "Rampant Fantasy",
      "attr": "Water",
      "style": "Aqua",
      "link": "Water Blaster",
      "rank": "E"
    },
    {
      "name": "Fishboné",
      "hp": "32.7",
      "str": "8.7",
      "mag": "8.4",
      "def": "7.5",
      "dp": "Wondrous Fantasy",
      "attr": "Dark",
      "style": "Dark",
      "link": "Water Blaster",
      "rank": "E"
    },
    {
      "name": "Flowbermeow",
      "hp": "39.2",
      "str": "9.7",
      "mag": "11.7",
      "def": "7.2",
      "dp": "Malleable Fantasy",
      "attr": "Light",
      "style": "Physical/Light",
      "link": "Meow Wounce",
      "rank": "C"
    },
    {
      "name": "Frootz Cat",
      "hp": "41.9",
      "str": "9.7",
      "mag": "10.3",
      "def": "6.7",
      "dp": "Charming Fantasy",
      "attr": "Dark",
      "style": "Dark",
      "link": "Paw Groove",
      "rank": "C"
    },
    {
      "name": "Ghostabocky",
      "hp": "37",
      "str": "10",
      "mag": "9.5",
      "def": "6.2",
      "dp": "Troubling Fantasy",
      "attr": "Dark",
      "style": "Dark",
      "link": "Vacuum Ghost",
      "rank": "F"
    },
    {
      "name": "Halbird",
      "hp": "43.5",
      "str": "10.7",
      "mag": "8.1",
      "def": "6.6",
      "dp": "Lofty Fantasy",
      "attr": "Light",
      "style": "Physical/Light",
      "link": "Fly-By Knight",
      "rank": "D"
    },
    {
      "name": "Hebby Repp",
      "hp": "34.9",
      "str": "9.5",
      "mag": "8.4",
      "def": "6.2",
      "dp": "Vibrant Fantasy",
      "attr": "Fire",
      "style": "Fire",
      "link": "Flame Thrower",
      "rank": "E"
    },
    {
      "name": "Iceguin Ace",
      "hp": "38.1",
      "str": "9.2",
      "mag": "11.1",
      "def": "6.8",
      "dp": "Rampant Fantasy",
      "attr": "Blizzard",
      "style": "Aqua",
      "link": "Belly Raid",
      "rank": "E"
    },
    {
      "name": "Jestabocky",
      "hp": "37",
      "str": "10",
      "mag": "9.2",
      "def": "6.2",
      "dp": "Vibrant Fantasy",
      "attr": "Thunder",
      "style": "Thunder",
      "link": "Vacuum Ghost",
      "rank": "E"
    },
    {
      "name": "Juggle Pup",
      "hp": "39.2",
      "str": "9.5",
      "mag": "9.5",
      "def": "6.9",
      "dp": "Vibrant Fantasy",
      "attr": "Blizzard",
      "style": "Aqua",
      "link": "Lucky Dice",
      "rank": "D"
    },
    {
      "name": "KO Kabuto",
      "hp": "37",
      "str": "9.7",
      "mag": "9.8",
      "def": "8.1",
      "dp": "Noble Fantasy",
      "attr": "Physical",
      "style": "Fire",
      "link": "Target Shot",
      "rank": "E"
    },
    {
      "name": "Kab Kannon",
      "hp": "40.7",
      "str": "10.2",
      "mag": "10.3",
      "def": "8.1",
      "dp": "Brilliant Fantasy [ KH 3D ] Epic Fantasy [ KH 3D HD ]",
      "attr": "Physical",
      "style": "Fire",
      "link": "Target Shot",
      "rank": "C"
    },
    {
      "name": "Keeba Tiger",
      "hp": "48.9",
      "str": "11.2",
      "mag": "10.3",
      "def": "7.7",
      "dp": "Brilliant Fantasy",
      "attr": "Dark",
      "style": "Dark",
      "link": "Aura Raid",
      "rank": "D"
    },
    {
      "name": "Komory Bat",
      "hp": "32.7",
      "str": "8.2",
      "mag": "10.8",
      "def": "5.9",
      "dp": "Troubling Fantasy",
      "attr": "Dark",
      "style": "Dark",
      "link": "Fly-By Knight",
      "rank": "E"
    },
    {
      "name": "Kooma Panda",
      "hp": "46.8",
      "str": "10.2",
      "mag": "7.9",
      "def": "6.9",
      "dp": "Vibrant Fantasy",
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Swing Fling",
      "rank": "F"
    },
    {
      "name": "Lord Kyroo",
      "hp": "36",
      "str": "9.7",
      "mag": "10.6",
      "def": "7.3",
      "dp": "Brilliant Fantasy",
      "attr": "Thunder",
      "style": "Thunder",
      "link": "Decussation",
      "rank": "E"
    },
    {
      "name": "Majik Lapin",
      "hp": "37",
      "str": "8.4",
      "mag": "11.1",
      "def": "6.8",
      "dp": "Dulcet Fantasy",
      "attr": "Dark",
      "style": "Thunder",
      "link": "Swing Fling",
      "rank": "E"
    },
    {
      "name": "Me Me Bunny",
      "hp": "36",
      "str": "10.5",
      "mag": "8.4",
      "def": "6.7",
      "dp": "Intrepid Fantasy",
      "attr": "Physical",
      "style": "Thunder",
      "link": "Swing Fling",
      "rank": "F"
    },
    {
      "name": "Meow Wow",
      "hp": "36",
      "str": "8.4",
      "mag": "11.1",
      "def": "6.6",
      "dp": "Rampant Fantasy",
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Meow Wounce",
      "rank": "E"
    },
    {
      "name": "Meowjesty",
      "hp": "39.6",
      "str": "8.9",
      "mag": "11.7",
      "def": "6.6",
      "dp": "Malleable Fantasy",
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Meow Wounce",
      "rank": "C"
    },
    {
      "name": "Necho Cat",
      "hp": "38.1",
      "str": "9.2",
      "mag": "9.8",
      "def": "6.7",
      "dp": "Dulcet Fantasy",
      "attr": "Dark",
      "style": "Dark",
      "link": "Paw Groove",
      "rank": "E"
    },
    {
      "name": "Peepsta Hoo",
      "hp": "36",
      "str": "8.4",
      "mag": "8.4",
      "def": "7.1",
      "dp": "Wondrous Fantasy",
      "attr": "Dark",
      "style": "Dark",
      "link": "Fly-By Knight",
      "rank": "E"
    },
    {
      "name": "Pegaslick",
      "hp": "45.7",
      "str": "10.5",
      "mag": "10",
      "def": "7.1",
      "dp": "Lofty Fantasy",
      "attr": "Light",
      "style": "Thunder",
      "link": "Equestrian Raid",
      "rank": "E"
    },
    {
      "name": "Pricklemane",
      "hp": "37",
      "str": "9.7",
      "mag": "8.1",
      "def": "7.6",
      "dp": "Rampant Fantasy",
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Hammer Throw",
      "rank": "E"
    },
    {
      "name": "R & R Seal",
      "hp": "43.1",
      "str": "10",
      "mag": "10",
      "def": "6.9",
      "dp": "Prickly Fantasy",
      "attr": "Blizzard",
      "style": "Aqua",
      "link": "Lucky Dice",
      "rank": "C"
    },
    {
      "name": "Ryu Dragon",
      "hp": "50",
      "str": "11.5",
      "mag": "9.2",
      "def": "7.7",
      "dp": "Savage Fantasy",
      "attr": "Fire",
      "style": "Fire",
      "link": "Decussation",
      "rank": "E"
    },
    {
      "name": "Sir Kyroo",
      "hp": "31.6",
      "str": "8.2",
      "mag": "10.3",
      "def": "6.9",
      "dp": "Noble Fantasy",
      "attr": "Water",
      "style": "Aqua",
      "link": "Decussation",
      "rank": "E"
    },
    {
      "name": "Skelterwild",
      "hp": "50",
      "str": "12",
      "mag": "9",
      "def": "8.3",
      "dp": "Savage Fantasy",
      "attr": "Blizzard",
      "style": "Dark",
      "link": "Ice Raid",
      "rank": "F"
    },
    {
      "name": "Staggerceps",
      "hp": "38.1",
      "str": "9.5",
      "mag": "10",
      "def": "8",
      "dp": "Grim Fantasy",
      "attr": "Physical",
      "style": "Fire",
      "link": "Trap Shot",
      "rank": "E"
    },
    {
      "name": "Sudo Neku",
      "hp": "38.4",
      "str": "10",
      "mag": "8.9",
      "def": "6.2",
      "dp": "Wild Fantasy",
      "attr": "Fire",
      "style": "Fire",
      "link": "Flame Thrower",
      "rank": "C"
    },
    {
      "name": "Tama Sheep",
      "hp": "38.1",
      "str": "8.7",
      "mag": "10.6",
      "def": "7.5",
      "dp": "Vibrant Fantasy",
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Roll Call",
      "rank": "E"
    },
    {
      "name": "Tatsu Blaze",
      "hp": "33.8",
      "str": "9",
      "mag": "10.3",
      "def": "6.4",
      "dp": "Grim Fantasy",
      "attr": "Fire",
      "style": "Fire",
      "link": "Fire Blaster",
      "rank": "F"
    },
    {
      "name": "Tatsu Steed",
      "hp": "33.8",
      "str": "8.7",
      "mag": "10",
      "def": "7.3",
      "dp": "Lofty Fantasy",
      "attr": "Water",
      "style": "Aqua",
      "link": "Bubble Blaster",
      "rank": "E"
    },
    {
      "name": "Thunderaffe",
      "hp": "45.7",
      "str": "10.2",
      "mag": "11.4",
      "def": "7.1",
      "dp": "Fleeting Fantasy",
      "attr": "Thunder",
      "style": "Thunder",
      "link": "Equestrian Raid",
      "rank": "F"
    },
    {
      "name": "Toximander",
      "hp": "34.9",
      "str": "9.7",
      "mag": "8.1",
      "def": "6.6",
      "dp": "Troubling Fantasy",
      "attr": "Dark",
      "style": "Dark",
      "link": "Poison Dash",
      "rank": "E"
    },
    {
      "name": "Tubguin Ace",
      "hp": "???",
      "str": "???",
      "mag": "???",
      "def": "???",
      "dp": "Lofty Fantasy",
      "attr": "Fire",
      "style": "Aqua",
      "link": "Unwind",
      "rank": "E"
    },
    {
      "name": "Tyranto Rex",
      "hp": "51.1",
      "str": "11.7",
      "mag": "9",
      "def": "7.2",
      "dp": "Savage Fantasy",
      "attr": "Fire",
      "style": "Fire",
      "link": "Flame Raid",
      "rank": "D"
    },
    {
      "name": "Ursa Circus",
      "hp": "51.4",
      "str": "10.8",
      "mag": "8.3",
      "def": "6.9",
      "dp": "Epic Fantasy",
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Swing Fling",
      "rank": "C"
    },
    {
      "name": "Wheeflower",
      "hp": "30.6",
      "str": "7.7",
      "mag": "10.8",
      "def": "5.9",
      "dp": "Rampant Fantasy",
      "attr": "Water",
      "style": "Aqua",
      "link": "Cure Sun",
      "rank": "E"
    },
    {
      "name": "Woeflower",
      "hp": "32.7",
      "str": "8.4",
      "mag": "11.4",
      "def": "6.2",
      "dp": "Troubling Fantasy",
      "attr": "Dark",
      "style": "Dark",
      "link": "Poison Rain",
      "rank": "D"
    },
    {
      "name": "Yoggy Ram",
      "hp": "41.3",
      "str": "9.5",
      "mag": "10.3",
      "def": "7.3",
      "dp": "Vibrant Fantasy",
      "attr": "Fire",
      "style": "Fire",
      "link": "Whirling Bronco",
      "rank": "E"
    },
    {
      "name": "Zolephant",
      "hp": "47.8",
      "str": "10.5",
      "mag": "8.1",
      "def": "6.8",
      "dp": "Noble Fantasy",
      "attr": "Water",
      "style": "Aqua",
      "link": "Berserker Bronco",
      "rank": "E"
    }
  ]
};
