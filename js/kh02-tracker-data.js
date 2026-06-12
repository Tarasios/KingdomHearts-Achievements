/* =====================================================================
   KINGDOM HEARTS 0.2 Birth by Sleep – A fragmentary passage –
   achievement / completion checklist data + tracker config.
   Extracted from xenodusk's "KINGDOM HEARTS 0.2 Birth by Sleep
   Checklist" spreadsheet (v1.00, August 18, 2024).
   Consumed by js/kh-tracker.js (generic engine). Single-character
   game (charKey null). Item order is load-bearing: saved progress
   is keyed by index.
   ===================================================================== */
var TRACKER_GAME = {
  "id": "kh02",
  "storeKey": "kh02_progress_v1",
  "charKey": null,
  "chars": [],
  "trophyAuto": {
    "Treasure Hunter": "treasures",
    "Ambitious": "objectives"
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
              "rarity": "Bronze",
              "name": "Wandering in the Dark",
              "desc": "Begin a journey to escape the Dark World."
            },
            {
              "rarity": "Bronze",
              "name": "Flow of Time",
              "desc": "Complete the Castle Town episode."
            },
            {
              "rarity": "Bronze",
              "name": "False Temptations",
              "desc": "Complete the World Within episode."
            },
            {
              "rarity": "Bronze",
              "name": "Real or Illusion?",
              "desc": "Complete the Forest of Thorns episode."
            },
            {
              "rarity": "Bronze",
              "name": "Into the Depths of Darkness",
              "desc": "Complete KINGDOM HEARTS 0.2 Birth by Sleep - A fragmentary passage -."
            },
            {
              "rarity": "Bronze",
              "name": "Treasure Hunter",
              "desc": "Open all treasure chests in the Dark World."
            },
            {
              "rarity": "Gold",
              "name": "Ambitious",
              "desc": "Complete all objectives."
            },
            {
              "rarity": "Bronze",
              "name": "Undefeated",
              "desc": "Complete the story without having to Retry or Continue."
            },
            {
              "rarity": "Bronze",
              "name": "Heartless Hunter",
              "desc": "Defeat 500 Heartless."
            },
            {
              "rarity": "Bronze",
              "name": "Ice Queen",
              "desc": "Execute Spellweaver's Finish command 5 times."
            },
            {
              "rarity": "Silver",
              "name": "Proud Player/Critical Competitor",
              "desc": "Complete the game in Proud or Critical Mode."
            },
            {
              "rarity": "Bronze",
              "name": "A Magical Finale",
              "desc": "Execute all Magic Situation Commands."
            },
            {
              "rarity": "Bronze",
              "name": "Shotlock Star",
              "desc": "Earn an Excellent rating in Shotlock."
            },
            {
              "rarity": "Bronze",
              "name": "Dark Explorer",
              "desc": "Walk a long distance within a single map."
            },
            {
              "rarity": "Bronze",
              "name": "Fashionista",
              "desc": "Equip an item in all wardrobe slots."
            }
          ]
        }
      ]
    },
    {
      "id": "objectives",
      "sections": [
        {
          "id": "objectives",
          "cols": [
            {
              "k": "num"
            },
            {
              "k": "name",
              "name": true
            },
            {
              "k": "unlock"
            },
            {
              "k": "how"
            },
            {
              "k": "reward"
            }
          ],
          "items": [
            {
              "num": "1",
              "name": "Defeat the Shadows",
              "unlock": "Available from the start",
              "how": "Defeat 30 Shadows",
              "reward": "Figaro"
            },
            {
              "num": "2",
              "name": "Defeat the Flutterings",
              "unlock": "Encounter a Fluttering",
              "how": "Defeat 45 Flutterings",
              "reward": "Coil (Pink)"
            },
            {
              "num": "3",
              "name": "Defeat the Flame Cores",
              "unlock": "Encounter a Flame Core",
              "how": "Defeat 40 Flame Cores",
              "reward": "Cyber Antennae"
            },
            {
              "num": "4",
              "name": "Defeat the Neoshadows",
              "unlock": "Encounter a Neoshadow",
              "how": "Defeat 30 Neoshadows",
              "reward": "Antennae"
            },
            {
              "num": "5",
              "name": "Defeat the Water Cores",
              "unlock": "Encounter a Water Core",
              "how": "Defeat 20 Water Cores",
              "reward": "Mecha (Blue)"
            },
            {
              "num": "6",
              "name": "Defeat the Earth Cores",
              "unlock": "Encounter an Earth Core",
              "how": "Defeat 20 Earth Cores",
              "reward": "Classy (Yellow)"
            },
            {
              "num": "7",
              "name": "Test of Strength I",
              "unlock": "Available from the start",
              "how": "Raise Aqua to Level 60",
              "reward": "Royal Pauldron"
            },
            {
              "num": "8",
              "name": "Test of Strength II",
              "unlock": "Complete Test of Strength I",
              "how": "Raise Aqua to Level 70",
              "reward": "Astral Ornament"
            },
            {
              "num": "9",
              "name": "Test of Strength III",
              "unlock": "Complete Test of Strength II",
              "how": "Raise Aqua to Level 80",
              "reward": "Venus's Tiara"
            },
            {
              "num": "10",
              "name": "Master of Counters",
              "unlock": "Available from the start",
              "how": "Defeat 5 Heartless using the Counter Blast",
              "reward": "Flawless Wings"
            },
            {
              "num": "11",
              "name": "Master of Fire",
              "unlock": "Unlock magic",
              "how": "Use fire-based magic to defeat 30 Heartless",
              "reward": "Cyber Blades"
            },
            {
              "num": "12",
              "name": "Master of Ice",
              "unlock": "Unlock magic",
              "how": "Use ice-based magic to defeat 30 Heartless",
              "reward": "Blades"
            },
            {
              "num": "13",
              "name": "Master of Lightning",
              "unlock": "Unlock magic",
              "how": "Use lightning-based magic to defeat 30 Heartless",
              "reward": "Mystic Pauldron"
            },
            {
              "num": "14",
              "name": "Frozen Rail Ride",
              "unlock": "Unlock magic",
              "how": "Use ice-based magic to create a rail, then ride the rail a long distance",
              "reward": "Flawless Arm Guards"
            },
            {
              "num": "15",
              "name": "Ice Breaker",
              "unlock": "Unlock magic",
              "how": "Freeze at least 5 Heartless and shatter 5 of them",
              "reward": "Grace (Purple)"
            },
            {
              "num": "16",
              "name": "Magic Advantage",
              "unlock": "Unlock magic",
              "how": "Some Heartless are weak to certain types of magic; use the right type to hit an enemy for extra damage",
              "reward": "Voltaic Arm Plate"
            },
            {
              "num": "17",
              "name": "Fight and Flight",
              "unlock": "Unlock Doubleflight",
              "how": "Defeat 5 Heartless while in midair",
              "reward": "Radiant Ornament"
            },
            {
              "num": "18",
              "name": "Excellent Aim",
              "unlock": "Unlock the shotlock",
              "how": "Earn an Excellent rating 6 times in a row using Shotlock",
              "reward": "Diamond (White)"
            },
            {
              "num": "19",
              "name": "Stylish Moves",
              "unlock": "Unlock style change",
              "how": "Use a Style Change to defeat 50 Heartless",
              "reward": "Diamond (Green)"
            },
            {
              "num": "20",
              "name": "A Fine Finish",
              "unlock": "Unlock style change",
              "how": "Activate Spellweaver's Finish command",
              "reward": "Classy (Blue)"
            },
            {
              "num": "21",
              "name": "Wardrobe Weaver",
              "unlock": "Unlock style change",
              "how": "Equip an item in all wardrobe slots, then activate Spellweaver's Finish command",
              "reward": "Ribbons"
            },
            {
              "num": "22",
              "name": "Trendsetter",
              "unlock": "Complete another objective",
              "how": "Equip an item in a wardrobe slot",
              "reward": "Mecha (Pink)"
            },
            {
              "num": "23",
              "name": "Streetlamp Striker",
              "unlock": "Available from the start",
              "how": "Hit 20 streetlamps",
              "reward": "Grace (Blue)"
            },
            {
              "num": "24",
              "name": "Top of the Town",
              "unlock": "Available from the start",
              "how": "Climb to the highest point",
              "reward": "Wings"
            },
            {
              "num": "25",
              "name": "Starlit Wish",
              "unlock": "Available from the start",
              "how": "Watch for a meteor shower",
              "reward": "Arm Guards"
            },
            {
              "num": "26",
              "name": "Heartless That Dwell",
              "unlock": "Reach The World Within",
              "how": "Defeat all of the Heartless in the room",
              "reward": "Mecha (Yellow)"
            },
            {
              "num": "27",
              "name": "Mystery Within",
              "unlock": "Reach The World Within",
              "how": "Solve the mystery of the World Within and win the battle",
              "reward": "Stitching"
            },
            {
              "num": "28",
              "name": "Treasure Within",
              "unlock": "Reach The World Within",
              "how": "Uncover the mystery of the World Within and obtain the special item",
              "reward": "Arm Plate"
            },
            {
              "num": "29",
              "name": "Gem Gatherer",
              "unlock": "Enter the Mines area in The World Within",
              "how": "Find the brightest of jewels in the mines where the Seven Dwarfs work",
              "reward": "Marie"
            },
            {
              "num": "30",
              "name": "Connected",
              "unlock": "Reach the rocks with the star formation in the Mines area",
              "how": "Discover the secret in the mirror tied to the mysterious rocks",
              "reward": "Lace (Crystal)"
            },
            {
              "num": "31",
              "name": "Queen of the Rink",
              "unlock": "Find the first mirror leading to the phantom Aqua fight",
              "how": "Perform a spin during the fight with the Phantom Aqua",
              "reward": "Royal Tiara"
            },
            {
              "num": "32",
              "name": "Defeat The Darksides",
              "unlock": "Encounter the first Darkside at the Rocky Path",
              "how": "Defeat 3 Darksides that stand in Aqua's way",
              "reward": "Diamond (Blue)"
            },
            {
              "num": "33",
              "name": "Prickly Problem",
              "unlock": "Reach the Forest of Thorns",
              "how": "Destroy 50 ivy branches",
              "reward": "Coil (White)"
            },
            {
              "num": "34",
              "name": "Fairy Bouquet",
              "unlock": "Reach the Forest of Thorns",
              "how": "Find flowers that represent Flora, Fauna, and Merryweather",
              "reward": "Minnie Ears (Blue Bow)"
            },
            {
              "num": "35",
              "name": "Work Together with King Mickey",
              "unlock": "Reach the Depths of Darkness",
              "how": "Link with King Mickey 5 times",
              "reward": "Minnie Ears (Red Bow)"
            },
            {
              "num": "36",
              "name": "Turn the Tide",
              "unlock": "Revisit Castle Town after beating the game or during NG+",
              "how": "Defeat the Demon Tower with Spellweaver's Finish command",
              "reward": "Cheshire Cat"
            },
            {
              "num": "37",
              "name": "Treasure Hunt in the Castle Town",
              "unlock": "Revisit Castle Town after beating the game or during NG+",
              "how": "Open all of the Treasure Chests in the Castle Town",
              "reward": "Coil (Yellow)"
            },
            {
              "num": "38",
              "name": "Lingering Memories in the Castle Town",
              "unlock": "Revisit Castle Town after beating the game or during NG+",
              "how": "Find lingering memories in the Castle Town",
              "reward": "Pulse Blades"
            },
            {
              "num": "39",
              "name": "Treasure Hunt in the World Within",
              "unlock": "Revisit The World Within after beating the game or during NG+",
              "how": "Open all of the Treasure Chests in the World Within",
              "reward": "Minnie Ears (White Bow)"
            },
            {
              "num": "40",
              "name": "Lingering Memories in the World Within",
              "unlock": "Revisit The World Within after beating the game or during NG+",
              "how": "Find lingering memories in the World Within",
              "reward": "Warrior's Arm Plate"
            },
            {
              "num": "41",
              "name": "Flawless Victory",
              "unlock": "Revisit The World Within after beating the game or during NG+",
              "how": "Defeat the third phantom Aqua without taking any damage",
              "reward": "Lustrous Wings"
            },
            {
              "num": "42",
              "name": "In the Mirror",
              "unlock": "Complete Quest for the Zodiac",
              "how": "Enter the mirror that appears in the middle of the 12 zodiac symbols and win all battles",
              "reward": "Tiara"
            },
            {
              "num": "43",
              "name": "Quest for the Zodiac",
              "unlock": "Revisit The World Within after beating the game or during NG+",
              "how": "Find and restore the light of the 12 zodiac symbols",
              "reward": "Pauldron"
            },
            {
              "num": "44",
              "name": "Treasure Hunt in the Forest of Thorns",
              "unlock": "Revisit Forest of Thorns after beating the game or during NG+",
              "how": "Open all of the Treasure Chests in the Forest of Thorns",
              "reward": "Classy (White)"
            },
            {
              "num": "45",
              "name": "Lingering Memories in the Forest of Thorns",
              "unlock": "Revisit Forest of Thorns after beating the game or during NG+",
              "how": "Find lingering memories in the Forest of Thorns",
              "reward": "Pulse Antennae"
            },
            {
              "num": "46",
              "name": "Slide Along the Ivy Rails",
              "unlock": "Revisit Forest of Thorns after beating the game or during NG+",
              "how": "Use Rail Slide to dodge the Darksides' attacks without taking any damage",
              "reward": "Lustrous Arm Guards"
            },
            {
              "num": "47",
              "name": "Keeper of the Orb",
              "unlock": "Revisit Forest of Thorns after beating the game or during NG+",
              "how": "Defeat the Darkside supporting the dark orb without taking any damage",
              "reward": "Lace (Floral)"
            },
            {
              "num": "48",
              "name": "Treasure Hunt in the Depths of Darkness",
              "unlock": "Revisit Depths of Darkness after beating the game or during NG+",
              "how": "Open all of the Treasure Chests in the Depths of Darkness",
              "reward": "Grace (Pink)"
            },
            {
              "num": "49",
              "name": "Lingering Memories in the Depths of Darkness",
              "unlock": "Revisit Depths of Darkness after beating the game or during NG+",
              "how": "Find lingering memories in the Depths of Darkness",
              "reward": "Iron Ornament"
            },
            {
              "num": "50",
              "name": "Combined Strength",
              "unlock": "Revisit Depths of Darkness after beating the game or during NG+",
              "how": "Link with King Mickey to defeat the Demon Tower",
              "reward": "Polka Dots"
            },
            {
              "num": "51",
              "name": "Critical Conquest",
              "unlock": "Beat the game",
              "how": "Defeat the Demon Tide on Critical Mode",
              "reward": "Crisscross"
            }
          ]
        }
      ]
    },
    {
      "id": "treasures",
      "sections": [
        {
          "id": "treasures",
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
              "name": "Potion",
              "how": "In the middle of the road, after the ice rail.",
              "g": "Main Road"
            },
            {
              "name": "Castle Town Area Map",
              "how": "Big chest in the broken bridge to the castle, before the doors leading to the town.",
              "g": "Castle Town"
            },
            {
              "name": "Ether",
              "how": "From the save point in the fountain square, go towards the eastern area. The chest is behind a house, next to some barrels.",
              "g": "Castle Town"
            },
            {
              "name": "Potion",
              "how": "From the save point in the fountain square, go towards the western area. The chest is below a crystalline platform.",
              "g": "Castle Town"
            },
            {
              "name": "Potion",
              "how": "From the save point in the fountain square, go towards the northern area and take the upper path. The chest is on a floating rooftop.",
              "g": "Castle Town"
            },
            {
              "name": "Ether",
              "how": "From the save point in the fountain square, go towards the northern area and drop down to the lower area (the one where you find a gear piece). The chest is next to a street lamp.",
              "g": "Castle Town"
            },
            {
              "name": "Virgo Relic",
              "how": "Post-game only. From the save point in the fountain square, go towards the northern area. Right after the archway, look to the left to find the chest between a street lamp and two barrels.",
              "g": "Castle Town"
            },
            {
              "name": "Aries Relic",
              "how": "Post-game only. From the save point in the fountain square, go towards the northeastern area. You will find the chest next to a street lamp and some boxes.",
              "g": "Castle Town"
            },
            {
              "name": "Sagittarius Relic",
              "how": "Post-game only. On top of the uppermost destroyed house that is floating above the fountain square. Jump and Air Slide across the floating debris to reach it.",
              "g": "Castle Town"
            },
            {
              "name": "Aquarius Relic",
              "how": "Post-game only. From the save point in the fountain square, go towards the western area. The chest is hidden in the area with jumping platforms, next to some broken stairs.",
              "g": "Castle Town"
            },
            {
              "name": "The World Within Area Map",
              "how": "Big chest after the initial area.",
              "g": "The World Within"
            },
            {
              "name": "Mega-Potion",
              "how": "On top of the ruined archways surrounding the plaza. To reach it, jump onto the broken column along the west wall. From there, jump to the top of the closest mirror chamber and keep jumping through the roofs until you're able to reach the upper platform above the archways.",
              "g": "The World Within"
            },
            {
              "name": "Mega-Ether",
              "how": "Go through the mirror in the east chamber. In the reflection, you will see which of the treasure chests actually contains the reward. Go inside the mirror and open that chest.",
              "g": "The World Within"
            },
            {
              "name": "Potion",
              "how": "Go through the mirror in the northeast chamber. The chest is upside-down next to a glowing column. Hit the column and then choose to rotate the room to open the chest.",
              "g": "The World Within"
            },
            {
              "name": "Hi-Potion",
              "how": "Go through the mirror in the northeast chamber. The chest is upside-down near the mirror chamber. Look for a glowing column, rotate the room and find your way to the mirror chamber.",
              "g": "The World Within"
            },
            {
              "name": "Hi-Potion",
              "how": "Go through the mirror in the north chamber. Keep walking up the stairs. After changing areas twice, the chest will be in a room next to the starting point.",
              "g": "The World Within"
            },
            {
              "name": "Megalixir",
              "how": "Go through the mirror in the west chamber. The chest is on a floating platform. To reach it, use the mirror to stop the ramp accordingly.",
              "g": "The World Within"
            },
            {
              "name": "Hi-Potion",
              "how": "Go through the mirror in the west chamber. The chest is at the end of this area, near the mirror.",
              "g": "The World Within"
            },
            {
              "name": "Cancer Relic",
              "how": "Post-game only. Behind the north mirror chamber.",
              "g": "The World Within"
            },
            {
              "name": "Pisces Relic",
              "how": "Post-game only. Go through the mirror in the north chamber. Turn the camera around and you will see the chest.",
              "g": "The World Within"
            },
            {
              "name": "Gemini Relic",
              "how": "Post-game only. Go through the mirror in the northeast chamber. The chest is in the upright version of the room, around the middle area.",
              "g": "The World Within"
            },
            {
              "name": "Leo Relic",
              "how": "Post-game only. Go through the mirror in the west chamber. The chest is next to a fallen column.",
              "g": "The World Within"
            },
            {
              "name": "Libra Relic",
              "how": "Post-game only. Go through the mirror in the west chamber. The chest is in a corner of the third platform of the area (the biggest).",
              "g": "The World Within"
            },
            {
              "name": "Forest of Thorns Area Map",
              "how": "Big chest after the initial area, next to the tree branch railway.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Mega-Potion",
              "how": "On a platform in the first big area. Ride the railway to reach the upper side.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Ether",
              "how": "Near the Rocky Path save point, behind some red vines. Burn them with Firaga.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Potion",
              "how": "Climb the path from the Rocky Path save point. A little after you reach an opening, there will be a hidden path to the left. Make your way up and burn the red vines you see up top. The chest is there.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Ether",
              "how": "After the previous chest, keep climbing up the path and, once you reach a bifurcation, take the path to the left. You will eventually see red vines and the chest behind them. Use Firaga to obtain it.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Hi-Potion",
              "how": "From the previously mentioned bifurcation, now take the path to the right. Midway through, look to the right and you will see the chest on a ledge in the northeast corner.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Hi-Potion",
              "how": "In the big area of the Rocky Path, you will find this chest in the ground level, in a room in the west side.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Potion",
              "how": "After leaving the big area of the Rocky Path, you will see a bifurcation with a deadend on one side and a circular room on the other. Climb down the former and find the chest.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Potion",
              "how": "From the bifurcation mentioned above, follow the circular path to the south and you will find the chest hidden in a lower level.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Mega-Potion",
              "how": "In a room after the circular room mentioned above.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Taurus Relic",
              "how": "Post-game only. After the initial room, below the tree branch railway.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Scorpio Relic",
              "how": "Post-game only. After the first big area, keep going forward and, once you reach a bifurcation, follow the path to the west. The chest is there.",
              "g": "Forest of Thorns"
            },
            {
              "name": "Depths of Darkness Area Map",
              "how": "Big chest found shortly after the beginning of the area.",
              "g": "Depths of Darkness"
            },
            {
              "name": "Mega-Ether",
              "how": "Slide down the ramp leading to the lower level. The chest is in the northeast side.",
              "g": "Depths of Darkness"
            },
            {
              "name": "Hi-Potion",
              "how": "Along the straight path, hugging the eastern wall.",
              "g": "Depths of Darkness"
            },
            {
              "name": "Mega-Ether",
              "how": "Shortly after the chest above, hugging the western wall.",
              "g": "Depths of Darkness"
            },
            {
              "name": "Elixir",
              "how": "In the sandy area, around the middle area hugging the northern wall.",
              "g": "Depths of Darkness"
            },
            {
              "name": "Capricorn Relic",
              "how": "Post-game only. In the southeast side of the sandy area, on top of a pillar.",
              "g": "Depths of Darkness"
            }
          ]
        }
      ]
    }
  ]
};

(window.KH_GAMES = window.KH_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;
