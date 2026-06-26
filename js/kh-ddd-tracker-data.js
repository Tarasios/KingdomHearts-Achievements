/* =====================================================================
   Kingdom Hearts Dream Drop Distance — tracker data for the generic engine
   (js/kh-tracker.js). Defines the global TRACKER_GAME and registers it on
   window.KH_GAMES (read by js/kh-summary.js for the landing-page totals).
   This is a two-character game (Sora / Riku): see `chars`, per-character
   `variants` on sections, and items tagged with `c`.

   Only structure + stable English ids live here; all DISPLAY TEXT (item
   names, "where"/"how to obtain", notes, column headers) lives in
   lang/messages/<lang>/<page>.json and is matched by section id + item
   index — keep the item ORDER here in sync with the lang "items" map.

   The full data schema is documented at the top of js/kh-tracker.js.
   Terse keys to grep for: k = column/check field key, g = group header,
   c = per-character filter, th = check-header lang key; cross-section
   auto-completion = autoChecks, optional "Worlds" tab = worldSummary.
   ===================================================================== */
var TRACKER_GAME = {
  "id": "khddd",
  "storeKey": "khddd_progress_v1",
  "charKey": "khddd_char",
  "chars": [
    {
      "id": "sora",
      "label": "Sora"
    },
    {
      "id": "riku",
      "label": "Riku"
    }
  ],
  "trophyAuto": {
    "Command Collector": "commands",
    "Recipe Collector": "recipes",
    "Dream Piece Collector": "dreampieces",
    "Flick Rush Fever": "flickrush",
    "Ability Ace": "abilities",
    "Seekers of Secrets": { "section": "portals", "nameStartsWith": "Secret Portal" }
  },
  "tabs": [
    {
      "id": "trophies",
      "sections": [
        {
          "id": "trophies",
          "trophies": true,
          "cols": [
            {
              "k": "rarity",
              "rarity": true
            },
            {
              "k": "name",
              "name": true
            },
            {
              "k": "desc"
            }
          ],
          "items": [
            {
              "name": "Record Keeper"
            },
            {
              "name": "Star Combatant"
            },
            {
              "name": "Storyteller"
            },
            {
              "name": "Item Collector"
            },
            {
              "name": "Level Masters"
            },
            {
              "name": "Droplet Magnet"
            },
            {
              "name": "Dream Dropper"
            },
            {
              "name": "Deft Diver"
            },
            {
              "name": "Ace Diver"
            },
            {
              "name": "Loyal Customer"
            },
            {
              "name": "Command Collector"
            },
            {
              "name": "Recipe Collector"
            },
            {
              "name": "Dream Piece Collector"
            },
            {
              "name": "Mark of Mastery"
            },
            {
              "name": "A Divided World"
            },
            {
              "name": "Dark Intervention"
            },
            {
              "name": "Memory and Heart"
            },
            {
              "name": "Inhabitants of the Sleeping Worlds"
            },
            {
              "name": "Distinct Worlds"
            },
            {
              "name": "All for One, and One for All"
            },
            {
              "name": "A Sound Idea"
            },
            {
              "name": "The Depths of Darkness"
            },
            {
              "name": "Nostalgic"
            },
            {
              "name": "Flick Rush Fever"
            },
            {
              "name": "Medal Master"
            },
            {
              "name": "Lucky Seven"
            },
            {
              "name": "Super Cyclist"
            },
            {
              "name": "Balloon Master"
            },
            {
              "name": "Water Barrel Master"
            },
            {
              "name": "Candy Goggles Master"
            },
            {
              "name": "Easy as 1-2-3"
            },
            {
              "name": "True Trainer"
            },
            {
              "name": "Happy Campers"
            },
            {
              "name": "Kindred Spirits"
            },
            {
              "name": "Golden Egg"
            },
            {
              "name": "Strongest Link"
            },
            {
              "name": "Lifesaver"
            },
            {
              "name": "Ability Ace"
            },
            {
              "name": "Bull's-Eye"
            },
            {
              "name": "Sliding By"
            },
            {
              "name": "Super Hacker"
            },
            {
              "name": "Bubble Burster"
            },
            {
              "name": "Comic King"
            },
            {
              "name": "Maestro"
            },
            {
              "name": "Chain Reaction"
            },
            {
              "name": "Champions of All Districts"
            },
            {
              "name": "Champions of the Cathedral"
            },
            {
              "name": "Champions of the Digital World"
            },
            {
              "name": "Champions of the Endless Ocean"
            },
            {
              "name": "Champions of the Opéra House"
            },
            {
              "name": "Champions of the Harmonic Score"
            },
            {
              "name": "Champions of the Dark City"
            },
            {
              "name": "Brave Challengers"
            },
            {
              "name": "Seekers of Secrets"
            }
          ]
        },
        {
          "id": "shelf",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "desc"
            }
          ],
          "items": [
            {
              "name": "In the Clear"
            },
            {
              "name": "Badge of Pride"
            },
            {
              "name": "Stop Drop Roller"
            },
            {
              "name": "King of Rush"
            },
            {
              "name": "Keyslinger"
            },
            {
              "name": "In the Munny"
            },
            {
              "name": "Dream Pleaser"
            },
            {
              "name": "Portal Champ"
            },
            {
              "name": "Daring Diver"
            },
            {
              "name": "Motion Slickness"
            },
            {
              "name": "Treasure Seeker"
            },
            {
              "name": "Spirit Guide"
            },
            {
              "name": "Critical Praise"
            },
            {
              "name": "Reality Shifter"
            },
            {
              "name": "Pro Linker"
            },
            {
              "name": "Stat Builder"
            },
            {
              "name": "Ribbit Reaper"
            },
            {
              "name": "Keyblade Conqueror"
            }
          ]
        }
      ]
    },
    {
      "id": "records",
      "sections": [
        {
          "id": "records",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Meow Wounce",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Roll Call",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Whirling Bronco",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Fly-By Knight",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Hammer Throw",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Flame Thrower",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Decussation",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Poison Dash",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Water Blaster",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Bubble Blaster",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Paw Groove",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Equestrian Raid",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Swing Fling",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Belly Raid",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Target Shot",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Trap Shot",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Cure Sun",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Vacuum Ghost",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Berserker Bronco",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Lucky Dice",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Fire Blaster",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Poison Rain",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Flame Raid",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Ice Raid",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Tail Groove",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Aura Raid",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Unwind",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Whomperstomp",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Comet",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Unison Rush",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Chaos Snake",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Prism Light",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Trinity Limit",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Ragnarok",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Shining Hammer",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Fire Raid",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Wavesurfer",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Thunderstorm",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Darkest Fears",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Rising Wing",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Bladecharge",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Ghost Drive",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Slingshot",
              "g": "Reality Shifts",
              "w": "Traverse Town"
            },
            {
              "name": "Faithline",
              "g": "Reality Shifts",
              "w": "La Cité des Cloches"
            },
            {
              "name": "Bubble Burst",
              "g": "Reality Shifts",
              "w": "Prankster's Paradise"
            },
            {
              "name": "Code Break",
              "g": "Reality Shifts",
              "w": "The Grid"
            },
            {
              "name": "Wonder Comic",
              "g": "Reality Shifts",
              "w": "Country of the Musketeers"
            },
            {
              "name": "Melody Catcher",
              "g": "Reality Shifts",
              "w": "Symphony of Sorcery"
            },
            {
              "name": "Nightmare's End",
              "g": "Reality Shifts",
              "w": "The World That Never Was",
              "c": "sora"
            },
            {
              "name": "Mirage Split",
              "g": "Reality Shifts",
              "w": "The World That Never Was",
              "c": "riku"
            },
            {
              "name": "Kick Dive",
              "g": "Flowmotion"
            },
            {
              "name": "Shock Dive",
              "g": "Flowmotion"
            },
            {
              "name": "Sliding Dive",
              "g": "Flowmotion"
            },
            {
              "name": "Buzz Saw",
              "g": "Flowmotion"
            },
            {
              "name": "Blow-Off",
              "g": "Flowmotion"
            },
            {
              "name": "Wheel Rush",
              "g": "Flowmotion"
            },
            {
              "name": "Traverse Town",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "La Cité des Cloches",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "Prankster's Paradise",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "The Grid",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "Country of the Musketeers",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "Symphony of Sorcery",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "The World That Never Was",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "Ending",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "Traverse Town",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "La Cité des Cloches",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "Prankster's Paradise",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "The Grid",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "Country of the Musketeers",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "Symphony of Sorcery",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "The World That Never Was",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "Light Cycle",
              "g": "Mini-games",
              "w": "The Grid",
              "c": "riku"
            },
            {
              "name": "Balloon",
              "g": "Mini-games"
            },
            {
              "name": "Water Barrel",
              "g": "Mini-games"
            },
            {
              "name": "Candy Goggles",
              "g": "Mini-games"
            }
          ]
        }
      ]
    },
    {
      "id": "dreameaters",
      "sections": [
        {
          "id": "dreameaters",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "loc"
            }
          ],
          "items": [
            {
              "name": "Meow Wow",
              "nw": [
                "Traverse Town",
                "La Cité des Cloches"
              ],
              "rw": [
                "Traverse Town",
                "The Grid"
              ]
            },
            {
              "name": "Tama Sheep",
              "nw": [
                "Traverse Town",
                "La Cité des Cloches"
              ],
              "rw": [
                "Traverse Town"
              ]
            },
            {
              "name": "Yoggy Ram",
              "nw": [
                "Traverse Town",
                "La Cité des Cloches"
              ],
              "rw": [
                "The Grid"
              ]
            },
            {
              "name": "Komory Bat",
              "rare": false,
              "nw": [
                "Traverse Town",
                "La Cité des Cloches"
              ]
            },
            {
              "name": "Pricklemane",
              "rare": false,
              "nw": [
                "Traverse Town",
                "La Cité des Cloches"
              ]
            },
            {
              "name": "Hebby Repp",
              "rare": false,
              "nw": [
                "Traverse Town",
                "La Cité des Cloches"
              ]
            },
            {
              "name": "Sir Kyroo",
              "rare": false,
              "nw": [
                "Prankster's Paradise",
                "Country of the Musketeers"
              ]
            },
            {
              "name": "Toximander",
              "rare": false,
              "nw": [
                "La Cité des Cloches",
                "Country of the Musketeers"
              ]
            },
            {
              "name": "Fin Fatale",
              "rare": false,
              "nw": [
                "Prankster's Paradise",
                "Symphony of Sorcery"
              ]
            },
            {
              "name": "Tatsu Steed",
              "rare": false,
              "nw": [
                "Prankster's Paradise",
                "Symphony of Sorcery"
              ]
            },
            {
              "name": "Necho Cat",
              "nw": [
                "Traverse Town",
                "La Cité des Cloches"
              ],
              "rw": [
                "La Cité des Cloches"
              ]
            },
            {
              "name": "Thunderaffe",
              "nw": [
                "Symphony of Sorcery",
                "The World That Never Was"
              ],
              "rw": [
                "The World That Never Was"
              ]
            },
            {
              "name": "Kooma Panda",
              "nw": [
                "Traverse Town",
                "La Cité des Cloches"
              ],
              "rw": [
                "Traverse Town",
                "Prankster's Paradise"
              ]
            },
            {
              "name": "Pegaslick",
              "nw": [
                "Symphony of Sorcery",
                "The World That Never Was"
              ],
              "rw": [
                "Symphony of Sorcery"
              ]
            },
            {
              "name": "Iceguin Ace",
              "nw": [
                "Prankster's Paradise",
                "Country of the Musketeers"
              ],
              "rw": [
                "Prankster's Paradise"
              ]
            },
            {
              "name": "Peepsta Hoo",
              "rare": false,
              "nw": [
                "The Grid",
                "Country of the Musketeers"
              ]
            },
            {
              "name": "Escarglow",
              "rare": false,
              "nw": [
                "The Grid",
                "Symphony of Sorcery"
              ]
            },
            {
              "name": "KO Kabuto",
              "nw": [
                "The Grid",
                "Country of the Musketeers"
              ],
              "rw": [
                "The Grid"
              ]
            },
            {
              "name": "Wheeflower",
              "rare": false,
              "nw": [
                "La Cité des Cloches"
              ]
            },
            {
              "name": "Ghostabocky",
              "nw": [
                "Symphony of Sorcery",
                "The World That Never Was"
              ],
              "rw": [
                "Symphony of Sorcery"
              ]
            },
            {
              "name": "Zolephant",
              "nw": [
                "La Cité des Cloches",
                "Country of the Musketeers"
              ],
              "rw": [
                "La Cité des Cloches"
              ]
            },
            {
              "name": "Juggle Pup",
              "nw": [
                "Prankster's Paradise",
                "Symphony of Sorcery"
              ],
              "rw": [
                "Prankster's Paradise"
              ]
            },
            {
              "name": "Halbird",
              "nw": [
                "The Grid",
                "Country of the Musketeers"
              ],
              "rw": [
                "Country of the Musketeers"
              ]
            },
            {
              "name": "Staggerceps",
              "rare": false,
              "nw": [
                "Country of the Musketeers",
                "Symphony of Sorcery"
              ]
            },
            {
              "name": "Fishboné",
              "rare": false,
              "nw": [
                "Country of the Musketeers",
                "Symphony of Sorcery"
              ]
            },
            {
              "name": "Flowbermeow",
              "rare": false,
              "nw": [
                "Traverse Town",
                "Prankster's Paradise"
              ]
            },
            {
              "name": "Cyber Yog",
              "rare": false,
              "nw": [
                "The Grid"
              ]
            },
            {
              "name": "Chef Kyroo",
              "rare": false,
              "nw": [
                "Country of the Musketeers",
                "Symphony of Sorcery"
              ]
            },
            {
              "name": "Lord Kyroo",
              "rare": false,
              "nw": [
                "Prankster's Paradise"
              ]
            },
            {
              "name": "Tatsu Blaze",
              "rare": false,
              "nw": [
                "Traverse Town",
                "Country of the Musketeers"
              ]
            },
            {
              "name": "Electricorn",
              "rare": false,
              "nw": [
                "Symphony of Sorcery",
                "The World That Never Was"
              ]
            },
            {
              "name": "Woeflower",
              "rare": false,
              "nw": [
                "La Cité des Cloches",
                "Symphony of Sorcery"
              ]
            },
            {
              "name": "Jestabocky",
              "rare": false,
              "nw": [
                "Prankster's Paradise",
                "Country of the Musketeers"
              ]
            },
            {
              "name": "Eaglider",
              "rare": false,
              "nw": [
                "The Grid",
                "The World That Never Was"
              ]
            },
            {
              "name": "Me Me Bunny",
              "nw": [
                "Country of the Musketeers"
              ],
              "rw": [
                "Country of the Musketeers"
              ]
            },
            {
              "name": "Drill Sye",
              "nw": [
                "Traverse Town",
                "La Cité des Cloches"
              ],
              "rw": [
                "La Cité des Cloches"
              ]
            },
            {
              "name": "Tyranto Rex",
              "nw": [
                "Country of the Musketeers"
              ],
              "rw": [
                "Country of the Musketeers"
              ]
            },
            {
              "name": "Majik Lapin",
              "rare": false,
              "nw": [
                "The World That Never Was"
              ]
            },
            {
              "name": "Cera Terror",
              "rare": false,
              "nw": [
                "Traverse Town",
                "The World That Never Was"
              ]
            },
            {
              "name": "Skelterwild",
              "rare": false,
              "nw": [
                "The World That Never Was"
              ]
            },
            {
              "name": "Ducky Goose",
              "nw": [
                "Country of the Musketeers"
              ],
              "rw": [
                "Country of the Musketeers"
              ]
            },
            {
              "name": "Aura Lion",
              "nw": [
                "Country of the Musketeers"
              ],
              "rw": [
                "Country of the Musketeers"
              ]
            },
            {
              "name": "Ryu Dragon",
              "nw": [
                "Symphony of Sorcery",
                "The World That Never Was"
              ],
              "rw": [
                "Symphony of Sorcery"
              ]
            },
            {
              "name": "Drak Quack",
              "rare": false,
              "nw": [
                "The World That Never Was"
              ]
            },
            {
              "name": "Keeba Tiger",
              "rare": false,
              "nw": [
                "The World That Never Was"
              ]
            },
            {
              "name": "Meowjesty",
              "nightmare": false,
              "rare": false
            },
            {
              "name": "Sudo Neku",
              "nightmare": false,
              "rare": false
            },
            {
              "name": "Frootz Cat",
              "nightmare": false,
              "rare": false
            },
            {
              "name": "Ursa Circus",
              "nightmare": false,
              "rare": false
            },
            {
              "name": "Kab Kannon",
              "nightmare": false,
              "rare": false
            },
            {
              "name": "R & R Seal",
              "nightmare": false,
              "rare": false
            },
            {
              "name": "Catanuki",
              "nightmare": false,
              "rare": false
            },
            {
              "name": "Beatalike",
              "nightmare": false,
              "rare": false
            },
            {
              "name": "Tubguin Ace",
              "nightmare": false,
              "rare": false
            },
            {
              "name": "Spellican",
              "spirit": false,
              "rare": false
            },
            {
              "name": "Commantis",
              "spirit": false,
              "rare": false
            },
            {
              "name": "Char Clawbster",
              "spirit": false,
              "rare": false
            },
            {
              "name": "Chill Clawbster",
              "spirit": false,
              "rare": false
            },
            {
              "name": "Hockomonkey",
              "spirit": false,
              "rare": false
            },
            {
              "name": "Holey Moley",
              "spirit": false,
              "rare": false
            },
            {
              "name": "Wargoyle",
              "spirit": false,
              "rare": false
            },
            {
              "name": "Brawlamari",
              "spirit": false,
              "rare": false
            },
            {
              "name": "Queen Buzzerfly",
              "spirit": false,
              "rare": false
            },
            {
              "name": "Anti Black Coat",
              "spirit": false,
              "rare": false
            }
          ],
          "checks": [
            {
              "k": "spirit",
              "th": "th-dreameaters-spirit"
            },
            {
              "k": "nightmare",
              "th": "th-dreameaters-nightmare"
            },
            {
              "k": "rare",
              "th": "th-dreameaters-rare"
            }
          ]
        },
        {
          "id": "recipes",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "ing1"
            },
            {
              "k": "ing2"
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Meow Wow"
            },
            {
              "name": "Tama Sheep"
            },
            {
              "name": "Yoggy Ram"
            },
            {
              "name": "Komory Bat"
            },
            {
              "name": "Pricklemane"
            },
            {
              "name": "Hebby Repp"
            },
            {
              "name": "Sir Kyroo"
            },
            {
              "name": "Toximander"
            },
            {
              "name": "Fin Fatale"
            },
            {
              "name": "Tatsu Steed"
            },
            {
              "name": "Necho Cat"
            },
            {
              "name": "Thunderaffe"
            },
            {
              "name": "Kooma Panda"
            },
            {
              "name": "Pegaslick"
            },
            {
              "name": "Iceguin Ace"
            },
            {
              "name": "Peepsta Hoo"
            },
            {
              "name": "Escarglow"
            },
            {
              "name": "KO Kabuto"
            },
            {
              "name": "Wheeflower"
            },
            {
              "name": "Ghostabocky"
            },
            {
              "name": "Zolephant"
            },
            {
              "name": "Juggle Pup"
            },
            {
              "name": "Halbird"
            },
            {
              "name": "Staggerceps"
            },
            {
              "name": "Fishboné"
            },
            {
              "name": "Flowbermeow"
            },
            {
              "name": "Cyber Yog"
            },
            {
              "name": "Chef Kyroo"
            },
            {
              "name": "Lord Kyroo"
            },
            {
              "name": "Tatsu Blaze"
            },
            {
              "name": "Electricorn"
            },
            {
              "name": "Woeflower"
            },
            {
              "name": "Jestabocky"
            },
            {
              "name": "Eaglider"
            },
            {
              "name": "Me Me Bunny"
            },
            {
              "name": "Drill Sye"
            },
            {
              "name": "Tyranto Rex"
            },
            {
              "name": "Majik Lapin"
            },
            {
              "name": "Cera Terror"
            },
            {
              "name": "Skelterwild"
            },
            {
              "name": "Ducky Goose"
            },
            {
              "name": "Aura Lion"
            },
            {
              "name": "Ryu Dragon"
            },
            {
              "name": "Drak Quack"
            },
            {
              "name": "Keeba Tiger"
            },
            {
              "name": "Meowjesty"
            },
            {
              "name": "Sudo Neku"
            },
            {
              "name": "Frootz Cat"
            },
            {
              "name": "Ursa Circus"
            },
            {
              "name": "Kab Kannon"
            },
            {
              "name": "R & R Seal"
            },
            {
              "name": "Catanuki"
            },
            {
              "name": "Beatalike"
            },
            {
              "name": "Tubguin Ace"
            }
          ]
        }
      ]
    },
    {
      "id": "abilities",
      "sections": [
        {
          "id": "abilities",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Combo Plus",
              "g": "Support",
              "max": 3
            },
            {
              "name": "Air Combo Plus",
              "g": "Support",
              "max": 3
            },
            {
              "name": "Combo Master",
              "g": "Support",
              "max": 1
            },
            {
              "name": "EXP Boost",
              "g": "Support",
              "max": 1
            },
            {
              "name": "EXP Walker",
              "g": "Support",
              "max": 1
            },
            {
              "name": "EXP Zero",
              "g": "Support",
              "max": 1
            },
            {
              "name": "Damage Syphon",
              "g": "Support",
              "max": 1
            },
            {
              "name": "Second Chance",
              "g": "Support",
              "max": 1
            },
            {
              "name": "Once More",
              "g": "Support",
              "max": 1
            },
            {
              "name": "Scan",
              "g": "Support",
              "max": 1
            },
            {
              "name": "Leaf Bracer",
              "g": "Support",
              "max": 1
            },
            {
              "name": "Treasure Magnet",
              "g": "Support",
              "max": 5
            },
            {
              "name": "Link Critical",
              "g": "Spirit",
              "max": 1
            },
            {
              "name": "Support Boost",
              "g": "Spirit",
              "max": 3
            },
            {
              "name": "Waking Dream",
              "g": "Spirit",
              "max": 1
            }
          ],
          "counter": true
        },
        {
          "id": "abstats",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "HP Boost",
              "g": "Stats",
              "max": 5
            },
            {
              "name": "Fire Boost",
              "g": "Stats",
              "max": 3
            },
            {
              "name": "Blizzard Boost",
              "g": "Stats",
              "max": 3
            },
            {
              "name": "Thunder Boost",
              "g": "Stats",
              "max": 3
            },
            {
              "name": "Water Boost",
              "g": "Stats",
              "max": 3
            },
            {
              "name": "Cure Boost",
              "g": "Stats",
              "max": 3
            },
            {
              "name": "Item Boost",
              "g": "Stats",
              "max": 3
            },
            {
              "name": "Attack Haste",
              "g": "Stats",
              "max": 5
            },
            {
              "name": "Magic Haste",
              "g": "Stats",
              "max": 5
            },
            {
              "name": "Attack Boost",
              "g": "Stats",
              "max": 3
            },
            {
              "name": "Magic Boost",
              "g": "Stats",
              "max": 3
            },
            {
              "name": "Defense Boost",
              "g": "Stats",
              "max": 3
            },
            {
              "name": "Fire Screen",
              "g": "Stats",
              "max": 5
            },
            {
              "name": "Blizzard Screen",
              "g": "Stats",
              "max": 5
            },
            {
              "name": "Thunder Screen",
              "g": "Stats",
              "max": 5
            },
            {
              "name": "Water Screen",
              "g": "Stats",
              "max": 5
            },
            {
              "name": "Dark Screen",
              "g": "Stats",
              "max": 5
            },
            {
              "name": "Light Screen",
              "g": "Stats",
              "max": 5
            },
            {
              "name": "Mini Block",
              "g": "Stats",
              "max": 1
            },
            {
              "name": "Blindness Block",
              "g": "Stats",
              "max": 1
            },
            {
              "name": "Confusion Block",
              "g": "Stats",
              "max": 1
            },
            {
              "name": "Bind Block",
              "g": "Stats",
              "max": 1
            },
            {
              "name": "Poison Block",
              "g": "Stats",
              "max": 1
            },
            {
              "name": "Slow Block",
              "g": "Stats",
              "max": 1
            },
            {
              "name": "Sleep Block",
              "g": "Stats",
              "max": 1
            },
            {
              "name": "Stop Block",
              "g": "Stats",
              "max": 1
            },
            {
              "name": "Reload Boost",
              "g": "Stats",
              "max": 1
            },
            {
              "name": "Defender",
              "g": "Stats",
              "max": 1
            }
          ]
        }
      ]
    },
    {
      "id": "collection",
      "sections": [
        {
          "id": "commands",
          "groupCollapse": true,
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Quick Blitz",
              "g": "Attack"
            },
            {
              "name": "Blizzard Edge",
              "g": "Attack"
            },
            {
              "name": "Dark Break",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Slot Edge",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Blitz",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Meteor Crash",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Spark Dive",
              "g": "Attack"
            },
            {
              "name": "Poison Dive",
              "g": "Attack"
            },
            {
              "name": "Drain Dive",
              "g": "Attack"
            },
            {
              "name": "Sliding Dash",
              "g": "Attack"
            },
            {
              "name": "Thunder Dash",
              "g": "Attack"
            },
            {
              "name": "Sonic Blade",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Dark Aura",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Zantetsuken",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Strike Raid",
              "g": "Attack"
            },
            {
              "name": "Spark Raid",
              "g": "Attack"
            },
            {
              "name": "Circle Raid",
              "g": "Attack"
            },
            {
              "name": "Aerial Slam",
              "g": "Attack"
            },
            {
              "name": "Ars Arcanum",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Dark Splicer",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Gravity Strike",
              "g": "Attack"
            },
            {
              "name": "Confusing Strike",
              "g": "Attack"
            },
            {
              "name": "Tornado Strike",
              "g": "Attack"
            },
            {
              "name": "Prism Windmill",
              "g": "Attack"
            },
            {
              "name": "Timestorm",
              "g": "Attack"
            },
            {
              "name": "Fire Windmill",
              "g": "Attack"
            },
            {
              "name": "Icebreaker",
              "g": "Attack"
            },
            {
              "name": "Shadowbreaker",
              "g": "Attack"
            },
            {
              "name": "Magnet Spiral",
              "g": "Attack"
            },
            {
              "name": "Salvation",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Limit Storm",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Collision Magnet",
              "g": "Attack"
            },
            {
              "name": "Sacrifice",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Break Time",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Fire",
              "g": "Magic"
            },
            {
              "name": "Fira",
              "g": "Magic"
            },
            {
              "name": "Firaga",
              "g": "Magic"
            },
            {
              "name": "Dark Firaga",
              "g": "Magic",
              "c": "riku"
            },
            {
              "name": "Firaga Burst",
              "g": "Magic"
            },
            {
              "name": "Mega Flare",
              "g": "Magic"
            },
            {
              "name": "Blizzard",
              "g": "Magic"
            },
            {
              "name": "Blizzara",
              "g": "Magic"
            },
            {
              "name": "Blizzaga",
              "g": "Magic"
            },
            {
              "name": "Icicle Splitter",
              "g": "Magic"
            },
            {
              "name": "Deep Freeze",
              "g": "Magic"
            },
            {
              "name": "Ice Barrage",
              "g": "Magic"
            },
            {
              "name": "Thunder",
              "g": "Magic"
            },
            {
              "name": "Thundara",
              "g": "Magic"
            },
            {
              "name": "Thundaga",
              "g": "Magic"
            },
            {
              "name": "Triple Plasma",
              "g": "Magic"
            },
            {
              "name": "Cure",
              "g": "Magic"
            },
            {
              "name": "Cura",
              "g": "Magic"
            },
            {
              "name": "Curaga",
              "g": "Magic"
            },
            {
              "name": "Esuna",
              "g": "Magic"
            },
            {
              "name": "Zero Gravity",
              "g": "Magic"
            },
            {
              "name": "Zero Gravira",
              "g": "Magic"
            },
            {
              "name": "Zero Graviga",
              "g": "Magic"
            },
            {
              "name": "Zero Graviza",
              "g": "Magic"
            },
            {
              "name": "Balloon",
              "g": "Magic"
            },
            {
              "name": "Balloonra",
              "g": "Magic"
            },
            {
              "name": "Balloonga",
              "g": "Magic"
            },
            {
              "name": "Spark",
              "g": "Magic",
              "c": "sora"
            },
            {
              "name": "Sparkra",
              "g": "Magic",
              "c": "sora"
            },
            {
              "name": "Sparkga",
              "g": "Magic",
              "c": "sora"
            },
            {
              "name": "Faith",
              "g": "Magic",
              "c": "sora"
            },
            {
              "name": "Tornado",
              "g": "Magic",
              "c": "sora"
            },
            {
              "name": "Meteor",
              "g": "Magic",
              "c": "riku"
            },
            {
              "name": "Mini",
              "g": "Magic"
            },
            {
              "name": "Blackout",
              "g": "Magic"
            },
            {
              "name": "Time Bomb",
              "g": "Magic"
            },
            {
              "name": "Confuse",
              "g": "Magic"
            },
            {
              "name": "Bind",
              "g": "Magic"
            },
            {
              "name": "Poison",
              "g": "Magic"
            },
            {
              "name": "Slow",
              "g": "Magic"
            },
            {
              "name": "Sleep",
              "g": "Magic"
            },
            {
              "name": "Sleepra",
              "g": "Magic"
            },
            {
              "name": "Sleepga",
              "g": "Magic"
            },
            {
              "name": "Stop",
              "g": "Magic"
            },
            {
              "name": "Vanish",
              "g": "Magic"
            },
            {
              "name": "Potion",
              "g": "Item"
            },
            {
              "name": "Hi-Potion",
              "g": "Item"
            },
            {
              "name": "Mega-Potion",
              "g": "Item"
            },
            {
              "name": "Drop-Me-Not",
              "g": "Item"
            },
            {
              "name": "Drop-Me-Never",
              "g": "Item"
            },
            {
              "name": "Panacea",
              "g": "Item"
            },
            {
              "name": "Elixir",
              "g": "Item"
            },
            {
              "name": "Megalixir",
              "g": "Item"
            },
            {
              "name": "Dream Candy",
              "g": "Item"
            },
            {
              "name": "Jump",
              "g": "Movement"
            },
            {
              "name": "High Jump",
              "g": "Movement"
            },
            {
              "name": "Dodge Roll",
              "g": "Movement"
            },
            {
              "name": "Slide Roll",
              "g": "Movement",
              "c": "sora"
            },
            {
              "name": "Dark Roll",
              "g": "Movement",
              "c": "riku"
            },
            {
              "name": "Air Slide",
              "g": "Movement"
            },
            {
              "name": "Sonic Impact",
              "g": "Movement"
            },
            {
              "name": "Double Impact",
              "g": "Movement"
            },
            {
              "name": "Glide",
              "g": "Movement",
              "c": "sora"
            },
            {
              "name": "Superglide",
              "g": "Movement",
              "c": "sora"
            },
            {
              "name": "Shadow Slide",
              "g": "Movement",
              "c": "riku"
            },
            {
              "name": "Doubleflight",
              "g": "Movement",
              "c": "riku"
            },
            {
              "name": "Block",
              "g": "Defense"
            },
            {
              "name": "Wake-Up Block",
              "g": "Defense"
            },
            {
              "name": "Link Block",
              "g": "Defense",
              "c": "sora"
            },
            {
              "name": "Sliding Block",
              "g": "Defense"
            },
            {
              "name": "Dark Barrier",
              "g": "Defense",
              "c": "riku"
            },
            {
              "name": "Counter Rush",
              "g": "Reprisal",
              "c": "sora"
            },
            {
              "name": "Counter Aura",
              "g": "Reprisal",
              "c": "riku"
            },
            {
              "name": "Shadow Strike",
              "g": "Reprisal",
              "c": "riku"
            },
            {
              "name": "Payback Raid",
              "g": "Reprisal",
              "c": "sora"
            },
            {
              "name": "Payback Blast",
              "g": "Reprisal",
              "c": "riku"
            },
            {
              "name": "Aerial Recovery",
              "g": "Reprisal"
            },
            {
              "name": "Steep Climb",
              "g": "Reprisal",
              "c": "sora"
            },
            {
              "name": "Rapid Descent",
              "g": "Reprisal",
              "c": "riku"
            },
            {
              "name": "Sliding Sidewinder",
              "g": "Reprisal",
              "c": "sora"
            },
            {
              "name": "Sliding Crescent",
              "g": "Reprisal",
              "c": "riku"
            },
            {
              "name": "Pole Spin",
              "g": "Flowmotion"
            },
            {
              "name": "Pole Swing",
              "g": "Flowmotion"
            },
            {
              "name": "Rail Slide",
              "g": "Flowmotion"
            },
            {
              "name": "Kick Dive",
              "g": "Flowmotion"
            },
            {
              "name": "Buzz Saw",
              "g": "Flowmotion"
            },
            {
              "name": "Blow-Off",
              "g": "Flowmotion"
            },
            {
              "name": "Wheel Rush",
              "g": "Flowmotion"
            },
            {
              "name": "Sliding Dive",
              "g": "Flowmotion"
            },
            {
              "name": "Shock Dive",
              "g": "Flowmotion"
            }
          ]
        },
        {
          "id": "dreampieces",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Brilliant Fantasy"
            },
            {
              "name": "Charming Fantasy"
            },
            {
              "name": "Dulcet Figment"
            },
            {
              "name": "Dulcet Fancy"
            },
            {
              "name": "Dulcet Fantasy"
            },
            {
              "name": "Epic Fantasy"
            },
            {
              "name": "Fleeting Figment"
            },
            {
              "name": "Fleeting Fancy"
            },
            {
              "name": "Fleeting Fantasy"
            },
            {
              "name": "Grim Figment"
            },
            {
              "name": "Grim Fancy"
            },
            {
              "name": "Grim Fantasy"
            },
            {
              "name": "Intrepid Figment"
            },
            {
              "name": "Intrepid Fancy"
            },
            {
              "name": "Intrepid Fantasy"
            },
            {
              "name": "Lofty Figment"
            },
            {
              "name": "Lofty Fancy"
            },
            {
              "name": "Lofty Fantasy"
            },
            {
              "name": "Malleable Fantasy"
            },
            {
              "name": "Noble Figment"
            },
            {
              "name": "Noble Fancy"
            },
            {
              "name": "Noble Fantasy"
            },
            {
              "name": "Prickly Fantasy"
            },
            {
              "name": "Rampant Figment"
            },
            {
              "name": "Rampant Fancy"
            },
            {
              "name": "Rampant Fantasy"
            },
            {
              "name": "Savage Fantasy"
            },
            {
              "name": "Troubling Figment"
            },
            {
              "name": "Troubling Fancy"
            },
            {
              "name": "Troubling Fantasy"
            },
            {
              "name": "Vibrant Figment"
            },
            {
              "name": "Vibrant Fancy"
            },
            {
              "name": "Vibrant Fantasy"
            },
            {
              "name": "Wild Fantasy"
            },
            {
              "name": "Wondrous Figment"
            },
            {
              "name": "Wondrous Fancy"
            },
            {
              "name": "Wondrous Fantasy"
            }
          ]
        },
        {
          "id": "keyblades",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "how"
            }
          ],
          "variants": {
            "sora": [
              {
                "name": "Kingdom Key"
              },
              {
                "name": "Skull Noise"
              },
              {
                "name": "Guardian Bell"
              },
              {
                "name": "Ferris Gear"
              },
              {
                "name": "Dual Disc"
              },
              {
                "name": "Knockout Punch"
              },
              {
                "name": "All for One"
              },
              {
                "name": "Counterpoint"
              },
              {
                "name": "Divewing"
              },
              {
                "name": "End of Pain"
              },
              {
                "name": "Sweet Dreams"
              },
              {
                "name": "Unbound"
              },
              {
                "name": "Ultima Weapon"
              }
            ],
            "riku": [
              {
                "name": "Way to the Dawn"
              },
              {
                "name": "Skull Noise"
              },
              {
                "name": "Guardian Bell"
              },
              {
                "name": "Ocean's Rage"
              },
              {
                "name": "Dual Disc"
              },
              {
                "name": "Knockout Punch"
              },
              {
                "name": "All for One"
              },
              {
                "name": "Counterpoint"
              },
              {
                "name": "Divewing"
              },
              {
                "name": "End of Pain"
              },
              {
                "name": "Sweet Dreams"
              },
              {
                "name": "Unbound"
              },
              {
                "name": "Ultima Weapon"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "treasures",
      "sections": [
        {
          "id": "treasures",
          "collapsible": false,
          "groupCollapse": true,
          "journal": { "perRow": 8 },
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "area"
            },
            {
              "k": "loc"
            }
          ],
          "variants": {
            "sora": [
              {
                "name": "Ice Cream Cone",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Confetti Candy",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "g": "Traverse Town"
              },
              {
                "name": "Hi-Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Vibrant Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "g": "Traverse Town"
              },
              {
                "name": "Shield Cookie",
                "g": "Traverse Town"
              },
              {
                "name": "Water Barrel",
                "g": "Traverse Town"
              },
              {
                "name": "Hi-Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Ice Dream Cone",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Shield Cookie",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "g": "Traverse Town"
              },
              {
                "name": "Royal Cake",
                "g": "Traverse Town"
              },
              {
                "name": "Confetti Candy",
                "g": "Traverse Town"
              },
              {
                "name": "Rampant Figment",
                "g": "Traverse Town"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Traverse Town"
              },
              {
                "name": "Rampant Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Vibrant Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Troubling Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Spark",
                "g": "Traverse Town"
              },
              {
                "name": "Paint Gun: Red",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Ice Dream Cone",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "g": "Traverse Town"
              },
              {
                "name": "Intrepid Figment",
                "g": "Traverse Town"
              },
              {
                "name": "Ice Dream Cone",
                "g": "Traverse Town"
              },
              {
                "name": "Rampant Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Strike Raid",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Balloon",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Water Barrel",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Royal Cake",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Block-It Chocolate",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Dulcet Figment",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Balloon",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Sparkra",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Candy Goggles",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Lofty Figment",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Wheeflower Recipe",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Troubling Fancy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Paint Gun: Red",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Block-It Chocolate",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Noble Figment",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Balloon",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Sleepra",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Catanuki Recipe",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Paint Gun: Purple",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone 2",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Noble Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Water Barrel",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Fire Windmill",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Toximander Recipe",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Royal Cake",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Thunder Dash",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Hi-Potion",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Block-It Chocolate",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Blizzara",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Balloon",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Shield Cookie 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Malleable Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Paint Gun: Yellow",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Ice Dream Cone 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Block-It Chocolate 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Candy Goggles",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Water Barrel",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Ice Dream Cone 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Block-It Chocolate 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Aerial Slam",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Royal Cake",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Balloon",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Confetti Candy 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Rampant Fancy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Panacea",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Lofty Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Paint Gun: Sky Blue",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Zero Gravira",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Rampant Fancy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Candy Goggles",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Royal Cake",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Tatsu Steed Recipe",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Shield Cookie 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "g": "The Grid"
              },
              {
                "name": "Troubling Fancy",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "g": "The Grid"
              },
              {
                "name": "Water Barrel",
                "g": "The Grid"
              },
              {
                "name": "Block-It Chocolate 2",
                "g": "The Grid"
              },
              {
                "name": "Eaglider Recipe",
                "g": "The Grid"
              },
              {
                "name": "Candy Goggles",
                "g": "The Grid"
              },
              {
                "name": "Paint Gun: Black",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "g": "The Grid"
              },
              {
                "name": "Balloon",
                "g": "The Grid"
              },
              {
                "name": "Fleeting Figment",
                "g": "The Grid"
              },
              {
                "name": "Circle Raid",
                "g": "The Grid"
              },
              {
                "name": "Dulcet Figment",
                "g": "The Grid"
              },
              {
                "name": "Royal Cake",
                "g": "The Grid"
              },
              {
                "name": "Confetti Candy",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "g": "The Grid"
              },
              {
                "name": "Block-It Chocolate",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "g": "The Grid"
              },
              {
                "name": "Confetti Candy 2",
                "g": "The Grid"
              },
              {
                "name": "Wondrous Figment",
                "g": "The Grid"
              },
              {
                "name": "Fleeting Figment",
                "g": "The Grid"
              },
              {
                "name": "Balloon",
                "g": "The Grid"
              },
              {
                "name": "Hi-Potion",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "g": "The Grid"
              },
              {
                "name": "Candy Goggles",
                "g": "The Grid"
              },
              {
                "name": "Balloonra",
                "g": "The Grid"
              },
              {
                "name": "Water Barrel",
                "g": "The Grid"
              },
              {
                "name": "Ice Dream Cone 2",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie",
                "g": "The Grid"
              },
              {
                "name": "Hi-Potion",
                "g": "The Grid"
              },
              {
                "name": "Lofty Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Ice Dream Cone",
                "g": "The Grid"
              },
              {
                "name": "Cyber Yog Recipe",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie 2",
                "g": "The Grid"
              },
              {
                "name": "Ice Dream Cone",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "g": "The Grid"
              },
              {
                "name": "Paint Gun: Green",
                "g": "The Grid"
              },
              {
                "name": "Mega-Potion",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Confetti Candy 2",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Ice Dream Cone 3",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Block-It Chocolate 2",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Block-It Chocolate 2",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Mega-Potion",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Ice Dream Cone 2",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Paint Gun: Sky Blue",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Firaga",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dream Candy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Shield Cookie 2",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Candy Goggles",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Ice Dream Cone 2",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Paint Gun: Blue",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dream Candy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Confetti Candy 3",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dulcet Fancy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Fleeting Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Sparkga",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Royal Cake",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Block-It Chocolate 3",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Sonic Blade",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Fleeting Fancy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Chef Kyroo Recipe",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Water Barrel",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Royal Cake",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Tornado Strike",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dream Candy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Block-It Chocolate 3",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Elixir",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Glide",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Intrepid Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Ice Dream Cone 3",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Mega-Potion",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Prism Windmill",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Paint Gun: White",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Elixir",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Candy Goggles",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Tornado",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Royal Cake",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Intrepid Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Ice Dream Cone 3",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Mega-Potion",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Block-It Chocolate 3",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Epic Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Electricorn Recipe",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Triple Plasma",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Panacea",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Mega-Potion",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Shield Cookie 3",
                "g": "The World That Never Was"
              },
              {
                "name": "Dulcet Fantasy",
                "g": "The World That Never Was"
              },
              {
                "name": "Savage Fantasy",
                "g": "The World That Never Was"
              },
              {
                "name": "Salvation",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "g": "The World That Never Was"
              },
              {
                "name": "Dream Candy",
                "g": "The World That Never Was"
              },
              {
                "name": "Water Barrel",
                "g": "The World That Never Was"
              },
              {
                "name": "Drak Quack Recipe",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "g": "The World That Never Was"
              },
              {
                "name": "Block-It Chocolate 3",
                "g": "The World That Never Was"
              },
              {
                "name": "Shield Cookie 3",
                "g": "The World That Never Was"
              },
              {
                "name": "Confetti Candy 3",
                "g": "The World That Never Was"
              },
              {
                "name": "Wondrous Fantasy",
                "g": "The World That Never Was"
              },
              {
                "name": "Ice Dream Cone 3",
                "g": "The World That Never Was"
              },
              {
                "name": "Ars Arcanum",
                "g": "The World That Never Was"
              }
            ],
            "riku": [
              {
                "name": "Rampant Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "g": "Traverse Town"
              },
              {
                "name": "Yoggy Ram Recipe",
                "g": "Traverse Town"
              },
              {
                "name": "Ice Dream Cone",
                "g": "Traverse Town"
              },
              {
                "name": "Confetti Candy",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Intrepid Figment",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "g": "Traverse Town"
              },
              {
                "name": "Confetti Candy",
                "g": "Traverse Town"
              },
              {
                "name": "Candy Goggles",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Shield Cookie",
                "g": "Traverse Town"
              },
              {
                "name": "Confetti Candy",
                "g": "Traverse Town"
              },
              {
                "name": "Troubling Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Hi-Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "g": "Traverse Town"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Traverse Town"
              },
              {
                "name": "Paint Gun: Green",
                "g": "Traverse Town"
              },
              {
                "name": "Royal Cake",
                "g": "Traverse Town"
              },
              {
                "name": "Hi-Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Troubling Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Thunder",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Shield Cookie",
                "g": "Traverse Town"
              },
              {
                "name": "Intrepid Fragment",
                "g": "Traverse Town"
              },
              {
                "name": "Paint Gun: Sky Blue",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "g": "Traverse Town"
              },
              {
                "name": "Vibrant Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Ice Dream Cone",
                "g": "Traverse Town"
              },
              {
                "name": "Blizzard Edge",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie 2",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Fira",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Rampant Figment",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Paint Gun: Yellow",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Royal Cake",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Dulcet Figment",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Block-It Chocolate",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Candy Goggles",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Water Barrel",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Noble Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Balloon",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy 2",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Paint Gun: Purple",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Block-It Chocolate",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Sliding Crescent",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Water Barrel",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Paint Gun: Blue",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Balloon",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Panacea",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Shield Cookie 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Sir Kyroo Recipe",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Charming Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Mini",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Shield Cookie 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Candy Goggles",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Confetti Candy 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Block-It Chocolate 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Collision Magnet",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Confetti Candy 2",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Royal Cake",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Water Barrel",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Panacea",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Confetti Candy",
                "g": "The Grid"
              },
              {
                "name": "Thundara",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "g": "The Grid"
              },
              {
                "name": "Fleeting Figment",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "g": "The Grid"
              },
              {
                "name": "Confetti Candy 2",
                "g": "The Grid"
              },
              {
                "name": "Counter Aura",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "g": "The Grid"
              },
              {
                "name": "Balloon",
                "g": "The Grid"
              },
              {
                "name": "Royal Cake",
                "g": "The Grid"
              },
              {
                "name": "Wondrous Figment",
                "g": "The Grid"
              },
              {
                "name": "Noble Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Ice Dream Cone 2",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "g": "The Grid"
              },
              {
                "name": "Water Barrel",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "g": "The Grid"
              },
              {
                "name": "Troubling Fancy",
                "g": "The Grid"
              },
              {
                "name": "Wondrous Figment",
                "g": "The Grid"
              },
              {
                "name": "Paint Gun: White",
                "g": "The Grid"
              },
              {
                "name": "Hi-Potion",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "g": "The Grid"
              },
              {
                "name": "Candy Goggles",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie 2",
                "g": "The Grid"
              },
              {
                "name": "Royal Cake",
                "g": "The Grid"
              },
              {
                "name": "Balloon",
                "g": "The Grid"
              },
              {
                "name": "Hi-Potion",
                "g": "The Grid"
              },
              {
                "name": "Block-It Chocolate",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie 2",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "g": "The Grid"
              },
              {
                "name": "Fleeting Figment",
                "g": "The Grid"
              },
              {
                "name": "Peepsta Hoo Recipe",
                "g": "The Grid"
              },
              {
                "name": "Gravity Strike",
                "g": "The Grid"
              },
              {
                "name": "Block-It Chocolate 2",
                "g": "The Grid"
              },
              {
                "name": "Noble Figment",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "g": "The Grid"
              },
              {
                "name": "Confetti Candy 2",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "g": "The Grid"
              },
              {
                "name": "Paint Gun: Black",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "g": "The Grid"
              },
              {
                "name": "Hi-Potion",
                "g": "The Grid"
              },
              {
                "name": "Water Barrel",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Confetti Candy 2",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Royal Cake",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Shadowbreaker",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Mega-Potion",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Shield Cookie 2",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Panacea",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dream Candy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Candy Goggles",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Prickly Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Fleeting Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Shield Cookie 3",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Stop",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Confetti Candy 3",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Blizzaga",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Ducky Goose Recipe",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Ice Dream Cone 2",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Mega-Potion",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Royal Cake",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Fleeting Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dream Candy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Staggerceps Recipe",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Mega-Potion",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Confetti Candy 2",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Balloon",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Water Barrel",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Royal Cake",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Dream Candy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Zero Graviza",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Confetti Candy 3",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Shield Cookie 3",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Paint Gun: Green",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Mega-Potion",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Drop-Me-Not",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Intrepid Fancy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Elixir",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Intrepid Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Mega-Potion",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Paint Gun: Red",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Ryu Dragon Recipe",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Ice Barrage",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Candy Goggles",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Block-It Chocolate 3",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Ice Dream Cone 3",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Dulcet Fancy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Confetti Candy 3",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Dream Candy",
                "g": "The World That Never Was"
              },
              {
                "name": "Curaga",
                "g": "The World That Never Was"
              },
              {
                "name": "Doubleflight",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "g": "The World That Never Was"
              },
              {
                "name": "Confetti Candy 3",
                "g": "The World That Never Was"
              },
              {
                "name": "Dulcet Fantasy",
                "g": "The World That Never Was"
              },
              {
                "name": "Dark Splicer",
                "g": "The World That Never Was"
              },
              {
                "name": "Dream Candy",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "g": "The World That Never Was"
              },
              {
                "name": "Keeba Tiger Recipe",
                "g": "The World That Never Was"
              },
              {
                "name": "Ice Dream Cone 3",
                "g": "The World That Never Was"
              },
              {
                "name": "Drop-Me-Not",
                "g": "The World That Never Was"
              },
              {
                "name": "Lofty Fantasy",
                "g": "The World That Never Was"
              },
              {
                "name": "Spark Raid",
                "g": "The World That Never Was"
              },
              {
                "name": "Intrepid Fancy",
                "g": "The World That Never Was"
              },
              {
                "name": "Royal Cake",
                "g": "The World That Never Was"
              },
              {
                "name": "Block-It Chocolate 3",
                "g": "The World That Never Was"
              },
              {
                "name": "Mega-Potion",
                "g": "The World That Never Was"
              },
              {
                "name": "Balloon",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "g": "The World That Never Was"
              },
              {
                "name": "Skelterwild Recipe",
                "g": "The World That Never Was"
              },
              {
                "name": "Candy Goggles",
                "g": "The World That Never Was"
              },
              {
                "name": "Wondrous Fantasy",
                "g": "The World That Never Was"
              },
              {
                "name": "Paint Gun: Black",
                "g": "The World That Never Was"
              },
              {
                "name": "Shield Cookie 3",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "g": "The World That Never Was"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "portals",
      "sections": [
        {
          "id": "portals",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "area"
            },
            {
              "k": "unlock"
            },
            {
              "k": "enemy"
            },
            {
              "k": "reward"
            }
          ],
          "variants": {
            "sora": [
              {
                "name": "Special Portal #1",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Kooma Panda",
                    "check": "rare"
                  },
                  {
                    "sec": "recipes",
                    "name": "Kooma Panda"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Troubling Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Rampant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Vibrant Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Meow Wow",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Troubling Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Rampant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Vibrant Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Kooma Panda",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Tama Sheep",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Troubling Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Rampant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Vibrant Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "recipes",
                    "name": "Thunderaffe"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Malleable Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Malleable Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Malleable Fantasy"
                  }
                ]
              },
              {
                "name": "Secret Portal",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #1",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Necho Cat",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Drill Sye",
                    "check": "rare"
                  },
                  {
                    "sec": "recipes",
                    "name": "Drill Sye"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Zolephant",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Zolephant",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Malleable Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Necho Cat",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Zolephant",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Drill Sye",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Malleable Fantasy"
                  }
                ]
              },
              {
                "name": "Secret Portal",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #1",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Iceguin Ace",
                    "check": "rare"
                  },
                  {
                    "sec": "recipes",
                    "name": "Iceguin Ace"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Troubling Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Rampant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Vibrant Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Juggle Pup",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Troubling Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Rampant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Vibrant Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Juggle Pup",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Prickly Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Iceguin Ace",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Prickly Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Juggle Pup",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Prickly Fantasy"
                  }
                ]
              },
              {
                "name": "Secret Portal",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #1",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "KO Kabuto",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Yoggy Ram",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "KO Kabuto",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Yoggy Ram",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "KO Kabuto",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Malleable Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "KO Kabuto",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Yoggy Ram",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Malleable Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Meow Wow",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Malleable Fantasy"
                  }
                ]
              },
              {
                "name": "Secret Portal",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #1",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Me Me Bunny",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Fleeting Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Grim Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Halbird",
                    "check": "rare"
                  },
                  {
                    "sec": "recipes",
                    "name": "Halbird"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Fleeting Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Grim Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Tyranto Rex",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Fleeting Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Grim Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Ducky Goose",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Tyranto Rex",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Prickly Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Halbird",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Prickly Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Aura Lion",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Prickly Fantasy"
                  }
                ]
              },
              {
                "name": "Secret Portal",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #1",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Pegaslick",
                    "check": "rare"
                  },
                  {
                    "sec": "recipes",
                    "name": "Pegaslick"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Fleeting Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Savage Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Grim Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Ryu Dragon",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Intrepid Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Savage Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Grim Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Ghostabocky",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Fleeting Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Intrepid Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Savage Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Ryu Dragon",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Prickly Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Savage Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Pegaslick",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Prickly Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Savage Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Pegaslick",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Ryu Dragon",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Wild Fantasy"
                  }
                ]
              },
              {
                "name": "Secret Portal",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #1",
                "g": "The World That Never Was",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Intrepid Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Savage Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Wild Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "The World That Never Was",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Savage Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Wild Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "The World That Never Was",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Wild Fantasy"
                  }
                ]
              }
            ],
            "riku": [
              {
                "name": "Special Portal #1",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Meow Wow",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Troubling Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Rampant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Vibrant Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Kooma Panda",
                    "check": "rare"
                  },
                  {
                    "sec": "recipes",
                    "name": "Flowbermeow"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Troubling Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Rampant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Vibrant Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Tama Sheep",
                    "check": "rare"
                  },
                  {
                    "sec": "recipes",
                    "name": "Tama Sheep"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Troubling Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Rampant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Vibrant Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "recipes",
                    "name": "Thunderaffe"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Charming Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Charming Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "Traverse Town",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Charming Fantasy"
                  }
                ]
              },
              {
                "name": "Secret Portal",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #1",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Zolephant",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Drill Sye",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Necho Cat",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Necho Cat",
                    "check": "rare"
                  },
                  {
                    "sec": "recipes",
                    "name": "Necho Cat"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Charming Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Necho Cat",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Charming Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "La Cité des Cloches",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Zolephant",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Drill Sye",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Charming Fantasy"
                  }
                ]
              },
              {
                "name": "Secret Portal",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #1",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Juggle Pup",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Troubling Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Rampant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Vibrant Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Iceguin Ace",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Juggle Pup",
                    "check": "rare"
                  },
                  {
                    "sec": "recipes",
                    "name": "Juggle Pup"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Troubling Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Rampant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Vibrant Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Juggle Pup",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Iceguin Ace",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Epic Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Iceguin Ace",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Epic Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "Prankster's Paradise",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Iceguin Ace",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Epic Fantasy"
                  }
                ]
              },
              {
                "name": "Secret Portal",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #1",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "KO Kabuto",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Yoggy Ram",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "KO Kabuto",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Yoggy Ram",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Dulcet Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Lofty Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Noble Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "KO Kabuto",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Charming Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "KO Kabuto",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Yoggy Ram",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Charming Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "The Grid",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Meow Wow",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Charming Fantasy"
                  }
                ]
              },
              {
                "name": "Secret Portal",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #1",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Aura Lion",
                    "check": "rare"
                  },
                  {
                    "sec": "recipes",
                    "name": "Aura Lion"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Fleeting Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Grim Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Ducky Goose",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Me Me Bunny",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Fleeting Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Grim Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Me Me Bunny",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Fleeting Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Grim Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Aura Lion",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Epic Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Halbird",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Epic Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "Country of the Musketeers",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Aura Lion",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Me Me Bunny",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Epic Fantasy"
                  }
                ]
              },
              {
                "name": "Secret Portal",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #1",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Ryu Dragon",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Fleeting Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Intrepid Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Grim Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Ghostabocky",
                    "check": "rare"
                  },
                  {
                    "sec": "recipes",
                    "name": "Ghostabocky"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Fleeting Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Intrepid Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Grim Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Pegaslick",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Fleeting Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Intrepid Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Grim Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #4",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Ryu Dragon",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Savage Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Epic Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #5",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Pegaslick",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Savage Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Epic Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #6",
                "g": "Symphony of Sorcery",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Pegaslick",
                    "check": "rare"
                  },
                  {
                    "sec": "dreameaters",
                    "name": "Ryu Dragon",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Brilliant Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #1",
                "g": "The World That Never Was",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Brilliant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Intrepid Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Savage Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #2",
                "g": "The World That Never Was",
                "gives": [
                  {
                    "sec": "dreameaters",
                    "name": "Thunderaffe",
                    "check": "rare"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Brilliant Fantasy"
                  },
                  {
                    "sec": "dreampieces",
                    "name": "Savage Fantasy"
                  }
                ]
              },
              {
                "name": "Special Portal #3",
                "g": "The World That Never Was",
                "gives": [
                  {
                    "sec": "dreampieces",
                    "name": "Brilliant Fantasy"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "id": "flickrush",
      "sections": [
        {
          "id": "flickrush",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Training Cup"
            },
            {
              "name": "Beginner's Cup"
            },
            {
              "name": "Rainbow Cup"
            },
            {
              "name": "Digital Cup"
            },
            {
              "name": "Tin Pin Cup"
            },
            {
              "name": "Speed Cup"
            },
            {
              "name": "Yummy Cup"
            },
            {
              "name": "Final Cup"
            },
            {
              "name": "Horror Cup"
            },
            {
              "name": "Secret Cup"
            }
          ]
        }
      ]
    }
  ],
  "worldSummary": {
    "worlds": [
      "Traverse Town",
      "La Cité des Cloches",
      "Prankster's Paradise",
      "The Grid",
      "Country of the Musketeers",
      "Symphony of Sorcery",
      "The World That Never Was"
    ],
    "sections": [
      "treasures",
      "portals",
      {
        "id": "records",
        "group": "Dive Mode",
        "key": "name",
        "label": "{how}",
        "title": "wt-dive",
        "where": []
      },
      {
        "id": "records",
        "group": "Reality Shifts",
        "key": "w",
        "title": "wt-reality",
        "where": []
      },
      {
        "id": "records",
        "group": "Mini-games",
        "key": "w",
        "title": "wt-minigame",
        "where": []
      },
      {
        "id": "dreameaters",
        "check": "nightmare",
        "worldsKey": "nw",
        "title": "wt-nightmare",
        "where": []
      },
      {
        "id": "dreameaters",
        "check": "rare",
        "worldsKey": "rw",
        "title": "wt-rare",
        "where": []
      }
    ]
  }
};

/* ---------------------------------------------------------------------------
   Post-build wiring (kept here so the big data literal above stays declarative)

   A treasure chest whose reward IS a Dream Piece marks that piece collected
   in the Collection tab when the chest is checked — a smart cross-off that
   still stays editable, since pieces also drop from enemies.
   (Spirit Recipes live under the Dream Eaters tab, not duplicated here.)
--------------------------------------------------------------------------- */
(function () {
  var byId = function (list, id) { return list.find(function (x) { return x.id === id; }); };
  var tabs = TRACKER_GAME.tabs;
  var collection = byId(tabs, "collection");
  var dreampieces = byId(collection.sections, "dreampieces");
  var pieceNames = {};
  (dreampieces.items || []).forEach(function (p) { pieceNames[p.name] = true; });
  var treasures = byId(byId(tabs, "treasures").sections, "treasures");
  ["sora", "riku"].forEach(function (ch) {
    (treasures.variants[ch] || []).forEach(function (it) {
      if (pieceNames[it.name]) it.gives = [{ sec: "dreampieces", name: it.name }];
    });
  });
})();

(window.KH_GAMES = window.KH_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;
