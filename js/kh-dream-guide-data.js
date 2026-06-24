/* =====================================================================
   Kingdom Hearts Dream Drop Distance - Dream Guide data.

   Static reference data for the Dream Guide sub-tool (js/kh-dream-guide.js):
     materials / tiers ... canonical material names + the three tiers
                           (Figment < Fancy < Fantasy)
     drops ............... per material+tier: which Dream Eater drops it,
                           from which source, at what % (Material Drops sheet)
     obtain .............. extra "Rewards"/"Other methods" obtainment text
                           per material (Material Obtainment sheet)
     recipes ............. every synthesis recipe (official flag, rank,
                           materials + quantities, success %, rare form)
     spirits ............. the 54 Spirits: base HP/Str/Mag/Def, EXP mod,
                           Dream Piece produced, elemental resistances and
                           the four named dispositions
     commands ............ Deck Command creation bonuses (stat/resistance/
                           affinity boost a sacrificed command confers)
     create .............. the Spirit-creation formula constants: rank
                           corrections, per-Forecast stat bonus + disposition
                           odds, Forecast descriptions, Dream-Piece level bonus

   The creation calculator (js/kh-dream-guide.js) uses `spirits` + `create`
   + `commands` to compute a created Spirit's stat ranges, resistances and
   disposition odds for a chosen rank, level and Forecast. World/treasure/
   recipe-checklist data is still read live from the DDD tracker
   (TRACKER_GAME) so there is a single source of truth.

   Source: KH Wiki (khwiki.com) "Spirit" article + HTML exports - Kingdom
   Hearts 3D: Dream Drop Distance only. Material type 18 ("Recipe") was not
   supplied. A few Spirits list "???" stats where the source was blank.
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
      "m": "Malleable",
      "t": "Fantasy",
      "src": "Nightmares",
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
      "t": "Fantasy",
      "src": "Rare Nightmares",
      "e": "Iceguin Ace",
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
    }
  ],
  "obtain": {
    "Malleable": {
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Traverse Town",
            "items": [
              "Sora's fourth, fifth, and sixth Special Portal (100%)"
            ]
          },
          {
            "char": "Sora",
            "world": "La Cité des Cloches",
            "items": [
              "Sora's fifth and sixth Special Portal (100%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The Grid",
            "items": [
              "Sora's fourth, fifth, and sixth Special Portal (100%)"
            ]
          }
        ],
        "other": "obtained for an expired Meowjesty or Flowbermeow."
      }
    },
    "Intrepid": {
      "Figment": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Traverse Town",
            "items": [
              "Battle Portal 17, 28, and 37 (67%)",
              "Battle Portal 38 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Traverse Town",
            "items": [
              "Battle Portal 28 (67%)",
              "Battle Portal 26 (33%)"
            ]
          }
        ]
      },
      "Fancy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Symphony of Sorcery",
            "items": [
              "Battle Portal 1b and 21 (67%)",
              "Battle Portal 2b and 19 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The World That Never Was",
            "items": [
              "Battle Portal 5 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Symphony of Sorcery",
            "items": [
              "Battle Portal 1b and 27 (67%)",
              "Battle Portal 2b (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The World That Never Was",
            "items": [
              "Battle Portal 10 (67%)"
            ]
          }
        ]
      },
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Symphony of Sorcery",
            "items": [
              "Sora's second and third Special Portal (33%)",
              "Battle Portal 2b and 19 (67%)",
              "Battle Portal 1b and 21 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The World That Never Was",
            "items": [
              "Sora's first Special Portal (33%)",
              "Battle Portal 5 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Symphony of Sorcery",
            "items": [
              "Riku's first, second, and third Special Portal (33%)",
              "Battle Portal 2b (67%)",
              "Battle Portal 1b and 27 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The World That Never Was",
            "items": [
              "Riku's first Special Portal (33%)",
              "Battle Portal 10 (67%)"
            ]
          }
        ],
        "other": "obtained for an expired Cera Terror or Me Me Bunny."
      }
    },
    "Vibrant": {
      "Figment": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Traverse Town",
            "items": [
              "Battle Portal 6 and 7 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Traverse Town",
            "items": [
              "Battle Portal 6 and 7 (67%)",
              "Battle Portal 9 (33%)"
            ]
          }
        ],
        "other": "Obtained during the Create Spirits tutorial (Sora: x3)."
      },
      "Fancy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Prankster's Paradise",
            "items": [
              "Battle Portal 2, 10, and 12 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Prankster's Paradise",
            "items": [
              "Battle Portal 27, 31, 39, 40, and 46 (67%)"
            ]
          }
        ]
      },
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Traverse Town",
            "items": [
              "Sora's first, second, and third Special Portal (33%)",
              "Battle Portal 6, 7, 14, and 37 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Prankster's Paradise",
            "items": [
              "Sora's first and third Special Portal (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Traverse Town",
            "items": [
              "Riku's first, second, and third Special Portal (33%)",
              "Battle Portal 9, 26, and 42 (67%)",
              "Battle Portal 6, 7, and 14 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Battle Portal 32 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Prankster's Paradise",
            "items": [
              "Riku's first and third Special Portal (33%)"
            ]
          }
        ],
        "other": "obtained for an expired Juggle Pup, Jestabocky, Kooma Panda, Tama Sheep, Hebby Repp, or Yoggy Ram."
      }
    },
    "Grim": {
      "Figment": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Traverse Town",
            "items": [
              "Battle Portal 14, 15, 27, and 44 (67%)",
              "Battle Portal 34 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Traverse Town",
            "items": [
              "Battle Portal 14, 15, 27, and 44 (67%)",
              "Battle Portal 42 (33%)"
            ]
          }
        ]
      },
      "Fancy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Country of the Musketeers",
            "items": [
              "Battle Portal 25 (67%)",
              "Battle Portal 1, 13, and 17 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Symphony of Sorcery",
            "items": [
              "Battle Portal 4 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Country of the Musketeers",
            "items": [
              "Battle Portal 21, 22, 25, and 36 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Symphony of Sorcery",
            "items": [
              "Battle Portal 35 (67%)"
            ]
          }
        ]
      },
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Country of the Musketeers",
            "items": [
              "Sora's first, second, and third Special Portal (33%/67%/33%)",
              "Battle Portal 1 (67%)",
              "Battle Portal 2 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Symphony of Sorcery",
            "items": [
              "Sora's first and second Special Portal (33%)",
              "Battle Portal 2, 4, 12, 15 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The World That Never Was",
            "items": [
              "Battle Portal 4 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Country of the Musketeers",
            "items": [
              "Riku's first, second, and third Special Portal (33%/67%/67%)",
              "Battle Portal 28 (67%)",
              "Battle Portal 36, 41, and 46 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Symphony of Sorcery",
            "items": [
              "Riku's first, second, and third Special Portal (33%)",
              "Battle Portal 28 (67%)",
              "Battle Portal 2, 30, and 35 (33%)"
            ]
          }
        ],
        "other": "obtained for an expired Staggerceps or Tatsu Blaze."
      }
    },
    "Rampant": {
      "Figment": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Traverse Town",
            "items": [
              "Battle Portal 3, 4, and 35 (67%)",
              "Battle Portal 19 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Traverse Town",
            "items": [
              "Battle Portal 4 and 35 (67%)"
            ]
          }
        ],
        "other": "Obtained during the Create Spirits tutorial (Sora: x5, Riku: x3)."
      },
      "Fancy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Prankster's Paradise",
            "items": [
              "Battle Portal 5, 14, 15, 18, and 19 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Prankster's Paradise",
            "items": [
              "Battle Portal 26, 37, 42, and 43 (67%)"
            ]
          }
        ]
      },
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Traverse Town",
            "items": [
              "Sora's first, second, and third Special Portal (33%)",
              "Battle Portal 19 (67%)",
              "Battle Portal 4, 27, 28, 35, and 44 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The Grid",
            "items": [
              "Battle Portal 12 and 22 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Prankster's Paradise",
            "items": [
              "Sora's first and third Special Portal (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Traverse Town",
            "items": [
              "Riku's first, second, and third Special Portal (33%)",
              "Battle Portal 4, 27, 28, 33, 35, and 44 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Battle Portal 12 and 22 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Prankster's Paradise",
            "items": [
              "Riku's first and third Special Portal (33%)"
            ]
          }
        ],
        "other": "obtained for an expired Iceguin Ace, Wheeflower, Fin Fatale, Drak Quack, Pricklemane or Meow Wow."
      }
    },
    "Brilliant": {
      "Fantasy": {
        "rewards": [
          {
            "char": "Riku",
            "world": "Symphony of Sorcery",
            "items": [
              "Riku's sixth Special Portal (100%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The World That Never Was",
            "items": [
              "Riku's first Special Portal (33%)",
              "Riku's second Special Portal (67%)",
              "Riku's third Special Portal (100%)"
            ]
          }
        ],
        "other": "Obtained for an expired Lord Kyroo or Keeba Tiger."
      }
    },
    "Savage": {
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Symphony of Sorcery",
            "items": [
              "Sora's first, second, third, fourth, and fifth Special Portal (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The World That Never Was",
            "items": [
              "Sora's first and second Special Portal (33%)",
              "Battle Portal 1 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Symphony of Sorcery",
            "items": [
              "Riku's fourth and fifth Special Portal (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The World That Never Was",
            "items": [
              "Riku's first and second Special Portal (33%)",
              "Battle Portal 14 (33%)"
            ]
          }
        ],
        "other": "obtained for an expired Aura Lion, Tyranto Rex, Skelterwild, or Ryu Dragon; obtained for an expired Beatalike."
      }
    },
    "Wild": {
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Symphony of Sorcery",
            "items": [
              "Sora's sixth Special Portal (100%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The World That Never Was",
            "items": [
              "Sora's first Special Portal (33%)",
              "Sora's second Special Portal (67%)",
              "Sora's third Special Portal (100%)"
            ]
          }
        ],
        "other": "Obtained for an expired Sudo Neku."
      }
    },
    "Prickly": {
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Prankster's Paradise",
            "items": [
              "Sora's fourth, fifth, and sixth Special Portal (100%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Country of the Musketeers",
            "items": [
              "Sora's fourth, fifth, and sixth Special Portal (100%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Symphony of Sorcery",
            "items": [
              "Sora's fourth and fifth Special Portal (67%)"
            ]
          }
        ],
        "other": "obtained for an expired R & R Seal."
      }
    },
    "Lofty": {
      "Figment": {
        "rewards": [
          {
            "char": "Sora",
            "world": "La Cité des Cloches",
            "items": [
              "Battle Portal 11, 20, 37, and 46 (67%)",
              "Battle Portal 17 and 22 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The Grid",
            "items": [
              "Battle Portal 15 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "La Cité des Cloches",
            "items": [
              "Battle Portal 11, 20, and 33 (67%)",
              "Battle Portal 22 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Battle Portal 15 (67%)"
            ]
          }
        ]
      },
      "Fancy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Symphony of Sorcery",
            "items": [
              "Battle Portal 5 (67%)",
              "Battle Portal 16 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Symphony of Sorcery",
            "items": [
              "Battle Portal 37 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The World That Never Was",
            "items": [
              "Battle Portal 7 (67%)"
            ]
          }
        ]
      },
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "La Cité des Cloches",
            "items": [
              "Sora's first, second, third, and fourth Special Portal (33%)",
              "Battle Portal 17 and 22 (67%)",
              "Battle Portal 25, 37, and 46 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The Grid",
            "items": [
              "Sora's first, second, and third Special Portal (33%)",
              "Battle Portal 2, 20, 25, and 27 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Prankster's Paradise",
            "items": [
              "Sora's second Special Portal (33%)",
              "Battle Portal 5, 9, 14, and 16 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Country of the Musketeers",
            "items": [
              "Battle Portal 8, 9, and 31 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "La Cité des Cloches",
            "items": [
              "Riku's first, second, and third Special Portal (33%)",
              "Battle Portal 22 (67%)",
              "Battle Portal 25 and 33 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Riku's first, second, and third Special Portal (33%)",
              "Battle Portal 2, 20, 27, and 28 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Prankster's Paradise",
            "items": [
              "Riku's second Special Portal (33%)",
              "Battle Portal 30, 34, 37, 42, and 43 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Country of the Musketeers",
            "items": [
              "Battle Portal 21, 22, and 31 (33%)"
            ]
          }
        ]
      }
    },
    "Dulcet": {
      "Figment": {
        "rewards": [
          {
            "char": "Sora",
            "world": "La Cité des Cloches",
            "items": [
              "Battle Portal 7, 15, 35, 36, 39, 40, and 41 (67%)",
              "Battle Portal 28 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The Grid",
            "items": [
              "Battle Portal 21 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "La Cité des Cloches",
            "items": [
              "Battle Portal 7, 13, 15, and 21 (67%)",
              "Battle Portal 28 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Battle Portal 21 (67%)"
            ]
          }
        ]
      },
      "Fancy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Symphony of Sorcery",
            "items": [
              "Battle Portal 12 (67%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The World That Never Was",
            "items": [
              "Battle Portal 4 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Symphony of Sorcery",
            "items": [
              "Battle Portal 30 (67%)",
              "Battle Portal 28 (33%)"
            ]
          }
        ]
      },
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "La Cité des Cloches",
            "items": [
              "Sora's first, second, third, and fourth Special Portal (33%)",
              "Battle Portal 28 (67%), Battle Portal 7, 15, 35, 36, 39, 40, and 41 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The Grid",
            "items": [
              "Sora's first, second, and third Special Portal (33%)",
              "Battle Portal 21 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Prankster's Paradise",
            "items": [
              "Sora's second Special Portal (33%)",
              "Battle Portal 2, 12, and 15 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Country of the Musketeers",
            "items": [
              "Battle Portal 11 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "La Cité des Cloches",
            "items": [
              "Riku's first, second, and third fourth Special Portal (33%)",
              "Battle Portal 28 (67%), Battle Portal 7, 13, 15, and 21 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Riku's first, second, and third Special Portal (33%)",
              "Battle Portal 21 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Prankster's Paradise",
            "items": [
              "Riku's second Special Portal (33%)",
              "Battle Portal 26, 31, 33, 39, 40, and 46 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Country of the Musketeers",
            "items": [
              "Battle Portal 29 (33%)"
            ]
          }
        ],
        "other": "obtained for an expired Necho Cat, Ducky Goose, or Majik Lapin."
      }
    },
    "Wondrous": {
      "Figment": {
        "rewards": [
          {
            "char": "Sora",
            "world": "The Grid",
            "items": [
              "Battle Portal 1, 2, 11, 25, and 26 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Battle Portal 1, 2, 11, 25, 26, and 32 (67%)"
            ]
          }
        ]
      },
      "Fancy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Country of the Musketeers",
            "items": [
              "Battle Portal 2, 8, 9, 14, and 21 (67%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Symphony of Sorcery",
            "items": [
              "Battle Portal 2a and 15 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Country of the Musketeers",
            "items": [
              "Battle Portal 33, 42, and 45 (67%)",
              "Battle Portal 32 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Symphony of Sorcery",
            "items": [
              "Battle Portal 2a (67%)"
            ]
          }
        ]
      },
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "The World That Never Was",
            "items": [
              "Battle Portal 1 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The World That Never Was",
            "items": [
              "Battle Portal 14 (67%)"
            ]
          }
        ],
        "other": "obtained for an expired Chef Kyroo, Peepsta Hoo, or Fishboné."
      }
    },
    "Noble": {
      "Figment": {
        "rewards": [
          {
            "char": "Sora",
            "world": "The Grid",
            "items": [
              "Battle Portal 12 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Battle Portal 12 (67%)"
            ]
          }
        ]
      },
      "Fancy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Prankster's Paradise",
            "items": [
              "Battle Portal 3, 7, 9, 16, 22, and 25 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Prankster's Paradise",
            "items": [
              "Battle Portal 30, 33, 34, and 46 (67%)"
            ]
          }
        ]
      },
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "La Cité des Cloches",
            "items": [
              "Sora's first, second, third, and fourth Special Portal (33%)",
              "Battle Portal 1, 11, 20, 30, 42, and 47 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The Grid",
            "items": [
              "Sora's first, second, and third Special Portal (33%)",
              "Battle Portal 5, 11, 14, and 26 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Prankster's Paradise",
            "items": [
              "Sora's second Special Portal (33%)",
              "Battle Portal 3, 7, 19, 22, and 25 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Country of the Musketeers",
            "items": [
              "Battle Portal 17 (67%)",
              "Battle Portal 14 and 21 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "La Cité des Cloches",
            "items": [
              "Riku's first, second, and third fourth Special Portal (33%)",
              "Battle Portal 2 (67%), Battle Portal 1, 11, 20, and 30 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Riku's first, second, and third Special Portal (33%)",
              "Battle Portal 5, 11, 14, 26, and 29 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Prankster's Paradise",
            "items": [
              "Riku's second Special Portal (33%)",
              "Battle Portal 27 and 46 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Country of the Musketeers",
            "items": [
              "Battle Portal 33 (33%)"
            ]
          }
        ],
        "other": "obtained for an expired Sir Kyroo, Zolephant, KO Kabuto, Drill Sye, or Cyber Yog; obtained for an expired Catanuki."
      }
    },
    "Charming": {
      "Fantasy": {
        "rewards": [
          {
            "char": "Riku",
            "world": "Traverse Town",
            "items": [
              "Riku's fourth, fifth, and sixth Special Portal (100%)"
            ]
          },
          {
            "char": "Riku",
            "world": "La Cité des Cloches",
            "items": [
              "Riku's fourth, fifth, and sixth Special Portal (100%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Riku's fourth, fifth, and sixth Special Portal (100%)"
            ]
          }
        ],
        "other": "obtained for an expired Frootz Cat."
      }
    },
    "Epic": {
      "Fantasy": {
        "rewards": [
          {
            "char": "Riku",
            "world": "Prankster's Paradise",
            "items": [
              "Riku's fourth, fifth, and sixth Special Portal (100%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Country of the Musketeers",
            "items": [
              "Riku's fourth, fifth, and sixth Special Portal (100%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Symphony of Sorcery",
            "items": [
              "Riku's fourth and fifth Special Portal (67%)"
            ]
          }
        ],
        "other": "obtained for an expired Ursa Circus; obtained for an expired Kab Kannon."
      }
    },
    "Troubling": {
      "Figment": {
        "rewards": [
          {
            "char": "Riku",
            "world": "Traverse Town",
            "items": [
              "Battle Portal 20, 23, 33, and 40 (67%)"
            ]
          }
        ],
        "other": "Obtained during the Create Spirits tutorial (Riku: x5)."
      },
      "Fancy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "La Cité des Cloches",
            "items": [
              "Battle Portal 1, 25, 30, 42, and 47 (67%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The Grid",
            "items": [
              "Battle Portal 5 (67%)"
            ]
          },
          {
            "char": "Riku",
            "world": "La Cité des Cloches",
            "items": [
              "Battle Portal 1, 25, 30 (67%)",
              "Battle Portal 2 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Battle Portal 5 and 28 (67%)"
            ]
          }
        ]
      },
      "Fantasy": {
        "rewards": [
          {
            "char": "Sora",
            "world": "Traverse Town",
            "items": [
              "Sora's first, second, and third Special Portal (33%)",
              "Battle Portal 34 and 38 (67%)",
              "Battle Portal 3, 15, and 17 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "The Grid",
            "items": [
              "Battle Portal 1 and 15 (33%)"
            ]
          },
          {
            "char": "Sora",
            "world": "Prankster's Paradise",
            "items": [
              "Sora's first and third Special Portal (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Traverse Town",
            "items": [
              "Riku's first, second, and third Special Portal (33%)",
              "Battle Portal 15, 20, 23, and 40 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "The Grid",
            "items": [
              "Battle Portal 1 and 15 (33%)"
            ]
          },
          {
            "char": "Riku",
            "world": "Prankster's Paradise",
            "items": [
              "Riku's first and third Special Portal (33%)"
            ]
          }
        ],
        "other": "obtained for an expired Ghostabocky, Komory Bat, Toximander, or Woeflower."
      }
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
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 4,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 16,
      "pct": 40,
      "rare": "Majik Lapin"
    },
    {
      "sp": "Aura Lion",
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 4,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 60,
      "rare": "Keeba Tiger"
    },
    {
      "sp": "Aura Lion",
      "rank": "C",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Savage",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
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
      "rank": "A",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fancy",
      "q1": 8,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 2,
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
      "rank": "A",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 4,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
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
      "rank": "C",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Grim",
      "t2": "Fantasy",
      "q2": 5,
      "pct": 70,
      "rare": "Electricorn"
    },
    {
      "sp": "Cera Terror",
      "rank": "B",
      "off": false,
      "m1": "Grim",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Cera Terror",
      "rank": "C",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 40,
      "rare": "Drill Sye"
    },
    {
      "sp": "Cera Terror",
      "rank": "C",
      "off": false,
      "m1": "Grim",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Fleeting",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Cera Terror",
      "rank": "D",
      "off": false,
      "m1": "Grim",
      "t1": "Fantasy",
      "q1": 6,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 8,
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
      "rank": "A",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 70,
      "rare": "Lord Kyroo"
    },
    {
      "sp": "Chef Kyroo",
      "rank": "C",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Chef Kyroo",
      "rank": "A",
      "off": false,
      "m1": "Wondrous",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 1,
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
      "rare": "Sir Kyroo"
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
      "rank": "C",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Noble",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Cyber Yog",
      "rank": "C",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Grim",
      "t2": "Figment",
      "q2": 5,
      "pct": 30,
      "rare": "Yoggy Ram"
    },
    {
      "sp": "Cyber Yog",
      "rank": "B",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Grim",
      "t2": "Fancy",
      "q2": 4,
      "pct": 70,
      "rare": "Eaglider"
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
      "sp": "Cyber Yog",
      "rank": "F",
      "off": false,
      "m1": "Noble",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 3,
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
      "rank": "A",
      "off": false,
      "m1": "Wondrous",
      "t1": "Fantasy",
      "q1": 5,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 1,
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
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Noble",
      "t2": "Fantasy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Drill Sye",
      "rank": "A",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 60,
      "rare": "Cera Terror"
    },
    {
      "sp": "Drill Sye",
      "rank": "A",
      "off": false,
      "m1": "Malleable",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Drill Sye",
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 4,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 20,
      "rare": "Pricklemane"
    },
    {
      "sp": "Drill Sye",
      "rank": "C",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
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
      "sp": "Eaglider",
      "rank": "D",
      "off": true,
      "m1": "Grim",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Prickly",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Eaglider",
      "rank": "B",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 6,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 80,
      "rare": "Halbird"
    },
    {
      "sp": "Eaglider",
      "rank": "C",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Grim",
      "t2": "Fancy",
      "q2": 4,
      "pct": 30,
      "rare": "Cyber Yog"
    },
    {
      "sp": "Eaglider",
      "rank": "B",
      "off": false,
      "m1": "Prickly",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Eaglider",
      "rank": "C",
      "off": false,
      "m1": "Prickly",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Eaglider",
      "rank": "E",
      "off": false,
      "m1": "Troubling",
      "t1": "Figment",
      "q1": 8,
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
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Fleeting",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Electricorn",
      "rank": "B",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 12,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 4,
      "pct": 60,
      "rare": "Pegaslick"
    },
    {
      "sp": "Electricorn",
      "rank": "C",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Fleeting",
      "t2": "Fantasy",
      "q2": 3,
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
      "rare": "Cera Terror"
    },
    {
      "sp": "Escarglow",
      "rank": "E",
      "off": true,
      "m1": "Grim",
      "t1": "Figment",
      "q1": 4,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Escarglow",
      "rank": "B",
      "off": false,
      "m1": "Rampant",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Troubling",
      "t2": "Fancy",
      "q2": 3,
      "pct": 40,
      "rare": "Toximander"
    },
    {
      "sp": "Escarglow",
      "rank": "C",
      "off": false,
      "m1": "Grim",
      "t1": "Figment",
      "q1": 8,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Escarglow",
      "rank": "C",
      "off": false,
      "m1": "Wondrous",
      "t1": "Figment",
      "q1": 10,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Escarglow",
      "rank": "A",
      "off": false,
      "m1": "Malleable",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Escarglow",
      "rank": "C",
      "off": false,
      "m1": "Vibrant",
      "t1": "Figment",
      "q1": 11,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 2,
      "pct": 70,
      "rare": "Jestabocky"
    },
    {
      "sp": "Escarglow",
      "rank": "D",
      "off": false,
      "m1": "Noble",
      "t1": "Figment",
      "q1": 6,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
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
      "rank": "B",
      "off": false,
      "m1": "Rampant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Fin Fatale",
      "rank": "A",
      "off": false,
      "m1": "Rampant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Prickly",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Fin Fatale",
      "rank": "C",
      "off": false,
      "m1": "Noble",
      "t1": "Figment",
      "q1": 4,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 4,
      "pct": 60,
      "rare": "Fishbon\u00e9"
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
      "sp": "Fishbon\u00e9",
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
      "sp": "Fishbon\u00e9",
      "rank": "A",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 80,
      "rare": "Skelterwild"
    },
    {
      "sp": "Fishbon\u00e9",
      "rank": "A",
      "off": false,
      "m1": "Wondrous",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Prickly",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Fishbon\u00e9",
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
      "sp": "Fishbon\u00e9",
      "rank": "C",
      "off": false,
      "m1": "Noble",
      "t1": "Figment",
      "q1": 4,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 4,
      "pct": 40,
      "rare": "Fin Fatale"
    },
    {
      "sp": "Flowbermeow",
      "rank": "C",
      "off": true,
      "m1": "Malleable",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Fleeting",
      "t2": "Fantasy",
      "q2": 2,
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
      "rare": "Meow Wow"
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
      "sp": "Frootz Cat",
      "rank": "D",
      "off": false,
      "m1": "Rampant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Noble",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Frootz Cat",
      "rank": "D",
      "off": true,
      "m1": "Grim",
      "t1": "Fantasy",
      "q1": 5,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Frootz Cat",
      "rank": "C",
      "off": false,
      "m1": "Wondrous",
      "t1": "Fantasy",
      "q1": 4,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Frootz Cat",
      "rank": "B",
      "off": false,
      "m1": "Wondrous",
      "t1": "Fantasy",
      "q1": 6,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 1,
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
      "rank": "B",
      "off": false,
      "m1": "Troubling",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 6,
      "pct": 60,
      "rare": "Majik Lapin"
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
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 20,
      "rare": "Eaglider"
    },
    {
      "sp": "Halbird",
      "rank": "C",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Halbird",
      "rank": "B",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Prickly",
      "t2": "Fantasy",
      "q2": 1,
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
      "rank": "C",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Noble",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Hebby Repp",
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 5,
      "m2": "Troubling",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 70,
      "rare": "Peepsta Hoo"
    },
    {
      "sp": "Hebby Repp",
      "rank": "A",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
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
      "sp": "Hebby Repp",
      "rank": "D",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 4,
      "m2": "Fleeting",
      "t2": "Figment",
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
      "rank": "B",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Rampant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Iceguin Ace",
      "rank": "A",
      "off": false,
      "m1": "Rampant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Iceguin Ace",
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 5,
      "m2": "Vibrant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 40,
      "rare": "Kooma Panda"
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
      "rare": "Halbird"
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
      "rank": "B",
      "off": false,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 8,
      "m2": "Vibrant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Jestabocky",
      "rank": "A",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Jestabocky",
      "rank": "C",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fancy",
      "q1": 11,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 2,
      "pct": 30,
      "rare": "Escarglow"
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
      "rank": "B",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 40,
      "rare": "Necho Cat"
    },
    {
      "sp": "Juggle Pup",
      "rank": "A",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Juggle Pup",
      "rank": "B",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Fleeting",
      "t2": "Fantasy",
      "q2": 2,
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
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Noble",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "KO Kabuto",
      "rank": "A",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 6,
      "pct": 40,
      "rare": "Staggerceps"
    },
    {
      "sp": "KO Kabuto",
      "rank": "B",
      "off": false,
      "m1": "Noble",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Grim",
      "t2": "Fancy",
      "q2": 3,
      "pct": 60,
      "rare": "Staggerceps"
    },
    {
      "sp": "KO Kabuto",
      "rank": "A",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Troubling",
      "t2": "Fantasy",
      "q2": 2,
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
      "sp": "Kab Kannon",
      "rank": "D",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Grim",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Kab Kannon",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 6,
      "m2": "Prickly",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Kab Kannon",
      "rank": "A",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Kab Kannon",
      "rank": "D",
      "off": true,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Grim",
      "t2": "Figment",
      "q2": 4,
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
      "rank": "B",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 6,
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
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 4,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 40,
      "rare": "Aura Lion"
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
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 4,
      "m2": "Troubling",
      "t2": "Figment",
      "q2": 5,
      "pct": 70,
      "rare": "Toximander"
    },
    {
      "sp": "Komory Bat",
      "rank": "A",
      "off": false,
      "m1": "Troubling",
      "t1": "Fancy",
      "q1": 2,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
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
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 4,
      "m2": "Vibrant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Kooma Panda",
      "rank": "A",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 5,
      "m2": "Vibrant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 60,
      "rare": "Iceguin Ace"
    },
    {
      "sp": "Kooma Panda",
      "rank": "A",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 1,
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
      "sp": "Lord Kyroo",
      "rank": "D",
      "off": true,
      "m1": "Noble",
      "t1": "Fancy",
      "q1": 5,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Lord Kyroo",
      "rank": "C",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Lord Kyroo",
      "rank": "A",
      "off": false,
      "m1": "Epic",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 20,
      "rare": "Ryu Dragon"
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
      "rank": "B",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 3,
      "pct": 30,
      "rare": "Me Me Bunny"
    },
    {
      "sp": "Majik Lapin",
      "rank": "A",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Majik Lapin",
      "rank": "A",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 4,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 16,
      "pct": 60,
      "rare": "Aura Lion"
    },
    {
      "sp": "Majik Lapin",
      "rank": "B",
      "off": false,
      "m1": "Troubling",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 40,
      "rare": "Peepsta Hoo"
    },
    {
      "sp": "Majik Lapin",
      "rank": "B",
      "off": false,
      "m1": "Troubling",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 6,
      "pct": 40,
      "rare": "Ghostabocky"
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
      "sp": "Majik Lapin",
      "rank": "E",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 4,
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
      "rank": "A",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 3,
      "pct": 70,
      "rare": "Majik Lapin"
    },
    {
      "sp": "Me Me Bunny",
      "rank": "B",
      "off": false,
      "m1": "Rampant",
      "t1": "Figment",
      "q1": 8,
      "m2": "Intrepid",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Me Me Bunny",
      "rank": "A",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Prickly",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Me Me Bunny",
      "rank": "D",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 6,
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
      "rank": "B",
      "off": false,
      "m1": "Vibrant",
      "t1": "Figment",
      "q1": 6,
      "m2": "Vibrant",
      "t2": "Fancy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Meow Wow",
      "rank": "A",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fancy",
      "q1": 2,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Meow Wow",
      "rank": "S",
      "off": false,
      "m1": "Malleable",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 90,
      "rare": "Flowbermeow"
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
      "rank": "B",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fancy",
      "q1": 6,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Necho Cat",
      "rank": "B",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 40,
      "rare": "Woeflower"
    },
    {
      "sp": "Necho Cat",
      "rank": "A",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 60,
      "rare": "Juggle Pup"
    },
    {
      "sp": "Necho Cat",
      "rank": "A",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 2,
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
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 5,
      "m2": "Troubling",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 30,
      "rare": "Hebby Repp"
    },
    {
      "sp": "Peepsta Hoo",
      "rank": "A",
      "off": false,
      "m1": "Troubling",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 60,
      "rare": "Majik Lapin"
    },
    {
      "sp": "Peepsta Hoo",
      "rank": "A",
      "off": false,
      "m1": "Wondrous",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 1,
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
      "rank": "C",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Dulcet",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Pegaslick",
      "rank": "B",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Fleeting",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 40,
      "rare": "Thunderaffe"
    },
    {
      "sp": "Pegaslick",
      "rank": "A",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 12,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 4,
      "pct": 40,
      "rare": "Electricorn"
    },
    {
      "sp": "Pegaslick",
      "rank": "A",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 4,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 80,
      "rare": "Ryu Dragon"
    },
    {
      "sp": "Pegaslick",
      "rank": "C",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 6,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Pegaslick",
      "rank": "D",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 8,
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
      "rank": "A",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 3,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Pricklemane",
      "rank": "S",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 4,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 80,
      "rare": "Drill Sye"
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
      "rare": "Tama Sheep"
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
      "sp": "R & R Seal",
      "rank": "D",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 6,
      "m2": "Wondrous",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "R & R Seal",
      "rank": "C",
      "off": false,
      "m1": "Rampant",
      "t1": "Fantasy",
      "q1": 4,
      "m2": "Dulcet",
      "t2": "Fancy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "R & R Seal",
      "rank": "E",
      "off": true,
      "m1": "Vibrant",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Wondrous",
      "t2": "Figment",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "R & R Seal",
      "rank": "D",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 4,
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
      "rank": "D",
      "off": false,
      "m1": "Lofty",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Ryu Dragon",
      "rank": "C",
      "off": false,
      "m1": "Prickly",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Ryu Dragon",
      "rank": "B",
      "off": false,
      "m1": "Epic",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 80,
      "rare": "Lord Kyroo"
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
      "rank": "C",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 10,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 6,
      "pct": 60,
      "rare": "Chef Kyroo"
    },
    {
      "sp": "Sir Kyroo",
      "rank": "B",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Grim",
      "t2": "Figment",
      "q2": 6,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Sir Kyroo",
      "rank": "A",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 1,
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
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 4,
      "pct": 40,
      "rare": "Tyranto Rex"
    },
    {
      "sp": "Skelterwild",
      "rank": "F",
      "off": false,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 20,
      "rare": "Fishbon\u00e9"
    },
    {
      "sp": "Staggerceps",
      "rank": "E",
      "off": true,
      "m1": "Grim",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Staggerceps",
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 6,
      "pct": 60,
      "rare": "KO Kabuto"
    },
    {
      "sp": "Staggerceps",
      "rank": "D",
      "off": false,
      "m1": "Grim",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 3,
      "pct": 40,
      "rare": "KO Kabuto"
    },
    {
      "sp": "Staggerceps",
      "rank": "A",
      "off": false,
      "m1": "Grim",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 1,
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
      "sp": "Staggerceps",
      "rank": "D",
      "off": false,
      "m1": "Grim",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Fleeting",
      "t2": "Figment",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Sudo Neku",
      "rank": "C",
      "off": true,
      "m1": "Noble",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Wild",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Sudo Neku",
      "rank": "B",
      "off": false,
      "m1": "Wild",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Fleeting",
      "t2": "Fantasy",
      "q2": 3,
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
      "rank": "B",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 5,
      "m2": "Vibrant",
      "t2": "Figment",
      "q2": 4,
      "pct": 60,
      "rare": "Pricklemane"
    },
    {
      "sp": "Tama Sheep",
      "rank": "B",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Dulcet",
      "t2": "Figment",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tama Sheep",
      "rank": "A",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 1,
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
      "rank": "B",
      "off": false,
      "m1": "Rampant",
      "t1": "Fancy",
      "q1": 8,
      "m2": "Grim",
      "t2": "Fantasy",
      "q2": 3,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tatsu Blaze",
      "rank": "A",
      "off": false,
      "m1": "Grim",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
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
      "rare": "Tatsu Steed"
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
      "rank": "B",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Dulcet",
      "t2": "Figment",
      "q2": 12,
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
      "rare": "Tatsu Blaze"
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
      "sp": "Thunderaffe",
      "rank": "E",
      "off": true,
      "m1": "Noble",
      "t1": "Fancy",
      "q1": 7,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 9,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Thunderaffe",
      "rank": "B",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Fleeting",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 60,
      "rare": "Pegaslick"
    },
    {
      "sp": "Thunderaffe",
      "rank": "B",
      "off": false,
      "m1": "Brilliant",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Fleeting",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Thunderaffe",
      "rank": "D",
      "off": false,
      "m1": "Noble",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Fleeting",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Thunderaffe",
      "rank": "F",
      "off": false,
      "m1": "Noble",
      "t1": "Figment",
      "q1": 9,
      "m2": "Fleeting",
      "t2": "Fancy",
      "q2": 5,
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
      "rank": "B",
      "off": false,
      "m1": "Rampant",
      "t1": "Fantasy",
      "q1": 1,
      "m2": "Troubling",
      "t2": "Fancy",
      "q2": 3,
      "pct": 60,
      "rare": "Escarglow"
    },
    {
      "sp": "Toximander",
      "rank": "B",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fancy",
      "q1": 4,
      "m2": "Troubling",
      "t2": "Fancy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Toximander",
      "rank": "C",
      "off": false,
      "m1": "Troubling",
      "t1": "Figment",
      "q1": 10,
      "m2": "Wondrous",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Toximander",
      "rank": "A",
      "off": false,
      "m1": "Troubling",
      "t1": "Fancy",
      "q1": 2,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 1,
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
      "rare": "Komory Bat"
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
      "rank": "C",
      "off": false,
      "m1": "Intrepid",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Noble",
      "t2": "Fancy",
      "q2": 4,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Tubguin Ace",
      "rank": "C",
      "off": false,
      "m1": "Vibrant",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Brilliant",
      "t2": "Fantasy",
      "q2": 1,
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
      "sp": "Tyranto Rex",
      "rank": "D",
      "off": true,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 1,
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
      "rare": "Skelterwild"
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
      "sp": "Ursa Circus",
      "rank": "C",
      "off": true,
      "m1": "Intrepid",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Ursa Circus",
      "rank": "B",
      "off": false,
      "m1": "Wondrous",
      "t1": "Fantasy",
      "q1": 12,
      "m2": "Epic",
      "t2": "Fantasy",
      "q2": 2,
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
      "rank": "A",
      "off": false,
      "m1": "Lofty",
      "t1": "Figment",
      "q1": 4,
      "m2": "Troubling",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 60,
      "rare": "Woeflower"
    },
    {
      "sp": "Wheeflower",
      "rank": "A",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
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
      "rank": "A",
      "off": false,
      "m1": "Lofty",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Troubling",
      "t2": "Fantasy",
      "q2": 2,
      "pct": 100,
      "rare": ""
    },
    {
      "sp": "Woeflower",
      "rank": "A",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 3,
      "m2": "Charming",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 60,
      "rare": "Necho Cat"
    },
    {
      "sp": "Woeflower",
      "rank": "B",
      "off": false,
      "m1": "Troubling",
      "t1": "Fancy",
      "q1": 6,
      "m2": "Wondrous",
      "t2": "Fancy",
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
      "rare": "Wheeflower"
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
      "rank": "B",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Grim",
      "t2": "Figment",
      "q2": 5,
      "pct": 70,
      "rare": "Cyber Yog"
    },
    {
      "sp": "Yoggy Ram",
      "rank": "B",
      "off": false,
      "m1": "Grim",
      "t1": "Fancy",
      "q1": 3,
      "m2": "Vibrant",
      "t2": "Fantasy",
      "q2": 1,
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
      "rank": "B",
      "off": false,
      "m1": "Dulcet",
      "t1": "Fantasy",
      "q1": 2,
      "m2": "Troubling",
      "t2": "Fantasy",
      "q2": 2,
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
    },
    {
      "sp": "Zolephant",
      "rank": "E",
      "off": false,
      "m1": "Intrepid",
      "t1": "Figment",
      "q1": 4,
      "m2": "Malleable",
      "t2": "Fantasy",
      "q2": 1,
      "pct": 100,
      "rare": ""
    }
  ],
  "spirits": [
    {
      "name": "Aura Lion",
      "hp": 47.8,
      "str": 11,
      "mag": 10.8,
      "def": 7.6,
      "exp": 1.21,
      "dp": "Savage Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1.15,
        "blz": 1.15,
        "thn": 1.15,
        "wtr": 1.15,
        "drk": 1.65,
        "lgt": 0.55
      },
      "attr": "Light",
      "style": "Physical/Light",
      "link": "Aura Raid",
      "disps": [
        {
          "n": "Lionheart",
          "b": "Employs a balanced set of attacks.",
          "sw": "To Paragon: Rub its hind legs and tail ; To Clear Mind: Poke its head or front legs and body ; To Noble: Rub its head or front legs and body"
        },
        {
          "n": "Paragon",
          "b": "Uses mostly normal aura attacks.",
          "sw": "To Lionheart: Poke its head ; To Clear Mind: Poke its front legs and body or hind legs and tail ; To Noble: Rub its front legs and body or hind legs and tail"
        },
        {
          "n": "Clear Mind",
          "b": "Uses mostly magic attacks.",
          "sw": "To Lionheart: Poke its front legs and body ; To Paragon: Rub its front legs and body ; To Noble: Rub its head or hind legs and tail"
        },
        {
          "n": "Noble",
          "b": "Uses mostly powerful aura attacks.",
          "sw": "To Lionheart: Poke its front legs and body or hind legs and tail ; To Paragon: Rub its front legs and body or hind legs and tail ; To Clear Mind: Poke its head"
        }
      ],
      "rank": "D"
    },
    {
      "name": "Beatalike",
      "hp": "???",
      "str": "???",
      "mag": "???",
      "def": "???",
      "exp": "???",
      "dp": "Savage Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1.1,
        "blz": 1.1,
        "thn": 1.1,
        "wtr": 0.5,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Water",
      "style": "Aqua",
      "link": "Berserker Bronco",
      "disps": [
        {
          "n": "Passionate",
          "b": "",
          "sw": "To Reaper: Rub its wings ; To Psychic: Poke its body ; To Groovy: Rub its"
        },
        {
          "n": "Reaper",
          "b": "",
          "sw": "To Passionate: Poke its tail ; To Psychic: Poke its wings ; To Groovy: Rub its face"
        },
        {
          "n": "Psychic",
          "b": "",
          "sw": "To Passionate: Poke its tail ; To Reaper: Rub its legs ; To Groovy: Rub its wings"
        },
        {
          "n": "Groovy",
          "b": "",
          "sw": "To Passionate: Poke its ; To Reaper: Rub its legs ; To Psychic: Poke its tail"
        }
      ],
      "rank": "C"
    },
    {
      "name": "Catanuki",
      "hp": "???",
      "str": "???",
      "mag": "???",
      "def": "???",
      "exp": "???",
      "dp": "Noble Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1,
        "blz": 1,
        "thn": 0.6,
        "wtr": 1,
        "drk": 1.15,
        "lgt": 1.15
      },
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Meow Wounce",
      "disps": [
        {
          "n": "Badger",
          "b": "",
          "sw": "To Civet: Rub its legs or rear and tail ; To Raccoon: Poke its head and body ; To Teakettle: Rub its head and body"
        },
        {
          "n": "Civet",
          "b": "",
          "sw": "To Badger: Poke its head and body or rear and tail ; To Raccoon: Poke its legs ; To Teakettle: Rub its legs"
        },
        {
          "n": "Raccoon",
          "b": "",
          "sw": "To Badger: Poke its head and body or legs ; To Civet: Rub its head and body or legs ; To Teakettle: Rub its rear and tail"
        },
        {
          "n": "Teakettle",
          "b": "",
          "sw": "To Badger: Poke its head and body ; To Civet: Rub its head and body ; To Raccoon: Poke its legs or rear and tail"
        }
      ],
      "rank": "D"
    },
    {
      "name": "Cera Terror",
      "hp": 50,
      "str": 11.2,
      "mag": 7.6,
      "def": 7.2,
      "exp": 1.15,
      "dp": "Intrepid Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1.05,
        "blz": 1.05,
        "thn": 1.05,
        "wtr": 1.05,
        "drk": 1.05,
        "lgt": 1.05
      },
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Roll Call",
      "disps": [
        {
          "n": "Demolisher",
          "b": "Uses stronger moves.",
          "sw": "To Buster: Rub its front legs and body ; To Drill Sarge: Poke its head and horns or hind legs and tail ; To Roll Meister: Rub its head and horns or hind legs and tail"
        },
        {
          "n": "Buster",
          "b": "Uses weaker moves.",
          "sw": "To Demolisher: Poke its head and horns ; To Drill Sarge: Poke its front legs and body or hind legs and tail ; To Roll Meister: Rub its front legs and body or hind legs and tail"
        },
        {
          "n": "Drill Sarge",
          "b": "Does not go into Spike Mode.",
          "sw": "To Demolisher: Poke its hind legs and tail ; To Buster: Rub its hind legs and tail ; To Roll Meister: Rub its head and horns or front legs and body"
        },
        {
          "n": "Roll Meister",
          "b": "Uses Spike Mode frequently.",
          "sw": "To Demolisher: Poke its head and horns or hind legs and tail ; To Buster: Rub its head and horns or hind legs and tail ; To Drill Sarge: Poke its front legs and body"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Chef Kyroo",
      "hp": 38.1,
      "str": 8.4,
      "mag": 10.8,
      "def": 6.9,
      "exp": 0.94,
      "dp": "Wondrous Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.55,
        "blz": 1.3,
        "thn": 1.1,
        "wtr": 1.6,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Fire",
      "style": "Fire",
      "link": "Decussation",
      "disps": [
        {
          "n": "Cuisiner",
          "b": "Attacks with weapon and Fire; tries to shield allies.",
          "sw": "To Commis: Rub its body or weapon and shield ; To Pâtissier: Poke its head and hat ; To Pyromanger: Rub its head and hat"
        },
        {
          "n": "Commis",
          "b": "Fewer attacks but more defense.",
          "sw": "To Cuisiner: Poke its head and hat or weapon and shield ; To Pâtissier: Poke its body ; To Pyromanger: Rub its body"
        },
        {
          "n": "Pâtissier",
          "b": "Mostly uses magic attacks.",
          "sw": "To Cuisiner: Poke its head and hat or body ; To Commis: Rub its head and hat or body ; To Pyromanger: Rub its weapon and shield"
        },
        {
          "n": "Pyromanger",
          "b": "Uses only Fire attacks.",
          "sw": "To Cuisiner: Poke its body ; To Commis: Rub its body ; To Pâtissier: Poke its head and hat or weapon and shield"
        }
      ],
      "rank": "F"
    },
    {
      "name": "Cyber Yog",
      "hp": 42.4,
      "str": 10,
      "mag": 10.8,
      "def": 7.5,
      "exp": 1.11,
      "dp": "Noble Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.2,
        "blz": 1.7,
        "thn": 0.6,
        "wtr": 1.2,
        "drk": 1.2,
        "lgt": 1.2
      },
      "attr": "Thunder",
      "style": "Thunder",
      "link": "Whirling Bronco",
      "disps": [
        {
          "n": "Blitzen",
          "b": "Uses horns in close and Yoggy Laser from a distance",
          "sw": "To Donner: Rub its head and horns or front legs and body ; To Comet: Poke its hind legs ; To Cupid: Rub its hind legs"
        },
        {
          "n": "Donner",
          "b": "Same as Blitzen but different laser sweep",
          "sw": "To Blitzen: Poke its head and horns or hind legs ; To Comet: Poke its front legs and body ; To Cupid: Rub its front legs and body"
        },
        {
          "n": "Comet",
          "b": "Mostly uses magic attacks",
          "sw": "To Blitzen: Poke its front legs and body or hind legs ; To Donner: Rub its front legs and body or hind legs ; To Cupid: Rub its head and horns"
        },
        {
          "n": "Cupid",
          "b": "Uses only laser attacks",
          "sw": "To Blitzen: Poke its head and horns ; To Donner: Rub its head and horns ; To Comet: Poke its front legs and body or hind legs"
        }
      ],
      "rank": "F"
    },
    {
      "name": "Drak Quack",
      "hp": 36,
      "str": 10,
      "mag": 8.2,
      "def": 6.7,
      "exp": 1,
      "dp": "Rampant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.45,
        "blz": 1.1,
        "thn": 0.9,
        "wtr": 1.4,
        "drk": 0.9,
        "lgt": 0.9
      },
      "attr": "Fire",
      "style": "Fire",
      "link": "Tail Groove",
      "disps": [
        {
          "n": "Firecracker",
          "b": "Prefers rockets and firecrackers",
          "sw": "To Bombshell: Rub its head or belly and wings ; To Helper: Poke its back ; To Troublemaker: Rub its back"
        },
        {
          "n": "Bombshell",
          "b": "Fights up close",
          "sw": "To Firecracker: Poke its head or back ; To Helper: Poke its belly and wings ; To Troublemaker: Rub its belly and wings"
        },
        {
          "n": "Helper",
          "b": "Somewhat long-range fighter that supports the player",
          "sw": "To Firecracker: Poke its belly and wings or back ; To Bombshell: Rub its belly and wings or back ; To Troublemaker: Rub its head"
        },
        {
          "n": "Troublemaker",
          "b": "Shoots everywhere, using Pinwheel as its main attack",
          "sw": "To Firecracker: Poke its head ; To Bombshell: Rub its belly and wings ; To Helper: Poke its belly and wings or back"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Drill Sye",
      "hp": 48.9,
      "str": 10.7,
      "mag": 7.6,
      "def": 7.1,
      "exp": 1.09,
      "dp": "Noble Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1.1,
        "blz": 1.1,
        "thn": 1.1,
        "wtr": 1.1,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Roll Call",
      "disps": [
        {
          "n": "Destroyer",
          "b": "Uses stronger moves",
          "sw": "To Bumper: Rub its head and horns or front legs and body ; To Drill Sarge: Poke its hind legs and tail ; To Roll Meister: Rub its hind legs and tail"
        },
        {
          "n": "Bumper",
          "b": "Uses weaker moves",
          "sw": "To Destroyer: Poke its front legs and body or hind legs and tail ; To Drill Sarge: Poke its head and horns ; To Roll Meister: Rub its head and horns"
        },
        {
          "n": "Drill Sarge",
          "b": "Does not go into Spike Mode",
          "sw": "To Destroyer: Poke its head and horns or hind legs and tail ; To Bumper: Rub its head and horns or hind legs and tail ; To Roll Meister: Rub its front legs and body"
        },
        {
          "n": "Roll Meister",
          "b": "Uses Spike Mode frequently",
          "sw": "To Destroyer: Poke its head and horns ; To Bumper: Rub its head and horns ; To Drill Sarge: Poke its front legs and body or hind legs and tail"
        }
      ],
      "rank": "D"
    },
    {
      "name": "Ducky Goose",
      "hp": 34.9,
      "str": 7.9,
      "mag": 9.8,
      "def": 6.6,
      "exp": 0.92,
      "dp": "Dulcet Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.45,
        "blz": 0.45,
        "thn": 0.95,
        "wtr": 0.85,
        "drk": 0.95,
        "lgt": 0.95
      },
      "attr": "Blizzard",
      "style": "Physical/Light",
      "link": "Tail Groove",
      "disps": [
        {
          "n": "Hard Worker",
          "b": "Basic attacks",
          "sw": "To Wild Card: Rub its belly and wings or back ; To Wingman: Poke its head ; To Gift-Giver: Rub its head"
        },
        {
          "n": "Wild Card",
          "b": "Uses items in a different pattern",
          "sw": "To Hard Worker: Poke its head and back ; To Wingman: Poke its belly and wings ; To Gift-Giver: Rub its belly and wings"
        },
        {
          "n": "Wingman",
          "b": "Supports with magic",
          "sw": "To Hard Worker: Poke its head or belly and wings ; To Wild Card: Rub its head or belly and wings ; To Gift-Giver: Rub its bacl"
        },
        {
          "n": "Gift-Giver",
          "b": "Actively uses items",
          "sw": "To Hard Worker: Poke its belly and wings ; To Wild Card: Rub its belly and wings ; To Wingman: Poke its head or back"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Eaglider",
      "hp": 43.5,
      "str": 10.5,
      "mag": 8.1,
      "def": 6.4,
      "exp": 1.07,
      "dp": "Lofty Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 0.5,
        "blz": 1.2,
        "thn": 1,
        "wtr": 1.5,
        "drk": 1,
        "lgt": 1
      },
      "attr": "Fire",
      "style": "Fire",
      "link": "Fly-By Knight",
      "disps": [
        {
          "n": "Ace",
          "b": "Normal attacks",
          "sw": "To Vulcan: Rub its body and tail or wings ; To Bomber: Poke its head and chest ; To Tracer: Rub its head and chest"
        },
        {
          "n": "Vulcan",
          "b": "Favors its Vulcan Strafe attack",
          "sw": "To Ace: Poke its head and chest or wings ; To Bomber: Poke its body and tail ; To Tracer: Rub its body and tail"
        },
        {
          "n": "Bomber",
          "b": "Only does Air Raid bomb runs",
          "sw": "To Ace: Poke its head and chest or body and tail ; To Vulcan: Rub its head and chest or body and tail ; To Tracer: Rub its wings"
        },
        {
          "n": "Tracer",
          "b": "Only does Feather Missile attacks",
          "sw": "To Ace: Poke its wings ; To Vulcan: Rub its wings ; To Bomber: Poke its head and chest or body and tail"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Electricorn",
      "hp": 46.8,
      "str": 10.2,
      "mag": 10.3,
      "def": 7.2,
      "exp": 1.18,
      "dp": "Fleeting Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1.1,
        "blz": 1.6,
        "thn": 0.55,
        "wtr": 1.1,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Thunder",
      "style": "Thunder",
      "link": "Equestrian Raid",
      "disps": [
        {
          "n": "Shock Therapist",
          "b": "Uses Thunder only as it adapts to the situation",
          "sw": "To Capacitor: Rub its head or front legs and body ; To Tempest: Poke its hind legs and tail ; To Lightning Bolt: Rub its hind legs and tail"
        },
        {
          "n": "Capacitor",
          "b": "Charges up Thunder, then takes action",
          "sw": "To Shock Therapist: Poke its front legs and body or hind legs and tail ; To Tempest: Poke its head ; To Lightning Bolt: Rub its head"
        },
        {
          "n": "Tempest",
          "b": "Mostly magic attacks",
          "sw": "To Shock Therapist: Poke its head or hind legs and tail ; To Capacitor: Rub its head or hind legs and tail ; To Lightning Bolt: Rub its front legs and body"
        },
        {
          "n": "Lightning Bolt",
          "b": "Attacks quickly; doesn't bother charging up Thunder",
          "sw": "To Shock Therapist: Poke its hind legs and tail ; To Capacitor: Rub its hind legs and tail ; To Tempest: Poke its head or front legs and body"
        }
      ],
      "rank": "D"
    },
    {
      "name": "Escarglow",
      "hp": 34.9,
      "str": 10.2,
      "mag": 10.3,
      "def": 7.2,
      "exp": 0.97,
      "dp": "Lofty Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.1,
        "blz": 1.1,
        "thn": 1.1,
        "wtr": 1.1,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Physical",
      "style": "Aqua",
      "link": "Roll Call",
      "disps": [
        {
          "n": "Blindsider",
          "b": "Keeps coming at enemies aggressively",
          "sw": "To Snail Support: Rub its head and eyeballs ; To Conjurer: Poke its body or shell ; To Brick Wall: Rub its body or shell"
        },
        {
          "n": "Snail Support",
          "b": "Attacks while supporting its allies",
          "sw": "To Blindsider: Poke its shell ; To Conjurer: Poke its head and eyeballs or body ; To Brick Wall: Rub its head and eyeballs or body"
        },
        {
          "n": "Conjurer",
          "b": "Mostly uses magic attacks",
          "sw": "To Blindsider: Poke its body ; To Snail Support: Rub its body ; To Brick Wall: Rub its head and eyeballs or shell"
        },
        {
          "n": "Brick Wall",
          "b": "Prides itself on its iron-clad defense",
          "sw": "To Blindsider: Poke its body or shell ; To Snail Support: Rub its body or shell ; To Conjurer: Poke its head and eyeballs"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Fin Fatale",
      "hp": 36,
      "str": 8.4,
      "mag": 8.4,
      "def": 7.1,
      "exp": 0.87,
      "dp": "Rampant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1,
        "blz": 1,
        "thn": 1.5,
        "wtr": 0.5,
        "drk": 1,
        "lgt": 1
      },
      "attr": "Water",
      "style": "Aqua",
      "link": "Water Blaster",
      "disps": [
        {
          "n": "Grunt",
          "b": "Aggressive with normal range of attacks",
          "sw": "To Charger: Rub its head ; To Water Slinger: Poke its body or tail fin ; To Diver: Rub its body or tail fin"
        },
        {
          "n": "Charger",
          "b": "Often rushes in from mid-range",
          "sw": "To Grunt: Poke its body ; To Water Slinger: Poke its head or tail fin ; To Diver: Rub its head or tail fin"
        },
        {
          "n": "Water Slinger",
          "b": "Mainly uses Power Spout from long range",
          "sw": "To Grunt: Poke its tail fin ; To Charger: Rub its tail fin ; To Diver: Rub its head or body"
        },
        {
          "n": "Diver",
          "b": "Repeatedly uses the Fishapult dive attack",
          "sw": "To Grunt: Poke its body or tail fin ; To Charger: Rub its body or tail fin ; To Water Slinger: Poke its head"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Fishboné",
      "hp": 32.7,
      "str": 8.7,
      "mag": 8.4,
      "def": 7.5,
      "exp": 0.88,
      "dp": "Wondrous Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1,
        "blz": 1,
        "thn": 1,
        "wtr": 1,
        "drk": 0.5,
        "lgt": 1.5
      },
      "attr": "Dark",
      "style": "Dark",
      "link": "Water Blaster",
      "disps": [
        {
          "n": "Raider",
          "b": "Uses normal range of attacks",
          "sw": "To Anchor: Rub its body ; To Hitman: Poke its head or tail fin ; To Bonehead: Rub its head or tail fin"
        },
        {
          "n": "Anchor",
          "b": "Favors Land Swimmer attack",
          "sw": "To Raider: Poke its tail fin ; To Hitman: Poke its head or body ; To Bonehead: Rub its head or body"
        },
        {
          "n": "Hitman",
          "b": "Favors Power Spout from long range",
          "sw": "To Raider: Poke its head ; To Anchor: Rub its head ; To Bonehead: Rub its body or tail fin"
        },
        {
          "n": "Bonehead",
          "b": "Repeatedly uses Fishapult",
          "sw": "To Raider: Poke its head or tail fin ; To Anchor: Rub its head or tail fin ; To Hitman: Poke its body"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Flowbermeow",
      "hp": 39.2,
      "str": 9.7,
      "mag": 11.7,
      "def": 7.2,
      "exp": 1.16,
      "dp": "Malleable Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1,
        "blz": 1,
        "thn": 1,
        "wtr": 1,
        "drk": 1.5,
        "lgt": 0.5
      },
      "attr": "Light",
      "style": "Physical/Light",
      "link": "Meow Wounce",
      "disps": [
        {
          "n": "Fido",
          "b": "Uses all attacks and actively attacks its enemies in a balanced manner",
          "sw": "To Rover: Rub its legs or rear and tail ; To Whiskers: Poke its head and body ; To Mittens: Rub its head and body"
        },
        {
          "n": "Rover",
          "b": "Reckless type that attacks with only Horn Bounce",
          "sw": "To Fido: Poke its head and body or rear and tail ; To Whiskers: Poke its legs ; To Mittens: Rub its legs"
        },
        {
          "n": "Whiskers",
          "b": "Mostly participates by doing magic attacks",
          "sw": "To Fido: Poke its head and body or legs ; To Rover: Rub its head and body or legs ; To Mittens: Rub its rear and tail"
        },
        {
          "n": "Mittens",
          "b": "Devotes itself more to replenishing allies' HP attacking",
          "sw": "To Fido: Poke its head and body ; To Rover: Rub its head and body ; To Whiskers: Poke its legs or rear and tail"
        }
      ],
      "rank": "C"
    },
    {
      "name": "Frootz Cat",
      "hp": 41.9,
      "str": 9.7,
      "mag": 10.3,
      "def": 6.7,
      "exp": 1.3,
      "dp": "Charming Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.85,
        "blz": 0.85,
        "thn": 0.85,
        "wtr": 0.85,
        "drk": 0.4,
        "lgt": 1.35
      },
      "attr": "Dark",
      "style": "Dark",
      "link": "Paw Groove",
      "disps": [
        {
          "n": "Mixed Bag",
          "b": "Uses basic set of attacks and recovery",
          "sw": "To Pretty Kitty: Rub its head and chest ; To Catnipper: Poke its body and tail or legs ; To Sweetheart: Rub its body and tail or legs"
        },
        {
          "n": "Pretty Kitty",
          "b": "Constantly spinning around",
          "sw": "To Mixed Bag: Poke its legs ; To Catnipper: Poke its head and chest or body and tail ; To Sweetheart: Rub its head and chest or body and tail"
        },
        {
          "n": "Catnipper",
          "b": "Launches attacks from long range; conjures Musical Storm when close",
          "sw": "To Mixed Bag: Poke its body and tail ; To Pretty Kitty: Rub its body and tail ; To Sweetheart: Rub its head and chest or legs"
        },
        {
          "n": "Sweetheart",
          "b": "Uses only music magic",
          "sw": "To Mixed Bag: Poke its head and chest or body and tail ; To Pretty Kitty: Rub its head and chest or body and tail ; To Catnipper: Poke its legs"
        }
      ],
      "rank": "C"
    },
    {
      "name": "Ghostabocky",
      "hp": 37,
      "str": 10,
      "mag": 9.5,
      "def": 6.2,
      "exp": 1.01,
      "dp": "Troubling Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.9,
        "blz": 0.9,
        "thn": 0.9,
        "wtr": 0.9,
        "drk": 0.45,
        "lgt": 1.4
      },
      "attr": "Dark",
      "style": "Dark",
      "link": "Vacuum Ghost",
      "disps": [
        {
          "n": "Big Eater",
          "b": "Lots of close-range, direct attacks",
          "sw": "To Phantom: Rub its hat or face and belly ; To Shaman: Poke its back ; To Split Personality: Rub its back"
        },
        {
          "n": "Phantom",
          "b": "Balanced type with Icy Reflux as its go-to attack",
          "sw": "To Big Eater: Poke its hat or back ; To Shaman: Poke its face and belly ; To Split Personality: Rub its face and belly"
        },
        {
          "n": "Shaman",
          "b": "Only magic-type actions",
          "sw": "To Big Eater: Poke its face and belly or back ; To Phantom: Rub its face and belly or back ; To Split Personality: Rub its hat"
        },
        {
          "n": "Split Personality",
          "b": "Acts in a pattern that uses Go Go Ghostling",
          "sw": "To Big Eater: Poke its hat ; To Phantom: Rub its hat ; To Shaman: Poke its face and belly or back"
        }
      ],
      "rank": "F"
    },
    {
      "name": "Halbird",
      "hp": 43.5,
      "str": 10.7,
      "mag": 8.1,
      "def": 6.6,
      "exp": 1.11,
      "dp": "Lofty Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1,
        "blz": 1,
        "thn": 1,
        "wtr": 1,
        "drk": 1.5,
        "lgt": 0.5
      },
      "attr": "Light",
      "style": "Physical/Light",
      "link": "Fly-By Knight",
      "disps": [
        {
          "n": "Sky Master",
          "b": "Uses normal attacks in a well-balanced fashion",
          "sw": "To Harrier: Rub its head and chest ; To Assassin: Poke its body and tail or wings ; To Commander: Rub its body and tail or wings"
        },
        {
          "n": "Harrier",
          "b": "Likes to attack with Vertical Dives",
          "sw": "To Sky Master: Poke its body and tail ; To Assassin: Poke its head and chest or wings ; To Commander: Rub its head and chest or wings"
        },
        {
          "n": "Assassin",
          "b": "Attacks specific targets from up in the air",
          "sw": "To Sky Master: Poke its wings ; To Harrier: Rub its wings ; To Commander: Rub its head and chest or body and tail"
        },
        {
          "n": "Commander",
          "b": "Favors ranged attacks from long distance",
          "sw": "To Sky Master: Poke its head and chest or body and tail ; To Harrier: Rub its head and chest or body and tail ; To Assassin: Poke its wings"
        }
      ],
      "rank": "D"
    },
    {
      "name": "Hebby Repp",
      "hp": 34.9,
      "str": 9.5,
      "mag": 8.4,
      "def": 6.2,
      "exp": 0.86,
      "dp": "Vibrant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.45,
        "blz": 1.1,
        "thn": 0.9,
        "wtr": 1.4,
        "drk": 0.9,
        "lgt": 0.9
      },
      "attr": "Fire",
      "style": "Fire",
      "link": "Flame Thrower",
      "disps": [
        {
          "n": "Wheeler",
          "b": "Mostly uses the Burning Rubber attack",
          "sw": "To Salamander: Rub its head ; To Serpent: Poke its head or body and legs ; To Hydra: Rub its body and legs or tail"
        },
        {
          "n": "Salamander",
          "b": "Uses only fire attacks and shoots fireballs",
          "sw": "To Wheeler: Poke its body and legs ; To Serpent: Poke its head or tail ; To Hydra: Rub its head or tail"
        },
        {
          "n": "Serpent",
          "b": "Uses all attacks but doesn't lose its temper",
          "sw": "To Wheeler: Poke its head ; To Salamander: Rub its tail ; To Hydra: Rub its head or body and legs"
        },
        {
          "n": "Hydra",
          "b": "Goes Hebby Berserk as soon as battle starts",
          "sw": "To Wheeler: Poke its head or tail ; To Salamander: Rub its head or tail ; To Serpent: Poke its body and legs"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Iceguin Ace",
      "hp": 38.1,
      "str": 9.2,
      "mag": 11.1,
      "def": 6.8,
      "exp": 1.06,
      "dp": "Rampant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.6,
        "blz": 0.55,
        "thn": 1.1,
        "wtr": 1,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Blizzard",
      "style": "Aqua",
      "link": "Belly Raid",
      "disps": [
        {
          "n": "Skater",
          "b": "Aggressive; likes to slide toward enemies",
          "sw": "To Wingman: Rub its back ; To Slider: Poke its head and neck or belly ; To Birdbrain: Rub its head and neck or belly"
        },
        {
          "n": "Wingman",
          "b": "Mainly support role",
          "sw": "To Skater: Poke its belly ; To Slider: Poke its head and neck or back ; To Birdbrain: Rub its head and neck or back"
        },
        {
          "n": "Slider",
          "b": "Hurls ice from afar",
          "sw": "To Skater: Poke its head and neck ; To Wingman: Rub its head and neck ; To Birdbrain: Rub its belly or back"
        },
        {
          "n": "Birdbrain",
          "b": "Bets it all on flying Ice Dive",
          "sw": "To Skater: Poke its head and neck or belly ; To Wingman: Rub its head and neck or belly ; To Slider: Poke its back"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Jestabocky",
      "hp": 37,
      "str": 10,
      "mag": 9.2,
      "def": 6.2,
      "exp": 0.99,
      "dp": "Vibrant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.9,
        "blz": 1.4,
        "thn": 0.45,
        "wtr": 0.9,
        "drk": 0.9,
        "lgt": 0.9
      },
      "attr": "Thunder",
      "style": "Thunder",
      "link": "Vacuum Ghost",
      "disps": [
        {
          "n": "Picky Eater",
          "b": "When at a distance it transforms into a prize, then attacks when enemies get close",
          "sw": "To Flake: Rub its hat ; To Chicken: Poke its face and belly or back ; To Gourmand: Rub its face and belly or back"
        },
        {
          "n": "Flake",
          "b": "Well balanced but only attacks at random",
          "sw": "To Picky Eater: Poke its face and belly ; To Chicken: Poke its hat or back ; To Gourmand: Rub its hat or back"
        },
        {
          "n": "Chicken",
          "b": "Keeps its distance and attacks",
          "sw": "To Picky Eater: Poke its back ; To Flake: Rub its back ; To Gourmand: Rub its hat or face and belly"
        },
        {
          "n": "Gourmand",
          "b": "Frequently tries to chomp or slurp enemies",
          "sw": "To Picky Eater: Poke its face and belly or back ; To Flake: Rub its face and belly or back ; To Chicken: Poke its hat"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Juggle Pup",
      "hp": 39.2,
      "str": 9.5,
      "mag": 9.5,
      "def": 6.9,
      "exp": 0.96,
      "dp": "Vibrant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.6,
        "blz": 0.55,
        "thn": 1.1,
        "wtr": 1,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Blizzard",
      "style": "Aqua",
      "link": "Lucky Dice",
      "disps": [
        {
          "n": "Acrobat",
          "b": "Uses stronger moves",
          "sw": "To Prestidigitator: Poke its back ; To Swindler: Rub its back"
        },
        {
          "n": "Half-Pint",
          "b": "Uses weaker moves",
          "sw": "To Acrobat: Poke its head or back ; To Prestidigitator: Poke its belly and arms ; To Swindler: Rub its belly and arms"
        },
        {
          "n": "Prestidigitator",
          "b": "Uses all beach ball attacks",
          "sw": "To Acrobat: Poke its belly and arms or back ; To Half-Pint: Rub its belly and arms or back ; To Swindler: Rub its head"
        },
        {
          "n": "Swindler",
          "b": "Uses all dice attacks",
          "sw": "To Acrobat: Poke its belly and arms ; To Half-Pint: Rub its belly and arms ; To Prestidigitator: Poke its head or back"
        }
      ],
      "rank": "D"
    },
    {
      "name": "KO Kabuto",
      "hp": 37,
      "str": 9.7,
      "mag": 9.8,
      "def": 8.1,
      "exp": 1.07,
      "dp": "Noble Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.1,
        "blz": 1.1,
        "thn": 1.1,
        "wtr": 1.1,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Physical",
      "style": "Fire",
      "link": "Target Shot",
      "disps": [
        {
          "n": "Tank",
          "b": "Aims for its enemies with shot-type attacks like Tracer",
          "sw": "To Grenadier: Rub its belly and arms and legs or back ; To Bodyguard: Poke its head and horn ; To Launcher: Rub its head and horn"
        },
        {
          "n": "Grenadier",
          "b": "Does exploding support attacks with Mortar",
          "sw": "To Tank: Poke its head and horn or back ; To Bodyguard: Poke its belly and arms and legs ; To Launcher: Rub its belly and arms and legs"
        },
        {
          "n": "Bodyguard",
          "b": "Tries to protect its allies with Support Shot",
          "sw": "To Tank: Poke its head and horn or belly and arms and legs ; To Grenadier: Rub its head and horn or belly and arms and legs ; To Launcher: Rub its back"
        },
        {
          "n": "Launcher",
          "b": "Uses Magic Shot to inflict special damages",
          "sw": "To Tank: Poke its belly and arms and legs ; To Grenadier: Rub its belly and arms and legs ; To Bodyguard: Poke its head and horn or back"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Kab Kannon",
      "hp": 40.7,
      "str": 10.2,
      "mag": 10.3,
      "def": 8.1,
      "exp": 1.28,
      "dp": "Brilliant Fantasy [ KH 3D ] Epic Fantasy [ KH 3D HD ]",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.9,
        "blz": 0.9,
        "thn": 0.9,
        "wtr": 0.9,
        "drk": 0.9,
        "lgt": 0.9
      },
      "attr": "Physical",
      "style": "Fire",
      "link": "Target Shot",
      "disps": [
        {
          "n": "Striker",
          "b": "Aims for its enemies with shot-type attacks",
          "sw": "To Ack-Ack: Rub its back ; To Bodyguard: Poke its head and horn or belly and arms and legs ; To Launcher: Rub its head and horn or belly and arms and legs"
        },
        {
          "n": "Ack-Ack",
          "b": "Does exploding support attacks with Mortar",
          "sw": "To Striker: Poke its belly and arms and legs ; To Bodyguard: Poke its head and horn or back ; To Launcher: Rub its head and horn or back"
        },
        {
          "n": "Bodyguard",
          "b": "Tries to protect its allies with Support Shot",
          "sw": "To Striker: Poke its head and horn ; To Ack-Ack: Rub its head and horn ; To Launcher: Rub its belly and arms and legs or back"
        },
        {
          "n": "Launcher",
          "b": "Uses Magic Shot and inflicts special damage",
          "sw": "To Striker: Poke its belly and arms and legs or back ; To Ack-Ack: Rub its belly and arms and legs or back ; To Bodyguard: Poke its head and horn"
        }
      ],
      "rank": "C"
    },
    {
      "name": "Keeba Tiger",
      "hp": 48.9,
      "str": 11.2,
      "mag": 10.3,
      "def": 7.7,
      "exp": 1.22,
      "dp": "Brilliant Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1.15,
        "blz": 1.15,
        "thn": 1.15,
        "wtr": 1.15,
        "drk": 0.55,
        "lgt": 1.65
      },
      "attr": "Dark",
      "style": "Dark",
      "link": "Aura Raid",
      "disps": [
        {
          "n": "Conqueror",
          "b": "Occasionally uses charged attacks",
          "sw": "To Usurper: Rub its head or hind legs and tail ; To Cruel Mind: Poke its front legs and body ; To Force of Nature: Rub its front legs and body"
        },
        {
          "n": "Usurper",
          "b": "Doesn't charge up before attacks",
          "sw": "To Conqueror: Poke its front legs and body or hind legs and tail ; To Cruel Mind: Poke its head ; To Force of Nature: Rub its head"
        },
        {
          "n": "Cruel Mind",
          "b": "Uses magic attacks",
          "sw": "To Conqueror: Poke its head or front legs and body ; To Usurper: Rub its head or front legs and body ; To Force of Nature: Rub its hind legs and tail"
        },
        {
          "n": "Force of Nature",
          "b": "Only charged attacks",
          "sw": "To Conqueror: Poke its hind legs and tail ; To Usurper: Rub its hind legs and tail ; To Cruel Mind: Poke its head or front legs and body"
        }
      ],
      "rank": "D"
    },
    {
      "name": "Komory Bat",
      "hp": 32.7,
      "str": 8.2,
      "mag": 10.8,
      "def": 5.9,
      "exp": 0.9,
      "dp": "Troubling Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.9,
        "blz": 0.9,
        "thn": 0.9,
        "wtr": 0.9,
        "drk": 0.45,
        "lgt": 1.4
      },
      "attr": "Dark",
      "style": "Dark",
      "link": "Fly-By Knight",
      "disps": [
        {
          "n": "Aggro",
          "b": "Actively attacks, concentrating on direct strikes",
          "sw": "To Wingman: Rub its ears or wings ; To Rescuer: Poke its ears or head ; To Saboteur: Rub its head"
        },
        {
          "n": "Wingman",
          "b": "Support attack type; uses indirect attacks from mid-range",
          "sw": "To Aggro: Poke its ears ; To Rescuer: Poke its wings or head ; To Saboteur: Rub its wings"
        },
        {
          "n": "Rescuer",
          "b": "Mainly supports its allies with healing/recovery",
          "sw": "To Aggro: Poke its head ; To Wingman: Rub its wings or head ; To Saboteur: Rub its ears"
        },
        {
          "n": "Saboteur",
          "b": "Causes chaos by mainly inflicting status ailments",
          "sw": "To Aggro: Poke its ears ; To Wingman: Rub its ears or wings ; To Rescuer: Poke its wings or head"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Kooma Panda",
      "hp": 46.8,
      "str": 10.2,
      "mag": 7.9,
      "def": 6.9,
      "exp": 1.03,
      "dp": "Vibrant Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1.05,
        "blz": 1.05,
        "thn": 1.05,
        "wtr": 1.05,
        "drk": 1.05,
        "lgt": 1.05
      },
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Swing Fling",
      "disps": [
        {
          "n": "Boxer",
          "b": "Mostly uses Panda Punch to engage",
          "sw": "To Wrestler: Rub its head ; To Bruiser: Poke its belly and arms or back and tail ; To Grappler: Rub its belly and arms or back and tail"
        },
        {
          "n": "Wrestler",
          "b": "Mostly uses Kooma Tackle to engage",
          "sw": "To Boxer: Poke its belly and arms ; To Bruiser: Poke its head or back and tail ; To Grappler: Rub its head or back and tail"
        },
        {
          "n": "Bruiser",
          "b": "Adds Tea Table attack to repertoire",
          "sw": "To Boxer: Poke its back and tail ; To Wrestler: Rub its back and tail ; To Grappler: Rub its head or belly and arms"
        },
        {
          "n": "Grappler",
          "b": "Only does close-range attacks; never leaves its enemy alone",
          "sw": "To Boxer: Poke its head or back and tail ; To Wrestler: Rub its head or back and tail ; To Bruiser: Poke its belly and arms"
        }
      ],
      "rank": "F"
    },
    {
      "name": "Lord Kyroo",
      "hp": 36,
      "str": 9.7,
      "mag": 10.6,
      "def": 7.3,
      "exp": 1.13,
      "dp": "Brilliant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1,
        "blz": 1.5,
        "thn": 0.5,
        "wtr": 1,
        "drk": 1,
        "lgt": 1
      },
      "attr": "Thunder",
      "style": "Thunder",
      "link": "Decussation",
      "disps": [
        {
          "n": "Warmonger",
          "b": "Actively attacks",
          "sw": "To Populist: Rub its head and crown or weapon and shield ; To Empiricist: Poke its body ; To Selfless Ruler: Rub its body"
        },
        {
          "n": "Populist",
          "b": "Balanced",
          "sw": "To Warmonger: Poke its head and crown or body ; To Empiricist: Poke its weapon and shield ; To Selfless Ruler: Rub its weapon and shield"
        },
        {
          "n": "Empiricist",
          "b": "Especially good with magic attacks/support",
          "sw": "To Warmonger: Poke its body or weapon and shield ; To Populist: Rub its body or weapon and shield ; To Selfless Ruler: Rub its head and crown"
        },
        {
          "n": "Selfless Ruler",
          "b": "Especially good at using its body to guard",
          "sw": "To Warmonger: Poke its weapon and shield ; To Populist: Rub its weapon and shield ; To Empiricist: Poke its head and crown or body"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Majik Lapin",
      "hp": 37,
      "str": 8.4,
      "mag": 11.1,
      "def": 6.8,
      "exp": 1.02,
      "dp": "Dulcet Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.9,
        "blz": 0.9,
        "thn": 0.9,
        "wtr": 0.9,
        "drk": 0.45,
        "lgt": 1.4
      },
      "attr": "Dark",
      "style": "Thunder",
      "link": "Swing Fling",
      "disps": [
        {
          "n": "Mage",
          "b": "Combines magic and hand-to-hand combat",
          "sw": "To Spark Jockey: Rub its head ; To Accomplice: Poke its ears or body ; To Illusionist: Rub its ears or body"
        },
        {
          "n": "Spark Jockey",
          "b": "Prefers Fire and Dark attacks",
          "sw": "To Mage: Poke its body ; To Accomplice: Poke its ears or head ; To Illusionist: Rub its ears or head"
        },
        {
          "n": "Accomplice",
          "b": "Generally supports your main character",
          "sw": "To Mage: Poke its ears ; To Spark Jockey: Rub its ears ; To Illusionist: Rub its head or body"
        },
        {
          "n": "Illusionist",
          "b": "Powerful magic commands and status ailments",
          "sw": "To Mage: Poke its head or body ; To Spark Jockey: Rub its head or body ; To Accomplice: Poke its ears"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Me Me Bunny",
      "hp": 36,
      "str": 10.5,
      "mag": 8.4,
      "def": 6.7,
      "exp": 0.95,
      "dp": "Intrepid Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.9,
        "blz": 0.9,
        "thn": 0.9,
        "wtr": 0.9,
        "drk": 0.9,
        "lgt": 0.9
      },
      "attr": "Physical",
      "style": "Thunder",
      "link": "Swing Fling",
      "disps": [
        {
          "n": "Bruiser",
          "b": "Likes to engage in bare-knuckled fights.",
          "sw": "To Spinner: Rub its ears or body ; To Space Invader: Poke its head ; To Hopper: Rub its head"
        },
        {
          "n": "Spinner",
          "b": "Repeats a pattern of hopping around and then resting.",
          "sw": "To Bruiser: Poke its ears or head ; To Space Invader: Poke its body ; To Hopper: Rub its body"
        },
        {
          "n": "Space Invader",
          "b": "Dashes in with its Me Me Cross then hits with a combo.",
          "sw": "To Bruiser: Poke its ears or head ; To Spinner: Rub its ears or head ; To Hopper: Rub its body"
        },
        {
          "n": "Hopper",
          "b": "Bounces around doing attacks that hit multiple targets.",
          "sw": "To Bruiser: Poke its head ; To Spinner: Rub its head ; To Space Invader: Poke its ears o body"
        }
      ],
      "rank": "F"
    },
    {
      "name": "Meow Wow",
      "hp": 36,
      "str": 8.4,
      "mag": 11.1,
      "def": 6.6,
      "exp": 0.9,
      "dp": "Rampant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.05,
        "blz": 1.05,
        "thn": 1.05,
        "wtr": 1.05,
        "drk": 1.05,
        "lgt": 1.05
      },
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Meow Wounce",
      "disps": [
        {
          "n": "Stray",
          "b": "Aggressively uses all horn attacks",
          "sw": "To Rascal: Rub its head and body or rear and tail ; To Smart Cookie: Poke its legs or rear and tail ; To Sidekick: Rub its legs"
        },
        {
          "n": "Rascal",
          "b": "Attacks recklessly with leaping Horn Dives",
          "sw": "To Stray: Poke its legs ; To Smart Cookie: Poke its head and body or rear and tail ; To Sidekick: Rub its rear and tail"
        },
        {
          "n": "Smart Cookie",
          "b": "Mostly participates by doing magic attacks",
          "sw": "To Stray: Poke its rear and tail ; To Rascal: Rub its legs or rear and tail ; To Sidekick: Rub its head and body"
        },
        {
          "n": "Sidekick",
          "b": "Devotes itself more to replenishing allies' HP",
          "sw": "To Stray: Poke its legs ; To Rascal: Rub its legs or rear and tail ; To Smart Cookie: Poke its head and body or rear and tail"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Meowjesty",
      "hp": 39.6,
      "str": 8.9,
      "mag": 11.7,
      "def": 6.6,
      "exp": 1.08,
      "dp": "Malleable Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.05,
        "blz": 1.05,
        "thn": 1.05,
        "wtr": 1.05,
        "drk": 1.05,
        "lgt": 1.05
      },
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Meow Wounce",
      "disps": [
        {
          "n": "Wild Animal",
          "b": "Actively pursues melee attacks with its horn",
          "sw": "To Pouncer: Rub its legs ; To Magician: Poke its head and body or rear and tail ; To Best Friend: Rub its head and body or rear and tail"
        },
        {
          "n": "Pouncer",
          "b": "Prefers Horn Bounce",
          "sw": "To Wild Animal: Poke its head and body ; To Magician: Poke its legs or rear and tail ; To Best Friend: Rub its legs or rear and tail"
        },
        {
          "n": "Magician",
          "b": "Adds magic attacks",
          "sw": "To Wild Animal: Poke its rear and tail ; To Pouncer: Rub its rear and tail ; To Best Friend: Rub its head and body or legs"
        },
        {
          "n": "Best Friend",
          "b": "Attacks regularly but replenishes allies' HP when low",
          "sw": "To Wild Animal: Poke its head and body or legs ; To Pouncer: Rub its head and body or legs ; To Magician: Poke its rear and tail"
        }
      ],
      "rank": "C"
    },
    {
      "name": "Necho Cat",
      "hp": 38.1,
      "str": 9.2,
      "mag": 9.8,
      "def": 6.7,
      "exp": 1.09,
      "dp": "Dulcet Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.85,
        "blz": 0.85,
        "thn": 0.85,
        "wtr": 0.85,
        "drk": 0.4,
        "lgt": 1.35
      },
      "attr": "Dark",
      "style": "Dark",
      "link": "Paw Groove",
      "disps": [
        {
          "n": "Multi-Talent",
          "b": "Normal actions",
          "sw": "To Dancer: Rub its body and tail or legs ; To Diva: Poke its head and chest ; To Artist: Rub its head and chest"
        },
        {
          "n": "Dancer",
          "b": "Constantly spinning around",
          "sw": "To Diva: Poke its legs ; To Artist: Rub its legs"
        },
        {
          "n": "Diva",
          "b": "Launches attacks from long range; conjures Musical Storm when close",
          "sw": "To Dancer: Rub its head and chest or legs ; To Artist: Rub its body and tail"
        },
        {
          "n": "Artist",
          "b": "Uses only music magic",
          "sw": "To Dancer: Rub its head and chest ; To Diva: Poke its body and tail or legs"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Peepsta Hoo",
      "hp": 36,
      "str": 8.4,
      "mag": 8.4,
      "def": 7.1,
      "exp": 0.93,
      "dp": "Wondrous Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.95,
        "blz": 0.95,
        "thn": 0.95,
        "wtr": 0.95,
        "drk": 0.45,
        "lgt": 1.45
      },
      "attr": "Dark",
      "style": "Dark",
      "link": "Fly-By Knight",
      "disps": [
        {
          "n": "Watcher",
          "b": "Scans for weaknesses, then attacks accordingly",
          "sw": "To Sweeper: Rub its head or belly and wings ; To Scout: Poke its back ; To Patroller: Rub its back"
        },
        {
          "n": "Sweeper",
          "b": "Doesn't use Scan; attacks with Feather Shuriken only",
          "sw": "To Watcher: Poke its back ; To Scout: Poke its belly and wings ; To Patroller: Rub its belly and wings"
        },
        {
          "n": "Scout",
          "b": "Uses Scan and fights with magic",
          "sw": "To Watcher: Poke its belly and wings or back ; To Sweeper: Rub its belly and wings or back ; To Patroller: Rub its head"
        },
        {
          "n": "Patroller",
          "b": "Uses Scan and engages",
          "sw": "To Watcher: Poke its head ; To Sweeper: Rub its head ; To Scout: Poke its belly and wings or back"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Pegaslick",
      "hp": 45.7,
      "str": 10.5,
      "mag": 10,
      "def": 7.1,
      "exp": 1.14,
      "dp": "Lofty Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1.1,
        "blz": 1.1,
        "thn": 1.1,
        "wtr": 1.1,
        "drk": 1.6,
        "lgt": 0.55
      },
      "attr": "Light",
      "style": "Thunder",
      "link": "Equestrian Raid",
      "disps": [
        {
          "n": "Cyclone",
          "b": "Uses Cyclone Charge as it adapts to the situation",
          "sw": "To Typhoon: Rub its front legs and wings and body ; To Hurricane: Poke its head or hind legs and tail ; To Stormgoer: Rub its head or hind legs and tail"
        },
        {
          "n": "Typhoon",
          "b": "Charges up weather attacks; also uses basic attacks",
          "sw": "To Cyclone: Poke its head ; To Hurricane: Poke its front legs and wings and body or hind legs and tail ; To Stormgoer: Rub its front legs and wings and body or hind legs and tail"
        },
        {
          "n": "Hurricane",
          "b": "Mostly magic-based actions",
          "sw": "To Cyclone: Poke its hind legs and tail ; To Typhoon: Rub its hind legs and tail ; To Stormgoer: Rub its head or front legs and wings and body"
        },
        {
          "n": "Stormgoer",
          "b": "Doesn't bother charging up weather attacks",
          "sw": "To Cyclone: Poke its front legs and wings and body or hind legs and tail ; To Typhoon: Rub its front legs and wings and body or hind legs and tail ; To Hurricane: Poke its head"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Pricklemane",
      "hp": 37,
      "str": 9.7,
      "mag": 8.1,
      "def": 7.6,
      "exp": 0.99,
      "dp": "Rampant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1,
        "blz": 1,
        "thn": 1,
        "wtr": 1,
        "drk": 1,
        "lgt": 1
      },
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Hammer Throw",
      "disps": [
        {
          "n": "Volcano",
          "b": "Quick to lose temper",
          "sw": "To Scrapper: Rub its tail ; To Intellectual: Poke its face or body ; To Bouncer: Rub its face or body"
        },
        {
          "n": "Scrapper",
          "b": "Only uses Prickle Spin; actively closes distance",
          "sw": "To Volcano: Poke its face ; To Intellectual: Poke its body or tail ; To Bouncer: Rub its body or tail"
        },
        {
          "n": "Intellectual",
          "b": "Has all attacks but never loses its temper",
          "sw": "To Volcano: Poke its face or tail ; To Scrapper: Rub its body ; To Bouncer: Rub its face or tail"
        },
        {
          "n": "Bouncer",
          "b": "Uses jumping attack and fights in a hit-and-wait pattern",
          "sw": "To Volcano: Poke its face or body ; To Scrapper: Rub its face or body ; To Intellectual: Poke its tail"
        }
      ],
      "rank": "E"
    },
    {
      "name": "R & R Seal",
      "hp": 43.1,
      "str": 10,
      "mag": 10,
      "def": 6.9,
      "exp": 1.15,
      "dp": "Prickly Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.4,
        "blz": 1.45,
        "thn": 0.9,
        "wtr": 0,
        "drk": 0.9,
        "lgt": 0.9
      },
      "attr": "Blizzard",
      "style": "Aqua",
      "link": "Lucky Dice",
      "disps": [
        {
          "n": "Sea Lion",
          "b": "Uses a balanced set of attacks: ball, dice, and melee",
          "sw": "To Driftwood: Rub its head ; To Show-off: Poke its belly and arms or back ; To High Roller: Rub its belly and arms or back"
        },
        {
          "n": "Driftwood",
          "b": "Dice attack is weaker",
          "sw": "To Sea Lion: Poke its belly and arms ; To Show-off: Poke its head or back ; To High Roller: Rub its head or back"
        },
        {
          "n": "Show-off",
          "b": "Mainly employs all beach ball attacks",
          "sw": "To Sea Lion: Poke its back ; To Driftwood: Rub its back ; To High Roller: Rub its head or belly and arms"
        },
        {
          "n": "High Roller",
          "b": "Employs all dice attacks",
          "sw": "To Sea Lion: Poke its head or back ; To Driftwood: Rub its head or back ; To Show-off: Poke its belly and arms"
        }
      ],
      "rank": "C"
    },
    {
      "name": "Ryu Dragon",
      "hp": 50,
      "str": 11.5,
      "mag": 9.2,
      "def": 7.7,
      "exp": 1.23,
      "dp": "Savage Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 0.55,
        "blz": 1.3,
        "thn": 1.1,
        "wtr": 1.6,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Fire",
      "style": "Fire",
      "link": "Decussation",
      "disps": [
        {
          "n": "Fafnir",
          "b": "Slashes foes on ground; rises to spit fireballs from air.",
          "sw": "To Wyvern: Rub its head and front legs ; To Tiamat: Poke its hind legs and body or tail ; To Bahamut: Rub its hind legs and body or tail"
        },
        {
          "n": "Wyvern",
          "b": "Fewer fireballs but pursues foes using Dragon's Breath.",
          "sw": "To Fafnir: Poke its hind legs and body ; To Tiamat: Poke its head and front legs or tail ; To Bahamut: Rub its head and front legs or tail"
        },
        {
          "n": "Tiamat",
          "b": "Mostly ground attacks.",
          "sw": "To Fafnir: Poke its tail ; To Wyvern: Rub its tail ; To Bahamut: Rub its head and front legs or hind legs and body"
        },
        {
          "n": "Bahamut",
          "b": "Mostly aerial flame attacks.",
          "sw": "To Fafnir: Poke its head and front legs or tail ; To Wyvern: Rub its head and front legs or tail ; To Tiamat: Poke its hind legs and body"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Sir Kyroo",
      "hp": 31.6,
      "str": 8.2,
      "mag": 10.3,
      "def": 6.9,
      "exp": 0.91,
      "dp": "Noble Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.95,
        "blz": 0.95,
        "thn": 1.45,
        "wtr": 0.45,
        "drk": 0.95,
        "lgt": 0.95
      },
      "attr": "Water",
      "style": "Aqua",
      "link": "Decussation",
      "disps": [
        {
          "n": "Warrior",
          "b": "Actively attacks",
          "sw": "To Knight: Rub its weapon and shield ; To Paladin: Poke its head and body or weapon and shield ; To Guardian: Rub its head and body or wings"
        },
        {
          "n": "Knight",
          "b": "Balanced",
          "sw": "To Warrior: Poke its head and body ; To Paladin: Poke its wings or weapon and shield ; To Guardian: Rub its wings or weapon and shield"
        },
        {
          "n": "Paladin",
          "b": "Especially good with magic attacks/support",
          "sw": "To Warrior: Poke its weapon and shield ; To Knight: Rub its wings ; To Guardian: Rub its head and body or weapon and shield"
        },
        {
          "n": "Guardian",
          "b": "Especially good at using its shield to guard",
          "sw": "To Warrior: Poke its wings or weapon and shield ; To Knight: Rub its wings or weapon and shield ; To Paladin: Poke its head and body"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Skelterwild",
      "hp": 50,
      "str": 12,
      "mag": 9,
      "def": 8.3,
      "exp": 1.25,
      "dp": "Savage Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1.5,
        "blz": 0.5,
        "thn": 1,
        "wtr": 0.9,
        "drk": 1,
        "lgt": 1
      },
      "attr": "Blizzard",
      "style": "Dark",
      "link": "Ice Raid",
      "disps": [
        {
          "n": "Barbarian",
          "b": "Attacks from any distance; head and body attack separately at times",
          "sw": "To Bully: Rub its tail ; To Savage: Poke its head and body or hind legs ; To Fiend: Rub its head and body or hind legs"
        },
        {
          "n": "Bully",
          "b": "Sticks to short-range attacks; head and body never separate",
          "sw": "To Barbarian: Poke its head and body ; To Savage: Poke its hind legs or tail ; To Fiend: Rub its hind legs or tail"
        },
        {
          "n": "Savage",
          "b": "Prefers Sonic Roar; no Blizzard attacks",
          "sw": "To Barbarian: Poke its hind legs ; To Bully: Rub its hind legs ; To Fiend: Rub its head and body or tail"
        },
        {
          "n": "Fiend",
          "b": "Prefers its Blizzard attacks",
          "sw": "To Barbarian: Poke its head and body or hind legs ; To Bully: Rub its head and body or hind legs ; To Savage: Poke its tail"
        }
      ],
      "rank": "F"
    },
    {
      "name": "Staggerceps",
      "hp": 38.1,
      "str": 9.5,
      "mag": 10,
      "def": 8,
      "exp": 1.1,
      "dp": "Grim Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.1,
        "blz": 1.1,
        "thn": 1.1,
        "wtr": 1.1,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Physical",
      "style": "Fire",
      "link": "Trap Shot",
      "disps": [
        {
          "n": "Heavy Hitter",
          "b": "Melee attacks and Lockdown Shot from the normal range",
          "sw": "To Grenadier: Rub its back ; To Launcher: Poke its head and pincers or belly and arms and legs ; To Backup: Rub its head and pincers or belly and arms and legs"
        },
        {
          "n": "Grenadier",
          "b": "Supporting attacks using Mortar",
          "sw": "To Heavy Hitter: Poke its belly and arms and legs ; To Launcher: Poke its head and pincers or back ; To Backup: Rub its head and pincers or back"
        },
        {
          "n": "Launcher",
          "b": "Favors attacks with Magic Shot",
          "sw": "To Heavy Hitter: Poke its head and pincers ; To Grenadier: Rub its head and pincers ; To Backup: Rub its belly and arms and legs or back"
        },
        {
          "n": "Backup",
          "b": "Support style using Capture Shot and healing allies",
          "sw": "To Heavy Hitter: Poke its belly and arms and legs or back ; To Grenadier: Rub its belly and arms and legs or back ; To Launcher: Poke its head and pincers"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Sudo Neku",
      "hp": 38.4,
      "str": 10,
      "mag": 8.9,
      "def": 6.2,
      "exp": 1.03,
      "dp": "Wild Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.55,
        "blz": 0.9,
        "thn": 1.1,
        "wtr": 0.6,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Fire",
      "style": "Fire",
      "link": "Flame Thrower",
      "disps": [
        {
          "n": "Twister",
          "b": "Mostly uses Burning Rubber attack",
          "sw": "To Hothead: Rub its body and legs or tail ; To Cool Bean: Poke its head ; To Psycho: Rub its head"
        },
        {
          "n": "Hothead",
          "b": "Uses only Fire attacks and shoots fireballs",
          "sw": "To Twister: Poke its head and tail ; To Cool Bean: Poke its body and legs ; To Psycho: Rub its body and legs"
        },
        {
          "n": "Cool Bean",
          "b": "Uses all attacks but doesn't lose its temper",
          "sw": "To Twister: Poke its head or body and legs ; To Hothead: Rub its head or body and legs ; To Psycho: Rub its tail"
        },
        {
          "n": "Psycho",
          "b": "Goes Berserk as soon as the battle starts",
          "sw": "To Twister: Poke its body and legs ; To Hothead: Rub its body and legs ; To Cool Bean: Poke its head or tail"
        }
      ],
      "rank": "C"
    },
    {
      "name": "Tama Sheep",
      "hp": 38.1,
      "str": 8.7,
      "mag": 10.6,
      "def": 7.5,
      "exp": 0.93,
      "dp": "Vibrant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.2,
        "blz": 1.2,
        "thn": 1.2,
        "wtr": 1.2,
        "drk": 1.2,
        "lgt": 1.2
      },
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Roll Call",
      "disps": [
        {
          "n": "Picker-Upper",
          "b": "Uses all attacks and actively attacks enemies in a balanced manner",
          "sw": "To Snooze Maker: Rub its horns or legs and tail ; To Mumbler: Poke its body ; To Pillow Fluffer: Rub its body"
        },
        {
          "n": "Snooze Maker",
          "b": "Frequently uses its sleep attack",
          "sw": "To Mumbler: Poke its legs and tail ; To Pillow Fluffer: Rub its legs and tail"
        },
        {
          "n": "Mumbler",
          "b": "Mostly participates by doing magic attacks",
          "sw": "To Snooze Maker: Rub its body or legs and tail ; To Pillow Fluffer: Rub its horns"
        },
        {
          "n": "Pillow Fluffer",
          "b": "Sleeps consecutively",
          "sw": "To Snooze Maker: Rub its body ; To Mumbler: Poke its horns or legs and tail"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Tatsu Blaze",
      "hp": 33.8,
      "str": 9,
      "mag": 10.3,
      "def": 6.4,
      "exp": 0.94,
      "dp": "Grim Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.45,
        "blz": 1.15,
        "thn": 0.95,
        "wtr": 1.45,
        "drk": 0.95,
        "lgt": 0.95
      },
      "attr": "Fire",
      "style": "Fire",
      "link": "Fire Blaster",
      "disps": [
        {
          "n": "Go-getter",
          "b": "Moves in close to attack",
          "sw": "To Detonator: Rub its head and body or wings ; To Deadeye: Poke its tail ; To Two-face: Rub its tail"
        },
        {
          "n": "Detonator",
          "b": "Favors Firebomb explosions",
          "sw": "To Deadeye: Poke its wings ; To Two-face: Rub its wings"
        },
        {
          "n": "Deadeye",
          "b": "Prefers to aim and attack from long range",
          "sw": "To Detonator: Rub its wings or tail ; To Two-face: Rub its head and body"
        },
        {
          "n": "Two-face",
          "b": "Floats placidly, but if enemies get close, it suddenly attacks",
          "sw": "To Detonator: Rub its head and body ; To Deadeye: Poke its wings or tail"
        }
      ],
      "rank": "F"
    },
    {
      "name": "Tatsu Steed",
      "hp": 33.8,
      "str": 8.7,
      "mag": 10,
      "def": 7.3,
      "exp": 1.04,
      "dp": "Lofty Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.9,
        "blz": 0.9,
        "thn": 1.4,
        "wtr": 0.45,
        "drk": 0.9,
        "lgt": 0.9
      },
      "attr": "Water",
      "style": "Aqua",
      "link": "Bubble Blaster",
      "disps": [
        {
          "n": "Scatterbrain",
          "b": "Ranged attacks from mid-range",
          "sw": "To Show-off: Rub its tail ; To Tactician: Poke its head and body or wings ; To Trap Jockey: Rub its head and body or wings"
        },
        {
          "n": "Show-off",
          "b": "Likes flashy area-of-effect attacks that hit multiple targets",
          "sw": "To Scatterbrain: Poke its wings ; To Tactician: Poke its head and body or tail ; To Trap Jockey: Rub its head and body or tail"
        },
        {
          "n": "Tactician",
          "b": "Sniper that attacks single targets from long range (Shell added as support)",
          "sw": "To Scatterbrain: Poke its head and body ; To Show-off: Rub its head and body ; To Trap Jockey: Rub its wings or tail"
        },
        {
          "n": "Trap Jockey",
          "b": "Likes mines",
          "sw": "To Scatterbrain: Poke its head and body or wings ; To Show-off: Rub its head and body or wings ; To Tactician: Poke its tail"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Thunderaffe",
      "hp": 45.7,
      "str": 10.2,
      "mag": 11.4,
      "def": 7.1,
      "exp": 1.18,
      "dp": "Fleeting Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1.15,
        "blz": 1.65,
        "thn": 0.55,
        "wtr": 1.15,
        "drk": 1.15,
        "lgt": 1.15
      },
      "attr": "Thunder",
      "style": "Thunder",
      "link": "Equestrian Raid",
      "disps": [
        {
          "n": "Live Wire",
          "b": "Gallops around using long and close-range attacks",
          "sw": "To Photon Don: Rub its head and neck or legs ; To Smasher: Poke its body and tail ; To Blue Streak: Rub its body and tail"
        },
        {
          "n": "Photon Don",
          "b": "Frequently uses Refract Beam",
          "sw": "To Live Wire: Poke its head and neck or body and tail ; To Smasher: Poke its legs ; To Blue Streak: Rub its legs"
        },
        {
          "n": "Smasher",
          "b": "Supports allies while also using dash attacks from a distance",
          "sw": "To Live Wire: Poke its body and tail or legs ; To Photon Don: Rub its body and tail or legs ; To Blue Streak: Rub its head and neck"
        },
        {
          "n": "Blue Streak",
          "b": "Moves around constantly",
          "sw": "To Live Wire: Poke its legs ; To Photon Don: Rub its legs ; To Smasher: Poke its head and neck or body and tail"
        }
      ],
      "rank": "F"
    },
    {
      "name": "Toximander",
      "hp": 34.9,
      "str": 9.7,
      "mag": 8.1,
      "def": 6.6,
      "exp": 0.91,
      "dp": "Troubling Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.9,
        "blz": 0.9,
        "thn": 0.9,
        "wtr": 0.9,
        "drk": 0.45,
        "lgt": 1.4
      },
      "attr": "Dark",
      "style": "Dark",
      "link": "Poison Dash",
      "disps": [
        {
          "n": "Hunter",
          "b": "Does all attacks, close and far",
          "sw": "To Loose Cannon: Rub its head or body ; To Basilisk: Poke its tail ; To Bane: Rub its tail"
        },
        {
          "n": "Loose Cannon",
          "b": "Loves to spit fireballs",
          "sw": "To Hunter: Poke its head or tail ; To Basilisk: Poke its body ; To Bane: Rub its body"
        },
        {
          "n": "Basilisk",
          "b": "Uses Confuse and Poison to set up attacks",
          "sw": "To Hunter: Poke its body or tail ; To Loose Cannon: Rub its body or tail ; To Bane: Rub its head"
        },
        {
          "n": "Bane",
          "b": "Poison attacks only",
          "sw": "To Hunter: Poke its body ; To Loose Cannon: Rub its body ; To Basilisk: Poke its head or tail"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Tubguin Ace",
      "hp": "???",
      "str": "???",
      "mag": "???",
      "def": "???",
      "exp": "???",
      "dp": "Lofty Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.7,
        "blz": 1.3,
        "thn": 1.5,
        "wtr": 0.7,
        "drk": 1,
        "lgt": 1
      },
      "attr": "Fire",
      "style": "Aqua",
      "link": "Unwind",
      "disps": [
        {
          "n": "Hot Springs",
          "b": "Unknown",
          "sw": "To Spa: Rub its back ; To Sauna: Poke its face ; To Whirlpool: Rub its"
        },
        {
          "n": "Spa",
          "b": "",
          "sw": "To Hot Springs: Poke its ; To Sauna: Poke its belly ; To Whirlpool: Rub its"
        },
        {
          "n": "Sauna",
          "b": "",
          "sw": "To Hot Springs: Poke its belly ; To Spa: Rub its belly ; To Whirlpool: Rub its feet"
        },
        {
          "n": "Whirlpool",
          "b": "",
          "sw": "To Hot Springs: Poke its belly ; To Spa: Rub its belly ; To Sauna: Poke its"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Tyranto Rex",
      "hp": 51.1,
      "str": 11.7,
      "mag": 9,
      "def": 7.2,
      "exp": 1.2,
      "dp": "Savage Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 0.55,
        "blz": 1.3,
        "thn": 1.1,
        "wtr": 1.6,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Fire",
      "style": "Fire",
      "link": "Flame Raid",
      "disps": [
        {
          "n": "Tyrant",
          "b": "Attacks from any distance",
          "sw": "To Roadkiller: Rub its head and body or tail ; To Missile: Poke its hind legs ; To Flametongue: Rub its hind legs"
        },
        {
          "n": "Roadkiller",
          "b": "Sticks to shorter range attacks",
          "sw": "To Tyrant: Poke its hind legs or tail ; To Missile: Poke its head and body ; To Flametongue: Rub its head and body"
        },
        {
          "n": "Missile",
          "b": "Prefers Sonic Roar; no flame attacks",
          "sw": "To Tyrant: Poke its head and body or hind legs ; To Roadkiller: Rub its head and body or hind legs ; To Flametongue: Rub its tail"
        },
        {
          "n": "Flametongue",
          "b": "Prefers Fire attacks",
          "sw": "To Tyrant: Poke its head and body ; To Roadkiller: Rub its head and body ; To Missile: Poke its hind legs or tail"
        }
      ],
      "rank": "D"
    },
    {
      "name": "Ursa Circus",
      "hp": 51.4,
      "str": 10.8,
      "mag": 8.3,
      "def": 6.9,
      "exp": 1.23,
      "dp": "Epic Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 0.95,
        "blz": 0.95,
        "thn": 0.95,
        "wtr": 0.95,
        "drk": 0.95,
        "lgt": 0.95
      },
      "attr": "Physical",
      "style": "Physical/Light",
      "link": "Swing Fling",
      "disps": [
        {
          "n": "Knucklehead",
          "b": "Mostly uses Panda Punch to engage",
          "sw": "To Strongman: Rub its head or belly and arms ; To Heavyweight: Poke its back and tail ; To Hugger: Rub its back and tail"
        },
        {
          "n": "Strongman",
          "b": "Mostly uses Kooma Tackle to engage",
          "sw": "To Knucklehead: Poke its head or back and tail ; To Heavyweight: Poke its belly and arms ; To Hugger: Rub its belly and arms"
        },
        {
          "n": "Heavyweight",
          "b": "Adds Tea Table attack to repertoire",
          "sw": "To Knucklehead: Poke its belly and arms or back and tail ; To Strongman: Rub its belly and arms or back and tail ; To Hugger: Rub its head"
        },
        {
          "n": "Hugger",
          "b": "Only does close-range attacks; never leaves its enemy alone",
          "sw": "To Knucklehead: Poke its head ; To Strongman: Rub its head ; To Heavyweight: Poke its belly and arms or back and tail"
        }
      ],
      "rank": "C"
    },
    {
      "name": "Wheeflower",
      "hp": 30.6,
      "str": 7.7,
      "mag": 10.8,
      "def": 5.9,
      "exp": 0.87,
      "dp": "Rampant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.3,
        "blz": 0.8,
        "thn": 0.8,
        "wtr": 0.4,
        "drk": 0.8,
        "lgt": 0.8
      },
      "attr": "Water",
      "style": "Aqua",
      "link": "Cure Sun",
      "disps": [
        {
          "n": "Keeper",
          "b": "Attack-happy personality that protects its allies",
          "sw": "To Multi-Tasker: Rub its leaves or bulb ; To Spell Slinger: Poke its head ; To Green Thumb: Rub its head"
        },
        {
          "n": "Multi-Tasker",
          "b": "Balanced between attacking and recovery",
          "sw": "To Keeper: Poke its head or bulb ; To Spell Slinger: Poke its leaves ; To Green Thumb: Rub its leaves"
        },
        {
          "n": "Spell Slinger",
          "b": "Uses magic frequently",
          "sw": "To Keeper: Poke its head or leaves ; To Multi-Tasker: Rub its head or leaves ; To Green Thumb: Rub its bulb"
        },
        {
          "n": "Green Thumb",
          "b": "Uses only plant-summoning attacks",
          "sw": "To Keeper: Poke its bulb ; To Multi-Tasker: Rub its bulb ; To Spell Slinger: Poke its head or leaves"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Woeflower",
      "hp": 32.7,
      "str": 8.4,
      "mag": 11.4,
      "def": 6.2,
      "exp": 1.04,
      "dp": "Troubling Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 1.3,
        "blz": 0.8,
        "thn": 0.3,
        "wtr": 0.8,
        "drk": 0.4,
        "lgt": 1.3
      },
      "attr": "Dark",
      "style": "Dark",
      "link": "Poison Rain",
      "disps": [
        {
          "n": "Bag of Tricks",
          "b": "Uses a variety of attack patterns; Toxic Doomdelion saps enemy HP",
          "sw": "To Shrinking Violet: Rub its bulb ; To Meddler: Poke its head or leaves ; To Natural: Rub its head or leaves"
        },
        {
          "n": "Shrinking Violet",
          "b": "Cautious with direct attacks; keeps distant and employs status ailments",
          "sw": "To Bag of Tricks: Poke its leaves ; To Meddler: Poke its head or bulb ; To Natural: Rub its head or bulb"
        },
        {
          "n": "Meddler",
          "b": "Acts as a nuisance by inflicting status ailments",
          "sw": "To Bag of Tricks: Poke its ; To Shrinking Violet: Rub its head ; To Natural: Rub its leaves or bulb"
        },
        {
          "n": "Natural",
          "b": "Doesn't use status ailments; only employs direct attacks",
          "sw": "To Bag of Tricks: Poke its head or leaves ; To Shrinking Violet: Rub its head or leaves ; To Meddler: Poke its bulb"
        }
      ],
      "rank": "D"
    },
    {
      "name": "Yoggy Ram",
      "hp": 41.3,
      "str": 9.5,
      "mag": 10.3,
      "def": 7.3,
      "exp": 1.01,
      "dp": "Vibrant Fantasy",
      "reaction": "1 (10s)",
      "res": {
        "fire": 0.55,
        "blz": 1.35,
        "thn": 1.15,
        "wtr": 1.65,
        "drk": 1.15,
        "lgt": 1.15
      },
      "attr": "Fire",
      "style": "Fire",
      "link": "Whirling Bronco",
      "disps": [
        {
          "n": "Powerhouse",
          "b": "Balances its attacks between long and close range; actively engaging enemies",
          "sw": "To Trailblazer: Rub its head and horns ; To Leader: Poke its front legs and body or hind legs ; To Jumper: Rub its front legs and body or hind legs"
        },
        {
          "n": "Trailblazer",
          "b": "Prefers Fire attacks at closer range",
          "sw": "To Powerhouse: Poke its front legs and body ; To Leader: Poke its head and horns or hind legs ; To Jumper: Rub its head and horns or hind legs"
        },
        {
          "n": "Leader",
          "b": "Uses magic to aid allies and fires Yoggy Sonic bursts from afar",
          "sw": "To Powerhouse: Poke its hind legs ; To Trailblazer: Rub its hind legs ; To Jumper: Rub its head and horns or front legs and body"
        },
        {
          "n": "Jumper",
          "b": "Often uses jump attacks, setting up Hindquarters Kick",
          "sw": "To Powerhouse: Poke its head and horns or hind legs ; To Trailblazer: Rub its head and horns or hind legs ; To Leader: Poke its front legs and body"
        }
      ],
      "rank": "E"
    },
    {
      "name": "Zolephant",
      "hp": 47.8,
      "str": 10.5,
      "mag": 8.1,
      "def": 6.8,
      "exp": 1.05,
      "dp": "Noble Fantasy",
      "reaction": "3-4 (10s)",
      "res": {
        "fire": 1.1,
        "blz": 1.1,
        "thn": 1.6,
        "wtr": 0.55,
        "drk": 1.1,
        "lgt": 1.1
      },
      "attr": "Water",
      "style": "Aqua",
      "link": "Berserker Bronco",
      "disps": [
        {
          "n": "Fighter",
          "b": "Moves around and likes melee trunk attacks; capable of Berserk mode",
          "sw": "To Nozzle-nose: Rub its legs ; To Mastermind: Poke its head and nose and ears or body ; To Mountain: Rub its head and nose and ears or body"
        },
        {
          "n": "Nozzle-nose",
          "b": "Uses Torrent water attack; moves around as it pleases and attacks whatever is in range",
          "sw": "To Fighter: Poke its head and nose and ears ; To Mastermind: Poke its body or legs ; To Mountain: Rub its body or legs"
        },
        {
          "n": "Mastermind",
          "b": "Doesn't go into Berserk Mode; takes actions calmly",
          "sw": "To Fighter: Poke its body ; To Nozzle-nose: Rub its body ; To Mountain: Rub its head and nose and ears or legs"
        },
        {
          "n": "Mountain",
          "b": "Doesn't move much unless in Berserk Mode",
          "sw": "To Fighter: Poke its head and nose and ears or legs ; To Nozzle-nose: Rub its head and nose and ears or legs ; To Mastermind: Poke its body"
        }
      ],
      "rank": "E"
    }
  ],
  "commands": [
    {
      "cat": "Attack",
      "name": "Quick Blitz",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Blizzard Edge",
      "aff": 0,
      "hp": 0,
      "str": 2,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 10,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Dark Break",
      "aff": 0,
      "hp": 0,
      "str": 2,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 10,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Slot Edge",
      "aff": 0,
      "hp": 0,
      "str": 3,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Blitz",
      "aff": 0,
      "hp": 0,
      "str": 3,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Meteor Crash",
      "aff": 0,
      "hp": 0,
      "str": 4,
      "mag": 0,
      "def": 0,
      "fire": 20,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Spark Dive",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Poison Dive",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 2,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 10,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Drain Dive",
      "aff": 0,
      "hp": 10,
      "str": 0,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Sliding Dash",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Thunder Dash",
      "aff": 0,
      "hp": 0,
      "str": 2,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 10,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Sonic Blade",
      "aff": 0,
      "hp": 0,
      "str": 3,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Dark Aura",
      "aff": 0,
      "hp": 0,
      "str": 4,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 10,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Zantetsuken",
      "aff": 0,
      "hp": 0,
      "str": 4,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Strike Raid",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Spark Raid",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 2,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Circle Raid",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 3,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Aerial Slam",
      "aff": 0,
      "hp": 0,
      "str": 3,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Ars Arcanum",
      "aff": 0,
      "hp": 0,
      "str": 4,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Dark Splicer",
      "aff": 0,
      "hp": 0,
      "str": 3,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 10,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Gravity Strike",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Confusing Strike",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Tornado Strike",
      "aff": 0,
      "hp": 0,
      "str": 2,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Prism Windmill",
      "aff": 0,
      "hp": 0,
      "str": 3,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Timestorm",
      "aff": 0,
      "hp": 0,
      "str": 2,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Fire Windmill",
      "aff": 0,
      "hp": 0,
      "str": 2,
      "mag": 0,
      "def": 0,
      "fire": 10,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Icebreaker",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 0,
      "fire": 20,
      "blz": 20,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Shadowbreaker",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 20,
      "lgt": 20
    },
    {
      "cat": "Attack",
      "name": "Magnet Spiral",
      "aff": 0,
      "hp": 0,
      "str": 2,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Salvation",
      "aff": 0,
      "hp": 0,
      "str": 3,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 30
    },
    {
      "cat": "Attack",
      "name": "Limit Storm",
      "aff": 0,
      "hp": 2,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Collision Magnet",
      "aff": 0,
      "hp": 0,
      "str": 3,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Sacrifice",
      "aff": 0,
      "hp": 0,
      "str": 2,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Attack",
      "name": "Break Time",
      "aff": 2,
      "hp": 0,
      "str": 2,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Fire",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 10,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Fira",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 15,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Firaga",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 20,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Dark Firaga",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 0,
      "fire": 20,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 20,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Firaga Burst",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 4,
      "def": 0,
      "fire": 25,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Mega Flare",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 4,
      "def": 0,
      "fire": 30,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Blizzard",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 10,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Blizzara",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 0,
      "blz": 15,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Blizzaga",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 0,
      "blz": 20,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Icicle Splitter",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 0,
      "blz": 25,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Deep Freeze",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 4,
      "def": 0,
      "fire": 0,
      "blz": 25,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Ice Barrage",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 4,
      "def": 0,
      "fire": 0,
      "blz": 30,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Thunder",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 10,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Thundara",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 15,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Thundaga",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 20,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Triple Plasma",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 4,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 30,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Cure",
      "aff": 0,
      "hp": 10,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Cura",
      "aff": 0,
      "hp": 20,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Curaga",
      "aff": 0,
      "hp": 30,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Esuna",
      "aff": 1,
      "hp": 0,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Zero Gravity",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 1,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Zero Gravira",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Zero Graviga",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 3,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Zero Graviza",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 4,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Balloon",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 10,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Balloonra",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 20,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Balloonga",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 30,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Spark",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 10
    },
    {
      "cat": "Magic",
      "name": "Sparkra",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 15
    },
    {
      "cat": "Magic",
      "name": "Sparkga",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 20
    },
    {
      "cat": "Magic",
      "name": "Faith",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 4,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 30
    },
    {
      "cat": "Magic",
      "name": "Tornado",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Meteor",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Mini",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Blackout",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Time Bomb",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Confuse",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Bind",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Poison",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 10,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Slow",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Sleep",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Sleepra",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Sleepga",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Stop",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Magic",
      "name": "Vanish",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 2,
      "def": 2,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Item",
      "name": "Potion",
      "aff": 0,
      "hp": 5,
      "str": 0,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Item",
      "name": "Hi-Potion",
      "aff": 0,
      "hp": 10,
      "str": 0,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Item",
      "name": "Mega-Potion",
      "aff": 0,
      "hp": 20,
      "str": 0,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Item",
      "name": "Drop-Me-Not",
      "aff": 1,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Item",
      "name": "Drop-Me-Never",
      "aff": 2,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Item",
      "name": "Panacea",
      "aff": 1,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Item",
      "name": "Elixir",
      "aff": 0,
      "hp": 30,
      "str": 0,
      "mag": 1,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Item",
      "name": "Megalixir",
      "aff": 0,
      "hp": 50,
      "str": 0,
      "mag": 3,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Item",
      "name": "Dream Candy",
      "aff": 3,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 0,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Movement",
      "name": "Dark Roll",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 2,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 20,
      "lgt": 0
    },
    {
      "cat": "Movement",
      "name": "Sonic Impact",
      "aff": 0,
      "hp": 10,
      "str": 0,
      "mag": 0,
      "def": 2,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Movement",
      "name": "Superglide",
      "aff": 0,
      "hp": 10,
      "str": 0,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Defense",
      "name": "Wake-up Block",
      "aff": 0,
      "hp": 5,
      "str": 0,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Defense",
      "name": "Link Block",
      "aff": 1,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 2,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Defense",
      "name": "Sliding Block",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 2,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Defense",
      "name": "Dark Barrier",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 3,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 30,
      "lgt": 0
    },
    {
      "cat": "Reprisal",
      "name": "Counter Rush",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Reprisal",
      "name": "Counter Aura",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Reprisal",
      "name": "Shadow Strike",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 0,
      "def": 2,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Reprisal",
      "name": "Payback Raid",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Reprisal",
      "name": "Payback Blast",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Reprisal",
      "name": "Aerial Recovery",
      "aff": 0,
      "hp": 0,
      "str": 0,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Reprisal",
      "name": "Steep Climb",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Reprisal",
      "name": "Rapid Descent",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Reprisal",
      "name": "Sliding Sidewinder",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    },
    {
      "cat": "Reprisal",
      "name": "Sliding Crescent",
      "aff": 0,
      "hp": 0,
      "str": 1,
      "mag": 0,
      "def": 1,
      "fire": 0,
      "blz": 0,
      "thn": 0,
      "wtr": 0,
      "drk": 0,
      "lgt": 0
    }
  ],
  "create": {
    "ranks": [
      "F",
      "E",
      "D",
      "C",
      "B",
      "A",
      "S"
    ],
    "rankCorr": {
      "S": 1.18,
      "A": 1.12,
      "B": 1.06,
      "C": 1.0,
      "D": 0.94,
      "E": 0.88,
      "F": 0.82
    },
    "maxRankCorr": {
      "S": 1.28,
      "A": 1.26,
      "B": 1.24,
      "C": 1.22,
      "D": 1.2,
      "E": 1.18,
      "F": 1.16
    },
    "forecasts": [
      "Ordinary Day",
      "HP Showers",
      "Munnystorm",
      "Treasure Front",
      "Bargain Flurry",
      "Overcast",
      "Risky Winds"
    ],
    "forecastBonus": {
      "Ordinary Day": {
        "hp": [
          0,
          3
        ]
      },
      "HP Showers": {
        "hp": [
          5,
          10
        ]
      },
      "Munnystorm": {
        "hp": [
          0,
          3
        ]
      },
      "Treasure Front": {
        "hp": [
          0,
          3
        ],
        "str": [
          0,
          1
        ]
      },
      "Bargain Flurry": {
        "hp": [
          0,
          3
        ],
        "def": [
          0,
          1
        ]
      },
      "Overcast": {
        "hp": [
          0,
          3
        ],
        "mag": [
          1,
          2
        ]
      },
      "Risky Winds": {
        "hp": [
          0,
          3
        ]
      }
    },
    "dispoOdds": {
      "Ordinary Day": [
        30,
        35,
        35,
        0
      ],
      "HP Showers": [
        0,
        20,
        70,
        10
      ],
      "Munnystorm": [
        20,
        70,
        0,
        10
      ],
      "Treasure Front": [
        40,
        0,
        40,
        20
      ],
      "Bargain Flurry": [
        40,
        40,
        0,
        20
      ],
      "Overcast": [
        0,
        30,
        30,
        40
      ],
      "Risky Winds": [
        70,
        0,
        20,
        10
      ]
    },
    "forecastInfo": {
      "Munnystorm": {
        "desc": "More munny prizes than usual!",
        "effect": "Small Munny prizes are replaced by medium Munny prizes, and medium Munny prizes are replaced by large Munny prizes, except when using Slot Edge ."
      },
      "Risky Winds": {
        "desc": "Dangerous drop speeds and fearsome foes!",
        "effect": "The Battle Level increases by 2, and the Drop Gauge's base speed is increased to 2.0. Created Spirits have their rank increased by 1, rare Spirits are more likely to be created, and a Spirit's disposition changes faster through petting."
      },
      "Overcast": {
        "desc": "Friends and foes receive a 20% boost in Magic!",
        "effect": "The Magic stat of allies and enemies is multiplied by 1.2, and the Drop Gauge's base speed is increased to 1.3. Created Spirits have their Magic increased by 1 to 2."
      },
      "HP Showers": {
        "desc": "More HP prizes than usual!",
        "effect": "Small HP prizes are replaced by large HP prizes, except when using Slot Edge. Created Spirits will have slightly more HP."
      },
      "Treasure Front": {
        "desc": "More prize boxes than usual!",
        "effect": "Enemies are three times more likely to drop treasure boxes and Dream Pieces , and the Drop Gauge base speed is increased to 1.6. Created Spirits may have their Strength increased by 1."
      },
      "Ordinary Day": {
        "desc": "Just a peaceful, uneventful day.",
        "effect": "—"
      },
      "Bargain Flurry": {
        "desc": "Rare items at the shop, plus a 20% discount!",
        "effect": "The price of all items in the Moogle Shop is lowered by 20%, and certain items are only available for purchase during a Bargain Flurry. Created Spirits may have their Defense increased by 1."
      }
    },
    "levelBonusPerTotal": [
      [
        1,
        3,
        1
      ],
      [
        4,
        6,
        2
      ],
      [
        7,
        9,
        3
      ],
      [
        10,
        12,
        4
      ],
      [
        13,
        15,
        5
      ],
      [
        16,
        18,
        6
      ],
      [
        19,
        21,
        7
      ],
      [
        22,
        24,
        8
      ],
      [
        25,
        27,
        9
      ],
      [
        28,
        30,
        10
      ],
      [
        31,
        33,
        11
      ],
      [
        34,
        36,
        12
      ],
      [
        37,
        39,
        13
      ],
      [
        40,
        42,
        14
      ],
      [
        43,
        45,
        15
      ],
      [
        46,
        48,
        16
      ],
      [
        49,
        51,
        17
      ],
      [
        52,
        54,
        18
      ],
      [
        55,
        57,
        19
      ],
      [
        58,
        60,
        20
      ]
    ],
    "rankBoostNote": "boost(req,used): t1=ceil(req*1.5) if req>1 else Inf; t2=2*req; t3=3*req; t4=5*req; +1/+2/+3/+4 when used>=t1/t2/t3/t4. Lesser of the two materials' boosts applies. Risky Winds adds +1 rank."
  }
};
