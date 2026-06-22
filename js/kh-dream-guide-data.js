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
          "b": "Employs a balanced set of attacks."
        },
        {
          "n": "Paragon",
          "b": "Uses mostly normal aura attacks."
        },
        {
          "n": "Clear Mind",
          "b": "Uses mostly magic attacks."
        },
        {
          "n": "Noble",
          "b": "Uses mostly powerful aura attacks."
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
          "b": ""
        },
        {
          "n": "Reaper",
          "b": ""
        },
        {
          "n": "Psychic",
          "b": ""
        },
        {
          "n": "Groovy",
          "b": ""
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
          "b": ""
        },
        {
          "n": "Civet",
          "b": ""
        },
        {
          "n": "Raccoon",
          "b": ""
        },
        {
          "n": "Teakettle",
          "b": ""
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
          "b": "Uses stronger moves."
        },
        {
          "n": "Buster",
          "b": "Uses weaker moves."
        },
        {
          "n": "Drill Sarge",
          "b": "Does not go into Spike Mode."
        },
        {
          "n": "Roll Meister",
          "b": "Uses Spike Mode frequently."
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
          "b": "Attacks with weapon and Fire; tries to shield allies."
        },
        {
          "n": "Commis",
          "b": "Fewer attacks but more defense."
        },
        {
          "n": "Pâtissier",
          "b": "Mostly uses magic attacks."
        },
        {
          "n": "Pyromanger",
          "b": "Uses only Fire attacks."
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
          "b": "Uses horns in close and Yoggy Laser from a distance"
        },
        {
          "n": "Donner",
          "b": "Same as Blitzen but different laser sweep"
        },
        {
          "n": "Comet",
          "b": "Mostly uses magic attacks"
        },
        {
          "n": "Cupid",
          "b": "Uses only laser attacks"
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
          "b": "Prefers rockets and firecrackers"
        },
        {
          "n": "Bombshell",
          "b": "Fights up close"
        },
        {
          "n": "Helper",
          "b": "Somewhat long-range fighter that supports the player"
        },
        {
          "n": "Troublemaker",
          "b": "Shoots everywhere, using Pinwheel as its main attack"
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
          "b": "Uses stronger moves"
        },
        {
          "n": "Bumper",
          "b": "Uses weaker moves"
        },
        {
          "n": "Drill Sarge",
          "b": "Does not go into Spike Mode"
        },
        {
          "n": "Roll Meister",
          "b": "Uses Spike Mode frequently"
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
          "b": "Basic attacks"
        },
        {
          "n": "Wild Card",
          "b": "Uses items in a different pattern"
        },
        {
          "n": "Wingman",
          "b": "Supports with magic"
        },
        {
          "n": "Gift-Giver",
          "b": "Actively uses items"
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
          "b": "Normal attacks"
        },
        {
          "n": "Vulcan",
          "b": "Favors its Vulcan Strafe attack"
        },
        {
          "n": "Bomber",
          "b": "Only does Air Raid bomb runs"
        },
        {
          "n": "Tracer",
          "b": "Only does Feather Missile attacks"
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
          "b": "Uses Thunder only as it adapts to the situation"
        },
        {
          "n": "Capacitor",
          "b": "Charges up Thunder, then takes action"
        },
        {
          "n": "Tempest",
          "b": "Mostly magic attacks"
        },
        {
          "n": "Lightning Bolt",
          "b": "Attacks quickly; doesn't bother charging up Thunder"
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
          "b": "Keeps coming at enemies aggressively"
        },
        {
          "n": "Snail Support",
          "b": "Attacks while supporting its allies"
        },
        {
          "n": "Conjurer",
          "b": "Mostly uses magic attacks"
        },
        {
          "n": "Brick Wall",
          "b": "Prides itself on its iron-clad defense"
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
          "b": "Aggressive with normal range of attacks"
        },
        {
          "n": "Charger",
          "b": "Often rushes in from mid-range"
        },
        {
          "n": "Water Slinger",
          "b": "Mainly uses Power Spout from long range"
        },
        {
          "n": "Diver",
          "b": "Repeatedly uses the Fishapult dive attack"
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
          "b": "Uses normal range of attacks"
        },
        {
          "n": "Anchor",
          "b": "Favors Land Swimmer attack"
        },
        {
          "n": "Hitman",
          "b": "Favors Power Spout from long range"
        },
        {
          "n": "Bonehead",
          "b": "Repeatedly uses Fishapult"
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
          "b": "Uses all attacks and actively attacks its enemies in a balanced manner"
        },
        {
          "n": "Rover",
          "b": "Reckless type that attacks with only Horn Bounce"
        },
        {
          "n": "Whiskers",
          "b": "Mostly participates by doing magic attacks"
        },
        {
          "n": "Mittens",
          "b": "Devotes itself more to replenishing allies' HP attacking"
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
          "b": "Uses basic set of attacks and recovery"
        },
        {
          "n": "Pretty Kitty",
          "b": "Constantly spinning around"
        },
        {
          "n": "Catnipper",
          "b": "Launches attacks from long range; conjures Musical Storm when close"
        },
        {
          "n": "Sweetheart",
          "b": "Uses only music magic"
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
          "b": "Lots of close-range, direct attacks"
        },
        {
          "n": "Phantom",
          "b": "Balanced type with Icy Reflux as its go-to attack"
        },
        {
          "n": "Shaman",
          "b": "Only magic-type actions"
        },
        {
          "n": "Split Personality",
          "b": "Acts in a pattern that uses Go Go Ghostling"
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
          "b": "Uses normal attacks in a well-balanced fashion"
        },
        {
          "n": "Harrier",
          "b": "Likes to attack with Vertical Dives"
        },
        {
          "n": "Assassin",
          "b": "Attacks specific targets from up in the air"
        },
        {
          "n": "Commander",
          "b": "Favors ranged attacks from long distance"
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
          "b": "Mostly uses the Burning Rubber attack"
        },
        {
          "n": "Salamander",
          "b": "Uses only fire attacks and shoots fireballs"
        },
        {
          "n": "Serpent",
          "b": "Uses all attacks but doesn't lose its temper"
        },
        {
          "n": "Hydra",
          "b": "Goes Hebby Berserk as soon as battle starts"
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
          "b": "Aggressive; likes to slide toward enemies"
        },
        {
          "n": "Wingman",
          "b": "Mainly support role"
        },
        {
          "n": "Slider",
          "b": "Hurls ice from afar"
        },
        {
          "n": "Birdbrain",
          "b": "Bets it all on flying Ice Dive"
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
          "b": "When at a distance it transforms into a prize, then attacks when enemies get close"
        },
        {
          "n": "Flake",
          "b": "Well balanced but only attacks at random"
        },
        {
          "n": "Chicken",
          "b": "Keeps its distance and attacks"
        },
        {
          "n": "Gourmand",
          "b": "Frequently tries to chomp or slurp enemies"
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
          "b": "Uses stronger moves"
        },
        {
          "n": "Half-Pint",
          "b": "Uses weaker moves"
        },
        {
          "n": "Prestidigitator",
          "b": "Uses all beach ball attacks"
        },
        {
          "n": "Swindler",
          "b": "Uses all dice attacks"
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
          "b": "Aims for its enemies with shot-type attacks like Tracer"
        },
        {
          "n": "Grenadier",
          "b": "Does exploding support attacks with Mortar"
        },
        {
          "n": "Bodyguard",
          "b": "Tries to protect its allies with Support Shot"
        },
        {
          "n": "Launcher",
          "b": "Uses Magic Shot to inflict special damages"
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
          "b": "Aims for its enemies with shot-type attacks"
        },
        {
          "n": "Ack-Ack",
          "b": "Does exploding support attacks with Mortar"
        },
        {
          "n": "Bodyguard",
          "b": "Tries to protect its allies with Support Shot"
        },
        {
          "n": "Launcher",
          "b": "Uses Magic Shot and inflicts special damage"
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
          "b": "Occasionally uses charged attacks"
        },
        {
          "n": "Usurper",
          "b": "Doesn't charge up before attacks"
        },
        {
          "n": "Cruel Mind",
          "b": "Uses magic attacks"
        },
        {
          "n": "Force of Nature",
          "b": "Only charged attacks"
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
          "b": "Actively attacks, concentrating on direct strikes"
        },
        {
          "n": "Wingman",
          "b": "Support attack type; uses indirect attacks from mid-range"
        },
        {
          "n": "Rescuer",
          "b": "Mainly supports its allies with healing/recovery"
        },
        {
          "n": "Saboteur",
          "b": "Causes chaos by mainly inflicting status ailments"
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
          "b": "Mostly uses Panda Punch to engage"
        },
        {
          "n": "Wrestler",
          "b": "Mostly uses Kooma Tackle to engage"
        },
        {
          "n": "Bruiser",
          "b": "Adds Tea Table attack to repertoire"
        },
        {
          "n": "Grappler",
          "b": "Only does close-range attacks; never leaves its enemy alone"
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
          "b": "Actively attacks"
        },
        {
          "n": "Populist",
          "b": "Balanced"
        },
        {
          "n": "Empiricist",
          "b": "Especially good with magic attacks/support"
        },
        {
          "n": "Selfless Ruler",
          "b": "Especially good at using its body to guard"
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
          "b": "Combines magic and hand-to-hand combat"
        },
        {
          "n": "Spark Jockey",
          "b": "Prefers Fire and Dark attacks"
        },
        {
          "n": "Accomplice",
          "b": "Generally supports your main character"
        },
        {
          "n": "Illusionist",
          "b": "Powerful magic commands and status ailments"
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
          "b": "Likes to engage in bare-knuckled fights."
        },
        {
          "n": "Spinner",
          "b": "Repeats a pattern of hopping around and then resting."
        },
        {
          "n": "Space Invader",
          "b": "Dashes in with its Me Me Cross then hits with a combo."
        },
        {
          "n": "Hopper",
          "b": "Bounces around doing attacks that hit multiple targets."
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
          "b": "Aggressively uses all horn attacks"
        },
        {
          "n": "Rascal",
          "b": "Attacks recklessly with leaping Horn Dives"
        },
        {
          "n": "Smart Cookie",
          "b": "Mostly participates by doing magic attacks"
        },
        {
          "n": "Sidekick",
          "b": "Devotes itself more to replenishing allies' HP"
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
          "b": "Actively pursues melee attacks with its horn"
        },
        {
          "n": "Pouncer",
          "b": "Prefers Horn Bounce"
        },
        {
          "n": "Magician",
          "b": "Adds magic attacks"
        },
        {
          "n": "Best Friend",
          "b": "Attacks regularly but replenishes allies' HP when low"
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
          "b": "Normal actions"
        },
        {
          "n": "Dancer",
          "b": "Constantly spinning around"
        },
        {
          "n": "Diva",
          "b": "Launches attacks from long range; conjures Musical Storm when close"
        },
        {
          "n": "Artist",
          "b": "Uses only music magic"
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
          "b": "Scans for weaknesses, then attacks accordingly"
        },
        {
          "n": "Sweeper",
          "b": "Doesn't use Scan; attacks with Feather Shuriken only"
        },
        {
          "n": "Scout",
          "b": "Uses Scan and fights with magic"
        },
        {
          "n": "Patroller",
          "b": "Uses Scan and engages"
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
          "b": "Uses Cyclone Charge as it adapts to the situation"
        },
        {
          "n": "Typhoon",
          "b": "Charges up weather attacks; also uses basic attacks"
        },
        {
          "n": "Hurricane",
          "b": "Mostly magic-based actions"
        },
        {
          "n": "Stormgoer",
          "b": "Doesn't bother charging up weather attacks"
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
          "b": "Quick to lose temper"
        },
        {
          "n": "Scrapper",
          "b": "Only uses Prickle Spin; actively closes distance"
        },
        {
          "n": "Intellectual",
          "b": "Has all attacks but never loses its temper"
        },
        {
          "n": "Bouncer",
          "b": "Uses jumping attack and fights in a hit-and-wait pattern"
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
          "b": "Uses a balanced set of attacks: ball, dice, and melee"
        },
        {
          "n": "Driftwood",
          "b": "Dice attack is weaker"
        },
        {
          "n": "Show-off",
          "b": "Mainly employs all beach ball attacks"
        },
        {
          "n": "High Roller",
          "b": "Employs all dice attacks"
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
          "b": "Slashes foes on ground; rises to spit fireballs from air."
        },
        {
          "n": "Wyvern",
          "b": "Fewer fireballs but pursues foes using Dragon's Breath."
        },
        {
          "n": "Tiamat",
          "b": "Mostly ground attacks."
        },
        {
          "n": "Bahamut",
          "b": "Mostly aerial flame attacks."
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
          "b": "Actively attacks"
        },
        {
          "n": "Knight",
          "b": "Balanced"
        },
        {
          "n": "Paladin",
          "b": "Especially good with magic attacks/support"
        },
        {
          "n": "Guardian",
          "b": "Especially good at using its shield to guard"
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
          "b": "Attacks from any distance; head and body attack separately at times"
        },
        {
          "n": "Bully",
          "b": "Sticks to short-range attacks; head and body never separate"
        },
        {
          "n": "Savage",
          "b": "Prefers Sonic Roar; no Blizzard attacks"
        },
        {
          "n": "Fiend",
          "b": "Prefers its Blizzard attacks"
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
          "b": "Melee attacks and Lockdown Shot from the normal range"
        },
        {
          "n": "Grenadier",
          "b": "Supporting attacks using Mortar"
        },
        {
          "n": "Launcher",
          "b": "Favors attacks with Magic Shot"
        },
        {
          "n": "Backup",
          "b": "Support style using Capture Shot and healing allies"
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
          "b": "Mostly uses Burning Rubber attack"
        },
        {
          "n": "Hothead",
          "b": "Uses only Fire attacks and shoots fireballs"
        },
        {
          "n": "Cool Bean",
          "b": "Uses all attacks but doesn't lose its temper"
        },
        {
          "n": "Psycho",
          "b": "Goes Berserk as soon as the battle starts"
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
          "b": "Uses all attacks and actively attacks enemies in a balanced manner"
        },
        {
          "n": "Snooze Maker",
          "b": "Frequently uses its sleep attack"
        },
        {
          "n": "Mumbler",
          "b": "Mostly participates by doing magic attacks"
        },
        {
          "n": "Pillow Fluffer",
          "b": "Sleeps consecutively"
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
          "b": "Moves in close to attack"
        },
        {
          "n": "Detonator",
          "b": "Favors Firebomb explosions"
        },
        {
          "n": "Deadeye",
          "b": "Prefers to aim and attack from long range"
        },
        {
          "n": "Two-face",
          "b": "Floats placidly, but if enemies get close, it suddenly attacks"
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
          "b": "Ranged attacks from mid-range"
        },
        {
          "n": "Show-off",
          "b": "Likes flashy area-of-effect attacks that hit multiple targets"
        },
        {
          "n": "Tactician",
          "b": "Sniper that attacks single targets from long range (Shell added as support)"
        },
        {
          "n": "Trap Jockey",
          "b": "Likes mines"
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
          "b": "Gallops around using long and close-range attacks"
        },
        {
          "n": "Photon Don",
          "b": "Frequently uses Refract Beam"
        },
        {
          "n": "Smasher",
          "b": "Supports allies while also using dash attacks from a distance"
        },
        {
          "n": "Blue Streak",
          "b": "Moves around constantly"
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
          "b": "Does all attacks, close and far"
        },
        {
          "n": "Loose Cannon",
          "b": "Loves to spit fireballs"
        },
        {
          "n": "Basilisk",
          "b": "Uses Confuse and Poison to set up attacks"
        },
        {
          "n": "Bane",
          "b": "Poison attacks only"
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
          "b": "Unknown"
        },
        {
          "n": "Spa",
          "b": ""
        },
        {
          "n": "Sauna",
          "b": ""
        },
        {
          "n": "Whirlpool",
          "b": ""
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
          "b": "Attacks from any distance"
        },
        {
          "n": "Roadkiller",
          "b": "Sticks to shorter range attacks"
        },
        {
          "n": "Missile",
          "b": "Prefers Sonic Roar; no flame attacks"
        },
        {
          "n": "Flametongue",
          "b": "Prefers Fire attacks"
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
          "b": "Mostly uses Panda Punch to engage"
        },
        {
          "n": "Strongman",
          "b": "Mostly uses Kooma Tackle to engage"
        },
        {
          "n": "Heavyweight",
          "b": "Adds Tea Table attack to repertoire"
        },
        {
          "n": "Hugger",
          "b": "Only does close-range attacks; never leaves its enemy alone"
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
          "b": "Attack-happy personality that protects its allies"
        },
        {
          "n": "Multi-Tasker",
          "b": "Balanced between attacking and recovery"
        },
        {
          "n": "Spell Slinger",
          "b": "Uses magic frequently"
        },
        {
          "n": "Green Thumb",
          "b": "Uses only plant-summoning attacks"
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
          "b": "Uses a variety of attack patterns; Toxic Doomdelion saps enemy HP"
        },
        {
          "n": "Shrinking Violet",
          "b": "Cautious with direct attacks; keeps distant and employs status ailments"
        },
        {
          "n": "Meddler",
          "b": "Acts as a nuisance by inflicting status ailments"
        },
        {
          "n": "Natural",
          "b": "Doesn't use status ailments; only employs direct attacks"
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
          "b": "Balances its attacks between long and close range; actively engaging enemies"
        },
        {
          "n": "Trailblazer",
          "b": "Prefers Fire attacks at closer range"
        },
        {
          "n": "Leader",
          "b": "Uses magic to aid allies and fires Yoggy Sonic bursts from afar"
        },
        {
          "n": "Jumper",
          "b": "Often uses jump attacks, setting up Hindquarters Kick"
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
          "b": "Moves around and likes melee trunk attacks; capable of Berserk mode"
        },
        {
          "n": "Nozzle-nose",
          "b": "Uses Torrent water attack; moves around as it pleases and attacks whatever is in range"
        },
        {
          "n": "Mastermind",
          "b": "Doesn't go into Berserk Mode; takes actions calmly"
        },
        {
          "n": "Mountain",
          "b": "Doesn't move much unless in Berserk Mode"
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
  },
  "boards": {
    "Aura Lion": [
      {
        "g": "A-4",
        "t": "Support Ability",
        "n": "Leaf Bracer",
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
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
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
        "g": "B-6",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Lionheart disposition."
      },
      {
        "g": "C-2",
        "t": "Magic Command",
        "n": "Curaga",
        "c": "10 LP",
        "cond": ""
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
        "g": "C-4",
        "t": "Attack Command",
        "n": "Limit Storm",
        "c": "200 LP",
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
        "g": "C-7",
        "t": "Secret",
        "n": "Secret: Red",
        "c": "250 LP",
        "cond": "Becomes available after unlocking Secret: Green at E-6"
      },
      {
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "60 LP",
        "cond": "Becomes available when in Clear Mind disposition."
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Clear Mind disposition."
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": ""
      },
      {
        "g": "D-6",
        "t": "Attack Command",
        "n": "Sacrifice",
        "c": "200 LP",
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
        "g": "E-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": ""
      },
      {
        "g": "E-6",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "E-7",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available after unlocking Secret: Green at E-6"
      },
      {
        "g": "F-5",
        "t": "Support Ability",
        "n": "Second Chance",
        "c": "300 LP",
        "cond": ""
      }
    ],
    "Beatalike": [
      {
        "g": "A-1",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
      },
      {
        "g": "A-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
      },
      {
        "g": "A-3",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at D-1 has been unlocked."
      },
      {
        "g": "A-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-1",
        "t": "Attack Command",
        "n": "Limit Storm",
        "c": "200 LP",
        "cond": "Becomes available when in Psychic disposition."
      },
      {
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": ""
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Psychic disposition."
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "C-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
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
        "g": "D-1",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
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
        "g": "D-3",
        "t": "Attack Command",
        "n": "Confusing Strike",
        "c": "100 LP",
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
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Groovy disposition."
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "30 LP",
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
        "g": "E-6",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "F-1",
        "t": "Support Ability",
        "n": "Air Combo Plus",
        "c": "200 LP",
        "cond": "Becomes available when in Groovy disposition."
      },
      {
        "g": "F-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": ""
      },
      {
        "g": "G-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at A-4 has been unlocked."
      },
      {
        "g": "G-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after Secret: Green at A-4 has been unlocked."
      },
      {
        "g": "G-3",
        "t": "Attack Command",
        "n": "Ars Arcanum",
        "c": "400 LP",
        "cond": ""
      },
      {
        "g": "G-4",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": ""
      }
    ],
    "Catanuki": [
      {
        "g": "A-1",
        "t": "Magic Command",
        "n": "Blackout",
        "c": "150 LP",
        "cond": "Becomes available when in Teakettle disposition."
      },
      {
        "g": "A-4",
        "t": "Magic Command",
        "n": "Vanish",
        "c": "300 LP",
        "cond": "Becomes available after Secret: Green at E-2 has been unlocked."
      },
      {
        "g": "A-5",
        "t": "Support Ability",
        "n": "Treasure Magnet",
        "c": "50 LP",
        "cond": "Becomes available after Secret: Green at E-2 has been unlocked."
      },
      {
        "g": "A-6",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-1 has been unlocked."
      },
      {
        "g": "A-7",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
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
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at E-2 has been unlocked."
      },
      {
        "g": "B-7",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at C-1 has been unlocked."
      },
      {
        "g": "C-1",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": ""
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
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
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
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Sleep Block",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-7 has been unlocked."
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Defender",
        "c": "150 LP",
        "cond": "Becomes available after Secret: Green at A-6 has been unlocked."
      },
      {
        "g": "D-7",
        "t": "Magic Command",
        "n": "Sparkra",
        "c": "150 LP",
        "cond": "Becomes available when in Raccoon disposition."
      },
      {
        "g": "E-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after Secret: Green at C-7 has been unlocked."
      },
      {
        "g": "E-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-7 has been unlocked."
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Stop Block",
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at A-6 has been unlocked."
      },
      {
        "g": "E-4",
        "t": "Attack Command",
        "n": "Spark Raid",
        "c": "300 LP",
        "cond": "Becomes available after Secret: Green at A-6 has been unlocked."
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
        "g": "A-4",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
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
        "g": "A-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available when in Demolisher disposition."
      },
      {
        "g": "A-7",
        "t": "Attack Command",
        "n": "Sonic Blade",
        "c": "250 LP",
        "cond": "Becomes available when in Demolisher disposition."
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
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
        "g": "B-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": ""
      },
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
        "g": "C-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
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
        "g": "C-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": ""
      },
      {
        "g": "C-7",
        "t": "Support Ability",
        "n": "EXP Boost",
        "c": "300 LP",
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
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Mini Block",
        "c": "30 LP",
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
        "g": "E-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Drill Sarge disposition."
      },
      {
        "g": "E-6",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Drill Sarge disposition."
      },
      {
        "g": "F-4",
        "t": "Attack Command",
        "n": "Zantetsuken",
        "c": "400 LP",
        "cond": ""
      }
    ],
    "Chef Kyroo": [
      {
        "g": "A-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "A-4",
        "t": "Magic Command",
        "n": "Fira",
        "c": "100 LP",
        "cond": "Becomes available after unlocking Secret: Green at A-3."
      },
      {
        "g": "A-6",
        "t": "Attack Command",
        "n": "Blitz",
        "c": "150 LP",
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
        "t": "Support Ability",
        "n": "Air Combo Plus",
        "c": "200 LP",
        "cond": ""
      },
      {
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "Becomes available after unlocking Secret: Green at A-3."
      },
      {
        "g": "B-5",
        "t": "Magic Command",
        "n": "Firaga",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at A-3."
      },
      {
        "g": "B-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": ""
      },
      {
        "g": "C-2",
        "t": "Magic Command",
        "n": "Cura",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Patissier disposition."
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "20 LP",
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
        "n": "Aerial Slam",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "30 LP",
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
        "cond": "Becomes available when in Patissier disposition."
      },
      {
        "g": "E-6",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": ""
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
        "g": "A-3",
        "t": "Magic Command",
        "n": "Balloonra",
        "c": "10 LP",
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
        "g": "B-1",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "30 LP",
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
        "g": "B-4",
        "t": "Magic Command",
        "n": "Blizzaga",
        "c": "150 LP",
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
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
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
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "20 LP",
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
        "g": "C-5",
        "t": "Attack Command",
        "n": "Slot Edge",
        "c": "200 LP",
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
        "cond": "Becomes available after Secret: Green at A-2 has been unlocked."
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
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
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "40 LP",
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
        "n": "Magic Haste",
        "c": "30 LP",
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
        "g": "E-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after Secret: Green at C-2 has been unlocked."
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "30 LP",
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
        "c": "30 LP",
        "cond": "Becomes available after Secret: Green at E-4 has been unlocked."
      },
      {
        "g": "E-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "Becomes available after Secret: Green at B-5 has been unlocked."
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
        "n": "Item Boost",
        "c": "50 LP",
        "cond": "Becomes available after Secret: Green at E-4 has been unlocked."
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
        "g": "G-3",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "60 LP",
        "cond": "Becomes available after Secret: Green at E-4 has been unlocked."
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
        "g": "A-2",
        "t": "Stat Ability",
        "n": "Reload Boost",
        "c": "150 LP",
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
        "g": "A-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Grenadier disposition."
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
        "n": "Thunder Screen",
        "c": "20 LP",
        "cond": "Becomes available after Secret: Green at A-3 is unlocked."
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "40 LP",
        "cond": "Becomes available after Secret: Green at A-3 is unlocked."
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "60 LP",
        "cond": "Becomes available after Secret: Green at A-3 is unlocked."
      },
      {
        "g": "B-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": "Becomes available after Secret: Green at A-3 is unlocked."
      },
      {
        "g": "B-7",
        "t": "Attack Command",
        "n": "Icebreaker",
        "c": "100 LP",
        "cond": "Becomes available after Secret: Green at A-3 is unlocked."
      },
      {
        "g": "C-2",
        "t": "Defense Ability",
        "n": "Link Block",
        "c": "10 LP",
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
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
        "cond": ""
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "C-6",
        "t": "Attack Command",
        "n": "Circle Raid",
        "c": "100 LP",
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
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "20 LP",
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
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "60 LP",
        "cond": ""
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Bodyguard disposition."
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
        "g": "A-4",
        "t": "Support Ability",
        "n": "EXP Boost",
        "c": "300 LP",
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
        "g": "B-2",
        "t": "Attack Command",
        "n": "Sacrifice",
        "c": "10 LP",
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
        "n": "Attack Haste",
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
        "g": "C-4",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Usurper disposition."
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "300 LP",
        "cond": "Becomes available when in Usurper disposition."
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
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
        "g": "D-3",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
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
        "g": "E-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available after unlocking Secret: Green at D-3."
      },
      {
        "g": "E-4",
        "t": "Attack Command",
        "n": "Dark Aura",
        "c": "400 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-3."
      },
      {
        "g": "F-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available when in Conqueror disposition."
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": ""
      },
      {
        "g": "F-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": ""
      },
      {
        "g": "G-1",
        "t": "Magic Command",
        "n": "Meteor",
        "c": "400 LP",
        "cond": "Becomes available when in Conqueror disposition."
      },
      {
        "g": "G-3",
        "t": "Attack Command",
        "n": "Dark Splicer",
        "c": "300 LP",
        "cond": ""
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
        "g": "C-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
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
        "g": "C-3",
        "t": "Magic Command",
        "n": "Confuse",
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
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Rescuer disposition."
      },
      {
        "g": "D-1",
        "t": "Magic Command",
        "n": "Zero Gravira",
        "c": "100 LP",
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
        "g": "D-3",
        "t": "Attack Command",
        "n": "Drain Dive",
        "c": "50 LP",
        "cond": ""
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Magic Boost",
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
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
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
        "g": "A-2",
        "t": "Stat Ability",
        "n": "Bind Block",
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
        "g": "A-4",
        "t": "Attack Command",
        "n": "Aerial Slam",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "A-5",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "Becomes available when in Wrestler disposition."
      },
      {
        "g": "A-6",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Bruiser disposition."
      },
      {
        "g": "B-2",
        "t": "Attack Command",
        "n": "Circle Raid",
        "c": "10 LP",
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
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
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
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Mini Block",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "B-7",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
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
        "g": "C-5",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Wrestler disposition."
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "Becomes available when in Bruiser disposition."
      },
      {
        "g": "D-2",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
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
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Item Boost",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-2."
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
        "g": "A-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
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
        "g": "A-4",
        "t": "Support Ability",
        "n": "Combo Master",
        "c": "300 LP",
        "cond": ""
      },
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
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "50 LP",
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
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
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
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
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
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Warmonger disposition."
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available when in Warmonger disposition."
      },
      {
        "g": "D-1",
        "t": "Attack Command",
        "n": "Zantetsuken",
        "c": "400 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-3."
      },
      {
        "g": "D-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
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
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
        "cond": "Becomes available when in Selfless Ruler disposition."
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "100 LP",
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
        "g": "A-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "200 LP",
        "cond": "Becomes available when in Accomplice disposition."
      },
      {
        "g": "A-5",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "200 LP",
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
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "150 LP",
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
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
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
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Blizzard Screen",
        "c": "20 LP",
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
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
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
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
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
        "g": "E-4",
        "t": "Magic Command",
        "n": "Deep Freeze",
        "c": "400 LP",
        "cond": ""
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
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
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
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
        "g": "B-5",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": "Becomes available when in Bruiser disposition."
      },
      {
        "g": "C-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
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
        "g": "C-3",
        "t": "Attack Command",
        "n": "Prism Windmill",
        "c": "150 LP",
        "cond": ""
      },
      {
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Slow Block",
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
        "g": "C-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
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
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
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
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Space Invader disposition."
      },
      {
        "g": "D-6",
        "t": "Attack Command",
        "n": "Break Time",
        "c": "200 LP",
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
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Space Invader disposition."
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
        "g": "A-4",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Diva disposition."
      },
      {
        "g": "B-1",
        "t": "Spirits Ability",
        "n": "Support Boost",
        "c": "200 LP",
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
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "Becomes available when in Diva disposition."
      },
      {
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "50 LP",
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
        "g": "C-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
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
        "g": "C-3",
        "t": "Magic Command",
        "n": "Sleepra",
        "c": "100 LP",
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
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "C-6",
        "t": "Magic Command",
        "n": "Thunder",
        "c": "10 LP",
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
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
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
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Sleep Block",
        "c": "30 LP",
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
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Blindness Block",
        "c": "30 LP",
        "cond": "Becomes available when in Watcher disposition."
      },
      {
        "g": "D-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Paint Gun: Red x10",
        "cond": ""
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "30 LP",
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
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": "Becomes available when in Scout disposition."
      },
      {
        "g": "E-1",
        "t": "Magic Command",
        "n": "Fira",
        "c": "100 LP",
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
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "30 LP",
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
        "g": "E-5",
        "t": "Stat Ability",
        "n": "Confusion Block",
        "c": "30 LP",
        "cond": "Becomes available when in Patroller disposition."
      },
      {
        "g": "F-2",
        "t": "Magic Command",
        "n": "Blizzara",
        "c": "100 LP",
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
        "g": "F-4",
        "t": "Stat Ability",
        "n": "Magic Boost",
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
        "g": "G-3",
        "t": "Magic Command",
        "n": "Thundara",
        "c": "100 LP",
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
        "g": "B-5",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
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
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "60 LP",
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
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "40 LP",
        "cond": ""
      },
      {
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "80 LP",
        "cond": "Becomes available when in Stormgoer disposition."
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "30 LP",
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
        "n": "HP Boost",
        "c": "30 LP",
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
        "g": "E-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Stormgoer disposition."
      },
      {
        "g": "E-3",
        "t": "Magic Command",
        "n": "Sparkra",
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
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": ""
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
        "g": "A-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
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
        "g": "A-6",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-6."
      },
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
        "g": "B-4",
        "t": "Magic Command",
        "n": "Time Bomb",
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
        "g": "B-6",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "B-7",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-6."
      },
      {
        "g": "B-8",
        "t": "Attack Command",
        "n": "Circle Raid",
        "c": "100 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-6."
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Stop Block",
        "c": "30 LP",
        "cond": "Becomes available when in Intellectual disposition."
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
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
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
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-6."
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Intellectual disposition."
      },
      {
        "g": "D-3",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
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
        "g": "A-1",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
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
        "g": "A-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": "Becomes available after unlocking Secret: Green at B-4."
      },
      {
        "g": "A-5",
        "t": "Magic Command",
        "n": "Firaga Burst",
        "c": "300 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-4."
      },
      {
        "g": "B-1",
        "t": "Movement Command",
        "n": "Superglide",
        "c": "10 LP",
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
        "g": "B-3",
        "t": "Attack Command",
        "n": "Meteor Crash",
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
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
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
        "g": "C-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
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
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Wyvern disposition."
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "200 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-4."
      },
      {
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Bahamut disposition."
      },
      {
        "g": "E-1",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": ""
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Wyvern disposition."
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Reload Boost",
        "c": "150 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-4."
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
        "g": "A-6",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "60 LP",
        "cond": "Becomes available when in Warrior disposition."
      },
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
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "50 LP",
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
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "40 LP",
        "cond": ""
      },
      {
        "g": "B-7",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
        "cond": ""
      },
      {
        "g": "B-8",
        "t": "Attack Command",
        "n": "Blitz",
        "c": "100 LP",
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
        "g": "C-6",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": "Becomes available when in Warrior disposition."
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
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
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Cure Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Paladin disposition."
      },
      {
        "g": "E-1",
        "t": "Stat Ability",
        "n": "Magic Boost",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "20 LP",
        "cond": ""
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Cure Boost",
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
        "g": "G-2",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": ""
      }
    ],
    "Skelterwild": [
      {
        "g": "A-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-4."
      },
      {
        "g": "A-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after unlocking Secret: Green at A-5."
      },
      {
        "g": "A-7",
        "t": "Attack Command",
        "n": "Ars Arcanum",
        "c": "400 LP",
        "cond": "Becomes available after unlocking Secret: Green at A-5."
      },
      {
        "g": "B-3",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
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
        "g": "B-5",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "200 LP",
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
        "g": "B-7",
        "t": "Magic Command",
        "n": "Ice Barrage",
        "c": "300 LP",
        "cond": "Becomes available after unlocking Secret: Green at B-4."
      },
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
        "g": "C-4",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Savage disposition."
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Blizzard Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Savage disposition."
      },
      {
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "300 LP",
        "cond": "Becomes available when in Fiend disposition."
      },
      {
        "g": "D-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x5",
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
        "g": "D-6",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "50 LP",
        "cond": "Becomes available when in Fiend disposition."
      },
      {
        "g": "E-2",
        "t": "Support Ability",
        "n": "EXP Walker",
        "c": "400 LP",
        "cond": ""
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "E-4",
        "t": "Stat Ability",
        "n": "Poison Block",
        "c": "30 LP",
        "cond": ""
      },
      {
        "g": "E-5",
        "t": "Stat Ability",
        "n": "Reload Boost",
        "c": "150 LP",
        "cond": ""
      },
      {
        "g": "E-6",
        "t": "Magic Command",
        "n": "Deep Freeze",
        "c": "400 LP",
        "cond": ""
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
        "g": "B-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
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
        "g": "C-1",
        "t": "Stat Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": "Becomes available when in Heavy Hitter disposition."
      },
      {
        "g": "C-2",
        "t": "Stat Ability",
        "n": "Attack Boost",
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
        "g": "D-1",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "60 LP",
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
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "20 LP",
        "cond": ""
      },
      {
        "g": "D-4",
        "t": "Stat Ability",
        "n": "Dark Screen",
        "c": "40 LP",
        "cond": ""
      },
      {
        "g": "D-5",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "D-6",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "60 LP",
        "cond": "Becomes available after unlocking Secret: Green at D-5."
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Light Screen",
        "c": "40 LP",
        "cond": "Becomes available after unlocking Secret: Green at E-4."
      },
      {
        "g": "E-4",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": ""
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
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Defense Boost",
        "c": "100 LP",
        "cond": "Becomes available after unlocking Secret: Green at E-4."
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
        "g": "A-4",
        "t": "Stats Ability",
        "n": "Sleep Block",
        "c": "30 LP",
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
        "g": "B-4",
        "t": "Stats Ability",
        "n": "Defense Boost",
        "c": "100 LP",
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
        "t": "Stats Ability",
        "n": "Slow Block",
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
        "g": "D-3",
        "t": "Magic Command",
        "n": "Balloon",
        "c": "50 LP",
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
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Stop Block",
        "c": "30 LP",
        "cond": "Available after Secret: Green at D-2 has been unlocked."
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "HP Boost",
        "c": "30 LP",
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
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "Available after Secret: Green at D-2 has been unlocked."
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "40 LP",
        "cond": "Becomes available when in Mumbler disposition."
      },
      {
        "g": "F-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
        "cond": ""
      },
      {
        "g": "G-2",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "Available after Secret: Green at D-2 has been unlocked."
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
        "g": "A-6",
        "t": "Spirits Ability",
        "n": "Support Boost",
        "c": "200 LP",
        "cond": "Becomes available when in Two-face disposition."
      },
      {
        "g": "B-4",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "40 LP",
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
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "50 LP",
        "cond": "Becomes available when in Two-face disposition."
      },
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
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
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
        "g": "C-6",
        "t": "Stat Ability",
        "n": "Bind Block",
        "c": "30 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-5."
      },
      {
        "g": "C-7",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "50 LP",
        "cond": "Becomes available after unlocking Secret: Green at C-5."
      },
      {
        "g": "D-2",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
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
        "g": "D-5",
        "t": "Stat Ability",
        "n": "Fire Boost",
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
        "g": "D-7",
        "t": "Stat Ability",
        "n": "Magic Haste",
        "c": "100 LP",
        "cond": "Becomes available when in Deadeye disposition."
      },
      {
        "g": "E-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 20",
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
        "g": "G-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 30",
        "cond": ""
      },
      {
        "g": "G-3",
        "t": "Secret",
        "n": "Secret: Red",
        "c": "250 LP",
        "cond": ""
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
        "g": "B-1",
        "t": "Stat Ability",
        "n": "Thunder Screen",
        "c": "20 LP",
        "cond": ""
      },
      {
        "g": "B-2",
        "t": "Magic Command",
        "n": "Thundara",
        "c": "10 LP",
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
        "g": "B-4",
        "t": "Support Ability",
        "n": "Damage Syphon",
        "c": "300 LP",
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
        "n": "Thunder Boost",
        "c": "30 LP",
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
        "g": "D-1",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": ""
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
        "g": "D-3",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Photon Don disposition."
      },
      {
        "g": "E-1",
        "t": "Secret",
        "n": "Secret: Red",
        "c": "50 LP",
        "cond": ""
      },
      {
        "g": "E-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
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
        "g": "F-1",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "150 LP",
        "cond": "Becomes available when in Blue Streak disposition."
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "100 LP",
        "cond": ""
      },
      {
        "g": "F-3",
        "t": "Stat Ability",
        "n": "Thunder Boost",
        "c": "50 LP",
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
        "g": "G-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 25",
        "cond": ""
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
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Bind Block",
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
        "t": "Stat Ability",
        "n": "Confusion Block",
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
        "g": "C-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x2",
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
        "g": "C-4",
        "t": "Stat Ability",
        "n": "Attack Haste",
        "c": "30 LP",
        "cond": "Becomes available when in Hunter disposition."
      },
      {
        "g": "C-5",
        "t": "Stat Ability",
        "n": "Attack Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Hunter disposition."
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
        "n": "Poison Block",
        "c": "30 LP",
        "cond": ""
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
        "g": "A-4",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 15",
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
        "g": "A-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
        "cond": ""
      },
      {
        "g": "B-1",
        "t": "Attack Command",
        "n": "Fire Windmill",
        "c": "150 LP",
        "cond": "Becomes available when in Sauna disposition."
      },
      {
        "g": "B-2",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Sauna disposition."
      },
      {
        "g": "B-3",
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
        "g": "B-6",
        "t": "Stat Ability",
        "n": "Fire Boost",
        "c": "30 LP",
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
        "g": "C-3",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "60 LP",
        "cond": ""
      },
      {
        "g": "C-7",
        "t": "Stat Ability",
        "n": "Fire Screen",
        "c": "10 LP",
        "cond": ""
      },
      {
        "g": "D-1",
        "t": "Magic Command",
        "n": "Dark Firaga",
        "c": "400 LP",
        "cond": "Becomes available after Secret: Green at F-1 has been unlocked."
      },
      {
        "g": "D-2",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x3",
        "cond": "Becomes available after Secret: Green at F-1 has been unlocked."
      },
      {
        "g": "D-3",
        "t": "Support Ability",
        "n": "Combo Plus",
        "c": "200 LP",
        "cond": ""
      },
      {
        "g": "D-4",
        "t": "Magic Command",
        "n": "Balloonra",
        "c": "150 LP",
        "cond": "Becomes available after Secret: Green at F-1 has been unlocked."
      },
      {
        "g": "E-3",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "60 LP",
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
        "g": "F-1",
        "t": "Secret",
        "n": "Secret: Green",
        "c": "10 LP",
        "cond": "Becomes available when in Whirlpool disposition."
      },
      {
        "g": "F-2",
        "t": "Stat Ability",
        "n": "Water Boost",
        "c": "100 LP",
        "cond": "Becomes available when in Whirlpool disposition."
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
        "n": "Water Boost",
        "c": "50 LP",
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
        "g": "F-7",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Link x1",
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
        "g": "G-5",
        "t": "Stat Ability",
        "n": "Water Screen",
        "c": "40 LP",
        "cond": ""
      },
      {
        "g": "G-6",
        "t": "Quota",
        "n": "Checkpoint",
        "c": "Level 10",
        "cond": ""
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
  }
};
