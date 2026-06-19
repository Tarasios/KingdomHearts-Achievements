/* =====================================================================
   Kingdom Hearts Re:Chain of Memories — tracker data for the generic engine
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
  "id": "khcom",
  "storeKey": "khcom_progress_v1",
  "charKey": "khcom_char",
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
    "Sleight Master": "sleights",
    "Card Master Sora": "cards-sora",
    "Card Master Riku": "cards-riku",
    "Character Professor Sora": "characters-sora",
    "Character Professor Riku": "characters-riku",
    "Mini-game Maniac Sora": "minigames"
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
              "name": "Game Clear: Proud with Sora"
            },
            {
              "name": "Game Clear: Proud with Riku"
            },
            {
              "name": "Undefeated"
            },
            {
              "name": "Natural Player Sora"
            },
            {
              "name": "Natural Player Riku"
            },
            {
              "name": "Novice Player Sora"
            },
            {
              "name": "Novice Player Riku"
            },
            {
              "name": "Veggie Master"
            },
            {
              "name": "Ace Pilot"
            },
            {
              "name": "High Jumper"
            },
            {
              "name": "Sky Diver"
            },
            {
              "name": "Bee Buster"
            },
            {
              "name": "A Slumber to Remember"
            },
            {
              "name": "Sleight Master"
            },
            {
              "name": "Card of Memories"
            },
            {
              "name": "Woven Memories"
            },
            {
              "name": "The Truth"
            },
            {
              "name": "Road to Dawn"
            },
            {
              "name": "Hard Hitter"
            },
            {
              "name": "Confronting with Darkness"
            },
            {
              "name": "Challenge from the Inner Darkness"
            },
            {
              "name": "Overcoming the Darkness"
            },
            {
              "name": "Complete Record"
            },
            {
              "name": "Card Master Sora"
            },
            {
              "name": "Storyteller Sora"
            },
            {
              "name": "Character Professor Sora"
            },
            {
              "name": "Mini-game Maniac Sora"
            },
            {
              "name": "Record Keeper Riku"
            },
            {
              "name": "Card Master Riku"
            },
            {
              "name": "Storyteller Riku"
            },
            {
              "name": "Character Professor Riku"
            },
            {
              "name": "Novice Deck Builder"
            },
            {
              "name": "Expert Deck Builder"
            },
            {
              "name": "Premium Card Maker"
            },
            {
              "name": "No Escape"
            },
            {
              "name": "Level Counter Limit: Sora"
            },
            {
              "name": "Level Counter Limit: Riku"
            },
            {
              "name": "Card Breaker"
            },
            {
              "name": "Tightrope Walker"
            },
            {
              "name": "Interceptor"
            },
            {
              "name": "Duel Master"
            },
            {
              "name": "Battle Card Collector"
            },
            {
              "name": "Moogle Mogul"
            },
            {
              "name": "Regular Customer"
            },
            {
              "name": "Room Creator"
            },
            {
              "name": "Treasure Hunter"
            },
            {
              "name": "Ace Striker"
            }
          ]
        }
      ]
    },
    {
      "id": "sleights",
      "char": "sora",
      "sections": [
        {
          "id": "sleights",
          "char": "sora",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "combo"
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Sliding Dash",
              "g": "Attack Sleights"
            },
            {
              "name": "Stun Impact",
              "g": "Attack Sleights"
            },
            {
              "name": "Strike Raid",
              "g": "Attack Sleights"
            },
            {
              "name": "Blitz",
              "g": "Attack Sleights"
            },
            {
              "name": "Zantetsuken",
              "g": "Attack Sleights"
            },
            {
              "name": "Sonic Blade",
              "g": "Attack Sleights"
            },
            {
              "name": "Ars Arcanum",
              "g": "Attack Sleights"
            },
            {
              "name": "Ragnarok",
              "g": "Attack Sleights"
            },
            {
              "name": "Trinity Limit",
              "g": "Attack Sleights"
            },
            {
              "name": "Fira",
              "g": "Magic Sleights"
            },
            {
              "name": "Firaga",
              "g": "Magic Sleights"
            },
            {
              "name": "Blizzara",
              "g": "Magic Sleights"
            },
            {
              "name": "Blizzaga",
              "g": "Magic Sleights"
            },
            {
              "name": "Thundara",
              "g": "Magic Sleights"
            },
            {
              "name": "Thundaga",
              "g": "Magic Sleights"
            },
            {
              "name": "Cura",
              "g": "Magic Sleights"
            },
            {
              "name": "Curaga",
              "g": "Magic Sleights"
            },
            {
              "name": "Gravira",
              "g": "Magic Sleights"
            },
            {
              "name": "Graviga",
              "g": "Magic Sleights"
            },
            {
              "name": "Stopra",
              "g": "Magic Sleights"
            },
            {
              "name": "Stopga",
              "g": "Magic Sleights"
            },
            {
              "name": "Aerora",
              "g": "Magic Sleights"
            },
            {
              "name": "Aeroga",
              "g": "Magic Sleights"
            },
            {
              "name": "Warpinator",
              "g": "Magic Sleights"
            },
            {
              "name": "Warp",
              "g": "Magic Sleights"
            },
            {
              "name": "Blizzard Raid",
              "g": "Magic Sleights"
            },
            {
              "name": "Synchro",
              "g": "Magic Sleights"
            },
            {
              "name": "Fire Raid",
              "g": "Magic Sleights"
            },
            {
              "name": "Aqua Splash",
              "g": "Magic Sleights"
            },
            {
              "name": "Terror",
              "g": "Magic Sleights"
            },
            {
              "name": "Gifted Miracle",
              "g": "Magic Sleights"
            },
            {
              "name": "Bind",
              "g": "Magic Sleights"
            },
            {
              "name": "Shock Impact",
              "g": "Magic Sleights"
            },
            {
              "name": "Homing Blizzara",
              "g": "Magic Sleights"
            },
            {
              "name": "Quake",
              "g": "Magic Sleights"
            },
            {
              "name": "Teleport",
              "g": "Magic Sleights"
            },
            {
              "name": "Thunder Raid",
              "g": "Magic Sleights"
            },
            {
              "name": "Confuse",
              "g": "Magic Sleights"
            },
            {
              "name": "Firaga Burst",
              "g": "Magic Sleights"
            },
            {
              "name": "Reflect Raid",
              "g": "Magic Sleights"
            },
            {
              "name": "Magnet Spiral",
              "g": "Magic Sleights"
            },
            {
              "name": "Lethal Frame",
              "g": "Magic Sleights"
            },
            {
              "name": "Tornado",
              "g": "Magic Sleights"
            },
            {
              "name": "Freeze",
              "g": "Magic Sleights"
            },
            {
              "name": "Judgment",
              "g": "Magic Sleights"
            },
            {
              "name": "Holy",
              "g": "Magic Sleights"
            },
            {
              "name": "Raging Storm",
              "g": "Magic Sleights"
            },
            {
              "name": "Mega Flare",
              "g": "Magic Sleights"
            },
            {
              "name": "Proud Roar LV2",
              "g": "Summon Sleights"
            },
            {
              "name": "Proud Roar LV3",
              "g": "Summon Sleights"
            },
            {
              "name": "Showtime LV2",
              "g": "Summon Sleights"
            },
            {
              "name": "Showtime LV3",
              "g": "Summon Sleights"
            },
            {
              "name": "Cross-slash",
              "g": "Summon Sleights"
            },
            {
              "name": "Cross-slash+",
              "g": "Summon Sleights"
            },
            {
              "name": "Omnislash",
              "g": "Summon Sleights"
            },
            {
              "name": "Splash LV2",
              "g": "Summon Sleights"
            },
            {
              "name": "Splash LV3",
              "g": "Summon Sleights"
            },
            {
              "name": "Twinkle LV2",
              "g": "Summon Sleights"
            },
            {
              "name": "Twinkle LV3",
              "g": "Summon Sleights"
            },
            {
              "name": "Paradise LV2",
              "g": "Summon Sleights"
            },
            {
              "name": "Paradise LV3",
              "g": "Summon Sleights"
            },
            {
              "name": "Idyll Romp",
              "g": "Summon Sleights"
            },
            {
              "name": "Flare Breath LV2",
              "g": "Summon Sleights"
            },
            {
              "name": "Flare Breath LV3",
              "g": "Summon Sleights"
            },
            {
              "name": "Magic LV2",
              "g": "Friend Sleights"
            },
            {
              "name": "Magic LV3",
              "g": "Friend Sleights"
            },
            {
              "name": "Stardust Blitz",
              "g": "Friend Sleights"
            },
            {
              "name": "Goofy Tornado LV2",
              "g": "Friend Sleights"
            },
            {
              "name": "Goofy Tornado LV3",
              "g": "Friend Sleights"
            },
            {
              "name": "Goofy Smash",
              "g": "Friend Sleights"
            },
            {
              "name": "Wild Crash",
              "g": "Friend Sleights"
            },
            {
              "name": "Lucky Bounty LV2",
              "g": "Friend Sleights"
            },
            {
              "name": "Lucky Bounty LV3",
              "g": "Friend Sleights"
            },
            {
              "name": "Sandstorm LV2",
              "g": "Friend Sleights"
            },
            {
              "name": "Sandstorm LV3",
              "g": "Friend Sleights"
            },
            {
              "name": "Surprise! LV2",
              "g": "Friend Sleights"
            },
            {
              "name": "Surprise! LV3",
              "g": "Friend Sleights"
            },
            {
              "name": "Spiral Wave LV2",
              "g": "Friend Sleights"
            },
            {
              "name": "Spiral Wave LV3",
              "g": "Friend Sleights"
            },
            {
              "name": "Hummingbird LV2",
              "g": "Friend Sleights"
            },
            {
              "name": "Hummingbird LV3",
              "g": "Friend Sleights"
            },
            {
              "name": "Furious Volley LV2",
              "g": "Friend Sleights"
            },
            {
              "name": "Furious Volley LV3",
              "g": "Friend Sleights"
            }
          ]
        }
      ]
    },
    {
      "id": "cards",
      "sections": [
        {
          "id": "cards",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "loc"
            },
            {
              "k": "how"
            }
          ],
          "variants": {
            "sora": [
              {
                "name": "Kingdom Key",
                "g": "Attack Cards"
              },
              {
                "name": "Three Wishes",
                "g": "Attack Cards"
              },
              {
                "name": "Crabclaw",
                "g": "Attack Cards"
              },
              {
                "name": "Pumpkinhead",
                "g": "Attack Cards"
              },
              {
                "name": "Fairy Harp",
                "g": "Attack Cards"
              },
              {
                "name": "Wishing Star",
                "g": "Attack Cards"
              },
              {
                "name": "Spellbinder",
                "g": "Attack Cards"
              },
              {
                "name": "Metal Chocobo",
                "g": "Attack Cards"
              },
              {
                "name": "Olympia",
                "g": "Attack Cards"
              },
              {
                "name": "Lionheart",
                "g": "Attack Cards"
              },
              {
                "name": "Lady Luck",
                "g": "Attack Cards"
              },
              {
                "name": "Divine Rose",
                "g": "Attack Cards"
              },
              {
                "name": "Oathkeeper",
                "g": "Attack Cards"
              },
              {
                "name": "Oblivion",
                "g": "Attack Cards"
              },
              {
                "name": "Ultima Weapon",
                "g": "Attack Cards"
              },
              {
                "name": "Diamond Dust",
                "g": "Attack Cards"
              },
              {
                "name": "One-Winged Angel",
                "g": "Attack Cards"
              },
              {
                "name": "Star Seeker",
                "g": "Attack Cards"
              },
              {
                "name": "Total Eclipse",
                "g": "Attack Cards"
              },
              {
                "name": "Midnight Roar",
                "g": "Attack Cards"
              },
              {
                "name": "Maverick Flare",
                "g": "Attack Cards"
              },
              {
                "name": "Two Become One",
                "g": "Attack Cards"
              },
              {
                "name": "Bond of Flame",
                "g": "Attack Cards"
              },
              {
                "name": "Fire",
                "g": "Magic Cards"
              },
              {
                "name": "Blizzard",
                "g": "Magic Cards"
              },
              {
                "name": "Thunder",
                "g": "Magic Cards"
              },
              {
                "name": "Cure",
                "g": "Magic Cards"
              },
              {
                "name": "Gravity",
                "g": "Magic Cards"
              },
              {
                "name": "Stop",
                "g": "Magic Cards"
              },
              {
                "name": "Aero",
                "g": "Magic Cards"
              },
              {
                "name": "Simba",
                "g": "Summon Cards"
              },
              {
                "name": "Genie",
                "g": "Summon Cards"
              },
              {
                "name": "Bambi",
                "g": "Summon Cards"
              },
              {
                "name": "Dumbo",
                "g": "Summon Cards"
              },
              {
                "name": "Tinker Bell",
                "g": "Summon Cards"
              },
              {
                "name": "Mushu",
                "g": "Summon Cards"
              },
              {
                "name": "Cloud",
                "g": "Summon Cards"
              },
              {
                "name": "Potion",
                "g": "Item Cards"
              },
              {
                "name": "Hi-Potion",
                "g": "Item Cards"
              },
              {
                "name": "Mega-Potion",
                "g": "Item Cards"
              },
              {
                "name": "Ether",
                "g": "Item Cards"
              },
              {
                "name": "Mega-Ether",
                "g": "Item Cards"
              },
              {
                "name": "Elixir",
                "g": "Item Cards"
              },
              {
                "name": "Megalixir",
                "g": "Item Cards"
              },
              {
                "name": "Donald",
                "g": "Friend Cards"
              },
              {
                "name": "Goofy",
                "g": "Friend Cards"
              },
              {
                "name": "Aladdin",
                "g": "Friend Cards"
              },
              {
                "name": "Ariel",
                "g": "Friend Cards"
              },
              {
                "name": "Jack",
                "g": "Friend Cards"
              },
              {
                "name": "Peter Pan",
                "g": "Friend Cards"
              },
              {
                "name": "The Beast",
                "g": "Friend Cards"
              },
              {
                "name": "Pluto",
                "g": "Friend Cards"
              },
              {
                "name": "Shadow",
                "g": "Enemy Cards"
              },
              {
                "name": "Soldier",
                "g": "Enemy Cards"
              },
              {
                "name": "Powerwild",
                "g": "Enemy Cards"
              },
              {
                "name": "Bouncywild",
                "g": "Enemy Cards"
              },
              {
                "name": "Large Body",
                "g": "Enemy Cards"
              },
              {
                "name": "Fat Bandit",
                "g": "Enemy Cards"
              },
              {
                "name": "Sea Neon",
                "g": "Enemy Cards"
              },
              {
                "name": "Bandit",
                "g": "Enemy Cards"
              },
              {
                "name": "Pirate",
                "g": "Enemy Cards"
              },
              {
                "name": "Red Nocturne",
                "g": "Enemy Cards"
              },
              {
                "name": "Blue Rapsody",
                "g": "Enemy Cards"
              },
              {
                "name": "Yellow Opera",
                "g": "Enemy Cards"
              },
              {
                "name": "Green Requiem",
                "g": "Enemy Cards"
              },
              {
                "name": "Wizard",
                "g": "Enemy Cards"
              },
              {
                "name": "Air Soldier",
                "g": "Enemy Cards"
              },
              {
                "name": "Barrel Spider",
                "g": "Enemy Cards"
              },
              {
                "name": "Wight Knight",
                "g": "Enemy Cards"
              },
              {
                "name": "Air Pirate",
                "g": "Enemy Cards"
              },
              {
                "name": "Gargoyle",
                "g": "Enemy Cards"
              },
              {
                "name": "Search Ghost",
                "g": "Enemy Cards"
              },
              {
                "name": "Aquatank",
                "g": "Enemy Cards"
              },
              {
                "name": "Screwdiver",
                "g": "Enemy Cards"
              },
              {
                "name": "Wyvern",
                "g": "Enemy Cards"
              },
              {
                "name": "Defender",
                "g": "Enemy Cards"
              },
              {
                "name": "White Mushroom",
                "g": "Enemy Cards"
              },
              {
                "name": "Black Fungus",
                "g": "Enemy Cards"
              },
              {
                "name": "Creeper Plant",
                "g": "Enemy Cards"
              },
              {
                "name": "Tornado Step",
                "g": "Enemy Cards"
              },
              {
                "name": "Crescendo",
                "g": "Enemy Cards"
              },
              {
                "name": "Neoshadow",
                "g": "Enemy Cards"
              },
              {
                "name": "Guard Armor",
                "g": "Enemy Cards"
              },
              {
                "name": "Hades",
                "g": "Enemy Cards"
              },
              {
                "name": "Trickmaster",
                "g": "Enemy Cards"
              },
              {
                "name": "Jafar",
                "g": "Enemy Cards"
              },
              {
                "name": "Ursula",
                "g": "Enemy Cards"
              },
              {
                "name": "Oogie Boogie",
                "g": "Enemy Cards"
              },
              {
                "name": "Parasite Cage",
                "g": "Enemy Cards"
              },
              {
                "name": "Hook",
                "g": "Enemy Cards"
              },
              {
                "name": "Malificent",
                "g": "Enemy Cards"
              },
              {
                "name": "Darkside",
                "g": "Enemy Cards"
              },
              {
                "name": "Riku Replica",
                "g": "Enemy Cards"
              },
              {
                "name": "Card Soldier",
                "g": "Enemy Cards"
              },
              {
                "name": "Ansem",
                "g": "Enemy Cards"
              },
              {
                "name": "Xemnas",
                "g": "Enemy Cards"
              },
              {
                "name": "Xigbar",
                "g": "Enemy Cards"
              },
              {
                "name": "Xaldin",
                "g": "Enemy Cards"
              },
              {
                "name": "Vexen",
                "g": "Enemy Cards"
              },
              {
                "name": "Lexaeus",
                "g": "Enemy Cards"
              },
              {
                "name": "Zexion",
                "g": "Enemy Cards"
              },
              {
                "name": "Saïx",
                "g": "Enemy Cards"
              },
              {
                "name": "Axel",
                "g": "Enemy Cards"
              },
              {
                "name": "Demyx",
                "g": "Enemy Cards"
              },
              {
                "name": "Luxord",
                "g": "Enemy Cards"
              },
              {
                "name": "Marluxia",
                "g": "Enemy Cards"
              },
              {
                "name": "Larxene",
                "g": "Enemy Cards"
              },
              {
                "name": "Roxas",
                "g": "Enemy Cards"
              },
              {
                "name": "Tranquil Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Teeming Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Feeble Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Almighty Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Sleeping Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Looming Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Premium Room",
                "g": "Map Cards"
              },
              {
                "name": "White Room",
                "g": "Map Cards"
              },
              {
                "name": "Black Room",
                "g": "Map Cards"
              },
              {
                "name": "Bottomless Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Roulette Room",
                "g": "Map Cards"
              },
              {
                "name": "Martial Waking",
                "g": "Map Cards"
              },
              {
                "name": "Sorcerous Waking",
                "g": "Map Cards"
              },
              {
                "name": "Alchemic Waking",
                "g": "Map Cards"
              },
              {
                "name": "Meeting Ground",
                "g": "Map Cards"
              },
              {
                "name": "Stagnant Space",
                "g": "Map Cards"
              },
              {
                "name": "Strong Initiative",
                "g": "Map Cards"
              },
              {
                "name": "Lasting Daze",
                "g": "Map Cards"
              },
              {
                "name": "Calm Bounty",
                "g": "Map Cards"
              },
              {
                "name": "Guarded Trove",
                "g": "Map Cards"
              },
              {
                "name": "False Bounty",
                "g": "Map Cards"
              },
              {
                "name": "Moment's Reprieve",
                "g": "Map Cards"
              },
              {
                "name": "Mingling Worlds",
                "g": "Map Cards"
              },
              {
                "name": "Moogle Room",
                "g": "Map Cards"
              },
              {
                "name": "Key to Rewards",
                "g": "Map Cards"
              },
              {
                "name": "Key of Beginnings",
                "g": "Map Cards"
              },
              {
                "name": "Key of Guidance",
                "g": "Map Cards"
              },
              {
                "name": "Key to Truth",
                "g": "Map Cards"
              },
              {
                "name": "Random Joker",
                "g": "Map Cards"
              },
              {
                "name": "Traverse Town",
                "g": "World Cards"
              },
              {
                "name": "Agrabah",
                "g": "World Cards"
              },
              {
                "name": "Olympus Coliseum",
                "g": "World Cards"
              },
              {
                "name": "Wonderland",
                "g": "World Cards"
              },
              {
                "name": "Monstro",
                "g": "World Cards"
              },
              {
                "name": "Halloween Town",
                "g": "World Cards"
              },
              {
                "name": "Atlantica",
                "g": "World Cards"
              },
              {
                "name": "Neverland",
                "g": "World Cards"
              },
              {
                "name": "Hollow Bastion",
                "g": "World Cards"
              },
              {
                "name": "100 Acre Wood",
                "g": "World Cards"
              },
              {
                "name": "Twilight Town",
                "g": "World Cards"
              },
              {
                "name": "Destiny Islands",
                "g": "World Cards"
              },
              {
                "name": "Gimmick Card",
                "g": "Gimmick Cards"
              },
              {
                "name": "Gold Card",
                "g": "Special Cards"
              },
              {
                "name": "Platinum Card",
                "g": "Special Cards"
              }
            ],
            "riku": [
              {
                "name": "Soul Eater",
                "g": "Battle Cards"
              },
              {
                "name": "Potion",
                "g": "Battle Cards"
              },
              {
                "name": "Hi-Potion",
                "g": "Battle Cards"
              },
              {
                "name": "The King",
                "g": "Battle Cards"
              },
              {
                "name": "Gimmick Card",
                "g": "Battle Cards"
              },
              {
                "name": "Shadow",
                "g": "Enemy Cards"
              },
              {
                "name": "Large Body",
                "g": "Enemy Cards"
              },
              {
                "name": "Powerwild",
                "g": "Enemy Cards"
              },
              {
                "name": "Fat Bandit",
                "g": "Enemy Cards"
              },
              {
                "name": "Search Ghost",
                "g": "Enemy Cards"
              },
              {
                "name": "Sea Neon",
                "g": "Enemy Cards"
              },
              {
                "name": "Wight Knight",
                "g": "Enemy Cards"
              },
              {
                "name": "Pirate",
                "g": "Enemy Cards"
              },
              {
                "name": "Defender",
                "g": "Enemy Cards"
              },
              {
                "name": "Darkball",
                "g": "Enemy Cards"
              },
              {
                "name": "Guard Armor",
                "g": "Enemy Cards"
              },
              {
                "name": "Parasite Cage",
                "g": "Enemy Cards"
              },
              {
                "name": "Trickmaster",
                "g": "Enemy Cards"
              },
              {
                "name": "Darkside",
                "g": "Enemy Cards"
              },
              {
                "name": "Hades",
                "g": "Enemy Cards"
              },
              {
                "name": "Jafar-Genie",
                "g": "Enemy Cards"
              },
              {
                "name": "Oogie Boogie",
                "g": "Enemy Cards"
              },
              {
                "name": "Ursula",
                "g": "Enemy Cards"
              },
              {
                "name": "Hook",
                "g": "Enemy Cards"
              },
              {
                "name": "Dragon Maleficent",
                "g": "Enemy Cards"
              },
              {
                "name": "Lexaeus",
                "g": "Enemy Cards"
              },
              {
                "name": "Zexion",
                "g": "Enemy Cards"
              },
              {
                "name": "Tranquil Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Teeming Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Feeble Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Almighty Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Sleeping Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Looming Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Black Room",
                "g": "Map Cards"
              },
              {
                "name": "Bottomless Darkness",
                "g": "Map Cards"
              },
              {
                "name": "Roulette Room",
                "g": "Map Cards"
              },
              {
                "name": "Martial Waking",
                "g": "Map Cards"
              },
              {
                "name": "Meeting Ground",
                "g": "Map Cards"
              },
              {
                "name": "Stagnant Space",
                "g": "Map Cards"
              },
              {
                "name": "Strong Initiative",
                "g": "Map Cards"
              },
              {
                "name": "Lasting Daze",
                "g": "Map Cards"
              },
              {
                "name": "Moment's Reprieve",
                "g": "Map Cards"
              },
              {
                "name": "Mingling Worlds",
                "g": "Map Cards"
              },
              {
                "name": "Key of Beginnings",
                "g": "Map Cards"
              },
              {
                "name": "Key of Guidance",
                "g": "Map Cards"
              },
              {
                "name": "Key to Truth",
                "g": "Map Cards"
              },
              {
                "name": "Random Joker",
                "g": "Map Cards"
              },
              {
                "name": "Traverse Town",
                "g": "World Cards"
              },
              {
                "name": "Agrabah",
                "g": "World Cards"
              },
              {
                "name": "Olympus Coliseum",
                "g": "World Cards"
              },
              {
                "name": "Wonderland",
                "g": "World Cards"
              },
              {
                "name": "Monstro",
                "g": "World Cards"
              },
              {
                "name": "Halloween Town",
                "g": "World Cards"
              },
              {
                "name": "Atlantica",
                "g": "World Cards"
              },
              {
                "name": "Neverland",
                "g": "World Cards"
              },
              {
                "name": "Hollow Bastion",
                "g": "World Cards"
              },
              {
                "name": "Twilight Town",
                "g": "World Cards"
              },
              {
                "name": "Destiny Islands",
                "g": "World Cards"
              },
              {
                "name": "Castle Oblivion",
                "g": "World Cards"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "characters",
      "sections": [
        {
          "id": "characters",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "loc"
            },
            {
              "k": "how"
            }
          ],
          "variants": {
            "sora": [
              {
                "name": "Sora",
                "g": "Characters I"
              },
              {
                "name": "Donald Duck",
                "g": "Characters I"
              },
              {
                "name": "Goofy",
                "g": "Characters I"
              },
              {
                "name": "Jiminy Cricket",
                "g": "Characters I"
              },
              {
                "name": "Pluto",
                "g": "Characters I"
              },
              {
                "name": "Riku",
                "g": "Characters I"
              },
              {
                "name": "Kairi",
                "g": "Characters I"
              },
              {
                "name": "Naminé",
                "g": "Characters II"
              },
              {
                "name": "Riku Replica",
                "g": "Characters II"
              },
              {
                "name": "Vexen",
                "g": "Characters II"
              },
              {
                "name": "Axel",
                "g": "Characters II"
              },
              {
                "name": "Marluxia",
                "g": "Characters II"
              },
              {
                "name": "Larxene",
                "g": "Characters II"
              },
              {
                "name": "Simba",
                "g": "Others"
              },
              {
                "name": "Dumbo",
                "g": "Others"
              },
              {
                "name": "Bambi",
                "g": "Others"
              },
              {
                "name": "Mushu",
                "g": "Others"
              },
              {
                "name": "The Moogles",
                "g": "Others"
              },
              {
                "name": "Leon",
                "g": "Traverse Town"
              },
              {
                "name": "Yuffie",
                "g": "Traverse Town"
              },
              {
                "name": "Aerith",
                "g": "Traverse Town"
              },
              {
                "name": "Cid",
                "g": "Traverse Town"
              },
              {
                "name": "Alice",
                "g": "Wonderland"
              },
              {
                "name": "The Queen of Hearts",
                "g": "Wonderland"
              },
              {
                "name": "The White Rabbit",
                "g": "Wonderland"
              },
              {
                "name": "Card of Hearts",
                "g": "Wonderland"
              },
              {
                "name": "Card of Spades",
                "g": "Wonderland"
              },
              {
                "name": "The Chesire Cat",
                "g": "Wonderland"
              },
              {
                "name": "Hercules",
                "g": "Olympus Coliseum"
              },
              {
                "name": "Philoctetes",
                "g": "Olympus Coliseum"
              },
              {
                "name": "Hades",
                "g": "Olympus Coliseum"
              },
              {
                "name": "Cloud",
                "g": "Olympus Coliseum"
              },
              {
                "name": "Aladdin",
                "g": "Agrabah"
              },
              {
                "name": "Genie",
                "g": "Agrabah"
              },
              {
                "name": "Jasmine",
                "g": "Agrabah"
              },
              {
                "name": "Iago",
                "g": "Agrabah"
              },
              {
                "name": "Jafar",
                "g": "Agrabah"
              },
              {
                "name": "Jafar-Genie",
                "g": "Agrabah"
              },
              {
                "name": "Sora",
                "g": "Halloween Town"
              },
              {
                "name": "Donald Duck",
                "g": "Halloween Town"
              },
              {
                "name": "Goofy",
                "g": "Halloween Town"
              },
              {
                "name": "Jack",
                "g": "Halloween Town"
              },
              {
                "name": "Sally",
                "g": "Halloween Town"
              },
              {
                "name": "Dr. Finkelstein",
                "g": "Halloween Town"
              },
              {
                "name": "Oogie Boogie",
                "g": "Halloween Town"
              },
              {
                "name": "Pinocchio",
                "g": "Monstro"
              },
              {
                "name": "Geppetto",
                "g": "Monstro"
              },
              {
                "name": "Ariel",
                "g": "Atlantica"
              },
              {
                "name": "Sebastian",
                "g": "Atlantica"
              },
              {
                "name": "Flounder",
                "g": "Atlantica"
              },
              {
                "name": "Ursula",
                "g": "Atlantica"
              },
              {
                "name": "Peter Pan",
                "g": "Neverland"
              },
              {
                "name": "Tinker Bell",
                "g": "Neverland"
              },
              {
                "name": "Wendy",
                "g": "Neverland"
              },
              {
                "name": "Hook",
                "g": "Neverland"
              },
              {
                "name": "The Beast",
                "g": "Hollow Bastion"
              },
              {
                "name": "Belle",
                "g": "Hollow Bastion"
              },
              {
                "name": "Maleficent",
                "g": "Hollow Bastion"
              },
              {
                "name": "Dragon Maleficent",
                "g": "Hollow Bastion"
              },
              {
                "name": "Winnie the Pooh",
                "g": "100 Acre Wood"
              },
              {
                "name": "Piglet",
                "g": "100 Acre Wood"
              },
              {
                "name": "Owl",
                "g": "100 Acre Wood"
              },
              {
                "name": "Roo",
                "g": "100 Acre Wood"
              },
              {
                "name": "Eeyore",
                "g": "100 Acre Wood"
              },
              {
                "name": "Tigger",
                "g": "100 Acre Wood"
              },
              {
                "name": "Rabbit",
                "g": "100 Acre Wood"
              },
              {
                "name": "Tidus",
                "g": "Destiny Islands"
              },
              {
                "name": "Wakka",
                "g": "Destiny Islands"
              },
              {
                "name": "Selphie",
                "g": "Destiny Islands"
              },
              {
                "name": "Shadow",
                "g": "The Heartless"
              },
              {
                "name": "Soldier",
                "g": "The Heartless"
              },
              {
                "name": "Large Body",
                "g": "The Heartless"
              },
              {
                "name": "Red Nocturne",
                "g": "The Heartless"
              },
              {
                "name": "Blue Rapsody",
                "g": "The Heartless"
              },
              {
                "name": "Yellow Opera",
                "g": "The Heartless"
              },
              {
                "name": "Green Requiem",
                "g": "The Heartless"
              },
              {
                "name": "Powerwild",
                "g": "The Heartless"
              },
              {
                "name": "Bouncywild",
                "g": "The Heartless"
              },
              {
                "name": "Air Soldier",
                "g": "The Heartless"
              },
              {
                "name": "Bandit",
                "g": "The Heartless"
              },
              {
                "name": "Fat Bandit",
                "g": "The Heartless"
              },
              {
                "name": "Barrel Spider",
                "g": "The Heartless"
              },
              {
                "name": "Search Ghost",
                "g": "The Heartless"
              },
              {
                "name": "Sea Neon",
                "g": "The Heartless"
              },
              {
                "name": "Screwdiver",
                "g": "The Heartless"
              },
              {
                "name": "Aquatank",
                "g": "The Heartless"
              },
              {
                "name": "Wight Knight",
                "g": "The Heartless"
              },
              {
                "name": "Gargoyle",
                "g": "The Heartless"
              },
              {
                "name": "Pirate",
                "g": "The Heartless"
              },
              {
                "name": "Air Pirate",
                "g": "The Heartless"
              },
              {
                "name": "Darkball",
                "g": "The Heartless"
              },
              {
                "name": "Defender",
                "g": "The Heartless"
              },
              {
                "name": "Wyvern",
                "g": "The Heartless"
              },
              {
                "name": "Wizard",
                "g": "The Heartless"
              },
              {
                "name": "Neoshadow",
                "g": "The Heartless"
              },
              {
                "name": "White Mushroom",
                "g": "The Heartless"
              },
              {
                "name": "Black Fungus",
                "g": "The Heartless"
              },
              {
                "name": "Creeper Plant",
                "g": "The Heartless"
              },
              {
                "name": "Tornado Step",
                "g": "The Heartless"
              },
              {
                "name": "Crescendo",
                "g": "The Heartless"
              },
              {
                "name": "Guard Armor",
                "g": "The Heartless"
              },
              {
                "name": "Parasite Cage",
                "g": "The Heartless"
              },
              {
                "name": "Trickmaster",
                "g": "The Heartless"
              },
              {
                "name": "Darkside",
                "g": "The Heartless"
              }
            ],
            "riku": [
              {
                "name": "Riku",
                "g": "Characters I"
              },
              {
                "name": "Riku (Halloween Town)",
                "g": "Characters I"
              },
              {
                "name": "The King",
                "g": "Characters I"
              },
              {
                "name": "The King (Halloween Town)",
                "g": "Characters I"
              },
              {
                "name": "Sora",
                "g": "Characters I"
              },
              {
                "name": "Kairi",
                "g": "Characters I"
              },
              {
                "name": "Naminé",
                "g": "Characters I"
              },
              {
                "name": "Riku Replica",
                "g": "Characters I"
              },
              {
                "name": "DiZ",
                "g": "Characters I"
              },
              {
                "name": "Ansem",
                "g": "Characters I"
              },
              {
                "name": "Vexen",
                "g": "Characters I"
              },
              {
                "name": "Lexaeus",
                "g": "Characters I"
              },
              {
                "name": "Zexion",
                "g": "Characters I"
              },
              {
                "name": "Axel",
                "g": "Characters I"
              },
              {
                "name": "Marluxia",
                "g": "Characters I"
              },
              {
                "name": "Larxene",
                "g": "Characters I"
              },
              {
                "name": "Maleficent",
                "g": "Characters II"
              },
              {
                "name": "Jafar-Genie",
                "g": "Characters II"
              },
              {
                "name": "Ursula",
                "g": "Characters II"
              },
              {
                "name": "Hades",
                "g": "Characters II"
              },
              {
                "name": "Oogie Boogie",
                "g": "Characters II"
              },
              {
                "name": "Hook",
                "g": "Characters II"
              },
              {
                "name": "Shadow",
                "g": "The Heartless"
              },
              {
                "name": "Soldier",
                "g": "The Heartless"
              },
              {
                "name": "Large Body",
                "g": "The Heartless"
              },
              {
                "name": "Red Nocturne",
                "g": "The Heartless"
              },
              {
                "name": "Blue Rapsody",
                "g": "The Heartless"
              },
              {
                "name": "Yellow Opera",
                "g": "The Heartless"
              },
              {
                "name": "Green Requiem",
                "g": "The Heartless"
              },
              {
                "name": "Powerwild",
                "g": "The Heartless"
              },
              {
                "name": "Bouncywild",
                "g": "The Heartless"
              },
              {
                "name": "Air Soldier",
                "g": "The Heartless"
              },
              {
                "name": "Bandit",
                "g": "The Heartless"
              },
              {
                "name": "Fat Bandit",
                "g": "The Heartless"
              },
              {
                "name": "Barrel Spider",
                "g": "The Heartless"
              },
              {
                "name": "Search Ghost",
                "g": "The Heartless"
              },
              {
                "name": "Sea Neon",
                "g": "The Heartless"
              },
              {
                "name": "Screwdiver",
                "g": "The Heartless"
              },
              {
                "name": "Aquatank",
                "g": "The Heartless"
              },
              {
                "name": "Wight Knight",
                "g": "The Heartless"
              },
              {
                "name": "Gargoyle",
                "g": "The Heartless"
              },
              {
                "name": "Pirate",
                "g": "The Heartless"
              },
              {
                "name": "Air Pirate",
                "g": "The Heartless"
              },
              {
                "name": "Darkball",
                "g": "The Heartless"
              },
              {
                "name": "Defender",
                "g": "The Heartless"
              },
              {
                "name": "Wyvern",
                "g": "The Heartless"
              },
              {
                "name": "Wizard",
                "g": "The Heartless"
              },
              {
                "name": "Neoshadow",
                "g": "The Heartless"
              },
              {
                "name": "Black Fungus",
                "g": "The Heartless"
              },
              {
                "name": "Creeper Plant",
                "g": "The Heartless"
              },
              {
                "name": "Tornado Step",
                "g": "The Heartless"
              },
              {
                "name": "Crescendo",
                "g": "The Heartless"
              },
              {
                "name": "Guard Armor",
                "g": "The Heartless"
              },
              {
                "name": "Parasite Cage",
                "g": "The Heartless"
              },
              {
                "name": "Trickmaster",
                "g": "The Heartless"
              },
              {
                "name": "Darkside",
                "g": "The Heartless"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "minigames",
      "char": "sora",
      "sections": [
        {
          "id": "minigames",
          "char": "sora",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "world"
            },
            {
              "k": "target"
            }
          ],
          "items": [
            {
              "name": "Monstro's Belly Brawl"
            },
            {
              "name": "Balloon Glider"
            },
            {
              "name": "Whirlwind Plunge"
            },
            {
              "name": "Bumble-Rumble"
            },
            {
              "name": "Tigger's Jump-a-Thon"
            },
            {
              "name": "Veggie Panic"
            }
          ]
        }
      ]
    }
  ]
};

(window.KH_GAMES = window.KH_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;
