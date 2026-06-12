/* =====================================================================
   KINGDOM HEARTS Final Mix — completion checklist data + tracker config
   Extracted from xenodusk's "KINGDOM HEARTS Final Mix Checklist"
   spreadsheet (v1.03, July 22, 2024).
   Consumed by js/kh-tracker.js (generic engine). Item order is
   load-bearing: saved progress is keyed by index.
   ===================================================================== */
var TRACKER_GAME = {
  "id": "kh1",
  "storeKey": "kh1_progress_v1",
  "charKey": null,
  "chars": [],
  "trophyAuto": {
    "Searcher": "reports",
    "Professor": "characters",
    "Top Dog": "dalmatians",
    "Best Friend": "trinities",
    "Mini-Game Maniac": "minigames",
    "Synthesis Master": "recipes",
    "Blade Master": "keyblades",
    "Master Magician": "staves",
    "Master Defender": "shields"
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
              "name": "Proud Player 1",
              "desc": "Clear Final Mix on Proud."
            },
            {
              "rarity": "Silver",
              "name": "Final Mix Master 1",
              "desc": "Clear Final Mix."
            },
            {
              "rarity": "Bronze",
              "name": "Novice Player 1",
              "desc": "Clear Final Mix on Beginner."
            },
            {
              "rarity": "Silver",
              "name": "Unchanging Armor",
              "desc": "Clear the game without changing equipment."
            },
            {
              "rarity": "Silver",
              "name": "Undefeated",
              "desc": "Clear the game without using a continue."
            },
            {
              "rarity": "Gold",
              "name": "Speedster",
              "desc": "Defeat the World of Chaos in the End of the World within 15 hours."
            },
            {
              "rarity": "Bronze",
              "name": "He Who Doesn't Exist",
              "desc": "Defeat the Mysterious Man in Hollow Bastion."
            },
            {
              "rarity": "Bronze",
              "name": "The Cloaked Shadow",
              "desc": "Defeat the Phantom at the Clock Tower."
            },
            {
              "rarity": "Bronze",
              "name": "The Sandy Blade",
              "desc": "Defeat Kurt Zisa in Agrabah."
            },
            {
              "rarity": "Bronze",
              "name": "Novice Hero",
              "desc": "Win the Phil Cup."
            },
            {
              "rarity": "Bronze",
              "name": "Artisan Hero",
              "desc": "Win the Pegasus Cup."
            },
            {
              "rarity": "Bronze",
              "name": "Hero of the Coliseum",
              "desc": "Win the Hercules Cup."
            },
            {
              "rarity": "Bronze",
              "name": "Coliseum Champion",
              "desc": "Win the Hades Cup."
            },
            {
              "rarity": "Bronze",
              "name": "The Frost Giant",
              "desc": "Defeat the Ice Titan in the Gold Match at Olympus Coliseum."
            },
            {
              "rarity": "Bronze",
              "name": "One-Winged-Angel",
              "desc": "Defeat Sephiroth in the Platinum Match at Olympus Coliseum."
            },
            {
              "rarity": "Bronze",
              "name": "Supreme Soloist",
              "desc": "Complete any solo challenge."
            },
            {
              "rarity": "Bronze",
              "name": "Time Attacker",
              "desc": "Complete any time trial challenge."
            },
            {
              "rarity": "Silver",
              "name": "Level Master",
              "desc": "Get Sora to level 100."
            },
            {
              "rarity": "Bronze",
              "name": "Treasure Hunter",
              "desc": "Open 100 treasure chests."
            },
            {
              "rarity": "Bronze",
              "name": "From Rags to Riches",
              "desc": "Obtain over 10,000 Munny."
            },
            {
              "rarity": "Bronze",
              "name": "Heartless Hunter",
              "desc": "Defeat over 2,000 Heartless."
            },
            {
              "rarity": "Bronze",
              "name": "Where the Bells Toll",
              "desc": "Seal the keyhole in Traverse Town."
            },
            {
              "rarity": "Bronze",
              "name": "The Rabbit Hole",
              "desc": "Seal the keyhole in Wonderland."
            },
            {
              "rarity": "Bronze",
              "name": "Junior Hero",
              "desc": "Seal the keyhole in Olympus Coliseum."
            },
            {
              "rarity": "Bronze",
              "name": "Member of the Tribe",
              "desc": "Seal the keyhole in Deep Jungle."
            },
            {
              "rarity": "Bronze",
              "name": "Magic Lamp",
              "desc": "Seal the keyhole in Agrabah."
            },
            {
              "rarity": "Bronze",
              "name": "Honest Soul",
              "desc": "Escape from Monstro."
            },
            {
              "rarity": "Bronze",
              "name": "Master of the Seas",
              "desc": "Seal the keyhole in Atlantica."
            },
            {
              "rarity": "Bronze",
              "name": "Pumpkin Prince",
              "desc": "Seal the keyhole in Halloween Town."
            },
            {
              "rarity": "Bronze",
              "name": "Pixie Dust",
              "desc": "Seal the keyhole in Neverland."
            },
            {
              "rarity": "Bronze",
              "name": "End of the World",
              "desc": "Seal the keyhole in Hollow Bastion."
            },
            {
              "rarity": "Bronze",
              "name": "Pooh's Friend",
              "desc": "Seal the keyhole in 100 Acre Wood."
            },
            {
              "rarity": "Bronze",
              "name": "Record Keeper",
              "desc": "Collect all Jiminy's Journal entries."
            },
            {
              "rarity": "Bronze",
              "name": "Storyteller",
              "desc": "Collect all Story entries in Jiminy's Journal."
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
              "name": "Top Dog",
              "desc": "Collect all 101 Dalmatian entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Best Friend",
              "desc": "Collect all Trinity List entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Mini-Game Maniac",
              "desc": "Collect all Mini-game entries in Jiminy's Journal."
            },
            {
              "rarity": "Bronze",
              "name": "Synthesis Master",
              "desc": "Synthesize all items."
            },
            {
              "rarity": "Bronze",
              "name": "First Synthesis",
              "desc": "Synthesize an item for the first time."
            },
            {
              "rarity": "Bronze",
              "name": "Synthesis Novice",
              "desc": "Synthesize 3 types of items."
            },
            {
              "rarity": "Bronze",
              "name": "Synthesis Amateur",
              "desc": "Synthesize 15 types of items."
            },
            {
              "rarity": "Bronze",
              "name": "Synthesis Vet",
              "desc": "Synthesize 30 types of items."
            },
            {
              "rarity": "Bronze",
              "name": "Gummi Ship Collector",
              "desc": "Obtain 30 or more gummi ship blueprints."
            },
            {
              "rarity": "Bronze",
              "name": "Flying Ace",
              "desc": "Shoot down over 2,500 enemies with your gummi ship."
            },
            {
              "rarity": "Bronze",
              "name": "Customizer",
              "desc": "Modify a gummi ship and update the data."
            },
            {
              "rarity": "Bronze",
              "name": "Top Gun",
              "desc": "Clear all gummi ship routes."
            },
            {
              "rarity": "Bronze",
              "name": "Test Pilot",
              "desc": "Clear gummi ship mission 1."
            },
            {
              "rarity": "Bronze",
              "name": "Veteran Pilot",
              "desc": "Clear gummi ship mission 2."
            },
            {
              "rarity": "Bronze",
              "name": "Ace Pilot",
              "desc": "Clear gummi ship mission 3."
            },
            {
              "rarity": "Bronze",
              "name": "Oathkeeper",
              "desc": "Obtain the Oathkeeper Keyblade."
            },
            {
              "rarity": "Bronze",
              "name": "Blade Master",
              "desc": "Obtain all Keyblades."
            },
            {
              "rarity": "Bronze",
              "name": "Master Magician",
              "desc": "Obtain all staves."
            },
            {
              "rarity": "Bronze",
              "name": "Master Defender",
              "desc": "Obtain all shields."
            }
          ]
        }
      ]
    },
    {
      "id": "journal",
      "sections": [
        {
          "id": "reports",
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
              "name": "Ansem Report 1",
              "how": "Obtained during the main story (in Agrabah)."
            },
            {
              "name": "Ansem Report 2",
              "how": "After sealing the keyhole in Hollow Bastion, return to the Library and talk to Aerith."
            },
            {
              "name": "Ansem Report 3",
              "how": "Obtained during the main story (in Atlantica)."
            },
            {
              "name": "Ansem Report 4",
              "how": "After sealing the keyhole in Hollow Bastion, return to the Library and talk to Aerith."
            },
            {
              "name": "Ansem Report 5",
              "how": "Obtained during the main story (in Hollow Bastion)."
            },
            {
              "name": "Ansem Report 6",
              "how": "After sealing the keyhole in Hollow Bastion, return to the Library and talk to Aerith."
            },
            {
              "name": "Ansem Report 7",
              "how": "Obtained during the main story (in Halloween Town)."
            },
            {
              "name": "Ansem Report 8",
              "how": "Obtained after defeating Hades in the Hades Cup."
            },
            {
              "name": "Ansem Report 9",
              "how": "Obtained during the main story (in Neverland)."
            },
            {
              "name": "Ansem Report 10",
              "how": "After sealing the keyhole in Hollow Bastion, return to the Library and talk to Aerith."
            },
            {
              "name": "Ansem Report 11",
              "how": "Obtained by defeating Kurt Zisa in Agrabah. Guide recommended."
            },
            {
              "name": "Ansem Report 12",
              "how": "Obtained by defeating Sephiroth in the Platinum Match at Olympus Coliseum. See Coliseum."
            },
            {
              "name": "Ansem Report 13",
              "how": "Obtained by defeating the Mysterious Man in Hollow Bastion. Guide recommended."
            }
          ]
        },
        {
          "id": "characters",
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
              "g": "Characters 1"
            },
            {
              "name": "Riku",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Kairi",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Mickey Mouse",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Minnie Mouse",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Daisy Duck",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Pluto",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Chip",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Dale",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Huey",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Dewey",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Louie",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Merlin",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Fairy Godmother",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Pongo",
              "how": "Return at least 12 puppies.",
              "g": "Characters 1"
            },
            {
              "name": "Perdita",
              "how": "Return at least 12 puppies.",
              "g": "Characters 1"
            },
            {
              "name": "99 Puppies",
              "how": "Return at least 12 puppies.",
              "g": "Characters 1"
            },
            {
              "name": "Brooms",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Leon",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Yuffie",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Aerith",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Cloud",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Sephiroth",
              "how": "Defeat Sephiroth in the Platinum Match at Olympus Coliseum. Guide recommended.",
              "g": "Characters 1"
            },
            {
              "name": "Cid",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Tidus",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Selphie",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Wakka",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Moogles",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Snow White",
              "how": "Talk with her in the Castle Chapel after completing the story of Hollow Bastion.",
              "g": "Characters 1"
            },
            {
              "name": "Cinderella",
              "how": "Talk with her in the Castle Chapel after completing the story of Hollow Bastion.",
              "g": "Characters 1"
            },
            {
              "name": "Aurora",
              "how": "Talk with her in the Castle Chapel after completing the story of Hollow Bastion.",
              "g": "Characters 1"
            },
            {
              "name": "Belle",
              "how": "Talk with her in the Library after completing the story of Hollow Bastion.",
              "g": "Characters 1"
            },
            {
              "name": "Beast",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Maleficent",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Dragon",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "Ansem",
              "how": "Obtained during the story.",
              "g": "Characters 1"
            },
            {
              "name": "?",
              "how": "Defeat the Mysterious Man in Hollow Bastion. Guide recommended.",
              "g": "Characters 1"
            },
            {
              "name": "Dumbo",
              "how": "Get the Watergleam Summon Gem from Monstro's Mouth.",
              "g": "Characters 2"
            },
            {
              "name": "Bambi",
              "how": "Get the Naturespark Summon Gem from 100 Acre Wood.",
              "g": "Characters 2"
            },
            {
              "name": "Mushu",
              "how": "Get the Fireglow Summon Gem after defeating the Dragon in Hollow Bastion, 1st Visit.",
              "g": "Characters 2"
            },
            {
              "name": "Simba",
              "how": "Get the Earthshine Summon Gem from Leon during Traverse Town, 2nd Visit.",
              "g": "Characters 2"
            },
            {
              "name": "Alice",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Queen of Hearts",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Cards (Hearts)",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Cards (Spades)",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "White Rabbit",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Cheshire Cat",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Doorknob",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Hercules",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Philoctetes",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Hades",
              "how": "Complete the Hades Cup.",
              "g": "Characters 2"
            },
            {
              "name": "Cerberus",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Rock Titan",
              "how": "Complete the Hades Cup.",
              "g": "Characters 2"
            },
            {
              "name": "Ice Titan",
              "how": "Complete the Gold Match.",
              "g": "Characters 2"
            },
            {
              "name": "Tarzan",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Jane Porter",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Clayton",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Terk",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Kerchak",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Kala",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Sabor",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Aladdin",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Genie",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Jasmine",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Jafar",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Jafar-Genie",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Abu",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Iago",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Carpet",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Pinocchio",
              "how": "Talk to him in Geppetto's House in Traverse Town after leaving Monstro.",
              "g": "Characters 2"
            },
            {
              "name": "Geppetto",
              "how": "Talk to him in Geppetto's House in Traverse Town after leaving Monstro.",
              "g": "Characters 2"
            },
            {
              "name": "Jiminy Cricket",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Ariel",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "King Triton",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Ursula",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Sebastian",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Flounder",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Jetsam",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Flotsam",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Jack Skellington",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Sally",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Oogie Boogie",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Dr. Finkelstein",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Zero",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Lock",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Shock",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Barrel",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "The Mayor",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Peter Pan",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Tinker Bell",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Wendy",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Captain Hook",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Mr. Smee",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "The Crocodile",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Winnie the Pooh",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Piglet",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Tigger",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Owl",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Rabbit",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Eeyore",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Roo",
              "how": "Obtained during the story.",
              "g": "Characters 2"
            },
            {
              "name": "Shadow",
              "how": "Obtained during the story.",
              "g": "The Heartless"
            },
            {
              "name": "Gigas Shadow",
              "how": "Defeat at least one of this Heartess. Location: Wonderland.",
              "g": "The Heartless"
            },
            {
              "name": "Soldier",
              "how": "Defeat at least one of this Heartess. Location: Wonderland. Traverse Town, Wonderland, Agrabah and more.",
              "g": "The Heartless"
            },
            {
              "name": "Stealth Soldier",
              "how": "Defeat at least one of this Heartess. Location: Hollow Bastion.",
              "g": "The Heartless"
            },
            {
              "name": "Large Body",
              "how": "Defeat at least one of this Heartess. Location: Wonderland, Agrabah, Monstro and more.",
              "g": "The Heartless"
            },
            {
              "name": "Red Nocturne",
              "how": "Defeat at least one of this Heartess. Location: Wonderland, Traverse Town and more.",
              "g": "The Heartless"
            },
            {
              "name": "Blue Rhapsody",
              "how": "Defeat at least one of this Heartess. Location: Wonderland, Traverse Town and more.",
              "g": "The Heartless"
            },
            {
              "name": "Yellow Opera",
              "how": "Defeat at least one of this Heartess. Location: Agrabah, Traverse Town and more.",
              "g": "The Heartless"
            },
            {
              "name": "Green Requiem",
              "how": "Defeat at least one of this Heartess. Location: Agrabah, Traverse Town and more.",
              "g": "The Heartless"
            },
            {
              "name": "Black Ballade",
              "how": "Defeat at least one of this Heartess. Location: Deep Jungle.",
              "g": "The Heartless"
            },
            {
              "name": "Powerwild",
              "how": "Defeat at least one of this Heartess. Location: Deep Jungle.",
              "g": "The Heartless"
            },
            {
              "name": "Bouncywild",
              "how": "Defeat at least one of this Heartess. Location: Deep Jungle.",
              "g": "The Heartless"
            },
            {
              "name": "Sniperwild",
              "how": "Defeat at least one of this Heartess. Location: Traverse Town.",
              "g": "The Heartless"
            },
            {
              "name": "Air Soldier",
              "how": "Defeat at least one of this Heartess. Location: Traverse Town, Hollow Bastion and more.",
              "g": "The Heartless"
            },
            {
              "name": "Bandit",
              "how": "Defeat at least one of this Heartess. Location: Agrabah.",
              "g": "The Heartless"
            },
            {
              "name": "Fat Bandit",
              "how": "Defeat at least one of this Heartess. Location: Agrabah.",
              "g": "The Heartless"
            },
            {
              "name": "Pot Spider",
              "how": "Defeat at least one of this Heartess. Location: Agrabah.",
              "g": "The Heartless"
            },
            {
              "name": "Barrel Spider",
              "how": "Defeat at least one of this Heartess. Location: Monstro and Neverland.",
              "g": "The Heartless"
            },
            {
              "name": "Pot Scorpion",
              "how": "Defeat at least one of this Heartess. Location: Agrabah.",
              "g": "The Heartless"
            },
            {
              "name": "Search Ghost",
              "how": "Defeat at least one of this Heartess. Location: Monstro, Halloween Town and more.",
              "g": "The Heartless"
            },
            {
              "name": "Grand Ghost",
              "how": "Defeat at least one of this Heartess. Location: Monstro.",
              "g": "The Heartless"
            },
            {
              "name": "Sea Neon",
              "how": "Defeat at least one of this Heartess. Location: Atlantica.",
              "g": "The Heartless"
            },
            {
              "name": "Sheltering Zone",
              "how": "Defeat at least one of this Heartess. Location: Atlantica.",
              "g": "The Heartless"
            },
            {
              "name": "Screwdiver",
              "how": "Defeat at least one of this Heartess. Location: Atlantica.",
              "g": "The Heartless"
            },
            {
              "name": "Aquatank",
              "how": "Defeat at least one of this Heartess. Location: Atlantica.",
              "g": "The Heartless"
            },
            {
              "name": "Wight Knight",
              "how": "Defeat at least one of this Heartess. Location: Halloween Town.",
              "g": "The Heartless"
            },
            {
              "name": "Gargoyle",
              "how": "Defeat at least one of this Heartess. Location: Halloween Town.",
              "g": "The Heartless"
            },
            {
              "name": "Chimera",
              "how": "Defeat at least one of this Heartess. Location: Halloween Town.",
              "g": "The Heartless"
            },
            {
              "name": "Pirate",
              "how": "Defeat at least one of this Heartess. Location: Neverland.",
              "g": "The Heartless"
            },
            {
              "name": "Air Pirate",
              "how": "Defeat at least one of this Heartess. Location: Neverland.",
              "g": "The Heartless"
            },
            {
              "name": "Battleship",
              "how": "Defeat at least one of this Heartess. Location: Neverland.",
              "g": "The Heartless"
            },
            {
              "name": "Jet Balloon",
              "how": "Defeat at least one of this Heartess. Location: Neverland.",
              "g": "The Heartless"
            },
            {
              "name": "Darkball",
              "how": "Defeat at least one of this Heartess. Location: Hollow Bastion, End of the World and more.",
              "g": "The Heartless"
            },
            {
              "name": "Defender",
              "how": "Defeat at least one of this Heartess. Location: Hollow Bastion, Traverse Town and more.",
              "g": "The Heartless"
            },
            {
              "name": "Wyvern",
              "how": "Defeat at least one of this Heartess. Location: Hollow Bastion, Traverse Town and more.",
              "g": "The Heartless"
            },
            {
              "name": "Wizard",
              "how": "Defeat at least one of this Heartess. Location: Hollow Bastion, Traverse Town and more.",
              "g": "The Heartless"
            },
            {
              "name": "Behemoth",
              "how": "Defeat at least one of this Heartess. Location: Hollow Bastion.",
              "g": "The Heartless"
            },
            {
              "name": "Destroyed Behemoth",
              "how": "Defeat at least one of this Heartess. Location: Hades Cup.",
              "g": "The Heartless"
            },
            {
              "name": "Arch Behemoth",
              "how": "Defeat at least one of this Heartess. Location: End of the World.",
              "g": "The Heartless"
            },
            {
              "name": "Invisible",
              "how": "Defeat at least one of this Heartess. Location: End of the World.",
              "g": "The Heartless"
            },
            {
              "name": "Angel Star",
              "how": "Defeat at least one of this Heartess. Location: End of the World.",
              "g": "The Heartless"
            },
            {
              "name": "Neoshadow",
              "how": "Defeat at least one of this Heartess. Location: End of the World.",
              "g": "The Heartless"
            },
            {
              "name": "White Mushroom",
              "how": "Defeat at least one of this Heartess. Location: All worlds.",
              "g": "The Heartless"
            },
            {
              "name": "Black Fungus",
              "how": "Defeat at least one of this Heartess. Location: Halloween Town, Agrabah and more.",
              "g": "The Heartless"
            },
            {
              "name": "Rare Truffle",
              "how": "Defeat at least one of this Heartess. Location: Halloween Town, Monstro and more.",
              "g": "The Heartless"
            },
            {
              "name": "Pink Agaricus",
              "how": "Defeat at least one of this Heartess. Location: Deep Jungle and Atlantica.",
              "g": "The Heartless"
            },
            {
              "name": "Darkside",
              "how": "Defeat at least one of this Heartess. Location: Destiny Islands and End of the World.",
              "g": "The Heartless"
            },
            {
              "name": "Guard Armor",
              "how": "Obtained during the story.",
              "g": "The Heartless"
            },
            {
              "name": "Red Armor",
              "how": "Defeat at least one of this Heartess. Location: Phil Cup",
              "g": "The Heartless"
            },
            {
              "name": "Opposite Armor",
              "how": "Obtained during the story.",
              "g": "The Heartless"
            },
            {
              "name": "Trickmaster",
              "how": "Obtained during the story.",
              "g": "The Heartless"
            },
            {
              "name": "Stealth Sneak",
              "how": "Obtained during the story.",
              "g": "The Heartless"
            },
            {
              "name": "Sneak Army",
              "how": "Defeat at least one of this Heartess. Location: Hades Cup.",
              "g": "The Heartless"
            },
            {
              "name": "Pot Centipede",
              "how": "Obtained during the story.",
              "g": "The Heartless"
            },
            {
              "name": "Parasite Cage",
              "how": "Obtained during the story.",
              "g": "The Heartless"
            },
            {
              "name": "Kurt Zisa",
              "how": "Defeat Kurt Zisa in Agrabah. Guide recommended.",
              "g": "The Heartless"
            },
            {
              "name": "Phantom",
              "how": "Defeat the Phantom in Neverland. Guide recommended.",
              "g": "The Heartless"
            }
          ]
        },
        {
          "id": "dalmatians",
          "cols": [
            {
              "k": "num",
              "name": true
            },
            {
              "k": "world"
            },
            {
              "k": "area"
            },
            {
              "k": "loc"
            }
          ],
          "items": [
            {
              "num": "1 - 2 - 3",
              "world": "Traverse Town",
              "area": "Mystical House",
              "loc": "On a stone across the lake outside Merlin's House. Requires Glide."
            },
            {
              "num": "4 - 5 - 6",
              "world": "Traverse Town",
              "area": "Alleyway",
              "loc": "Examine Red Trinity 1 in the First District to reach this chest."
            },
            {
              "num": "7 - 8 - 9",
              "world": "Traverse Town",
              "area": "Item Workshop",
              "loc": "On a table."
            },
            {
              "num": "10 - 11 - 12",
              "world": "Traverse Town",
              "area": "Waterway",
              "loc": "Right before taking the stairs to Merlin's Study."
            },
            {
              "num": "13 - 14 - 15",
              "world": "Wonderland",
              "area": "Queen's Castle",
              "loc": "On a ledge accessible from Lotus Forest."
            },
            {
              "num": "16 - 17 - 18",
              "world": "Wonderland",
              "area": "Lotus Forest",
              "loc": "On a lillypad near the center of the area."
            },
            {
              "num": "19 - 20 - 21",
              "world": "Wonderland",
              "area": "Tea Party Garden",
              "loc": "On a hedge. To get there, go through the passage that is high above in a corner of the Lotus Forest, only reachable with Glide."
            },
            {
              "num": "22 - 23 - 24",
              "world": "Olympus Coliseum",
              "area": "Gates",
              "loc": "Examine Blue Trinity 8 in front of the right gladiator statue."
            },
            {
              "num": "25 - 26 - 27",
              "world": "Deep Jungle",
              "area": "Hippos' Lagoon",
              "loc": "On the far wall of the area."
            },
            {
              "num": "28 - 29 - 30",
              "world": "Deep Jungle",
              "area": "Vines 2",
              "loc": "In the center of the area."
            },
            {
              "num": "31 - 32 - 33",
              "world": "Deep Jungle",
              "area": "Waterfall Cavern",
              "loc": "On a ledge below a wall covered in vines."
            },
            {
              "num": "34 - 35 - 36",
              "world": "Deep Jungle",
              "area": "Camp",
              "loc": "Examine Blue Trinity 9 near the lab table."
            },
            {
              "num": "37 - 38 - 39",
              "world": "Agrabah",
              "area": "Cave of Wonders: Treasure Room",
              "loc": "On a ledge near the passage to Bottomless Hall."
            },
            {
              "num": "40 - 41 - 42",
              "world": "Halloween Town",
              "area": "Oogie's Manor",
              "loc": "In an alcove near the top of the manor after activating the switch in the Evil Playroom first. After completing this world's story, it will appear in a hole in the center of Manor Ruins."
            },
            {
              "num": "43 - 44 - 45",
              "world": "Neverland",
              "area": "Pirate Ship",
              "loc": "Examine White Trinity 9 behind the ship's wheel."
            },
            {
              "num": "46 - 47 - 48",
              "world": "Agrabah",
              "area": "Cave of Wonders: Hidden Room",
              "loc": "Examine Yellow Trinity 3 and interact with the statue."
            },
            {
              "num": "49 - 50 - 51",
              "world": "Agrabah",
              "area": "Cave of Wonders: Entrance",
              "loc": "On top of a pillar near the passage to the Hall. Requires High Jump."
            },
            {
              "num": "52 - 53 - 54",
              "world": "Agrabah",
              "area": "Palace Gates",
              "loc": "On the highest ledge in the southwest corner. Requires High Jump."
            },
            {
              "num": "55 - 56 - 57",
              "world": "Monstro",
              "area": "Chamber 3",
              "loc": "On a platform above the passage to Chamber 2."
            },
            {
              "num": "58 - 59 - 60",
              "world": "Wonderland",
              "area": "Lotus Forest",
              "loc": "Cast Thunder on the pink flowers in the alcove accessible through the painting in Bizarre Room (Sideways)."
            },
            {
              "num": "61 - 62 - 63",
              "world": "Hollow Bastion",
              "area": "Grand Hall",
              "loc": "On a ledge in the left side of the area."
            },
            {
              "num": "64 - 65 - 66",
              "world": "Halloween Town",
              "area": "Cemetery",
              "loc": "In the corner, in front of a tombstone."
            },
            {
              "num": "67 - 68 - 69",
              "world": "Halloween Town",
              "area": "Moonlight Hill",
              "loc": "Examine White Trinity 8 near the hill."
            },
            {
              "num": "70 - 71 - 72",
              "world": "Halloween Town",
              "area": "Guillotine Square",
              "loc": "Inside the mouth of a pumpkin-shaped decoration. Requires Glide."
            },
            {
              "num": "73 - 74 - 75",
              "world": "Monstro",
              "area": "Mouth",
              "loc": "On a high platform to the west. Requires High Jump."
            },
            {
              "num": "76 - 77 - 78",
              "world": "Monstro",
              "area": "Chamber 6",
              "loc": "At ground level, in front of the passage to Chamber 5."
            },
            {
              "num": "79 - 80 - 81",
              "world": "Monstro",
              "area": "Chamber 5",
              "loc": "On a ledge on top of a barrel."
            },
            {
              "num": "82 - 83 - 84",
              "world": "Neverland",
              "area": "Hold",
              "loc": "On the upper rafters to the east. Requires Glide."
            },
            {
              "num": "85 - 86 - 87",
              "world": "Neverland",
              "area": "Hold",
              "loc": "Green chest after examining Yellow Trinity 4 in the Hold."
            },
            {
              "num": "88 - 89 - 90",
              "world": "Neverland",
              "area": "Captain's Cabin",
              "loc": "Green chest next to the bed."
            },
            {
              "num": "91 - 92 - 93",
              "world": "Hollow Bastion",
              "area": "Rising Falls",
              "loc": "On a floating platform."
            },
            {
              "num": "94 - 95 - 96",
              "world": "Hollow Bastion",
              "area": "Castle Gates",
              "loc": "Cast Gravity on the floating chest in the far corner. Requires Glide."
            },
            {
              "num": "97 - 98 - 99",
              "world": "Hollow Bastion",
              "area": "Lift Stop",
              "loc": "Cast Gravity on the floating chest. You can get here from a passage in Library."
            }
          ]
        }
      ]
    },
    {
      "id": "trinities",
      "sections": [
        {
          "id": "trinities",
          "cols": [
            {
              "k": "num",
              "name": true
            },
            {
              "k": "world"
            },
            {
              "k": "area"
            },
            {
              "k": "where"
            },
            {
              "k": "reward"
            }
          ],
          "items": [
            {
              "num": "1",
              "world": "Traverse Town",
              "area": "First District",
              "where": "Near the big door that takes you back to the World Map.",
              "reward": "120 munny",
              "g": "Trinity Jump"
            },
            {
              "num": "2",
              "world": "Traverse Town",
              "area": "First District",
              "where": "Near the café and Huey, Dewey, and Louie's Item Shop.",
              "reward": "Access to a chest with a Postcard",
              "g": "Trinity Jump"
            },
            {
              "num": "3",
              "world": "Traverse Town",
              "area": "Third District",
              "where": "In the hallway behind the Lady & the Tramp fountain, in the corner.",
              "reward": "60 munny, Camping Set",
              "g": "Trinity Jump"
            },
            {
              "num": "4",
              "world": "Traverse Town",
              "area": "Magician's Study",
              "where": "Near the save point.",
              "reward": "50 Munny, Mega-Ether",
              "g": "Trinity Jump"
            },
            {
              "num": "5",
              "world": "Wonderland",
              "area": "Lotus Forest",
              "where": "Near the yellow flowers. Use the lillypads to reach the hidden area.",
              "reward": "MP orbs, Camping Set",
              "g": "Trinity Jump"
            },
            {
              "num": "6",
              "world": "Wonderland",
              "area": "Lotus Forest",
              "where": "Near the yellow flower and mushrooms on the east side of the map.",
              "reward": "MP orbs, Ether, Potion, Tent",
              "g": "Trinity Jump"
            },
            {
              "num": "7",
              "world": "Olympus Coliseum",
              "area": "Gates",
              "where": "In front of the left gladiator statue.",
              "reward": "Mythril Shard",
              "g": "Trinity Jump"
            },
            {
              "num": "8",
              "world": "Olympus Coliseum",
              "area": "Gates",
              "where": "In front of the right gladiator statue.",
              "reward": "Dalmatians (22-24)",
              "g": "Trinity Jump"
            },
            {
              "num": "9",
              "world": "Deep Jungle",
              "area": "Camp",
              "where": "Near the lab table, close to the passage to Hippo Lagoon.",
              "reward": "Dalmatians (34-36)",
              "g": "Trinity Jump"
            },
            {
              "num": "10",
              "world": "Deep Jungle",
              "area": "Climbing Trees",
              "where": "Next to the passage to Tree House.",
              "reward": "Thundara-G",
              "g": "Trinity Jump"
            },
            {
              "num": "11",
              "world": "Agrabah",
              "area": "Bazaar",
              "where": "In the center of an area with many pots.",
              "reward": "200 Munny, Mega-Ether",
              "g": "Trinity Jump"
            },
            {
              "num": "12",
              "world": "Agrabah",
              "area": "Cave of Wonders: Silent Chamber",
              "where": "In the center of the area, next to the passage to the Hall.",
              "reward": "Thundara-G",
              "g": "Trinity Jump"
            },
            {
              "num": "13",
              "world": "Monstro",
              "area": "Mouth",
              "where": "On a wooden platform near the front of the mouth after completing the world story.",
              "reward": "50 Munny, Potion x2, Cottage",
              "g": "Trinity Jump"
            },
            {
              "num": "14",
              "world": "Monstro",
              "area": "Chamber 5",
              "where": "Next to the passage to Chamber 6.",
              "reward": "333 Munny, Cottage",
              "g": "Trinity Jump"
            },
            {
              "num": "15",
              "world": "Monstro",
              "area": "Throat",
              "where": "In the center of the lower area.",
              "reward": "100 Munny, Mythril Shard",
              "g": "Trinity Jump"
            },
            {
              "num": "16",
              "world": "Hollow Bastion",
              "area": "Waterway, Dungeon",
              "where": "Near the center of the room.",
              "reward": "Cottage, Mega-Potion, Mega-Ether, HP Orbs",
              "g": "Trinity Jump"
            },
            {
              "num": "17",
              "world": "Hollow Bastion",
              "area": "Great Crest",
              "where": "In the center of the outside area, after riding the lift to the other side.",
              "reward": "Megalixir, Cottage x2, MP Orbs",
              "g": "Trinity Jump"
            },
            {
              "num": "1",
              "world": "Traverse Town",
              "area": "First District",
              "where": "On a wooden fence in the alleyway behind Huey, Dewey, and Louie's Item Shop.",
              "reward": "Dalmatians (4-6)",
              "g": "Trinity Charge"
            },
            {
              "num": "2",
              "world": "Traverse Town",
              "area": "Alleyway",
              "where": "On the metal grate blocking the waterway.",
              "reward": "Access to the Waterway",
              "g": "Trinity Charge"
            },
            {
              "num": "3",
              "world": "Traverse Town",
              "area": "Second District",
              "where": "On the wooden planks in front of the bell tower.",
              "reward": "Access to the bell tower in the Second District",
              "g": "Trinity Charge"
            },
            {
              "num": "4",
              "world": "Agrabah",
              "area": "Treasure Room",
              "where": "In front of a statue, near the save point.",
              "reward": "333 Munny, Mythril Shard",
              "g": "Trinity Charge"
            },
            {
              "num": "5",
              "world": "Halloween Town",
              "area": "Manor Ruins",
              "where": "On the stone arch on the ground (may not appear if there are certain enemies in the area).",
              "reward": "Mythril Shard",
              "g": "Trinity Charge"
            },
            {
              "num": "6",
              "world": "Hollow Bastion",
              "area": "Entrance Hall",
              "where": "On the second floor balcony, in front of the tusked stone statue.",
              "reward": "Emblem Piece",
              "g": "Trinity Charge"
            },
            {
              "num": "1",
              "world": "Traverse Town",
              "area": "First District: Accessory Shop",
              "where": "In front of the table in the center of the shop.",
              "reward": "Access to Item Workshop",
              "g": "Trinity Ladder"
            },
            {
              "num": "2",
              "world": "Wonderland",
              "area": "Bizarre Room",
              "where": "At ground level inside the furnace.",
              "reward": "Mythril Shard",
              "g": "Trinity Ladder"
            },
            {
              "num": "3",
              "world": "Wonderland",
              "area": "Rabbit Hole",
              "where": "Along the wall, near the save station.",
              "reward": "Elixir",
              "g": "Trinity Ladder"
            },
            {
              "num": "4",
              "world": "Olympus Coliseum",
              "area": "Gates",
              "where": "Along the wall to the right of the passage to the world map; between two braziers.",
              "reward": "Mythril",
              "g": "Trinity Ladder"
            },
            {
              "num": "5",
              "world": "Deep Jungle",
              "area": "Treetops",
              "where": "In the center of the area.",
              "reward": "Mythril Shard, HP orbs",
              "g": "Trinity Ladder"
            },
            {
              "num": "6",
              "world": "Agrabah",
              "area": "Storage Room",
              "where": "Near the shelving, across from the save station.",
              "reward": "AP Up",
              "g": "Trinity Ladder"
            },
            {
              "num": "7",
              "world": "Monstro",
              "area": "Mouth",
              "where": "On the top of Geppetto's Ship.",
              "reward": "Mythril Shard",
              "g": "Trinity Ladder"
            },
            {
              "num": "8",
              "world": "Neverland",
              "area": "Cabin",
              "where": "In the center of the room.",
              "reward": "Access to Captain's Cabin",
              "g": "Trinity Ladder"
            },
            {
              "num": "9",
              "world": "Hollow Bastion",
              "area": "Library",
              "where": "On the second floor, in front of the bookcase near the table and balcony.",
              "reward": "Azal Vol. 3",
              "g": "Trinity Ladder"
            },
            {
              "num": "1",
              "world": "Traverse Town",
              "area": "Mystical House",
              "where": "Near a stack of large crates, behind Merlin's house.",
              "reward": "AP Up",
              "g": "Trinity Push"
            },
            {
              "num": "2",
              "world": "Olympus Coliseum",
              "area": "Lobby",
              "where": "Next to a large pedestal.",
              "reward": "Seal the Olympus Coliseum keyhole",
              "g": "Trinity Push"
            },
            {
              "num": "3",
              "world": "Agrabah",
              "area": "Cave of Wonders: Hall",
              "where": "In front of a stone statue near the boulder path.",
              "reward": "Access to a chamber with Thundara-G and Meteor-G",
              "g": "Trinity Push"
            },
            {
              "num": "4",
              "world": "Neverland",
              "area": "Hold",
              "where": "In front of the locked door, immediately to your left after climbing the ladder.",
              "reward": "Access to room with Orichalcum, Dark Matter, Dalmatians (85-87) and an Aero upgrade",
              "g": "Trinity Push"
            },
            {
              "num": "1",
              "world": "Traverse Town",
              "area": "Waterway",
              "where": "On the stone floor, across from the mural.",
              "reward": "Orichalcum",
              "g": "Trinity Detect"
            },
            {
              "num": "2",
              "world": "Wonderland",
              "area": "Lotus Forest",
              "where": "In the center of the alcove accessible through the painting in the sideways Bizarre Room.",
              "reward": "Lady Luck",
              "g": "Trinity Detect"
            },
            {
              "num": "3",
              "world": "Olympus Coliseum",
              "area": "Gates",
              "where": "In the center of the area.",
              "reward": "Violetta",
              "g": "Trinity Detect"
            },
            {
              "num": "4",
              "world": "Deep Jungle",
              "area": "Cavern of Hearts",
              "where": "In the center of the area.",
              "reward": "Orichalcum",
              "g": "Trinity Detect"
            },
            {
              "num": "5",
              "world": "Agrabah",
              "area": "Cave of Wonders: Entrance",
              "where": "Just in front of the entrance on your left (when facing towards the Hall).",
              "reward": "Ifrit Belt",
              "g": "Trinity Detect"
            },
            {
              "num": "6",
              "world": "Monstro",
              "area": "Chamber 6",
              "where": "At ground level, in the center of the area.",
              "reward": "Dark Matter",
              "g": "Trinity Detect"
            },
            {
              "num": "7",
              "world": "Atlantica",
              "area": "Triton's Palace",
              "where": "Inside the large purple shell structure near the center of the area.",
              "reward": "Orichalcum",
              "g": "Trinity Detect"
            },
            {
              "num": "8",
              "world": "Halloween Town",
              "area": "Moonlight Hill",
              "where": "In front of the hill, near the southern pumpkin patch.",
              "reward": "Dalmatians (67-69)",
              "g": "Trinity Detect"
            },
            {
              "num": "9",
              "world": "Neverland",
              "area": "Ship",
              "where": "In front of the ship's wheel (above deck).",
              "reward": "Dalmatians (43-45)",
              "g": "Trinity Detect"
            },
            {
              "num": "10",
              "world": "Hollow Bastion",
              "area": "Rising Falls",
              "where": "In the shallow pool about halfway up the falls.",
              "reward": "Thundaga-G",
              "g": "Trinity Detect"
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
              "k": "loc"
            },
            {
              "k": "reward"
            }
          ],
          "items": [
            {
              "name": "Jungle Slider - Green Serpent",
              "loc": "Deep Jungle - Tunnel (jump into the tree trunk)",
              "reward": "Elixir"
            },
            {
              "name": "Jungle Slider - Splash Tunnel*",
              "loc": "Deep Jungle - Tunnel (jump into the tree trunk)",
              "reward": "AP Up"
            },
            {
              "name": "Jungle Slider - Jade Spiral*",
              "loc": "Deep Jungle - Tunnel (jump into the tree trunk)",
              "reward": "Dark Matter"
            },
            {
              "name": "Jungle Slider - Panic Fall*",
              "loc": "Deep Jungle - Tunnel (jump into the tree trunk)",
              "reward": "Defense Up"
            },
            {
              "name": "Jungle Slider - Shadow Cavern*",
              "loc": "Deep Jungle - Tunnel (jump into the tree trunk)",
              "reward": "Power Up"
            },
            {
              "name": "Vine Jump - Jump Course",
              "loc": "Deep Jungle - Vines"
            },
            {
              "name": "Vine Jump - Trap Course*",
              "loc": "Deep Jungle - Vines"
            },
            {
              "name": "Vine Jump - Acrobatic Course*",
              "loc": "Deep Jungle - Vines"
            },
            {
              "name": "Vine Jump - Expert Course*",
              "loc": "Deep Jungle - Vines"
            },
            {
              "name": "Pooh's Hunny Hunt",
              "loc": "Done during the 100 Acre Wood story.",
              "reward": "Naturespark Summon Gem"
            },
            {
              "name": "Block Tigger",
              "loc": "Done during the 100 Acre Wood story.",
              "reward": "Mythril Shard"
            },
            {
              "name": "Pooh's Swing",
              "loc": "Done during the 100 Acre Wood story.",
              "reward": "Stop magic upgrade"
            },
            {
              "name": "Tigger's Giant Pot",
              "loc": "Done during the 100 Acre Wood story.",
              "reward": "Mythril"
            },
            {
              "name": "Pooh's Muddy Path",
              "loc": "Done during the 100 Acre Wood story.",
              "reward": "EXP Ring"
            },
            {
              "name": "Olympus Coliseum - Phil Cup",
              "loc": "Olympus Coliseum",
              "reward": "Tech Boost"
            },
            {
              "name": "Olympus Coliseum - Pegasus Cup*",
              "loc": "Olympus Coliseum",
              "reward": "Dark Matter"
            },
            {
              "name": "Olympus Coliseum - Hercules Cup*",
              "loc": "Olympus Coliseum",
              "reward": "Gravity Break"
            },
            {
              "name": "Olympus Coliseum - Hades Cup*",
              "loc": "Olympus Coliseum",
              "reward": "Save the King"
            }
          ]
        },
        {
          "id": "coliseum",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "req"
            },
            {
              "k": "reward"
            }
          ],
          "items": [
            {
              "name": "Phil Cup (Standard)",
              "req": "Seal the keyhole in Traverse Town",
              "reward": "Gravity magic unlock (or upgrade)"
            },
            {
              "name": "Phil Cup (Solo)",
              "req": "Complete Phil Cup (Standard)",
              "reward": "Combo Plus ability"
            },
            {
              "name": "Phil Cup (Time Trial)",
              "req": "Complete Phil Cup (Solo)",
              "reward": "Tech Boost ability"
            },
            {
              "name": "Pegasus Cup (Standard)",
              "req": "Complete the story of Monstro",
              "reward": "Strike Raid ability"
            },
            {
              "name": "Pegasus Cup (Solo)",
              "req": "Complete Pegasus Cup (Standard)",
              "reward": "Orichalcum"
            },
            {
              "name": "Pegasus Cup (Time Trial)",
              "req": "Complete Pegasus Cup (Solo)",
              "reward": "Dark Matter"
            },
            {
              "name": "Hercules Cup (Standard)",
              "req": "Complete the story of Neverland and Halloween Town",
              "reward": "Herc's Shield Trinity Push (yellow trinity ability)"
            },
            {
              "name": "Hercules Cup (Solo)",
              "req": "Complete Hercules Cup (Standard)",
              "reward": "Critical Plus ability"
            },
            {
              "name": "Hercules Cup (Time Trial)",
              "req": "Complete Hercules Cup (Solo)",
              "reward": "Gravity Break ability"
            },
            {
              "name": "Hades Cup (Standard)",
              "req": "Seal the final keyhole in Hollow Bastion Complete all previous standard cups",
              "reward": "Trinity Limit ability"
            },
            {
              "name": "Hades Cup (Solo)",
              "req": "Complete Hades Cup (Standard)",
              "reward": "Save the Queen staff"
            },
            {
              "name": "Hades Cup (Time Trial)",
              "req": "Complete Hades Cup (Standard)",
              "reward": "Save the King shield"
            },
            {
              "name": "Gold Match",
              "req": "Complete Hades Cup (Standard)",
              "reward": "Diamond Dust keyblade"
            },
            {
              "name": "Platinum Match",
              "req": "Seal the final keyhole in Hollow Bastion",
              "reward": "One-Winged Angel keyblade Ansem Report 12"
            }
          ]
        }
      ]
    },
    {
      "id": "synthesis",
      "sections": [
        {
          "id": "recipes",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "m1"
            },
            {
              "k": "m2"
            },
            {
              "k": "m3"
            },
            {
              "k": "m4"
            },
            {
              "k": "m5"
            }
          ],
          "items": [
            {
              "name": "Mega-Potion",
              "m1": "Spirit Shard x1",
              "m2": "Power Shard x1",
              "m3": "Mythril Shard x4",
              "g": "Synthesis Set I (unlocked by default)"
            },
            {
              "name": "Cottage",
              "m1": "Lucid Shard x1",
              "m2": "Bright Shard x1",
              "g": "Synthesis Set I (unlocked by default)"
            },
            {
              "name": "Energy Bangle",
              "m1": "Spirit Shard x2",
              "m2": "Bright Shard x1",
              "g": "Synthesis Set I (unlocked by default)"
            },
            {
              "name": "Power Chain",
              "m1": "Power Shard x2",
              "m2": "Lucid Shard x1",
              "g": "Synthesis Set I (unlocked by default)"
            },
            {
              "name": "Magic Armlet",
              "m1": "Blaze Shard x3",
              "m2": "Frost Shard x3",
              "m3": "Thunder Shard x3",
              "g": "Synthesis Set I (unlocked by default)"
            },
            {
              "name": "EXP Earring",
              "m1": "Fury Stone x1",
              "m2": "Power Stone x1",
              "m3": "Mythril Stone x1",
              "m4": "Serenity Power x1",
              "m5": "Dark Matter x3",
              "g": "Synthesis Set I (unlocked by default)"
            },
            {
              "name": "Mega-Ether",
              "m1": "Blaze Shard x1",
              "m2": "Frost Shard x1",
              "m3": "Thunder Shard x1",
              "m4": "Mythril x2",
              "g": "Synthesis Set II (unlocked after synthesizing 3 items)"
            },
            {
              "name": "Guard Earring",
              "m1": "Bright Shard x3",
              "m2": "Frost Shard x1",
              "m3": "Mythril Shard x3",
              "g": "Synthesis Set II (unlocked after synthesizing 3 items)"
            },
            {
              "name": "Angel Bangle",
              "m1": "Thunder Shard x3",
              "m2": "Bright Gem x1",
              "g": "Synthesis Set II (unlocked after synthesizing 3 items)"
            },
            {
              "name": "Golem Chain",
              "m1": "Blaze Shard x3",
              "m2": "Spirit Gem x1",
              "g": "Synthesis Set II (unlocked after synthesizing 3 items)"
            },
            {
              "name": "Rune Armlet",
              "m1": "Blaze Gem x3",
              "m2": "Frost Gem x3",
              "m3": "Thunder Gem x3",
              "g": "Synthesis Set II (unlocked after synthesizing 3 items)"
            },
            {
              "name": "Moogle Badge",
              "m1": "Blazing Stone x1",
              "m2": "Frost Stone x1",
              "m3": "Lightning Stone x1",
              "m4": "Mythril x5",
              "m5": "Orichalcum x3",
              "g": "Synthesis Set II (unlocked after synthesizing 3 items)"
            },
            {
              "name": "AP Up",
              "m1": "Blaze Gem x2",
              "m2": "Frost Gem x2",
              "m3": "Thunder Gem x2",
              "m4": "Mythril x4",
              "g": "Synthesis Set III (unlocked after synthesizing 9 items)"
            },
            {
              "name": "Dark Ring",
              "m1": "Lucid Gem x2",
              "m2": "Bright Gem x2",
              "g": "Synthesis Set III (unlocked after synthesizing 9 items)"
            },
            {
              "name": "Master Earring",
              "m1": "Spirit Shard x5",
              "m2": "Spirit Gem x3",
              "m3": "Fury Stone x1",
              "g": "Synthesis Set III (unlocked after synthesizing 9 items)"
            },
            {
              "name": "Gaia Bangle",
              "m1": "Lucid Shard x5",
              "m2": "Lucid Gem x3",
              "m3": "Lightning Stone x1",
              "g": "Synthesis Set III (unlocked after synthesizing 9 items)"
            },
            {
              "name": "Titan Chain",
              "m1": "Power Shard x5",
              "m2": "Power Gem x3",
              "m3": "Power Stone x1",
              "g": "Synthesis Set III (unlocked after synthesizing 9 items)"
            },
            {
              "name": "Mythril",
              "m1": "Mythril Shard x5",
              "m2": "Mythril Stone x1",
              "m3": "Mystery Goo x1",
              "g": "Synthesis Set III (unlocked after synthesizing 9 items)"
            },
            {
              "name": "Elixir",
              "m1": "Power Crystal x1",
              "m2": "Shiny Crystal x1",
              "m3": "Bright Crystal x2",
              "m4": "Orichalcum x3",
              "g": "Synthesis Set IV (unlocked after synthesizing 15 items)"
            },
            {
              "name": "Defense Up",
              "m1": "Lucid Shard x3",
              "m2": "Bright Shard x3",
              "m3": "Bright Gem x2",
              "m4": "Orichalcum x5",
              "g": "Synthesis Set IV (unlocked after synthesizing 15 items)"
            },
            {
              "name": "Heartguard",
              "m1": "Lucid Gem x3",
              "m2": "Lucid Crystal x1",
              "m3": "Bright Crystal x1",
              "g": "Synthesis Set IV (unlocked after synthesizing 15 items)"
            },
            {
              "name": "Three Stars",
              "m1": "Power Gem x5",
              "m2": "Mystery Goo x3",
              "m3": "Shiny Crystal x1",
              "g": "Synthesis Set IV (unlocked after synthesizing 15 items)"
            },
            {
              "name": "Atlas Armlet",
              "m1": "Blaze Shard x5",
              "m2": "Frost Shard x5",
              "m3": "Thunder Shard x5",
              "m4": "Mystery Goo x1",
              "m5": "Dark Matter x3",
              "g": "Synthesis Set IV (unlocked after synthesizing 15 items)"
            },
            {
              "name": "Crystal Crown",
              "m1": "Lucid Crystal x5",
              "m2": "Power Crystal x1",
              "m3": "Shiny Crystal x1",
              "m4": "Blazing Stone x3",
              "m5": "Frost Stone x3",
              "g": "Synthesis Set IV (unlocked after synthesizing 15 items)"
            },
            {
              "name": "Dark Matter",
              "m1": "Lucid Shard x9",
              "m2": "Gale x1",
              "m3": "Mythril x2",
              "g": "Synthesis Set V (unlocked after synthesizing 21 items)"
            },
            {
              "name": "Megalixir",
              "m1": "Lucid Gem x5",
              "m2": "Lucid Crystal x3",
              "m3": "Gale x2",
              "m4": "Dark Matter x1",
              "g": "Synthesis Set V (unlocked after synthesizing 21 items)"
            },
            {
              "name": "Power Up",
              "m1": "Spirit Shard x5",
              "m2": "Spirit Gem x3",
              "m3": "Power Shard x5",
              "m4": "Power Gem x3",
              "m5": "Dark Matter x1",
              "g": "Synthesis Set V (unlocked after synthesizing 21 items)"
            },
            {
              "name": "Cosmic Arts",
              "m1": "Bright Shard x5",
              "m2": "Bright Gem x3",
              "m3": "Bright Crystal x1",
              "m4": "Mythril Stone x3",
              "g": "Synthesis Set V (unlocked after synthesizing 21 items)"
            },
            {
              "name": "EXP Bracelet",
              "m1": "Energy Stone x1",
              "m2": "Dazzling Stone x1",
              "m3": "Stormy Stone x1",
              "m4": "Orichalcum x8",
              "m5": "Dark Matter x3",
              "g": "Synthesis Set V (unlocked after synthesizing 21 items)"
            },
            {
              "name": "Ribbon",
              "m1": "Blaze Gem x5",
              "m2": "Frost Gem x5",
              "m3": "Thunder Gem x5",
              "m4": "Gale x1",
              "m5": "Serenity Power x3",
              "g": "Synthesis Set V (unlocked after synthesizing 21 items)"
            },
            {
              "name": "Fantasista",
              "m1": "Fury Stone x3",
              "m2": "Power Stone x3",
              "m3": "Mythril Stone x3",
              "m4": "Energy Stone x5",
              "g": "Synthesis Set VI (unlocked after synthesizing 30 items)"
            },
            {
              "name": "Seven Elements",
              "m1": "Blazing Stone x3",
              "m2": "Frost Stone x3",
              "m3": "Lightning Stone x3",
              "m4": "Dazzling Stone x5",
              "g": "Synthesis Set VI (unlocked after synthesizing 30 items)"
            },
            {
              "name": "Ultima Weapon",
              "m1": "Thunder Gem x5",
              "m2": "Mystery Goo x5",
              "m3": "Serenity Power x3",
              "m4": "Stormy Stone x3",
              "m5": "Dark Matter x3",
              "g": "Synthesis Set VI (unlocked after synthesizing 30 items)"
            }
          ]
        },
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
              "name": "Lucid Shard",
              "source": "Shadow",
              "loc": "All worlds"
            },
            {
              "name": "Lucid Gem",
              "source": "Gargoyle, Wight Knight",
              "loc": "Halloween Town"
            },
            {
              "name": "Lucid Crystal",
              "source": "Darkball",
              "loc": "All worlds (after completing Hollow Bastion)"
            },
            {
              "name": "Spirit Shard",
              "source": "Soldier, Large Body",
              "loc": "Wonderland, Agrabah, Monstro, Hollow Bastion"
            },
            {
              "name": "Spirit Gem",
              "source": "Air Soldier",
              "loc": "Traverse Town, Agrabah, Monstro, Wonderland, Hollow Bastion"
            },
            {
              "name": "Fury Stone",
              "source": "Gigas Shadow",
              "loc": "Wonderland"
            },
            {
              "name": "Power Shard",
              "source": "Powerwild, Bouncywild",
              "loc": "Deep Jungle"
            },
            {
              "name": "Power Gem",
              "source": "Pirate, Air Pirate, Battleship",
              "loc": "Neverland"
            },
            {
              "name": "Power Stone",
              "source": "Sniperwild",
              "loc": "Traverse Town"
            },
            {
              "name": "Power Crystal",
              "source": "Wyvern",
              "loc": "Traverse Townm, Deep Jungle, Agrabah, Hollow Bastion"
            },
            {
              "name": "Energy Stone",
              "source": "Stealth Soldier",
              "loc": "Hollow Bastion"
            },
            {
              "name": "Bright Shard",
              "source": "Green Requiem",
              "loc": "Traverse Town, Deep Jungle, Agrabah, Monstro, Hollow Bastion"
            },
            {
              "name": "Bright Gem",
              "source": "Search Ghost",
              "loc": "Traverse Town, Monstro, Atlantica, Halloween Town"
            },
            {
              "name": "Bright Crystal",
              "source": "Defender",
              "loc": "Traverse Town, Wonderland, Deep Jungle, Agrabah, Halloween Town, Hollow Bastion"
            },
            {
              "name": "Blaze Shard",
              "source": "Red Nocturne",
              "loc": "Traverse Town, Wonderland, Agrabah, Hollow Bastion"
            },
            {
              "name": "Blaze Gem",
              "source": "Bandit, Fat Bandit",
              "loc": "Agrabah, Monstro"
            },
            {
              "name": "Blazing Stone",
              "source": "Chimera",
              "loc": "Halloween Town"
            },
            {
              "name": "Frost Shard",
              "source": "Blue Rhapsody",
              "loc": "Traverse Town, Wonderland, Monstro, Hollow Bastion"
            },
            {
              "name": "Frost Gem",
              "source": "Sea Neon, Sheltering Zone",
              "loc": "Atlantica"
            },
            {
              "name": "Frost Stone",
              "source": "Grand Ghost",
              "loc": "Monstro"
            },
            {
              "name": "Thunder Shard",
              "source": "Yellow Opera",
              "loc": "Traverse Town, Wonderland, Monstro, Neverland, Hollow Bastion"
            },
            {
              "name": "Thunder Gem",
              "source": "Screwdiver, Aquatank",
              "loc": "Atlantica"
            },
            {
              "name": "Lightning Stone",
              "source": "Black Ballade",
              "loc": "Deep Jungle"
            },
            {
              "name": "Shiny Crystal",
              "source": "Wizard",
              "loc": "Traverse Town, Wonderland, Deep Jungle, Agrabah, Halloween Town, Hollow Bastion"
            },
            {
              "name": "Dazzling Stone",
              "source": "Jet Balloon",
              "loc": "Neverland"
            },
            {
              "name": "Mythril Shard",
              "source": "Pot Spider",
              "loc": "Agrabah"
            },
            {
              "name": "Mythril",
              "source": "Item Synthesis, Treasure Chests"
            },
            {
              "name": "Mythril Stone",
              "source": "Pot Scorpion",
              "loc": "Agrabah"
            },
            {
              "name": "Mystery Goo",
              "source": "Rare Truffle, White Mushroom, Black Fungus",
              "loc": "Every world"
            },
            {
              "name": "Serenity Power",
              "source": "Pink Agaricus",
              "loc": "Deep Jungle and Atlantica"
            },
            {
              "name": "Gale",
              "source": "Angel Star, Invisible",
              "loc": "End of the World"
            },
            {
              "name": "Stormy Stone",
              "source": "Neoshadow",
              "loc": "End of the World"
            },
            {
              "name": "Orichalcum",
              "source": "Item Shop"
            },
            {
              "name": "Dark Matter",
              "source": "Item Synthesis, Treasure Chests"
            }
          ]
        }
      ]
    },
    {
      "id": "collection",
      "sections": [
        {
          "id": "keyblades",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "str"
            },
            {
              "k": "mp"
            },
            {
              "k": "crit"
            },
            {
              "k": "critstr"
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Kingdom Key",
              "str": "3",
              "crit": "20",
              "how": "Default weapon."
            },
            {
              "name": "Jungle King",
              "str": "5",
              "crit": "10",
              "how": "Seal the Keyhole in Deep Jungle."
            },
            {
              "name": "Three Wishes",
              "str": "6",
              "crit": "20",
              "how": "Seal the Keyhole in Agrabah."
            },
            {
              "name": "Crabclaw",
              "str": "6",
              "mp": "1",
              "crit": "20",
              "how": "Seal the Keyhole in Atlantica."
            },
            {
              "name": "Pumpkinhead",
              "str": "7",
              "crit": "40",
              "how": "Seal the Keyhole in Halloween Town."
            },
            {
              "name": "Fairy Harp",
              "str": "8",
              "mp": "1",
              "crit": "10",
              "critstr": "2",
              "how": "Seal the Keyhole in Neverland."
            },
            {
              "name": "Wishing Star",
              "str": "5",
              "crit": "100",
              "critstr": "2",
              "how": "Found in a chest at Geppetto's House in Traverse Town."
            },
            {
              "name": "Spellbinder",
              "str": "4",
              "mp": "2",
              "crit": "20",
              "how": "Speak to Merlin in Traverse Town after getting all first-level magic spells."
            },
            {
              "name": "Metal Chocobo",
              "str": "9",
              "mp": "-1",
              "crit": "2",
              "how": "Defeat Cloud in the Hercules Cup."
            },
            {
              "name": "Olympia",
              "str": "10",
              "crit": "20",
              "critstr": "2",
              "how": "Complete the Phil Cup, Pegasus Cup, and Hercules Cup (default mode)."
            },
            {
              "name": "Lionheart",
              "str": "10",
              "mp": "1",
              "crit": "20",
              "how": "Defeat Leon & Cloud in the Hades Cup."
            },
            {
              "name": "Lady Luck",
              "str": "7",
              "mp": "2",
              "crit": "20",
              "how": "Unseal the White Trinity in Wonderland."
            },
            {
              "name": "Divine Rose",
              "str": "13",
              "crit": "40",
              "how": "Speak to Belle in the Library of Hollow Bastion (2nd visit)."
            },
            {
              "name": "Oathkeeper",
              "str": "9",
              "mp": "1",
              "crit": "40",
              "how": "Speak to Kairi in the Waterway of Traverse Town (4th visit)."
            },
            {
              "name": "Oblivion",
              "str": "11",
              "mp": "-1",
              "crit": "20",
              "critstr": "2",
              "how": "Obtained from a chest in the Grand Hall of Hollow Bastion (2nd visit)."
            },
            {
              "name": "Diamond Dust",
              "str": "3",
              "mp": "3",
              "crit": "20",
              "how": "Defeat the Ice Titan in the Gold Match at Olympus Coliseum."
            },
            {
              "name": "One-Winged Angel",
              "str": "8",
              "mp": "-2",
              "crit": "10",
              "critstr": "16",
              "how": "Defeat Sephiroth in the Platinum Match at Olympus Coliseum."
            },
            {
              "name": "Ultima Weapon",
              "str": "14",
              "mp": "2",
              "crit": "40",
              "critstr": "2",
              "how": "Crafted through item synthesis. Guide recommended."
            }
          ]
        },
        {
          "id": "staves",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "str"
            },
            {
              "k": "mp"
            },
            {
              "k": "price"
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Mage's Staff",
              "str": "1",
              "how": "Default weapon."
            },
            {
              "name": "Morning Star",
              "str": "2",
              "price": "300",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Shooting Star",
              "str": "4",
              "price": "750",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Magus Staff",
              "str": "3",
              "mp": "1",
              "price": "1200",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Wisdom Staff",
              "str": "5",
              "mp": "1",
              "price": "4000",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Warhammer",
              "str": "4",
              "mp": "-1",
              "price": "450",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Silver Mallet",
              "str": "7",
              "mp": "-1",
              "price": "1200",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Grand Mallet",
              "str": "9",
              "mp": "-1",
              "price": "4000",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Lord Fortune",
              "str": "7",
              "mp": "1",
              "how": "Speak to the Fairy Godmother in Traverse Town after acquiring all summons."
            },
            {
              "name": "Violetta",
              "str": "11",
              "mp": "-1",
              "how": "Examine the White Trinity in Olympus Coliseum."
            },
            {
              "name": "Wizard's Relic",
              "str": "8",
              "mp": "2",
              "how": "Dropped by Wizard Heartless."
            },
            {
              "name": "Dream Rod",
              "str": "5",
              "mp": "2",
              "how": "Speak to Merlin in Traverse Town after acquiring all third-level magic spells."
            },
            {
              "name": "Meteor Strike",
              "str": "13",
              "how": "Obtained from a chest in the Giant Crevasse in End of the World."
            },
            {
              "name": "Fantasista",
              "str": "3",
              "mp": "3",
              "how": "Obtained through item synthesis."
            },
            {
              "name": "Save the Queen",
              "str": "10",
              "mp": "2",
              "how": "Win the Hades Cup solo (only Sora)."
            }
          ]
        },
        {
          "id": "shields",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "str"
            },
            {
              "k": "mp"
            },
            {
              "k": "price"
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Knight's Shield",
              "str": "1",
              "how": "Default weapon."
            },
            {
              "name": "Mythril Shield",
              "str": "4",
              "price": "800",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Onyx Shield",
              "str": "6",
              "price": "2800",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Smasher",
              "str": "3",
              "price": "450",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Gigas Fist",
              "str": "7",
              "price": "1200",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Stout Shield",
              "str": "1",
              "price": "450",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Golem Shield",
              "str": "3",
              "price": "1200",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Adamant Shield",
              "str": "5",
              "price": "4000",
              "how": "Purchase from Item Shop in Traverse Town."
            },
            {
              "name": "Herc's Shield",
              "str": "9",
              "how": "Defeat Hercules in the Hercules Cup."
            },
            {
              "name": "Genji Shield",
              "str": "10",
              "how": "Defeat Yuffie in the Hades Cup."
            },
            {
              "name": "Defender",
              "str": "13",
              "mp": "1",
              "how": "Dropped by Defender Heartless."
            },
            {
              "name": "Dream Shield",
              "str": "6",
              "mp": "1",
              "how": "Speak to Merlin in Traverse Town after acquiring all seven Magic Arts from White Mushroom Heartless."
            },
            {
              "name": "Mighty Shield",
              "str": "15",
              "how": "Obtained from a chest in the World Terminus of End of the World."
            },
            {
              "name": "Seven Elements",
              "str": "4",
              "mp": "3",
              "how": "Obtained through item synthesis."
            },
            {
              "name": "Save the King",
              "str": "11",
              "mp": "2",
              "how": "Win the Hades Cup in time trial mode."
            }
          ]
        },
        {
          "id": "magic",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "effect"
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Fire",
              "effect": "Shoots a small ball of flames",
              "how": "Story progression (Traverse Town, 1st visit)"
            },
            {
              "name": "Fira",
              "effect": "Enhanced potency",
              "how": "Story progression (Agrabah)"
            },
            {
              "name": "Firaga",
              "effect": "Enhanced potency",
              "how": "Story progression (Hollow Bastion)"
            },
            {
              "name": "Blizzard",
              "effect": "Shoots a dispersed frost attack",
              "how": "Story progression (Wonderland)"
            },
            {
              "name": "Blizzara",
              "effect": "Enhanced potency and range",
              "how": "Story progression (Agrabah)"
            },
            {
              "name": "Blizzaga",
              "effect": "Enhanced potency and range",
              "how": "Defeat Behemoth in the Hades Cup"
            },
            {
              "name": "Thunder",
              "effect": "Makes lightning rain from above in a wide area of effect",
              "how": "Story progression (Olympus Coliseum)"
            },
            {
              "name": "Thundara",
              "effect": "Enhanced potency",
              "how": "Story progression (Atlantica)"
            },
            {
              "name": "Thundaga",
              "effect": "Enhanced potency",
              "how": "Defeat Cerberus in the Hades Cup"
            },
            {
              "name": "Cure",
              "effect": "Restores a party member's HP",
              "how": "Story progression (Deep Jungle)"
            },
            {
              "name": "Cura",
              "effect": "Enhanced potency",
              "how": "Story progression (Neverland)"
            },
            {
              "name": "Curaga",
              "effect": "Enhanced potency",
              "how": "Talk to Aerith three times after sealing the final keyhole (Hollow Bastion)"
            },
            {
              "name": "Gravity",
              "effect": "Reduces the HP of affected enemies by a percentage of their current HP",
              "how": "Complete the Phil Cup"
            },
            {
              "name": "Gravira",
              "effect": "Enhanced area of effect",
              "how": "Story progression (Halloween Town)"
            },
            {
              "name": "Graviga",
              "effect": "Enhanced area of effect",
              "how": "Defeat Hades in the Hades Cup"
            },
            {
              "name": "Stop",
              "effect": "Prevents affected enemies from taking action for a determined duration",
              "how": "Story progression (Monstro)"
            },
            {
              "name": "Stopra",
              "effect": "Enhanced area of effect",
              "how": "Complete the third Torn Page of the 100 Acre Wood"
            },
            {
              "name": "Stopga",
              "effect": "Enhanced area of effect",
              "how": "Defeat Phantom (Guide recommended)"
            },
            {
              "name": "Aero",
              "effect": "Casts a wind barrier that absorbs damage around a party member",
              "how": "Story progression (Traverse Town, 2nd visit)"
            },
            {
              "name": "Aerora",
              "effect": "The barrier deals damage to enemies",
              "how": "Chest in Neverland (requires triggering a Yellow Trinity)"
            },
            {
              "name": "Aeroga",
              "effect": "The barrier reflects certain enemy attacks",
              "how": "Return all 99 Dalmatians"
            },
            {
              "name": "Simba",
              "effect": "Enables the use of Proud Roar, an attack than can be charged to deal damage in a wide area of effect",
              "how": "Story progression (Traverse Town, 1st visit)"
            },
            {
              "name": "Genie",
              "effect": "Enables the use of Showtime, a series of random magical attacks on locked-on targets",
              "how": "Story progression (Agrabah)"
            },
            {
              "name": "Bambi",
              "effect": "Bounces around Sora, dropping large quantities of MP prizes and materials",
              "how": "Complete the first Torn Page of the 100 Acre Wood"
            },
            {
              "name": "Dumbo",
              "effect": "Shoots a jet of water from his trunk, dealing damage and pushing enemies",
              "how": "Story progression (Monstro)"
            },
            {
              "name": "Tinker Bell",
              "effect": "Continually regens the party's HP and fully restores Sora's HP if he is defeated (only once per battle)",
              "how": "Story progression (Neverland)"
            },
            {
              "name": "Mushu",
              "effect": "Rapidly shoots fire bullets",
              "how": "Story progression (Hollow Bastion)"
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
              "name": "Protect Chain",
              "area": "Cove",
              "where": "Obtainable during the second day in a small cave near the zipline ladder. Use the nearby box to jump to reach the ledge of the cave.",
              "g": "Destiny Islands"
            },
            {
              "name": "Defense Up",
              "area": "First District",
              "where": "On the counter of the café. Use Blizzard to put out the flame of the candles.",
              "g": "Traverse Town"
            },
            {
              "name": "Postcard",
              "area": "First District",
              "where": "Interact with the Blue Trinity 2 near the café and Huey, Dewey, and Louie's Item Shop.",
              "g": "Traverse Town"
            },
            {
              "name": "Postcard",
              "area": "First District",
              "where": "Open the safe near the doors leading to the Second District.",
              "g": "Traverse Town"
            },
            {
              "name": "Postcard",
              "area": "First District",
              "where": "On the roof of the Accessory Shop.",
              "g": "Traverse Town"
            },
            {
              "name": "Wishing Star",
              "area": "Gepetto's House",
              "where": "Green chest.",
              "g": "Traverse Town"
            },
            {
              "name": "Postcard",
              "area": "Gepetto's House",
              "where": "Interact with the pot on the shelf.",
              "g": "Traverse Town"
            },
            {
              "name": "Postcard",
              "area": "Huey, Dewey, and Louie's Item Shop.",
              "where": "Hit the fan by jumping and attacking from the stairs.",
              "g": "Traverse Town"
            },
            {
              "name": "Mythril Shard",
              "area": "Accessory Shop",
              "where": "On a cabinet.",
              "g": "Traverse Town"
            },
            {
              "name": "Postcard",
              "area": "Item Workshop",
              "where": "Interact with the flyer on the wall.",
              "g": "Traverse Town"
            },
            {
              "name": "Dalmatians (7-9)",
              "area": "Item Workshop",
              "where": "On a table.",
              "g": "Traverse Town"
            },
            {
              "name": "Mythril Shard",
              "area": "Item Workshop",
              "where": "On a table.",
              "g": "Traverse Town"
            },
            {
              "name": "Postcard",
              "area": "Second District",
              "where": "On a store awning near the entrance to the district.",
              "g": "Traverse Town"
            },
            {
              "name": "Mega-Potion",
              "area": "Second District",
              "where": "On a ledge in the façade of the Gizmo Shop.",
              "g": "Traverse Town"
            },
            {
              "name": "Mythril Shard",
              "area": "Second District",
              "where": "On top of the roof of the building near the passage to the Third District.",
              "g": "Traverse Town"
            },
            {
              "name": "Postcard x2",
              "area": "Gizmo Shop",
              "where": "Use Electro on the wire in the Third District, then step on the 3 switches inside Gizmo Shop, and, finally, turn on the clock.",
              "g": "Traverse Town"
            },
            {
              "name": "Pretty Stone",
              "area": "Red Room",
              "where": "Red chest.",
              "g": "Traverse Town"
            },
            {
              "name": "Elixir",
              "area": "Green Room",
              "where": "Blue chest.",
              "g": "Traverse Town"
            },
            {
              "name": "Mythril",
              "area": "Green Room",
              "where": "Strike the clock above the door to the Red Room nine times and open the chest.",
              "g": "Traverse Town"
            },
            {
              "name": "Potion",
              "area": "Alleyway",
              "where": "Behind wooden crates in the south corner.",
              "g": "Traverse Town"
            },
            {
              "name": "Pretty Stone",
              "area": "Alleyway",
              "where": "On an awning at the edge of the hotel's balconies.",
              "g": "Traverse Town"
            },
            {
              "name": "Potion",
              "area": "Alleyway",
              "where": "On the hotel balcony near the waterway.",
              "g": "Traverse Town"
            },
            {
              "name": "Dalmatians (4-6)",
              "area": "Alleyway",
              "where": "Examine Red Trinity 1 in the First District to reach this chest.",
              "g": "Traverse Town"
            },
            {
              "name": "Orichalcum",
              "area": "Secret Waterway",
              "where": "Examine White Trinity 1.",
              "g": "Traverse Town"
            },
            {
              "name": "Dalmatians (10-12)",
              "area": "Secret Waterway",
              "where": "Right before taking the stairs to Merlin's Study.",
              "g": "Traverse Town"
            },
            {
              "name": "Dalmatians (1-3)",
              "area": "Mystical House",
              "where": "On a stone across the lake outside Merlin's House. Requires Glide.",
              "g": "Traverse Town"
            },
            {
              "name": "AP Up",
              "area": "Mystical House",
              "where": "Use Yellow Trinity 1 outside Merlin's House.",
              "g": "Traverse Town"
            },
            {
              "name": "Postcard",
              "area": "Third District",
              "where": "In the balcony. You can get there via the rooftop of a building in the Second District.",
              "g": "Traverse Town"
            },
            {
              "name": "Camping Set",
              "area": "Rabbit Hole",
              "where": "Defeat three waves of Heartless near the save point before the Wonderland trial.",
              "g": "Wonderland"
            },
            {
              "name": "Mega-Potion",
              "area": "Rabbit Hole",
              "where": "Defeat three waves of Heartless near the save point before rescuing Kairi in Hollow Bastion.",
              "g": "Wonderland"
            },
            {
              "name": "Megalixir",
              "area": "Rabbit Hole",
              "where": "Defeat three waves of Heartless near the save point after rescuing Kairi in Hollow Bastion.",
              "g": "Wonderland"
            },
            {
              "name": "Elixir",
              "area": "Rabbit Hole",
              "where": "Examine Green Trinity 3 in the center of the room.",
              "g": "Wonderland"
            },
            {
              "name": "Mythril Shard",
              "area": "Bizarre Room (Upright)",
              "where": "Examine Green Trinity 2 inside the furnace.",
              "g": "Wonderland"
            },
            {
              "name": "Defense Up",
              "area": "Bizarre Room (Sideways)",
              "where": "Light the lamp.",
              "g": "Wonderland"
            },
            {
              "name": "Dalmatians (13-15)",
              "area": "Queen's Castle",
              "where": "On a ledge accessible from Lotus Forest.",
              "g": "Wonderland"
            },
            {
              "name": "Thundara-G",
              "area": "Queen's Castle",
              "where": "On a ledge accessible from Bizarre Room (Upright).",
              "g": "Wonderland"
            },
            {
              "name": "Meteor-G",
              "area": "Queen's Castle",
              "where": "On a ledge accessible from Bizarre Room (Sideways).",
              "g": "Wonderland"
            },
            {
              "name": "Dalmatians (16-18)",
              "area": "Lotus Forest",
              "where": "On a lillypad near the center of the area.",
              "g": "Wonderland"
            },
            {
              "name": "Scan-G",
              "area": "Lotus Forest",
              "where": "On a lillypad in the northeast corner. Easier to get once High Jump is unlocked.",
              "g": "Wonderland"
            },
            {
              "name": "Thundara-G",
              "area": "Lotus Forest",
              "where": "Cast Thunder on the pink flowers in the west side.",
              "g": "Wonderland"
            },
            {
              "name": "Orichalcum",
              "area": "Lotus Forest",
              "where": "On a ledge in the southwest corner. Requires Glide.",
              "g": "Wonderland"
            },
            {
              "name": "Dalmatians (58-60)",
              "area": "Lotus Forest",
              "where": "Cast Thunder on the pink flowers in the alcove accessible through the painting in Bizarre Room (Sideways).",
              "g": "Wonderland"
            },
            {
              "name": "Lady Luck",
              "area": "Lotus Forest",
              "where": "Examine White Trinity 2 in the alcove accessible through the painting in Bizarre Room (Sideways).",
              "g": "Wonderland"
            },
            {
              "name": "Dark Matter",
              "area": "Tea Party Garden",
              "where": "On the cottage balcony. To get there, interact with the bear and the clock in Bizarre Room.",
              "g": "Wonderland"
            },
            {
              "name": "Flare-G",
              "area": "Tea Party Garden",
              "where": "On a hedge. To get there, go through the passage Requires High Jump.",
              "g": "Wonderland"
            },
            {
              "name": "Dalmatians (19-21)",
              "area": "Tea Party Garden",
              "where": "On a hedge. To get there, go through the passage Requires High Jump.",
              "g": "Wonderland"
            },
            {
              "name": "Mythril",
              "area": "Tea Party Garden",
              "where": "On a hedge. To get there, go through the passage Requires Glide.",
              "g": "Wonderland"
            },
            {
              "name": "Mythril Shard",
              "area": "Gates",
              "where": "Examine Blue Trinity 7 in front of the left gladiator statue,",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Dalmatians (22-24)",
              "area": "Gates",
              "where": "Examine Blue Trinity 8 in front of the right gladiator statue.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Mega-Potion",
              "area": "Gates",
              "where": "Behind the pillars to the left of the Vestibule doors.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Orichalcum",
              "area": "Gates",
              "where": "Examine the purple vase behind the pillars to the right of the Vestibule doors; accessible after clearing the Hades Cup.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Violetta",
              "area": "Gates",
              "where": "Examine White Trinity 3 in the center of the area.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Holy-G",
              "area": "Gates",
              "where": "Cast Blizzara on all braziers; a chest will appear along the west wall.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Shiva Belt",
              "area": "Gates",
              "where": "Cast Blizzaga on all braziers; a chest will appear along the east wall.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Olympia",
              "area": "Vestibule",
              "where": "Complete the Phil Cup, Pegasus Cup, and Hercules Cup.",
              "g": "Olympus Coliseum"
            },
            {
              "name": "Protect Chain",
              "area": "Tree House",
              "where": "On the roof of the treehouse. You can get there by climbing the ladder on the east side.",
              "g": "Deep Jungle"
            },
            {
              "name": "Mega-Potion",
              "area": "Tree House",
              "where": "On a ledge made of netting, under the treehouse.",
              "g": "Deep Jungle"
            },
            {
              "name": "Mythril",
              "area": "Tree House",
              "where": "On the boat suspended in front of the tree house. Requires Glide or jumping and attacking.",
              "g": "Deep Jungle"
            },
            {
              "name": "Mega-Ether",
              "area": "Tunnel",
              "where": "On a ledge near the entrance to Treetops.",
              "g": "Deep Jungle"
            },
            {
              "name": "Dalmatians (34-36)",
              "area": "Camp",
              "where": "Examine Blue Trinity 9 near the lab table.",
              "g": "Deep Jungle"
            },
            {
              "name": "Mythril Shard",
              "area": "Tent",
              "where": "On the ground in front of the projector.",
              "g": "Deep Jungle"
            },
            {
              "name": "Thundara-G",
              "area": "Climbing Trees",
              "where": "Examine Blue Trinity 10 next to the passage to Tree House.",
              "g": "Deep Jungle"
            },
            {
              "name": "Mega-Potion",
              "area": "Hippo's Lagoon",
              "where": "On a ledge to the side of the lagoon.",
              "g": "Deep Jungle"
            },
            {
              "name": "Meteor-G",
              "area": "Hippo's Lagoon",
              "where": "On a ledge in the lagoon. Requires High Jump or jumping from the vine.",
              "g": "Deep Jungle"
            },
            {
              "name": "Dalmatians (25-27)",
              "area": "Hippo's Lagoon",
              "where": "On the far wall of the area.",
              "g": "Deep Jungle"
            },
            {
              "name": "Dalmatians (28-30)",
              "area": "Vines",
              "where": "In the center of the area.",
              "g": "Deep Jungle"
            },
            {
              "name": "Mythril",
              "area": "Vines 2",
              "where": "On a ledge in the center of the area.",
              "g": "Deep Jungle"
            },
            {
              "name": "Mega-Potion",
              "area": "Cliff",
              "where": "Left chest on a ledge in the northeast corner.",
              "g": "Deep Jungle"
            },
            {
              "name": "Mythril Shard",
              "area": "Cliff",
              "where": "Right chest on a ledge in the northeast corner.",
              "g": "Deep Jungle"
            },
            {
              "name": "Mythril Shard",
              "area": "Waterfall Cavern",
              "where": "On the lowest ledge on the far side of the area.",
              "g": "Deep Jungle"
            },
            {
              "name": "Dalmatians (31-33)",
              "area": "Waterfall Cavern",
              "where": "On a ledge below a wall covered in vines.",
              "g": "Deep Jungle"
            },
            {
              "name": "Mythril",
              "area": "Waterfall Cavern",
              "where": "On the highest ledge on the far side of the area.",
              "g": "Deep Jungle"
            },
            {
              "name": "Orichalcum",
              "area": "Waterfall Cavern",
              "where": "On a ledge near a climbable vine.",
              "g": "Deep Jungle"
            },
            {
              "name": "Orichalcum",
              "area": "Cavern of Hearts",
              "where": "Examine White Trinity 4 in the center of the area.",
              "g": "Deep Jungle"
            },
            {
              "name": "Mega-Potion",
              "area": "Plaza",
              "where": "At ground level in a corner.",
              "g": "Agrabah"
            },
            {
              "name": "Mega-Ether",
              "area": "Plaza",
              "where": "On a ledge along the eastern wall.",
              "g": "Agrabah"
            },
            {
              "name": "Cottage",
              "area": "Plaza",
              "where": "On a high ledge in the southwest corner. You can get there from Aladdin's House.",
              "g": "Agrabah"
            },
            {
              "name": "Mega-Potion",
              "area": "Storage Room",
              "where": "Behind a group of wooden crates.",
              "g": "Agrabah"
            },
            {
              "name": "AP Up",
              "area": "Storage Room",
              "where": "Examine Green Trinity 6 near the save point.",
              "g": "Agrabah"
            },
            {
              "name": "Mega-Ether",
              "area": "Main Street",
              "where": "On a ledge near the entrance to the Bazaar.",
              "g": "Agrabah"
            },
            {
              "name": "Dark Matter",
              "area": "Main Street",
              "where": "On a ledge in the northwest corner. You can get there from a passage in Plaza.",
              "g": "Agrabah"
            },
            {
              "name": "Mythril",
              "area": "Main Street",
              "where": "Blue chest on a ledge to the right of the entrance to Palace Gate. Requires High Jump.",
              "g": "Agrabah"
            },
            {
              "name": "Mega-Potion",
              "area": "Alley",
              "where": "On a ledge in the corner across from the entrance to the Plaza.",
              "g": "Agrabah"
            },
            {
              "name": "Megalixir",
              "area": "Aladdin's House",
              "where": "Near the save point.",
              "g": "Agrabah"
            },
            {
              "name": "Scissors-G ⯈",
              "area": "Aladdin's House",
              "where": "In the center of the room, on a step.",
              "g": "Agrabah"
            },
            {
              "name": "Thundara-G",
              "area": "Bazaar",
              "where": "On a ledge in the northeast, accessible by jumping across the awnings.",
              "g": "Agrabah"
            },
            {
              "name": "Fire Ring",
              "area": "Bazaar",
              "where": "On the highest ledge in the northwest corner, accessible by climbing onto the northern ledge.",
              "g": "Agrabah"
            },
            {
              "name": "Protera Chain",
              "area": "Palace Gates",
              "where": "On top of the storefront along the west wall, accessible from high entrance to Main Street.",
              "g": "Agrabah"
            },
            {
              "name": "Dalmatians (52-54)",
              "area": "Palace Gates",
              "where": "On the highest ledge in the southwest corner. Requires High Jump.",
              "g": "Agrabah"
            },
            {
              "name": "Osmose-G ⯈",
              "area": "Palace Gates",
              "where": "On the highest ledge in the northwest corner; requires shared ability Glide.",
              "g": "Agrabah"
            },
            {
              "name": "Mega-Ether",
              "area": "Cave of Wonders: Entrance",
              "where": "On top of a platform along the west wall, near the entrance to the Hall.",
              "g": "Agrabah"
            },
            {
              "name": "Dalmatians (49-51)",
              "area": "Cave of Wonders: Entrance",
              "where": "On top of a pillar near the passage to the Hall. Requires High Jump.",
              "g": "Agrabah"
            },
            {
              "name": "Ifrit Belt",
              "area": "Cave of Wonders: Entrance",
              "where": "Examine White Trinity 5 near the entrance.",
              "g": "Agrabah"
            },
            {
              "name": "Elixir",
              "area": "Cave of Wonders: Hall",
              "where": "On top of the platform with the water-spewing statues.",
              "g": "Agrabah"
            },
            {
              "name": "Mythril Shard",
              "area": "Cave of Wonders: Hall",
              "where": "In an alcove in the northwest corner.",
              "g": "Agrabah"
            },
            {
              "name": "Elixir",
              "area": "Cave of Wonders: Bottomless Hall",
              "where": "On a small platform near the entrance to the Hall, accessible with High Jump or a well-positioned jump while attacking.",
              "g": "Agrabah"
            },
            {
              "name": "Cottage",
              "area": "Cave of Wonders: Bottomless Hall",
              "where": "On top of the platform with the water-spewing statues, across from the passage to the Treasure Room.",
              "g": "Agrabah"
            },
            {
              "name": "Mega-Potion",
              "area": "Cave of Wonders: Bottomless Hall",
              "where": "On a far ledge across the chasm, accessible from alternate route in the Hall.",
              "g": "Agrabah"
            },
            {
              "name": "Thundara-G",
              "area": "Cave of Wonders: Silent Chamber",
              "where": "Examine Blue Trinity 12 in the center of the area.",
              "g": "Agrabah"
            },
            {
              "name": "Cottage",
              "area": "Cave of Wonders: Dark Chamber",
              "where": "On a small platform in the corner; jump from the save point to reach it.",
              "g": "Agrabah"
            },
            {
              "name": "Meteor-G",
              "area": "Cave of Wonders: Dark Chamber",
              "where": "On a small platform along the wall, accessible from Relic Chamber passage opened by Abu.",
              "g": "Agrabah"
            },
            {
              "name": "Protera Chain",
              "area": "Cave of Wonders: Dark Chamber",
              "where": "On a raised platform accessible from the Relic Chamber passage opened by Abu; climb the waterfall and use Abu to lower it.",
              "g": "Agrabah"
            },
            {
              "name": "Torn Page",
              "area": "Cave of Wonders: Dark Chamber",
              "where": "On a platform in the center of the area, accessible by swimming upstream from the Relic Chamber.",
              "g": "Agrabah"
            },
            {
              "name": "Mythril",
              "area": "Cave of Wonders: Relic Chamber",
              "where": "On a small platform in the corner; push the block in the Bottomless Hall to reach it.",
              "g": "Agrabah"
            },
            {
              "name": "Thunder Ring",
              "area": "Cave of Wonders: Relic Chamber",
              "where": "On a small platform in the corner, accessible by swimming and climbing the stairs.",
              "g": "Agrabah"
            },
            {
              "name": "Dalmatians (46-48)",
              "area": "Cave of Wonders: Hidden Room",
              "where": "Examine Yellow Trinity 3 and interact with the statue.",
              "g": "Agrabah"
            },
            {
              "name": "Haste2-G",
              "area": "Cave of Wonders: Hidden Room",
              "where": "Examine Yellow Trinity 3 and interact with the statue.",
              "g": "Agrabah"
            },
            {
              "name": "Defense Up",
              "area": "Cave of Wonders: Treasure Room",
              "where": "Above the fireplace along the eastern wall.",
              "g": "Agrabah"
            },
            {
              "name": "Mythril Shard",
              "area": "Cave of Wonders: Treasure Room",
              "where": "On top of a pile of treasure in the south.",
              "g": "Agrabah"
            },
            {
              "name": "Dalmatians (37-39)",
              "area": "Cave of Wonders: Treasure Room",
              "where": "On a ledge near the passage to Bottomless Hall.",
              "g": "Agrabah"
            },
            {
              "name": "Thundaga-G",
              "area": "Cave of Wonders: Treasure Room",
              "where": "On top of a pile of treasure along the west wall; use Abu to activate the gemstone.",
              "g": "Agrabah"
            },
            {
              "name": "High Jump",
              "area": "Mouth",
              "where": "Near Gepetto on the ship, accessible after defeating Parasite Cage.",
              "g": "Monstro"
            },
            {
              "name": "Scan-G",
              "area": "Mouth",
              "where": "On a wooden platform across from the ship, accessible with High Jump.",
              "g": "Monstro"
            },
            {
              "name": "Mythril Shard",
              "area": "Mouth",
              "where": "Examine Green Trinity 7 on top of the ship.",
              "g": "Monstro"
            },
            {
              "name": "Watergleam",
              "area": "Mouth",
              "where": "On the highest platform nearest Monstro's teeth, accessible with High Jump.",
              "g": "Monstro"
            },
            {
              "name": "Cottage",
              "area": "Mouth",
              "where": "On the highest platform along the east wall, accessible with High Jump.",
              "g": "Monstro"
            },
            {
              "name": "Dalmatians (73-75)",
              "area": "Mouth",
              "where": "On a high platform to the west. Requires High Jump.",
              "g": "Monstro"
            },
            {
              "name": "Cottage",
              "area": "Chamber 2",
              "where": "At ground level, near the entrance to Chamber 3.",
              "g": "Monstro"
            },
            {
              "name": "Megalixir",
              "area": "Chamber 2",
              "where": "On a small platform with barrels, accessible from the higher level of Chamber 3.",
              "g": "Monstro"
            },
            {
              "name": "Mega-Ether",
              "area": "Chamber 3",
              "where": "At ground level, near a passage blocked by wooden planks.",
              "g": "Monstro"
            },
            {
              "name": "Osmose-G ⯇",
              "area": "Chamber 3",
              "where": "On the upper level, under a green platform.",
              "g": "Monstro"
            },
            {
              "name": "Flare-G",
              "area": "Chamber 3",
              "where": "On a bluish-green platform, just above the previous chest.",
              "g": "Monstro"
            },
            {
              "name": "Dalmatians (55-57)",
              "area": "Chamber 3",
              "where": "On a platform above the passage to Chamber 2.",
              "g": "Monstro"
            },
            {
              "name": "Thundaga-G",
              "area": "Chamber 5",
              "where": "At ground level, across from the entrance to Chamber 6.",
              "g": "Monstro"
            },
            {
              "name": "Mega-Ether",
              "area": "Chamber 5",
              "where": "At ground level, across from the entrance to Chamber 6.",
              "g": "Monstro"
            },
            {
              "name": "Mythril",
              "area": "Chamber 5",
              "where": "On a bluish-green platform, across from the entrance to Chamber 4.",
              "g": "Monstro"
            },
            {
              "name": "Dalmatians (79-81)",
              "area": "Chamber 5",
              "where": "On a ledge on top of a barrel.",
              "g": "Monstro"
            },
            {
              "name": "Dalmatians (76-78)",
              "area": "Chamber 6",
              "where": "At ground level, in front of the passage to Chamber 5.",
              "g": "Monstro"
            },
            {
              "name": "Torn Page",
              "area": "Chamber 6",
              "where": "On a high platform, near the upper passage to Chamber 5. High Jump makes it easier to reach.",
              "g": "Monstro"
            },
            {
              "name": "Megalixir",
              "area": "Chamber 6",
              "where": "On a high bluish-green platform, across from the previous chest.",
              "g": "Monstro"
            },
            {
              "name": "Mythril",
              "area": "Chamber 6",
              "where": "On a high ledge, across from an alternate entrance to Chamber 1.",
              "g": "Monstro"
            },
            {
              "name": "Dark Matter",
              "area": "Chamber 6",
              "where": "Examine White Trinity 6 across from the entrance to Chamber 3.",
              "g": "Monstro"
            },
            {
              "name": "Mythril Shard",
              "area": "Undersea Valley",
              "where": "Cast Fire on the red clam on a platform near the eastern wall.",
              "g": "Atlantica"
            },
            {
              "name": "Mega-Ether",
              "area": "Undersea Valley",
              "where": "Strike the clam in the small cave along the eastern wall.",
              "g": "Atlantica"
            },
            {
              "name": "Mega-Potion",
              "area": "Undersea Valley",
              "where": "Strike the clam on the platform near the ocean floor, below the red clam.",
              "g": "Atlantica"
            },
            {
              "name": "Mythril",
              "area": "Undersea Valley",
              "where": "Strike the clam in the covered alcove along the east wall, near the previous clam.",
              "g": "Atlantica"
            },
            {
              "name": "Elixir",
              "area": "Undersea Valley",
              "where": "Strike the clam on the pillar near the west wall.",
              "g": "Atlantica"
            },
            {
              "name": "Cottage",
              "area": "Undersea Valley",
              "where": "Strike the clam on the platform along the west wall.",
              "g": "Atlantica"
            },
            {
              "name": "Cottage",
              "area": "Undersea Cave",
              "where": "Strike the clam in the small alcove in the wall, about halfway up.",
              "g": "Atlantica"
            },
            {
              "name": "Mythril Shard",
              "area": "Undersea Gorge",
              "where": "Cast Blizzard on the blue clam in the southwest corner, near the entrance to Undersea Cave.",
              "g": "Atlantica"
            },
            {
              "name": "Mega-Ether",
              "area": "Undersea Gorge",
              "where": "Strike the clam on a platform in the center of the area.",
              "g": "Atlantica"
            },
            {
              "name": "Orichalcum",
              "area": "Undersea Gorge",
              "where": "In a large wooden chest near Ariel's Grotto; accessible using a jetstream in the Sunken Ship.",
              "g": "Atlantica"
            },
            {
              "name": "Mega-Potion",
              "area": "Undersea Garden",
              "where": "Strike the clam along the far wall.",
              "g": "Atlantica"
            },
            {
              "name": "Mega-Potion",
              "area": "Ariel's Grotto",
              "where": "In a chest at the ground level, near the grandfather clock.",
              "g": "Atlantica"
            },
            {
              "name": "Cottage",
              "area": "Ariel's Grotto",
              "where": "In a chest on a shelf about halfway up, just under several volumes of books.",
              "g": "Atlantica"
            },
            {
              "name": "Torn Page",
              "area": "Ariel's Grotto",
              "where": "In a chest on the upper side of the area.",
              "g": "Atlantica"
            },
            {
              "name": "Mega-Ether",
              "area": "Triton's Palace",
              "where": "Strike the clam on the ocean floor in the corner, near three pillars.",
              "g": "Atlantica"
            },
            {
              "name": "Cottage",
              "area": "Triton's Palace",
              "where": "Strike the clam on the ocean floor, below the entrance to the Undersea Gorge.",
              "g": "Atlantica"
            },
            {
              "name": "Elixir",
              "area": "Triton's Palace",
              "where": "Strike the clam on the ocean floor, between the large shell structure and the entrance to the Throne Room.",
              "g": "Atlantica"
            },
            {
              "name": "Mythril Shard",
              "area": "Triton's Palace",
              "where": "Cast Thunder on the yellow clam on a pillar, near the entrance to the Throne Room.",
              "g": "Atlantica"
            },
            {
              "name": "Orichalcum",
              "area": "Triton's Palace",
              "where": "Examine White Trinity 7 in the center of the large shell structure.",
              "g": "Atlantica"
            },
            {
              "name": "Mythril Shard",
              "area": "Sunken Ship",
              "where": "In a chest on the ocean floor, behind the wreckage of a smaller ship.",
              "g": "Atlantica"
            },
            {
              "name": "Elixir",
              "area": "Sunken Ship",
              "where": "In a chest on the ocean floor, inside the wreckage of a turned over ship.",
              "g": "Atlantica"
            },
            {
              "name": "Crystal Trident",
              "area": "Sunken Ship: Below Deck",
              "where": "In a chest towards the back of the ship, near the broken window.",
              "g": "Atlantica"
            },
            {
              "name": "Mythril Shard",
              "area": "Sunken Ship: Below Deck",
              "where": "In a chest in the corner, across from the large broken window and near the stairs.",
              "g": "Atlantica"
            },
            {
              "name": "Mythril",
              "area": "Sunken Ship: Below Deck",
              "where": "Strike the clam on the ocean floor, in a hole below the stairs.",
              "g": "Atlantica"
            },
            {
              "name": "Mega-Ether",
              "area": "Cavern Nook",
              "where": "Strike the smaller clam on the left.",
              "g": "Atlantica"
            },
            {
              "name": "Mythril",
              "area": "Ursula's Lair",
              "where": "Case Fire twice on the purple urchin near the clam in the wall to reveal a chest.",
              "g": "Atlantica"
            },
            {
              "name": "Power Up",
              "area": "Guillotine Square",
              "where": "On a ledge inside a pumpkin structure, accessible with High Jump.",
              "g": "Halloween Town"
            },
            {
              "name": "Elixir",
              "area": "Guillotine Square",
              "where": "Ring the spider doorbell on the house three times.",
              "g": "Halloween Town"
            },
            {
              "name": "Thundara-G",
              "area": "Guillotine Square",
              "where": "Under the stairs leading to the house.",
              "g": "Halloween Town"
            },
            {
              "name": "Dalmatians (70-72)",
              "area": "Guillotine Square",
              "where": "Inside the mouth of a pumpkin-shaped decoration. Requires Glide.",
              "g": "Halloween Town"
            },
            {
              "name": "Elixir",
              "area": "Guillotine Square",
              "where": "Inside the mouth of a pumpkin-shaped decoration. Requires Glide.",
              "g": "Halloween Town"
            },
            {
              "name": "Torn Page",
              "area": "Research Lab",
              "where": "Examine the bookcase.",
              "g": "Halloween Town"
            },
            {
              "name": "Jack-in-the-Box",
              "area": "Graveyard",
              "where": "Inside the exploded pumpkin, after clearing the Mayor's challenge.",
              "g": "Halloween Town"
            },
            {
              "name": "Dalmatians (67-69)",
              "area": "Moonlight Hill",
              "where": "Examine White Trinity 8 near the hill.",
              "g": "Halloween Town"
            },
            {
              "name": "Meteor-G",
              "area": "Bridge",
              "where": "On a small ledge above the sewer entrance to Guillotine Square.",
              "g": "Halloween Town"
            },
            {
              "name": "Flare-G",
              "area": "Bridge",
              "where": "On a small platform under the bridge.",
              "g": "Halloween Town"
            },
            {
              "name": "Defense Up",
              "area": "Bridge",
              "where": "On a small ledge in the far corner of the area.",
              "g": "Halloween Town"
            },
            {
              "name": "Mythril Shard",
              "area": "Oogie's Manor",
              "where": "Examine Red Trinity 5 near the archway at ground level. After completing this world's story, it will appear in a hole in the center of Manor Ruins.",
              "g": "Halloween Town"
            },
            {
              "name": "Ether",
              "area": "Oogie's Manor",
              "where": "Right outside the entrance to the manor. After completing this world's story, it will appear in a hole in the center of Manor Ruins.",
              "g": "Halloween Town"
            },
            {
              "name": "Orichalcum",
              "area": "Oogie's Manor",
              "where": "In a cage near the entrance to the manor. After completing this world's story, it will appear in a hole in the center of Manor Ruins.",
              "g": "Halloween Town"
            },
            {
              "name": "Ether",
              "area": "Oogie's Manor",
              "where": "Right after the crossing the entrance door to the manor. After completing this world's story, it will appear in a hole in the center of Manor Ruins.",
              "g": "Halloween Town"
            },
            {
              "name": "Mega-Ether",
              "area": "Oogie's Manor",
              "where": "In a high cage near the top of the manor. After completing this world's story, it will appear in a hole in the center of Manor Ruins.",
              "g": "Halloween Town"
            },
            {
              "name": "Dalmatians (40-42)",
              "area": "Oogie's Manor",
              "where": "In an alcove near the top of the manor after activating the switch in the Evil Playroom first. After completing this world's story, it will appear in a hole in the center of Manor Ruins.",
              "g": "Halloween Town"
            },
            {
              "name": "Scissors-G ⯇",
              "area": "Cemetery",
              "where": "To the right of a mausoleum with stairs and a + on the front.",
              "g": "Halloween Town"
            },
            {
              "name": "Holy-G",
              "area": "Cemetery",
              "where": "To the left of a spider-like tombstone.",
              "g": "Halloween Town"
            },
            {
              "name": "Dalmatians (64-66)",
              "area": "Cemetery",
              "where": "In the corner, in front of a tombstone.",
              "g": "Halloween Town"
            },
            {
              "name": "Dark Matter",
              "area": "Cemetery",
              "where": "In the far corner, behind a tree with a hanging skeleton.",
              "g": "Halloween Town"
            },
            {
              "name": "Paper-G ⯈",
              "area": "Ship: Hold",
              "where": "On the upper rafters to the west. Requires Glide.",
              "g": "Neverland"
            },
            {
              "name": "Dalmatians (82-84)",
              "area": "Ship: Hold",
              "where": "On the upper rafters to the east. Requires Glide.",
              "g": "Neverland"
            },
            {
              "name": "Dark Matter",
              "area": "Ship: Hold",
              "where": "Left blue chest after examining Yellow Trinity 4 in the Hold.",
              "g": "Neverland"
            },
            {
              "name": "Orichalcum",
              "area": "Ship: Hold",
              "where": "Right blue chest after examining Yellow Trinity 4 in the Hold.",
              "g": "Neverland"
            },
            {
              "name": "Dalmatians (85-87)",
              "area": "Ship: Hold",
              "where": "Green chest after examining Yellow Trinity 4 in the Hold.",
              "g": "Neverland"
            },
            {
              "name": "Aero upgrade",
              "area": "Ship: Hold",
              "where": "Red chest after examining Yellow Trinity 4 in the Hold.",
              "g": "Neverland"
            },
            {
              "name": "Meteor-G",
              "area": "Ship: Galley",
              "where": "In the corner near the stove.",
              "g": "Neverland"
            },
            {
              "name": "Protera Chain",
              "area": "Ship: Cabin",
              "where": "Near the save point.",
              "g": "Neverland"
            },
            {
              "name": "Dalmatians (88-90)",
              "area": "Captain's Cabin",
              "where": "Green chest next to the bed.",
              "g": "Neverland"
            },
            {
              "name": "Orichalcum",
              "area": "Pirate Ship",
              "where": "Close to the front of the ship, in the crow's nest.",
              "g": "Neverland"
            },
            {
              "name": "Dalmatians (43-45)",
              "area": "Pirate Ship",
              "where": "Examine White Trinity 9 behind the ship's wheel.",
              "g": "Neverland"
            },
            {
              "name": "Flare-G",
              "area": "Clock Tower",
              "where": "In the corner of the tower balcony.",
              "g": "Neverland"
            },
            {
              "name": "Life-G",
              "area": "Rising Falls",
              "where": "At the lowest level, behind a set of stalagmites.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Dalmatians (91-93)",
              "area": "Rising Falls",
              "where": "On a floating platform.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Blizzara Ring",
              "area": "Rising Falls",
              "where": "On a floating platform about halfway up the falls.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Meteor-G",
              "area": "Rising Falls",
              "where": "Enter the third-highest bubble to reach the chest under the ice.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Megalixir",
              "area": "Rising Falls",
              "where": "On a floating platform about three quarters of the way up the falls.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Thundaga-G",
              "area": "Rising Falls",
              "where": "Examine White Trinity 10 near the archway about halfway up the falls.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Defense Up",
              "area": "Rising Falls",
              "where": "Enter the fourth bubble about halfway up the falls; accessible after completing first story episode.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mythril",
              "area": "Base Level",
              "where": "On a small platform behind the movable block, accessible through the higher bubble.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Thundara-G",
              "area": "Base Level",
              "where": "On a platform near a blue crystal, accessible using the movable block.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Paper-G ⯇",
              "area": "Base Level",
              "where": "On a platform near the node leading to Castle Gates, accessible using Glide.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Thundaga-G",
              "area": "Waterway",
              "where": "Accessible via unsealed passage at Base Level, use Beast's Call command.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Fira Ring",
              "area": "Waterway",
              "where": "Just behind the save point.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Dark Matter",
              "area": "Waterway",
              "where": "Cast Blizzard on the bubble in the hallway, then use it to jump to the high ledge.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Thundaga-G",
              "area": "Dungeon",
              "where": "In the back-right corner.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Ultima-G",
              "area": "Dungeon",
              "where": "In the back-right corner.",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Up",
              "area": "Entrance Hall",
              "where": "Climb the pillar to the right of the Heartless sigil door, then jump onto the left pillar.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mega-Potion",
              "area": "Library",
              "where": "Rotate the pillar on the second floor.",
              "g": "Hollow Bastion"
            },
            {
              "name": "AP Up",
              "area": "Library",
              "where": "Rotate the upper part of the pillar from above the bookcase along the west wall.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Elixir",
              "area": "Library",
              "where": "Rotate the lower part of the pillar near the bookcase along the west wall.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mythril",
              "area": "Library",
              "where": "Rotate the pillar between two bookcases on the second floor.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Ultima-G",
              "area": "Library",
              "where": "On top of the bookcase along the south wall, nearest the ground floor passage to the Entrance Hall.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Dalmatians (97-99)",
              "area": "Lift Stop",
              "where": "Cast Gravity on the floating chest. You can get here from a passage in Library.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Osmose-G ⯈",
              "area": "Lift Stop",
              "where": "Cast Gravity on the floating chest. You can get here by using the Lift Stop in Library.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mythril",
              "area": "Lift Stop",
              "where": "Examine the node in the corner; this area accessible from passage through the Waterway.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Orichalcum",
              "area": "Lift Stop",
              "where": "Cast Gravity on the small floating platform above; area accessible using node in Lift Stop after Heartless sigil door.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Royal Crown",
              "area": "Lift Stop",
              "where": "Cast Gravity on the small floating platform above; accessible from the passage behind the blocks with the Heartless sigil at High Tower.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Ramuh Belt",
              "area": "Lift Stop",
              "where": "Cast Gravity on the small floating platform above; area accessible by activating the switching node at High Tower, then activating the node at the Lift Stop passage from the Library.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Dalmatians (94-96)",
              "area": "Castle Gates",
              "where": "Cast Gravity on the floating chest in the far corner. Requires Glide.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Orichalcum",
              "area": "Castle Gates",
              "where": "On a lone pillar in front of the castle; accessible by activating the moving platforms and using Glide.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Haste2-G",
              "area": "Castle Gates",
              "where": "On a high ledge near the metal gates; accessible by activating the moving platforms and using Glide.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Thundaga-G",
              "area": "Great Crest",
              "where": "Along the castle's wall, accessible after riding the large circular platform across the front of the castle.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Orichalcum",
              "area": "Great Crest",
              "where": "In a corner near some rubble, on your immediate left after passing through the Lift Stop.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Thundara Ring",
              "area": "High Tower",
              "where": "Cast Gravity on the small floating platform above, on the right side of the area near the entrance to the Lift Stop.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Osmose-G ⯇",
              "area": "High Tower",
              "where": "Cast Gravity on the small floating platform above, on the left side of the area accessible through the Lift Stop.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Megalixir",
              "area": "High Tower",
              "where": "On a high ledge, accessible by activating the nodes that move the blocks with the Heartless sigil.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Oblivion",
              "area": "Grand Hall",
              "where": "On a high ledge, across from the portal to the Dark Depths; accessible during second story episode.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Dalmatians (61-63)",
              "area": "Grand Hall",
              "where": "On a ledge in the left side of the area.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Dark Matter",
              "area": "Grand Hall",
              "where": "Along the right wall, near the stairs.",
              "g": "Hollow Bastion"
            },
            {
              "name": "Mythril Shard",
              "area": "Rising Falls",
              "where": "The first green chest along the invisible path.",
              "g": "End of the World"
            },
            {
              "name": "Pretty Stone",
              "area": "Rising Falls",
              "where": "The second green chest along the invisible path; chest will spawn Heartless.",
              "g": "End of the World"
            },
            {
              "name": "Mega-Potion",
              "area": "Rising Falls",
              "where": "The third green chest along the invisible path.",
              "g": "End of the World"
            },
            {
              "name": "Mythril",
              "area": "Rising Falls",
              "where": "The red chest near the midpoint of the invisible path; chest will spawn Destroyed Behemoth.",
              "g": "End of the World"
            },
            {
              "name": "Elixir",
              "area": "Rising Falls",
              "where": "The fourth green chest, just past the midpoint of the invisible path.",
              "g": "End of the World"
            },
            {
              "name": "Mythril Shard",
              "area": "Rising Falls",
              "where": "The fifth green chest, past the midpoint of the invisible path.",
              "g": "End of the World"
            },
            {
              "name": "Pretty Stone",
              "area": "Rising Falls",
              "where": "The sixth green chest, past the midpoint of the invisible path; chest will spawn Heartless.",
              "g": "End of the World"
            },
            {
              "name": "Cottage",
              "area": "Rising Falls",
              "where": "The second red chest, near the end of the invisible path.",
              "g": "End of the World"
            },
            {
              "name": "AP Up",
              "area": "Rising Falls",
              "where": "The seventh green chest, near the end of the invisible path on the far left.",
              "g": "End of the World"
            },
            {
              "name": "Gale",
              "area": "Rising Falls",
              "where": "The eighth and final green chest, at the end of the invisible path; chest will spawn Heartless.",
              "g": "End of the World"
            },
            {
              "name": "Dark Matter",
              "area": "Giant Crevasse",
              "where": "Near the top of the area with some stalagmites.",
              "g": "End of the World"
            },
            {
              "name": "Meteor Strike",
              "area": "Giant Crevasse",
              "where": "On a high small ledge under a room covered in purple webbing; Heartless will spawn in here.",
              "g": "End of the World"
            },
            {
              "name": "Drill-G",
              "area": "Giant Crevasse",
              "where": "On a ledge near the middle of the area.",
              "g": "End of the World"
            },
            {
              "name": "Ultima-G",
              "area": "Giant Crevasse",
              "where": "On a ledge near the middle of the area, connected by two narrow ledges.",
              "g": "End of the World"
            },
            {
              "name": "Full-Life-G",
              "area": "Giant Crevasse",
              "where": "On a small ledge under a room covered in purple webbing; Heartless will spawn in here.",
              "g": "End of the World"
            },
            {
              "name": "Spirit Gem",
              "area": "World Terminus: Traverse Town",
              "where": "In the corner to the right of the fountain.",
              "g": "End of the World"
            },
            {
              "name": "Thunder Gem",
              "area": "World Terminus: Wonderland",
              "where": "Along the wall under some hanging pictures.",
              "g": "End of the World"
            },
            {
              "name": "Frost Gem",
              "area": "World Terminus: Olympus Coliseum",
              "where": "In the northeast corner, behind the foot of the statue.",
              "g": "End of the World"
            },
            {
              "name": "Bright Gem",
              "area": "World Terminus: Deep Jungle",
              "where": "On the mossy rock near the center of the area.",
              "g": "End of the World"
            },
            {
              "name": "Blaze Gem",
              "area": "World Terminus: Agrabah",
              "where": "On the highest platform in the southwest corner of the Palace Gates.",
              "g": "End of the World"
            },
            {
              "name": "AP Up",
              "area": "World Terminus: Atlantica",
              "where": "On the ocean floor, near the caved in passage on the far wall.",
              "g": "End of the World"
            },
            {
              "name": "Lucid Gem",
              "area": "World Terminus: Halloween Town",
              "where": "On the highest platform with the orange-colored button.",
              "g": "End of the World"
            },
            {
              "name": "Mighty Shield",
              "area": "World Terminus: Neverland",
              "where": "In the corner of the Galley, near the stove.",
              "g": "End of the World"
            },
            {
              "name": "Megalixir",
              "area": "World Terminus: Hundred Acre Wood",
              "where": "Near the save point.",
              "g": "End of the World"
            },
            {
              "name": "Elixir",
              "area": "World Terminus: Hollow Bastion",
              "where": "Inside the inner room, along the southwest wall.",
              "g": "End of the World"
            },
            {
              "name": "Megalixir",
              "area": "Final Rest",
              "where": "Near the save point.",
              "g": "End of the World"
            },
            {
              "name": "Mythril Shard",
              "area": "Meadow",
              "where": "In the end of the hollowed out log in the center of the area.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "Mega-Ether",
              "area": "Pooh's House",
              "where": "Strike the chimney on the roof; the item will fall onto the floor inside.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "Elixir",
              "area": "Pooh's House",
              "where": "Open the cabinet in the corner.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "AP Up",
              "area": "Bouncing Spot",
              "where": "Inside the stump in the center of the area.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "Mythril",
              "area": "Bouncing Spot",
              "where": "Strike the darkened part of the log near the back of the area.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "Dark Matter",
              "area": "Bouncing Spot",
              "where": "In a small alcove behind Tigger & Roo's see-saw. You can use the see-saw with Roo, drop down and Glide inside the alcove.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "Mythril Shard",
              "area": "Bouncing Spot",
              "where": "On a high ledge in the northwest; use the see-saw with Tigger.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "Shield2-G",
              "area": "Bouncing Spot",
              "where": "Jump into the hole in the top of the tree nearest Pooh; use the see-saw with Tigger.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "Rare Fruit",
              "area": "Bouncing Spot",
              "where": "Use the see-saw with Roo. *Rare fruits can be exchanged with Owl for the following prizes: Power Up, Defense Up, Mythril Shard, AP Up, Orichalcum.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "Rare Fruit",
              "area": "Bouncing Spot",
              "where": "Use the see-saw with Roo.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "Rare Fruit",
              "area": "Bouncing Spot",
              "where": "Step on a tree stump in the corner to activate a geyser. Jump on the floating tree stump.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "Rare Fruit",
              "area": "Bouncing Spot",
              "where": "Step on a tree stump in the corner to activate a geyser. Jump on the floating platform, and from there, jump onto some tree leaves.",
              "g": "Hundred Acre Wood"
            },
            {
              "name": "Rare Fruit",
              "area": "Bouncing Spot",
              "where": "Use the see-saw with Tigger, then jump or Glide through the branches and tree leaves.",
              "g": "Hundred Acre Wood"
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
              "k": "num",
              "name": true
            },
            {
              "k": "desc"
            },
            {
              "k": "reward"
            }
          ],
          "items": [
            {
              "num": "1",
              "desc": "Obtain a score of 80 or higher.",
              "reward": "Wheel-G",
              "g": "Traverse Town"
            },
            {
              "num": "2",
              "desc": "Set off from Olympus Coliseum, and collect 30 or more shield blocks.",
              "reward": "Fang-G",
              "g": "Traverse Town"
            },
            {
              "num": "3",
              "desc": "Set off from Hollow Bastion, and get a 0 score while taking no damage. Use of Shield-G and Shield2-G is prohibited.",
              "reward": "Moogles",
              "g": "Traverse Town"
            },
            {
              "num": "1",
              "desc": "Obtain a score of 120 or higher.",
              "reward": "Wheel-G",
              "g": "Wonderland"
            },
            {
              "num": "2",
              "desc": "Set off for Wonderland while using a Haste-G or Haste2-G block, use Accelerate 5 or more times while taking no damage.",
              "reward": "Fang-G",
              "g": "Wonderland"
            },
            {
              "num": "3",
              "desc": "Set off from Traverse Town, and collect 40 or more gummi blocks.",
              "reward": "Valefor",
              "g": "Wonderland"
            },
            {
              "num": "1",
              "desc": "Obtain a score of 180 or higher.",
              "reward": "Fang-G",
              "g": "Olympus Coliseum"
            },
            {
              "num": "2",
              "desc": "Set off from Deep Jungle with only Thundara-G as a weapon. Destroy 70 or more enemy ships.",
              "reward": "Horn-G",
              "g": "Olympus Coliseum"
            },
            {
              "num": "3",
              "desc": "Set off from Traverse Town, and destroy all 140 obstacles.",
              "reward": "PuPu",
              "g": "Olympus Coliseum"
            },
            {
              "num": "1",
              "desc": "Obtain a score of 200 or higher.",
              "reward": "Wheel-G",
              "g": "Deep Jungle"
            },
            {
              "num": "2",
              "desc": "Set off from Agrabah, and collect 10 or more special blocks.",
              "reward": "Fang-G",
              "g": "Deep Jungle"
            },
            {
              "num": "3",
              "desc": "Set off from Wonderland with only Thundaga-G as a weapon. Destroy 55 or more enemy ships.",
              "reward": "Cerberus",
              "g": "Deep Jungle"
            },
            {
              "num": "1",
              "desc": "Obtain a score of 330 or higher.",
              "reward": "Wheel-G",
              "g": "Agrabah"
            },
            {
              "num": "2",
              "desc": "Set off from Wonderland with only Comet-G as a weapon. Destroy 130 or more enemy ships.",
              "reward": "Horn-G",
              "g": "Agrabah"
            },
            {
              "num": "3",
              "desc": "Collect 130 or more gummi blocks. Use of Drain-G and Osmose-G is prohibited.",
              "reward": "Tonberry",
              "g": "Agrabah"
            },
            {
              "num": "1",
              "desc": "Collect 10 or more armor blocks!",
              "reward": "Wheel-G",
              "g": "Atlantica"
            },
            {
              "num": "2",
              "desc": "Keep all obstacles intact, and obtain a score of 240 or higher.",
              "reward": "Caterpillar-G",
              "g": "Atlantica"
            },
            {
              "num": "3",
              "desc": "Avoid all items, and obtain a score of 260 or higher",
              "reward": "Pandaemonium",
              "g": "Atlantica"
            },
            {
              "num": "1",
              "desc": "Collect 20 or more power blocks!",
              "reward": "Wheel-G",
              "g": "Halloween Town"
            },
            {
              "num": "2",
              "desc": "Destroy 220 or more enemy ships without using the brakes.",
              "reward": "Caterpillar-G",
              "g": "Halloween Town"
            },
            {
              "num": "3",
              "desc": "Set off from Neverland with only Meteor-G as a weapon. Obtain a score of 550 or higher.",
              "reward": "Ixion",
              "g": "Halloween Town"
            },
            {
              "num": "1",
              "desc": "Set off from Atlantica with only Thunder-G as a weapon. Destroy 150 or more enemy ships.",
              "reward": "Rock-G",
              "g": "Neverland"
            },
            {
              "num": "2",
              "desc": "Use 100 or more gummi blocks, and set off from Olympus Coliseum. Arrive in Neverland without taking any damage.",
              "reward": "Drill-G",
              "g": "Neverland"
            },
            {
              "num": "3",
              "desc": "Use 10 or fewer gummi blocks, and set off from Olympus Coliseum. Destroy 777 or more obstacles.",
              "reward": "Gilgamesh",
              "g": "Neverland"
            },
            {
              "num": "1",
              "desc": "Set off from Neverland with only Ultima-G as a weapon Destroy 130 or more enemy ships.",
              "reward": "Rock-G",
              "g": "Hollow Bastion"
            },
            {
              "num": "2",
              "desc": "Obtain a score of 1,600 or higher.",
              "reward": "Angel-G",
              "g": "Hollow Bastion"
            },
            {
              "num": "3",
              "desc": "Use Haste2-G 10 or more times without taking damage. Use of Shield-G and Shield2-G is prohibited.",
              "reward": "Phoenix",
              "g": "Hollow Bastion"
            },
            {
              "num": "1",
              "desc": "Use 2 or fewer gummi blocks, and arrive without taking any damage or using the brakes.",
              "reward": "Shoes-G",
              "g": "End of the World"
            },
            {
              "num": "2",
              "desc": "Use 5 or fewer gummi blocks, and obtain a score of 350 or higher.",
              "reward": "Dark-G",
              "g": "End of the World"
            },
            {
              "num": "3",
              "desc": "Obtain a score of 600 or higher.",
              "reward": "Eden",
              "g": "End of the World"
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
              "name": "Kingdom",
              "how": "Received by default."
            },
            {
              "name": "Geppetto",
              "how": "Speak with Geppetto once."
            },
            {
              "name": "Cid",
              "how": "Speak with Geppetto after defeating 500 Heartless."
            },
            {
              "name": "Yuffie",
              "how": "Speak with Geppetto after defeating 1500 Heartless."
            },
            {
              "name": "Cactuar",
              "how": "Speak with Geppetto after defeating 1000 Heartless."
            },
            {
              "name": "Aerith",
              "how": "Speak with Geppetto after defeating 3000 Heartless."
            },
            {
              "name": "Leon",
              "how": "Speak with Geppetto after defeating 4000 Heartless."
            },
            {
              "name": "Hyperion",
              "how": "Speak with Geppetto after defeating 5000 Heartless and obtaining all six summons."
            },
            {
              "name": "Chocobo",
              "how": "Speak with Pinocchio after entering Geppetto's House 30 times."
            },
            {
              "name": "Ahriman",
              "how": "Defeat Ahriman enemy ships (for instance, in Traverse Town ↔ Wonderland)."
            },
            {
              "name": "Alexander",
              "how": "Defeat Alexander enemy ships (for instance, in Traverse Town ↔ Wonderland)."
            },
            {
              "name": "Sylph",
              "how": "Defeat Sylph enemy ships (for instance, in Traverse Town ↔ Wonderland)."
            },
            {
              "name": "Goblin",
              "how": "Defeat Goblin enemy ships (for instance, in Traverse Town ↔ Wonderland)."
            },
            {
              "name": "Shiva",
              "how": "Defeat Shiva enemy ships (for instance, in Traverse Town ↔ Olympus Colseum)."
            },
            {
              "name": "Ramuh",
              "how": "Defeat Ramuh enemy ships (for instance, in Traverse Town ↔ Olympus Colseum)."
            },
            {
              "name": "Odin",
              "how": "Defeat Odin enemy ships (for instance, in Wonderland ↔ Deep Jungle)."
            },
            {
              "name": "Golem",
              "how": "Defeat Golem enemy ships (for instance, in Wonderland ↔ Deep Jungle)."
            },
            {
              "name": "Cindy",
              "how": "Defeat Cindy enemy ships (for instance, in Wonderland ↔ Deep Jungle)."
            },
            {
              "name": "Sandy",
              "how": "Defeat Sandy enemy ships (for instance, in Agrabah ↔ Halloween Town)."
            },
            {
              "name": "Carbuncle",
              "how": "Defeat Carbuncle enemy ships (for instance, in Agrabah ↔ Halloween Town)."
            },
            {
              "name": "Atomos",
              "how": "Defeat Atomos enemy ships (for instance, in Agrabah ↔ Halloween Town)."
            },
            {
              "name": "Typhoon",
              "how": "Defeat Typhoon enemy ships (for instance, in Agrabah ↔ Halloween Town)."
            },
            {
              "name": "Diablos",
              "how": "Defeat Diablos enemy ships (for instance, in Atlantica ↔ Neverland)."
            },
            {
              "name": "Catoblepas",
              "how": "Defeat Catoblepas enemy ships (for instance, in Atlantica ↔ Neverland)."
            },
            {
              "name": "Mindy",
              "how": "Defeat Mindy enemy ships (for instance, in Atlantica ↔ Neverland)."
            },
            {
              "name": "Bomb",
              "how": "Defeat Bomb enemy ships (for instance, in Atlantica ↔ Neverland)."
            },
            {
              "name": "Leviathan",
              "how": "Defeat Leviathan enemy ships (for instance, Neverland ↔ Hollow Bastion)."
            },
            {
              "name": "Deathguise",
              "how": "Defeat Deathguise enemy ships (for instance, Neverland ↔ Hollow Bastion)."
            },
            {
              "name": "Serpent",
              "how": "Defeat Serpent enemy ships (for instance, Neverland ↔ Hollow Bastion)."
            },
            {
              "name": "Adamant",
              "how": "Defeat Adamant enemy ships (for instance, Neverland ↔ Hollow Bastion)."
            },
            {
              "name": "Stingray",
              "how": "Defeat Stingray enemy ships (for instance, Neverland ↔ Hollow Bastion)."
            },
            {
              "name": "Lamia",
              "how": "Defeat Lamia enemy ships (for instance, Neverland ↔ Hollow Bastion)."
            },
            {
              "name": "Omega",
              "how": "Defeat Omega enemy ships in Hollow Bastion ↔ End of the World."
            },
            {
              "name": "Remora",
              "how": "Defeat Remora enemy ships in the orange warp."
            },
            {
              "name": "Imp",
              "how": "Defeat Imp enemy ships in the orange warp."
            },
            {
              "name": "Ifrit",
              "how": "Defeat Ifrit enemy ships in the purple warp."
            },
            {
              "name": "Siren",
              "how": "Defeat Siren enemy ships in the orange or purple warps."
            },
            {
              "name": "Moogles",
              "how": "Complete Gummi Mission: Traverse Town Level 3."
            },
            {
              "name": "Valefor",
              "how": "Complete Gummi Mission: Wonderland Level 3."
            },
            {
              "name": "PuPu",
              "how": "Complete Gummi Mission: Olympus Coliseum Level 3."
            },
            {
              "name": "Cerberus",
              "how": "Complete Gummi Mission: Deep Jungle Level 3."
            },
            {
              "name": "Tonberry",
              "how": "Complete Gummi Mission: Agrabah Level 3."
            },
            {
              "name": "Pandaemonium",
              "how": "Complete Gummi Mission: Atlantica Level 3."
            },
            {
              "name": "Ixion",
              "how": "Complete Gummi Mission: Halloween Town Level 3."
            },
            {
              "name": "Gilgamesh",
              "how": "Complete Gummi Mission: Neverland Level 3."
            },
            {
              "name": "Phoenix",
              "how": "Complete Gummi Mission: Hollow Bastion Level 3."
            },
            {
              "name": "Eden",
              "how": "Complete Gummi Mission: End of the World Level 3."
            },
            {
              "name": "Bahamut",
              "how": "Complete all Gummi Missions."
            }
          ]
        }
      ]
    }
  ],
  "autoChecks": [
    {
      "from": "treasures",
      "to": "dalmatians",
      "toKey": "num",
      "map": {
        "Dalmatians (1-3)": "1 - 2 - 3",
        "Dalmatians (4-6)": "4 - 5 - 6",
        "Dalmatians (7-9)": "7 - 8 - 9",
        "Dalmatians (10-12)": "10 - 11 - 12",
        "Dalmatians (13-15)": "13 - 14 - 15",
        "Dalmatians (16-18)": "16 - 17 - 18",
        "Dalmatians (19-21)": "19 - 20 - 21",
        "Dalmatians (22-24)": "22 - 23 - 24",
        "Dalmatians (25-27)": "25 - 26 - 27",
        "Dalmatians (28-30)": "28 - 29 - 30",
        "Dalmatians (31-33)": "31 - 32 - 33",
        "Dalmatians (34-36)": "34 - 35 - 36",
        "Dalmatians (37-39)": "37 - 38 - 39",
        "Dalmatians (40-42)": "40 - 41 - 42",
        "Dalmatians (43-45)": "43 - 44 - 45",
        "Dalmatians (46-48)": "46 - 47 - 48",
        "Dalmatians (49-51)": "49 - 50 - 51",
        "Dalmatians (52-54)": "52 - 53 - 54",
        "Dalmatians (55-57)": "55 - 56 - 57",
        "Dalmatians (58-60)": "58 - 59 - 60",
        "Dalmatians (61-63)": "61 - 62 - 63",
        "Dalmatians (64-66)": "64 - 65 - 66",
        "Dalmatians (67-69)": "67 - 68 - 69",
        "Dalmatians (70-72)": "70 - 71 - 72",
        "Dalmatians (73-75)": "73 - 74 - 75",
        "Dalmatians (76-78)": "76 - 77 - 78",
        "Dalmatians (79-81)": "79 - 80 - 81",
        "Dalmatians (82-84)": "82 - 83 - 84",
        "Dalmatians (85-87)": "85 - 86 - 87",
        "Dalmatians (88-90)": "88 - 89 - 90",
        "Dalmatians (91-93)": "91 - 92 - 93",
        "Dalmatians (94-96)": "94 - 95 - 96",
        "Dalmatians (97-99)": "97 - 98 - 99"
      }
    },
    {
      "from": "treasures",
      "to": "keyblades",
      "map": {
        "Wishing Star": "Wishing Star",
        "Olympia": "Olympia",
        "Lady Luck": "Lady Luck",
        "Oblivion": "Oblivion"
      }
    },
    {
      "from": "treasures",
      "to": "staves",
      "map": {
        "Violetta": "Violetta",
        "Meteor Strike": "Meteor Strike"
      }
    },
    {
      "from": "treasures",
      "to": "shields",
      "map": {
        "Mighty Shield": "Mighty Shield"
      }
    },
    {
      "from": "coliseum",
      "to": "keyblades",
      "map": {
        "Gold Match": "Diamond Dust",
        "Platinum Match": "One-Winged Angel"
      }
    },
    {
      "from": "coliseum",
      "to": "reports",
      "map": {
        "Platinum Match": "Ansem Report 12"
      }
    },
    {
      "from": "coliseum",
      "to": "staves",
      "map": {
        "Hades Cup (Solo)": "Save the Queen"
      }
    },
    {
      "from": "coliseum",
      "to": "shields",
      "map": {
        "Hades Cup (Time Trial)": "Save the King"
      }
    }
  ]
};

(window.KH_GAMES = window.KH_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;
