/* =====================================================================
   KINGDOM HEARTS III Re Mind — completion checklist data + tracker config
   Extracted from xenodusk's "KINGDOM HEARTS III Re Mind Checklist"
   spreadsheet (v1.01, July 20, 2024).
   Consumed by js/kh-tracker.js (generic engine). Item order is
   load-bearing: saved progress is keyed by index. The PS4-only Platinum
   trophy is intentionally omitted.
   ===================================================================== */
const TRACKER_GAME = {
  "id": "kh3",
  "storeKey": "kh3_progress_v1",
  "charKey": null,
  "chars": [],
  "trophyAuto": {
    "Hidden Kings": "lucky",
    "Know Thine Enemy": "adversaries",
    "No Stone Unturned": "treasures",
    "Synthesist": "synthrecipes",
    "One for the Books": "records",
    "Flanmeister": "flan",
    "Cornucopia": "ingredients",
    "Classically Trained": "classic"
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
              "name": "A New Journey",
              "desc": "Begin your brand new adventure."
            },
            {
              "rarity": "Bronze",
              "name": "Clash of the Gods",
              "desc": "Adventure through Olympus and complete the story."
            },
            {
              "rarity": "Bronze",
              "name": "A Wish at Twilight",
              "desc": "Adventure through Twilight Town and complete the story."
            },
            {
              "rarity": "Bronze",
              "name": "Inseparable Friends",
              "desc": "Adventure through Toy Box and complete the story."
            },
            {
              "rarity": "Bronze",
              "name": "Happily Ever After",
              "desc": "Adventure through the Kingdom of Corona and complete the story."
            },
            {
              "rarity": "Bronze",
              "name": "The Power of Laughter",
              "desc": "Adventure through Monstropolis and complete the story."
            },
            {
              "rarity": "Bronze",
              "name": "An Act of True Love",
              "desc": "Adventure through Arendelle and complete the story."
            },
            {
              "rarity": "Bronze",
              "name": "Way of the Pirate",
              "desc": "Adventure through The Caribbean and complete the story."
            },
            {
              "rarity": "Bronze",
              "name": "Making a Difference",
              "desc": "Adventure through San Fransokyo and complete the story."
            },
            {
              "rarity": "Bronze",
              "name": "Home Again",
              "desc": "Adventure through the Hundred Acre Wood and complete the story."
            },
            {
              "rarity": "Bronze",
              "name": "The Hearts Joined to His",
              "desc": "Gather the seven guardians of light."
            },
            {
              "rarity": "Bronze",
              "name": "No Matter What",
              "desc": "Reunite with Kairi."
            },
            {
              "rarity": "Silver",
              "name": "The Battle to End All",
              "desc": "Begin the final confrontation with Master Xehanort."
            },
            {
              "rarity": "Gold",
              "name": "Another Chapter Closed",
              "desc": "Finish the game and view the ending."
            },
            {
              "rarity": "Gold",
              "name": "Hidden Kings",
              "desc": "Complete the Lucky Emblems section of the Gummiphone."
            },
            {
              "rarity": "Bronze",
              "name": "Know Thine Enemy",
              "desc": "Complete the Adversaries section of the Gummiphone."
            },
            {
              "rarity": "Silver",
              "name": "No Stone Unturned",
              "desc": "Complete the Treasures section of the Gummiphone."
            },
            {
              "rarity": "Silver",
              "name": "Synthesist",
              "desc": "Complete the Synthesis section of the Gummiphone."
            },
            {
              "rarity": "Bronze",
              "name": "One for the Books",
              "desc": "Complete the Game Records section of the Gummiphone."
            },
            {
              "rarity": "Bronze",
              "name": "Tall Enough to Ride",
              "desc": "Use an attraction to defeat enemies for the first time."
            },
            {
              "rarity": "Bronze",
              "name": "Heartbound",
              "desc": "Use a link to defeat enemies for the first time."
            },
            {
              "rarity": "Bronze",
              "name": "Grand Mage",
              "desc": "Cast grand magic for the first time."
            },
            {
              "rarity": "Bronze",
              "name": "Knight",
              "desc": "Defeat 1,000 enemies."
            },
            {
              "rarity": "Bronze",
              "name": "Bishop",
              "desc": "Defeat 3,000 enemies."
            },
            {
              "rarity": "Silver",
              "name": "Rook",
              "desc": "Defeat 5,000 enemies."
            },
            {
              "rarity": "Silver",
              "name": "Flanmeister",
              "desc": "Complete all of the Flantastic Seven missions."
            },
            {
              "rarity": "Bronze",
              "name": "Salvager",
              "desc": "Use the gummi ship to obtain 20 unique treasures."
            },
            {
              "rarity": "Bronze",
              "name": "Stargazer",
              "desc": "Use the gummi ship to find and photograph all the constellations."
            },
            {
              "rarity": "Gold",
              "name": "Thermosphere",
              "desc": "Destroy the Schwarzgeist, menace of the Ocean Between."
            },
            {
              "rarity": "Bronze",
              "name": "Centurion",
              "desc": "Score at least 12,000,000 pts. in Verum Rex: Beat of Lead."
            },
            {
              "rarity": "Bronze",
              "name": "Festive Dancer",
              "desc": "Score at least 70,000 pts. in the Festival Dance."
            },
            {
              "rarity": "Bronze",
              "name": "Shield Shredder",
              "desc": "Score at least 600,000 pts. in Frozen Slider."
            },
            {
              "rarity": "Bronze",
              "name": "Datascraper",
              "desc": "Get an A rank on both Flash Tracer courses."
            },
            {
              "rarity": "Silver",
              "name": "Dreadnought",
              "desc": "Fully power up the Leviathan."
            },
            {
              "rarity": "Bronze",
              "name": "True Captain",
              "desc": "Sink 200 enemy ships in The Caribbean."
            },
            {
              "rarity": "Bronze",
              "name": "Say Cheese!",
              "desc": "Snap your first photo."
            },
            {
              "rarity": "Bronze",
              "name": "Lasting Memories",
              "desc": "Hold on to 50 photos."
            },
            {
              "rarity": "Bronze",
              "name": "Cornucopia",
              "desc": "Collect every type of ingredient."
            },
            {
              "rarity": "Bronze",
              "name": "Full Course",
              "desc": "Earn your first \"Excellent\" while preparing cuisine."
            },
            {
              "rarity": "Silver",
              "name": "Master Chef",
              "desc": "Earn an \"Excellent\" while preparing every type of cuisine."
            },
            {
              "rarity": "Bronze",
              "name": "Muscle Memory",
              "desc": "Get a new high score in one of the Classic Kingdom games."
            },
            {
              "rarity": "Silver",
              "name": "Classically Trained",
              "desc": "Get a new high score in every Classic Kingdom game."
            },
            {
              "rarity": "Bronze",
              "name": "Blademaster",
              "desc": "Obtain a Keyblade that is fully powered up."
            },
            {
              "rarity": "Silver",
              "name": "Ultima Weapon",
              "desc": "Synthesize the Ultima Weapon."
            },
            {
              "rarity": "Silver",
              "name": "Leveled Out",
              "desc": "Raise Sora to LV 99."
            },
            {
              "rarity": "Bronze",
              "name": "All-rounder",
              "desc": "Earn all EZ Code merits.",
              "g": "Re Mind DLC"
            },
            {
              "rarity": "Gold",
              "name": "Risk-taker",
              "desc": "Reach the highest PRO Code merit rank.",
              "g": "Re Mind DLC"
            },
            {
              "rarity": "Bronze",
              "name": "Behind the Curtain",
              "desc": "Clear KINGDOM HEARTS III Re Mind.",
              "g": "Re Mind DLC"
            },
            {
              "rarity": "Bronze",
              "name": "Start Analysis",
              "desc": "Eliminate One Darkness in the datascape.",
              "g": "Re Mind DLC"
            },
            {
              "rarity": "Silver",
              "name": "Analysis Complete",
              "desc": "Eliminate Thirteen Darknesses in the datascape.",
              "g": "Re Mind DLC"
            },
            {
              "rarity": "Silver",
              "name": "Beyond the Curtain",
              "desc": "Defeat Yozora.",
              "g": "Re Mind DLC"
            }
          ]
        }
      ]
    },
    {
      "id": "gummiphone",
      "sections": [
        {
          "id": "lucky",
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
              "name": "1",
              "area": "Overlook",
              "where": "Near the base of the statue holding up a shield, by some stairs",
              "g": "Olympus"
            },
            {
              "name": "2",
              "area": "The Big Olive",
              "where": "In the center of the Trinity Sled course",
              "g": "Olympus"
            },
            {
              "name": "3",
              "area": "Agora",
              "where": "On the stairs south from the save point",
              "g": "Olympus"
            },
            {
              "name": "4",
              "area": "Overlook",
              "where": "South from the save point",
              "g": "Olympus"
            },
            {
              "name": "5",
              "area": "Cliff Ascent",
              "where": "On a carved stone pillar along the southern face of the mountain",
              "g": "Olympus"
            },
            {
              "name": "6",
              "area": "Cliff Ascent",
              "where": "Emblazoned on the Free Run wall next to the waterfall",
              "g": "Olympus"
            },
            {
              "name": "7",
              "area": "Cliff Ascent",
              "where": "Only viewable from high up on the mountain, on top of a rock pillar",
              "g": "Olympus"
            },
            {
              "name": "8",
              "area": "Mountainside",
              "where": "In the dark cave, made up of vines hanging from a dead tree",
              "g": "Olympus"
            },
            {
              "name": "9",
              "area": "Corridors",
              "where": "Northeast from the save point, on the side of the stairs",
              "g": "Olympus"
            },
            {
              "name": "10",
              "area": "Corridors",
              "where": "North from the save point, in a rectangular room",
              "g": "Olympus"
            },
            {
              "name": "11",
              "area": "Secluded Forge",
              "where": "On the anvil",
              "g": "Olympus"
            },
            {
              "name": "12",
              "area": "Cloud Ridge",
              "where": "Made of clouds, viewable from the balcony to the southeast",
              "g": "Olympus"
            },
            {
              "name": "1",
              "area": "Tram Common",
              "where": "Next to the Gummi Shop",
              "g": "Twilight Town"
            },
            {
              "name": "2",
              "area": "Tram Common",
              "where": "On top of the Tram",
              "g": "Twilight Town"
            },
            {
              "name": "3",
              "area": "Tram Common",
              "where": "On top of the Synthesis buildings",
              "g": "Twilight Town"
            },
            {
              "name": "4",
              "area": "Tram Common",
              "where": "In the theatre area, on the screen",
              "g": "Twilight Town"
            },
            {
              "name": "5",
              "area": "Tram Common",
              "where": "On the roof of the green building, some dishes on a table",
              "g": "Twilight Town"
            },
            {
              "name": "6",
              "area": "The Woods",
              "where": "On the doors leading to the Underground Conduit",
              "g": "Twilight Town"
            },
            {
              "name": "7",
              "area": "The Woods",
              "where": "Climb the western wall",
              "g": "Twilight Town"
            },
            {
              "name": "8",
              "area": "The Woods",
              "where": "In the southeast corner, on a hill",
              "g": "Twilight Town"
            },
            {
              "name": "9",
              "area": "The Old Mansion",
              "where": "On the wall facing south",
              "g": "Twilight Town"
            },
            {
              "name": "1",
              "area": "Andy's House",
              "where": "On a blue shoebox, on top of the shelves beside the bedroom door",
              "g": "Toy Box"
            },
            {
              "name": "2",
              "area": "Andy's House",
              "where": "On a shingle at the northwest corner of the garage roof",
              "g": "Toy Box"
            },
            {
              "name": "3",
              "area": "Andy's House",
              "where": "Made up of some leaves in front of the front door",
              "g": "Toy Box"
            },
            {
              "name": "4",
              "area": "Andy's House",
              "where": "On the trunk of the silver car northeast from the house",
              "g": "Toy Box"
            },
            {
              "name": "5",
              "area": "Galaxy Toys",
              "where": "Look for the tape rolls behind checkout register 3",
              "g": "Toy Box"
            },
            {
              "name": "6",
              "area": "Galaxy Toys",
              "where": "Main Floor: 1F, destroy the north circular toy display",
              "g": "Toy Box"
            },
            {
              "name": "7",
              "area": "Galaxy Toys",
              "where": "Lower Vents, by the fan that blows vertically",
              "g": "Toy Box"
            },
            {
              "name": "8",
              "area": "Galaxy Toys",
              "where": "Main Floor: 3F, jump off the eastern walkway to the UFO below",
              "g": "Toy Box"
            },
            {
              "name": "9",
              "area": "Galaxy Toys",
              "where": "Doll store, formed of the disco balls above the checkout",
              "g": "Toy Box"
            },
            {
              "name": "10",
              "area": "Galaxy Toys",
              "where": "Main Floor: 3F, on the wall southeast from the save point",
              "g": "Toy Box"
            },
            {
              "name": "11",
              "area": "Galaxy Toys",
              "where": "Outside the front doors, on some packages",
              "g": "Toy Box"
            },
            {
              "name": "1",
              "area": "Tower",
              "where": "Made up of rocks on the shore next to the waterfall",
              "g": "Kingdom of Corona"
            },
            {
              "name": "2",
              "area": "Marsh",
              "where": "Along the western edge of the marsh, in a nook",
              "g": "Kingdom of Corona"
            },
            {
              "name": "3",
              "area": "Wetlands",
              "where": "Inside the cave, on a barrel along the eastern wall",
              "g": "Kingdom of Corona"
            },
            {
              "name": "4",
              "area": "Shore",
              "where": "East of the entrance to the city, on the stone barrier",
              "g": "Kingdom of Corona"
            },
            {
              "name": "5",
              "area": "Thoroughfare",
              "where": "On the west side of the arch before the Festival square",
              "g": "Kingdom of Corona"
            },
            {
              "name": "6",
              "area": "Thoroughfare",
              "where": "On a pair of wooden doors northwest of the Festival square",
              "g": "Kingdom of Corona"
            },
            {
              "name": "7",
              "area": "Wharf",
              "where": "By the western door on the squat stone tower",
              "g": "Kingdom of Corona"
            },
            {
              "name": "8",
              "area": "Wharf",
              "where": "At the southeast corner, made up of barrels",
              "g": "Kingdom of Corona"
            },
            {
              "name": "9",
              "area": "Wharf",
              "where": "In the center of the brazier on top of the lighthouse",
              "g": "Kingdom of Corona"
            },
            {
              "name": "1",
              "area": "Laugh Floor",
              "where": "On a desk, seventh from the south",
              "g": "Monstropolis"
            },
            {
              "name": "2",
              "area": "Laugh Floor",
              "where": "Under the rubber clown ball near the entrance",
              "g": "Monstropolis"
            },
            {
              "name": "3",
              "area": "Upper Level",
              "where": "From the save point, ride the rail, then check the east hallway",
              "g": "Monstropolis"
            },
            {
              "name": "4",
              "area": "Upper Level",
              "where": "On the wall behind the Banana Flan",
              "g": "Monstropolis"
            },
            {
              "name": "5",
              "area": "Ground Floor",
              "where": "In the southwest hallway, near a window",
              "g": "Monstropolis"
            },
            {
              "name": "6",
              "area": "Ground Floor",
              "where": "Made of paint, on the floor west from the save point",
              "g": "Monstropolis"
            },
            {
              "name": "7",
              "area": "Second Floor",
              "where": "From the elevator, check the southeast corner, in a hallway",
              "g": "Monstropolis"
            },
            {
              "name": "8",
              "area": "Accessway",
              "where": "Just north from the save point, on a filing cabinet",
              "g": "Monstropolis"
            },
            {
              "name": "9",
              "area": "Accessway",
              "where": "Far south from the save point, on a door frame to the east",
              "g": "Monstropolis"
            },
            {
              "name": "10",
              "area": "Tank Yard",
              "where": "From the save point, climb the north wall and look at the pipes",
              "g": "Monstropolis"
            },
            {
              "name": "11",
              "area": "Vault Access",
              "where": "Made of oil on the ground",
              "g": "Monstropolis"
            },
            {
              "name": "1",
              "area": "Treescape",
              "where": "Climb up to the Gorge, drop down to the hidden ledge, it's on a tree to the south",
              "g": "Arendelle"
            },
            {
              "name": "2",
              "area": "Middle Tier",
              "where": "From the entrance/exit orb, use the ice sculpture to go down; find the room with the bridge",
              "g": "Arendelle"
            },
            {
              "name": "3",
              "area": "Lower Tier",
              "where": "In the tunnel northeast from the save point",
              "g": "Arendelle"
            },
            {
              "name": "4",
              "area": "Middle Tier",
              "where": "On the bridge right before the Rail Gauntlet, look to the east",
              "g": "Arendelle"
            },
            {
              "name": "5",
              "area": "Upper Tier",
              "where": "In the northwest room",
              "g": "Arendelle"
            },
            {
              "name": "6",
              "area": "Mountain Ridge",
              "where": "At the top of the last Free Run wall from the Gorge",
              "g": "Arendelle"
            },
            {
              "name": "7",
              "area": "Frozen Wall",
              "where": "By the large Free Run wall, on a platform in the middle",
              "g": "Arendelle"
            },
            {
              "name": "8",
              "area": "Frozen Wall",
              "where": "From the Mountain Ridge entrance, at the north end of the path",
              "g": "Arendelle"
            },
            {
              "name": "9",
              "area": "Snowfield",
              "where": "South from the save point, top of the first Free Run wall",
              "g": "Arendelle"
            },
            {
              "name": "10",
              "area": "Snowfield",
              "where": "Made up of some logs near the Foothills save point",
              "g": "Arendelle"
            },
            {
              "name": "11",
              "area": "Foothills",
              "where": "In the area where there was a blizzard, fourth boulder from the northern exit",
              "g": "Arendelle"
            },
            {
              "name": "1",
              "area": "Rabbit's House",
              "where": "In the forest behind Gopher",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "2",
              "area": "Rabbit's House",
              "where": "On the rear of the giant pumpkin",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "3",
              "area": "Rabbit's House",
              "where": "Inside the bucket next to Rabbit's clothesline",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "1",
              "area": "Hiro's Garage",
              "where": "On the wall beside the Moogle shop",
              "g": "San Fransokyo"
            },
            {
              "name": "2",
              "area": "South District",
              "where": "East from the save point, red shrubs, viewed from above",
              "g": "San Fransokyo"
            },
            {
              "name": "3",
              "area": "South District",
              "where": "At night, ascend the building north of the save point, look north at a billboard",
              "g": "San Fransokyo"
            },
            {
              "name": "4",
              "area": "South District",
              "where": "Stand next to the red-and-white tower, look east to the statues",
              "g": "San Fransokyo"
            },
            {
              "name": "5",
              "area": "Central District",
              "where": "On top of a building just north of the overpass, near the west side of the map",
              "g": "San Fransokyo"
            },
            {
              "name": "6",
              "area": "Central District",
              "where": "On top of the large blue building, by the vents",
              "g": "San Fransokyo"
            },
            {
              "name": "7",
              "area": "Central District",
              "where": "On a fish-shaped windsock south from the North District save point",
              "g": "San Fransokyo"
            },
            {
              "name": "8",
              "area": "North District",
              "where": "Northwest from the save point, on some stairs",
              "g": "San Fransokyo"
            },
            {
              "name": "9",
              "area": "North District",
              "where": "Inside the monorail tunnel",
              "g": "San Fransokyo"
            },
            {
              "name": "10",
              "area": "North District",
              "where": "West from the monorail tunnel, on a taxi",
              "g": "San Fransokyo"
            },
            {
              "name": "11",
              "area": "North District",
              "where": "On the very top of the monorail building, Airstep to the top of the pole",
              "g": "San Fransokyo"
            },
            {
              "name": "1",
              "area": "Docks",
              "where": "On a small dinghy north of the docks",
              "g": "The Caribbean"
            },
            {
              "name": "2",
              "area": "Docks",
              "where": "In the southern building, behind a yellow crate",
              "g": "The Caribbean"
            },
            {
              "name": "3",
              "area": "Seaport",
              "where": "In the center building on the beach",
              "g": "The Caribbean"
            },
            {
              "name": "4",
              "area": "Seaport",
              "where": "On the back of a sign over the dock",
              "g": "The Caribbean"
            },
            {
              "name": "5",
              "area": "Fort",
              "where": "On the roof, near the flag and Watermelon Flan",
              "g": "The Caribbean"
            },
            {
              "name": "6",
              "area": "Fort",
              "where": "In one of the jail cells",
              "g": "The Caribbean"
            },
            {
              "name": "7",
              "area": "Isla Verdemontaña",
              "where": "Along the southwest side, in the water, viewable from above",
              "g": "The Caribbean"
            },
            {
              "name": "8",
              "area": "Isle of Luck",
              "where": "Boulders on the beach",
              "g": "The Caribbean"
            },
            {
              "name": "9",
              "area": "Horseshoe Island",
              "where": "Inside the horseshoe part, on the southern stack",
              "g": "The Caribbean"
            },
            {
              "name": "10",
              "area": "Northern Waters",
              "where": "On the small island just west of the Isle de los Mástiles",
              "g": "The Caribbean"
            },
            {
              "name": "11",
              "area": "Ship's End",
              "where": "On the deck of the ship sticking out of the water to the south",
              "g": "The Caribbean"
            },
            {
              "name": "12",
              "area": "Sandbar Isle",
              "where": "In the secret pool, one of the cave mouths",
              "g": "The Caribbean"
            },
            {
              "name": "13",
              "area": "Sandbar Isle",
              "where": "In the secret pool, on top of some rocks",
              "g": "The Caribbean"
            }
          ]
        },
        {
          "id": "adversaries",
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
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "Neoshadow",
              "where": "Twilight Town",
              "g": "Heartless"
            },
            {
              "name": "Fluttering",
              "where": "Kingdom of Corona",
              "g": "Heartless"
            },
            {
              "name": "Flame Core",
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "Water Core",
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "Earth Core",
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "Dark Inferno",
              "where": "The Keyblade Graveyard",
              "g": "Heartless"
            },
            {
              "name": "Soldier",
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "High Soldier",
              "where": "San Fransokyo",
              "g": "Heartless"
            },
            {
              "name": "Air Soldier",
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "Large Body",
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "Helmed Body",
              "where": "Arendelle",
              "g": "Heartless"
            },
            {
              "name": "Vermilion Samba",
              "where": "Twilight Town",
              "g": "Heartless"
            },
            {
              "name": "Marine Ramba",
              "where": "Kingdom of Corona",
              "g": "Heartless"
            },
            {
              "name": "Gold Beat",
              "where": "Toy Box",
              "g": "Heartless"
            },
            {
              "name": "Malachite Bolero",
              "where": "Kingdom of Corona",
              "g": "Heartless"
            },
            {
              "name": "Popcat",
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "Vitality Popcat",
              "where": "Toy Box",
              "g": "Heartless"
            },
            {
              "name": "Magic Popcat",
              "where": "Toy Box",
              "g": "Heartless"
            },
            {
              "name": "Focus Popcat",
              "where": "Toy Box",
              "g": "Heartless"
            },
            {
              "name": "Munny Popcat",
              "where": "Twilight Town",
              "g": "Heartless"
            },
            {
              "name": "Bizarre Archer",
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "Rock Troll",
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "Metal Troll",
              "where": "San Fransokyo",
              "g": "Heartless"
            },
            {
              "name": "Satyr",
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "Mechanitaur",
              "where": "San Fransokyo",
              "g": "Heartless"
            },
            {
              "name": "Toy Trooper",
              "where": "Toy Box",
              "g": "Heartless"
            },
            {
              "name": "Pole Cannon",
              "where": "Toy Box",
              "g": "Heartless"
            },
            {
              "name": "Marionette",
              "where": "Toy Box",
              "g": "Heartless"
            },
            {
              "name": "Powerwild",
              "where": "Twilight Town",
              "g": "Heartless"
            },
            {
              "name": "Pogo Shovel",
              "where": "Monstropolis",
              "g": "Heartless"
            },
            {
              "name": "Parasol Beauty",
              "where": "Kingdom of Corona",
              "g": "Heartless"
            },
            {
              "name": "Chief Puff",
              "where": "Kingdom of Corona",
              "g": "Heartless"
            },
            {
              "name": "Puffball",
              "where": "Kingdom of Corona",
              "g": "Heartless"
            },
            {
              "name": "Chaos Carriage",
              "where": "Kingdom of Corona",
              "g": "Heartless"
            },
            {
              "name": "Winterhorn",
              "where": "Arendelle",
              "g": "Heartless"
            },
            {
              "name": "Frost Serpent",
              "where": "Arendelle",
              "g": "Heartless"
            },
            {
              "name": "Vaporfly",
              "where": "The Caribbean",
              "g": "Heartless"
            },
            {
              "name": "Sea Sprite",
              "where": "The Caribbean",
              "g": "Heartless"
            },
            {
              "name": "Anchor Raider",
              "where": "The Caribbean",
              "g": "Heartless"
            },
            {
              "name": "Tireblade",
              "where": "San Fransokyo",
              "g": "Heartless"
            },
            {
              "name": "Darkside",
              "where": "Dive to the Heart",
              "g": "Heartless"
            },
            {
              "name": "Demon Tide",
              "where": "The Keyblade Graveyard",
              "g": "Heartless"
            },
            {
              "name": "Demon Tower",
              "where": "Dark World",
              "g": "Heartless"
            },
            {
              "name": "King of Toys",
              "where": "Toy Box",
              "g": "Heartless"
            },
            {
              "name": "Grim Guardianess",
              "where": "Kingdom of Corona",
              "g": "Heartless"
            },
            {
              "name": "Sköll",
              "where": "Arendelle",
              "g": "Heartless"
            },
            {
              "name": "Raging Vulture",
              "where": "The Caribbean",
              "g": "Heartless"
            },
            {
              "name": "Lightning Angler",
              "where": "The Caribbean",
              "g": "Heartless"
            },
            {
              "name": "Darkubes",
              "where": "San Fransokyo",
              "g": "Heartless"
            },
            {
              "name": "Lich",
              "where": "The Keyblade Graveyard",
              "g": "Heartless"
            },
            {
              "name": "Catastrochorus",
              "where": "San Fransokyo",
              "g": "Heartless"
            },
            {
              "name": "Cherry Flan",
              "where": "Olympus",
              "g": "Heartless"
            },
            {
              "name": "Strawberry Flan",
              "where": "Toy Box",
              "g": "Heartless"
            },
            {
              "name": "Orange Flan",
              "where": "Kingdom of Corona",
              "g": "Heartless"
            },
            {
              "name": "Banana Flan",
              "where": "Monstropolis",
              "g": "Heartless"
            },
            {
              "name": "Grape Flan",
              "where": "Arendelle",
              "g": "Heartless"
            },
            {
              "name": "Honeydew Flan",
              "where": "San Fransokyo",
              "g": "Heartless"
            },
            {
              "name": "Watermelon Flan",
              "where": "The Caribbean",
              "g": "Heartless"
            },
            {
              "name": "Dark Inferno χ",
              "where": "Re Mind DLC (doesn't count towards the achievement)",
              "g": "Heartless"
            },
            {
              "name": "Darkside",
              "where": "Re Mind DLC (doesn't count towards the achievement)",
              "g": "Heartless"
            },
            {
              "name": "Dusk",
              "where": "Twilight Town",
              "g": "Nobodies"
            },
            {
              "name": "Sniper",
              "where": "Twilight Town",
              "g": "Nobodies"
            },
            {
              "name": "Reaper",
              "where": "Kingdom of Corona",
              "g": "Nobodies"
            },
            {
              "name": "Ninja",
              "where": "Arendelle",
              "g": "Nobodies"
            },
            {
              "name": "Gambler",
              "where": "The Caribbean",
              "g": "Nobodies"
            },
            {
              "name": "Berserker",
              "where": "Arendelle - Battlegate 9",
              "g": "Nobodies"
            },
            {
              "name": "Sorcerer",
              "where": "Twilight Town - Battlegate 3",
              "g": "Nobodies"
            },
            {
              "name": "Flood",
              "where": "Monstropolis",
              "g": "Unversed"
            },
            {
              "name": "Flowersnake",
              "where": "Monstropolis",
              "g": "Unversed"
            },
            {
              "name": "Spiked Turtletoad",
              "where": "Monstropolis",
              "g": "Unversed"
            },
            {
              "name": "Turtletoad",
              "where": "Monstropolis",
              "g": "Unversed"
            },
            {
              "name": "Lump of Horror",
              "where": "Monstropolis",
              "g": "Unversed"
            },
            {
              "name": "Gigas: Power Class",
              "where": "Toy Box",
              "g": "Others"
            },
            {
              "name": "Gigas: Speed Class",
              "where": "Toy Box",
              "g": "Others"
            },
            {
              "name": "Gigas: Gunner Class",
              "where": "Toy Box",
              "g": "Others"
            },
            {
              "name": "Beasts & Bugs",
              "where": "Toy Box",
              "g": "Others"
            },
            {
              "name": "Patchwork Animals",
              "where": "Toy Box",
              "g": "Others"
            },
            {
              "name": "Air Droids",
              "where": "Toy Box",
              "g": "Others"
            },
            {
              "name": "Bouncy Pets",
              "where": "Toy Box",
              "g": "Others"
            },
            {
              "name": "Supreme Smasher",
              "where": "Toy Box",
              "g": "Others"
            },
            {
              "name": "Angelic Amber",
              "where": "Toy Box",
              "g": "Others"
            }
          ]
        },
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
              "name": "Power Ring",
              "area": "Mount Olympus: Ravine",
              "where": "In the foot of a broken statue",
              "g": "Olympus"
            },
            {
              "name": "Water Cufflink",
              "area": "Mount Olympus: Ravine",
              "where": "In the river",
              "g": "Olympus"
            },
            {
              "name": "Potion",
              "area": "Mount Olympus: Cliff Ascent",
              "where": "Break the column in the mountain to reveal a secret area",
              "g": "Olympus"
            },
            {
              "name": "Panacea",
              "area": "Mount Olympus: Cliff Ascent",
              "where": "Break the column in the mountain to reveal a secret area",
              "g": "Olympus"
            },
            {
              "name": "Ability Ring",
              "area": "Mount Olympus: Cliff Ascent",
              "where": "Break the column in the mountain to reveal a secret area",
              "g": "Olympus"
            },
            {
              "name": "Bronze Necklace",
              "area": "Mount Olympus: Cliff Ascent",
              "where": "In the mountains, down from the lucky emblem",
              "g": "Olympus"
            },
            {
              "name": "Potion",
              "area": "Mount Olympus: Cliff Ascent",
              "where": "On a ledge in the upper side",
              "g": "Olympus"
            },
            {
              "name": "AP Boost",
              "area": "Mount Olympus: Cliff Ascent",
              "where": "On a ledge near the Zeus statue",
              "g": "Olympus"
            },
            {
              "name": "Map: Mount Olympus",
              "area": "Mount Olympus: Cliff Ascent",
              "where": "Beneath an apple tree",
              "g": "Olympus"
            },
            {
              "name": "AP Boost",
              "area": "Mount Olympus: Mountainside",
              "where": "On a ledge near the wall that you climb during the Rock Titan battle",
              "g": "Olympus"
            },
            {
              "name": "Fluorite",
              "area": "Mount Olympus: Summit",
              "where": "In the area where you fight the Rock Titan, in the left side of a split path",
              "g": "Olympus"
            },
            {
              "name": "Hi-Ether",
              "area": "Mount Olympus: Mountainside",
              "where": "In the area where you fight the Rock Titan, on a ledge",
              "g": "Olympus"
            },
            {
              "name": "AP Boost",
              "area": "Thebes: Alleyway",
              "where": "On a ledge",
              "g": "Olympus"
            },
            {
              "name": "Potion",
              "area": "Thebes: Alleyway",
              "where": "In a waterway",
              "g": "Olympus"
            },
            {
              "name": "Fluorite",
              "area": "Thebes: Agora",
              "where": "Climb the stairs with the lucky emblem",
              "g": "Olympus"
            },
            {
              "name": "Ether",
              "area": "Thebes: The Big Olive",
              "where": "Take the left path during the Trinity Sled section",
              "g": "Olympus"
            },
            {
              "name": "Mega-Potion",
              "area": "Thebes: The Big Olive",
              "where": "In an area filled with Popcat Heartless",
              "g": "Olympus"
            },
            {
              "name": "Magic Ring",
              "area": "Thebes: Gardens",
              "where": "In a hidden section that can be accessed by taking down the gladiator statue",
              "g": "Olympus"
            },
            {
              "name": "Ether",
              "area": "Thebes: Overlook",
              "where": "In the corner of the lower area, down from the shield platform",
              "g": "Olympus"
            },
            {
              "name": "Shield Belt",
              "area": "Thebes: Overlook",
              "where": "On a ledge next to some stairs after the Trinity Sled section",
              "g": "Olympus"
            },
            {
              "name": "Potion",
              "area": "Thebes: Gardens",
              "where": "In the pavilion, close to the save point",
              "g": "Olympus"
            },
            {
              "name": "AP Boost",
              "area": "Thebes: Overlook",
              "where": "In an area of the upper side after jumping from the shield platform",
              "g": "Olympus"
            },
            {
              "name": "Potion",
              "area": "Thebes: Overlook",
              "where": "After the Trinity Sled section",
              "g": "Olympus"
            },
            {
              "name": "Map: Thebes",
              "area": "Thebes: Overlook",
              "where": "Close to the save point",
              "g": "Olympus"
            },
            {
              "name": "Fluorite",
              "area": "Realm of the Gods: Courtyard",
              "where": "Go up the stairs to the right of the entrance and look for a balcony in that area",
              "g": "Olympus"
            },
            {
              "name": "Refocuser",
              "area": "Realm of the Gods: Courtyard",
              "where": "In the big area, on the right section with columns",
              "g": "Olympus"
            },
            {
              "name": "Potion",
              "area": "Realm of the Gods: Courtyard",
              "where": "In the big area, between two lamps",
              "g": "Olympus"
            },
            {
              "name": "Mythril Shard",
              "area": "Realm of the Gods: Corridors",
              "where": "Up some stairs, next to the railway",
              "g": "Olympus"
            },
            {
              "name": "Map: Realm of the Gods",
              "area": "Realm of the Gods: Corridors",
              "where": "Close to the save point",
              "g": "Olympus"
            },
            {
              "name": "Refocuser",
              "area": "Realm of the Gods: Cloud Ridge",
              "where": "Right after the railway",
              "g": "Olympus"
            },
            {
              "name": "Elixir",
              "area": "Realm of the Gods: Corridors",
              "where": "Break the box on a ledge with a skydive attack",
              "g": "Olympus"
            },
            {
              "name": "Potion",
              "area": "Realm of the Gods: Corridors",
              "where": "On a platform in the area where you use the Flowmotion to go upwards",
              "g": "Olympus"
            },
            {
              "name": "Map: The Neighborhood",
              "area": "Tram Common",
              "where": "Next to the noticeboard",
              "g": "Twilight Town"
            },
            {
              "name": "Mythril Shard",
              "area": "Tram Common",
              "where": "On a ledge near the outdoor theater",
              "g": "Twilight Town"
            },
            {
              "name": "Fluorite",
              "area": "Tram Common",
              "where": "Across the Underground Conduit entrance",
              "g": "Twilight Town"
            },
            {
              "name": "Fluorite",
              "area": "Tram Common",
              "where": "On the roof of a building",
              "g": "Twilight Town"
            },
            {
              "name": "Hi-Potion",
              "area": "Tram Common",
              "where": "On a ledge near the restaurant",
              "g": "Twilight Town"
            },
            {
              "name": "Refocuser",
              "area": "Underground Conduit",
              "where": "Near the stairs",
              "g": "Twilight Town"
            },
            {
              "name": "AP Boost",
              "area": "The Woods",
              "where": "On a fallen tree near the north exit",
              "g": "Twilight Town"
            },
            {
              "name": "Ether",
              "area": "The Woods",
              "where": "Next to a fallen tree on the south side",
              "g": "Twilight Town"
            },
            {
              "name": "Fluorite",
              "area": "The Woods",
              "where": "Next to a hill on the east side",
              "g": "Twilight Town"
            },
            {
              "name": "Defense Boost",
              "area": "The Old Mansion",
              "where": "To the right of the door",
              "g": "Twilight Town"
            },
            {
              "name": "Map: Andy's House",
              "area": "Andy's House",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Elixir",
              "area": "Andy's House",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Mythril Gem",
              "area": "Andy's House",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Fluorite",
              "area": "Andy's House",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Map: Galaxy Toys",
              "area": "Main Floor: 1F",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Petite Ribbon",
              "area": "Main Floor: 1F",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Potion",
              "area": "Main Floor: 3F",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Strength Boost",
              "area": "Action Figures",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Ether",
              "area": "Action Figures",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Soldier's Earring",
              "area": "Action Figures",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Refocuser",
              "area": "Lower Vents",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Ether",
              "area": "Lower Vents",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Taxi Troubles",
              "area": "Lower Vents",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Gold Amulet",
              "area": "Babies & Toddlers: Dolls",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Mage's Staff+",
              "area": "Babies & Toddlers: Dolls",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Fluorite",
              "area": "Babies & Toddlers: Dolls",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Fire Bangle",
              "area": "Babies & Toddlers: Dolls",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Hi-Ether",
              "area": "Babies & Toddlers: Outdoors",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Abas Chain",
              "area": "Babies & Toddlers: Outdoors",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Ability Ring+",
              "area": "Video Games",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Fluorite",
              "area": "Kid Korral",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Potion",
              "area": "Kid Korral",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Buster Ring",
              "area": "Kid Korral",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "The Barnyard Battle",
              "area": "Kid Korral",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Thunder Trinket",
              "area": "Kid Korral",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Fire Cufflink",
              "area": "Main Floor: 2F",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Hi-Refocuser",
              "area": "Main Floor: 1F",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Mythril Stone",
              "area": "Babies & Toddlers: Outdoors",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Mickey Cuts Up",
              "area": "Main Floor: 3F",
              "where": "",
              "g": "Toy Box"
            },
            {
              "name": "Mask Rosette",
              "area": "Tower",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Elven Bandanna",
              "area": "Hills",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Wind Fan",
              "area": "Hills",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Bronze Amulet",
              "area": "Hills",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Panacea",
              "area": "Hills",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Potion",
              "area": "Hills",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Map: The Forest (1/2)",
              "area": "Hills",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Refocuser",
              "area": "Hills",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Camping Out",
              "area": "Hills",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Map: The Forest (2/2)",
              "area": "Marsh",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Potion",
              "area": "Marsh",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Shadow Anklet",
              "area": "Marsh",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Mage's Earring",
              "area": "Wetlands",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Aero Cufflink",
              "area": "Wetlands",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Defense Belt",
              "area": "Wetlands",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Damascus",
              "area": "Wetlands",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Mythril Stone",
              "area": "Wetlands",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Ether",
              "area": "Wetlands",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Damascus",
              "area": "Marsh",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "AP Boost",
              "area": "Shore",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Hi-Ether",
              "area": "Wildflower Clearing",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "The Wayward Canary",
              "area": "Wildflower Clearing",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Magic Boost",
              "area": "Thoroughfare",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "The Karnival Kid",
              "area": "Thoroughfare",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Ether",
              "area": "Thoroughfare",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Sea Bass en Papillote+",
              "area": "Wharf",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Rune Ring",
              "area": "Wharf",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Hi-Potion",
              "area": "Wharf",
              "where": "",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Map: Monster's, Inc.",
              "area": "Lobby & Offices",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Hi-Potion",
              "area": "Lobby & Offices",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Technician's Ring+",
              "area": "Laugh Floor",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Refocuser",
              "area": "Laugh Floor",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Fencer's Earring",
              "area": "Upper Level",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Star Shield+",
              "area": "Lower Level",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Hi-Potion",
              "area": "Service Area",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Thunder Cuffling",
              "area": "Service Area",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Map: The Factory",
              "area": "Basement",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "How to Play Golf",
              "area": "Ground Floor",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Damascus",
              "area": "Ground Floor",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Umbrella Rosette",
              "area": "Ground Floor",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Hi-Potion",
              "area": "Second Floor",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Valor Ring",
              "area": "Second Floor",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Firefighter Rosette",
              "area": "Accessway",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Fira Bangle",
              "area": "Accessway",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Damascus",
              "area": "Accessway",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Ether",
              "area": "Tank Yard",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Mickey's Circus",
              "area": "Tank Yard",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Mega-Ether",
              "area": "Vault Passage",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Megalixir",
              "area": "Vault Passage",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Hi-Refocuser",
              "area": "Accessway",
              "where": "",
              "g": "Monstropolis"
            },
            {
              "name": "Map: The North Mountain",
              "area": "Treescape",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Blizzard Choker",
              "area": "Treescape",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Damascus",
              "area": "Treescape",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Elixir",
              "area": "Gorge",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Guardian's Belt",
              "area": "Gorge",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Force Ring",
              "area": "Snowfield",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Mickey's Kitten Catch",
              "area": "Snowfield",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "The Klondike Kid",
              "area": "Treescape",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Orichalcum",
              "area": "Snowfield",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Map: The Labyrinth of Ice",
              "area": "Middle Tier",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Dark Anklet",
              "area": "Upper Tier",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Snowman Rosette",
              "area": "Middle Tier",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Damascus",
              "area": "Upper Tier",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Barnyard Sports",
              "area": "Lower Tier",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Blizzard Cufflink",
              "area": "Middle Tier",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Hi-Potion",
              "area": "Valley of Ice",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Refocuser",
              "area": "Valley of Ice",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Hi-Ether",
              "area": "Valley of Ice",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Blizzara Choker",
              "area": "Valley of Ice",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "AP Boost",
              "area": "Valley of Ice",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Mega-Ether",
              "area": "Frozen Wall",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Silver Amulet",
              "area": "Frozen Wall",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Magician's Wand+",
              "area": "Frozen Wall",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Slayer's Earring",
              "area": "Foothills",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Damascus",
              "area": "Foothills",
              "where": "",
              "g": "Arendelle"
            },
            {
              "name": "Master's Ring",
              "area": "Huddled Isles",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Adamantite",
              "area": "Undersea Cavern",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Orichalcum",
              "area": "Undersea Cavern",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Fishin' Frenzy",
              "area": "Undersea Cavern",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Damascus",
              "area": "Isla de los Mástiles",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Silver Necklace",
              "area": "Isla de los Mástiles",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Cosmic Arts",
              "area": "Ship's End",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Mega-Ether",
              "area": "Ship's End",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Electrum",
              "area": "Isla Verdemontaña",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Cast Out to Sea",
              "area": "Isla Verdemontaña",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Electrum",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Orichalcum+",
              "area": "Exile Island",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Beach Party",
              "area": "Confinement Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Yin-Yang Cufflink",
              "area": "The Gateway of Regret",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Ocean Heartbinder",
              "area": "Undersea Cavern",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Acrisius",
              "area": "Horseshoe Island",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Map: Isla de los Mástiles",
              "area": "Isla de los Mástiles",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Map: Ship's End",
              "area": "Ship's End",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Map: Sandbar Isle",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Map: Huddled Isles",
              "area": "Huddled Isles",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Panacea",
              "area": "Huddled Isles",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Mega-Potion",
              "area": "Huddled Isles",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Insulator Rosette",
              "area": "Isla de los Mástiles",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Adamantite",
              "area": "Isla de los Mástiles",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Orichalcum",
              "area": "Isla Verdemontaña",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Hungry Crystal",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Adamantite",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Damascus",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Orichalcum",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Adamantite",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Electrum",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Adamantite",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Orichalcum",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Storm Anchor+",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Electrum",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Orichalcum",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Adamantite",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Electrum",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Adamantite",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Hungry Crystal",
              "area": "Sandbar Isle",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Damascus",
              "area": "Horseshoe Island",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Firaga Bangle",
              "area": "Horseshoe Island",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Blizzaga Choker",
              "area": "Horseshoe Island",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Chaos Anklet",
              "area": "Horseshoe Island",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Celestriad",
              "area": "Docks",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Hi-Refocuser",
              "area": "Fort",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Mickey's Prison Escape",
              "area": "Fort",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Sorcerer's Ring",
              "area": "Seaport",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Hi-Potion",
              "area": "Seaport",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Mega-Ether",
              "area": "Seaport",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Map: Port Royal Waters",
              "area": "Docks",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Tent",
              "area": "Settlement",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Hi-Ether",
              "area": "Docks",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Elixir",
              "area": "Docks",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Mega-Potion",
              "area": "Settlement",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Ether",
              "area": "Seaport",
              "where": "",
              "g": "The Caribbean"
            },
            {
              "name": "Aegis Chain",
              "area": "Central District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Skill Ring+",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Map: The City",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Hi-Refocuser",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "AP Boost",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Electrum",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Phantom Ring",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "AP Boost",
              "area": "Central District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Mega-Ether",
              "area": "Central District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Adamantite",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Mega-Potion",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Thundaga Trinket",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Elixir",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Storm Fan",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "AP Boost",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Magic Boost",
              "area": "Central District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Hi-Ether",
              "area": "Central District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Mega-Ether",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Nirvana+",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "AP Boost",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Damascus",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Adamantite",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Divine Bandana",
              "area": "Central District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Hi-Refocuser",
              "area": "Central District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Star Charm",
              "area": "Central District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Electrum",
              "area": "Central District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Buster Band",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Magic Boost",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Strength Boost",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Midnight Anklet",
              "area": "Central District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Mega-Potion",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Damascus",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "AP Boost",
              "area": "North District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Mickey's Mechanical Man",
              "area": "Central District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "How to Play Baseball",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Mickey Steps Out",
              "area": "South District",
              "where": "",
              "g": "San Fransokyo"
            },
            {
              "name": "Map: The Badlands",
              "area": "The Badlands",
              "where": "Ahead of first battleground",
              "g": "The Keyblade Graveyard"
            },
            {
              "name": "Cosmic Belt",
              "area": "The Badlands",
              "where": "Near the save point",
              "g": "The Keyblade Graveyard"
            },
            {
              "name": "Map: The Skein of Severance",
              "area": "The Skein of Severance",
              "where": "Near the save point",
              "g": "The Keyblade Graveyard"
            },
            {
              "name": "Megalixir",
              "area": "The Skein of Severance",
              "where": "Between battle areas",
              "g": "The Keyblade Graveyard"
            },
            {
              "name": "Mega-Potion",
              "area": "The Skein of Severance",
              "where": "Before Twist of Isolation",
              "g": "The Keyblade Graveyard"
            },
            {
              "name": "Mega-Ether",
              "area": "The Skein of Severance",
              "where": "Between battle areas",
              "g": "The Keyblade Graveyard"
            },
            {
              "name": "Orichalcum+",
              "area": "-",
              "where": "Available after clearing The Final World",
              "g": "The Final World"
            },
            {
              "name": "Map: The Stairway to the Sky",
              "area": "The Stairway to the Sky",
              "where": "In the starting area",
              "g": "Scala ad Caelum"
            },
            {
              "name": "Map: Breezy Quarter",
              "area": "Breezy Quarter",
              "where": "Close to the Moguri shop",
              "g": "Scala ad Caelum"
            },
            {
              "name": "Megalixir",
              "area": "Breezy Quarter",
              "where": "On a ledge in front of the chest with Map: Breezy Quarter, close to the railway mechanism",
              "g": "Scala ad Caelum"
            },
            {
              "name": "Tarte aux Fruits+",
              "area": "Breezy Quarter",
              "where": "Go to the underground waterway, take the hallway that ends with a closed door and hit the chainweel to open it; go into that room and run up the wall until you the upper side of the tower, where the chest lies",
              "g": "Scala ad Caelum"
            },
            {
              "name": "Wellspring Crystal",
              "area": "Breezy Quarter",
              "where": "On a ledge near a park in the south side of the area",
              "g": "Scala ad Caelum"
            },
            {
              "name": "Wellspring Gem",
              "area": "Breezy Quarter",
              "where": "Down in the waterway, next to the area where you fight the Darkside",
              "g": "Scala ad Caelum"
            },
            {
              "name": "Mega-Ether",
              "area": "Breezy Quarter",
              "where": "Near some stairs, slightly northeast from the area where you fight the Darkside",
              "g": "Scala ad Caelum"
            },
            {
              "name": "Electrum",
              "area": "Breezy Quarter",
              "where": "In a corner, around the North side of the area",
              "g": "Scala ad Caelum"
            },
            {
              "name": "Hungry Crystal",
              "area": "Breezy Quarter",
              "where": "In a corner, in the very North border of the map",
              "g": "Scala ad Caelum"
            }
          ]
        },
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
              "name": "Kingdom Key / King of Hearts",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Kingdom Key / Ragnarok",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Hero's Origin / Drain Shock",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Hero's Origin / Atomic Deluge",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Shooting Star / Meteor Shower",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Shooting Star / Diving Barrage",
              "how": "Use a maxed shotlock on one enemy",
              "g": "Shotlocks"
            },
            {
              "name": "Shooting Star / Cluster Cannonade",
              "how": "Use a maxed shotlock on multiple enemies",
              "g": "Shotlocks"
            },
            {
              "name": "Favorite Deputy / Ghost Horde",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Favorite Deputy / Drill Dive",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Ever After / Shimmering Drops",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Ever After / Spectral Rays",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Happy Gear / Snakebite",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Happy Gear / Warp Trick",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Crystal Snow / Diamond Dust",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Crystal Snow / Frozen Crescents",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Wheel of Fate / Blade Storm",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Wheel of Fate / Flag Rampage",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Nano Gear / Cubic Stream",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Nano Gear / Zone Connector",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Hunny Spout / Hunny Burst",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Hunny Spout / Hunny Drizzle",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Hunny Spout / Sweet Surprise",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Grand Chef / Steam Spiral",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Grand Chef / Fruit Crusher",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Classic Tone / Phantom Rush",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Classic Tone / Noise Flux",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Starlight / Blades of the Round",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Starlight / Union Ragnarok",
              "how": "Use a non-maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Ultima Weapon / Infinity Circle",
              "how": "Use a maxed shotlock",
              "g": "Shotlocks"
            },
            {
              "name": "Oathkeeper / Sunray Blast",
              "how": "Use a non-maxed shotlock (doesn't count towards the achievement)",
              "g": "Shotlocks"
            },
            {
              "name": "Oathkeeper / Stellar Inception",
              "how": "Use a maxed shotlock (doesn't count towards the achievement)",
              "g": "Shotlocks"
            },
            {
              "name": "Oblivion / Bladefury Eclipse",
              "how": "Use a non-maxed shotlock (doesn't count towards the achievement)",
              "g": "Shotlocks"
            },
            {
              "name": "Oblivion / Stellar Inception",
              "how": "Use a maxed shotlock (doesn't count towards the achievement)",
              "g": "Shotlocks"
            },
            {
              "name": "Pirate Ship",
              "how": "Use this attraction once",
              "g": "Attractions"
            },
            {
              "name": "Mad Tea Cups",
              "how": "Use this attraction once",
              "g": "Attractions"
            },
            {
              "name": "Blaster Blaze",
              "how": "Use this attraction once",
              "g": "Attractions"
            },
            {
              "name": "Magic Carousel",
              "how": "Use this attraction once",
              "g": "Attractions"
            },
            {
              "name": "Splash Run",
              "how": "Use this attraction once",
              "g": "Attractions"
            },
            {
              "name": "Meow Wow Balloon",
              "how": "Story event after clearing Olympus",
              "g": "Links"
            },
            {
              "name": "8-Bit Blast",
              "how": "Story event during Toy Box",
              "g": "Links"
            },
            {
              "name": "King's Flare",
              "how": "Story event during Monstropolis",
              "g": "Links"
            },
            {
              "name": "Plasma Encounter",
              "how": "Story event during San Fransokyo",
              "g": "Links"
            },
            {
              "name": "Sea Spectacle",
              "how": "Large chest in The Caribbean",
              "g": "Links"
            },
            {
              "name": "Cherry Flan",
              "how": "See Flantastic Seven",
              "g": "Missions - The Flantastic Seven"
            },
            {
              "name": "Strawberry Flan",
              "how": "See Flantastic Seven",
              "g": "Missions - The Flantastic Seven"
            },
            {
              "name": "Orange Flan",
              "how": "See Flantastic Seven",
              "g": "Missions - The Flantastic Seven"
            },
            {
              "name": "Banana Flan",
              "how": "See Flantastic Seven",
              "g": "Missions - The Flantastic Seven"
            },
            {
              "name": "Grape Flan",
              "how": "See Flantastic Seven",
              "g": "Missions - The Flantastic Seven"
            },
            {
              "name": "Watermelon Flan",
              "how": "See Flantastic Seven",
              "g": "Missions - The Flantastic Seven"
            },
            {
              "name": "Honeydew Flan",
              "how": "See Flantastic Seven",
              "g": "Missions - The Flantastic Seven"
            },
            {
              "name": "Verum Rex: Beat of Lead",
              "how": "Repeat this minigame in Toy Box",
              "g": "Minigames"
            },
            {
              "name": "Festival Dance",
              "how": "Repeat this minigame in Kingdom of Corona",
              "g": "Minigames"
            },
            {
              "name": "Frozen Slider",
              "how": "Repeat this minigame in Arendelle",
              "g": "Minigames"
            },
            {
              "name": "Flash Tracer: Course A",
              "how": "Repeat this minigame in San Fransokyo",
              "g": "Minigames"
            },
            {
              "name": "Flash Tracer: Course B",
              "how": "Repeat this minigame in San Fransokyo",
              "g": "Minigames"
            },
            {
              "name": "Tigger's Vegetable Spree",
              "how": "Repeat this minigame in the Hundred Acre Wood",
              "g": "Minigames"
            },
            {
              "name": "Lumpy's Fruit Parade",
              "how": "Repeat this minigame in the Hundred Acre Wood",
              "g": "Minigames"
            },
            {
              "name": "Pooh's Hunny Harvest",
              "how": "Repeat this minigame in the Hundred Acre Wood",
              "g": "Minigames"
            }
          ]
        },
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
              "name": "Secret Report 1",
              "how": "Complete Battlegate #1 in Olympus - Courtyard"
            },
            {
              "name": "Secret Report 2",
              "how": "Complete Battlegate #2 in Olympus - Apex"
            },
            {
              "name": "Secret Report 3",
              "how": "Complete Battlegate #3 in Twilight Town - The Old Mansion"
            },
            {
              "name": "Secret Report 4",
              "how": "Complete Battlegate #4 in Toy Box - Kid Korral"
            },
            {
              "name": "Secret Report 5",
              "how": "Complete Battlegate #5 in Toy Box - Main Floor: 1F"
            },
            {
              "name": "Secret Report 6",
              "how": "Complete Battlegate #6 in Kingdom of Corona - Wetlands"
            },
            {
              "name": "Secret Report 7",
              "how": "Complete Battlegate #7 in Kingdom of Corona - Hills"
            },
            {
              "name": "Secret Report 8",
              "how": "Complete Battlegate #8 in Monstropolis - Tank Yard"
            },
            {
              "name": "Secret Report 9",
              "how": "Complete Battlegate #9 in Arendelle - Middle Tier"
            },
            {
              "name": "Secret Report 10",
              "how": "Complete Battlegate #10 in The Caribbean - Huddled Isles"
            },
            {
              "name": "Secret Report 11",
              "how": "Complete Battlegate #11 in San Fransokyo - North District"
            },
            {
              "name": "Secret Report 12",
              "how": "Complete Battlegate #12 in San Fransokyo - Central District"
            },
            {
              "name": "Secret Report 13",
              "how": "Complete Battlegate #13 in Keyblade Graveyard - The Badlands"
            }
          ]
        },
        {
          "id": "charfiles",
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
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Jiminy Cricket",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "King Mickey",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Riku",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Kairi",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Aqua",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Ventus",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Terra",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Axel / Lea",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Roxas",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Xion",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Naminé",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Riku Replica",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Master Xehanort",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Young Xehanort",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Terra-Xehanort",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Ansem",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Xemnas",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Vanitas",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Xigbar",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Vexen/Even",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Saïx",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Demyx",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Luxord",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Marluxia",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Larxene",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Dark Riku",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Anti-Aqua",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Ansem the Wise",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Ienzo",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Dilan",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Aeleus",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Lingering Will",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Master Eraqus",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "The Boy in White",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "The Boy in Black",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Chirithy",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "? ? ?",
              "how": "Obtained during the story",
              "g": "Main Characters"
            },
            {
              "name": "Yen Sid",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Chip",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Dale",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Maleficent",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Pete",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Queen Minnie",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Daisy Duck",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Pluto",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Moogles",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Wreck-It Ralph",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Simba",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Stitch",
              "how": "Obtained during the story",
              "g": "Everyone Else"
            },
            {
              "name": "Ariel",
              "how": "Defeat the Lightning Angler and open the large chest",
              "g": "Everyone Else"
            },
            {
              "name": "Hercules",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Megara",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Philoctetes",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Pegasus",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Zeus",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Hermes",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Apollo",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Athena",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Hades",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Rock Titan",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Ice Titan",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Lava Titan",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Tornado Titan",
              "how": "Obtained during the story",
              "g": "Olympus"
            },
            {
              "name": "Hayner",
              "how": "Obtained during the story",
              "g": "Twilight Town"
            },
            {
              "name": "Pence",
              "how": "Obtained during the story",
              "g": "Twilight Town"
            },
            {
              "name": "Olette",
              "how": "Obtained during the story",
              "g": "Twilight Town"
            },
            {
              "name": "Scrooge McDuck",
              "how": "Obtained during the story",
              "g": "Twilight Town"
            },
            {
              "name": "Little Chef",
              "how": "Obtained during the story",
              "g": "Twilight Town"
            },
            {
              "name": "Huey",
              "how": "Obtained during the story",
              "g": "Twilight Town"
            },
            {
              "name": "Dewey",
              "how": "Obtained during the story",
              "g": "Twilight Town"
            },
            {
              "name": "Louie",
              "how": "Obtained during the story",
              "g": "Twilight Town"
            },
            {
              "name": "Merlin",
              "how": "Obtained during the story",
              "g": "Twilight Town"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story",
              "g": "Toy Box"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story",
              "g": "Toy Box"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story",
              "g": "Toy Box"
            },
            {
              "name": "Woody",
              "how": "Obtained during the story",
              "g": "Toy Box"
            },
            {
              "name": "Buzz",
              "how": "Obtained during the story",
              "g": "Toy Box"
            },
            {
              "name": "Rex",
              "how": "Obtained during the story",
              "g": "Toy Box"
            },
            {
              "name": "Hamm",
              "how": "Obtained during the story",
              "g": "Toy Box"
            },
            {
              "name": "Little Green Men",
              "how": "Obtained during the story",
              "g": "Toy Box"
            },
            {
              "name": "Green Army Men",
              "how": "",
              "g": "Toy Box"
            },
            {
              "name": "Rapunzel",
              "how": "Obtained during the story",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Flynn Rider",
              "how": "Obtained during the story",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Pascal",
              "how": "Obtained during the story",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Maximus",
              "how": "Obtained during the story",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Mother Gothel",
              "how": "Obtained during the story",
              "g": "Kingdom of Corona"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story",
              "g": "Monstropolis"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story",
              "g": "Monstropolis"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story",
              "g": "Monstropolis"
            },
            {
              "name": "Sulley",
              "how": "Obtained during the story",
              "g": "Monstropolis"
            },
            {
              "name": "Mike",
              "how": "Obtained during the story",
              "g": "Monstropolis"
            },
            {
              "name": "Boo",
              "how": "Obtained during the story",
              "g": "Monstropolis"
            },
            {
              "name": "Randall",
              "how": "Obtained during the story",
              "g": "Monstropolis"
            },
            {
              "name": "CDA Agent",
              "how": "Obtained during the story",
              "g": "Monstropolis"
            },
            {
              "name": "Elsa",
              "how": "Obtained during the story",
              "g": "Arendelle"
            },
            {
              "name": "Anna",
              "how": "Obtained during the story",
              "g": "Arendelle"
            },
            {
              "name": "Olaf",
              "how": "Obtained during the story",
              "g": "Arendelle"
            },
            {
              "name": "Kristoff",
              "how": "Obtained during the story",
              "g": "Arendelle"
            },
            {
              "name": "Sven",
              "how": "Obtained during the story",
              "g": "Arendelle"
            },
            {
              "name": "Marshmallow",
              "how": "Obtained during the story",
              "g": "Arendelle"
            },
            {
              "name": "Hans",
              "how": "Obtained during the story",
              "g": "Arendelle"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story",
              "g": "The Caribbean"
            },
            {
              "name": "Donald Duck",
              "how": "Obtained during the story",
              "g": "The Caribbean"
            },
            {
              "name": "Goofy",
              "how": "Obtained during the story",
              "g": "The Caribbean"
            },
            {
              "name": "Jack Sparrow",
              "how": "Obtained during the story",
              "g": "The Caribbean"
            },
            {
              "name": "Will Turner",
              "how": "Obtained during the story",
              "g": "The Caribbean"
            },
            {
              "name": "Elizabeth Swann",
              "how": "Obtained during the story",
              "g": "The Caribbean"
            },
            {
              "name": "Hector Barbossa",
              "how": "Obtained during the story",
              "g": "The Caribbean"
            },
            {
              "name": "Tia Dalma",
              "how": "Obtained during the story",
              "g": "The Caribbean"
            },
            {
              "name": "Joshamee Gibbs",
              "how": "Obtained during the story",
              "g": "The Caribbean"
            },
            {
              "name": "Cutler Beckett",
              "how": "Obtained during the story",
              "g": "The Caribbean"
            },
            {
              "name": "Davy Jones",
              "how": "Obtained during the story",
              "g": "The Caribbean"
            },
            {
              "name": "Sora",
              "how": "Obtained during the story",
              "g": "San Fransokyo"
            },
            {
              "name": "Hiro Hamada",
              "how": "Obtained during the story",
              "g": "San Fransokyo"
            },
            {
              "name": "Baymax",
              "how": "Obtained during the story",
              "g": "San Fransokyo"
            },
            {
              "name": "Go Go Tamago",
              "how": "Obtained during the story",
              "g": "San Fransokyo"
            },
            {
              "name": "Honey Lemon",
              "how": "Obtained during the story",
              "g": "San Fransokyo"
            },
            {
              "name": "Wasabi",
              "how": "Obtained during the story",
              "g": "San Fransokyo"
            },
            {
              "name": "Fred",
              "how": "Obtained during the story",
              "g": "San Fransokyo"
            },
            {
              "name": "Dark Baymax",
              "how": "Obtained during the story",
              "g": "San Fransokyo"
            },
            {
              "name": "Winnie the Pooh",
              "how": "Obtained during the story",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Piglet",
              "how": "Obtained during the story",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Rabbit",
              "how": "Obtained during the story",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Tigger",
              "how": "Obtained during the story",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Roo",
              "how": "Obtained during the story",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Lumpy",
              "how": "Obtained during the story",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Gopher",
              "how": "Obtained during the story",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Leon",
              "how": "Obtained during the Limitcut Episode",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Aerith",
              "how": "Obtained during the Limitcut Episode",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Yuffie",
              "how": "Obtained during the Limitcut Episode",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Cid",
              "how": "Obtained during the Limitcut Episode",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Fairy Godmother",
              "how": "Obtained during the Limitcut Episode",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Xehanort",
              "how": "Obtained during the Limitcut Episode",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "? ? ?",
              "how": "Obtained after watching the secret ending",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "? ? ?",
              "how": "Obtained after watching the secret ending",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "? ? ?",
              "how": "Obtained after watching the secret ending",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "? ? ?",
              "how": "Obtained after watching the secret ending",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "? ? ?",
              "how": "Obtained after watching the secret ending",
              "g": "The Hundred Acre Wood"
            },
            {
              "name": "Yozora",
              "how": "Obtained during the Secret Episode",
              "g": "The Hundred Acre Wood"
            }
          ]
        },
        {
          "id": "glossary",
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
              "name": "Keyblades",
              "how": "Available from the start"
            },
            {
              "name": "Keyblade Masters",
              "how": "Available from the start"
            },
            {
              "name": "The Keyblade War",
              "how": "Available from the start"
            },
            {
              "name": "The χ-blade",
              "how": "Obtained during the story"
            },
            {
              "name": "Heartless",
              "how": "Available from the start"
            },
            {
              "name": "Nobodies",
              "how": "Available from the start"
            },
            {
              "name": "Unversed",
              "how": "Obtained during the story"
            },
            {
              "name": "Dream Eaters",
              "how": "Available from the start"
            },
            {
              "name": "Organization XIII",
              "how": "Available from the start"
            },
            {
              "name": "The Real Organization XIII",
              "how": "Obtained during the story"
            },
            {
              "name": "The Three Realms",
              "how": "Available from the start"
            },
            {
              "name": "Datascapes",
              "how": "Available from the start"
            },
            {
              "name": "Order",
              "how": "Obtained during the story"
            },
            {
              "name": "The Power of Waking",
              "how": "Available from the start"
            },
            {
              "name": "Lost Memories",
              "how": "Available from the start"
            },
            {
              "name": "Ansem's Code",
              "how": "Available from the start"
            },
            {
              "name": "The Replica Program",
              "how": "Obtained during the story"
            },
            {
              "name": "The Black Box",
              "how": "Available from the start"
            },
            {
              "name": "The Old Words",
              "how": "Available from the start"
            },
            {
              "name": "Coat that Wards Darkness",
              "how": "Obtained during the Re Mind DLC"
            },
            {
              "name": "Mark of Mastery Examination",
              "how": "Obtained during the Re Mind DLC"
            },
            {
              "name": "No. i",
              "how": "Obtained during the Re Mind DLC"
            },
            {
              "name": "Tear in the Fabric of Time",
              "how": "Obtained during the Re Mind DLC"
            },
            {
              "name": "Young Xehanort's Experiments",
              "how": "Obtained during the Re Mind DLC"
            },
            {
              "name": "Recusant's Sigil",
              "how": "Obtained during the Re Mind DLC"
            },
            {
              "name": "The Promise with Terra",
              "how": "Obtained during the Re Mind DLC"
            },
            {
              "name": "Dive into Sora's Dream",
              "how": "Obtained during the Re Mind DLC"
            }
          ]
        },
        {
          "id": "classic",
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
              "k": "loc"
            }
          ],
          "items": [
            {
              "name": "Giantland",
              "world": "Twilight Town",
              "area": "-",
              "loc": "Story event"
            },
            {
              "name": "Mickey, The Mail Pilot",
              "world": "Twilight Town",
              "area": "Tram Common",
              "loc": "Poster on the \"Now Showing\" board"
            },
            {
              "name": "The Musical Farmer",
              "world": "Twilight Town",
              "area": "Tram Common",
              "loc": "Poster on the \"Now Showing\" board"
            },
            {
              "name": "Building A Building",
              "world": "Twilight Town",
              "area": "Tram Common",
              "loc": "Poster on the \"Now Showing\" board (after completing 100 Acre Wood)"
            },
            {
              "name": "The Mad Doctor",
              "world": "Twilight Town",
              "area": "Tram Common",
              "loc": "Poster on the \"Now Showing\" board (after completing 100 Acre Wood)"
            },
            {
              "name": "Mickey Cuts Up",
              "world": "Toy Box",
              "area": "Main Floor: 3F",
              "loc": "Large chest"
            },
            {
              "name": "Taxi Troubles",
              "world": "Toy Box",
              "area": "Lower Vents",
              "loc": "Large chest"
            },
            {
              "name": "The Barnyard Battle",
              "world": "Toy Box",
              "area": "Kid Korral",
              "loc": "Large chest"
            },
            {
              "name": "The Wayward Canary",
              "world": "Kingdom of Corona",
              "area": "Wildflower Clearing",
              "loc": "Large chest"
            },
            {
              "name": "Camping Out",
              "world": "Kingdom of Corona",
              "area": "Hills",
              "loc": "Large chest"
            },
            {
              "name": "The Karnival Kid",
              "world": "Kingdom of Corona",
              "area": "Thoroughfare",
              "loc": "Large chest"
            },
            {
              "name": "How to Play Golf",
              "world": "Monstropolis",
              "area": "Ground Floor",
              "loc": "Large chest"
            },
            {
              "name": "Mickey's Circus",
              "world": "Monstropolis",
              "area": "Tank Yard",
              "loc": "Large chest"
            },
            {
              "name": "Barnyard Sports",
              "world": "Arendelle",
              "area": "Labyrinth of Ice",
              "loc": "Large chest"
            },
            {
              "name": "The Klondike Kid",
              "world": "Arendelle",
              "area": "Treescape",
              "loc": "Large chest"
            },
            {
              "name": "Mickey's Kitten Catch",
              "world": "Arendelle",
              "area": "Snowfield",
              "loc": "Large chest"
            },
            {
              "name": "Fishin' Frenzy",
              "world": "The Caribbean",
              "area": "Undersea Cavern",
              "loc": "Large chest"
            },
            {
              "name": "Beach Party",
              "world": "The Caribbean",
              "area": "Confinement Isle",
              "loc": "Large chest"
            },
            {
              "name": "Mickey's Prison Escape",
              "world": "The Caribbean",
              "area": "Fort",
              "loc": "Large chest"
            },
            {
              "name": "Cast Out to Sea",
              "world": "The Caribbean",
              "area": "Isla Verdemontaña",
              "loc": "Large chest"
            },
            {
              "name": "How to Play Baseball",
              "world": "San Fransokyo",
              "area": "South District",
              "loc": "Large chest"
            },
            {
              "name": "Mickey's Mechanical Man",
              "world": "San Fransokyo",
              "area": "Central District",
              "loc": "Large chest"
            },
            {
              "name": "Mickey Steps Out",
              "world": "San Fransokyo",
              "area": "South District",
              "loc": "Large chest"
            }
          ]
        }
      ]
    },
    {
      "id": "synthesis",
      "sections": [
        {
          "id": "synthrecipes",
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
              "mats": "Lucid Shard x3, Soothing Shard x3, Pulsing Shard x3, Hungry Stone x1",
              "how": "Obtain 12 different synthesis materials"
            },
            {
              "name": "Ether",
              "mats": "Wellspring Shard x2, Lightning Shard x2, Writhing Shard x2",
              "how": "-"
            },
            {
              "name": "Hi-Ether",
              "mats": "Wellspring Stone x3, Lightning Stone x3, Writhing Stone x3, Hungry Shard x1",
              "how": "Obtain 12 different synthesis materials"
            },
            {
              "name": "Mega-Ether",
              "mats": "Wellspring Stone x3, Lightning Stone x3, Writhing Stone x3, Hungry Gem x1",
              "how": "Obtain 20 different synthesis materials"
            },
            {
              "name": "Refocuser",
              "mats": "Blazing Shard x3, Lightning Shard x3, Lucid Shard x3, Hungry Shard x1",
              "how": "Obtain 20 different synthesis materials"
            },
            {
              "name": "Hi-Refocuser",
              "mats": "Blazing Stone x3, Lightning Stone x3, Lucid Stone x3, Hungry Stone x1",
              "how": "Obtain 32 different synthesis materials"
            },
            {
              "name": "Elixir",
              "mats": "Wellspring Crystal x3, Frost Gem x2, Sinister Stone x2, Sinister Shard x2, Hungry Gem x2",
              "how": "Obtain 42 different synthesis materials"
            },
            {
              "name": "Megalixir",
              "mats": "Wellspring Crystal x3, Frost Crystal x2, Sinister Crystal x2, Sinister Gem x2, Hungry Crystal x2",
              "how": "Obtain 50 different synthesis materials"
            },
            {
              "name": "Strength Boost",
              "mats": "Wellspring Gem x5, Soothing Crystal x2, Pulsing Crystal x2, Writhing Crystal x2, Hungry Crystal x1",
              "how": "Obtain 22 different synthesis materials"
            },
            {
              "name": "Magic Boost",
              "mats": "Wellspring Gem x5, Blazing Crystal x2, Frost Crystal x2, Lightning Crystal x2, Hungry Crystal x1",
              "how": "Obtain 22 different synthesis materials"
            },
            {
              "name": "Defense Boost",
              "mats": "Wellspring Gem x5, Lucid Crystal x2, Twilight Crystal x2, Sinister Gem x2, Hungry Crystal x1",
              "how": "Obtain 22 different synthesis materials"
            },
            {
              "name": "AP Boost",
              "mats": "Wellspring Stone x3, Betwixt Shard x3, Twilight Shard x3, Hungry Stone x1, Hungry Shard x2",
              "how": "Obtain 8 different synthesis materials"
            },
            {
              "name": "Ultima Weapon",
              "mats": "Orichalcum+ x7, Wellspring Crystal x2, Lucid Crystal x2, Pulsing Crystal x2",
              "how": "Obtain 58 different synthesis materials"
            },
            {
              "name": "Warhammer+",
              "mats": "Mythril Stone x2, Fluorite x1, Pulsing Gem x1, Hungry Shard x1",
              "how": "Obtain 18 different synthesis materials"
            },
            {
              "name": "Astrolabe+",
              "mats": "Mythril Crystal x2, Electrum x1, Lightning Gem x2, Pulsing Gem x2, Hungry Stone x1",
              "how": "Obtain 42 different synthesis materials"
            },
            {
              "name": "Heartless Maul",
              "mats": "Illusory Crystal x1, Damascus x2, Writhing Crystal x1, Writhing Gem x2",
              "how": "Obtain 48 different synthesis materials"
            },
            {
              "name": "Heartless Maul+",
              "mats": "Illusory Crystal x1, Damascus x2, Writhing Crystal x1, Writhing Gem x2, Hungry Gem x2",
              "how": "Obtain 52 different synthesis materials"
            },
            {
              "name": "Save the Queen",
              "mats": "Orichalcum x1, Frost Crystal x1, Lucid Crystal x1, Soothing Crystal x1",
              "how": "Obtain 55 different synthesis materials"
            },
            {
              "name": "Save the Queen+",
              "mats": "Orichalcum x1, Frost Crystal x1, Lucid Crystal x1, Soothing Crystal x1, Hungry Crystal x1",
              "how": "Obtain 58 different synthesis materials"
            },
            {
              "name": "Clockwork Shield+",
              "mats": "Mythril Stone x2, Fluorite x2, Lucid Gem x1, Hungry Shard x1",
              "how": "Obtain 18 different synthesis materials"
            },
            {
              "name": "Aegis Shield+",
              "mats": "Mythril Gem x2, Adamantite x1, Frost Gem x2, Pulsing Gem x2, Hungry Stone x1",
              "how": "Obtain 42 different synthesis materials"
            },
            {
              "name": "Nobody Guard",
              "mats": "Evanescent Crystal x1, Damascus x2, Betwixt Gem x2, Twilight Gem x2",
              "how": "Obtain 48 different synthesis materials"
            },
            {
              "name": "Nobody Guard+",
              "mats": "Evanescent Crystal x1, Damascus x2, Betwixt Gem x2, Twilight Gem x2, Hungry Gem x3",
              "how": "Obtain 52 different synthesis materials"
            },
            {
              "name": "Save the King",
              "mats": "Orichalcum x1, Blazing Crystal x1, Lightning Crystal x1, Pulsing Crystal x1",
              "how": "Obtain 55 different synthesis materials"
            },
            {
              "name": "Save the King+",
              "mats": "Orichalcum x1, Blazing Crystal x1, Lightning Crystal x1, Pulsing Crystal x1, Hungry Crystal x1",
              "how": "Obtain 58 different synthesis materials"
            },
            {
              "name": "Buster Band",
              "mats": "Mythril Crystal x2, Wellspring Crystal x1, Wellspring Gem x2, Twilight Gem x2",
              "how": "Obtain 45 different synthesis materials"
            },
            {
              "name": "Buster Band+",
              "mats": "Mythril Crystal x2, Wellspring Crystal x1, Wellspring Gem x2, Twilight Gem x2, Hungry Gem x1",
              "how": "Obtain 50 different synthesis materials"
            },
            {
              "name": "Fire Bangle",
              "mats": "Mythril Shard x3, Blazing Stone x2, Blazing Shard x5",
              "how": "Obtain 2 different synthesis materials"
            },
            {
              "name": "Fira Bangle",
              "mats": "Mythril Shard x3, Blazing Stone x2, Blazing Shard x5, Hungry Shard x1",
              "how": "Obtain 10 different synthesis materials"
            },
            {
              "name": "Firaga Bangle",
              "mats": "Mythril Gem x3, Blazing Gem x2, Blazing Stone x5",
              "how": "Obtain 25 different synthesis materials"
            },
            {
              "name": "Firaza Bangle",
              "mats": "Mythril Gem x3, Blazing Gem x2, Blazing Stone x5, Hungry Stone x1",
              "how": "Obtain 38 different synthesis materials"
            },
            {
              "name": "Fire Chain",
              "mats": "Orichalcum x1, Blazing Stone x3, Sinister Stone x1, Sinister Shard x2",
              "how": "Complete Photo Mission #8"
            },
            {
              "name": "Blizzard Choker",
              "mats": "Mythril Shard x3, Frost Stone x2, Frost Shard x5",
              "how": "Obtain 4 different synthesis materials"
            },
            {
              "name": "Blizzara Choker",
              "mats": "Mythril Shard x3, Frost Stone x2, Frost Shard x5, Hungry Shard x1",
              "how": "Obtain 10 different synthesis materials"
            },
            {
              "name": "Blizzaga Choker",
              "mats": "Mythril Gem x3, Frost Gem x2, Frost Stone x5",
              "how": "Obtain 25 different synthesis materials"
            },
            {
              "name": "Blizzaza Choker",
              "mats": "Mythril Gem x3, Frost Gem x2, Frost Stone x5, Hungry Stone x1",
              "how": "Obtain 38 different synthesis materials"
            },
            {
              "name": "Blizzard Chain",
              "mats": "Orichalcum x1, Frost Stone x3, Sinister Stone x1, Sinister Shard x2",
              "how": "Complete Photo Mission #12"
            },
            {
              "name": "Thunder Trinket",
              "mats": "Mythril Shard x3, Lightning Stone x2, Lightning Shard x5",
              "how": "Obtain 4 different synthesis materials"
            },
            {
              "name": "Thundara Trinket",
              "mats": "Mythril Shard x3, Lightning Stone x2, Lightning Shard x5, Hungry Shard x1",
              "how": "Obtain 10 different synthesis materials"
            },
            {
              "name": "Thundaga Trinket",
              "mats": "Mythril Gem x3, Lightning Gem x2, Lightning Stone x5",
              "how": "Obtain 25 different synthesis materials"
            },
            {
              "name": "Thundaza Trinket",
              "mats": "Mythril Gem x3, Lightning Gem x2, Lightning Stone x5, Hungry Stone x1",
              "how": "Obtain 38 different synthesis materials"
            },
            {
              "name": "Thunder Chain",
              "mats": "Orichalcum x1, Lightning Stone x3, Sinister Stone x1, Sinister Shard x2",
              "how": "Complete Photo Mission #9"
            },
            {
              "name": "Shadow Anklet",
              "mats": "Mythril Shard x3, Writhing Stone x2, Writhing Shard x5",
              "how": "Obtain 2 different synthesis materials"
            },
            {
              "name": "Dark Anklet",
              "mats": "Mythril Stone x3, Writhing Stone x2, Writhing Shard x5, Hungry Shard x1",
              "how": "Obtain 15 different synthesis materials"
            },
            {
              "name": "Midnight Anklet",
              "mats": "Mythril Gem x3, Writhing Gem x2, Writhing Stone x5",
              "how": "Obtain 28 different synthesis materials"
            },
            {
              "name": "Chaos Anklet",
              "mats": "Mythril Gem x3, Writhing Gem x2, Writhing Stone x5, Hungry Stone x1",
              "how": "Obtain 40 different synthesis materials"
            },
            {
              "name": "Dark Chain",
              "mats": "Orichalcum x1, Writhing Stone x3, Sinister Stone x1, Sinister Shard x2",
              "how": "Complete Photo Mission #19"
            },
            {
              "name": "Elven Bandanna",
              "mats": "Mythril Shard x3, Soothing Stone x2, Soothing Shard x5",
              "how": "Obtain 4 different synthesis materials"
            },
            {
              "name": "Divine Bandanna",
              "mats": "Mythril Gem x3, Soothing Gem x2, Soothing Stone x5",
              "how": "Obtain 28 different synthesis materials"
            },
            {
              "name": "Aqua Chaplet",
              "mats": "Orichalcum x1, Soothing Stone x3, Sinister Stone x1, Sinister Shard x2",
              "how": "Complete Photo Mission #18"
            },
            {
              "name": "Wind Fan",
              "mats": "Mythril Shard x3, Lucid Stone x2, Lucid Shard x5",
              "how": "Obtain 8 different synthesis materials"
            },
            {
              "name": "Storm Fan",
              "mats": "Mythril Gem x3, Lucid Gem x2, Lucid Stone x5",
              "how": "Obtain 28 different synthesis materials"
            },
            {
              "name": "Aero Armlet",
              "mats": "Orichalcum x1, Lucid Stone x3, Sinister Stone x1, Sinister Shard x2",
              "how": "Complete Photo Mission #17"
            },
            {
              "name": "Acrisius",
              "mats": "Mythril Crystal x3, Blazing Crystal x1, Frost Crystal x1, Lightning Crystal x1",
              "how": "Obtain 40 different synthesis materials"
            },
            {
              "name": "Acrisius+",
              "mats": "Mythril Crystal x3, Blazing Crystal x1, Frost Crystal x1, Lightning Crystal x1, Hungry Gem x1",
              "how": "Obtain 50 different synthesis materials"
            },
            {
              "name": "Cosmic Chain",
              "mats": "Orichalcum x1, Lucid Crystal x1, Soothing Crystal x1, Writhing Crystal x1, Hungry Crystal x1",
              "how": "Obtain 55 different synthesis materials"
            },
            {
              "name": "Petite Ribbon",
              "mats": "Orichalcum x1, Sinister Crystal x1, Betwixt Crystal x1, Hungry Crystal x1, Hungry Shard x3",
              "how": "Complete Photo Mission #20"
            },
            {
              "name": "Firefighter Rosette",
              "mats": "Mythril Stone x2, Wellspring Shard x2, Blazing Shard x6",
              "how": "Complete Photo Mission #1"
            },
            {
              "name": "Umbrella Rosette",
              "mats": "Mythril Stone x2, Wellspring Shard x2, Soothing Shard x6",
              "how": "Complete Photo Mission #2"
            },
            {
              "name": "Mask Rosette",
              "mats": "Mythril Stone x2, Wellspring Shard x2, Lucid Shard x6",
              "how": "Complete Photo Mission #3"
            },
            {
              "name": "Snowman Rosette",
              "mats": "Mythril Stone x2, Wellspring Shard x2, Frost Shard x6",
              "how": "Complete Photo Mission #13"
            },
            {
              "name": "Insulator Rosette",
              "mats": "Mythril Stone x2, Wellspring Shard x2, Lightning Shard x6",
              "how": "Complete Photo Mission #11"
            },
            {
              "name": "Ability Ring+",
              "mats": "Mythril Shard x2, Lucid Shard x6",
              "how": "Obtain 2 different synthesis materials"
            },
            {
              "name": "Technician's Ring+",
              "mats": "Mythril Stone x2, Lucid Stone x6",
              "how": "Obtain 12 different synthesis materials"
            },
            {
              "name": "Skill Ring+",
              "mats": "Mythril Gem x2, Lucid Gem x6",
              "how": "Obtain 18 different synthesis materials"
            },
            {
              "name": "Cosmic Ring",
              "mats": "Mythril Crystal x2, Lucid Gem x3, Pulsing Gem x3, Hungry Gem x2",
              "how": "Complete Photo Mission #4"
            },
            {
              "name": "Phantom Ring",
              "mats": "Mythril Crystal x2, Pulsing Gem x1, Pulsing Stone x3",
              "how": "Obtain 35 different synthesis materials"
            },
            {
              "name": "Orichalcum Ring",
              "mats": "Orichalcum x1, Pulsing Crystal x1, Pulsing Gem x3",
              "how": "Obtain 45 different synthesis materials"
            },
            {
              "name": "Sorcerer's Ring",
              "mats": "Mythril Crystal x2, Sinister Gem x1, Sinister Stone x3",
              "how": "Obtain 35 different synthesis materials"
            },
            {
              "name": "Wisdom Ring",
              "mats": "Orichalcum x1, Sinister Crystal x1, Sinister Gem x3",
              "how": "Obtain 45 different synthesis materials"
            },
            {
              "name": "Soldier's Earring",
              "mats": "Mythril Stone x2, Pulsing Stone x3, Pulsing Shard x6",
              "how": "Complete Photo Mission #5"
            },
            {
              "name": "Fencer's Earring",
              "mats": "Mythril Gem x3, Pulsing Gem x3, Pulsing Stone x6",
              "how": "Complete Photo Mission #14"
            },
            {
              "name": "Mage's Earring",
              "mats": "Mythril Stone x2, Blazing Stone x3, Lightning Stone x3, Soothing Stone x3",
              "how": "Complete Photo Mission #6"
            },
            {
              "name": "Slayer's Earring",
              "mats": "Mythril Gem x3, Blazing Gem x3, Lightning Gem x3, Soothing Gem x3",
              "how": "Complete Photo Mission #15"
            },
            {
              "name": "Moon Amulet",
              "mats": "Mythril Stone x2, Pulsing Stone x3, Writhing Stone x3",
              "how": "Complete Photo Mission #7"
            },
            {
              "name": "Star Charm",
              "mats": "Mythril Gem x3, Pulsing Gem x3, Writhing Gem x3",
              "how": "Complete Photo Mission #16"
            },
            {
              "name": "Draw Ring",
              "mats": "Mythril Shard x3, Pulsing Shard x5, Betwixt Stone x1, Twilight Stone x1",
              "how": "Complete Photo Mission #10"
            },
            {
              "name": "Blazing Crystal",
              "mats": "Wellspring Crystal x1, Blazing Gem x2, Blazing Stone x3, Blazing Shard x5",
              "how": "Obtain 30 different synthesis materials"
            },
            {
              "name": "Frost Crystal",
              "mats": "Wellspring Crystal x1, Frost Gem x2, Frost Stone x3, Frost Shard x5",
              "how": "Obtain 30 different synthesis materials"
            },
            {
              "name": "Lightning Crystal",
              "mats": "Wellspring Crystal x1, Lightning Gem x2, Lightning Stone x3, Lightning Shard x5",
              "how": "Obtain 30 different synthesis materials"
            },
            {
              "name": "Lucid Crystal",
              "mats": "Wellspring Crystal x1, Lucid Gem x2, Lucid Stone x3, Lucid Shard x5",
              "how": "Obtain 32 different synthesis materials"
            },
            {
              "name": "Pulsing Crystal",
              "mats": "Wellspring Crystal x1, Pulsing Gem x2, Pulsing Stone x3, Pulsing Shard x5",
              "how": "Obtain 30 different synthesis materials"
            },
            {
              "name": "Writhing Crystal",
              "mats": "Wellspring Crystal x1, Writhing Gem x2, Writhing Stone x3, Writhing Shard x5",
              "how": "Obtain 35 different synthesis materials"
            },
            {
              "name": "Mythril Shard",
              "mats": "Betwixt Shard x1, Twilight Shard x1",
              "how": "Obtain 6 different synthesis materials"
            },
            {
              "name": "Mythril Stone",
              "mats": "Betwixt Stone x1, Twilight Stone x1",
              "how": "Obtain 15 different synthesis materials"
            },
            {
              "name": "Mythril Gem",
              "mats": "Betwixt Gem x1, Twilight Gem x1",
              "how": "Obtain 32 different synthesis materials"
            },
            {
              "name": "Mythril Crystal",
              "mats": "Betwixt Crystal x1, Twilight Crystal x1",
              "how": "Obtain 42 different synthesis materials"
            },
            {
              "name": "Soothing Crystal",
              "mats": "Wellspring Crystal x1, Soothing Gem x2, Soothing Stone x3, Soothing Shard x5",
              "how": "Obtain 32 different synthesis materials"
            }
          ]
        },
        {
          "id": "synthmats",
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
              "source": "Flame Core, Bizarre Archer, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Blazing Stone",
              "source": "Flame Core, Vermilion Samba, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Blazing Gem",
              "source": "Vermilion Samba, Sea Sprite (Red)",
              "loc": "See Enemies"
            },
            {
              "name": "Blazing Crystal",
              "source": "High Soldier",
              "loc": "See Enemies"
            },
            {
              "name": "Frost Shard",
              "source": "Winterhorn, Arendelle",
              "loc": "See Enemies"
            },
            {
              "name": "Frost Stone",
              "source": "Winterhorn, Frost Serpent (Wings), Sea Sprite (Blue)",
              "loc": "See Enemies"
            },
            {
              "name": "Frost Gem",
              "source": "Frost Serpent (Wings), Sea Sprite (Blue)",
              "loc": "See Enemies"
            },
            {
              "name": "Frost Crystal",
              "source": "Frost Serpent",
              "loc": "See Enemies"
            },
            {
              "name": "Lightning Shard",
              "source": "Soldier, Bizarre Archer, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Lightning Stone",
              "source": "Gold Beat, Marionette, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Lightning Gem",
              "source": "Gold Beat, Sea Sprite (Yellow), and more",
              "loc": "See Enemies"
            },
            {
              "name": "Lightning Crystal",
              "source": "Tireblade",
              "loc": "See Enemies"
            },
            {
              "name": "Lucid Shard",
              "source": "Air Soldier, Puffball",
              "loc": "See Enemies"
            },
            {
              "name": "Lucid Stone",
              "source": "Air Soldier, Malachite Bolero, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Lucid Gem",
              "source": "Malachite Bolero, Chief Puff, Vaporfly",
              "loc": "See Enemies"
            },
            {
              "name": "Lucid Crystal",
              "source": "Anchor Raider",
              "loc": "See Enemies"
            },
            {
              "name": "Pulsing Shard",
              "source": "Earth Core, Soldier, Powerwild",
              "loc": "See Enemies"
            },
            {
              "name": "Pulsing Stone",
              "source": "Earth Core, Soldier, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Pulsing Gem",
              "source": "Satyr, Pogo Shovel, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Pulsing Crystal",
              "source": "Helmed Body",
              "loc": "See Enemies"
            },
            {
              "name": "Writhing Shard",
              "source": "Shadow, Fluttering, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Writhing Stone",
              "source": "Shadow, Neoshadow, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Writhing Gem",
              "source": "Neoshadow, Fluttering, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Writhing Crystal",
              "source": "Mechanitaur",
              "loc": "See Enemies"
            },
            {
              "name": "Betwixt Shard",
              "source": "Sniper, Reaper, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Betwixt Stone",
              "source": "Sniper, Reaper, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Betwixt Gem",
              "source": "Reaper, Ninja, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Betwixt Crystal",
              "source": "Ninja, Berserker, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Twilight Shard",
              "source": "Dusk, and other nobodies",
              "loc": "See Enemies"
            },
            {
              "name": "Twilight Stone",
              "source": "Dusk, and other nobodies",
              "loc": "See Enemies"
            },
            {
              "name": "Twilight Gem",
              "source": "Gambler, and other nobodies",
              "loc": "See Enemies"
            },
            {
              "name": "Twilight Crystal",
              "source": "Gambler, and other nobodies",
              "loc": "See Enemies"
            },
            {
              "name": "Mythril Shard",
              "source": "Synthesis Treasures",
              "loc": "See Synthesis Recipes or Treasures"
            },
            {
              "name": "Mythril Stone",
              "source": "Synthesis Treasures",
              "loc": "See Synthesis Recipes or Treasures"
            },
            {
              "name": "Mythril Gem",
              "source": "Synthesis Treasures",
              "loc": "See Synthesis Recipes or Treasures"
            },
            {
              "name": "Mythril Crystal",
              "source": "Synthesis Treasures",
              "loc": "See Synthesis Recipes or Treasures"
            },
            {
              "name": "Sinister Shard",
              "source": "Flood",
              "loc": "See Enemies"
            },
            {
              "name": "Sinister Stone",
              "source": "Flowersnake",
              "loc": "See Enemies"
            },
            {
              "name": "Sinister Gem",
              "source": "Flowersnake, Turtletoad",
              "loc": "See Enemies"
            },
            {
              "name": "Sinister Crystal",
              "source": "Spiked Turtletoad",
              "loc": "See Enemies"
            },
            {
              "name": "Soothing Shard",
              "source": "Water Core, Toy Trooper, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Soothing Stone",
              "source": "Water Core, Marine Rumba, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Soothing Gem",
              "source": "Marine Rumba, Sea Sprite (Rainbow), and more",
              "loc": "See Enemies"
            },
            {
              "name": "Soothing Crystal",
              "source": "Spear Lizard",
              "loc": "See Enemies"
            },
            {
              "name": "Wellspring Shard",
              "source": "Soldier, Large Body, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Wellspring Stone",
              "source": "Neoshadow, Large Body, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Wellspring Gem",
              "source": "Rock Troll, Metal Troll, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Wellspring Crystal",
              "source": "High Soldier, Helmed Body, Anchor Raider",
              "loc": "See Enemies"
            },
            {
              "name": "Hungry Shard",
              "source": "Large Body, Popcat, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Hungry Stone",
              "source": "Earth Core (Tower), Popcat, and more",
              "loc": "See Enemies"
            },
            {
              "name": "Hungry Gem",
              "source": "Frost Serpent (Tail)",
              "loc": "See Enemies"
            },
            {
              "name": "Hungry Crystal",
              "source": "Mechanitaur, Frost Serpent (Tail), and more",
              "loc": "See Enemies"
            },
            {
              "name": "Fluorite",
              "source": "Treasures",
              "loc": "See Treasures"
            },
            {
              "name": "Damascus",
              "source": "Treasures",
              "loc": "See Treasures"
            },
            {
              "name": "Adamantite",
              "source": "Treasures",
              "loc": "See Treasures"
            },
            {
              "name": "Electrum",
              "source": "Treasures",
              "loc": "See Treasures"
            },
            {
              "name": "Evanescent Crystal",
              "source": "Berserker",
              "loc": "See Enemies"
            },
            {
              "name": "Illusory Crystal",
              "source": "Demon Tower",
              "loc": "See Enemies"
            },
            {
              "name": "Orichalcum",
              "source": "Treasures",
              "loc": "See Treasures"
            },
            {
              "name": "Orichalcum+",
              "source": "Treasures",
              "loc": "See Treasures"
            }
          ]
        },
        {
          "id": "recipecol",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "mats"
            }
          ],
          "items": [
            {
              "name": "Mushroom Terrine",
              "mats": "Morel, Chanterelle, King Oyster Mushroom, Black Trumpet",
              "g": "Starters"
            },
            {
              "name": "Scallop Poêlé",
              "mats": "Scallop, Olive Oil",
              "g": "Starters"
            },
            {
              "name": "Ratatouille",
              "mats": "Zucchini, Eggplant, Tomato, Garlic, Bay Leaf",
              "g": "Starters"
            },
            {
              "name": "Lobster Mousse",
              "mats": "Lobster, Scallop, Dill",
              "g": "Starters"
            },
            {
              "name": "Caprese Salad",
              "mats": "Strawberry, Tomato, Cheese, Basil",
              "g": "Starters"
            },
            {
              "name": "Consommé",
              "mats": "Celery, Onion, Cloves",
              "g": "Soup"
            },
            {
              "name": "Pumpkin Velouté",
              "mats": "Pumpkin, Black Truffle",
              "g": "Soup"
            },
            {
              "name": "Carrot Potage",
              "mats": "Carrot, Onion, Rice, Butter",
              "g": "Soup"
            },
            {
              "name": "Crab Bisque",
              "mats": "Crab, Tomato, Carrot, Celery, Olive Oil",
              "g": "Soup"
            },
            {
              "name": "Cold Tomato Soup",
              "mats": "Watermelon, Tomato, Dill",
              "g": "Soup"
            },
            {
              "name": "Sole Meunière",
              "mats": "Sole, Caviar",
              "g": "Fish"
            },
            {
              "name": "Eel Matelote",
              "mats": "Eel, Bay Leaf, Parsley",
              "g": "Fish"
            },
            {
              "name": "Bouillabaisse",
              "mats": "Mussel, Lobster, Cod, Garlic, Saffron",
              "g": "Fish"
            },
            {
              "name": "Sea Bass en Papillote",
              "mats": "Sea Bass, Basil, Thyme, Olive Oil",
              "g": "Fish"
            },
            {
              "name": "Seafood Tartare",
              "mats": "Blood Orange, Lobster, Sea Bass, Olive Oil",
              "g": "Fish"
            },
            {
              "name": "Sea Bass Poêlé",
              "mats": "Grapes, Sea Bass, Zucchini, Chanterelle, Parsley",
              "g": "Fish"
            },
            {
              "name": "Sweetbread Poêlé",
              "mats": "Porcini, Lemon, Veal",
              "g": "Meat"
            },
            {
              "name": "Beef Sauté",
              "mats": "Cornichon, Eggplant, Zucchini, Beef",
              "g": "Meat"
            },
            {
              "name": "Beef Bourguignon",
              "mats": "Rosemary, Bay Leaf, Thyme, Garlic, Beef",
              "g": "Meat"
            },
            {
              "name": "Stuffed Quail",
              "mats": "Rice, Portobello, Porcini, Miller Mushroom, Parsley, Quail",
              "g": "Meat"
            },
            {
              "name": "Filet Mignon Poêlé",
              "mats": "Sour Cherry, Butter, Black Truffle, Rosemary, Cloves, Filet Mignon",
              "g": "Meat"
            },
            {
              "name": "Chocolate Mousse",
              "mats": "Chocolate, Lemon, Butter",
              "g": "Dessert"
            },
            {
              "name": "Fresh Fruit Compote",
              "mats": "Pear, Apple, Apricot",
              "g": "Dessert"
            },
            {
              "name": "Crêpes Suzette",
              "mats": "Orange, Butter, Honey",
              "g": "Dessert"
            },
            {
              "name": "Berries au Fromage",
              "mats": "Cheese, Lemon, Gooseberry, Raspberry, Blackberry",
              "g": "Dessert"
            },
            {
              "name": "Warm Banana Soufflé",
              "mats": "Banana, Butter, Honey",
              "g": "Dessert"
            },
            {
              "name": "Fruit Gelée",
              "mats": "Melon, Pear, Gooseberry",
              "g": "Dessert"
            },
            {
              "name": "Tarte aux Fruits",
              "mats": "Sour Cherry, Strawberry, Blood Orange, Banana, Grapes, Melon, Watermelon",
              "g": "Dessert"
            }
          ]
        }
      ]
    },
    {
      "id": "cooking",
      "sections": [
        {
          "id": "ingredients",
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
              "name": "Veal",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Beef",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Quail",
              "loc": "San Fransokyo"
            },
            {
              "name": "Filet Mignon",
              "loc": "Monstropolis"
            },
            {
              "name": "Crab",
              "loc": "The Caribbean"
            },
            {
              "name": "Scallop",
              "loc": "Kingdom of Corona"
            },
            {
              "name": "Lobster",
              "loc": "Kingdom of Corona"
            },
            {
              "name": "Sole",
              "loc": "Moogle Shop, Kingdom of Corona"
            },
            {
              "name": "Eel",
              "loc": "Moogle Shop, Kingdom of Corona"
            },
            {
              "name": "Sea Bass",
              "loc": "Kingdom of Corona"
            },
            {
              "name": "Mussel",
              "loc": "Kingdom of Corona"
            },
            {
              "name": "Cod",
              "loc": "Kingdom of Corona"
            },
            {
              "name": "Pumpkin",
              "loc": "Toy Box"
            },
            {
              "name": "Zucchini",
              "loc": "Kingdom of Corona"
            },
            {
              "name": "Onion",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Tomato",
              "loc": "Toy Box"
            },
            {
              "name": "Eggplant",
              "loc": "Kingdom of Corona"
            },
            {
              "name": "Carrot",
              "loc": "100 Acre Wood"
            },
            {
              "name": "Garlic",
              "loc": "Toy Box"
            },
            {
              "name": "Celery",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Morel",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Porcini",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Chanterelle",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Portobello",
              "loc": "Arendelle"
            },
            {
              "name": "Black Truffle",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "King Oyster Mushroom",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Black Trumpet",
              "loc": "Moogle Shop, Twilight Town"
            },
            {
              "name": "Miller Mushroom",
              "loc": "Arendelle"
            },
            {
              "name": "Cloves",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Rosemary",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Thyme",
              "loc": "Moogle Shop, Toy Box"
            },
            {
              "name": "Bay Leaf",
              "loc": "Moogle Shop, Toy Box"
            },
            {
              "name": "Basil",
              "loc": "Toy Box"
            },
            {
              "name": "Dill",
              "loc": "Monstropolis"
            },
            {
              "name": "Parsley",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Saffron",
              "loc": "Moogle Shop, Monstropolis"
            },
            {
              "name": "Apricot",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Gooseberry",
              "loc": "Arendelle"
            },
            {
              "name": "Lemon",
              "loc": "Olympus"
            },
            {
              "name": "Orange",
              "loc": "Monstropolis"
            },
            {
              "name": "Raspberry",
              "loc": "Arendelle"
            },
            {
              "name": "Pear",
              "loc": "Olympus"
            },
            {
              "name": "Blackberry",
              "loc": "Arendelle"
            },
            {
              "name": "Apple",
              "loc": "Moogle Shop, Olympus"
            },
            {
              "name": "Cheese",
              "loc": "Moogle Shop, Toy Box"
            },
            {
              "name": "Chocolate",
              "loc": "Moogle Shop, Twilight Town"
            },
            {
              "name": "Caviar",
              "loc": "Moogle Shop, Twilight Town"
            },
            {
              "name": "Butter",
              "loc": "Moogle Shop, Twilight Town"
            },
            {
              "name": "Olive Oil",
              "loc": "Moogle Shop, Toy Box"
            },
            {
              "name": "Cornichon",
              "loc": "Moogle Shop, Twilight Town"
            },
            {
              "name": "Rice",
              "loc": "Moogle Shop, Monstropolis"
            },
            {
              "name": "Honey",
              "loc": "100 Acre Wood"
            },
            {
              "name": "Sour Cherry",
              "loc": "Olympus (Flantastic Seven)"
            },
            {
              "name": "Strawberry",
              "loc": "Toy Box (Flantastic Seven)"
            },
            {
              "name": "Blood Orange",
              "loc": "Kingdom of Corona (Flantastic Seven)"
            },
            {
              "name": "Banana",
              "loc": "Monstropolis (Flantastic Seven)"
            },
            {
              "name": "Grapes",
              "loc": "Arendelle (Flantastic Seven)"
            },
            {
              "name": "Melon",
              "loc": "San Fransokyo (Flantastic Seven)"
            },
            {
              "name": "Watermelon",
              "loc": "The Caribbean (Flantastic Seven)"
            }
          ]
        },
        {
          "id": "flan",
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
              "k": "reward"
            }
          ],
          "items": [
            {
              "name": "Cherry",
              "world": "Olympus",
              "area": "Overlook",
              "reward": "10,000 or more: x1 Sour Cherry 20,000 or more: x3 Sour Cherry, Formchange Extender"
            },
            {
              "name": "Strawberry",
              "world": "Toy Box",
              "area": "Rest Area",
              "reward": "8,500 or more: x1 Strawberry 17,000 or more: x3 Strawberry, Attraction Extender"
            },
            {
              "name": "Orange",
              "world": "Kingdom of Corona",
              "area": "Hills",
              "reward": "10,000 or more: x1 Blood Orange 23,000 or more: x3 Blood Orange, Treasure Magnet"
            },
            {
              "name": "Banana",
              "world": "Monstropolis",
              "area": "Upper Level",
              "reward": "10,000 or more: x1 Banana 20,000 or more: x3 Banana, Grand Magic Extender"
            },
            {
              "name": "Grape",
              "world": "Arendelle",
              "area": "Mountain Ridge",
              "reward": "10,000 or more: x1 Grape 20,000 or more: x3 Grape, Unison Blizzard"
            },
            {
              "name": "Honeydew",
              "world": "San Frasokyo",
              "area": "South District",
              "reward": "7,500 or more: x1 Melon 15,000 or more: x3 Melon, Attraction Extender"
            },
            {
              "name": "Watermelon",
              "world": "The Caribbean",
              "area": "Fort",
              "reward": "14,000 or more: x1 Watermelon 28,000 or more: x3 Watermelon, Focus Syphon"
            }
          ]
        },
        {
          "id": "collector",
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
              "name": "Obtain 1 material type",
              "reward": "Ether"
            },
            {
              "name": "Obtain 2 material types",
              "reward": "Synthesis recipes (Firaga Bangle, Shadow Anklet, Ability Ring+)"
            },
            {
              "name": "Obtain 4 material types",
              "reward": "Synthesis recipes (Elven Bandanna, Thunder Trinket, Blizzard Choker)"
            },
            {
              "name": "Obtain 6 material types",
              "reward": "Synthesis recipes (Mythril Shard)"
            },
            {
              "name": "Obtain 8 material types",
              "reward": "Synthesis recipes (Wind Fan, AP Boost)"
            },
            {
              "name": "Obtain 10 material types",
              "reward": "Synthesis recipes (Fira Bangle, Thundara Trinket, Blizzara Choker)"
            },
            {
              "name": "Obtain 12 material types",
              "reward": "Synthesis recipes (Technician's Ring+, Hi-Ether, Mega-Potion)"
            },
            {
              "name": "Obtain 15 material types",
              "reward": "Synthesis recipes (Dark Anklet, Mythril Stone)"
            },
            {
              "name": "Obtain 18 material types",
              "reward": "Synthesis recipes (Warhammer+, Clockwork Shield+, Skill Ring+)"
            },
            {
              "name": "Obtain 20 material types",
              "reward": "Synthesis recipes (Refocuser, Mega-Ether)"
            },
            {
              "name": "Obtain 22 material types",
              "reward": "Synthesis recipes (Strength Boost, Magic Boost, Defense Boost)"
            },
            {
              "name": "Obtain 25 material types",
              "reward": "Synthesis recipes (Firaga Bangle, Blizzaga Choker, Thundaga Trinket)"
            },
            {
              "name": "Obtain 28 material types",
              "reward": "Synthesis recipes (Divine Bandanna, Storm Fan, Midnight Anklet)"
            },
            {
              "name": "Obtain 30 material types",
              "reward": "Synthesis recipes (Pulsing Crystal, Blazing Crystal, Frost Crystal, Lightning Crystal)"
            },
            {
              "name": "Obtain 32 material types",
              "reward": "Synthesis recipes (Hi-Refocuser, Mythril Gem, Lucid Crystal, Soothing Crystal)"
            },
            {
              "name": "Obtain 35 material types",
              "reward": "Synthesis recipes (Phantom Ring, Sorcerer's Ring, Writhing Crystal)"
            },
            {
              "name": "Obtain 38 material types",
              "reward": "Synthesis recipes (Firaza Bangle, Blizzaza Choker, Thundaza Trinket)"
            },
            {
              "name": "Obtain 40 material types",
              "reward": "Synthesis recipes (Chaos Anklet, Acrisius)"
            },
            {
              "name": "Obtain 42 material types",
              "reward": "Synthesis recipes (Aegis Shield+, Astrolabe+, Elixir, Mythril Crystal)"
            },
            {
              "name": "Obtain 45 material types",
              "reward": "Synthesis recipes (Buster Band, Orichalcum Ring, Wisdom Ring)"
            },
            {
              "name": "Obtain 48 material types",
              "reward": "Synthesis recipes (Heartless Maul, Nobody Guard)"
            },
            {
              "name": "Obtain 50 material types",
              "reward": "Synthesis recipes (Buster Band+, Acrisius+, Megalixir)"
            },
            {
              "name": "Obtain 52 material types",
              "reward": "Synthesis recipes (Heartless Maul+, Nobody Guard+)"
            },
            {
              "name": "Obtain 55 material types",
              "reward": "Synthesis recipes (Save the Queen, Save the King, Cosmic Chain)"
            },
            {
              "name": "Obtain 58 material types",
              "reward": "Synthesis recipes (Ultima Weapon, Save the Queen+, Save the King+)"
            },
            {
              "name": "Obtain all material types",
              "reward": "Orichalcum"
            },
            {
              "name": "Obtain a total of 50 materials",
              "reward": "Hungry Shard"
            },
            {
              "name": "Obtain a total of 100 materials",
              "reward": "Hungry Stone"
            },
            {
              "name": "Obtain a total of 250 materials",
              "reward": "Hungry Gem"
            },
            {
              "name": "Obtain a total of 500 materials",
              "reward": "Hungry Crystal"
            },
            {
              "name": "Obtain a total of 1000 materials",
              "reward": "Orichalcum"
            },
            {
              "name": "Obtain all  materials",
              "reward": "Hungry Stone"
            },
            {
              "name": "Obtain all  materials",
              "reward": "Hungry Gem"
            },
            {
              "name": "Obtain all  materials",
              "reward": "Hungry Crystal"
            },
            {
              "name": "Obtain all  materials",
              "reward": "Orichalcum"
            },
            {
              "name": "Obtain all Blazing materials",
              "reward": "Hungry Gem"
            },
            {
              "name": "Obtain all Frost materials",
              "reward": "Hungry Gem"
            },
            {
              "name": "Obtain all Lightning materials",
              "reward": "Hungry Gem"
            },
            {
              "name": "Obtain all Lucid materials",
              "reward": "Hungry Gem"
            },
            {
              "name": "Obtain all Soothing materials",
              "reward": "Hungry Gem"
            },
            {
              "name": "Obtain all Pulsing materials",
              "reward": "Hungry Gem"
            },
            {
              "name": "Obtain all Writhing materials",
              "reward": "Hungry Crystal"
            },
            {
              "name": "Obtain all Betwixt materials",
              "reward": "Hungry Crystal"
            },
            {
              "name": "Obtain all Twilight materials",
              "reward": "Hungry Crystal"
            },
            {
              "name": "Obtain all Sinister materials",
              "reward": "Defense Boost"
            },
            {
              "name": "Obtain all Mythril materials",
              "reward": "AP Boost"
            },
            {
              "name": "Obtain all Wellspring materials",
              "reward": "Strength Boost"
            },
            {
              "name": "Obtain all Hungry materials",
              "reward": "Magic Boost"
            },
            {
              "name": "Obtain 30 Blazing Shards",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 25 Blazing Stones",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 20 Blazing Gems",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 30 Frost Shards",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 25 Frost Stones",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 20 Frost Gems",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 30 Lightning Shards",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 25 Lightning Stones",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 20 Lightning Gems",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 30 Lucid Shards",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 25 Lucid Stones",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 20 Lucid Gems",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 30 Soothing Shards",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 25 Soothing Stones",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 20 Soothing Gems",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 30 Pulsing Shards",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 25 Pulsing Stones",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 20 Pulsing Gems",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 30 Writhing Shards",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 25 Writhing Stones",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 20 Writhing Gems",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 30 Betwixt Shards",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 25 Betwixt Stones",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 20 Betwixt Gems",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 30 Twilight Shards",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 25 Twilight Stones",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 20 Twilight Gems",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 30 Sinister Shards",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 25 Sinister Stones",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain 20 Sinister Gems",
              "reward": "Available to buy in Moogle Shop"
            },
            {
              "name": "Obtain all rank C Materials",
              "reward": "Serenity Shard"
            },
            {
              "name": "Obtain all rank B Materials",
              "reward": "Serenity Stone"
            },
            {
              "name": "Obtain all rank A Materials",
              "reward": "Manifest Illusion"
            },
            {
              "name": "Obtain all rank S Materials",
              "reward": "Lost Illusion"
            }
          ]
        },
        {
          "id": "photo",
          "cols": [
            {
              "k": "num"
            },
            {
              "k": "name",
              "name": true
            },
            {
              "k": "cond"
            },
            {
              "k": "loc"
            }
          ],
          "items": [
            {
              "num": "1",
              "name": "Firefighter Rosette",
              "cond": "Obtain Gummiphone",
              "loc": "The moogle must want a picture of a Flame Core"
            },
            {
              "num": "2",
              "name": "Umbrella Rosette",
              "cond": "Obtain Gummiphone",
              "loc": "The moogle must want a picture of a Water Core"
            },
            {
              "num": "3",
              "name": "Mask Rosette",
              "cond": "Complete Twilight Town",
              "loc": "The moogle must want a picture of a Chief Puff"
            },
            {
              "num": "4",
              "name": "Cosmic Ring",
              "cond": "Complete Twilight Town",
              "loc": "The moogle must want a picture of the statue of Hercules (Olympus - Thebes)"
            },
            {
              "num": "5",
              "name": "Soldier's Earring",
              "cond": "Visit Galaxy Toys",
              "loc": "The moogle must want a picture of the big Beasts & Bugs wall display (Toy Box - Galaxy Toys)"
            },
            {
              "num": "6",
              "name": "Mage's Earring",
              "cond": "Look at the Tower",
              "loc": "The moogle must want a picture of Rapunzel's tower (Kingdom of Corona - The Forest)"
            },
            {
              "num": "7",
              "name": "Moon Amulet",
              "cond": "Visit The Kingdom",
              "loc": "The moogle must want a picture of the festival (Kingdom of Corona - The Kingdom)"
            },
            {
              "num": "8",
              "name": "Fire Chain",
              "cond": "Complete Toy Box and Kingdom of Corona",
              "loc": "The moogle must want a picture of the fire in the secluded forge (Olympus - Realm of the Gods)"
            },
            {
              "num": "9",
              "name": "Thunder Chain",
              "cond": "Complete Toy Box and Kingdom of Corona",
              "loc": "The moogle must want a picture of Zeus (Olympus)"
            },
            {
              "num": "10",
              "name": "Draw Ring",
              "cond": "Complete Toy Box and Kingdom of Corona",
              "loc": "The moogle must want a picture of the tram (Twilight Town - The Neighborhood)"
            },
            {
              "num": "11",
              "name": "Insulator Rosette",
              "cond": "See the CDA agents",
              "loc": "The moogle must want a picture of a CDA agent (Monstropolis - The Power Plant)"
            },
            {
              "num": "12",
              "name": "Blizzard Chain",
              "cond": "Visit Arendelle",
              "loc": "The moogle must want a picture of the ice palace (Arendelle - The North Mountain)"
            },
            {
              "num": "13",
              "name": "Snowman Rosette",
              "cond": "Meet Olaf, Anna, Kristoff, and Sven",
              "loc": "The moogle must want a picture of Olaf (Arendelle)"
            },
            {
              "num": "14",
              "name": "Fencer's Earring",
              "cond": "Complete Monstropolis and Arendelle",
              "loc": "The moogle must want a picture of the big green cactuar (Toy Box - Galaxy Toys)"
            },
            {
              "num": "15",
              "name": "Slayer's Earring",
              "cond": "Visit 100 Acre Wood",
              "loc": "The moogle must want a picture of the scarecrow in the fields (The Hundred Acre Wood - Rabbit's House)"
            },
            {
              "num": "16",
              "name": "Star Charm",
              "cond": "Visit The City",
              "loc": "The moogle must want a picture of the evening star. (San Fransokyo - The City)"
            },
            {
              "num": "17",
              "name": "Aero Armlet",
              "cond": "Visit The City",
              "loc": "The moogle must want a picture of the fish-shaped wind socks in broad daylight (San Fransokyo - The City)"
            },
            {
              "num": "18",
              "name": "Aqua Chaplet",
              "cond": "Visit Port Royal",
              "loc": "The moogle must want a picture of the waterfall in Port Royal (The Caribbean - Port Royal)"
            },
            {
              "num": "19",
              "name": "Dark Chain",
              "cond": "Complete The Caribbean and San Fransokyo",
              "loc": "The moogle must want a picture of a Demon Tower"
            },
            {
              "num": "20",
              "name": "Petite Ribbon",
              "cond": "Complete The Caribbean and San Fransokyo",
              "loc": "The moogle must want pictures of Sora's teammates"
            }
          ]
        }
      ]
    },
    {
      "id": "gummi",
      "sections": [
        {
          "id": "gummibattles",
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
            },
            {
              "k": "blueprint"
            }
          ],
          "items": [
            {
              "name": "Countdown 1",
              "area": "Starlight Way",
              "score": "100,000",
              "blueprint": "Ghostabocky - Obtain Rank A"
            },
            {
              "name": "Countdown 2",
              "area": "Starlight Way",
              "score": "170,000",
              "blueprint": "Supercar - Obtain Rank A"
            },
            {
              "name": "Countdown 3",
              "area": "Starlight Way",
              "score": "170,000",
              "blueprint": "Craft Airplane - Obtain Rank A"
            },
            {
              "name": "Countdown 4",
              "area": "Starlight Way",
              "score": "240,000",
              "blueprint": "Plush Sora - Obtain Rank A"
            },
            {
              "name": "Countdown 5",
              "area": "Misty Stream",
              "score": "300,000",
              "blueprint": "Wubber Ducky - Obtain Rank A"
            },
            {
              "name": "Countdown 6",
              "area": "Misty Stream",
              "score": "400,000",
              "blueprint": "Dino Soarer - Obtain Rank A"
            },
            {
              "name": "Countdown 7",
              "area": "Misty Stream",
              "score": "300,000",
              "blueprint": "Gigas - Obtain Rank A"
            },
            {
              "name": "Countdown 8",
              "area": "Misty Stream",
              "score": "400,000",
              "blueprint": "Galleon - Obtain Rank A"
            },
            {
              "name": "Countdown 9",
              "area": "Misty Stream",
              "score": "500,000",
              "blueprint": "Necho Cat - Obtain Rank A"
            },
            {
              "name": "Countdown 10",
              "area": "Misty Stream",
              "score": "580,000",
              "blueprint": "Locomotive - Obtain Rank A"
            },
            {
              "name": "Countdown 11",
              "area": "The Eclipse",
              "score": "600,000",
              "blueprint": "Stationery Squadron - Obtain Rank A"
            },
            {
              "name": "Speed Skirmish 1",
              "area": "Starlight Way",
              "score": "40,000",
              "blueprint": "Rhino Beetle - Obtain Rank A"
            },
            {
              "name": "Speed Skirmish 2",
              "area": "Starlight Way",
              "score": "50,000",
              "blueprint": "Red Nocturne - Obtain Rank A"
            },
            {
              "name": "Speed Skirmish 3",
              "area": "Starlight Way",
              "score": "120,000",
              "blueprint": "Question Mark - Obtain Rank A"
            },
            {
              "name": "Speed Skirmish 4",
              "area": "Misty Stream",
              "score": "120,000",
              "blueprint": "Kooma Panda - Obtain Rank A"
            },
            {
              "name": "Speed Skirmish 5",
              "area": "Misty Stream",
              "score": "190,000",
              "blueprint": "Submarine - Obtain Rank A"
            },
            {
              "name": "Speed Skirmish 6",
              "area": "Misty Stream",
              "score": "150,000",
              "blueprint": "Cardboard Warrior - Obtain Rank A"
            },
            {
              "name": "Speed Skirmish 7",
              "area": "Misty Stream",
              "score": "280,000",
              "blueprint": "Home Sweet Home - Obtain Rank A"
            },
            {
              "name": "Speed Skirmish 8",
              "area": "Misty Stream",
              "score": "280,000",
              "blueprint": "Hot Rod - Obtain Rank A"
            },
            {
              "name": "Speed Skirmish 9",
              "area": "Misty Stream",
              "score": "250,000",
              "blueprint": "Pavilion - Obtain Rank A"
            },
            {
              "name": "Speed Skirmish 10",
              "area": "Misty Stream",
              "score": "240,000",
              "blueprint": "Palanquin - Obtain Rank A"
            },
            {
              "name": "Speed Skirmish 11",
              "area": "The Eclipse",
              "score": "300,000",
              "blueprint": "Sweet Wheels - Obtain Rank A"
            },
            {
              "name": "Clash with the Astrowarrior",
              "area": "Starlight Way",
              "score": "160,000",
              "blueprint": "No blueprint"
            },
            {
              "name": "Clash with the Flower Guardian",
              "area": "Starlight Way",
              "score": "200,000",
              "blueprint": "No blueprint"
            },
            {
              "name": "Clash with the Comet Crawlers",
              "area": "Starlight Way",
              "score": "350,000",
              "blueprint": "No blueprint"
            },
            {
              "name": "Clash with the Dreadshark",
              "area": "Misty Stream",
              "score": "100,000",
              "blueprint": "No blueprint"
            },
            {
              "name": "Clash with the Glacial Fortress",
              "area": "Misty Stream",
              "score": "500,000",
              "blueprint": "No blueprint"
            },
            {
              "name": "Clash with the Space Worm",
              "area": "Misty Stream",
              "score": "250,000",
              "blueprint": "Airship - First clear"
            },
            {
              "name": "Clash with the Schwarzgeist",
              "area": "Misty Stream",
              "score": "1,000,000",
              "blueprint": "Golden Highwind - First clear"
            },
            {
              "name": "Clash with the Colossus Pyramid",
              "area": "The Eclipse",
              "score": "700,000",
              "blueprint": "No blueprint"
            },
            {
              "name": "Clash with the Supreme Warrior",
              "area": "The Eclipse",
              "score": "100,000",
              "blueprint": "No blueprint"
            },
            {
              "name": "Clash with the Scarlet Shark",
              "area": "The Eclipse",
              "score": "100,000",
              "blueprint": "No blueprint"
            },
            {
              "name": "Clash with the Omega Machina",
              "area": "The Eclipse",
              "score": "100,000",
              "blueprint": "No blueprint"
            }
          ]
        },
        {
          "id": "gummiblueprints",
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
              "name": "Highwind Lv.1",
              "how": "Default"
            },
            {
              "name": "Highwind Lv.2",
              "how": "Available for purchase (200 munny) after completing Toy Box and Kingdom of Corona"
            },
            {
              "name": "Highwind Lv.3",
              "how": "Available for purchase (300 munny) after completing Monstropolis and Arendelle"
            },
            {
              "name": "Highwind Lv.4",
              "how": "Available for purchase (400 munny) after completing The Caribbean and San Fransokyo"
            },
            {
              "name": "Highwind Peak",
              "how": "Available for purchase (1000 munny) after completing The Final World"
            },
            {
              "name": "Invincible Lv.1",
              "how": "Bought for 100 munny"
            },
            {
              "name": "Invincible Lv.2",
              "how": "Available for purchase (200 munny) after completing Toy Box and Kingdom of Corona"
            },
            {
              "name": "Invincible Lv.3",
              "how": "Available for purchase (300 munny) after completing Monstropolis and Arendelle"
            },
            {
              "name": "Invincible Lv.4",
              "how": "Available for purchase (400 munny) after completing The Caribbean and San Fransokyo"
            },
            {
              "name": "Invincible Peak",
              "how": "Available for purchase (1000 munny) after completing The Final World"
            },
            {
              "name": "Falcon Lv.1",
              "how": "Bought for 100 munny"
            },
            {
              "name": "Falcon Lv.2",
              "how": "Available for purchase (200 munny) after completing Toy Box and Kingdom of Corona"
            },
            {
              "name": "Falcon Lv.3",
              "how": "Available for purchase (300 munny) after completing Monstropolis and Arendelle"
            },
            {
              "name": "Falcon Lv.4",
              "how": "Available for purchase (400 munny) after completing The Caribbean and San Fransokyo"
            },
            {
              "name": "Falcon Peak",
              "how": "Available for purchase (1000 munny) after completing The Final World"
            },
            {
              "name": "Red Nocturne",
              "how": "Speed Skirmish 2 (A-rank)"
            },
            {
              "name": "Hot Rod",
              "how": "Speed Skirmish 8 (A-rank)"
            },
            {
              "name": "Necho Cat",
              "how": "Countdown 9 (A-rank)"
            },
            {
              "name": "Ghostabocky",
              "how": "Speed Skirmish 1 (A-rank)"
            },
            {
              "name": "Kooma Panda",
              "how": "Speed Skirmish 4 (A-rank)"
            },
            {
              "name": "Plush Sora",
              "how": "Countdown 4 (A-rank)"
            },
            {
              "name": "Gigas",
              "how": "Countdown 7 (A-rank)"
            },
            {
              "name": "Schwarzgeist",
              "how": "Clash with the Schwarzgeist (C-rank)"
            },
            {
              "name": "Moogle",
              "how": "Gummi Mission: Moogle Gazer"
            },
            {
              "name": "Bomb",
              "how": "Gummi Mission: Bomb Gazer"
            },
            {
              "name": "Cactuar",
              "how": "Gummi Mission: Cactuar Gazer"
            },
            {
              "name": "Imp",
              "how": "Gummi Mission: Imp Gazer"
            },
            {
              "name": "Tonberry",
              "how": "Gummi Mission: Tonberry Gazer"
            },
            {
              "name": "Endymion",
              "how": "Gummi Mission: Endymion Gazer"
            },
            {
              "name": "Ultros",
              "how": "Gummi Mission: Ultros Gazer"
            },
            {
              "name": "Bismarck",
              "how": "Gummi Mission: Bismarck Gazer"
            },
            {
              "name": "Omega",
              "how": "Gummi Mission: Omega Gazer"
            },
            {
              "name": "Galleon",
              "how": "Countdown 8 (A-rank)"
            },
            {
              "name": "Submarine",
              "how": "Speed Skirmish 5 (A-rank)"
            },
            {
              "name": "Locomotive",
              "how": "Countdown 10 (A-rank)"
            },
            {
              "name": "Supercar",
              "how": "Countdown 2 (A-rank)"
            },
            {
              "name": "Sweet Wheels",
              "how": "Speed Skirmish 11 (A-rank)"
            },
            {
              "name": "Airship",
              "how": "Clash with the Space Worm"
            },
            {
              "name": "Craft Airplane",
              "how": "Countdown 3 (A-rank)"
            },
            {
              "name": "Dino Soarer",
              "how": "Countdown 6 (A-rank)"
            },
            {
              "name": "Cardboard Warrior",
              "how": "Speed Skirmish 6 (A-rank)"
            },
            {
              "name": "Wubber Ducky",
              "how": "Countdown 5 (A-rank)"
            },
            {
              "name": "Rhino Beetle",
              "how": "Speed Skirmish 1 (A-rank)"
            },
            {
              "name": "Pavilion",
              "how": "Speed Skirmish 9 (A-rank)"
            },
            {
              "name": "Stationery Squadron",
              "how": "Countdown 11 (A-rank)"
            },
            {
              "name": "Home Sweet Home",
              "how": "Speed Skirmish 7 (A-rank)"
            },
            {
              "name": "Palanquin",
              "how": "Speed Skirmish 10 (A-rank)"
            },
            {
              "name": "Question Mark",
              "how": "Speed Skirmish 3 (A-rank)"
            },
            {
              "name": "Vega",
              "how": "Gummi Mission: Pro Builder"
            },
            {
              "name": "Sirius",
              "how": "Gummi Mission: Elite Builder"
            },
            {
              "name": "Shooting Star",
              "how": "Gummi Mission: Master Builder"
            },
            {
              "name": "Golden Highwind",
              "how": "Clash with the Schwarzgeist"
            }
          ]
        },
        {
          "id": "gummitreasures",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "area"
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Flat Helm/G",
              "area": "Starlight Way",
              "how": "Astrowarrior First Clear Reward"
            },
            {
              "name": "Mini-Helm/G",
              "area": "Starlight Way",
              "how": "Astrowarrior/Flower Guardian Rank C Reward"
            },
            {
              "name": "Darkness/G",
              "area": "Starlight Way",
              "how": "Comet Crawlers Rank A Reward"
            },
            {
              "name": "Ghostabocky",
              "area": "Starlight Way",
              "how": "Countdown 1 Rank A Reward"
            },
            {
              "name": "Red Nocturne",
              "area": "Starlight Way",
              "how": "Speed Skirmish 2 Rank A Reward"
            },
            {
              "name": "Craft Airplane",
              "area": "Starlight Way",
              "how": "Countdown 3 Rank A Reward"
            },
            {
              "name": "Rhino Beetle",
              "area": "Starlight Way",
              "how": "Speed Skirmish 1 Rank A Reward"
            },
            {
              "name": "Plush Sora",
              "area": "Starlight Way",
              "how": "Countdown 4 Rank A Reward"
            },
            {
              "name": "Question Mark",
              "area": "Starlight Way",
              "how": "Speed Skirmish 3 Rank A Reward"
            },
            {
              "name": "Supercar",
              "area": "Starlight Way",
              "how": "Countdown 2 Rank A Reward"
            },
            {
              "name": "Solid Helm/G",
              "area": "Misty Stream",
              "how": "Dreadshark First Clear Reward"
            },
            {
              "name": "Long Helm/G",
              "area": "Misty Stream",
              "how": "Glacial Fortress Rank C Reward"
            },
            {
              "name": "Beetle Horn/G",
              "area": "Misty Stream",
              "how": "Dreadshark Rank C Reward"
            },
            {
              "name": "Angel/G",
              "area": "Misty Stream",
              "how": "Glacial Fortress Rank A Reward"
            },
            {
              "name": "Necho Cat",
              "area": "Misty Stream",
              "how": "Countdown 9 Rank A Reward"
            },
            {
              "name": "Kooma Panda",
              "area": "Misty Stream",
              "how": "Speed Skirmish 4 Rank A Reward"
            },
            {
              "name": "Hot Rod",
              "area": "Misty Stream",
              "how": "Speed Skirmish 8 Rank A Reward"
            },
            {
              "name": "Submarine",
              "area": "Misty Stream",
              "how": "Speed Skirmish 5 Rank A Reward"
            },
            {
              "name": "Locomotive",
              "area": "Misty Stream",
              "how": "Countdown 10 Rank A Reward"
            },
            {
              "name": "Wubber Ducky",
              "area": "Misty Stream",
              "how": "Countdown 5 Rank A Reward"
            },
            {
              "name": "Gigas",
              "area": "Misty Stream",
              "how": "Countdown 7 Rank A Reward"
            },
            {
              "name": "Schwarzgeist",
              "area": "Misty Stream",
              "how": "Schwarzgeist Rank C Reward"
            },
            {
              "name": "Dino Soarer",
              "area": "Misty Stream",
              "how": "Countdown 6 Rank A Reward"
            },
            {
              "name": "Cardboard Warrior",
              "area": "Misty Stream",
              "how": "Speed Skirmish 6 Rank A Reward"
            },
            {
              "name": "Airship",
              "area": "Misty Stream",
              "how": "Space Worms First Clear Reward"
            },
            {
              "name": "Pavilion",
              "area": "Misty Stream",
              "how": "Speed Skirmish 9 Rank A Reward"
            },
            {
              "name": "Home Sweet Home",
              "area": "Misty Stream",
              "how": "Speed Skirmish 7 Rank A Reward"
            },
            {
              "name": "Galleon",
              "area": "Misty Stream",
              "how": "Countdown 8 Rank A Reward"
            },
            {
              "name": "Palanquin",
              "area": "Misty Stream",
              "how": "Speed Skirmish 10 Rank A Reward"
            },
            {
              "name": "Golden Highwind",
              "area": "Misty Stream",
              "how": "Schwarzgeist First Clear Reward"
            },
            {
              "name": "Sphere Helm/G",
              "area": "The Eclipse",
              "how": "Colossus Pyramid First Clear Reward"
            },
            {
              "name": "Bridge/G",
              "area": "The Eclipse",
              "how": "Scarlet Shark Rank C Reward"
            },
            {
              "name": "Big Bridge/G",
              "area": "The Eclipse",
              "how": "Omega Machina Rank A Reward"
            },
            {
              "name": "Mast/G",
              "area": "The Eclipse",
              "how": "Scarlet Shark Rank A Reward"
            },
            {
              "name": "Sweet Wheels",
              "area": "The Eclipse",
              "how": "Speed Skirmish 11 Rank A Reward"
            },
            {
              "name": "Stationery Squadron",
              "area": "The Eclipse",
              "how": "Countdown 11 Rank A Reward"
            }
          ]
        },
        {
          "id": "gummimissions",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "obj"
            },
            {
              "k": "reward"
            }
          ],
          "items": [
            {
              "name": "Blast Off",
              "obj": "Embark on your first voyage",
              "reward": "Rainbow/S"
            },
            {
              "name": "Traveler",
              "obj": "Find 3 waypoints",
              "reward": "Soccer Ball/P"
            },
            {
              "name": "Master Traveler",
              "obj": "Find 6 waypoints",
              "reward": "Crowns/P"
            },
            {
              "name": "Ultimate Traveler",
              "obj": "Find 9 waypoints",
              "reward": "Crown/S"
            },
            {
              "name": "World Seeker",
              "obj": "Discover 2 worlds",
              "reward": "Geometric/P"
            },
            {
              "name": "Master World Seeker",
              "obj": "Discover 6 worlds",
              "reward": "Dazzle/P"
            },
            {
              "name": "Ultimate World Seeker",
              "obj": "Discover 9 worlds",
              "reward": "Kingdom Hearts/S"
            },
            {
              "name": "Astrowarrior Slayer",
              "obj": "Defeat the Astrowarrior in Starlight Way",
              "reward": "Firaga/G-01"
            },
            {
              "name": "Flower Guardian Slayer",
              "obj": "Defeat the Flower Guardian in Starlight Way",
              "reward": "Unversed/S"
            },
            {
              "name": "Comet Crawler Slayer",
              "obj": "Defeat the Comet Crawlers in Starlight Way",
              "reward": "Spirit/S"
            },
            {
              "name": "Dreadshark Slayer",
              "obj": "Defeat the Dreadshark in Misty Stream",
              "reward": "Excalibur/G"
            },
            {
              "name": "Glacial Fortress Slayer",
              "obj": "Defeat the Glacial Fortress in Misty Stream",
              "reward": "Nobody/S"
            },
            {
              "name": "Space Worm Slayer",
              "obj": "Defeat the Space Worms in Misty Stream",
              "reward": "Nightmare/S"
            },
            {
              "name": "Schwarzgeist Slayer",
              "obj": "Defeat the Schwarzgeist in Misty Stream",
              "reward": "Roxas/S"
            },
            {
              "name": "Colossus Pyramid Slayer",
              "obj": "Defeat the Colossus Pyramid in The Eclipse",
              "reward": "Ultima/G"
            },
            {
              "name": "Supreme Warrior Slayer",
              "obj": "Defeat the Supreme Warrior in The Eclipse",
              "reward": "Heartless/S"
            },
            {
              "name": "Scarlet Shark Slayer",
              "obj": "Defeat the Scarlet Shark in The Eclipse",
              "reward": "Keyblade/S"
            },
            {
              "name": "Omega Machina Slayer",
              "obj": "Defeat the Omega Machina in The Eclipse",
              "reward": "Eraqus/S"
            },
            {
              "name": "Heartless Hunter",
              "obj": "Take out 500 Heartless with your gummi ship",
              "reward": "Medal/S-01"
            },
            {
              "name": "Heartless Harrier",
              "obj": "Take out 1500 Heartless with your gummi ship",
              "reward": "Medal/S-02"
            },
            {
              "name": "Heartless Menacer",
              "obj": "Take out 3000 Heartless with your gummi ship",
              "reward": "Medal/S-03"
            },
            {
              "name": "Heartless Obliterator",
              "obj": "Take out 5000 Heartless with your gummi ship",
              "reward": "Medal/S-04"
            },
            {
              "name": "Special Weapon Dabbler",
              "obj": "Obtain 3 different special weapons",
              "reward": "Checkered/P"
            },
            {
              "name": "Special Weapon Collector",
              "obj": "Obtain 5 different special weapons",
              "reward": "Arabesque/P"
            },
            {
              "name": "Special Weapon Hoarder",
              "obj": "Obtain 7 different special weapons",
              "reward": "Wave Crests/P"
            },
            {
              "name": "Special Weapon Scholar",
              "obj": "Obtain 10 different special weapons",
              "reward": "Arrow Feathers/P"
            },
            {
              "name": "Special Weapon Authority",
              "obj": "Obtain 13 different special weapons",
              "reward": "χ-blade/S"
            },
            {
              "name": "Junior Treasure Hunter",
              "obj": "Unlock a treasure sphere",
              "reward": "Flower/P"
            },
            {
              "name": "Authorized Treasure Hunter",
              "obj": "Unlock 3 treasure spheres",
              "reward": "Foliage/P"
            },
            {
              "name": "Chief Treasure Hunter",
              "obj": "Unlock 5 treasure spheres",
              "reward": "Grid/P"
            },
            {
              "name": "Veteran Treasure Hunter",
              "obj": "Unlock 7 treasure spheres",
              "reward": "Lights/P"
            },
            {
              "name": "Champion Treasure Hunter",
              "obj": "Unlock 9 treasure spheres",
              "reward": "Roman Ten/S"
            },
            {
              "name": "Pro Builder",
              "obj": "Retrieve all the blueprint fragments in Starlight Way",
              "reward": "Vega"
            },
            {
              "name": "Elite Builder",
              "obj": "Retrieve all the blueprint fragments in Misty Stream",
              "reward": "Sirius"
            },
            {
              "name": "Master Builder",
              "obj": "Retrieve all the blueprint fragments in The Eclipse",
              "reward": "Shooting Star"
            },
            {
              "name": "Cactuar Gazer",
              "obj": "Photograph the Cactuar constellation in Starlight Way",
              "reward": "Cactuar"
            },
            {
              "name": "Bomb Gazer",
              "obj": "Photograph the Bomb constellation in Starlight Way",
              "reward": "Bomb"
            },
            {
              "name": "Moogle Gazer",
              "obj": "Photograph the Moogle constellation in Starlight Way",
              "reward": "Moogle"
            },
            {
              "name": "Endymion Gazer",
              "obj": "Photograph the Endymion constellation in Misty Stream",
              "reward": "Endymion"
            },
            {
              "name": "Tonberry Gazer",
              "obj": "Photograph the Tonberry constellation in Misty Stream",
              "reward": "Tonberry"
            },
            {
              "name": "Imp Gazer",
              "obj": "Photograph the Imp constellation in Misty Stream",
              "reward": "Imp"
            },
            {
              "name": "Bismark Gazer",
              "obj": "Photograph the Bismark constellation in The Eclipse",
              "reward": "Bismark"
            },
            {
              "name": "Ultros Gazer",
              "obj": "Photograph the Ultros constellation in The Eclipse",
              "reward": "Ultros"
            },
            {
              "name": "Omega Gazer",
              "obj": "Photograph the Omega constellation in The Eclipse",
              "reward": "Omega"
            },
            {
              "name": "Gummi Ship Completionist",
              "obj": "Understand the true joy of gummi ships",
              "reward": "Crown/G"
            }
          ]
        }
      ]
    }
  ]
};
