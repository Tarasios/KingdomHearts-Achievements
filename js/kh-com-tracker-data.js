/* =====================================================================
   KH Re:Chain of Memories — completion checklist data + tracker config
   Extracted from xenodusk's "Guide & Checklist — Kingdom Hearts
   Re:Chain of Memories" spreadsheet (v1.03, August 1, 2024).
   Consumed by js/kh-tracker.js (generic engine). Item order is
   load-bearing: saved progress is keyed by index.
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
              "rarity": "Gold",
              "name": "Game Clear: Proud with Sora",
              "desc": "Clear Proud Mode with Sora and watched the ending."
            },
            {
              "rarity": "Silver",
              "name": "Game Clear: Proud with Riku",
              "desc": "Clear Proud Mode with Riku and watched the ending"
            },
            {
              "rarity": "Silver",
              "name": "Undefeated",
              "desc": "Clear game without using a continue."
            },
            {
              "rarity": "Silver",
              "name": "Natural Player Sora",
              "desc": "Clear Sora's Story on Standard."
            },
            {
              "rarity": "Bronze",
              "name": "Natural Player Riku",
              "desc": "Clear Riku's Story on Standard."
            },
            {
              "rarity": "Silver",
              "name": "Novice Player Sora",
              "desc": "Clear Sora's Story on Beginner."
            },
            {
              "rarity": "Silver",
              "name": "Novice Player Riku",
              "desc": "Clear Riku's Story on Beginner."
            },
            {
              "rarity": "Gold",
              "name": "Veggie Master",
              "desc": "Get a score of 150 points or higher in the Veggie Panic mini-game."
            },
            {
              "rarity": "Silver",
              "name": "Ace Pilot",
              "desc": "Get a score of 500 points or higher in the Balloon Glider mini-game."
            },
            {
              "rarity": "Bronze",
              "name": "High Jumper",
              "desc": "Get a score of 120 points or higher in Tigger's Tigger's Jump-a-Thon mini-game."
            },
            {
              "rarity": "Bronze",
              "name": "Sky Diver",
              "desc": "Get a score of 2,000 points or higher in the Whirlwind Plunge mini-game"
            },
            {
              "rarity": "Bronze",
              "name": "Bee Buster",
              "desc": "Clear all 70 bees within 1 minute and 40 seconds in the Bumble-Rumble mini-game."
            },
            {
              "rarity": "Bronze",
              "name": "A Slumber to Remember",
              "desc": "Clear Sora's story mode."
            },
            {
              "rarity": "Bronze",
              "name": "Sleight Master",
              "desc": "Obtain all of Sora's sleights."
            },
            {
              "rarity": "Bronze",
              "name": "Card of Memories",
              "desc": "Clear Castle Oblivion 1F."
            },
            {
              "rarity": "Bronze",
              "name": "Woven Memories",
              "desc": "Clear Castle Oblivion 5F."
            },
            {
              "rarity": "Silver",
              "name": "The Truth",
              "desc": "Clear Castle Oblivion 13F."
            },
            {
              "rarity": "Bronze",
              "name": "Road to Dawn",
              "desc": "Clear Riku's story mode."
            },
            {
              "rarity": "Bronze",
              "name": "Hard Hitter",
              "desc": "Obtain all attack bonuses for Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Confronting with Darkness",
              "desc": "Clear Castle Oblivion B12F."
            },
            {
              "rarity": "Bronze",
              "name": "Challenge from the Inner Darkness",
              "desc": "Clear Castle Oblivion B8F."
            },
            {
              "rarity": "Bronze",
              "name": "Overcoming the Darkness",
              "desc": "Clear Castle Oblivion B1F."
            },
            {
              "rarity": "Bronze",
              "name": "Complete Record",
              "desc": "Completed all of Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Card Master Sora",
              "desc": "Collect all Card Collection entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Storyteller Sora",
              "desc": "Collect all Story entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Character Professor Sora",
              "desc": "Collect all Character entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Mini-game Maniac Sora",
              "desc": "Collect all Mini-game entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Record Keeper Riku",
              "desc": "Complete all D Report entries."
            },
            {
              "rarity": "Bronze",
              "name": "Card Master Riku",
              "desc": "Collect all Card Collection entries in D Report."
            },
            {
              "rarity": "Bronze",
              "name": "Storyteller Riku",
              "desc": "Collect all Story entires in the D Report."
            },
            {
              "rarity": "Bronze",
              "name": "Character Professor Riku",
              "desc": "Collect all Character entries in the D Report."
            },
            {
              "rarity": "Bronze",
              "name": "Novice Deck Builder",
              "desc": "Edit a card deck for the first time."
            },
            {
              "rarity": "Bronze",
              "name": "Expert Deck Builder",
              "desc": "Edit a card deck 500 times."
            },
            {
              "rarity": "Bronze",
              "name": "Premium Card Maker",
              "desc": "Make 20 cards become Premium Cards."
            },
            {
              "rarity": "Bronze",
              "name": "No Escape",
              "desc": "Clear the game without escaping from a single battle."
            },
            {
              "rarity": "Bronze",
              "name": "Level Counter Limit: Sora",
              "desc": "Sora has reached the highest level."
            },
            {
              "rarity": "Bronze",
              "name": "Level Counter Limit: Riku",
              "desc": "Riku has reached the highest level."
            },
            {
              "rarity": "Bronze",
              "name": "Card Breaker",
              "desc": "Break an enemies card 1,500 times."
            },
            {
              "rarity": "Bronze",
              "name": "Tightrope Walker",
              "desc": "Replenish HP when you have less than 5% HP."
            },
            {
              "rarity": "Bronze",
              "name": "Interceptor",
              "desc": "Strike an enemy before entering battle 150 times."
            },
            {
              "rarity": "Bronze",
              "name": "Duel Master",
              "desc": "Win 100 duels."
            },
            {
              "rarity": "Bronze",
              "name": "Battle Card Collector",
              "desc": "Obtain over 300 battle cards."
            },
            {
              "rarity": "Bronze",
              "name": "Moogle Mogul",
              "desc": "Get over 10,000 Moogle Points."
            },
            {
              "rarity": "Bronze",
              "name": "Regular Customer",
              "desc": "Use over 20,000 Moogle Points at Moogle Shops."
            },
            {
              "rarity": "Bronze",
              "name": "Room Creator",
              "desc": "Synthesize 300 rooms."
            },
            {
              "rarity": "Bronze",
              "name": "Treasure Hunter",
              "desc": "Open 10 chests from hidden rooms."
            },
            {
              "rarity": "Bronze",
              "name": "Ace Striker",
              "desc": "Hit an enemy with an object."
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
              "combo": "3 attack cards of the same type Total value 10-15",
              "how": "Reach level 2",
              "g": "Attack Sleights"
            },
            {
              "name": "Stun Impact",
              "combo": "3 attack cards of the same type Total value 20-23",
              "how": "Reach level 7",
              "g": "Attack Sleights"
            },
            {
              "name": "Strike Raid",
              "combo": "3 attack cards Total value 24-26",
              "how": "Reach level 12",
              "g": "Attack Sleights"
            },
            {
              "name": "Blitz",
              "combo": "3 attack cards of differing types Total value 10-15",
              "how": "Reach level 17",
              "g": "Attack Sleights"
            },
            {
              "name": "Zantetsuken",
              "combo": "3 attack cards Total value 0 or 27",
              "how": "Reach level 22",
              "g": "Attack Sleights"
            },
            {
              "name": "Sonic Blade",
              "combo": "3 attack cards of differing types Total value 20-23",
              "how": "Reach level 27",
              "g": "Attack Sleights"
            },
            {
              "name": "Ars Arcanum",
              "combo": "3 attack cards Total value 1-6",
              "how": "Reach level 42",
              "g": "Attack Sleights"
            },
            {
              "name": "Ragnarok",
              "combo": "3 attack cards Total value 7-9",
              "how": "Reach level 52",
              "g": "Attack Sleights"
            },
            {
              "name": "Trinity Limit",
              "combo": "Attack card + Donald + Goofy",
              "how": "Reach Floor 13",
              "g": "Attack Sleights"
            },
            {
              "name": "Fira",
              "combo": "Fire + Fire",
              "how": "Unlock the Fire card",
              "g": "Magic Sleights"
            },
            {
              "name": "Firaga",
              "combo": "Fire + Fire + Fire",
              "how": "Unlock the Fire card",
              "g": "Magic Sleights"
            },
            {
              "name": "Blizzara",
              "combo": "Blizzard + Blizzard",
              "how": "Received by default",
              "g": "Magic Sleights"
            },
            {
              "name": "Blizzaga",
              "combo": "Blizzard + Blizzard + Blizzard",
              "how": "Received by default",
              "g": "Magic Sleights"
            },
            {
              "name": "Thundara",
              "combo": "Thunder + Thunder",
              "how": "Unlock the Thunder card",
              "g": "Magic Sleights"
            },
            {
              "name": "Thundaga",
              "combo": "Thunder + Thunder + Thunder",
              "how": "Unlock the Thunder card",
              "g": "Magic Sleights"
            },
            {
              "name": "Cura",
              "combo": "Cure + Cure",
              "how": "Received by default",
              "g": "Magic Sleights"
            },
            {
              "name": "Curaga",
              "combo": "Cure + Cure + Cure",
              "how": "Received by default",
              "g": "Magic Sleights"
            },
            {
              "name": "Gravira",
              "combo": "Gravity + Gravity",
              "how": "Unlock the Gravity card",
              "g": "Magic Sleights"
            },
            {
              "name": "Graviga",
              "combo": "Gravity + Gravity + Gravity",
              "how": "Unlock the Gravity card",
              "g": "Magic Sleights"
            },
            {
              "name": "Stopra",
              "combo": "Stop + Stop",
              "how": "Unlock the Stop card",
              "g": "Magic Sleights"
            },
            {
              "name": "Stopga",
              "combo": "Stop + Stop + Stop",
              "how": "Unlock the Stop card",
              "g": "Magic Sleights"
            },
            {
              "name": "Aerora",
              "combo": "Aero + Aero",
              "how": "Unlock the Aero card",
              "g": "Magic Sleights"
            },
            {
              "name": "Aeroga",
              "combo": "Aero + Aero + Aero",
              "how": "Unlock the Aero card",
              "g": "Magic Sleights"
            },
            {
              "name": "Warpinator",
              "combo": "Stop + Gravity + Aero",
              "how": "Treasure chest in any bounty room in Twilight Town",
              "g": "Magic Sleights"
            },
            {
              "name": "Warp",
              "combo": "Stop + Aero + Aero",
              "how": "Treasure chest in Room of Rewards in Agrabah",
              "g": "Magic Sleights"
            },
            {
              "name": "Blizzard Raid",
              "combo": "Blizzard + attack card + attack card",
              "how": "Treasure chest in any bounty room in Olympus Coliseum",
              "g": "Magic Sleights"
            },
            {
              "name": "Synchro",
              "combo": "Cure + Gravity + Aero",
              "how": "Treasure chest in Room of Rewards in Wonderland",
              "g": "Magic Sleights"
            },
            {
              "name": "Fire Raid",
              "combo": "Fire + attack card + attack card",
              "how": "Treasure chest in any bounty room in Monstro",
              "g": "Magic Sleights"
            },
            {
              "name": "Aqua Splash",
              "combo": "Blizzard + Fire + Aero",
              "how": "Treasure chest in Room of Rewards in Monstro",
              "g": "Magic Sleights"
            },
            {
              "name": "Terror",
              "combo": "Summon card + Summon card + Jack Simba + Mushu + Item card",
              "how": "Earned at the start of Halloween Town",
              "g": "Magic Sleights"
            },
            {
              "name": "Gifted Miracle",
              "combo": "Summon card + Magic card + Jack Bambi + Blizzard + Item card",
              "how": "Treasure chest in any bounty room in Halloween Town",
              "g": "Magic Sleights"
            },
            {
              "name": "Bind",
              "combo": "Gravity + Stop + Magic card",
              "how": "Treasure chest in Room of Rewards in Halloween Town",
              "g": "Magic Sleights"
            },
            {
              "name": "Shock Impact",
              "combo": "Simba + Attack card + Attack card",
              "how": "Treasure chest in any bounty room in Atlantica",
              "g": "Magic Sleights"
            },
            {
              "name": "Homing Blizzara",
              "combo": "Aero + Blizzard + Magic card",
              "how": "Treasure chest in any bounty room in Atlantica",
              "g": "Magic Sleights"
            },
            {
              "name": "Quake",
              "combo": "Gravity + Simba + Magic card",
              "how": "Treasure chest in Room of Rewards in Atlantica",
              "g": "Magic Sleights"
            },
            {
              "name": "Teleport",
              "combo": "Magic card + Magic card + Peter Pan Stop + Aero + Item card",
              "how": "Treasure chest in any bounty room in Neverland",
              "g": "Magic Sleights"
            },
            {
              "name": "Thunder Raid",
              "combo": "Thunder + Attack card + Attack card",
              "how": "Treasure chest in Room of Rewards in Neverland",
              "g": "Magic Sleights"
            },
            {
              "name": "Confuse",
              "combo": "Genie + Tinker Bell + Summon card",
              "how": "Find Pigglet in the 100 Acre Wood",
              "g": "Magic Sleights"
            },
            {
              "name": "Firaga Burst",
              "combo": "Fire + Fire + Gravity",
              "how": "Clear Balloon Glider in the 100 Acre Wood",
              "g": "Magic Sleights"
            },
            {
              "name": "Reflect Raid",
              "combo": "Cloud + Attack card + Attack card",
              "how": "Treasure chest in any bounty room in Hollow Bastion",
              "g": "Magic Sleights"
            },
            {
              "name": "Magnet Spiral",
              "combo": "Gravity + Gravity + Attack card",
              "how": "Defeat Riku in Floor 8",
              "g": "Magic Sleights"
            },
            {
              "name": "Lethal Frame",
              "combo": "Stop + Attack card + Attack card",
              "how": "Reach level 32",
              "g": "Magic Sleights"
            },
            {
              "name": "Tornado",
              "combo": "Aero + Gravity + Summon card",
              "how": "Reach level 37",
              "g": "Magic Sleights"
            },
            {
              "name": "Freeze",
              "combo": "Blizzard + Blizzard + Stop",
              "how": "Defeat Vexen in Floor 10",
              "g": "Magic Sleights"
            },
            {
              "name": "Judgment",
              "combo": "Aero + Attack card + Attack card",
              "how": "Treasure chest in any bounty room in Destiny Islands",
              "g": "Magic Sleights"
            },
            {
              "name": "Holy",
              "combo": "Mega-Ether + Megalixir + Item card",
              "how": "Reach level 47",
              "g": "Magic Sleights"
            },
            {
              "name": "Raging Storm",
              "combo": "Aero + Fire + Fire",
              "how": "Treasure chest in any bounty room in Castle Oblivion",
              "g": "Magic Sleights"
            },
            {
              "name": "Mega Flare",
              "combo": "Mushu + Fire + Fire",
              "how": "Reach level 57",
              "g": "Magic Sleights"
            },
            {
              "name": "Proud Roar LV2",
              "combo": "Simba + Simba",
              "how": "Unlock the Simba card",
              "g": "Summon Sleights"
            },
            {
              "name": "Proud Roar LV3",
              "combo": "Simba + Simba + Simba",
              "how": "Unlock the Simba card",
              "g": "Summon Sleights"
            },
            {
              "name": "Showtime LV2",
              "combo": "Genie + Genie",
              "how": "Unlock the Genie card",
              "g": "Summon Sleights"
            },
            {
              "name": "Showtime LV3",
              "combo": "Genie + Genie + Genie",
              "how": "Unlock the Genie card",
              "g": "Summon Sleights"
            },
            {
              "name": "Cross-slash",
              "combo": "Cloud + Cloud",
              "how": "Unlock the Cloud card",
              "g": "Summon Sleights"
            },
            {
              "name": "Cross-slash+",
              "combo": "Cloud + Stop + Attack card",
              "how": "Clear Veggie Panic in the 100 Acre Wood",
              "g": "Summon Sleights"
            },
            {
              "name": "Omnislash",
              "combo": "Cloud + Cloud + Cloud",
              "how": "Unlock the Cloud card",
              "g": "Summon Sleights"
            },
            {
              "name": "Splash LV2",
              "combo": "Dumbo + Dumbo",
              "how": "Unlock the Dumbo card",
              "g": "Summon Sleights"
            },
            {
              "name": "Splash LV3",
              "combo": "Dumbo + Dumbo + Dumbo",
              "how": "Unlock the Dumbo card",
              "g": "Summon Sleights"
            },
            {
              "name": "Twinkle LV2",
              "combo": "Tinker Bell + Tinker Bell",
              "how": "Unlock the Tinker Bell card",
              "g": "Summon Sleights"
            },
            {
              "name": "Twinkle LV3",
              "combo": "Tinker Bell + Tinker Bell + Tinker Bell",
              "how": "Unlock the Tinker Bell card",
              "g": "Summon Sleights"
            },
            {
              "name": "Paradise LV2",
              "combo": "Bambi + Bambi",
              "how": "Unlock the Bambi card",
              "g": "Summon Sleights"
            },
            {
              "name": "Paradise LV3",
              "combo": "Bambi + Bambi + Bambi",
              "how": "Unlock the Bambi card",
              "g": "Summon Sleights"
            },
            {
              "name": "Idyll Romp",
              "combo": "Bambi + Attack card + Attack card",
              "how": "Clear Tigger's Jump-a-Thon in the 100 Acre Wood",
              "g": "Summon Sleights"
            },
            {
              "name": "Flare Breath LV2",
              "combo": "Mushu + Mushu",
              "how": "Unlock the Mushu card",
              "g": "Summon Sleights"
            },
            {
              "name": "Flare Breath LV3",
              "combo": "Mushu + Mushu + Mushu",
              "how": "Unlock the Mushu card",
              "g": "Summon Sleights"
            },
            {
              "name": "Magic LV2",
              "combo": "Donald + Donald",
              "how": "Received by default",
              "g": "Friend Sleights"
            },
            {
              "name": "Magic LV3",
              "combo": "Donald + Donald + Donald",
              "how": "Received by default",
              "g": "Friend Sleights"
            },
            {
              "name": "Stardust Blitz",
              "combo": "Donald + Fire",
              "how": "Treasure chest in Room of Rewards in Twilight Town",
              "g": "Friend Sleights"
            },
            {
              "name": "Goofy Tornado LV2",
              "combo": "Goofy + Goofy",
              "how": "Received by default",
              "g": "Friend Sleights"
            },
            {
              "name": "Goofy Tornado LV3",
              "combo": "Goofy + Goofy + Goofy",
              "how": "Received by default",
              "g": "Friend Sleights"
            },
            {
              "name": "Goofy Smash",
              "combo": "Goofy + Attack card",
              "how": "Received by default",
              "g": "Friend Sleights"
            },
            {
              "name": "Wild Crash",
              "combo": "Goofy + Donald + Attack card",
              "how": "Received by default",
              "g": "Friend Sleights"
            },
            {
              "name": "Lucky Bounty LV2",
              "combo": "Pluto + Pluto",
              "how": "Unlocked during the story",
              "g": "Friend Sleights"
            },
            {
              "name": "Lucky Bounty LV3",
              "combo": "Pluto + Pluto + Pluto",
              "how": "Unlocked during the story",
              "g": "Friend Sleights"
            },
            {
              "name": "Sandstorm LV2",
              "combo": "Aladdin + Aladdin",
              "how": "Unlocked during the story",
              "g": "Friend Sleights"
            },
            {
              "name": "Sandstorm LV3",
              "combo": "Aladdin + Aladdin + Aladdin",
              "how": "Unlocked during the story",
              "g": "Friend Sleights"
            },
            {
              "name": "Surprise! LV2",
              "combo": "Jack + Jack",
              "how": "Unlocked during the story",
              "g": "Friend Sleights"
            },
            {
              "name": "Surprise! LV3",
              "combo": "Jack + Jack + Jack",
              "how": "Unlocked during the story",
              "g": "Friend Sleights"
            },
            {
              "name": "Spiral Wave LV2",
              "combo": "Ariel + Ariel",
              "how": "Unlocked during the story",
              "g": "Friend Sleights"
            },
            {
              "name": "Spiral Wave LV3",
              "combo": "Ariel + Ariel + Ariel",
              "how": "Unlocked during the story",
              "g": "Friend Sleights"
            },
            {
              "name": "Hummingbird LV2",
              "combo": "Peter Pan + Peter Pan",
              "how": "Unlocked during the story",
              "g": "Friend Sleights"
            },
            {
              "name": "Hummingbird LV3",
              "combo": "Peter Pan + Peter Pan + Peter Pan",
              "how": "Unlocked during the story",
              "g": "Friend Sleights"
            },
            {
              "name": "Furious Volley LV2",
              "combo": "The Beast + The Beast",
              "how": "Unlocked during the story",
              "g": "Friend Sleights"
            },
            {
              "name": "Furious Volley LV3",
              "combo": "The Beast + The Beast + The Beast",
              "how": "Unlocked during the story",
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
                "loc": "All floors",
                "how": "Received by default",
                "g": "Attack Cards"
              },
              {
                "name": "Three Wishes",
                "loc": "All floors",
                "how": "Breakable objects, treasure chests and Moogle Shop after arriving in Agrabah",
                "g": "Attack Cards"
              },
              {
                "name": "Crabclaw",
                "loc": "All floors",
                "how": "Breakable objects, treasure chests and Moogle Shop after arriving in Atlantica",
                "g": "Attack Cards"
              },
              {
                "name": "Pumpkinhead",
                "loc": "All floors",
                "how": "Breakable objects, treasure chests and Moogle Shop after arriving in Halloween Town",
                "g": "Attack Cards"
              },
              {
                "name": "Fairy Harp",
                "loc": "All floors",
                "how": "Breakable objects, treasure chests and Moogle Shop after arriving in Neverland",
                "g": "Attack Cards"
              },
              {
                "name": "Wishing Star",
                "loc": "All floors",
                "how": "Breakable objects, treasure chests and Moogle Shop after arriving in Monstro",
                "g": "Attack Cards"
              },
              {
                "name": "Spellbinder",
                "loc": "100 Acre Wood",
                "how": "Treasure chest in Tigger's Playground",
                "g": "Attack Cards"
              },
              {
                "name": "Metal Chocobo",
                "loc": "Olympus Coliseum",
                "how": "Treasure chest in Room of Rewards (1st reward)",
                "g": "Attack Cards"
              },
              {
                "name": "Olympia",
                "loc": "All floors",
                "how": "Breakable objects, treasure chests and Moogle Shop after arriving in Olympus Coliseum",
                "g": "Attack Cards"
              },
              {
                "name": "Lionheart",
                "loc": "Traverse Town",
                "how": "Treasure chest in Room of Rewards (1st reward)",
                "g": "Attack Cards"
              },
              {
                "name": "Lady Luck",
                "loc": "All floors",
                "how": "Breakable objects, treasure chests and Moogle Shop after arriving in Wonderland",
                "g": "Attack Cards"
              },
              {
                "name": "Divine Rose",
                "loc": "All floors",
                "how": "Breakable objects, treasure chests and Moogle Shop after arriving in Hollow Bastion",
                "g": "Attack Cards"
              },
              {
                "name": "Oathkeeper",
                "loc": "Destiny Islands",
                "how": "Story progression (Floor 12)",
                "g": "Attack Cards"
              },
              {
                "name": "Oblivion",
                "loc": "Castle Oblivion 12F",
                "how": "Story progression (Floor 12)",
                "g": "Attack Cards"
              },
              {
                "name": "Ultima Weapon",
                "loc": "Castle Oblivion",
                "how": "Breakable objects and treasure chests in Castle Oblivion after clearing Riku's story",
                "g": "Attack Cards"
              },
              {
                "name": "Diamond Dust",
                "loc": "All floors",
                "how": "Breakable objects, treasure chests and Moogle Shop after the first battle with Marluxia",
                "g": "Attack Cards"
              },
              {
                "name": "One-Winged Angel",
                "loc": "All floors",
                "how": "Breakable objects, treasure chests and Moogle Shop after the first battle with Marluxia",
                "g": "Attack Cards"
              },
              {
                "name": "Star Seeker",
                "loc": "Castle Oblivion",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Attack Cards"
              },
              {
                "name": "Total Eclipse",
                "loc": "Olympus Coliseum",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Attack Cards"
              },
              {
                "name": "Midnight Roar",
                "loc": "Neverland",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Attack Cards"
              },
              {
                "name": "Maverick Flare",
                "loc": "Traverse Town",
                "how": "Treasure chest in any bounty room after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Attack Cards"
              },
              {
                "name": "Two Become One",
                "loc": "Destiny Islands",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Attack Cards"
              },
              {
                "name": "Bond of Flame",
                "loc": "Halloween Town",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Attack Cards"
              },
              {
                "name": "Fire",
                "loc": "Castle Oblivion 1F",
                "how": "Defeat Axel",
                "g": "Magic Cards"
              },
              {
                "name": "Blizzard",
                "loc": "Traverse Town",
                "how": "Clear the tutorial",
                "g": "Magic Cards"
              },
              {
                "name": "Thunder",
                "loc": "Castle Oblivion 6F",
                "how": "Defeat Larxene",
                "g": "Magic Cards"
              },
              {
                "name": "Cure",
                "loc": "Traverse Town",
                "how": "Received by default",
                "g": "Magic Cards"
              },
              {
                "name": "Gravity",
                "loc": "Agrabah",
                "how": "Treasure chest in any bounty room",
                "g": "Magic Cards"
              },
              {
                "name": "Stop",
                "loc": "Wonderland",
                "how": "Treasure chest in any bounty room",
                "g": "Magic Cards"
              },
              {
                "name": "Aero",
                "loc": "Castle Oblivion 7F",
                "how": "Defeat Riku",
                "g": "Magic Cards"
              },
              {
                "name": "Simba",
                "loc": "Traverse Town",
                "how": "Clear the Room of Beginnings",
                "g": "Summon Cards"
              },
              {
                "name": "Genie",
                "loc": "Agrabah",
                "how": "Clear the Room of Truth",
                "g": "Summon Cards"
              },
              {
                "name": "Bambi",
                "loc": "100 Acre Wood",
                "how": "Clear the story of this world",
                "g": "Summon Cards"
              },
              {
                "name": "Dumbo",
                "loc": "Monstro",
                "how": "Clear the Room of Truth",
                "g": "Summon Cards"
              },
              {
                "name": "Tinker Bell",
                "loc": "Neverland",
                "how": "Clear the Room of Truth",
                "g": "Summon Cards"
              },
              {
                "name": "Mushu",
                "loc": "Hollow Bastion",
                "how": "Treasure chest in Room of Rewards (1st reward)",
                "g": "Summon Cards"
              },
              {
                "name": "Cloud",
                "loc": "Olympus Coliseum",
                "how": "Clear the Room of Truth",
                "g": "Summon Cards"
              },
              {
                "name": "Potion",
                "loc": "Traverse Town",
                "how": "Received by default",
                "g": "Item Cards"
              },
              {
                "name": "Hi-Potion",
                "loc": "Olympus Coliseum",
                "how": "Clear the Room of Guidance",
                "g": "Item Cards"
              },
              {
                "name": "Mega-Potion",
                "loc": "Castle Oblivion 11F",
                "how": "Defeat Riku",
                "g": "Item Cards"
              },
              {
                "name": "Ether",
                "loc": "Agrabah",
                "how": "Clear the Room of Guidance",
                "g": "Item Cards"
              },
              {
                "name": "Mega-Ether",
                "loc": "100 Acre Wood",
                "how": "Clear the Whirlwind Plunge mini-game",
                "g": "Item Cards"
              },
              {
                "name": "Elixir",
                "loc": "100 Acre Wood",
                "how": "Clear the Bumble-Rumble mini-game",
                "g": "Item Cards"
              },
              {
                "name": "Megalixir",
                "loc": "Destiny Islands",
                "how": "Treasure chest in Room of Rewards (1st reward)",
                "g": "Item Cards"
              },
              {
                "name": "Donald",
                "loc": "All floors",
                "how": "Pick it up during battle",
                "g": "Friend Cards"
              },
              {
                "name": "Goofy",
                "loc": "All floors",
                "how": "Pick it up during battle",
                "g": "Friend Cards"
              },
              {
                "name": "Aladdin",
                "loc": "Agrabah",
                "how": "Pick it up during battle",
                "g": "Friend Cards"
              },
              {
                "name": "Ariel",
                "loc": "Atlantica",
                "how": "Pick it up during battle (available after clearing the Room of Guidance)",
                "g": "Friend Cards"
              },
              {
                "name": "Jack",
                "loc": "Halloween Town",
                "how": "Pick it up during battle",
                "g": "Friend Cards"
              },
              {
                "name": "Peter Pan",
                "loc": "Neverland",
                "how": "Pick it up during battle (available after clearing the Room of Beginnings)",
                "g": "Friend Cards"
              },
              {
                "name": "The Beast",
                "loc": "Hollow Bastion",
                "how": "Pick it up during battle (available after clearing the Room of Guidance)",
                "g": "Friend Cards"
              },
              {
                "name": "Pluto",
                "loc": "All floors",
                "how": "Pick it up during battle (available when running out of cards; Tip: create a deck with only 3 cards and use sleights to run out of cards)",
                "g": "Friend Cards"
              },
              {
                "name": "Shadow",
                "loc": "All early floors",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Soldier",
                "loc": "Traverse Town, Wonderland, Twilight Town",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Powerwild",
                "loc": "Olympus Coliseum",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Bouncywild",
                "loc": "Olympus Coliseum",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Large Body",
                "loc": "Olympus Coliseum, Wonderland",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Fat Bandit",
                "loc": "Agrabah",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Sea Neon",
                "loc": "Atlantica",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Bandit",
                "loc": "Agrabah",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Pirate",
                "loc": "Neverland",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Red Nocturne",
                "loc": "Traverse Town, Wonderland",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Blue Rapsody",
                "loc": "Traverse Town, Olympus Coliseum",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Yellow Opera",
                "loc": "Agrabah, Monstro, Neverland",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Green Requiem",
                "loc": "Agrabah, Monstro",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Wizard",
                "loc": "Hollow Bastion, Castle Oblivion",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Air Soldier",
                "loc": "Monstro, Twiilight Town",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Barrel Spider",
                "loc": "Agrabah, Neverland",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Wight Knight",
                "loc": "Halloween Town",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Air Pirate",
                "loc": "Neverland",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Gargoyle",
                "loc": "Halloween Town",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Search Ghost",
                "loc": "Halloween Town, Atlantica",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Aquatank",
                "loc": "Atlantica",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Screwdiver",
                "loc": "Atlantica",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Wyvern",
                "loc": "Hollow Bastion, Castle Oblivion",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Defender",
                "loc": "Hollow Bastion, Castle Oblivion",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "White Mushroom",
                "loc": "All floors",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Black Fungus",
                "loc": "All floors",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Creeper Plant",
                "loc": "Wonderland, Destiny Islands",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Tornado Step",
                "loc": "Monstro, Destiny Islands",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Crescendo",
                "loc": "Wonderland, Destiny Islands",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Neoshadow",
                "loc": "Castle Oblivion",
                "how": "Randomly dropped at the end of a battle with this Heartless",
                "g": "Enemy Cards"
              },
              {
                "name": "Guard Armor",
                "loc": "Traverse Town",
                "how": "Clear Traverse Town",
                "g": "Enemy Cards"
              },
              {
                "name": "Hades",
                "loc": "Olympus Coliseum",
                "how": "Clear Olympus Coliseum",
                "g": "Enemy Cards"
              },
              {
                "name": "Trickmaster",
                "loc": "Wonderland",
                "how": "Clear Wonderland",
                "g": "Enemy Cards"
              },
              {
                "name": "Jafar",
                "loc": "Agrabah",
                "how": "Clear Agrabah",
                "g": "Enemy Cards"
              },
              {
                "name": "Ursula",
                "loc": "Atlantica",
                "how": "Clear Atlantica",
                "g": "Enemy Cards"
              },
              {
                "name": "Oogie Boogie",
                "loc": "Halloween Town",
                "how": "Clear Halloween Town",
                "g": "Enemy Cards"
              },
              {
                "name": "Parasite Cage",
                "loc": "Monstro",
                "how": "Clear Monstro",
                "g": "Enemy Cards"
              },
              {
                "name": "Hook",
                "loc": "Neverland",
                "how": "Clear Neverland",
                "g": "Enemy Cards"
              },
              {
                "name": "Malificent",
                "loc": "Hollow Bastion",
                "how": "Clear Hollow Bastion",
                "g": "Enemy Cards"
              },
              {
                "name": "Darkside",
                "loc": "Destiny Islands",
                "how": "Clear Destiny Islands",
                "g": "Enemy Cards"
              },
              {
                "name": "Riku Replica",
                "loc": "Castle Oblivion",
                "how": "During Castle Oblivion",
                "g": "Enemy Cards"
              },
              {
                "name": "Card Soldier",
                "loc": "Wonderland",
                "how": "During Wonderland",
                "g": "Enemy Cards"
              },
              {
                "name": "Ansem",
                "loc": "Twilight Town",
                "how": "Treasure chest in any bounty room after clearing Riku's story",
                "g": "Enemy Cards"
              },
              {
                "name": "Xemnas",
                "loc": "Wonderland",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Enemy Cards"
              },
              {
                "name": "Xigbar",
                "loc": "Hollow Bastion",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Enemy Cards"
              },
              {
                "name": "Xaldin",
                "loc": "Monstro",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Enemy Cards"
              },
              {
                "name": "Vexen",
                "loc": "Twilight Town",
                "how": "Clear Twilight Town",
                "g": "Enemy Cards"
              },
              {
                "name": "Lexaeus",
                "loc": "Castle Oblivion",
                "how": "Treasure chest in any bounty room after clearing Riku's story",
                "g": "Enemy Cards"
              },
              {
                "name": "Zexion",
                "loc": "Destiny Islands",
                "how": "Treasure chest in any bounty room after clearing Riku's story",
                "g": "Enemy Cards"
              },
              {
                "name": "Saïx",
                "loc": "Traverse Town",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Enemy Cards"
              },
              {
                "name": "Axel",
                "loc": "Castle Oblivion",
                "how": "During Castle Oblivion",
                "g": "Enemy Cards"
              },
              {
                "name": "Demyx",
                "loc": "Atlantica",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Enemy Cards"
              },
              {
                "name": "Luxord",
                "loc": "Agrabah",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Enemy Cards"
              },
              {
                "name": "Marluxia",
                "loc": "Castle Oblivion",
                "how": "During Castle Oblivion",
                "g": "Enemy Cards"
              },
              {
                "name": "Larxene",
                "loc": "Castle Oblivion",
                "how": "During Castle Oblivion",
                "g": "Enemy Cards"
              },
              {
                "name": "Roxas",
                "loc": "Twilight Town",
                "how": "Treasure chest in Room of Rewards (2nd reward) after watching all Kingdom Hearts 358/2 Days cutscenes",
                "g": "Enemy Cards"
              },
              {
                "name": "Tranquil Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Teeming Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Feeble Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Almighty Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Sleeping Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Looming Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Premium Room",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "White Room",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Black Room",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Bottomless Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Roulette Room",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Martial Waking",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Sorcerous Waking",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Alchemic Waking",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Meeting Ground",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Stagnant Space",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Strong Initiative",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Lasting Daze",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Calm Bounty",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Guarded Trove",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "False Bounty",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Moment's Reprieve",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Mingling Worlds",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Moogle Room",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Key to Rewards",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Key of Beginnings",
                "loc": "All floors",
                "how": "Received during the story",
                "g": "Map Cards"
              },
              {
                "name": "Key of Guidance",
                "loc": "All floors",
                "how": "Received during the story",
                "g": "Map Cards"
              },
              {
                "name": "Key to Truth",
                "loc": "All floors",
                "how": "Received during the story",
                "g": "Map Cards"
              },
              {
                "name": "Random Joker",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Traverse Town",
                "loc": "Castle Oblivion 1F",
                "how": "Received by default",
                "g": "World Cards"
              },
              {
                "name": "Agrabah",
                "loc": "Castle Oblivion 1F",
                "how": "Clear Floor 1",
                "g": "World Cards"
              },
              {
                "name": "Olympus Coliseum",
                "loc": "Castle Oblivion 1F",
                "how": "Clear Floor 1",
                "g": "World Cards"
              },
              {
                "name": "Wonderland",
                "loc": "Castle Oblivion 1F",
                "how": "Clear Floor 1",
                "g": "World Cards"
              },
              {
                "name": "Monstro",
                "loc": "Castle Oblivion 1F",
                "how": "Clear Floor 1",
                "g": "World Cards"
              },
              {
                "name": "Halloween Town",
                "loc": "Castle Oblivion 1F",
                "how": "Clear Floor 1",
                "g": "World Cards"
              },
              {
                "name": "Atlantica",
                "loc": "Castle Oblivion 6F",
                "how": "Clear Floor 6",
                "g": "World Cards"
              },
              {
                "name": "Neverland",
                "loc": "Castle Oblivion 6F",
                "how": "Clear Floor 6",
                "g": "World Cards"
              },
              {
                "name": "Hollow Bastion",
                "loc": "Castle Oblivion 6F",
                "how": "Clear Floor 6",
                "g": "World Cards"
              },
              {
                "name": "100 Acre Wood",
                "loc": "Castle Oblivion 6F",
                "how": "Clear Floor 6",
                "g": "World Cards"
              },
              {
                "name": "Twilight Town",
                "loc": "Castle Oblivion 10F",
                "how": "Clear Floor 10",
                "g": "World Cards"
              },
              {
                "name": "Destiny Islands",
                "loc": "Castle Oblivion 11F",
                "how": "Clear Floor 11",
                "g": "World Cards"
              },
              {
                "name": "Gimmick Card",
                "how": "Pick it up during certain boss fights (this is the only missable card in the game, so make sure to pick it up at least once)",
                "g": "Gimmick Cards"
              },
              {
                "name": "Gold Card",
                "loc": "Any floor",
                "how": "Treasure chest in any bounty room after collecting every other card in the game (this card doesn't count towards the achievement)",
                "g": "Special Cards"
              },
              {
                "name": "Platinum Card",
                "loc": "Any floor",
                "how": "Treasure chest in any bounty room after collecting every other card in the game (this card doesn't count towards the achievement)",
                "g": "Special Cards"
              }
            ],
            "riku": [
              {
                "name": "Soul Eater",
                "how": "Received by default",
                "g": "Battle Cards"
              },
              {
                "name": "Potion",
                "loc": "Twilight Town",
                "how": "Reach Twilight Town",
                "g": "Battle Cards"
              },
              {
                "name": "Hi-Potion",
                "how": "Received by default",
                "g": "Battle Cards"
              },
              {
                "name": "The King",
                "how": "Received by default",
                "g": "Battle Cards"
              },
              {
                "name": "Gimmick Card",
                "how": "Pick it up during certain boss fights (this is the only missable card in the game, so make sure to pick it up at least once)",
                "g": "Battle Cards"
              },
              {
                "name": "Shadow",
                "loc": "Twilight Town",
                "how": "Reach Twilight Town",
                "g": "Enemy Cards"
              },
              {
                "name": "Large Body",
                "loc": "Wonderland",
                "how": "Reach Wonderland",
                "g": "Enemy Cards"
              },
              {
                "name": "Powerwild",
                "loc": "Olympus Coliseum",
                "how": "Reach Olympus Coliseum",
                "g": "Enemy Cards"
              },
              {
                "name": "Fat Bandit",
                "loc": "Agrabah",
                "how": "Reach Agrabah",
                "g": "Enemy Cards"
              },
              {
                "name": "Search Ghost",
                "loc": "Monstro",
                "how": "Reach Monstro",
                "g": "Enemy Cards"
              },
              {
                "name": "Sea Neon",
                "loc": "Atlantica",
                "how": "Reach Atlantica",
                "g": "Enemy Cards"
              },
              {
                "name": "Wight Knight",
                "loc": "Halloween Town",
                "how": "Reach Halloween Town",
                "g": "Enemy Cards"
              },
              {
                "name": "Pirate",
                "loc": "Neverland",
                "how": "Reach Neverland",
                "g": "Enemy Cards"
              },
              {
                "name": "Defender",
                "loc": "Hollow Bastion",
                "how": "Reach Hollow Bastion",
                "g": "Enemy Cards"
              },
              {
                "name": "Darkball",
                "loc": "Atlantica",
                "how": "Reach Atlantica",
                "g": "Enemy Cards"
              },
              {
                "name": "Guard Armor",
                "loc": "Traverse Town",
                "how": "Clear Traverse Town",
                "g": "Enemy Cards"
              },
              {
                "name": "Parasite Cage",
                "loc": "Monstro",
                "how": "Clear Monstro",
                "g": "Enemy Cards"
              },
              {
                "name": "Trickmaster",
                "loc": "Wonderland",
                "how": "Clear Wonderland",
                "g": "Enemy Cards"
              },
              {
                "name": "Darkside",
                "loc": "Destiny Islands",
                "how": "Defeat Darkside in Destiny Islands",
                "g": "Enemy Cards"
              },
              {
                "name": "Hades",
                "loc": "Olympus Coliseum",
                "how": "Clear Olympus Coliseum",
                "g": "Enemy Cards"
              },
              {
                "name": "Jafar-Genie",
                "loc": "Agrabah",
                "how": "Clear Agrabah",
                "g": "Enemy Cards"
              },
              {
                "name": "Oogie Boogie",
                "loc": "Halloween Town",
                "how": "Clear Halloween Town",
                "g": "Enemy Cards"
              },
              {
                "name": "Ursula",
                "loc": "Atlantica",
                "how": "Clear Atlantica",
                "g": "Enemy Cards"
              },
              {
                "name": "Hook",
                "loc": "Neverland",
                "how": "Clear Neverland",
                "g": "Enemy Cards"
              },
              {
                "name": "Dragon Maleficent",
                "loc": "Hollow Bastion",
                "how": "Clear Hollow Bastion",
                "g": "Enemy Cards"
              },
              {
                "name": "Lexaeus",
                "loc": "Castle Oblivion",
                "how": "During Castle Oblivion",
                "g": "Enemy Cards"
              },
              {
                "name": "Zexion",
                "loc": "Destiny Islands",
                "how": "Clear Destiny Islands",
                "g": "Enemy Cards"
              },
              {
                "name": "Tranquil Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Teeming Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Feeble Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Almighty Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Sleeping Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Looming Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Black Room",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Bottomless Darkness",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Roulette Room",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Martial Waking",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Meeting Ground",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Stagnant Space",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Strong Initiative",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Lasting Daze",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Moment's Reprieve",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Mingling Worlds",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Key of Beginnings",
                "loc": "All floors",
                "how": "Received during the story",
                "g": "Map Cards"
              },
              {
                "name": "Key of Guidance",
                "loc": "All floors",
                "how": "Received during the story",
                "g": "Map Cards"
              },
              {
                "name": "Key to Truth",
                "loc": "All floors",
                "how": "Received during the story",
                "g": "Map Cards"
              },
              {
                "name": "Random Joker",
                "loc": "All floors",
                "how": "Randomly dropped at the end of battle",
                "g": "Map Cards"
              },
              {
                "name": "Traverse Town",
                "loc": "Defeat Ansem at the B12F Exit Hall",
                "how": "Clear Basement Floor 12",
                "g": "World Cards"
              },
              {
                "name": "Agrabah",
                "loc": "Defeat Ansem at the B12F Exit Hall",
                "how": "Clear Basement Floor 12",
                "g": "World Cards"
              },
              {
                "name": "Olympus Coliseum",
                "loc": "Defeat Riku Replica at the B8F Exit Hall",
                "how": "Clear Basement Floor 8",
                "g": "World Cards"
              },
              {
                "name": "Wonderland",
                "loc": "Defeat Riku Replica at the B8F Exit Hall",
                "how": "Clear Basement Floor 8",
                "g": "World Cards"
              },
              {
                "name": "Monstro",
                "loc": "Defeat Ansem at the B12F Exit Hall",
                "how": "Clear Basement Floor 12",
                "g": "World Cards"
              },
              {
                "name": "Halloween Town",
                "loc": "Defeat Riku Replica at the B8F Exit Hall",
                "how": "Clear Basement Floor 8",
                "g": "World Cards"
              },
              {
                "name": "Atlantica",
                "loc": "Defeat Riku Replica at the B8F Exit Hall",
                "how": "Clear Basement Floor 8",
                "g": "World Cards"
              },
              {
                "name": "Neverland",
                "loc": "Defeat Ansem at the B12F Exit Hall",
                "how": "Clear Basement Floor 12",
                "g": "World Cards"
              },
              {
                "name": "Hollow Bastion",
                "loc": "Begin the story",
                "how": "Received by default",
                "g": "World Cards"
              },
              {
                "name": "Twilight Town",
                "loc": "Reach the B2F Entrance Hall",
                "how": "Clear Basement Floor 3",
                "g": "World Cards"
              },
              {
                "name": "Destiny Islands",
                "loc": "Defeat Lexaeus at the B4F Exit Hall",
                "how": "Clear Basement Floor 4",
                "g": "World Cards"
              },
              {
                "name": "Castle Oblivion",
                "loc": "Reach the B2F Exit Hall",
                "how": "Clear Basement Floor 2",
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
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Donald Duck",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Goofy",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Jiminy Cricket",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Pluto",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Riku",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Kairi",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Naminé",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Riku Replica",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Vexen",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Axel",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Marluxia",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Larxene",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Simba",
                "loc": "Traverse Town",
                "how": "Clear the Room of Beginnings",
                "g": "Others"
              },
              {
                "name": "Dumbo",
                "loc": "Monstro",
                "how": "Clear the Room of Truth",
                "g": "Others"
              },
              {
                "name": "Bambi",
                "loc": "100 Acre Wood",
                "how": "Clear the story of this world",
                "g": "Others"
              },
              {
                "name": "Mushu",
                "loc": "Hollow Bastion",
                "how": "Treasure chest in Room of Rewards",
                "g": "Others"
              },
              {
                "name": "The Moogles",
                "loc": "All floors",
                "how": "Use a Moogle Room card",
                "g": "Others"
              },
              {
                "name": "Leon",
                "how": "Received during the story",
                "g": "Traverse Town"
              },
              {
                "name": "Yuffie",
                "how": "Received during the story",
                "g": "Traverse Town"
              },
              {
                "name": "Aerith",
                "how": "Received during the story",
                "g": "Traverse Town"
              },
              {
                "name": "Cid",
                "how": "Received during the story",
                "g": "Traverse Town"
              },
              {
                "name": "Alice",
                "how": "Received during the story",
                "g": "Wonderland"
              },
              {
                "name": "The Queen of Hearts",
                "how": "Received during the story",
                "g": "Wonderland"
              },
              {
                "name": "The White Rabbit",
                "how": "Received during the story",
                "g": "Wonderland"
              },
              {
                "name": "Card of Hearts",
                "how": "Received during the story",
                "g": "Wonderland"
              },
              {
                "name": "Card of Spades",
                "how": "Received during the story",
                "g": "Wonderland"
              },
              {
                "name": "The Chesire Cat",
                "how": "Received during the story",
                "g": "Wonderland"
              },
              {
                "name": "Hercules",
                "how": "Received during the story",
                "g": "Olympus Coliseum"
              },
              {
                "name": "Philoctetes",
                "how": "Received during the story",
                "g": "Olympus Coliseum"
              },
              {
                "name": "Hades",
                "how": "Received during the story",
                "g": "Olympus Coliseum"
              },
              {
                "name": "Cloud",
                "how": "Received during the story",
                "g": "Olympus Coliseum"
              },
              {
                "name": "Aladdin",
                "how": "Received during the story",
                "g": "Agrabah"
              },
              {
                "name": "Genie",
                "how": "Received during the story",
                "g": "Agrabah"
              },
              {
                "name": "Jasmine",
                "how": "Received during the story",
                "g": "Agrabah"
              },
              {
                "name": "Iago",
                "how": "Received during the story",
                "g": "Agrabah"
              },
              {
                "name": "Jafar",
                "how": "Received during the story",
                "g": "Agrabah"
              },
              {
                "name": "Jafar-Genie",
                "how": "Received during the story",
                "g": "Agrabah"
              },
              {
                "name": "Sora",
                "how": "Received during the story",
                "g": "Halloween Town"
              },
              {
                "name": "Donald Duck",
                "how": "Received during the story",
                "g": "Halloween Town"
              },
              {
                "name": "Goofy",
                "how": "Received during the story",
                "g": "Halloween Town"
              },
              {
                "name": "Jack",
                "how": "Received during the story",
                "g": "Halloween Town"
              },
              {
                "name": "Sally",
                "how": "Received during the story",
                "g": "Halloween Town"
              },
              {
                "name": "Dr. Finkelstein",
                "how": "Received during the story",
                "g": "Halloween Town"
              },
              {
                "name": "Oogie Boogie",
                "how": "Received during the story",
                "g": "Halloween Town"
              },
              {
                "name": "Pinocchio",
                "how": "Received during the story",
                "g": "Monstro"
              },
              {
                "name": "Geppetto",
                "how": "Received during the story",
                "g": "Monstro"
              },
              {
                "name": "Ariel",
                "how": "Received during the story",
                "g": "Atlantica"
              },
              {
                "name": "Sebastian",
                "how": "Received during the story",
                "g": "Atlantica"
              },
              {
                "name": "Flounder",
                "how": "Received during the story",
                "g": "Atlantica"
              },
              {
                "name": "Ursula",
                "how": "Received during the story",
                "g": "Atlantica"
              },
              {
                "name": "Peter Pan",
                "how": "Received during the story",
                "g": "Neverland"
              },
              {
                "name": "Tinker Bell",
                "how": "Received during the story",
                "g": "Neverland"
              },
              {
                "name": "Wendy",
                "how": "Received during the story",
                "g": "Neverland"
              },
              {
                "name": "Hook",
                "how": "Received during the story",
                "g": "Neverland"
              },
              {
                "name": "The Beast",
                "how": "Received during the story",
                "g": "Hollow Bastion"
              },
              {
                "name": "Belle",
                "how": "Received during the story",
                "g": "Hollow Bastion"
              },
              {
                "name": "Maleficent",
                "how": "Received during the story",
                "g": "Hollow Bastion"
              },
              {
                "name": "Dragon Maleficent",
                "how": "Received during the story",
                "g": "Hollow Bastion"
              },
              {
                "name": "Winnie the Pooh",
                "how": "Received during the story",
                "g": "100 Acre Wood"
              },
              {
                "name": "Piglet",
                "how": "Received during the story",
                "g": "100 Acre Wood"
              },
              {
                "name": "Owl",
                "how": "Received during the story",
                "g": "100 Acre Wood"
              },
              {
                "name": "Roo",
                "how": "Received during the story",
                "g": "100 Acre Wood"
              },
              {
                "name": "Eeyore",
                "how": "Received during the story",
                "g": "100 Acre Wood"
              },
              {
                "name": "Tigger",
                "how": "Received during the story",
                "g": "100 Acre Wood"
              },
              {
                "name": "Rabbit",
                "how": "Received during the story",
                "g": "100 Acre Wood"
              },
              {
                "name": "Tidus",
                "how": "Received during the story",
                "g": "Destiny Islands"
              },
              {
                "name": "Wakka",
                "how": "Received during the story",
                "g": "Destiny Islands"
              },
              {
                "name": "Selphie",
                "how": "Received during the story",
                "g": "Destiny Islands"
              },
              {
                "name": "Shadow",
                "loc": "All early floors",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Soldier",
                "loc": "Traverse Town, Wonderland, Twilight Town",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Large Body",
                "loc": "Olympus Coliseum, Wonderland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Red Nocturne",
                "loc": "Traverse Town, Wonderland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Blue Rapsody",
                "loc": "Traverse Town, Olympus Coliseum",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Yellow Opera",
                "loc": "Agrabah, Monstro, Neverland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Green Requiem",
                "loc": "Agrabah, Monstro",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Powerwild",
                "loc": "Olympus Coliseum",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Bouncywild",
                "loc": "Olympus Coliseum",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Air Soldier",
                "loc": "Monstro, Halloween Town",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Bandit",
                "loc": "Agrabah",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Fat Bandit",
                "loc": "Agrabah",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Barrel Spider",
                "loc": "Agrabah, Neverland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Search Ghost",
                "loc": "Halloween Town, Atlantica",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Sea Neon",
                "loc": "Atlantica",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Screwdiver",
                "loc": "Atlantica",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Aquatank",
                "loc": "Atlantica",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Wight Knight",
                "loc": "Halloween Town",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Gargoyle",
                "loc": "Halloween Town",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Pirate",
                "loc": "Neverland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Air Pirate",
                "loc": "Neverland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Darkball",
                "loc": "Destiny Islands, Castle Oblivion",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Defender",
                "loc": "Hollow Bastion, Castle Oblivion",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Wyvern",
                "loc": "Hollow Bastion, Castle Oblivion",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Wizard",
                "loc": "Hollow Bastion, Castle Oblivion",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Neoshadow",
                "loc": "Castle Oblivion",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "White Mushroom",
                "loc": "All floors",
                "how": "Use a White Room card",
                "g": "The Heartless"
              },
              {
                "name": "Black Fungus",
                "loc": "All floors",
                "how": "Use a Black Room card",
                "g": "The Heartless"
              },
              {
                "name": "Creeper Plant",
                "loc": "Wonderland, Destiny Islands",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Tornado Step",
                "loc": "Monstro, Destiny Islands",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Crescendo",
                "loc": "Wonderland, Destiny Islands",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Guard Armor",
                "loc": "Traverse Town",
                "how": "Clear Traverse Town",
                "g": "The Heartless"
              },
              {
                "name": "Parasite Cage",
                "loc": "Monstro",
                "how": "Clear Monstro",
                "g": "The Heartless"
              },
              {
                "name": "Trickmaster",
                "loc": "Wonderland",
                "how": "Clear Wonderland",
                "g": "The Heartless"
              },
              {
                "name": "Darkside",
                "loc": "Destiny Islands",
                "how": "Clear Destiny Islands",
                "g": "The Heartless"
              }
            ],
            "riku": [
              {
                "name": "Riku",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Riku (Halloween Town)",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "The King",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "The King (Halloween Town)",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Sora",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Kairi",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Naminé",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Riku Replica",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "DiZ",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Ansem",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Vexen",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Lexaeus",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Zexion",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Axel",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Marluxia",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Larxene",
                "how": "Received during the story",
                "g": "Characters I"
              },
              {
                "name": "Maleficent",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Jafar-Genie",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Ursula",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Hades",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Oogie Boogie",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Hook",
                "how": "Received during the story",
                "g": "Characters II"
              },
              {
                "name": "Shadow",
                "loc": "All early floors",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Soldier",
                "loc": "Traverse Town, Wonderland, Twilight Town",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Large Body",
                "loc": "Olympus Coliseum, Wonderland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Red Nocturne",
                "loc": "Traverse Town, Wonderland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Blue Rapsody",
                "loc": "Traverse Town, Olympus Coliseum",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Yellow Opera",
                "loc": "Agrabah, Monstro, Neverland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Green Requiem",
                "loc": "Agrabah, Monstro",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Powerwild",
                "loc": "Olympus Coliseum",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Bouncywild",
                "loc": "Olympus Coliseum",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Air Soldier",
                "loc": "Monstro, Halloween Town",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Bandit",
                "loc": "Agrabah",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Fat Bandit",
                "loc": "Agrabah",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Barrel Spider",
                "loc": "Agrabah, Neverland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Search Ghost",
                "loc": "Halloween Town, Atlantica",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Sea Neon",
                "loc": "Atlantica",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Screwdiver",
                "loc": "Atlantica",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Aquatank",
                "loc": "Atlantica",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Wight Knight",
                "loc": "Halloween Town",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Gargoyle",
                "loc": "Halloween Town",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Pirate",
                "loc": "Neverland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Air Pirate",
                "loc": "Neverland",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Darkball",
                "loc": "Destiny Islands, Castle Oblivion",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Defender",
                "loc": "Hollow Bastion, Castle Oblivion",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Wyvern",
                "loc": "Hollow Bastion, Castle Oblivion",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Wizard",
                "loc": "Hollow Bastion, Castle Oblivion",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Neoshadow",
                "loc": "Castle Oblivion",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Black Fungus",
                "loc": "All floors",
                "how": "Use a Black Room card",
                "g": "The Heartless"
              },
              {
                "name": "Creeper Plant",
                "loc": "Wonderland, Destiny Islands",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Tornado Step",
                "loc": "Monstro, Destiny Islands",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Crescendo",
                "loc": "Wonderland, Destiny Islands",
                "how": "Encounter this enemy in any battle",
                "g": "The Heartless"
              },
              {
                "name": "Guard Armor",
                "loc": "Traverse Town",
                "how": "Clear Traverse Town",
                "g": "The Heartless"
              },
              {
                "name": "Parasite Cage",
                "loc": "Monstro",
                "how": "Clear Monstro",
                "g": "The Heartless"
              },
              {
                "name": "Trickmaster",
                "loc": "Wonderland",
                "how": "Clear Wonderland",
                "g": "The Heartless"
              },
              {
                "name": "Darkside",
                "loc": "Destiny Islands",
                "how": "Clear Destiny Islands",
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
              "name": "Monstro's Belly Brawl",
              "world": "Monstro"
            },
            {
              "name": "Balloon Glider",
              "world": "100 Acre Wood",
              "target": "500 points or higher"
            },
            {
              "name": "Whirlwind Plunge",
              "world": "100 Acre Wood",
              "target": "2000 points or higher"
            },
            {
              "name": "Bumble-Rumble",
              "world": "100 Acre Wood",
              "target": "Clear all 70 bees within 1 minute and 40 seconds"
            },
            {
              "name": "Tigger's Jump-a-Thon",
              "world": "100 Acre Wood",
              "target": "120 points or higher"
            },
            {
              "name": "Veggie Panic",
              "world": "100 Acre Wood",
              "target": "150 points or higher"
            }
          ]
        }
      ]
    }
  ]
};

(window.KH_GAMES = window.KH_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;
