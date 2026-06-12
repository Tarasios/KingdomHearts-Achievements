/* =====================================================================
   KH II Final Mix — completion checklist data + tracker config
   Extracted from xenodusk's "Guide & Checklist — Kingdom Hearts II
   Final Mix" spreadsheet (v1.01, June 19, 2024).
   Consumed by js/kh-tracker.js (generic engine). Item order is
   load-bearing: saved progress is keyed by index.
   ===================================================================== */
const TRACKER_GAME = {
  "id": "kh2",
  "storeKey": "kh2_progress_v1",
  "charKey": null,
  "chars": null,
  "trophyAuto": {
    "Mushroom Master": "mushrooms",
    "Searcher": "searcher",
    "Professor": "professor",
    "Heartless Highbrow": "enemies",
    "Nobody Know-It-All": "enemies",
    "Treasure Hunter": "treasures",
    "Puzzler": "puzzles",
    "Conqueror": "conqueror",
    "Minigame Maniac": "minigames",
    "Limit Master": "limits",
    "Gummi Ship Collector": "blueprints",
    "Navigator": {
      "section": "treasures",
      "nameEndsWith": "Map"
    },
    "Ace Pilot": {
      "section": "gummim",
      "check": "s",
      "perGroup": true
    },
    "Top Gun": {
      "section": "gummim",
      "check": "ex",
      "perGroup": true
    }
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
              "name": "Critical Competitor",
              "desc": "Clear game on Critical."
            },
            {
              "rarity": "Silver",
              "name": "Proud Player",
              "desc": "Clear game on Proud."
            },
            {
              "rarity": "Silver",
              "name": "Ambitious Adventurer",
              "desc": "Clear the game and watch the ending sequence."
            },
            {
              "rarity": "Silver",
              "name": "Level Master",
              "desc": "Get Sora to Level 99."
            },
            {
              "rarity": "Bronze",
              "name": "My Hero",
              "desc": "Get rescued by the King."
            },
            {
              "rarity": "Silver",
              "name": "Lingering Will",
              "desc": "Defeat the Lingering Will."
            },
            {
              "rarity": "Silver",
              "name": "One-Winged Angel",
              "desc": "Defeat Sephiroth."
            },
            {
              "rarity": "Gold",
              "name": "To Rule Them All",
              "desc": "Defeat all Organization XIII Replica Data."
            },
            {
              "rarity": "Silver",
              "name": "Mushroom Master",
              "desc": "Satisfy every member of Mushroom XIII."
            },
            {
              "rarity": "Bronze",
              "name": "Rookie",
              "desc": "Win the Pain and Panic Cup."
            },
            {
              "rarity": "Bronze",
              "name": "Novice Hero",
              "desc": "Win the Cerberus Cup."
            },
            {
              "rarity": "Bronze",
              "name": "Artisan Hero",
              "desc": "Win the Titan Cup."
            },
            {
              "rarity": "Bronze",
              "name": "True Hero",
              "desc": "Win the Goddess of Fate Cup."
            },
            {
              "rarity": "Bronze",
              "name": "Coliseum Competitor",
              "desc": "Win the Pain and Panic Paradox Cup."
            },
            {
              "rarity": "Bronze",
              "name": "Coliseum Star",
              "desc": "Win the Cerberus Paradox Cup."
            },
            {
              "rarity": "Bronze",
              "name": "Hero of the Coliseum",
              "desc": "Win the Titan Paradox Cup."
            },
            {
              "rarity": "Silver",
              "name": "Coliseum Champion",
              "desc": "Win the Hades Paradox Cup."
            },
            {
              "rarity": "Bronze",
              "name": "Summer's End",
              "desc": "Complete Roxas's episode."
            },
            {
              "rarity": "Bronze",
              "name": "A Timeless World",
              "desc": "Complete the Timeless River episode."
            },
            {
              "rarity": "Bronze",
              "name": "Above Honor",
              "desc": "Complete the Land of Dragons episodes."
            },
            {
              "rarity": "Bronze",
              "name": "A Budding Romance",
              "desc": "Complete the Beast's Castle episodes."
            },
            {
              "rarity": "Bronze",
              "name": "Hail the Hero",
              "desc": "Complete the Olympus Coliseum episodes."
            },
            {
              "rarity": "Bronze",
              "name": "Lifting the Curse",
              "desc": "Complete the Port Royal episodes."
            },
            {
              "rarity": "Bronze",
              "name": "What Friends Are For",
              "desc": "Complete the Agrabah episodes."
            },
            {
              "rarity": "Bronze",
              "name": "The Gift of Love",
              "desc": "Complete the Halloween Town episodes."
            },
            {
              "rarity": "Bronze",
              "name": "Return of the King",
              "desc": "Complete the Pride Lands episodes."
            },
            {
              "rarity": "Bronze",
              "name": "Electric Spark",
              "desc": "Complete the Space Paranoids episodes."
            },
            {
              "rarity": "Bronze",
              "name": "Always Together",
              "desc": "Complete the 100 Acre Wood episode."
            },
            {
              "rarity": "Bronze",
              "name": "Kindred Spirits",
              "desc": "Complete the Atlantica episodes."
            },
            {
              "rarity": "Bronze",
              "name": "A Taste of the Past",
              "desc": "Complete the Twilight Town episodes."
            },
            {
              "rarity": "Bronze",
              "name": "Reunion",
              "desc": "Reunite with Riku and Kairi."
            },
            {
              "rarity": "Bronze",
              "name": "Searcher",
              "desc": "Collect all Ansem Reports in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Professor",
              "desc": "Collect all Character entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Heartless Highbrow",
              "desc": "Collect all Heartless entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Nobody Know-It-All",
              "desc": "Collect all Nobody entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Treasure Hunter",
              "desc": "Collect all Treasures in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Puzzler",
              "desc": "Complete all Puzzles in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Navigator",
              "desc": "Collect all Maps in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Conqueror",
              "desc": "Collect all Mission entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Minigame Maniac",
              "desc": "Collect all Minigame entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Limit Master",
              "desc": "Collect all Limit entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Craftsman",
              "desc": "Collect all Synthesis Note entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Seeker",
              "desc": "Collect all Character Link entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Pro Skater",
              "desc": "Obtain 5,000 points with skateboard tricks."
            },
            {
              "rarity": "Bronze",
              "name": "Struggle Champion",
              "desc": "Win by obtaining all of the opponent's orbs."
            },
            {
              "rarity": "Bronze",
              "name": "Corroded by Darkness",
              "desc": "Activate Antiform 13 times."
            },
            {
              "rarity": "Bronze",
              "name": "Veteran Pilot",
              "desc": "Obtain an S rank on a gummi ship mission."
            },
            {
              "rarity": "Bronze",
              "name": "Ace Pilot",
              "desc": "Obtain an S rank on a gummi ship mission for all routes."
            },
            {
              "rarity": "Bronze",
              "name": "Top Gun",
              "desc": "Obtain an S rank on a gummi ship EX mission for all routes."
            },
            {
              "rarity": "Silver",
              "name": "Gummi Ship Collector",
              "desc": "Obtain all blueprints."
            }
          ]
        }
      ]
    },
    {
      "id": "journal",
      "sections": [
        {
          "id": "professor",
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
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Kairi",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Kairi",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Ansem",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Riku",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Riku",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Selphie",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Stitch",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Peter Pan",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Chicken Little",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Pete",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Maleficent",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Jiminy Cricket",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Moogles",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "King Mickey",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "King Mickey",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Pluto",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Naminé",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "DiZ",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Ansem the Wise",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Xehanort",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Organization XIII",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Xemnas",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Organization XIII",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Xigbar",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Organization XIII",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Xaldin",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Vexen",
              "how": "Defeat Vexen's Absent Silhoutte in Agrabah.",
              "g": "Other"
            },
            {
              "name": "Lexaeus",
              "how": "Defeat Lexaeus's Absent Silhoutte in Twitlight Town.",
              "g": "Other"
            },
            {
              "name": "Zexion",
              "how": "Defeat Zexion's Absent Silhoutte in Olympus Coliseum.",
              "g": "Other"
            },
            {
              "name": "Organization XIII",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Saïx",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Axel",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Organization XIII",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Demyx",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Organization XIII",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Luxord",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Marluxia",
              "how": "Defeat Marluxia's Absent Silhoutte in Beast's Castle.",
              "g": "Other"
            },
            {
              "name": "Larxene",
              "how": "Defeat Larxene's Absent Silhoutte in Port Royal.",
              "g": "Other"
            },
            {
              "name": "Roxas",
              "how": "Obtained during the story.",
              "g": "Other"
            },
            {
              "name": "Lingering Will",
              "how": "Defeat Lingering Will in Disney Castle.",
              "g": "Other"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Roxas",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Pence",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Hayner",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Olette",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Seifer",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Rai (Raijin)",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Fuu (Fujin)",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Setzer",
              "how": "Defeat Setzer at Struggle in Twilight Town (to fight him, you must defeat Hayner 10 times).",
              "g": "Twilight Town"
            },
            {
              "name": "Vivi",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Yen Sid",
              "how": "Obtained during the story.",
              "g": "Twilight Town"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Leon",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cid",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cloud",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Aerith",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Tifa",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Yuffie",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Merlin",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Scrooge McDuck",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Huey",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Dewey",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Louie",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sephiroth",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Yuna",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Rikku",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Paine",
              "how": "Obtained during the story.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "The Beast",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "The Beast",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "The Beast",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "Belle",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "Belle",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "Cogsworth",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "Lumiere",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "Mrs. Potts",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "Chip",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "The Wardrobe",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "Xaldin",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "Xaldin",
              "how": "Obtained during the story.",
              "g": "Beast's Castle"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Hercules",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Hercules",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Philoctetes",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Megara",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Pegasus",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Auron",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Pain",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Panic",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Hades",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Cerberus",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Hydra",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Demyx",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Pete",
              "how": "Obtained during the story.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "Aladdin",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "The Magic Carpet",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "Iago",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "Abu",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "Princess Jasmine",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "Genie",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "Jafar",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "Jafar",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "The Peddler",
              "how": "Obtained during the story.",
              "g": "Agrabah"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Ping",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Mulan",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Mushu",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Captain Li Shang",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Yao",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Chien-Po",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Ling",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "The Emperor",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Shan-Yu",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Xigbar",
              "how": "Obtained during the story.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Winnie the Pooh",
              "how": "Obtained during the story.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Tigger",
              "how": "Obtained during the story.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Piglet",
              "how": "Obtained during the story.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Rabbit",
              "how": "Obtained during the story.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Eeyore",
              "how": "Obtained during the story.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Owl",
              "how": "Obtained during the story.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Kanga",
              "how": "Obtained during the story.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Roo",
              "how": "Obtained during the story.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Gopher",
              "how": "Obtained during the story.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Simba",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Timon",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Pumbaa",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Nala",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Mufasa",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Rafiki",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Scar",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "The Ghost of Scar",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Shenzi",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Banzai",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Ed",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Pete",
              "how": "Obtained during the story.",
              "g": "Pride Lands"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Ariel",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Ariel",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "King Triton",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "King Triton",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Sebastian",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Flounder",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Prince Eric",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Vanessa",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Ursula",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Jetsam",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Flotsam",
              "how": "Obtained during the story.",
              "g": "Atlantica"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Disney Castle"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Disney Castle"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Disney Castle"
            },
            {
              "name": "Queen Minnie",
              "how": "Obtained during the story.",
              "g": "Disney Castle"
            },
            {
              "name": "Daisy Duck",
              "how": "Obtained during the story.",
              "g": "Disney Castle"
            },
            {
              "name": "Chip",
              "how": "Obtained during the story.",
              "g": "Disney Castle"
            },
            {
              "name": "Dale",
              "how": "Obtained during the story.",
              "g": "Disney Castle"
            },
            {
              "name": "Brooms",
              "how": "Obtained during the story.",
              "g": "Disney Castle"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "Pete (?)",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "Pete",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "Horace Horsecollar",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "Clarabelle Cow",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "Clara Cluck",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "King Mickey (?)",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "King Mickey",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "Pete",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "Maleficent",
              "how": "Obtained during the story.",
              "g": "Timeless River"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Jack Skellington",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Jack Skellington",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Sally",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Dr. Finkelstein",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Zero",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "The Mayor",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Lock",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Shock",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Barrel",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Santa Claus",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Bathtub",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Reindeer",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Oogie Boogie",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "The Experiment",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Maleficent",
              "how": "Obtained during the story.",
              "g": "Halloween Town"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Captain Jack Sparrow",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Will Turner",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Elizabeth Swann",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Captain Barbossa",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Undead Pirate A",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Undead Pirate B",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Undead Pirate C",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Pete",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Luxord",
              "how": "Obtained during the story.",
              "g": "Port Royal"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "Space Paranoids"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Space Paranoids"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Space Paranoids"
            },
            {
              "name": "Tron",
              "how": "Obtained during the story.",
              "g": "Space Paranoids"
            },
            {
              "name": "Sark",
              "how": "Obtained during the story.",
              "g": "Space Paranoids"
            },
            {
              "name": "MCP",
              "how": "Obtained during the story.",
              "g": "Space Paranoids"
            },
            {
              "name": "Hostile Program",
              "how": "Obtained during the story.",
              "g": "Space Paranoids"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story.",
              "g": "The World That Never Was"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "The World That Never Was"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "The World That Never Was"
            },
            {
              "name": "Xemnas",
              "how": "Obtained during the story.",
              "g": "The World That Never Was"
            },
            {
              "name": "Xigbar",
              "how": "Obtained during the story.",
              "g": "The World That Never Was"
            },
            {
              "name": "Saix",
              "how": "Obtained during the story.",
              "g": "The World That Never Was"
            },
            {
              "name": "Luxord",
              "how": "Obtained during the story.",
              "g": "The World That Never Was"
            },
            {
              "name": "Roxas",
              "how": "Obtained during the story.",
              "g": "The World That Never Was"
            },
            {
              "name": "King Mickey",
              "how": "Obtained during the story.",
              "g": "The World That Never Was"
            },
            {
              "name": "Ansem the Wise",
              "how": "Obtained during the story.",
              "g": "The World That Never Was"
            }
          ]
        },
        {
          "id": "enemies",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "where"
            }
          ],
          "items": [
            {
              "name": "Shadow",
              "where": "Twilight Town",
              "g": "Heartless"
            },
            {
              "name": "Soldier",
              "where": "Twilight Town",
              "g": "Heartless"
            },
            {
              "name": "Large Body",
              "where": "Beast's Castle",
              "g": "Heartless"
            },
            {
              "name": "Silver Rock",
              "where": "Agrabah",
              "g": "Heartless"
            },
            {
              "name": "Emerald Blues",
              "where": "Halloween Town",
              "g": "Heartless"
            },
            {
              "name": "Crimson Jazz",
              "where": "Hollow Bastion",
              "g": "Heartless"
            },
            {
              "name": "Air Pirate",
              "where": "Port Royal",
              "g": "Heartless"
            },
            {
              "name": "Trick Ghost",
              "where": "Olympus Coliseum",
              "g": "Heartless"
            },
            {
              "name": "Rabid Dog",
              "where": "Olympus Coliseum",
              "g": "Heartless"
            },
            {
              "name": "Hook Bat",
              "where": "Beast's Castle",
              "g": "Heartless"
            },
            {
              "name": "Bookmaster",
              "where": "Hollow Bastion",
              "g": "Heartless"
            },
            {
              "name": "Minute Bomb",
              "where": "Disney Castle",
              "g": "Heartless"
            },
            {
              "name": "Hammer Frame",
              "where": "Timeless River",
              "g": "Heartless"
            },
            {
              "name": "Bulky Vendor",
              "where": "Various: See Below",
              "g": "Heartless"
            },
            {
              "name": "Fortuneteller",
              "where": "Agrabah",
              "g": "Heartless"
            },
            {
              "name": "Cannon Gun",
              "where": "Port Royal",
              "g": "Heartless"
            },
            {
              "name": "Rapid Thruster",
              "where": "The Land of Dragons",
              "g": "Heartless"
            },
            {
              "name": "Driller Mole",
              "where": "Halloween Town",
              "g": "Heartless"
            },
            {
              "name": "Lance Soldier",
              "where": "Beast's Castle",
              "g": "Heartless"
            },
            {
              "name": "Morning Star",
              "where": "Hollow Bastion",
              "g": "Heartless"
            },
            {
              "name": "Fiery Globe",
              "where": "Agrabah",
              "g": "Heartless"
            },
            {
              "name": "Icy Cube",
              "where": "Agrabah",
              "g": "Heartless"
            },
            {
              "name": "Fat Bandit",
              "where": "Agrabah",
              "g": "Heartless"
            },
            {
              "name": "Luna Bandit",
              "where": "Agrabah",
              "g": "Heartless"
            },
            {
              "name": "Gargoyle Knight",
              "where": "Beast's Castle",
              "g": "Heartless"
            },
            {
              "name": "Gargoyle Warrior",
              "where": "Beast's Castle",
              "g": "Heartless"
            },
            {
              "name": "Wight Knight",
              "where": "Halloween Town",
              "g": "Heartless"
            },
            {
              "name": "Graveyard",
              "where": "Halloween Town",
              "g": "Heartless"
            },
            {
              "name": "Toy Soldier",
              "where": "Halloween Town",
              "g": "Heartless"
            },
            {
              "name": "Aeroplane",
              "where": "Timeless River",
              "g": "Heartless"
            },
            {
              "name": "Hot Rod",
              "where": "Timeless River",
              "g": "Heartless"
            },
            {
              "name": "Assault Rider",
              "where": "The Land of Dragons",
              "g": "Heartless"
            },
            {
              "name": "Nightwalker",
              "where": "The Land of Dragons",
              "g": "Heartless"
            },
            {
              "name": "Bolt Tower",
              "where": "The Land of Dragons",
              "g": "Heartless"
            },
            {
              "name": "Magnum Loader",
              "where": "Hollow Bastion",
              "g": "Heartless"
            },
            {
              "name": "Strafer",
              "where": "Space Paranoids",
              "g": "Heartless"
            },
            {
              "name": "Devastator",
              "where": "Space Paranoids",
              "g": "Heartless"
            },
            {
              "name": "Living Bone",
              "where": "Pride Lands",
              "g": "Heartless"
            },
            {
              "name": "Shaman",
              "where": "Pride Lands",
              "g": "Heartless"
            },
            {
              "name": "Aerial Knocker",
              "where": "Pride Lands",
              "g": "Heartless"
            },
            {
              "name": "Tornado Step",
              "where": "Olympus Coliseum",
              "g": "Heartless"
            },
            {
              "name": "Crescendo",
              "where": "Olympus Coliseum",
              "g": "Heartless"
            },
            {
              "name": "Creeper Plant",
              "where": "Olympus Coliseum",
              "g": "Heartless"
            },
            {
              "name": "Armored Knight",
              "where": "Hollow Bastion",
              "g": "Heartless"
            },
            {
              "name": "Surveillance Robot",
              "where": "Hollow Bastion",
              "g": "Heartless"
            },
            {
              "name": "Neoshadow",
              "where": "The Land of Dragons",
              "g": "Heartless"
            },
            {
              "name": "Spring Metal",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Aerial Viking",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Magic Phantom",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Beffudler",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Runemaster",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Iron Hammer",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Mad Ride",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Camo Cannon",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Reckless",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Lance Warrior",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Necromancer",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Aerial Champ",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Volcanic Lord",
              "where": "Agrabah",
              "g": "Heartless"
            },
            {
              "name": "Blizzard Lord",
              "where": "Agrabah",
              "g": "Heartless"
            },
            {
              "name": "Thresholder",
              "where": "Beast's Castle",
              "g": "Heartless"
            },
            {
              "name": "Possessor",
              "where": "Beast's Castle",
              "g": "Heartless"
            },
            {
              "name": "Shadow Stalker",
              "where": "Beast's Castle",
              "g": "Heartless"
            },
            {
              "name": "Dark Thorn",
              "where": "Beast's Castle",
              "g": "Heartless"
            },
            {
              "name": "Illuminator",
              "where": "Port Royal",
              "g": "Heartless"
            },
            {
              "name": "Grim Reaper",
              "where": "Port Royal",
              "g": "Heartless"
            },
            {
              "name": "Groundshaker",
              "where": "Pride Lands",
              "g": "Heartless"
            },
            {
              "name": "Prison Keeper",
              "where": "Halloween Town",
              "g": "Heartless"
            },
            {
              "name": "Storm Rider",
              "where": "The Land of Dragons",
              "g": "Heartless"
            },
            {
              "name": "No. 1",
              "where": "The World That Never Was",
              "g": "Heartless"
            },
            {
              "name": "No. 2",
              "where": "Halloween Town",
              "g": "Heartless"
            },
            {
              "name": "No. 3",
              "where": "Beast's Castle",
              "g": "Heartless"
            },
            {
              "name": "No. 4",
              "where": "The Land of Dragons",
              "g": "Heartless"
            },
            {
              "name": "No. 5",
              "where": "Agrabah",
              "g": "Heartless"
            },
            {
              "name": "No. 6",
              "where": "Olympus Coliseum",
              "g": "Heartless"
            },
            {
              "name": "No. 7",
              "where": "Twilight Town",
              "g": "Heartless"
            },
            {
              "name": "No. 8",
              "where": "Twilight Town",
              "g": "Heartless"
            },
            {
              "name": "No. 9",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "No. 10",
              "where": "Port Royal",
              "g": "Heartless"
            },
            {
              "name": "No. 11",
              "where": "Timeless River",
              "g": "Heartless"
            },
            {
              "name": "No. 12",
              "where": "Twilight Town",
              "g": "Heartless"
            },
            {
              "name": "No. 13",
              "where": "Radiant Garden",
              "g": "Heartless"
            },
            {
              "name": "Dusk",
              "where": "Twilight Town",
              "g": "Nobodies"
            },
            {
              "name": "Creeper",
              "where": "Twilight Town",
              "g": "Nobodies"
            },
            {
              "name": "Dragoon",
              "where": "Beast's Castle",
              "g": "Nobodies"
            },
            {
              "name": "Assassin",
              "where": "Twilight Town",
              "g": "Nobodies"
            },
            {
              "name": "Samurai",
              "where": "Hollow Bastion",
              "g": "Nobodies"
            },
            {
              "name": "Sniper",
              "where": "The Land of Dragons",
              "g": "Nobodies"
            },
            {
              "name": "Dancer",
              "where": "Hollow Bastion",
              "g": "Nobodies"
            },
            {
              "name": "Berserker",
              "where": "Twilight Town",
              "g": "Nobodies"
            },
            {
              "name": "Gambler",
              "where": "Port Royal",
              "g": "Nobodies"
            },
            {
              "name": "Sorcerer",
              "where": "The World That Never Was",
              "g": "Nobodies"
            },
            {
              "name": "Twilight Thorn",
              "where": "Twilight Town",
              "g": "Nobodies"
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
              "k": "area"
            },
            {
              "k": "where"
            }
          ],
          "items": [
            {
              "name": "Potion",
              "area": "Old Mansion",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Shard",
              "area": "Old Mansion",
              "g": "Twilight Town"
            },
            {
              "name": "Potion",
              "area": "The Woods",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Shard",
              "area": "The Woods",
              "g": "Twilight Town"
            },
            {
              "name": "Hi-Potion",
              "area": "The Woods",
              "g": "Twilight Town"
            },
            {
              "name": "Hi-Potion",
              "area": "Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "AP Boost",
              "area": "Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "Tent",
              "area": "Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Shard",
              "area": "Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "Potion",
              "area": "Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Shard",
              "area": "Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "Potion",
              "area": "Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "Tent",
              "area": "Central Station",
              "g": "Twilight Town"
            },
            {
              "name": "Hi-Potion",
              "area": "Central Station",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Shard",
              "area": "Central Station",
              "g": "Twilight Town"
            },
            {
              "name": "Potion",
              "area": "Mysterious Tower",
              "g": "Twilight Town"
            },
            {
              "name": "Hi-Potion",
              "area": "Mysterious Tower",
              "g": "Twilight Town"
            },
            {
              "name": "Ether",
              "area": "Mysterious Tower",
              "g": "Twilight Town"
            },
            {
              "name": "Ether",
              "area": "Entryway",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Shard",
              "area": "Entryway",
              "g": "Twilight Town"
            },
            {
              "name": "Tower Map",
              "area": "Sorcerer's Loft",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Stone",
              "area": "Wardrobe",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Gem",
              "area": "Underground Concourse",
              "g": "Twilight Town"
            },
            {
              "name": "Orichalcum",
              "area": "Underground Concourse",
              "g": "Twilight Town"
            },
            {
              "name": "AP Boost",
              "area": "Underground Concourse",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Crystal",
              "area": "Underground Concourse",
              "g": "Twilight Town"
            },
            {
              "name": "Orichalcum",
              "area": "Tunnelway",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Crystal",
              "area": "Tunnelway",
              "g": "Twilight Town"
            },
            {
              "name": "Orichalcum+",
              "area": "Sunset Terrace",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Shard",
              "area": "Sunset Terrace",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Crystal",
              "area": "Sunset Terrace",
              "g": "Twilight Town"
            },
            {
              "name": "AP Boost",
              "area": "Sunset Terrace",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Crystal",
              "area": "Mansion: Foyer",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Stone",
              "area": "Mansion: Foyer",
              "g": "Twilight Town"
            },
            {
              "name": "Serenity Crystal",
              "area": "Mansion: Foyer",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Crystal",
              "area": "Mansion: Dining Room",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Stone",
              "area": "Mansion: Dining Room",
              "g": "Twilight Town"
            },
            {
              "name": "Orichalcum",
              "area": "Mansion: Library",
              "g": "Twilight Town"
            },
            {
              "name": "Ultimate Recipe",
              "area": "Mansion: Basement Corridor",
              "g": "Twilight Town"
            },
            {
              "name": "Drive Recovery",
              "area": "Borough",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Borough",
              "g": "Hollow Bastion"
            },
            {
              "name": "Hi-Potion",
              "area": "Borough",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mythril Shard",
              "area": "Borough",
              "g": "Hollow Bastion"
            },
            {
              "name": "Dark Shard",
              "area": "Borough",
              "g": "Hollow Bastion"
            },
            {
              "name": "Castle Perimeter Map",
              "area": "Postern",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mythril Gem",
              "area": "Postern",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Postern",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mythril Stone",
              "area": "Corridors",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mythril Crystal",
              "area": "Corridors",
              "g": "Hollow Bastion"
            },
            {
              "name": "Dark Crystal",
              "area": "Corridors",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Corridors",
              "g": "Hollow Bastion"
            },
            {
              "name": "Skill Recipe",
              "area": "Ansem's Study",
              "g": "Hollow Bastion"
            },
            {
              "name": "Ukulele Charm",
              "area": "Ansem's Study",
              "g": "Hollow Bastion"
            },
            {
              "name": "Moon Recipe",
              "area": "Restoration Site",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Restoration Site",
              "g": "Hollow Bastion"
            },
            {
              "name": "Torn Pages",
              "area": "Crystal Fissure",
              "g": "Hollow Bastion"
            },
            {
              "name": "The Great Maw Map",
              "area": "Crystal Fissure",
              "g": "Hollow Bastion"
            },
            {
              "name": "Energy Crystal",
              "area": "Crystal Fissure",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Crystal Fissure",
              "g": "Hollow Bastion"
            },
            {
              "name": "Gull Wing",
              "area": "Postern",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cosmic Chain",
              "area": "Heartless Manufactory",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Cavern of Remembrance: Depths",
              "g": "Hollow Bastion"
            },
            {
              "name": "Power Crystal",
              "area": "Cavern of Remembrance: Depths",
              "g": "Hollow Bastion"
            },
            {
              "name": "Frost Crystal",
              "area": "Cavern of Remembrance: Depths",
              "g": "Hollow Bastion"
            },
            {
              "name": "Manifest Illusion",
              "area": "Cavern of Remembrance: Depths",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Cavern of Remembrance: Depths",
              "g": "Hollow Bastion"
            },
            {
              "name": "Remembrance Gem",
              "area": "Cavern of Remembrance: Depths",
              "g": "Hollow Bastion"
            },
            {
              "name": "Serenity Gem",
              "area": "Cavern of Remembrance: Mining Area",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Cavern of Remembrance: Mining Area",
              "g": "Hollow Bastion"
            },
            {
              "name": "Serenity Crystal",
              "area": "Cavern of Remembrance: Mining Area",
              "g": "Hollow Bastion"
            },
            {
              "name": "Manifest Illusion",
              "area": "Cavern of Remembrance: Mining Area",
              "g": "Hollow Bastion"
            },
            {
              "name": "Serenity Gem",
              "area": "Cavern of Remembrance: Mineshaft",
              "g": "Hollow Bastion"
            },
            {
              "name": "Dark Remembrance Map",
              "area": "Cavern of Remembrance: Mining Area",
              "g": "Hollow Bastion"
            },
            {
              "name": "Serenity Crystal",
              "area": "Cavern of Remembrance: Engine Chamber",
              "g": "Hollow Bastion"
            },
            {
              "name": "Remembrance Crystal",
              "area": "Cavern of Remembrance: Engine Chamber",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Cavern of Remembrance: Engine Chamber",
              "g": "Hollow Bastion"
            },
            {
              "name": "Manifest Illusion",
              "area": "Cavern of Remembrance: Engine Chamber",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Cavern of Remembrance: Mineshaft",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Cavern of Remembrance: Mineshaft",
              "g": "Hollow Bastion"
            },
            {
              "name": "Depths of Remembrance Map",
              "area": "Cavern of Remembrance: Mineshaft",
              "g": "Hollow Bastion"
            },
            {
              "name": "Power Boost",
              "area": "Cavern of Remembrance: Mineshaft",
              "g": "Hollow Bastion"
            },
            {
              "name": "Magic Boost",
              "area": "Cavern of Remembrance: Mineshaft",
              "g": "Hollow Bastion"
            },
            {
              "name": "Garden of Assemblage Map",
              "area": "Garden of Assemblage",
              "g": "Hollow Bastion"
            },
            {
              "name": "Lost Illusion",
              "area": "Garden of Assemblage",
              "g": "Hollow Bastion"
            },
            {
              "name": "Proof of Nonexistence",
              "area": "Garden of Assemblage",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Boost",
              "area": "Courtyard",
              "g": "Beast's Castle"
            },
            {
              "name": "Hi-Potion",
              "area": "Courtyard",
              "g": "Beast's Castle"
            },
            {
              "name": "Mythril Shard",
              "area": "Courtyard",
              "g": "Beast's Castle"
            },
            {
              "name": "Castle Map",
              "area": "Belle's Room",
              "g": "Beast's Castle"
            },
            {
              "name": "Mega-Recipe",
              "area": "Belle's Room",
              "g": "Beast's Castle"
            },
            {
              "name": "Mythril Shard",
              "area": "The East Wing",
              "g": "Beast's Castle"
            },
            {
              "name": "Tent",
              "area": "The East Wing",
              "g": "Beast's Castle"
            },
            {
              "name": "Hi-Potion",
              "area": "The West Hall",
              "g": "Beast's Castle"
            },
            {
              "name": "Mythril Shard",
              "area": "The West Hall",
              "g": "Beast's Castle"
            },
            {
              "name": "Power Shard",
              "area": "The West Hall",
              "g": "Beast's Castle"
            },
            {
              "name": "Mythril Shard",
              "area": "The West Hall",
              "g": "Beast's Castle"
            },
            {
              "name": "AP Boost",
              "area": "The West Hall",
              "g": "Beast's Castle"
            },
            {
              "name": "Bright Stone",
              "area": "The West Hall",
              "g": "Beast's Castle"
            },
            {
              "name": "Basement Map",
              "area": "Dungeon",
              "g": "Beast's Castle"
            },
            {
              "name": "AP Boost",
              "area": "Dungeon",
              "g": "Beast's Castle"
            },
            {
              "name": "Mythril Shard",
              "area": "Secret Passage",
              "g": "Beast's Castle"
            },
            {
              "name": "Hi-Potion",
              "area": "Secret Passage",
              "g": "Beast's Castle"
            },
            {
              "name": "Lucid Shard",
              "area": "Secret Passage",
              "g": "Beast's Castle"
            },
            {
              "name": "Mythril Shard",
              "area": "The West Wing",
              "g": "Beast's Castle"
            },
            {
              "name": "Tent",
              "area": "The West Wing",
              "g": "Beast's Castle"
            },
            {
              "name": "Blazing Shard",
              "area": "The Beast's Room",
              "g": "Beast's Castle"
            },
            {
              "name": "Power Boost",
              "area": "Underworld Entrance",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Mythril Shard",
              "area": "Cave of the Dead: Passage",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Mythril Stone",
              "area": "Cave of the Dead: Passage",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Ether",
              "area": "Cave of the Dead: Passage",
              "g": "Olympus Coliseum"
            },
            {
              "name": "AP Boost",
              "area": "Cave of the Dead: Passage",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Hi-Potion",
              "area": "Cave of the Dead: Passage",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Underworld Map",
              "area": "Cave of the Dead: Inner Chamber",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Mythril Shard",
              "area": "Cave of the Dead: Inner Chamber",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Lucid Shard",
              "area": "Underworld Caverns: Entrance",
              "g": "Olympus Coliseum"
            },
            {
              "name": "AP Boost",
              "area": "Underworld Caverns: Entrance",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Mythril Shard",
              "area": "Underworld Caverns: Entrance",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Bright Shard",
              "area": "Underworld Caverns: The Lost Road",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Ether",
              "area": "Underworld Caverns: The Lost Road",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Mythril Shard",
              "area": "Underworld Caverns: The Lost Road",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Mythril Stone",
              "area": "Underworld Caverns: The Lost Road",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Lucid Stone",
              "area": "Underworld Caverns: Atrium",
              "g": "Olympus Coliseum"
            },
            {
              "name": "AP Boost",
              "area": "Underworld Caverns: Atrium",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Caverns Map",
              "area": "Underworld Caverns: The Lock",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Mythril Shard",
              "area": "Underworld Caverns: The Lock",
              "g": "Olympus Coliseum"
            },
            {
              "name": "AP Boost",
              "area": "Underworld Caverns: The Lock",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Dark Shard",
              "area": "Agrabah",
              "g": "Agrabah"
            },
            {
              "name": "Mythril Shard",
              "area": "Agrabah",
              "g": "Agrabah"
            },
            {
              "name": "Hi-Potion",
              "area": "Agrabah",
              "g": "Agrabah"
            },
            {
              "name": "AP Boost",
              "area": "Agrabah",
              "g": "Agrabah"
            },
            {
              "name": "Mythril Stone",
              "area": "Agrabah",
              "g": "Agrabah"
            },
            {
              "name": "Mythril Shard",
              "area": "Agrabah",
              "g": "Agrabah"
            },
            {
              "name": "Serenity Shard",
              "area": "Agrabah",
              "g": "Agrabah"
            },
            {
              "name": "Mythril Gem",
              "area": "Bazaar",
              "g": "Agrabah"
            },
            {
              "name": "Power Shard",
              "area": "Bazaar",
              "g": "Agrabah"
            },
            {
              "name": "Hi-Potion",
              "area": "Bazaar",
              "g": "Agrabah"
            },
            {
              "name": "AP Boost",
              "area": "Bazaar",
              "g": "Agrabah"
            },
            {
              "name": "Mythril Shard",
              "area": "Bazaar",
              "g": "Agrabah"
            },
            {
              "name": "Skill Ring",
              "area": "Palace Walls",
              "g": "Agrabah"
            },
            {
              "name": "Mythril Stone",
              "area": "Palace Walls",
              "g": "Agrabah"
            },
            {
              "name": "Power Stone",
              "area": "The Cave of Wonders: Entrance",
              "g": "Agrabah"
            },
            {
              "name": "Mythril Shard",
              "area": "The Cave of Wonders: Entrance",
              "g": "Agrabah"
            },
            {
              "name": "Mythril Stone",
              "area": "The Cave of Wonders: Valley of Stone",
              "g": "Agrabah"
            },
            {
              "name": "AP Boost",
              "area": "The Cave of Wonders: Valley of Stone",
              "g": "Agrabah"
            },
            {
              "name": "Mythril Shard",
              "area": "The Cave of Wonders: Valley of Stone",
              "g": "Agrabah"
            },
            {
              "name": "Hi-Potion",
              "area": "The Cave of Wonders: Valley of Stone",
              "g": "Agrabah"
            },
            {
              "name": "Cave of Wonders Map",
              "area": "The Cave of Wonders: Chasm of Challenges",
              "g": "Agrabah"
            },
            {
              "name": "AP Boost",
              "area": "The Cave of Wonders: Chasm of Challenges",
              "g": "Agrabah"
            },
            {
              "name": "AP Boost",
              "area": "The Cave of Wonders: Treasure Room",
              "g": "Agrabah"
            },
            {
              "name": "Serenity Gem",
              "area": "The Cave of Wonders: Treasure Room",
              "g": "Agrabah"
            },
            {
              "name": "Torn Pages",
              "area": "Ruined Chamber",
              "g": "Agrabah"
            },
            {
              "name": "Ruins Map",
              "area": "Ruined Chamber",
              "g": "Agrabah"
            },
            {
              "name": "Dark Shard",
              "area": "Bamboo Grove",
              "g": "The Land of Dragons"
            },
            {
              "name": "Ether",
              "area": "Bamboo Grove",
              "g": "The Land of Dragons"
            },
            {
              "name": "Mythril Shard",
              "area": "Bamboo Grove",
              "g": "The Land of Dragons"
            },
            {
              "name": "Hi-Potion",
              "area": "Checkpoint",
              "g": "The Land of Dragons"
            },
            {
              "name": "Mythril Shard",
              "area": "Checkpoint",
              "g": "The Land of Dragons"
            },
            {
              "name": "Lightning Shard",
              "area": "Mountain Trail",
              "g": "The Land of Dragons"
            },
            {
              "name": "Recovery Recipe",
              "area": "Mountain Trail",
              "g": "The Land of Dragons"
            },
            {
              "name": "Ether",
              "area": "Mountain Trail",
              "g": "The Land of Dragons"
            },
            {
              "name": "Mythril Shard",
              "area": "Mountain Trail",
              "g": "The Land of Dragons"
            },
            {
              "name": "AP Boost",
              "area": "Village Cave",
              "g": "The Land of Dragons"
            },
            {
              "name": "Dark Shard",
              "area": "Village Cave",
              "g": "The Land of Dragons"
            },
            {
              "name": "Frost Shard",
              "area": "Ridge",
              "g": "The Land of Dragons"
            },
            {
              "name": "AP Boost",
              "area": "Ridge",
              "g": "The Land of Dragons"
            },
            {
              "name": "Torn Pages",
              "area": "Throne Room",
              "g": "The Land of Dragons"
            },
            {
              "name": "Palace Map",
              "area": "Throne Room",
              "g": "The Land of Dragons"
            },
            {
              "name": "AP Boost",
              "area": "Throne Room",
              "g": "The Land of Dragons"
            },
            {
              "name": "Queen Recipe",
              "area": "Throne Room",
              "g": "The Land of Dragons"
            },
            {
              "name": "AP Boost",
              "area": "Throne Room",
              "g": "The Land of Dragons"
            },
            {
              "name": "Ogre Shield",
              "area": "Throne Room",
              "g": "The Land of Dragons"
            },
            {
              "name": "Mythril Crystal",
              "area": "Throne Room",
              "g": "The Land of Dragons"
            },
            {
              "name": "Orichalcum",
              "area": "Throne Room",
              "g": "The Land of Dragons"
            },
            {
              "name": "100 Acre Wood Map",
              "area": "Pooh Bear's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "AP Boost",
              "area": "Pooh Bear's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Mythril Stone",
              "area": "Pooh Bear's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Defense Boost",
              "area": "Piglet's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "AP Boost",
              "area": "Piglet's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Mythril Gem",
              "area": "Piglet's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Draw Ring",
              "area": "Rabbit's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Mythril Crystal",
              "area": "Rabbit's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "AP Boost",
              "area": "Rabbit's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Magic Boost",
              "area": "Kanga's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "AP Boost",
              "area": "Kanga's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Orichalcum",
              "area": "Kanga's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Mythril Gem",
              "area": "The Spooky Cave",
              "g": "100 Acre Wood"
            },
            {
              "name": "AP Boost",
              "area": "The Spooky Cave",
              "g": "100 Acre Wood"
            },
            {
              "name": "Orichalcum",
              "area": "The Spooky Cave",
              "g": "100 Acre Wood"
            },
            {
              "name": "Guard Recipe",
              "area": "The Spooky Cave",
              "g": "100 Acre Wood"
            },
            {
              "name": "Mythril Crystal",
              "area": "The Spooky Cave",
              "g": "100 Acre Wood"
            },
            {
              "name": "AP Boost",
              "area": "The Spooky Cave",
              "g": "100 Acre Wood"
            },
            {
              "name": "Cosmic Ring",
              "area": "Starry Hill",
              "g": "100 Acre Wood"
            },
            {
              "name": "Style Recipe",
              "area": "Starry Hill",
              "g": "100 Acre Wood"
            },
            {
              "name": "Savannah Map",
              "area": "Gorge",
              "g": "Pride Lands"
            },
            {
              "name": "Dark Gem",
              "area": "Gorge",
              "g": "Pride Lands"
            },
            {
              "name": "Mythril Stone",
              "area": "Gorge",
              "g": "Pride Lands"
            },
            {
              "name": "Frost Gem",
              "area": "Elephant Graveyard",
              "g": "Pride Lands"
            },
            {
              "name": "Mythril Stone",
              "area": "Elephant Graveyard",
              "g": "Pride Lands"
            },
            {
              "name": "Bright Stone",
              "area": "Elephant Graveyard",
              "g": "Pride Lands"
            },
            {
              "name": "AP Boost",
              "area": "Elephant Graveyard",
              "g": "Pride Lands"
            },
            {
              "name": "Mythril Shard",
              "area": "Elephant Graveyard",
              "g": "Pride Lands"
            },
            {
              "name": "Pride Rock Map",
              "area": "Pride Rock",
              "g": "Pride Lands"
            },
            {
              "name": "Mythril Stone",
              "area": "Pride Rock",
              "g": "Pride Lands"
            },
            {
              "name": "Serenity Crystal",
              "area": "Pride Rock",
              "g": "Pride Lands"
            },
            {
              "name": "Energy Stone",
              "area": "Wildebeest Valley",
              "g": "Pride Lands"
            },
            {
              "name": "AP Boost",
              "area": "Wildebeest Valley",
              "g": "Pride Lands"
            },
            {
              "name": "Mythril Gem",
              "area": "Wildebeest Valley",
              "g": "Pride Lands"
            },
            {
              "name": "Mythril Stone",
              "area": "Wildebeest Valley",
              "g": "Pride Lands"
            },
            {
              "name": "Lucid Gem",
              "area": "Wildebeest Valley",
              "g": "Pride Lands"
            },
            {
              "name": "Mythril Shard",
              "area": "Wastelands",
              "g": "Pride Lands"
            },
            {
              "name": "Serenity Gem",
              "area": "Wastelands",
              "g": "Pride Lands"
            },
            {
              "name": "Mythril Stone",
              "area": "Wastelands",
              "g": "Pride Lands"
            },
            {
              "name": "Serenity Gem",
              "area": "Jungle",
              "g": "Pride Lands"
            },
            {
              "name": "Mythril Stone",
              "area": "Jungle",
              "g": "Pride Lands"
            },
            {
              "name": "Serenity Crystal",
              "area": "Jungle",
              "g": "Pride Lands"
            },
            {
              "name": "Oasis Map",
              "area": "Oasis",
              "g": "Pride Lands"
            },
            {
              "name": "Torn Pages",
              "area": "Oasis",
              "g": "Pride Lands"
            },
            {
              "name": "AP Boost",
              "area": "Oasis",
              "g": "Pride Lands"
            },
            {
              "name": "Mythril Shard",
              "area": "Courtyard",
              "g": "Disney Castle"
            },
            {
              "name": "Star Recipe",
              "area": "Courtyard",
              "g": "Disney Castle"
            },
            {
              "name": "AP Boost",
              "area": "Courtyard",
              "g": "Disney Castle"
            },
            {
              "name": "Mythril Stone",
              "area": "Courtyard",
              "g": "Disney Castle"
            },
            {
              "name": "Blazing Stone",
              "area": "Courtyard",
              "g": "Disney Castle"
            },
            {
              "name": "Blazing Shard",
              "area": "Courtyard",
              "g": "Disney Castle"
            },
            {
              "name": "Mythril Shard",
              "area": "Courtyard",
              "g": "Disney Castle"
            },
            {
              "name": "Torn Pages",
              "area": "Library",
              "g": "Disney Castle"
            },
            {
              "name": "Cornerstone Hill Map",
              "area": "Cornerstone Hill",
              "g": "Timeless River"
            },
            {
              "name": "Frost Shard",
              "area": "Cornerstone Hill",
              "g": "Timeless River"
            },
            {
              "name": "Mythril Shard",
              "area": "Pier",
              "g": "Timeless River"
            },
            {
              "name": "Hi-Potion",
              "area": "Pier",
              "g": "Timeless River"
            },
            {
              "name": "Mythril Stone",
              "area": "Waterway",
              "g": "Timeless River"
            },
            {
              "name": "AP Boost",
              "area": "Waterway",
              "g": "Timeless River"
            },
            {
              "name": "Frost Stone",
              "area": "Waterway",
              "g": "Timeless River"
            },
            {
              "name": "Mythril Shard",
              "area": "Graveyard",
              "g": "Halloween Town"
            },
            {
              "name": "Serenity Gem",
              "area": "Graveyard",
              "g": "Halloween Town"
            },
            {
              "name": "Halloween Town Map",
              "area": "Dr. Finkelstein's Lab",
              "g": "Halloween Town"
            },
            {
              "name": "Mythril Stone",
              "area": "Halloween Town Square",
              "g": "Halloween Town"
            },
            {
              "name": "Energy Shard",
              "area": "Halloween Town Square",
              "g": "Halloween Town"
            },
            {
              "name": "Lightning Shard",
              "area": "The Hinterlands",
              "g": "Halloween Town"
            },
            {
              "name": "Mythril Stone",
              "area": "The Hinterlands",
              "g": "Halloween Town"
            },
            {
              "name": "AP Boost",
              "area": "The Hinterlands",
              "g": "Halloween Town"
            },
            {
              "name": "Mega-Potion",
              "area": "Candy Cane Lane",
              "g": "Halloween Town"
            },
            {
              "name": "Mythril Gem",
              "area": "Candy Cane Lane",
              "g": "Halloween Town"
            },
            {
              "name": "Lightning Stone",
              "area": "Candy Cane Lane",
              "g": "Halloween Town"
            },
            {
              "name": "Mythril Stone",
              "area": "Candy Cane Lane",
              "g": "Halloween Town"
            },
            {
              "name": "Christmas Town Map",
              "area": "Santa's House",
              "g": "Halloween Town"
            },
            {
              "name": "AP Boost",
              "area": "Santa's House",
              "g": "Halloween Town"
            },
            {
              "name": "Naval Map",
              "area": "Rampart",
              "g": "Port Royal"
            },
            {
              "name": "Mythril Stone",
              "area": "Rampart",
              "g": "Port Royal"
            },
            {
              "name": "Dark Shard",
              "area": "Rampart",
              "g": "Port Royal"
            },
            {
              "name": "Dark Stone",
              "area": "Town",
              "g": "Port Royal"
            },
            {
              "name": "AP Boost",
              "area": "Town",
              "g": "Port Royal"
            },
            {
              "name": "Mythril Shard",
              "area": "Town",
              "g": "Port Royal"
            },
            {
              "name": "Mythril Gem",
              "area": "Town",
              "g": "Port Royal"
            },
            {
              "name": "Bright Shard",
              "area": "Isla de Muerta: Cave Mouth",
              "g": "Port Royal"
            },
            {
              "name": "Mythril Shard",
              "area": "Isla de Muerta: Cave Mouth",
              "g": "Port Royal"
            },
            {
              "name": "AP Boost",
              "area": "Isla de Muerta: Powder Store",
              "g": "Port Royal"
            },
            {
              "name": "AP Boost",
              "area": "Isla de Muerta: Powder Store",
              "g": "Port Royal"
            },
            {
              "name": "Mythril Shard",
              "area": "Isla de Muerta: Moonlight Nook",
              "g": "Port Royal"
            },
            {
              "name": "Serenity Gem",
              "area": "Isla de Muerta: Moonlight Nook",
              "g": "Port Royal"
            },
            {
              "name": "Power Stone",
              "area": "Isla de Muerta: Moonlight Nook",
              "g": "Port Royal"
            },
            {
              "name": "Feather Charm",
              "area": "Ship Graveyard: The Interceptor's Hold",
              "g": "Port Royal"
            },
            {
              "name": "AP Boost",
              "area": "Ship Graveyard: Seadrift Keep",
              "g": "Port Royal"
            },
            {
              "name": "Orichalcum",
              "area": "Ship Graveyard: Seadrift Keep",
              "g": "Port Royal"
            },
            {
              "name": "Meteor Staff",
              "area": "Ship Graveyard: Seadrift Keep",
              "g": "Port Royal"
            },
            {
              "name": "Serenity Gem",
              "area": "Ship Graveyard: Seadrift Row",
              "g": "Port Royal"
            },
            {
              "name": "King Recipe",
              "area": "Ship Graveyard: Seadrift Row",
              "g": "Port Royal"
            },
            {
              "name": "Mythril Crystal",
              "area": "Ship Graveyard: Seadrift Row",
              "g": "Port Royal"
            },
            {
              "name": "Pit Cell Area Map",
              "area": "Pit Cell",
              "g": "Space Paranoids"
            },
            {
              "name": "Mythril Crystal",
              "area": "Pit Cell",
              "g": "Space Paranoids"
            },
            {
              "name": "Dark Crystal",
              "area": "Canyon",
              "g": "Space Paranoids"
            },
            {
              "name": "Mythril Stone",
              "area": "Canyon",
              "g": "Space Paranoids"
            },
            {
              "name": "Mythril Gem",
              "area": "Canyon",
              "g": "Space Paranoids"
            },
            {
              "name": "Frost Crystal",
              "area": "Canyon",
              "g": "Space Paranoids"
            },
            {
              "name": "Power Crystal",
              "area": "I/O Tower: Hallway",
              "g": "Space Paranoids"
            },
            {
              "name": "AP Boost",
              "area": "I/O Tower: Hallway",
              "g": "Space Paranoids"
            },
            {
              "name": "I/O Tower Map",
              "area": "I/O Tower: Communications Room",
              "g": "Space Paranoids"
            },
            {
              "name": "Gaia Belt",
              "area": "I/O Tower: Communications Room",
              "g": "Space Paranoids"
            },
            {
              "name": "AP Boost",
              "area": "Central Computer Mesa",
              "g": "Space Paranoids"
            },
            {
              "name": "Orichalcum+",
              "area": "Central Computer Mesa",
              "g": "Space Paranoids"
            },
            {
              "name": "Cosmic Arts",
              "area": "Central Computer Mesa",
              "g": "Space Paranoids"
            },
            {
              "name": "Central Computer Core Map",
              "area": "Central Computer Mesa",
              "g": "Space Paranoids"
            },
            {
              "name": "Mythril Stone",
              "area": "Fragment Crossing",
              "g": "The World That Never Was"
            },
            {
              "name": "Mythril Crystal",
              "area": "Fragment Crossing",
              "g": "The World That Never Was"
            },
            {
              "name": "AP Boost",
              "area": "Fragment Crossing",
              "g": "The World That Never Was"
            },
            {
              "name": "Orichalcum",
              "area": "Fragment Crossing",
              "g": "The World That Never Was"
            },
            {
              "name": "Mythril Crystal",
              "area": "Memory's Skyscraper",
              "g": "The World That Never Was"
            },
            {
              "name": "AP Boost",
              "area": "Memory's Skyscraper",
              "g": "The World That Never Was"
            },
            {
              "name": "Mythril Stone",
              "area": "Memory's Skyscraper",
              "g": "The World That Never Was"
            },
            {
              "name": "Dark City Map",
              "area": "The Brink of Despair",
              "g": "The World That Never Was"
            },
            {
              "name": "Orichalcum+",
              "area": "The Brink of Despair",
              "g": "The World That Never Was"
            },
            {
              "name": "Mythril Gem",
              "area": "Nothing's Call",
              "g": "The World That Never Was"
            },
            {
              "name": "Orichalcum",
              "area": "Nothing's Call",
              "g": "The World That Never Was"
            },
            {
              "name": "Cosmic Belt",
              "area": "Twilight's View",
              "g": "The World That Never Was"
            },
            {
              "name": "Mythril Gem",
              "area": "Naught's Skyway",
              "g": "The World That Never Was"
            },
            {
              "name": "Orichalcum",
              "area": "Naught's Skyway",
              "g": "The World That Never Was"
            },
            {
              "name": "Mythril Crystal",
              "area": "Naught's Skyway",
              "g": "The World That Never Was"
            },
            {
              "name": "Mythril Stone",
              "area": "Ruin and Creation's Passage",
              "g": "The World That Never Was"
            },
            {
              "name": "AP Boost",
              "area": "Ruin and Creation's Passage",
              "g": "The World That Never Was"
            },
            {
              "name": "Mythril Crystal",
              "area": "Ruin and Creation's Passage",
              "g": "The World That Never Was"
            },
            {
              "name": "Orichalcum",
              "area": "Ruin and Creation's Passage",
              "g": "The World That Never Was"
            }
          ]
        }
      ]
    },
    {
      "id": "puzzles",
      "sections": [
        {
          "id": "puzzles",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "area"
            },
            {
              "k": "where"
            }
          ],
          "items": [
            {
              "name": "Daylight",
              "area": "Market Street: Station Heights",
              "g": "Twilight Town"
            },
            {
              "name": "Daylight",
              "area": "Market Street: Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "Frontier",
              "area": "Market Street: Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "Frontier",
              "area": "Station Plaza",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "Sunset Terrace",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "Sunset Terrace",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "Sunset Hill",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "Sunset Hill",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "The Old Mansion",
              "g": "Twilight Town"
            },
            {
              "name": "Daylight",
              "area": "Mansion: Foyer",
              "g": "Twilight Town"
            },
            {
              "name": "Daylight",
              "area": "Mansion: Foyer",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "Mansion: The White Room",
              "g": "Twilight Town"
            },
            {
              "name": "Daylight",
              "area": "Mansion: Computer Room (Data)",
              "g": "Twilight Town"
            },
            {
              "name": "Daylight",
              "area": "Mansion: Pod Room",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "The Tower",
              "g": "Twilight Town"
            },
            {
              "name": "Awakening",
              "area": "Tower: Wardrobe",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "Tower: Wardrobe",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "Tunnelway",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "Underground Concourse",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "Underground Concourse",
              "g": "Twilight Town"
            },
            {
              "name": "Sunset",
              "area": "Ansem's Study",
              "g": "Hollow Bastion"
            },
            {
              "name": "Daylight",
              "area": "Postern",
              "g": "Hollow Bastion"
            },
            {
              "name": "Frontier",
              "area": "Postern",
              "g": "Hollow Bastion"
            },
            {
              "name": "Duality",
              "area": "Bailey",
              "g": "Hollow Bastion"
            },
            {
              "name": "Awakening",
              "area": "Borough",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Borough",
              "g": "Hollow Bastion"
            },
            {
              "name": "Heart",
              "area": "Marketplace",
              "g": "Hollow Bastion"
            },
            {
              "name": "Awakening",
              "area": "Marketplace",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Corridors",
              "g": "Hollow Bastion"
            },
            {
              "name": "Daylight",
              "area": "Heartless Manufactory",
              "g": "Hollow Bastion"
            },
            {
              "name": "Awakening",
              "area": "Merlin's House",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Bailey",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Cavern of Remembrance: Depths",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Cavern of Remembrance: Depths",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Cavern of Remembrance: Mining Area",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Cavern of Remembrance: Mining Area",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Cavern of Remembrance: Mining Area",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Cavern of Remembrance: Mining Area",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Cavern of Remembrance: Mineshaft",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Cavern of Remembrance: Mineshaft",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Cavern of Remembrance: Mineshaft",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Cavern of Remembrance: Mineshaft",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Cavern of Remembrance: Mineshaft",
              "g": "Hollow Bastion"
            },
            {
              "name": "Sunset",
              "area": "Entrance Hall",
              "g": "Beast's Castle"
            },
            {
              "name": "Awakening",
              "area": "The Beast's Room",
              "g": "Beast's Castle"
            },
            {
              "name": "Daylight",
              "area": "The West Hall",
              "g": "Beast's Castle"
            },
            {
              "name": "Heart",
              "area": "The West Wing",
              "g": "Beast's Castle"
            },
            {
              "name": "Awakening",
              "area": "Undercroft",
              "g": "Beast's Castle"
            },
            {
              "name": "Awakening",
              "area": "Undercroft",
              "g": "Beast's Castle"
            },
            {
              "name": "Awakening",
              "area": "Secret Passage",
              "g": "Beast's Castle"
            },
            {
              "name": "Awakening",
              "area": "Secret Passage",
              "g": "Beast's Castle"
            },
            {
              "name": "Sunset",
              "area": "Bridge",
              "g": "Beast's Castle"
            },
            {
              "name": "Heart",
              "area": "Cave of the Dead: Entrance",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Heart",
              "area": "Underworld Caverns: Entrance",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Daylight",
              "area": "Underworld Caverns: Entrance",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Duality",
              "area": "The Lock",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Daylight",
              "area": "Cave of the Dead: Passage",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Daylight",
              "area": "Underworld Caverns: The Lost Road",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Daylight",
              "area": "Underworld Caverns: The Lost Road",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Duality",
              "area": "Underworld Caverns: The Lost Road",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Heart",
              "area": "Underworld Caverns: Atrium",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Duality",
              "area": "Agrabah",
              "g": "Agrabah"
            },
            {
              "name": "Frontier",
              "area": "Agrabah",
              "g": "Agrabah"
            },
            {
              "name": "Frontier",
              "area": "Bazaar",
              "g": "Agrabah"
            },
            {
              "name": "Sunset",
              "area": "Bazaar",
              "g": "Agrabah"
            },
            {
              "name": "Daylight",
              "area": "The Cave of Wonders: Entrance",
              "g": "Agrabah"
            },
            {
              "name": "Daylight",
              "area": "The Cave of Wonders: Treasure Room",
              "g": "Agrabah"
            },
            {
              "name": "Sunset",
              "area": "The Cave of Wonders: Treasure Room",
              "g": "Agrabah"
            },
            {
              "name": "Frontier",
              "area": "The Cave of Wonders: Valley of Stone",
              "g": "Agrabah"
            },
            {
              "name": "Daylight",
              "area": "The Cave of Wonders: Chasm of Challenges",
              "g": "Agrabah"
            },
            {
              "name": "Daylight",
              "area": "The Cave of Wonders: Chasm of Challenges",
              "g": "Agrabah"
            },
            {
              "name": "Daylight",
              "area": "The Cave of Wonders: Chasm of Challenges",
              "g": "Agrabah"
            },
            {
              "name": "Daylight",
              "area": "Sandswept Ruins",
              "g": "Agrabah"
            },
            {
              "name": "Daylight",
              "area": "Sandswept Ruins",
              "g": "Agrabah"
            },
            {
              "name": "Sunset",
              "area": "Sandswept Ruins",
              "g": "Agrabah"
            },
            {
              "name": "Heart",
              "area": "Encampment",
              "g": "The Land of Dragons"
            },
            {
              "name": "Sunset",
              "area": "Encampment",
              "g": "The Land of Dragons"
            },
            {
              "name": "Frontier",
              "area": "Mountain Trail",
              "g": "The Land of Dragons"
            },
            {
              "name": "Heart",
              "area": "Village",
              "g": "The Land of Dragons"
            },
            {
              "name": "Awakening",
              "area": "Village",
              "g": "The Land of Dragons"
            },
            {
              "name": "Daylight",
              "area": "Village",
              "g": "The Land of Dragons"
            },
            {
              "name": "Awakening",
              "area": "Ridge",
              "g": "The Land of Dragons"
            },
            {
              "name": "Awakening",
              "area": "Ridge",
              "g": "The Land of Dragons"
            },
            {
              "name": "Daylight",
              "area": "Throne Room",
              "g": "The Land of Dragons"
            },
            {
              "name": "Daylight",
              "area": "Throne Room",
              "g": "The Land of Dragons"
            },
            {
              "name": "Daylight",
              "area": "Starry Hill",
              "g": "100 Acre Wood"
            },
            {
              "name": "Daylight",
              "area": "Pooh Bear's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Daylight",
              "area": "Rabbit's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Daylight",
              "area": "Piglet's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Daylight",
              "area": "Kanga's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Daylight",
              "area": "The Spooky Cave",
              "g": "100 Acre Wood"
            },
            {
              "name": "Sunset",
              "area": "Pride Rock",
              "g": "Pride Lands"
            },
            {
              "name": "Daylight",
              "area": "The King's Den",
              "g": "Pride Lands"
            },
            {
              "name": "Daylight",
              "area": "Wildebeest Valley",
              "g": "Pride Lands"
            },
            {
              "name": "Daylight",
              "area": "Wildebeest Valley",
              "g": "Pride Lands"
            },
            {
              "name": "Daylight",
              "area": "Elephant Graveyard",
              "g": "Pride Lands"
            },
            {
              "name": "Daylight",
              "area": "Elephant Graveyard",
              "g": "Pride Lands"
            },
            {
              "name": "Daylight",
              "area": "Wastelands",
              "g": "Pride Lands"
            },
            {
              "name": "Daylight",
              "area": "Wastelands",
              "g": "Pride Lands"
            },
            {
              "name": "Daylight",
              "area": "Jungle",
              "g": "Pride Lands"
            },
            {
              "name": "Daylight",
              "area": "Oasis",
              "g": "Pride Lands"
            },
            {
              "name": "Frontier",
              "area": "Triton's Throne",
              "g": "Atlantica"
            },
            {
              "name": "Frontier",
              "area": "Triton's Throne",
              "g": "Atlantica"
            },
            {
              "name": "Duality",
              "area": "Undersea Courtyard",
              "g": "Atlantica"
            },
            {
              "name": "Daylight",
              "area": "Colonnade",
              "g": "Disney Castle"
            },
            {
              "name": "Heart",
              "area": "Courtyard",
              "g": "Disney Castle"
            },
            {
              "name": "Heart",
              "area": "Courtyard",
              "g": "Disney Castle"
            },
            {
              "name": "Duality",
              "area": "Courtyard",
              "g": "Disney Castle"
            },
            {
              "name": "Duality",
              "area": "Gummi Hangar",
              "g": "Disney Castle"
            },
            {
              "name": "Duality",
              "area": "Pier",
              "g": "Timeless River"
            },
            {
              "name": "Frontier",
              "area": "Pier",
              "g": "Timeless River"
            },
            {
              "name": "Heart",
              "area": "Waterway",
              "g": "Timeless River"
            },
            {
              "name": "Duality",
              "area": "Halloween Town Square",
              "g": "Halloween Town"
            },
            {
              "name": "Sunset",
              "area": "Curly Hill",
              "g": "Halloween Town"
            },
            {
              "name": "Duality",
              "area": "The Hinterlands",
              "g": "Halloween Town"
            },
            {
              "name": "Daylight",
              "area": "Yuletide Hill",
              "g": "Halloween Town"
            },
            {
              "name": "Daylight",
              "area": "Santa's House",
              "g": "Halloween Town"
            },
            {
              "name": "Frontier",
              "area": "Santa's House",
              "g": "Halloween Town"
            },
            {
              "name": "Daylight",
              "area": "Toy Factory: Shipping and Receiving",
              "g": "Halloween Town"
            },
            {
              "name": "Sunset",
              "area": "Toy Factory: Shipping and Receiving",
              "g": "Halloween Town"
            },
            {
              "name": "Heart",
              "area": "Rampart",
              "g": "Port Royal"
            },
            {
              "name": "Sunset",
              "area": "Harbor",
              "g": "Port Royal"
            },
            {
              "name": "Duality",
              "area": "Town",
              "g": "Port Royal"
            },
            {
              "name": "Frontier",
              "area": "Town",
              "g": "Port Royal"
            },
            {
              "name": "Daylight",
              "area": "The Black Pearl",
              "g": "Port Royal"
            },
            {
              "name": "Daylight",
              "area": "The Black Pearl",
              "g": "Port Royal"
            },
            {
              "name": "Daylight",
              "area": "The Black Pearl: Captain's Stateroom",
              "g": "Port Royal"
            },
            {
              "name": "Sunset",
              "area": "Ship Graveyard: The Interceptor's Hold",
              "g": "Port Royal"
            },
            {
              "name": "Heart",
              "area": "Isla de Muerta: Powder Storage",
              "g": "Port Royal"
            },
            {
              "name": "Duality",
              "area": "Isla de Muerta: Powder Storage",
              "g": "Port Royal"
            },
            {
              "name": "Sunset",
              "area": "Ship Graveyard: Seadrift Keep",
              "g": "Port Royal"
            },
            {
              "name": "Daylight",
              "area": "Ship Graveyard: Seadrift Keep",
              "g": "Port Royal"
            },
            {
              "name": "Sunset",
              "area": "Ship Graveyard: Seadrift Row",
              "g": "Port Royal"
            },
            {
              "name": "Sunset",
              "area": "Canyon",
              "g": "Space Paranoids"
            },
            {
              "name": "Daylight",
              "area": "Canyon",
              "g": "Space Paranoids"
            },
            {
              "name": "Sunset",
              "area": "Solar Sailer Simulation",
              "g": "Space Paranoids"
            },
            {
              "name": "Sunset",
              "area": "Central Computer Core",
              "g": "Space Paranoids"
            },
            {
              "name": "Sunset",
              "area": "Memory's Skyscraper",
              "g": "The World That Never Was"
            },
            {
              "name": "Sunset",
              "area": "Crooked Ascension",
              "g": "The World That Never Was"
            },
            {
              "name": "Sunset",
              "area": "Twilight's View",
              "g": "The World That Never Was"
            },
            {
              "name": "Daylight",
              "area": "Naught's Skyway",
              "g": "The World That Never Was"
            },
            {
              "name": "Sunset",
              "area": "Proof of Existence",
              "g": "The World That Never Was"
            },
            {
              "name": "Sunset",
              "area": "Ruin and Creation's Passage",
              "g": "The World That Never Was"
            },
            {
              "name": "Sunset",
              "area": "Ruin and Creation's Passage",
              "g": "The World That Never Was"
            }
          ]
        }
      ]
    },
    {
      "id": "challenges",
      "sections": [
        {
          "id": "conqueror",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "area"
            },
            {
              "k": "cond"
            }
          ],
          "items": [
            {
              "name": "Event Quest",
              "area": "Sandlot",
              "cond": "Inspect the Absent Silhouette.",
              "g": "Twilight Town"
            },
            {
              "name": "Mail Delivery",
              "area": "Market Street: Station Heights",
              "cond": "Try again.",
              "g": "Twilight Town"
            },
            {
              "name": "Mail Delivery",
              "area": "Market Street: Station Heights",
              "cond": "Complete within 14 seconds.",
              "g": "Twilight Town"
            },
            {
              "name": "Cargo Climb",
              "area": "Market Street: Station Heights",
              "cond": "Try again.",
              "g": "Twilight Town"
            },
            {
              "name": "Cargo Climb",
              "area": "Market Street: Station Heights",
              "cond": "Complete within 15 seconds.",
              "g": "Twilight Town"
            },
            {
              "name": "Grandstander",
              "area": "Market Street: Station Heights",
              "cond": "Try again.",
              "g": "Twilight Town"
            },
            {
              "name": "Grandstander",
              "area": "Market Street: Station Heights",
              "cond": "Complete with 100 points or more.",
              "g": "Twilight Town"
            },
            {
              "name": "Poster Duty",
              "area": "Market Street: Tram Common",
              "cond": "Try again.",
              "g": "Twilight Town"
            },
            {
              "name": "Poster Duty",
              "area": "Market Street: Tram Common",
              "cond": "Complete within 30 seconds.",
              "g": "Twilight Town"
            },
            {
              "name": "Bumble-Buster",
              "area": "Market Street: Tram Common",
              "cond": "Try again.",
              "g": "Twilight Town"
            },
            {
              "name": "Bumble-Buster",
              "area": "Market Street: Tram Common",
              "cond": "Complete within 10 seconds.",
              "g": "Twilight Town"
            },
            {
              "name": "Junk Sweep",
              "area": "Market Street: Tram Common",
              "cond": "Try again.",
              "g": "Twilight Town"
            },
            {
              "name": "Junk Sweep",
              "area": "Market Street: Tram Common",
              "cond": "Complete with less than 6 points.",
              "g": "Twilight Town"
            },
            {
              "name": "The Struggle: Hayner",
              "area": "Sandlot",
              "cond": "Give it a try.",
              "g": "Twilight Town"
            },
            {
              "name": "The Struggle: Hayner",
              "area": "Sandlot",
              "cond": "Win by a margin of 100 or more points.",
              "g": "Twilight Town"
            },
            {
              "name": "The Struggle: Setzer",
              "area": "Sandlot",
              "cond": "Give it a try.",
              "g": "Twilight Town"
            },
            {
              "name": "The Struggle: Setzer",
              "area": "Sandlot",
              "cond": "Win with 150 or more points.",
              "g": "Twilight Town"
            },
            {
              "name": "The Struggle: Seifer",
              "area": "Sandlot",
              "cond": "Give it a try.",
              "g": "Twilight Town"
            },
            {
              "name": "The Struggle: Seifer",
              "area": "Sandlot",
              "cond": "Win with 200 points.",
              "g": "Twilight Town"
            },
            {
              "name": "SB Street Rave",
              "area": "Market Street: Station Heights",
              "cond": "Give it a try.",
              "g": "Twilight Town"
            },
            {
              "name": "SB Street Rave",
              "area": "Market Street: Station Heights",
              "cond": "Finish with 1,000 or more points.",
              "g": "Twilight Town"
            },
            {
              "name": "Mushroom XIII: No. 7",
              "area": "Tunnelway",
              "cond": "Challenge to a duel.",
              "g": "Twilight Town"
            },
            {
              "name": "Mushroom XIII: No. 7",
              "area": "Tunnelway",
              "cond": "Complete within 10 seconds.",
              "g": "Twilight Town"
            },
            {
              "name": "Mushroom XIII: No. 8",
              "area": "The Tower",
              "cond": "Challenge to a duel.",
              "g": "Twilight Town"
            },
            {
              "name": "Mushroom XIII: No. 8",
              "area": "The Tower",
              "cond": "Complete with a score of 85 or more.",
              "g": "Twilight Town"
            },
            {
              "name": "Mushroom XIII: No. 12",
              "area": "The Old Mansion",
              "cond": "Challenge to a duel.",
              "g": "Twilight Town"
            },
            {
              "name": "Mushroom XIII: No. 12",
              "area": "The Old Mansion",
              "cond": "Complete with a score of 40 or more.",
              "g": "Twilight Town"
            },
            {
              "name": "Event Quest",
              "area": "Postern",
              "cond": "Meet the three girls again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Event Quest",
              "area": "Dark Depths",
              "cond": "Meet Sephiroth again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "SB Freestyle",
              "area": "Marketplace",
              "cond": "Give it a try.",
              "g": "Hollow Bastion"
            },
            {
              "name": "SB Freestyle",
              "area": "Marketplace",
              "cond": "Finish with 200 or more points.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Postern",
              "cond": "Enter the Cavern of Remembrance.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Cavern of Remembrance",
              "cond": "Investigate the depths of the Cavern.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Xemnas again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Xigbar again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Xaldin again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Vexen again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Lexaeus again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Zexion again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Saïx again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Axel again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Demyx again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Luxord again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Marluxia again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Larxene again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Cavern of Remembrance",
              "area": "Garden of Assemblage",
              "cond": "Fight Roxas again.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mushroom XIII: No. 9",
              "area": "Castle Gate",
              "cond": "Challenge to a duel.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mushroom XIII: No. 9",
              "area": "Castle Gate",
              "cond": "Complete with a score of 75 or more.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mushroom XIII: No. 13",
              "area": "The Great Maw",
              "cond": "Challenge to a duel.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Event Quest",
              "area": "Beast's Room",
              "cond": "Inspect the Absent Silhouette.",
              "g": "Beast's Castle"
            },
            {
              "name": "Mushroom XIII: No. 3",
              "area": "Bridge",
              "cond": "Challenge to a duel.",
              "g": "Beast's Castle"
            },
            {
              "name": "Mushroom XIII: No. 3",
              "area": "Bridge",
              "cond": "Complete with a score of 450 or more.",
              "g": "Beast's Castle"
            },
            {
              "name": "Event Quest",
              "area": "Cave of the Dead: Inner Chamber",
              "cond": "Inspect the Absent Silhouette.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Phil's Training",
              "area": "Olympus Coliseum",
              "cond": "Try Practice Mode.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Phil's Training",
              "area": "Olympus Coliseum",
              "cond": "Try Maniac Mode.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Phil's Training",
              "area": "Olympus Coliseum",
              "cond": "Complete with a score of 1,000 or more.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Pain and Panic",
              "area": "Underworld Entrance",
              "cond": "Give it a try.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Pain and Panic",
              "area": "Underworld Entrance",
              "cond": "Win with a score of 2,000 or more.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Cerberus",
              "area": "Underworld Entrance",
              "cond": "Give it a try.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Cerberus",
              "area": "Underworld Entrance",
              "cond": "Win with a score of 1,000 or more.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Titan",
              "area": "Underworld Entrance",
              "cond": "Give it a try.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Titan",
              "area": "Underworld Entrance",
              "cond": "Win with a score of 5,000 or more.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Goddess of Fate",
              "area": "Underworld Entrance",
              "cond": "Give it a try.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Goddess of Fate",
              "area": "Underworld Entrance",
              "cond": "Win with a score of 3,000 or more.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Pain and Panic",
              "area": "Hades' Chamber",
              "cond": "Give it a try.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Pain and Panic",
              "area": "Hades' Chamber",
              "cond": "Win with a score of 2,500 or more.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Cerberus",
              "area": "Hades' Chamber",
              "cond": "Give it a try.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Cerberus",
              "area": "Hades' Chamber",
              "cond": "Win with a score of 1,300 or more.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Titan",
              "area": "Hades' Chamber",
              "cond": "Give it a try.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Titan",
              "area": "Hades' Chamber",
              "cond": "Win with a score of 10,000 or more.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Hades",
              "area": "Hades' Chamber",
              "cond": "Give it a try.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Hades",
              "area": "Hades' Chamber",
              "cond": "Win with a score of 15,000 or more.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Mushroom XIII: No. 6",
              "area": "Underworld Caverns: Atrium",
              "cond": "Challenge to a duel.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Mushroom XIII: No. 6",
              "area": "Underworld Caverns: Atrium",
              "cond": "Complete within 45 seconds.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Event Quest",
              "area": "Cave of Wonders: Chasm of Challenges",
              "cond": "Redo the Cave of Wonders: Chasm of Challenges.",
              "g": "Agrabah"
            },
            {
              "name": "Event Quest",
              "area": "Peddler's Shop",
              "cond": "Inspect the Absent Silhouette.",
              "g": "Agrabah"
            },
            {
              "name": "Magic Carpet",
              "area": "Ruined Chamber",
              "cond": "Try again.",
              "g": "Agrabah"
            },
            {
              "name": "Magic Carpet",
              "area": "Ruined Chamber",
              "cond": "Finish with a score of 65 or more.",
              "g": "Agrabah"
            },
            {
              "name": "SB Sand Glider",
              "area": "Peddler's Shop",
              "cond": "Give it a try.",
              "g": "Agrabah"
            },
            {
              "name": "SB Sand Glider",
              "area": "Peddler's Shop",
              "cond": "Finish with 10 or more points.",
              "g": "Agrabah"
            },
            {
              "name": "Mushroom XIII: No. 5",
              "area": "Cave of Wonders: Treasure Room",
              "cond": "Challenge to a duel.",
              "g": "Agrabah"
            },
            {
              "name": "Mushroom XIII: No. 5",
              "area": "Cave of Wonders: Treasure Room",
              "cond": "Complete within 10 seconds.",
              "g": "Agrabah"
            },
            {
              "name": "A Blustery Rescue",
              "area": "Piglet's House",
              "cond": "Try again.",
              "g": "100 Acre Wood"
            },
            {
              "name": "A Blustery Rescue",
              "area": "Piglet's House",
              "cond": "Finish with a score of 18,000 or more.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Hunny Slider",
              "area": "Rabbit's House",
              "cond": "Try again.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Hunny Slider",
              "area": "Rabbit's House",
              "cond": "Finish with a score of 8,000 or more.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Balloon Bounce",
              "area": "Kanga's House",
              "cond": "Try again.",
              "g": "100 Acre Wood"
            },
            {
              "name": "Balloon Bounce",
              "area": "Kanga's House",
              "cond": "Finish with a score of 2,000 or more.",
              "g": "100 Acre Wood"
            },
            {
              "name": "The Expotition",
              "area": "Spooky Cave",
              "cond": "Try again.",
              "g": "100 Acre Wood"
            },
            {
              "name": "The Expotition",
              "area": "Spooky Cave",
              "cond": "Finish within 90 seconds.",
              "g": "100 Acre Wood"
            },
            {
              "name": "The Hunny Pot",
              "area": "Starry Hill",
              "cond": "Try again.",
              "g": "100 Acre Wood"
            },
            {
              "name": "The Hunny Pot",
              "area": "Starry Hill",
              "cond": "Finish with a score of 8,000 or more.",
              "g": "100 Acre Wood"
            },
            {
              "name": "A Musical Challenge",
              "area": "Undersea Courtyard",
              "cond": "Perform \"Swim This Way\" again.",
              "g": "Atlantica"
            },
            {
              "name": "A Musical Challenge",
              "area": "Undersea Courtyard",
              "cond": "Perform \"Part of Your World\" again.",
              "g": "Atlantica"
            },
            {
              "name": "A Musical Challenge",
              "area": "Undersea Courtyard",
              "cond": "Perform \"Under the Sea\" again.",
              "g": "Atlantica"
            },
            {
              "name": "A Musical Challenge",
              "area": "Undersea Courtyard",
              "cond": "Perform \"Ursula's Revenge\" again.",
              "g": "Atlantica"
            },
            {
              "name": "A Musical Challenge",
              "area": "Undersea Courtyard",
              "cond": "Perform \"A New Day is Dawning\" again.",
              "g": "Atlantica"
            },
            {
              "name": "Gift Wrapping",
              "area": "Shipping and Receiving",
              "cond": "Try again.",
              "g": "Halloween Town"
            },
            {
              "name": "Gift Wrapping",
              "area": "Shipping and Receiving",
              "cond": "Finish with a score of 150 or more.",
              "g": "Halloween Town"
            },
            {
              "name": "SB Workshop Rave",
              "area": "Yuletide Hill",
              "cond": "Give it a try.",
              "g": "Halloween Town"
            },
            {
              "name": "SB Workshop Rave",
              "area": "Yuletide Hill",
              "cond": "Finish with 1,000 or more points.",
              "g": "Halloween Town"
            },
            {
              "name": "Mushroom XIII: No. 2",
              "area": "Christmas Tree Plaza",
              "cond": "Challenge to a duel.",
              "g": "Halloween Town"
            },
            {
              "name": "Mushroom XIII: No. 2",
              "area": "Christmas Tree Plaza",
              "cond": "Complete with a score of 80 or more.",
              "g": "Halloween Town"
            },
            {
              "name": "Event Quest",
              "area": "Isla de Muerta: Rock Face",
              "cond": "Inspect the Absent Silhouette.",
              "g": "Port Royal"
            },
            {
              "name": "SB Time Attack",
              "area": "Rampart",
              "cond": "Give it a try.",
              "g": "Port Royal"
            },
            {
              "name": "SB Time Attack",
              "area": "Rampart",
              "cond": "Finish within 40 seconds.",
              "g": "Port Royal"
            },
            {
              "name": "Mushroom XIII: No. 10",
              "area": "Isla de Muerta: Midnight Nook",
              "cond": "Challenge to a duel.",
              "g": "Port Royal"
            },
            {
              "name": "Mushroom XIII: No. 10",
              "area": "Isla de Muerta: Midnight Nook",
              "cond": "Complete within 55 seconds.",
              "g": "Port Royal"
            },
            {
              "name": "Light Cycle",
              "area": "Pit Cell",
              "cond": "Try again.",
              "g": "Space Paranoids"
            },
            {
              "name": "Light Cycle",
              "area": "Pit Cell",
              "cond": "Finish with 30 or more points.",
              "g": "Space Paranoids"
            },
            {
              "name": "Mushroom XIII: No. 4",
              "area": "Palace Gate",
              "cond": "Challenge to a duel.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Mushroom XIII: No. 4",
              "area": "Palace Gate",
              "cond": "Complete with a score of 85 or more.",
              "g": "The Land of Dragons"
            },
            {
              "name": "Event Quest",
              "area": "Hall of the Cornerstone",
              "cond": "Investigate the mysterious entranceway.",
              "g": "Disney Castle"
            },
            {
              "name": "Mushroom XIII: No. 11",
              "area": "Waterway",
              "cond": "Challenge to a duel.",
              "g": "Timeless River"
            },
            {
              "name": "Mushroom XIII: No. 11",
              "area": "Waterway",
              "cond": "Complete within 19 seconds.",
              "g": "Timeless River"
            },
            {
              "name": "Event Quest",
              "cond": "Complete all worlds and defeat Xemnas.",
              "g": "The World That Never Was"
            },
            {
              "name": "Mushroom XIII: No. 1",
              "area": "Memory's Skyscraper",
              "cond": "Challenge to a duel.",
              "g": "The World That Never Was"
            },
            {
              "name": "Mushroom XIII: No. 1",
              "area": "Memory's Skyscraper",
              "cond": "Complete with a score of 70 or more.",
              "g": "The World That Never Was"
            }
          ]
        },
        {
          "id": "mushrooms",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "world"
            },
            {
              "k": "area"
            },
            {
              "k": "req"
            }
          ],
          "items": [
            {
              "name": "I",
              "world": "The World That Never Was",
              "area": "Memory's Skyscraper",
              "req": "Complete with a score of 70 or more"
            },
            {
              "name": "II",
              "world": "Halloween Town",
              "area": "Christmas Tree Plaza",
              "req": "Complete with a score of 80 or more"
            },
            {
              "name": "III",
              "world": "Beast's Castle",
              "area": "Bridge",
              "req": "Complete with a score of 450 or more"
            },
            {
              "name": "IV",
              "world": "Land of the Dragons",
              "area": "Palace Gate",
              "req": "Complete with a score of 85 or more"
            },
            {
              "name": "V",
              "world": "Agrabah",
              "area": "The Cave of Wonders: Treasure Room",
              "req": "Complete within 10 seconds"
            },
            {
              "name": "VI",
              "world": "Olympus Coliseum",
              "area": "Underworld Caverns: Atrium",
              "req": "Complete within 45 seconds"
            },
            {
              "name": "VII",
              "world": "Twilight Town",
              "area": "Tunnelway",
              "req": "Complete within 10 seconds"
            },
            {
              "name": "VIII",
              "world": "Twilight Town",
              "area": "Mysterious Tower",
              "req": "Complete with a score of 85 or more"
            },
            {
              "name": "IX",
              "world": "Hollow Bastion",
              "area": "Castle Gate",
              "req": "Complete with a score of 75 or more"
            },
            {
              "name": "X",
              "world": "Port Royal",
              "area": "Isla de Muerta: Moonlight Nook",
              "req": "Complete within 55 seconds"
            },
            {
              "name": "XI",
              "world": "Timeless River",
              "area": "Waterway",
              "req": "Complete within 19 seconds"
            },
            {
              "name": "XII",
              "world": "Twilight Town",
              "area": "The Old Mansion",
              "req": "Complete with a score of 40 or more"
            },
            {
              "name": "XIII",
              "world": "Hollow Bastion",
              "area": "Great Maw",
              "req": "Find it after completing the other mushrooms"
            }
          ]
        },
        {
          "id": "cups",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "unlock"
            },
            {
              "k": "score"
            },
            {
              "k": "reward"
            }
          ],
          "items": [
            {
              "name": "Pain and Panic",
              "unlock": "Complete the story of Disney Castle",
              "score": "2000",
              "reward": "Protect Belt, Serenity Gem"
            },
            {
              "name": "Cerberus",
              "unlock": "Complete the first visit to Agrabah, Halloween Town, and the Pride Lands",
              "score": "1000",
              "reward": "Rising Dragon, Serenity Crystal"
            },
            {
              "name": "Titan",
              "unlock": "Complete the second visit to Olympus Coliseum",
              "score": "5000",
              "reward": "Genji Shield, Skillful Ring"
            },
            {
              "name": "Goddess of Fate",
              "unlock": "Complete the Pain and Panic, Cerberus, and Titan cups, and complete the story of The World That Never Was",
              "score": "3000",
              "reward": "Fatal Crest, Orichalcum+"
            },
            {
              "name": "Paradox: Pain and Panic",
              "unlock": "Complete the Pain and Panic, Cerberus, Titan, and Goddess of Fate cups",
              "score": "2500"
            },
            {
              "name": "Paradox: Cerberus",
              "unlock": "Unlock the Paradox: Pain and Panic cup, and raise Valor, Wisdom, and Master Forms to level 5",
              "score": "1300"
            },
            {
              "name": "Paradox: Titan",
              "unlock": "Unlock the Paradox: Cerberus cup, and raise Summons to level 5",
              "score": "10000"
            },
            {
              "name": "Paradox: Hades",
              "unlock": "Complete the second visit to Space Paranoids, clear all previous cups, and raise all Drive Forms and Summons to level 7",
              "score": "15000"
            }
          ]
        }
      ]
    },
    {
      "id": "minigames",
      "sections": [
        {
          "id": "minigames",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "area"
            },
            {
              "k": "score"
            }
          ],
          "items": [
            {
              "name": "Mail Delivery",
              "area": "Market Street: Station Heights",
              "g": "Twilight Town"
            },
            {
              "name": "Cargo Climb",
              "area": "Market Street: Station Heights",
              "g": "Twilight Town"
            },
            {
              "name": "Grandstander",
              "area": "Market Street: Station Heights",
              "g": "Twilight Town"
            },
            {
              "name": "Poster Duty",
              "area": "Market Street: Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "Bumble-Buster",
              "area": "Market Street: Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "Junk Sweep",
              "area": "Market Street: Tram Common",
              "g": "Twilight Town"
            },
            {
              "name": "SB Street Rave",
              "area": "Market Street: Station Heights",
              "g": "Twilight Town"
            },
            {
              "name": "Mushroom XIII: No. 7",
              "area": "Tunnelway",
              "g": "Twilight Town"
            },
            {
              "name": "Mushroom XIII: No. 8",
              "area": "The Tower",
              "g": "Twilight Town"
            },
            {
              "name": "Mushroom XIII: No. 12",
              "area": "The Old Mansion",
              "g": "Twilight Town"
            },
            {
              "name": "SB Freestyle",
              "area": "Marketplace",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mushroom XIII: No. 9",
              "area": "Castle Gate",
              "g": "Hollow Bastion"
            },
            {
              "name": "Phil's Training",
              "area": "Olympus Coliseum",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Pain and Panic",
              "area": "Underworld Entrance",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Cerberus",
              "area": "Underworld Entrance",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Titan",
              "area": "Underworld Entrance",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Underdrome: Goddess of Fate",
              "area": "Underworld Entrance",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Pain and Panic",
              "area": "Hades' Chamber",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Cerberus",
              "area": "Hades' Chamber",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Titan",
              "area": "Hades' Chamber",
              "g": "Olympus Coliseum"
            },
            {
              "name": "The Paradox Battles: Hades",
              "area": "Hades' Chamber",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Mushroom XIII: No. 6",
              "area": "Underworld Caverns: Atrium",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Magic Carpet",
              "area": "Ruined Chamber",
              "g": "Agrabah"
            },
            {
              "name": "SB Sand Glider",
              "area": "Peddler's Shop",
              "g": "Agrabah"
            },
            {
              "name": "Mushroom XIII: No. 5",
              "area": "Cave of Wonders: Treasure Room",
              "g": "Agrabah"
            },
            {
              "name": "A Blustery Rescue",
              "area": "Piglet's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Hunny Slider",
              "area": "Rabbit's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "Balloon Bounce",
              "area": "Kanga's House",
              "g": "100 Acre Wood"
            },
            {
              "name": "The Expotition",
              "area": "Spooky Cave",
              "g": "100 Acre Wood"
            },
            {
              "name": "The Hunny Pot",
              "area": "Starry Hill",
              "g": "100 Acre Wood"
            },
            {
              "name": "Gift Wrapping",
              "area": "Shipping and Receiving",
              "g": "Halloween Town"
            },
            {
              "name": "SB Workshop Rave",
              "area": "Yuletide Hill",
              "g": "Halloween Town"
            },
            {
              "name": "Mushroom XIII: No. 2",
              "area": "Christmas Tree Plaza",
              "g": "Halloween Town"
            },
            {
              "name": "SB Time Attack",
              "area": "Rampart",
              "g": "Port Royal"
            },
            {
              "name": "Mushroom XIII: No. 10",
              "area": "Isla de Muerta: Midnight Nook",
              "g": "Port Royal"
            },
            {
              "name": "Light Cycle",
              "area": "Pit Cell",
              "g": "Space Paranoids"
            },
            {
              "name": "Mushroom XIII: No. 3",
              "area": "Bridge",
              "g": "Beast's Castle"
            },
            {
              "name": "Mushroom XIII: No. 4",
              "area": "Palace Gate",
              "g": "The Land of Dragons"
            },
            {
              "name": "Mushroom XIII: No. 11",
              "area": "Waterway",
              "g": "Timeless River"
            },
            {
              "name": "Mushroom XIII: No. 1",
              "area": "Memory's Skyscraper",
              "g": "The World That Never Was"
            }
          ]
        }
      ]
    },
    {
      "id": "synthesis",
      "sections": [
        {
          "id": "materials",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "source"
            },
            {
              "k": "loc"
            }
          ],
          "items": [
            {
              "name": "Blazing Shard",
              "source": "Hammer Frame",
              "loc": "Beast's Castle"
            },
            {
              "name": "Blazing Stone",
              "source": "Tornado Step",
              "loc": "Olympus Coliseum"
            },
            {
              "name": "Blazing Gem",
              "source": "Fiery Globe",
              "loc": "Agrabah"
            },
            {
              "name": "Blazing Crystal",
              "source": "Crimson Jazz",
              "loc": "Beast's Castle"
            },
            {
              "name": "Frost Shard",
              "source": "Lance Soldier",
              "loc": "Beast's Castle"
            },
            {
              "name": "Frost Stone",
              "source": "Hot Rod",
              "loc": "Timeless River"
            },
            {
              "name": "Frost Gem",
              "source": "Fortune Teller",
              "loc": "Agrabah"
            },
            {
              "name": "Frost Crystal",
              "source": "Living Bone",
              "loc": "Pride Lands"
            },
            {
              "name": "Lightning Shard",
              "source": "Bolt Tower",
              "loc": "The Land of Dragons"
            },
            {
              "name": "Lightning Stone",
              "source": "Emerald Blues",
              "loc": "The Land of Dragons"
            },
            {
              "name": "Lightning Gem",
              "source": "Surveillance Robot",
              "loc": "Radiant Garden"
            },
            {
              "name": "Lightning Crystal",
              "source": "Devastator",
              "loc": "Space Paranoids"
            },
            {
              "name": "Lucid Shard",
              "source": "Trick Ghost",
              "loc": "Halloween Town"
            },
            {
              "name": "Lucid Stone",
              "source": "Graveyard",
              "loc": "Halloween Town"
            },
            {
              "name": "Lucid Gem",
              "source": "Bookmaster",
              "loc": "Radiant Garden"
            },
            {
              "name": "Lucid Crystal",
              "source": "Neoshadow",
              "loc": "The Land of Dragons"
            },
            {
              "name": "Power Shard",
              "source": "Large Body",
              "loc": "Beast's Castle"
            },
            {
              "name": "Power Stone",
              "source": "Luna Bandit",
              "loc": "Agrabah"
            },
            {
              "name": "Power Gem",
              "source": "Shaman",
              "loc": "Pride Lands"
            },
            {
              "name": "Power Crystal",
              "source": "Morning Star",
              "loc": "Radiant Garden"
            },
            {
              "name": "Dark Shard",
              "source": "Soldier",
              "loc": "Radiant Garden"
            },
            {
              "name": "Dark Stone",
              "source": "Assault Rider",
              "loc": "The Land of Dragons"
            },
            {
              "name": "Dark Gem",
              "source": "Gargoyle Knight",
              "loc": "Beast's Castle"
            },
            {
              "name": "Dark Crystal",
              "source": "Air Pirate",
              "loc": "The Land of Dragons"
            },
            {
              "name": "Dense Shard",
              "source": "Creeper",
              "loc": "The World That Never Was"
            },
            {
              "name": "Dense Stone",
              "source": "Sniper",
              "loc": "The World That Never Was"
            },
            {
              "name": "Dense Gem",
              "source": "Samurai",
              "loc": "The World That Never Was"
            },
            {
              "name": "Dense Crystal",
              "source": "Berserker",
              "loc": "The World That Never Was"
            },
            {
              "name": "Twilight Shard",
              "source": "Gambler",
              "loc": "Twilight Town"
            },
            {
              "name": "Twilight Stone",
              "source": "Dancer",
              "loc": "Twilight Town"
            },
            {
              "name": "Twilight Gem",
              "source": "Assassin",
              "loc": "Twilight Town"
            },
            {
              "name": "Twilight Crystal",
              "source": "Sorcerer",
              "loc": "The World That Never Was"
            },
            {
              "name": "Mythril Shard",
              "loc": "Synthesis"
            },
            {
              "name": "Mythril Stone",
              "loc": "Synthesis"
            },
            {
              "name": "Mythril Gem",
              "loc": "Synthesis"
            },
            {
              "name": "Mythril Crystal",
              "loc": "Synthesis"
            },
            {
              "name": "Remembrance Shard",
              "source": "Iron Hammer",
              "loc": "Cavern of Remembrance"
            },
            {
              "name": "Remembrance Stone",
              "source": "Lance Warrior",
              "loc": "Cavern of Remembrance"
            },
            {
              "name": "Remembrance Gem",
              "source": "Mad Bumper",
              "loc": "Cavern of Remembrance"
            },
            {
              "name": "Remembrance Crystal",
              "source": "Reckless",
              "loc": "Cavern of Remembrance"
            },
            {
              "name": "Tranquility Shard",
              "source": "Mushroom XIII",
              "loc": "Multiple worlds (see Heartless & Nobodies)"
            },
            {
              "name": "Tranquility Stone",
              "source": "Mushroom XIII",
              "loc": "Multiple worlds (see Heartless & Nobodies)"
            },
            {
              "name": "Tranquility Gem",
              "source": "Mushroom XIII",
              "loc": "Multiple worlds (see Heartless & Nobodies)"
            },
            {
              "name": "Tranquillity Crystal",
              "source": "Mushroom XIII",
              "loc": "Multiple worlds (see Heartless & Nobodies)"
            },
            {
              "name": "Bright Shard",
              "source": "Hook Bat",
              "loc": "The Land of Dragons"
            },
            {
              "name": "Bright Stone",
              "source": "Wight Knight",
              "loc": "Halloween Town"
            },
            {
              "name": "Bright Gem",
              "source": "Aerial Knocker",
              "loc": "Pride Lands"
            },
            {
              "name": "Bright Crystal",
              "source": "Crescendo",
              "loc": "Olympus Coliseum"
            },
            {
              "name": "Energy Shard",
              "source": "Gargoyle Warrior",
              "loc": "Beast's Castle"
            },
            {
              "name": "Energy Stone",
              "source": "Hammer Frame",
              "loc": "Beast's Castle"
            },
            {
              "name": "Energy Gem",
              "source": "Fortune Teller",
              "loc": "Agrabah"
            },
            {
              "name": "Energy Crystal",
              "source": "Book Master",
              "loc": "Hollow Bastion"
            },
            {
              "name": "Serenity Shard",
              "source": "Bulky Vendor",
              "loc": "See below"
            },
            {
              "name": "Serenity Stone",
              "source": "Bulky Vendor",
              "loc": "See below"
            },
            {
              "name": "Serenity Gem",
              "source": "Bulky Vendor",
              "loc": "See below"
            },
            {
              "name": "Serenity Crystal",
              "source": "Bulky Vendor",
              "loc": "See below"
            },
            {
              "name": "Manifest Illusion",
              "source": "Lingering Will Treasure Chests Synthesis List (all Rank A) Complete the \"Frontier\" puzzle"
            },
            {
              "name": "Lost Illusion",
              "source": "Vexen, Lexaeus, Zexion, Marluxia, Larxene Treasure Chests Synthesis List (all Rank S)"
            },
            {
              "name": "Orichalcum",
              "source": "Bulky Vendor Treasure Chests"
            },
            {
              "name": "Orichalcum+",
              "source": "Treasure Chests"
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
              "k": "mats"
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Mega-Potion",
              "mats": "Mythril Shard x2, Power Shard x1, Blazing Shard x1, Lucid Shard x1",
              "how": "Obtain the Mega Recipe in a chest at Belle's Room (Beast's Castle)"
            },
            {
              "name": "Mega-Ether",
              "mats": "Mythril Shard x2, Power Shard x1, Blazing Shard x1, Lucid Shard x1, Serenity Stone x1",
              "how": "Create a Mega-Potion"
            },
            {
              "name": "Elixir",
              "mats": "Mythril Stone x3, Power Stone x1, Dark Stone x1",
              "how": "Obtain a Star Recipe in a chest in the Courtyard (Disney Castle)"
            },
            {
              "name": "Megalixir",
              "mats": "Mythril Stone x3, Power Stone x1, Dark Stone x1, Serenity Gem x1",
              "how": "Create an Elixir"
            },
            {
              "name": "Drive Recovery",
              "mats": "Mythril Shard x3, Dark Shard x3, Frost Shard x1, Lightning Shard x1",
              "how": "Obtain a Recovery Recipe in a chest at the Mountain Trail (Land of the Dragons)"
            },
            {
              "name": "High Drive Recovery",
              "mats": "Mythril Shard x3, Dark Shard x3, Frost Shard x1, Lightning Shard x1, Serenity Shard x1",
              "how": "Create a Drive Recovery"
            },
            {
              "name": "AP Boost",
              "mats": "Mythril Gem x1, Power Crystal x3, Dark Crystal x3, Frost Crystal x3",
              "how": "Obtain a Skill Recipe in a chest in Ansem's Study (Hollow Bastion)"
            },
            {
              "name": "Magic Boost",
              "mats": "Mythril Gem x1, Power Crystal x3, Dark Crystal x3, Frost Crystal x3, Serenity Crystal x1",
              "how": "Create an AP Boost"
            },
            {
              "name": "Defense Boost",
              "mats": "Mythril Crystal x1, Blazing Crystal x3, Lightning Crystal x3, Lucid Crystal x3",
              "how": "Obtain the Guard Recipe in a chest at The Spooky Cave (100 Acre Wood)"
            },
            {
              "name": "Power Boost",
              "mats": "Mythril Crystal x1, Blazing Crystal x3, Lightning Crystal x3, Lucid Crystal x3, Serenity Crystal x1",
              "how": "Create a Defense Boost"
            },
            {
              "name": "Mythril Shard",
              "mats": "Dense Stone x1, Dense Shard x3, Twilight Stone x1, Twilight Shard x3",
              "how": "Obtain tweny types of materials"
            },
            {
              "name": "Mythril Stone",
              "mats": "Dense Stone x1, Dense Shard x3, Twilight Stone x1, Twilight Shard x3, Serenity Shard x1",
              "how": "Create a Mythril Shard"
            },
            {
              "name": "Mythril Gem",
              "mats": "Dense Crystal x1, Dense Gem x2, Twilight Crystal x1, Twilight Gem x2",
              "how": "Raise Moguri rank to Level 8"
            },
            {
              "name": "Mythril Crystal",
              "mats": "Dense Crystal x1, Dense Gem x2, Twilight Crystal x1, Twilight Gem x2, Serenity Stone x1",
              "how": "Create a Mythril Gem"
            },
            {
              "name": "Serenity Crystal",
              "mats": "Tranquility Crystal x1, Remembrance Crystal x1, Bright Crystal x5",
              "how": "Raise Moguri rank to Level 8"
            },
            {
              "name": "Manifest Illusion",
              "mats": "Tranquility Crystal x1, Remembrance Crystal x1, Bright Crystal x5, Serenity Gem x1",
              "how": "Create a Serenity Crystal"
            },
            {
              "name": "Firaga Bangle",
              "mats": "Mythril Shard x5, Blazing Stone x1, Blazing Shard x1",
              "how": "Obtain five types of materials"
            },
            {
              "name": "Firagun Bangle",
              "mats": "Mythril Shard x5, Blazing Stone x1, Blazing Shard x1, Serenity Shard x1",
              "how": "Create a Firaga Bangle"
            },
            {
              "name": "Blizzaga Armlet",
              "mats": "Mythril Shard x5, Frost Stone x1, Frost Shard x1",
              "how": "Obtain five types of materials"
            },
            {
              "name": "Blizzagun Armlet",
              "mats": "Mythril Shard x5, Frost Stone x1, Frost Shard x1, Serenity Shard x1",
              "how": "Create a Blizzaga Armlet"
            },
            {
              "name": "Thundaga Trinket",
              "mats": "Mythril Shard x5, Lightning Stone x1, Lightning Shard x1",
              "how": "Obtain five types of materials"
            },
            {
              "name": "Thundagun Trinket",
              "mats": "Mythril Shard x5, Lightning Stone x1, Lightning Shard x1, Serenity Shard x1",
              "how": "Create a Thundaga Trinket"
            },
            {
              "name": "Midnight Anklet",
              "mats": "Mythril Shard x5, Lucid Stone x1, Lucid Shard x1",
              "how": "Obtain five types of materials"
            },
            {
              "name": "Chaos Anklet",
              "mats": "Mythril Shard x5, Lucid Stone x1, Lucid Shard x1, Serenity Shard x1",
              "how": "Create a Midnight Anklet"
            },
            {
              "name": "Acrisius",
              "mats": "Mythril Stone x5, Blazing Stone x1, Frost Stone x1, Lightning Stone x1",
              "how": "Obtain tweny types of materials"
            },
            {
              "name": "Acrisius+",
              "mats": "Mythril Stone x5, Blazing Stone x1, Frost Stone x1, Lightning Stone x1, Serenity Stone x1",
              "how": "Create a Acrisius"
            },
            {
              "name": "Power Band",
              "mats": "Mythril Stone x5, Power Stone x1, Dark Stone x1, Lucid Stone x1",
              "how": "Obtain tweny types of materials"
            },
            {
              "name": "Buster Band",
              "mats": "Mythril Stone x5, Power Stone x1, Dark Stone x1, Lucid Stone x1, Serenity Stone x1",
              "how": "Create a Power Band"
            },
            {
              "name": "Petite Ribbon",
              "mats": "Mythril Crystal x3, Orichalcum x1, Dense Stone x1, Dense Shard x1",
              "how": "Obtain a Style Recipe in a chest at the Starry Hill (100 Acre Wood)"
            },
            {
              "name": "Ribbon",
              "mats": "Mythril Crystal x3, Orichalcum x1, Dense Stone x1, Dense Shard x1, Serenity Gem x1",
              "how": "Create a Petite Ribbon"
            },
            {
              "name": "Shock Charm",
              "mats": "Lost Illusion x1, Remembrance Gem x1, Remembrance Stone x3, Tranquility Gem x1, Tranquility Stone x3",
              "how": "Obtain the Cloaked Thunder by defeating Larxene's Absent Silhouette"
            },
            {
              "name": "Shock Charm+",
              "mats": "Lost Illusion x1, Remembrance Gem x1, Remembrance Stone x3, Tranquility Gem x1, Tranquility Stone x3, Serenity Crystal x1",
              "how": "Create a Shock Charm"
            },
            {
              "name": "Garnet Ring",
              "mats": "Mythril Stone x3, Power Stone x1, Power Shard x1, Dark Shard x1",
              "how": "Obtain five types of materials"
            },
            {
              "name": "Diamond Ring",
              "mats": "Mythril Stone x3, Power Stone x1, Power Shard x1, Dark Shard x1, Serenity Shard x1",
              "how": "Create a Garnet Ring"
            },
            {
              "name": "Mythril Ring",
              "mats": "Mythril Stone x3, Power Stone x1, Dark Stone x1, Dark Shard x1",
              "how": "Obtain five types of materials"
            },
            {
              "name": "Orichalcum Ring",
              "mats": "Mythril Stone x3, Power Stone x1, Dark Stone x1, Dark Shard x1, Serenity Shard x1",
              "how": "Create a Mythril Ring"
            },
            {
              "name": "Soldier Earring",
              "mats": "Mythril Gem x3, Dark Gem x1, Frost Gem x1, Lucid Gem x1",
              "how": "Obtain tweny types of materials"
            },
            {
              "name": "Fencer Earring",
              "mats": "Mythril Gem x3, Dark Gem x1, Frost Gem x1, Lucid Gem x1, Serenity Stone x1",
              "how": "Create a Soldier Earring"
            },
            {
              "name": "Mage Earring",
              "mats": "Mythril Gem x3, Power Gem x1, Blazing Gem x1, Lightning Gem x1",
              "how": "Obtain tweny types of materials"
            },
            {
              "name": "Slayer Earring",
              "mats": "Mythril Gem x3, Power Gem x1, Blazing Gem x1, Lightning Gem x1, Serenity Stone x1",
              "how": "Create a Mage Earring"
            },
            {
              "name": "Expert's Ring",
              "mats": "Mythril Crystal x3, Dark Crystal x1, Dark Gem x1, Dark Stone x1, Dark Shard x1",
              "how": "Obtain tweny types of materials"
            },
            {
              "name": "Master's Ring",
              "mats": "Mythril Crystal x3, Dark Crystal x1, Dark Gem x1, Dark Stone x1, Dark Shard x1, Serenity Gem x1",
              "how": "Create a Expert's Ring"
            },
            {
              "name": "Moon Amulet",
              "mats": "Orichalcum x3, Mythril Crystal x1, Twilight Stone x1, Twilight Shard x1",
              "how": "Obtain the Moon Recipe in a chest at the Restoration Site (Hollow Bastion)"
            },
            {
              "name": "Star Charm",
              "mats": "Orichalcum x3, Mythril Crystal x1, Twilight Stone x1, Twilight Shard x1, Serenity Gem x1",
              "how": "Create a Moon Amulet"
            },
            {
              "name": "Draw Ring",
              "mats": "Manifest Illusion x1, Remembrance Shard x3, Bright Gem x3, Bright Stone x5, Bright Shard x9",
              "how": "Obtain Rare Document by completing the \"Duality\" Puzzle in Jiminy's Journal"
            },
            {
              "name": "Lucky Ring",
              "mats": "Manifest Illusion x1, Remembrance Shard x3, Bright Gem x3, Bright Stone x5, Bright Shard x9, Serenity Crystal x1",
              "how": "Create a Draw Ring"
            },
            {
              "name": "Shadow Archive",
              "mats": "Lost Illusion x1, Manifest Illusion x1, Remembrance Crystal x1, Serenity Gem x3",
              "how": "Obtain the Book of Shadows by defeating Zexion's Absent Silhouette"
            },
            {
              "name": "Shadow Archive+",
              "mats": "Lost Illusion x1, Manifest Illusion x1, Remembrance Crystal x1, Serenity Gem x3, Serenity Crystal x1",
              "how": "Create a Shadow Archive"
            },
            {
              "name": "Full Bloom",
              "mats": "Lost Illusion x1, Manifest Illusion x1, Tranquility Crystal x1, Serenity Gem x3",
              "how": "Obtain Eternal Blossom by defeating Marluxia's Absent Silhouette"
            },
            {
              "name": "Full Bloom+",
              "mats": "Lost Illusion x1, Manifest Illusion x1, Tranquility Crystal x1, Serenity Gem x3, Serenity Crystal x1",
              "how": "Create a Full Bloom"
            },
            {
              "name": "Centurion",
              "mats": "Lost Illusion x1, Remembrance Crystal x1, Remembrance Gem x3, Remembrance Stone x5, Remembrance Shard x7",
              "how": "Obtain Strength Beyond Strength by defeating Lexaeus's Absent Silhouette"
            },
            {
              "name": "Centurion+",
              "mats": "Lost Illusion x1, Remembrance Crystal x1, Remembrance Gem x3, Remembrance Stone x5, Remembrance Shard x7, Serenity Crystal x1",
              "how": "Create a Centurion"
            },
            {
              "name": "Save the Queen",
              "mats": "Orichalcum x1, Dense Crystal x3, Dense Gem x5, Dense Stone x7, Dense Shard x9",
              "how": "Obtain the Queen Recipe in a chest at the Throne Room (Land of the Dragons)"
            },
            {
              "name": "Save the Queen+",
              "mats": "Orichalcum x1, Dense Crystal x3, Dense Gem x5, Dense Stone x7, Dense Shard x9, Serenity Crystal x1",
              "how": "Create a Save the Queen"
            },
            {
              "name": "Frozen Pride",
              "mats": "Lost Illusion x1, Tranquility Crystal x1, Tranquility Gem x3, Tranquility Stone x5, Tranquility Shard x7",
              "how": "Obtain Road to Discovery by defeating Vexen's Absent Silhouette"
            },
            {
              "name": "Frozen Pride+",
              "mats": "Lost Illusion x1, Tranquility Crystal x1, Tranquility Gem x3, Tranquility Stone x5, Tranquility Shard x7, Serenity Crystal x1",
              "how": "Create a Frozen Pride"
            },
            {
              "name": "Save the King",
              "mats": "Orichalcum x1, Twilight Crystal x3, Twilight Gem x5, Twilight Stone x7, Twilight Shard x9, Serenity Crystal x1",
              "how": "Obtain the King Recipe in a chest at the Ship Graveyard: Seadrift Row (Port Royal)"
            },
            {
              "name": "Save the King+",
              "mats": "Orichalcum x1, Twilight Crystal x3, Twilight Gem x5, Twilight Stone x7, Twilight Shard x9",
              "how": "Create a Save the King"
            },
            {
              "name": "Ultima Weapon",
              "mats": "Orichalcum+ x13, Orichalcum x1, Mythril Crystal x1, Dense Crystal x1, Twilight Crystal x1, Serenity Crystal x3, Energy Crystal x1",
              "how": "Obtain an Ultimate Recipe in a chest at the Mansion: Basement Corridor (Twilight Town)"
            }
          ]
        },
        {
          "id": "lists",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "reward"
            }
          ],
          "items": [
            {
              "name": "Get 1 type of Material.",
              "reward": "Elixir"
            },
            {
              "name": "Get 5 types of Materials.",
              "reward": "Free Development 1"
            },
            {
              "name": "Get 10 types of Materials.",
              "reward": "AP Boost"
            },
            {
              "name": "Get 15 types of Materials.",
              "reward": "Megalixir"
            },
            {
              "name": "Get 20 types of Materials.",
              "reward": "Free Development 2"
            },
            {
              "name": "Get 25 types of Materials.",
              "reward": "AP Boost"
            },
            {
              "name": "Get 30 types of Materials.",
              "reward": "Defense Boost"
            },
            {
              "name": "Get 35 types of Materials.",
              "reward": "AP Boost"
            },
            {
              "name": "Get 40 types of Materials.",
              "reward": "Power Boost"
            },
            {
              "name": "Get 45 types of Materials.",
              "reward": "AP Boost"
            },
            {
              "name": "Get 50 types of Materials.",
              "reward": "Magic Boost"
            },
            {
              "name": "Get 55 types of Materials.",
              "reward": "Orichalcum"
            },
            {
              "name": "Get all Materials.",
              "reward": "Orichalcum+"
            },
            {
              "name": "Obtain total amount of 50 or more.",
              "reward": "Serenity Shard"
            },
            {
              "name": "Obtain total amount of 100 or more.",
              "reward": "Serenity Stone"
            },
            {
              "name": "Obtain total amount of 250 or more.",
              "reward": "Serenity Gem"
            },
            {
              "name": "Obtain total amount of 500 or more.",
              "reward": "Serenity Crystal"
            },
            {
              "name": "Obtain total amount of 1,000 or more.",
              "reward": "Orichalcum"
            },
            {
              "name": "Obtain all dense Materials.",
              "reward": "Serenity Gem"
            },
            {
              "name": "Obtain all twilight Materials.",
              "reward": "Serenity Crystal"
            },
            {
              "name": "Obtain all mythril Materials.",
              "reward": "AP Boost"
            },
            {
              "name": "Obtain all remembrance Materials.",
              "reward": "Serenity Crystal"
            },
            {
              "name": "Obtain all tranquility Materials.",
              "reward": "Serenity Crystal"
            },
            {
              "name": "Obtain all bright Materials.",
              "reward": "Defense Boost"
            },
            {
              "name": "Obtain all energy Materials.",
              "reward": "Power Boost"
            },
            {
              "name": "Obtain all serenity Materials.",
              "reward": "Magic Boost"
            },
            {
              "name": "Obtain all rank C Materials.",
              "reward": "Serenity Shard"
            },
            {
              "name": "Obtain all rank B Materials.",
              "reward": "Serenity Stone"
            },
            {
              "name": "Obtain all rank A Materials.",
              "reward": "Manifest Illusion"
            },
            {
              "name": "Obtain all rank S Materials.",
              "reward": "Lost Illusion"
            },
            {
              "name": "Obtain 30 or more Blazing Shards.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 25 or more Blazing Stones.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 20 or more Blazing Gems.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 30 or more Frost Shards.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 25 or more Frost Stones.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 20 or more Frost Gems.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 30 or more Lightning Shards.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 25 or more Lightning Stones.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 20 or more Lightning Gems.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 30 or more Lucid Shards.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 25 or more Lucid Stones.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 20 or more Lucid Gems.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 30 or more Power Shards.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 25 or more Power Stones.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 20 or more Power Gems.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 30 or more Dark Shards.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 25 or more Dark Stones.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 20 or more Dark Gems.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 30 or more Dense Shards.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 25 or more Dense Stones.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 20 or more Dense Gems.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 30 or more Twilight Shards.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 25 or more Twilight Stones.",
              "reward": "Sell at Shop"
            },
            {
              "name": "Obtain 20 or more Twilight Gems.",
              "reward": "Sell at Shop"
            }
          ]
        }
      ]
    },
    {
      "id": "gummi",
      "sections": [
        {
          "id": "gummim",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "ex"
            },
            {
              "k": "reward"
            }
          ],
          "items": [
            {
              "name": "Asteroid Sweep 1",
              "ex": "Fly a Gummi Ship with 50 or more speed!",
              "reward": "EX: Caterpillar/G Rank S: Patterned Skins A Rank A: Neon Orb/G Rank B: Mini-Propeller/G Rank C: Fira/G Rank D: Thundara/G Rank E: Laser Upgrade",
              "g": "Asteroid Sweep"
            },
            {
              "name": "Asteroid Sweep 2",
              "ex": "Fly a Gummi Ship with 100 or more power!",
              "reward": "EX: Shuriken/G Rank S: Highwind α Model Rank A: Propeller/G Rank B: Large Shield/G Rank C: Fira/G Rank D: Saw/G Rank E: Gravira/G",
              "g": "Asteroid Sweep"
            },
            {
              "name": "Asteroid Sweep 3",
              "ex": "Fly a Gummi Ship with 250 or more power!",
              "reward": "EX: Figure/G Set Rank S: Flat Helm/G Rank A: Hurricane/G Rank B: Thruster/G Rank C: Radar/G Rank D: Gugnir/G Rank E: Masamune/G",
              "g": "Asteroid Sweep"
            },
            {
              "name": "Stardust Sweep 1",
              "ex": "Fly a Gummi Ship set with 12 or more Wing Gummies!",
              "reward": "EX: Flag/G Rank S: Patterned Skins B Rank A: Rotor/G Rank B: Shield/G Rank C: Solid Helm/G Rank D: Blizzara/G Rank E: Cannon Upgrade",
              "g": "Stardust Sweep"
            },
            {
              "name": "Stardust Sweep 2",
              "ex": "Fly a Gummi Ship with only Projectile Gummies as Weapon Gummies!",
              "reward": "EX: Boomerang/G Rank S: PuPu Model Rank A: Thruster/G Rank B: Parabola/G Rank C: Blizzara/G Rank D: Radar/G Rank E: Orichalcum/G",
              "g": "Stardust Sweep"
            },
            {
              "name": "Stardust Sweep 3",
              "ex": "Fly a Gummi Ship set with 20 or more Projectile Gummies!",
              "reward": "EX: Strike/G Rank S: Bubble Helm/G Rank A: Sonic Turbo/G Rank B: Booster/G Rank C: Drill/G Rank D: Antenna/G Rank E: Comet/G",
              "g": "Stardust Sweep"
            },
            {
              "name": "Phantom Storm 1",
              "ex": "Fly a Highwind model from the sample blueprints!",
              "reward": "EX: Mast/G Rank S: Realistic Skins Rank A: Hurricane/G Rank B: Flat Helm/G Rank C: Cannon Upgrade Rank D: Gravira/G Rank E: Auto-Life",
              "g": "Phantom Storm"
            },
            {
              "name": "Phantom Storm 2",
              "ex": "Fly a Gummi Ship with 50 or less HP!",
              "reward": "EX: Strike/G Rank S: Tonberry Model Rank A: Storm/G Rank B: Sonic Turbo/G Rank C: Radar/G Rank D: Gungnir/G Rank E: Thundara/G",
              "g": "Phantom Storm"
            },
            {
              "name": "Phantom Storm 3",
              "ex": "Fly a Gummi Ship and Teeny Ship with a combination of 20 or less HP!",
              "reward": "EX: Caterpillar/G Rank S: Drill/G Rank A: Storm/G Rank B: Large Rotor/G Rank C: Bridge/G Rank D: Blizzara/G Rank E: Thundaga/G",
              "g": "Phantom Storm"
            },
            {
              "name": "Splash Island 1",
              "ex": "Fly a Gummi Ship set with the Formation Change Ability!",
              "reward": "EX: Flag/G Rank S: Decal Skins Rank A: Neon Bar/G Rank B: Screw Propeller/G Rank C: Bridge/G Rank D: AP Limit Upgrade Rank E: Heal Upgrade",
              "g": "Splash Island"
            },
            {
              "name": "Splash Island 2",
              "ex": "Fly an Invincible model from the sample blueprints!",
              "reward": "EX: Boomerang/G Rank S: Moogle Model Rank A: Storm/G Rank B: Round Light/G Rank C: Antenna/G Rank D: Laser Upgrade Rank E: Thundaga/G",
              "g": "Splash Island"
            },
            {
              "name": "Splash Island 3",
              "ex": "Fly a Gummi Ship with no Weapon Gummies!",
              "reward": "EX: Mast/G Rank S: Solid Helm/G Rank A: Storm/G Rank B: Screw Propeller/G Rank C: Firaga/G Rank D: Blizzaga/G Rank E: Meteor/G",
              "g": "Splash Island"
            },
            {
              "name": "Floating Island 1",
              "ex": "Fly a special model Ship!",
              "reward": "EX: Moon Ring/G Rank S: Variety Skins A Rank A: Propeller/G Rank B: Shell/G Rank C: Sphere Helm/G Rank D: Orichalcum/G Rank E: Active Formation",
              "g": "Floating Island"
            },
            {
              "name": "Floating Island 2",
              "ex": "Fly a Gummi Ship with 4 or more Lock-on Gummies!",
              "reward": "EX: Caterpillar/G Rank S: Mandragora Model Rank A: Large Rotor/G Rank B: Cost Converter Rank C: Excalibur/G Rank D: Firaga/G Rank E: Graviga/G",
              "g": "Floating Island"
            },
            {
              "name": "Floating Island 3",
              "ex": "Fly without any Teeny Ships!",
              "reward": "EX: Figure/G Rank S: Sphere Helm/G Rank A: Square Light/G Rank B: Mini-Propeller/G Rank C: Saw/G Rank D: Firaga/G Rank E: Ultima/G",
              "g": "Floating Island"
            },
            {
              "name": "Ancient Highway 1",
              "ex": "Fly a Gummi Ship set with 8 or more Wheel Gummies!",
              "reward": "EX: Figure/G Rank S: Variety Skins B Rank A: Cyclone/G Rank B: Wheel/G Rank C: Slash Upgrade Rank D: Firaga/G Rank E: Auto-Regen",
              "g": "Ancient Highway"
            },
            {
              "name": "Ancient Highway 2",
              "ex": "Fly a Gummi Ship set with 8 or more Abilities!",
              "reward": "EX: Caterpillar/G Rank S: Chocobo Model Rank A: Angel/G Rank B: Shell/G Rank C: AP Limit Upgrade Rank D: Fira/G Rank E: Ultima/G",
              "g": "Ancient Highway"
            },
            {
              "name": "Ancient Highway 3",
              "ex": "Fly a Gummi Ship and Teeny Ship with a combination of 80 or more speed!",
              "reward": "EX: Boomerang/G Rank S: Saw/G Rank A: Neon Orb/G Rank B: Wheel/G Rank C: Sphere Helm/G Rank D: Gravira/G Rank E: Infinity/G",
              "g": "Ancient Highway"
            },
            {
              "name": "Broken Highway 1",
              "ex": "Fly a Gummi Ship set with 6 or more Shield Gummies!",
              "reward": "EX: Caterpillar/G Rank S: Neon Skins A Rank A: Typhoon/G Rank B: Booster/G Rank C: Large Shield/G Rank D: Blizzaga/G Rank E: Medal Converter",
              "g": "Broken Highway"
            },
            {
              "name": "Broken Highway 2",
              "ex": "Fly a Gummi Ship set with 2 or more Slash Gummies!",
              "reward": "EX: Figure/G Rank S: Cactuar Model Rank A: Darkness/G Rank B: Wheel/G Rank C: Big Bridge/G Rank D: Blizzara/G Rank E: Masamune/G",
              "g": "Broken Highway"
            },
            {
              "name": "Broken Highway 3",
              "ex": "Fly a Gummi Ship set with 4 or more Slash Gummies!",
              "reward": "EX: Strike/G Rank S: Gungnir/G Rank A: Neon Bar/G Rank B: Wheel/G Rank C: Solid Helm/G Rank D: Thundara/G Rank E: Excalibur/G",
              "g": "Broken Highway"
            },
            {
              "name": "Sunlight Storm 1",
              "ex": "Fly alongside a Teeny Ship set with 4 or more Impact Gummies!",
              "reward": "EX: Figure/G Set Rank S: Neon Skins B Rank A: Sonic Turbo/G Rank B: Large Shell/G Rank C: Thundaga/G Rank D: AP Limit Upgrade Rank E: Draw",
              "g": "Sunlight Storm"
            },
            {
              "name": "Sunlight Storm 2",
              "ex": "Fly a Falcon Model from the sample blueprints!",
              "reward": "EX: Shuriken/G Rank S: Cait Sith Model Rank A: Neon Orb/G Rank B: Drill/G Rank C: Parabola/G Rank D: Slash Upgrade Rank E: Infinity/G",
              "g": "Sunlight Storm"
            },
            {
              "name": "Sunlight Storm 3",
              "ex": "Fly a Gummi Ship with a cost of 400 or less!",
              "reward": "EX: Strike/G Rank S: Bridge/G Rank A: Cyclone/G Rank B: Typhoon/G Rank C: Orichalcum/G Rank D: Comet/G Rank E: Graviga/G",
              "g": "Sunlight Storm"
            },
            {
              "name": "Assault of the Dreadnought 1",
              "ex": "Fly a Gummi Ship set with 2 or more Ultima Gummies!",
              "reward": "EX: Shuriken/G Rank S: Mushroom Model Rank A: Vortex/G Rank B: Big Bridge/G Rank C: Excalibur/G Rank D: Meteor/G Rank E: Cost Converter",
              "g": "Assault of the Dreadnought"
            },
            {
              "name": "Assault of the Dreadnought 2",
              "ex": "Fly a Gummi Ship with dimensions of 3 x 3 x 3 or smaller!",
              "reward": "EX: Caterpillar/G Rank S: Fenrir Model Rank A: Square Light/G Rank B: Vortex/G Rank C: Large Shell/G Rank D: Auto-Regen Rank E: Drain/G",
              "g": "Assault of the Dreadnought"
            },
            {
              "name": "Assault of the Dreadnought 3",
              "ex": "Fly a Gummi Ship set with a Drain Gummi!",
              "reward": "EX: Bomb/G Rank S: Big Bridge/G Rank A: Darkness/G Rank B: Angel/G Rank C: Meteor/G Rank D: Graviga/G Rank E: Firaga/G",
              "g": "Assault of the Dreadnought"
            }
          ],
          "checks": [
            {
              "k": "done",
              "th": "gt-th-clear"
            },
            {
              "k": "s",
              "th": "gt-th-srank"
            },
            {
              "k": "ex",
              "th": "gt-th-ex"
            }
          ]
        },
        {
          "id": "blueprints",
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
              "name": "Highwind",
              "how": "Default"
            },
            {
              "name": "Highwind Lv.1",
              "how": "Obtain the following materials: Material/G x31, Blizzard/G x1, Thunder/G x2, Bubble Helm/G x1"
            },
            {
              "name": "Highwind Lv.2",
              "how": "Obtain the following materials: Material/G x44, Fire/G x1, Blizzard/G x1, Thunder/G x2, Vernier/G x2, Bubble Helm/G x1"
            },
            {
              "name": "Highwind Lv.3",
              "how": "Obtain the following materials: Material/G x49, Fire/G x1, Blizzard/G x1, Thunder/G x2, Vernier/G x2, Bubble Helm/G x1"
            },
            {
              "name": "Highwind Lv.4",
              "how": "Obtain the following materials: Material/G x52, Blizzard/G x1, Gravity/G x1, Thunder/G x2, Vernier/G x2, Bubble Helm/G x1"
            },
            {
              "name": "Highwind Lv.5",
              "how": "Obtain the following materials: Material/G x72, Fire/G x1, Blizzard/G x1, Gravity/G x1, Thunder/G x2, Vernier/G x2, Bubble Helm/G x1"
            },
            {
              "name": "Highwind Lv.6",
              "how": "Obtain the following materials: Material/G x112, Fire/G x1, Blizzard/G x1, Comet/G x1, Thunder/G x2, Vernier/G x4, Bubble Helm/G x1"
            },
            {
              "name": "Highwind Lv.7",
              "how": "Obtain the following materials: Material/G x82, Fire/G x1, Blizzard/G x1, Thunder/G x3, Vernier/G x4, Bubble Helm/G x1"
            },
            {
              "name": "Highwind Lv.8",
              "how": "Obtain the following materials: Material/G x122, Fire/G x1, Blizzard/G x1, Comet/G x1, Ultima/G x1, Vernier/G x2, Bubble Helm/G x1"
            },
            {
              "name": "Highwind Peak",
              "how": "Obtain the following materials: Material/G x138, Fire/G x1, Blizzard/G x1, Comet/G x1, Thunder/G x3, Vernier/G x4, Bubble Helm/G x1"
            },
            {
              "name": "Invincible Lv.1",
              "how": "Obtain the following materials: Material/G x31, Fire/G x1, Blizzard/G x1, Thunder/G x2, Vernier/G x2, Bubble Helm/G x1, Square Light/G x1"
            },
            {
              "name": "Invincible Lv.2",
              "how": "Obtain the following materials: Material/G x38, Fire/G x3, Thunder/G x1, Bubble Helm/G x1"
            },
            {
              "name": "Invincible Lv.3",
              "how": "Obtain the following materials: Material/G x44, Fire/G x1, Blizzard/G x1, Thunder/G x2, Vernier/G x2, Flat Helm/G x1, Square Light/G x2"
            },
            {
              "name": "Invincible Lv.4",
              "how": "Obtain the following materials: Material/G x60, Fire/G x1, Thunder/G x1, Sphere Helm/G x1"
            },
            {
              "name": "Invincible Lv.5",
              "how": "Obtain the following materials: Material/G x81, Fire/G x2, Blizzard/G x1, Thunder/G x1, Vernier/G x2, Booster/G x1, Bubble Helm/G x1"
            },
            {
              "name": "Invincible Lv.6",
              "how": "Obtain the following materials: Material/G x81, Fire/G x2, Blizzard/G x1, Thunder/G x1, Vernier/G x2, Booster/G x1, Bubble Helm/G x1"
            },
            {
              "name": "Invincible Lv.7",
              "how": "Obtain the following materials: Material/G x113, Fira/G x1, Blizzara/G x1, Thunder/G x1, Booster/G x1, Bubble Helm/G x1, Shield/G x1"
            },
            {
              "name": "Invincible Lv.8",
              "how": "Obtain the following materials: Material/G x50, Firaga/G x1, Blizzaga/G x1, Thunder/G x1, Booster/G x1, Sphere Helm/G x1, Round Light/G x2"
            },
            {
              "name": "Invincible Peak",
              "how": "Obtain the following materials: Material/G x169, Fire/G x1, Fira/G x1, Blizzara/G x1, Meteor/G x1, Booster/G x1, Bubble Helm/G x1, Shield/G x1"
            },
            {
              "name": "Falcon Lv.1",
              "how": "Obtain the following materials: Material/G x39, Fire/G x1, Blizzard/G x2, Gravity/G x1, Thunder/G x1, Vernier/G x2, Flat Helm/G x1"
            },
            {
              "name": "Falcon Lv.2",
              "how": "Obtain the following materials: Material/G x48, Fire/G x4, Blizzard/G x1, Thunder/G x2, Vernier/G x2, Flat Helm/G x1"
            },
            {
              "name": "Falcon Lv.3",
              "how": "Obtain the following materials: Material/G x52, Fira/G x1, Blizzara/G x1, Thunder/G x2, Vernier/G x2, Flat Helm/G x1"
            },
            {
              "name": "Falcon Lv.4",
              "how": "Obtain the following materials: Material/G x47, Fire/G x1, Fira/G x1, Blizzara/G x1, Thundara/G x1, Vernier/G x2, Flat Helm/G x1"
            },
            {
              "name": "Falcon Lv.5",
              "how": "Obtain the following materials: Material/G x68, Fire/G x4, Blizzard/G x2, Thunder/G x2, Vernier/G x2, Solid Helm/G x1"
            },
            {
              "name": "Falcon Lv.6",
              "how": "Obtain the following materials: Material/G x108, Fire/G x2, Blizzara/G x1, Comet/G x1, Thunder/G x2, Vernier/G x2, Solid Helm/G x1"
            },
            {
              "name": "Falcon Lv.7",
              "how": "Obtain the following materials: Material/G x77, Fira/G x1, Blizzard/G x1, Gravira/G x1, Thunder/G x2, Vernier/G x2, Solid Helm/G x1, Radar/G x1"
            },
            {
              "name": "Falcon Lv.8",
              "how": "Obtain the following materials: Material/G x28, Firaga/G x1, Blizzaga/G x1, Ultima/G x1, Vernier/G x2, Solid Helm/G x1"
            },
            {
              "name": "Falcon Peak",
              "how": "Obtain the following materials: Material/G x126, Blizzaga/G x1, Graviga/G x1, Meteor/G x1, Thunder/G x1, Vernier/G x2, Solid Helm/G x1"
            },
            {
              "name": "Highwind α",
              "how": "Achieve Rank S in Mission 2 of Asteroid Sweep"
            },
            {
              "name": "PuPu",
              "how": "Achieve Rank S in Mission 2 of Stardust Sweep"
            },
            {
              "name": "Tonberry",
              "how": "Achieve Rank S in Mission 2 of Phantom Storm"
            },
            {
              "name": "Moogle",
              "how": "Achieve Rank S in Mission 2 of Splash Island"
            },
            {
              "name": "Mandragora",
              "how": "Achieve Rank S in Mission 2 of Floating Island"
            },
            {
              "name": "Chocobo",
              "how": "Achieve Rank S in Mission 2 of Ancient Highway"
            },
            {
              "name": "Cactuar",
              "how": "Achieve Rank S in Mission 2 of Broken Highway"
            },
            {
              "name": "Cait Sith",
              "how": "Achieve Rank S in Mission 2 of Sunlight Storm"
            },
            {
              "name": "Mushroom",
              "how": "Achieve Rank S in Mission 1 of Assault of the Dreadnought"
            },
            {
              "name": "Fenrir",
              "how": "Achieve Rank S in Mission 2 of Assault of the Dreadnought"
            },
            {
              "name": "Kingdom Model",
              "how": "Received as treasure in Mission 2 of Asteroid Sweep"
            },
            {
              "name": "Secret Model",
              "how": "Achieve Rank S in Mission 3 of Assault of the Dreadnought"
            }
          ]
        }
      ]
    },
    {
      "id": "misc",
      "sections": [
        {
          "id": "searcher",
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
              "name": "Secret Ansem Report 1",
              "how": "Obtained during the main story (in Hollow Bastion, 2nd visit)."
            },
            {
              "name": "Secret Ansem Report 2",
              "how": "Obtained during the main story (in Twilight Town, 1st visit)."
            },
            {
              "name": "Secret Ansem Report 3",
              "how": "Obtained during the main story (in The World That Never Was)."
            },
            {
              "name": "Secret Ansem Report 4",
              "how": "Obtained during the main story (in Beast Castle, 2nd visit)."
            },
            {
              "name": "Secret Ansem Report 5",
              "how": "Obtained during the main story (in Olympus Coliseum, 1st visit)."
            },
            {
              "name": "Secret Ansem Report 6",
              "how": "Obtained during the main story (in Port Royal, 2nd visit)."
            },
            {
              "name": "Secret Ansem Report 7",
              "how": "Obtained during the main story (in Hollow Bastion, 1st visit)."
            },
            {
              "name": "Secret Ansem Report 8",
              "how": "Obtained during the main story (in The World That Never Was)."
            },
            {
              "name": "Secret Ansem Report 9",
              "how": "Obtained during the main story (in The World That Never Was)."
            },
            {
              "name": "Secret Ansem Report 10",
              "how": "Obtained during the main story (in Twilight Town, 2nd visit)."
            },
            {
              "name": "Secret Ansem Report 11",
              "how": "Obtained during the main story (in The World That Never Was)."
            },
            {
              "name": "Secret Ansem Report 12",
              "how": "Obtained during the main story (in The World That Never Was)."
            },
            {
              "name": "Secret Ansem Report 13",
              "how": "Obtained during the main story (in The World That Never Was)."
            }
          ]
        },
        {
          "id": "limits",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "limit"
            },
            {
              "k": "cond"
            }
          ],
          "items": [
            {
              "name": "Donald",
              "limit": "Fantasia",
              "cond": "Fantasia"
            },
            {
              "name": "Donald",
              "limit": "Flare Force",
              "cond": "Flare Force"
            },
            {
              "name": "Goofy",
              "limit": "Twister Fusion",
              "cond": "Tornado Fusion"
            },
            {
              "name": "Goofy",
              "limit": "Teamwork",
              "cond": "Teamwork"
            },
            {
              "name": "Beast",
              "limit": "Howling Moon",
              "cond": "Howling Moon"
            },
            {
              "name": "Auron",
              "limit": "Overdrive",
              "cond": "Overdrive"
            },
            {
              "name": "Mulan",
              "limit": "Dragonblaze",
              "cond": "Dragonblaze"
            },
            {
              "name": "Aladdin",
              "limit": "Trick Fantasy",
              "cond": "Trick Fantasy"
            },
            {
              "name": "Jack",
              "limit": "Applause, Applause",
              "cond": "Applause, Applause"
            },
            {
              "name": "Jack Sparrow",
              "limit": "Treasure Isle",
              "cond": "Bluff"
            },
            {
              "name": "Simba",
              "limit": "King's Pride",
              "cond": "King's Pride"
            },
            {
              "name": "Tron",
              "limit": "Complete Compilement",
              "cond": "Complete Compilement"
            },
            {
              "name": "Riku",
              "limit": "Eternal Session",
              "cond": "Eternal Session"
            },
            {
              "name": "Sora",
              "limit": "Trinity Limit",
              "cond": "Trinity Limit"
            },
            {
              "name": "Peter Pan",
              "limit": "Never Land",
              "cond": "Summon Peter Pan"
            },
            {
              "name": "Chicken Little",
              "limit": "FPS Mode",
              "cond": "Summon Chicken Little"
            },
            {
              "name": "Stitch",
              "limit": "Ohana",
              "cond": "Summon Stitch"
            },
            {
              "name": "\"Valor\" Genie",
              "limit": "Sonic Rave",
              "cond": "Summon Genie, shift to \"Valor\" Genie (select Drive? in the command menu), and use Sonic"
            },
            {
              "name": "\"Wisdom\" Genie",
              "limit": "Strike Raid",
              "cond": "Summon Genie, change \"Wisdom\" Genie (select Drive? in the command menu), and use Strike"
            },
            {
              "name": "\"Master\" Genie",
              "limit": "Final Arcana",
              "cond": "Summon Genie, change \"Master\" Genie (select Drive? in the command menu), and use Arcana"
            },
            {
              "name": "\"Final\" Genie",
              "limit": "Infinity",
              "cond": "Summon Genie, change \"Final\" Genie (select Drive? in the command menu), and use Infinity"
            }
          ]
        }
      ]
    }
  ],
  "autoChecks": [
    {
      "from": "gummim",
      "check": "s",
      "to": "blueprints",
      "map": {
        "Asteroid Sweep 2": "Highwind α",
        "Stardust Sweep 2": "PuPu",
        "Phantom Storm 2": "Tonberry",
        "Splash Island 2": "Moogle",
        "Floating Island 2": "Mandragora",
        "Ancient Highway 2": "Chocobo",
        "Broken Highway 2": "Cactuar",
        "Sunlight Storm 2": "Cait Sith",
        "Assault of the Dreadnought 1": "Mushroom",
        "Assault of the Dreadnought 2": "Fenrir"
      }
    }
  ]
};
