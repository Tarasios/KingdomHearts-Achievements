/* =====================================================================
   KH Dream Drop Distance — completion checklist data + tracker config
   Extracted from xenodusk's "KINGDOM HEARTS Dream Drop Distance
   Checklist" spreadsheet (v1.00, August 13, 2024).
   Consumed by js/kh-tracker.js (generic engine). Item order is
   load-bearing: saved progress is keyed by index.
   ===================================================================== */
const TRACKER_GAME = {
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
    "Flick Rush Fever": "flickrush"
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
              "name": "Record Keeper",
              "desc": "Achieve 100% completion in Combat, Story, Items, and Game Records."
            },
            {
              "rarity": "Silver",
              "name": "Star Combatant",
              "desc": "Achieve 100% completion in Combat."
            },
            {
              "rarity": "Silver",
              "name": "Storyteller",
              "desc": "Achieve 100% completion in Story."
            },
            {
              "rarity": "Silver",
              "name": "Item Collector",
              "desc": "Achieve 100% completion in Items."
            },
            {
              "rarity": "Silver",
              "name": "Level Masters",
              "desc": "Achieve a cumulative level of 100."
            },
            {
              "rarity": "Bronze",
              "name": "Droplet Magnet",
              "desc": "Rack up 300 or more Drop Points in a single turn."
            },
            {
              "rarity": "Bronze",
              "name": "Dream Dropper",
              "desc": "Drop 100 or more times."
            },
            {
              "rarity": "Bronze",
              "name": "Deft Diver",
              "desc": "Complete a dive without taking damage"
            },
            {
              "rarity": "Bronze",
              "name": "Ace Diver",
              "desc": "Perform an A-Rank dive."
            },
            {
              "rarity": "Bronze",
              "name": "Loyal Customer",
              "desc": "Make a purchase at every Moogle Shop."
            },
            {
              "rarity": "Bronze",
              "name": "Command Collector",
              "desc": "Obtain all commands."
            },
            {
              "rarity": "Bronze",
              "name": "Recipe Collector",
              "desc": "Obtain all recipes."
            },
            {
              "rarity": "Bronze",
              "name": "Dream Piece Collector",
              "desc": "Obtain all Dream Pieces."
            },
            {
              "rarity": "Bronze",
              "name": "Mark of Mastery",
              "desc": "Defeat the phantom Ursula and begin the Mark of Mastery exam."
            },
            {
              "rarity": "Bronze",
              "name": "A Divided World",
              "desc": "Complete Traverse Town as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Dark Intervention",
              "desc": "Complete La Cité des Cloches as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Memory and Heart",
              "desc": "Complete The Grid as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Inhabitants of the Sleeping Worlds",
              "desc": "Complete Prankster's Paradise as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Distinct Worlds",
              "desc": "Revisit and complete Traverse Town as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "All for One, and One for All",
              "desc": "Complete Country of the Musketeers as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "A Sound Idea",
              "desc": "Complete Symphony of Sorcery as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "The Depths of Darkness",
              "desc": "Complete The World That Never Was as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Nostalgic",
              "desc": "View all flashbacks."
            },
            {
              "rarity": "Silver",
              "name": "Flick Rush Fever",
              "desc": "Achieve a Rush Level of 20."
            },
            {
              "rarity": "Bronze",
              "name": "Medal Master",
              "desc": "Obtain 3,000 or more medals in Flick Rush."
            },
            {
              "rarity": "Bronze",
              "name": "Lucky Seven",
              "desc": "Win a Flick Rush duel by lining up three 7s."
            },
            {
              "rarity": "Bronze",
              "name": "Super Cyclist",
              "desc": "Earn a score of 1,000 or higher on the Light Cycle."
            },
            {
              "rarity": "Bronze",
              "name": "Balloon Master",
              "desc": "Earn a score of 200 or higher in the Balloon mini-game."
            },
            {
              "rarity": "Bronze",
              "name": "Water Barrel Master",
              "desc": "Earn a score of 400 or higher in the Water Barrel mini-game."
            },
            {
              "rarity": "Bronze",
              "name": "Candy Goggles Master",
              "desc": "Earn a score of 800 or higher in the Candy Goggles mini-game."
            },
            {
              "rarity": "Bronze",
              "name": "Easy as 1-2-3",
              "desc": "Create a party with 3 Spirits."
            },
            {
              "rarity": "Bronze",
              "name": "True Trainer",
              "desc": "Use every Training Toy."
            },
            {
              "rarity": "Bronze",
              "name": "Happy Campers",
              "desc": "Create a party with 3 Spirits and make them all very happy."
            },
            {
              "rarity": "Bronze",
              "name": "Kindred Spirits",
              "desc": "Max out a Spirit's Affinity Level."
            },
            {
              "rarity": "Bronze",
              "name": "Golden Egg",
              "desc": "Breed a ★ Rank Spirit."
            },
            {
              "rarity": "Bronze",
              "name": "Strongest Link",
              "desc": "Unlock all nodes on any Spirit's Ability Link board."
            },
            {
              "rarity": "Bronze",
              "name": "Lifesaver",
              "desc": "Rescue Spirits 3 times in battle."
            },
            {
              "rarity": "Bronze",
              "name": "Ability Ace",
              "desc": "Max out and install all Support and Spirits abilities."
            },
            {
              "rarity": "Bronze",
              "name": "Bull's-Eye",
              "desc": "Defeat 5 or more enemies with a single hit in Slingshot."
            },
            {
              "rarity": "Bronze",
              "name": "Sliding By",
              "desc": "Connect 6 or more points with a single Faithline."
            },
            {
              "rarity": "Bronze",
              "name": "Super Hacker",
              "desc": "Activate all Code Break commands."
            },
            {
              "rarity": "Bronze",
              "name": "Bubble Burster",
              "desc": "Trap 6 or more enemies in Bubble Burst."
            },
            {
              "rarity": "Bronze",
              "name": "Comic King",
              "desc": "Activate all of Wonder Comic's effects at least once."
            },
            {
              "rarity": "Bronze",
              "name": "Maestro",
              "desc": "Defeat 4 or more enemies in one turn of Melody Catcher."
            },
            {
              "rarity": "Bronze",
              "name": "Chain Reaction",
              "desc": "Sever all chains with a single slash 3 times in a row using Nightmare's End or Mirage Split."
            },
            {
              "rarity": "Bronze",
              "name": "Champions of All Districts",
              "desc": "Complete all Special Portals in Traverse Town as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Champions of the Cathedral",
              "desc": "Complete all Special Portals in La Cité des Cloches as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Champions of the Digital World",
              "desc": "Complete all Special Portals in The Grid as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Champions of the Endless Ocean",
              "desc": "Complete all Special Portals in Prankster's Paradise as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Champions of the Opéra House",
              "desc": "Complete all Special Portals in Country of the Musketeers as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Champions of the Harmonic Score",
              "desc": "Complete all Special Portals in Symphony of Sorcery as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Champions of the Dark City",
              "desc": "Complete all Special Portals in The World That Never Was as both Sora and Riku."
            },
            {
              "rarity": "Bronze",
              "name": "Brave Challengers",
              "desc": "Complete all 7 Link Portal bonus objectives."
            },
            {
              "rarity": "Gold",
              "name": "Seekers of Secrets",
              "desc": "Complete all Secret Portals as both Sora and Riku."
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
              "how": "Perform a Single Link Attack with one of these Spirits: Meow Wow, Flowbermeow, Meowjesty, Catanuki",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Roll Call",
              "how": "Perform a Single Link Attack with one of these Spirits: Cera Terror, Drill Sye, Escarglow, Tama Sheep",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Whirling Bronco",
              "how": "Perform a Single Link Attack with one of these Spirits: Cyber Yog, Yoggy Ram",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Fly-By Knight",
              "how": "Perform a Single Link Attack with one of these Spirits: Eaglider, Halbird, Komory Bat, Peepsta Hoo",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Hammer Throw",
              "how": "Perform a Single Link Attack with Pricklemane",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Flame Thrower",
              "how": "Perform a Single Link Attack with one of these Spirits: Hebby Repp, Sudo Neku",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Decussation",
              "how": "Perform a Single Link Attack with one of these Spirits: Chef Kyroo, Lord Kyroo, Ryu Dragon, Sir Kyroo",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Poison Dash",
              "how": "Perform a Single Link Attack with Toximander",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Water Blaster",
              "how": "Perform a Single Link Attack with one of these Spirits: Fin Fatale, Fishboné",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Bubble Blaster",
              "how": "Perform a Single Link Attack with Tatsu Steed",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Paw Groove",
              "how": "Perform a Single Link Attack with one of these Spirits: Necho Cat, Frootz Cat",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Equestrian Raid",
              "how": "Perform a Single Link Attack with one of these Spirits: Electricorn, Pegaslick, Thunderaffe",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Swing Fling",
              "how": "Perform a Single Link Attack with one of these Spirits: Kooma Panda, Majik Lapin, Me Me Bunny, Ursa Circus",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Belly Raid",
              "how": "Perform a Single Link Attack with Iceguin Ace",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Target Shot",
              "how": "Perform a Single Link Attack with one of these Spirits: Kab Kannon, KO Kabuto",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Trap Shot",
              "how": "Perform a Single Link Attack with Staggerceps",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Cure Sun",
              "how": "Perform a Single Link Attack with Wheeflower",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Vacuum Ghost",
              "how": "Perform a Single Link Attack with one of these Spirits: Ghostabocky, Jestabocky",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Berserker Bronco",
              "how": "Perform a Single Link Attack with one of these Spirits: Zolephant, Beatalike",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Lucky Dice",
              "how": "Perform a Single Link Attack with one of these Spirits: Juggle Pup, R&R Seal",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Fire Blaster",
              "how": "Perform a Single Link Attack with Tatsu Blaze",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Poison Rain",
              "how": "Perform a Single Link Attack with Woeflower",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Flame Raid",
              "how": "Perform a Single Link Attack with Tyranto Rex",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Ice Raid",
              "how": "Perform a Single Link Attack with Skelterwild",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Tail Groove",
              "how": "Perform a Single Link Attack with one of these Spirits: Drak Quack, Ducky Goose",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Aura Raid",
              "how": "Perform a Single Link Attack with one of these Spirits: Aura Lion, Keeba Tiger",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Unwind",
              "how": "Perform a Single Link Attack with Tubguin Ace",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Whomperstomp",
              "how": "Perform a Dual Link Attack with one of the Meow Wow variants and any other Spirit (e.g. Meow Wow + Komory Bat)",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Comet",
              "how": "Perform a Dual Link Attack with the following combinations of Spirits: Physical + Fire, Physical + Dark, Fire + Fire, Fire + Water, Fire + Dark (e.g. Hebby Repp + Komory Bat)",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Unison Rush",
              "how": "Perform a Dual Link Attack with the following combinations of Spirits: Physical + Physical, Physical + Thunder, Physical + Light, Physical + Blizzard (e.g. Kooma Panda + Cyber Yog)",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Chaos Snake",
              "how": "Perform a Dual Link Attack with the following combinations of Spirits: Physical + Water, Fire + Thunder, Water + Water, Dark + Dark, Dark + Blizzard (e.g. Kooma Panda + Wheeflower)",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Prism Light",
              "how": "Perform a Dual Link Attack with the following combinations of Spirits: Fire + Blizzard, Water + Blizzard, Thunder + Blizzard, Light + Blizzard, Blizzard + Blizzard (e.g. Hebby Repp + Iceguin Ace)",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Trinity Limit",
              "how": "Perform a Dual Link Attack with the following combinations of Spirits: Fire + Light, Water + Thunder, Water + Light, Light + Light, Light + Dark (e.g. Pegaslick + Komory Bat)",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Ragnarok",
              "how": "Perform a Dual Link Attack with the following combinations of Spirits: Water + Dark, Thunder + Thunder, Thunder + Light, Thunder + Dark (e.g. Cyber Yog + Komory Bat)",
              "g": "Link Attacks",
              "c": "sora"
            },
            {
              "name": "Shining Hammer",
              "how": "Activate a Single Link Style with a Physical or Light Spirit (e.g. Meow Wow or Pegaslick)",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Fire Raid",
              "how": "Activate a Single Link Style with a Fire Spirit (e.g. Hebby Repp)",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Wavesurfer",
              "how": "Activate a Single Link Style with a Water or Blizzard Spirit (e.g. Wheeflower or Iceguin Ace)",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Thunderstorm",
              "how": "Activate a Single Link Style with a Thunder Spirit (e.g. Cyber Yog)",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Darkest Fears",
              "how": "Activate a Single Link Style with a Dark Spirit (e.g. Komory Bat)",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Rising Wing",
              "how": "Activate a Dual Link Style with these combinations of Spirits: Lord Kyroo + anything, Physical/Light + Physical/Light, Physical/Light + Fire, Physical/Light + Dark, Fire + Fire, Fire + Lightning, Water + Lightning",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Bladecharge",
              "how": "Activate a Dual Link Style with these combinations of Spirits: certain flying Spirits (like Komory Bat) + anything, Physical/Light + Water, Fire + Water, Water + Water, Water + Dark",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Ghost Drive",
              "how": "Activate a Dual Link Style with these combinations of Spirits: Ghostabocky + anything, Physical/Light + Lightning, Fire + Dark, Lightning + Lightning, Lightning + Dark, Dark + Dark",
              "g": "Link Styles",
              "c": "riku"
            },
            {
              "name": "Slingshot",
              "how": "Traverse Town",
              "g": "Reality Shifts"
            },
            {
              "name": "Faithline",
              "how": "La Cité des Cloches",
              "g": "Reality Shifts"
            },
            {
              "name": "Bubble Burst",
              "how": "Prankster's Paradise",
              "g": "Reality Shifts"
            },
            {
              "name": "Code Break",
              "how": "The Grid",
              "g": "Reality Shifts"
            },
            {
              "name": "Wonder Comic",
              "how": "Country of the Musketeers",
              "g": "Reality Shifts"
            },
            {
              "name": "Melody Catcher",
              "how": "Symphony of Sorcery",
              "g": "Reality Shifts"
            },
            {
              "name": "Nightmare's End",
              "how": "The World That Never Was (Sora)",
              "g": "Reality Shifts"
            },
            {
              "name": "Mirage Split",
              "how": "The World That Never Was (Riku)",
              "g": "Reality Shifts"
            },
            {
              "name": "Kick Dive",
              "how": "Press the attack button after a wall kick to perform a spinning attack",
              "g": "Flowmotion"
            },
            {
              "name": "Shock Dive",
              "how": "Press the attack button after a jump to generate a shockwave with a diving attack",
              "g": "Flowmotion"
            },
            {
              "name": "Sliding Dive",
              "how": "Press the attack button while sliding through a rail to perform a teleport attack",
              "g": "Flowmotion"
            },
            {
              "name": "Buzz Saw",
              "how": "Press the attack button while spinning on a vertical pole to perform a spin attack",
              "g": "Flowmotion"
            },
            {
              "name": "Blow-Off",
              "how": "Press the attack button while spinning on a large foe to throw it against other enemies",
              "g": "Flowmotion"
            },
            {
              "name": "Wheel Rush",
              "how": "Press the attack button while spinning on an horizontal pole to throw yourself towards the enemy",
              "g": "Flowmotion"
            },
            {
              "name": "Traverse Town",
              "how": "Rank A requirement: 750,000 points or higher",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "La Cité des Cloches",
              "how": "Rank A requirement: 1,200,000 points or higher",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "Prankster's Paradise",
              "how": "Rank A requirement: 30,000 points or higher",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "The Grid",
              "how": "Rank A requirement: 100,000 points or higher",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "Country of the Musketeers",
              "how": "Rank A requirement: 650,000 points or higher",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "Symphony of Sorcery",
              "how": "Rank A requirement: 1,000,000 points or higher",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "The World That Never Was",
              "how": "Rank A requirement: 140,000 points or higher",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "Ending",
              "how": "-",
              "g": "Dive Mode",
              "c": "sora"
            },
            {
              "name": "Traverse Town",
              "how": "Rank A requirement: 420,000 points or higher",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "La Cité des Cloches",
              "how": "Rank A requirement: 140,000 points or higher",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "Prankster's Paradise",
              "how": "Rank A requirement: 400,000 points or higher",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "The Grid",
              "how": "Rank A requirement: 30,000 points or higher",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "Country of the Musketeers",
              "how": "Rank A requirement: 100,000 points or higher",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "Symphony of Sorcery",
              "how": "Rank A requirement: 800,000 points or higher",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "The World That Never Was",
              "how": "Rank A requirement: 1,000,000 points or higher",
              "g": "Dive Mode",
              "c": "riku"
            },
            {
              "name": "Light Cycle",
              "how": "The Grid (Riku) - Target score: 1,000 points or higher",
              "g": "Mini-games"
            },
            {
              "name": "Balloon",
              "how": "See Treasures - Target score: 200 points or higher",
              "g": "Mini-games"
            },
            {
              "name": "Water Barrel",
              "how": "See Treasures - Target score: 400 points or higher",
              "g": "Mini-games"
            },
            {
              "name": "Candy Goggles",
              "how": "See Treasures - Target score: 800 points or higher",
              "g": "Mini-games"
            }
          ]
        }
      ]
    },
    {
      "id": "shelf",
      "sections": [
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
              "name": "In the Clear",
              "desc": "Proof you have finished the story."
            },
            {
              "name": "Badge of Pride",
              "desc": "Proof you have finished the story in Proud Mode."
            },
            {
              "name": "Stop Drop Roller",
              "desc": "Proof you have racked up 2,000 Drop Points."
            },
            {
              "name": "King of Rush",
              "desc": "Proof you have taken first place in every Flick Rush cup."
            },
            {
              "name": "Keyslinger",
              "desc": "Proof you have taken out 2,500 Dream Eaters."
            },
            {
              "name": "In the Munny",
              "desc": "Proof you have amassed 5,000 munny."
            },
            {
              "name": "Dream Pleaser",
              "desc": "Proof that you have maxed out every Spirit's Affinity Level."
            },
            {
              "name": "Portal Champ",
              "desc": "Proof you have completed every Special Portal and Secret Portal."
            },
            {
              "name": "Daring Diver",
              "desc": "Proof you have scored more than 7,500,000 points in Dive Mode."
            },
            {
              "name": "Motion Slickness",
              "desc": "Proof you have defeated 1,000 enemies while in Flowmotion."
            },
            {
              "name": "Treasure Seeker",
              "desc": "Proof you have found every last treasure."
            },
            {
              "name": "Spirit Guide",
              "desc": "Proof you have obtained at least one of every Spirit."
            },
            {
              "name": "Critical Praise",
              "desc": "Proof you have finished the story in Critical Mode."
            },
            {
              "name": "Reality Shifter",
              "desc": "Proof you have defeated 50 enemies using Reality Shift."
            },
            {
              "name": "Pro Linker",
              "desc": "Proof you have linked with your Spirits at least 50 times."
            },
            {
              "name": "Stat Builder",
              "desc": "Proof you have maxed out every stat-boosting ability."
            },
            {
              "name": "Ribbit Reaper",
              "desc": "Proof you have defeated Lord Kyroo."
            },
            {
              "name": "Keyblade Conqueror",
              "desc": "Proof you have obtained every Keyblade."
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
              "k": "spirit"
            },
            {
              "k": "nightmare"
            },
            {
              "k": "rare"
            },
            {
              "k": "loc"
            }
          ],
          "items": [
            {
              "name": "Meow Wow",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Traverse Town, La Cité des Cloches Rare N.: Special Portals in Traverse Town, The Grid"
            },
            {
              "name": "Tama Sheep",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Traverse Town, La Cité des Cloches Rare Nightmare: Special Portal in Traverse Town"
            },
            {
              "name": "Yoggy Ram",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Traverse Town, La Cité des Cloches Rare Nightmare: Special Portal in The Grid"
            },
            {
              "name": "Komory Bat",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Traverse Town, La Cité des Cloches"
            },
            {
              "name": "Pricklemane",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Traverse Town, La Cité des Cloches"
            },
            {
              "name": "Hebby Repp",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Traverse Town, La Cité des Cloches"
            },
            {
              "name": "Sir Kyroo",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Prankster's Paradise, Country of the Musketeers"
            },
            {
              "name": "Toximander",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: La Cité des Cloches, Country of the Musketeers"
            },
            {
              "name": "Fin Fatale",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Prankster's Paradise, Symphony of Sorcery"
            },
            {
              "name": "Tatsu Steed",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Prankster's Paradise, Symphony of Sorcery"
            },
            {
              "name": "Necho Cat",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Traverse Town, La Cité des Cloches Rare Nightmare: Special Portal in La Cité des Cloches"
            },
            {
              "name": "Thunderaffe",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Symphony of Sorcery, The World That Never Was Rare Nightmare: Special Portal in The World That Never Was"
            },
            {
              "name": "Kooma Panda",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Traverse Town, La Cité des Cloches Rare N.: Special Portals in Traverse Town, Prankster's Paradise"
            },
            {
              "name": "Pegaslick",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Symphony of Sorcery, The World That Never Was Rare Nightmare: Special Portal in Symphony of Sorcery"
            },
            {
              "name": "Iceguin Ace",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Prankster's Paradise, Country of the Musketeers Rare Nightmare: Special Portal in Prankster's Paradise"
            },
            {
              "name": "Peepsta Hoo",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: The Grid, Country of the Musketeers"
            },
            {
              "name": "Escarglow",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: The Grid, Symphony of Sorcery"
            },
            {
              "name": "KO Kabuto",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: The Grid, Country of the Musketeers Rare Nightmare: Special Portal in The Grid"
            },
            {
              "name": "Wheeflower",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: La Cité des Cloches"
            },
            {
              "name": "Ghostabocky",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Symphony of Sorcery, The World That Never Was Rare Nightmare: Special Portal in Symphony of Sorcery"
            },
            {
              "name": "Zolephant",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: La Cité des Cloches, Country of the Musketeers Rare Nightmare: Special Portal in La Cité des Cloches"
            },
            {
              "name": "Juggle Pup",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Prankster's Paradise, Symphony of Sorcery Rare Nightmare: Special Portal in Prankster's Paradise"
            },
            {
              "name": "Halbird",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: The Grid, Country of the Musketeers Rare Nightmare: Special Portal in Country of the Musketeers"
            },
            {
              "name": "Staggerceps",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Country of the Musketeers, Symphony of Sorcery"
            },
            {
              "name": "Fishboné",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Country of the Musketeers, Symphony of Sorcery"
            },
            {
              "name": "Flowbermeow",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Special Portals in Traverse Town, Prankster's Paradise"
            },
            {
              "name": "Cyber Yog",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: The Grid"
            },
            {
              "name": "Chef Kyroo",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Country of the Musketeers, Symphony of Sorcery"
            },
            {
              "name": "Lord Kyroo",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Special Portal in Prankster's Paradise"
            },
            {
              "name": "Tatsu Blaze",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Traverse Town, Country of the Musketeers"
            },
            {
              "name": "Electricorn",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Symphony of Sorcery, The World That Never Was"
            },
            {
              "name": "Woeflower",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: La Cité des Cloches, Symphony of Sorcery"
            },
            {
              "name": "Jestabocky",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Prankster's Paradise, Country of the Musketeers"
            },
            {
              "name": "Eaglider",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: The Grid, The World That Never Was"
            },
            {
              "name": "Me Me Bunny",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Country of the Musketeers Rare Nightmare: Special Portal in Country of the Musketeers"
            },
            {
              "name": "Drill Sye",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: La Cité des Cloches, Traverse Town (2nd visit) Rare Nightmare: Special Portal in La Cité des Cloches"
            },
            {
              "name": "Tyranto Rex",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Country of the Musketeers Rare Nightmare: Special Portal in Country of the Musketeers"
            },
            {
              "name": "Majik Lapin",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: The World That Never Was"
            },
            {
              "name": "Cera Terror",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: Traverse Town (2nd visit), The World That Never Was"
            },
            {
              "name": "Skelterwild",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: The World That Never Was"
            },
            {
              "name": "Ducky Goose",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Country of the Musketeers Rare Nightmare: Special Portal in Country of the Musketeers"
            },
            {
              "name": "Aura Lion",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Country of the Musketeers Rare Nightmare: Special Portal in Country of the Musketeers"
            },
            {
              "name": "Ryu Dragon",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "Yes",
              "loc": "Nightmare: Symphony of Sorcery, The World That Never Was Rare Nightmare: Special Portal in Symphony of Sorcery"
            },
            {
              "name": "Drak Quack",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: The World That Never Was"
            },
            {
              "name": "Keeba Tiger",
              "spirit": "Yes",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Nightmare: The World That Never Was"
            },
            {
              "name": "Meowjesty",
              "spirit": "Yes",
              "nightmare": "—",
              "rare": "—"
            },
            {
              "name": "Sudo Neku",
              "spirit": "Yes",
              "nightmare": "—",
              "rare": "—"
            },
            {
              "name": "Frootz Cat",
              "spirit": "Yes",
              "nightmare": "—",
              "rare": "—"
            },
            {
              "name": "Ursa Circus",
              "spirit": "Yes",
              "nightmare": "—",
              "rare": "—"
            },
            {
              "name": "Kab Kannon",
              "spirit": "Yes",
              "nightmare": "—",
              "rare": "—"
            },
            {
              "name": "R & R Seal",
              "spirit": "Yes",
              "nightmare": "—",
              "rare": "—"
            },
            {
              "name": "Catanuki",
              "spirit": "Yes",
              "nightmare": "—",
              "rare": "—"
            },
            {
              "name": "Beatalike",
              "spirit": "Yes",
              "nightmare": "—",
              "rare": "—"
            },
            {
              "name": "Tubguin Ace",
              "spirit": "Yes",
              "nightmare": "—",
              "rare": "—"
            },
            {
              "name": "Spellican",
              "spirit": "—",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Story boss"
            },
            {
              "name": "Commantis",
              "spirit": "—",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Story boss"
            },
            {
              "name": "Char Clawbster",
              "spirit": "—",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Story boss"
            },
            {
              "name": "Chill Clawbster",
              "spirit": "—",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Story boss"
            },
            {
              "name": "Hockomonkey",
              "spirit": "—",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Story boss"
            },
            {
              "name": "Holey Moley",
              "spirit": "—",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Story boss"
            },
            {
              "name": "Wargoyle",
              "spirit": "—",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Story boss"
            },
            {
              "name": "Brawlamari",
              "spirit": "—",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Dive boss"
            },
            {
              "name": "Queen Buzzerfly",
              "spirit": "—",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Dive boss"
            },
            {
              "name": "Anti Black Coat",
              "spirit": "—",
              "nightmare": "Yes",
              "rare": "—",
              "loc": "Story boss"
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
              "name": "Meow Wow",
              "ing1": "Rampant Figment x3",
              "ing2": "Vibrant Figment x2",
              "how": "Story progression (Traverse Town, Sora)"
            },
            {
              "name": "Tama Sheep",
              "ing1": "Vibrant Figment x3",
              "ing2": "Troubling Figment x2",
              "how": "Special Portal 3 in Traverse Town (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 3"
            },
            {
              "name": "Yoggy Ram",
              "ing1": "Dulcet Figment x2",
              "ing2": "Grim Figment x3",
              "how": "Treasure Chest in Traverse Town (Riku)"
            },
            {
              "name": "Komory Bat",
              "ing1": "Rampant Figment x2",
              "ing2": "Troubling Figment x3",
              "how": "Story progression (Traverse Town, Riku)"
            },
            {
              "name": "Pricklemane",
              "ing1": "Rampant Figment x2",
              "ing2": "Intrepid Figment x2",
              "how": "Purchase from the Moogle Shop"
            },
            {
              "name": "Hebby Repp",
              "ing1": "Intrepid Figment x3",
              "ing2": "Noble Figment x2",
              "how": "Purchase from the Moogle Shop"
            },
            {
              "name": "Sir Kyroo",
              "ing1": "Noble Fancy x3",
              "ing2": "Grim Figment x4",
              "how": "Treasure Chest in Prankster's Paradise (Riku)"
            },
            {
              "name": "Toximander",
              "ing1": "Vibrant Figment x6",
              "ing2": "Troubling Figment x5",
              "how": "Treasure Chest in La Cité des Cloches (Sora)"
            },
            {
              "name": "Fin Fatale",
              "ing1": "Rampant Fancy x3",
              "ing2": "Noble Figment x3",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 2"
            },
            {
              "name": "Tatsu Steed",
              "ing1": "Lofty Figment x3",
              "ing2": "Wondrous Figment x3",
              "how": "Treasure Chest in Prankster's Paradise (Sora)"
            },
            {
              "name": "Necho Cat",
              "ing1": "Rampant Figment x6",
              "ing2": "Dulcet Fancy x3",
              "how": "Special Portal 3 in La Cité des Cloches (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 4"
            },
            {
              "name": "Thunderaffe",
              "ing1": "Fleeting Fancy x5",
              "ing2": "Noble Fancy x7",
              "how": "Special Portal 4 in Traverse Town (Sora) Purchase from the Medal Shop after reaching Shop Lv. 4"
            },
            {
              "name": "Kooma Panda",
              "ing1": "Intrepid Figment x5",
              "ing2": "Vibrant Fancy x3",
              "how": "Special Portal 1 in Traverse Town (Sora) Purchase from the Medal Shop"
            },
            {
              "name": "Pegaslick",
              "ing1": "Lofty Fancy x3",
              "ing2": "Dulcet Fancy x4",
              "how": "Special Portal 1 in Symphony of Sorcery (Sora) Purchase from the Medal Shop after reaching Shop Lv. 5"
            },
            {
              "name": "Iceguin Ace",
              "ing1": "Lofty Fancy x4",
              "ing2": "Rampant Fantasy x2",
              "how": "Special Portal 1 in Prankster's Paradise (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 6"
            },
            {
              "name": "Peepsta Hoo",
              "ing1": "Dulcet Figment x3",
              "ing2": "Wondrous Figment x3",
              "how": "Treasure Chest in The Grid (Riku)"
            },
            {
              "name": "Escarglow",
              "ing1": "Fleeting Figment x3",
              "ing2": "Grim Figment x4",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 3"
            },
            {
              "name": "KO Kabuto",
              "ing1": "Rampant Figment x6",
              "ing2": "Noble Fancy x3",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 4"
            },
            {
              "name": "Wheeflower",
              "ing1": "Lofty Figment x3",
              "ing2": "Rampant Figment x4",
              "how": "Treasure Chest in La Cité des Cloches (Sora)"
            },
            {
              "name": "Ghostabocky",
              "ing1": "Dulcet Figment x5",
              "ing2": "Wondrous Fantasy x3",
              "how": "Special Portal 2 in Symphony of Sorcery (Riku)"
            },
            {
              "name": "Zolephant",
              "ing1": "Dulcet Fancy x4",
              "ing2": "Malleable Fantasy x1",
              "how": "Story progression (La Cité des Cloches, Sora)"
            },
            {
              "name": "Juggle Pup",
              "ing1": "Vibrant Fantasy x2",
              "ing2": "Wondrous Fancy x4",
              "how": "Special Portal 3 in Prankster's Paradise (Riku) Purchase from the Medal Shop after reaching Shop Lv. 2"
            },
            {
              "name": "Halbird",
              "ing1": "Lofty Fancy x4",
              "ing2": "Epic Fantasy x1",
              "how": "Special Portal 2 in Country of the Musketeers (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 7"
            },
            {
              "name": "Staggerceps",
              "ing1": "Fleeting Figment x4",
              "ing2": "Grim Fancy x3",
              "how": "Treasure Chest in Country of the Musketeers (Riku)"
            },
            {
              "name": "Fishboné",
              "ing1": "Rampant Figment x6",
              "ing2": "Wondrous Fancy x3",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 5"
            },
            {
              "name": "Flowbermeow",
              "ing1": "Fleeting Fantasy x2",
              "ing2": "Malleable Fantasy x3",
              "how": "Special Portal 2 in Traverse Town (Riku)"
            },
            {
              "name": "Cyber Yog",
              "ing1": "Noble Fancy x3",
              "ing2": "Grim Figment x4",
              "how": "Treasure Chest in The Grid (Sora)"
            },
            {
              "name": "Chef Kyroo",
              "ing1": "Noble Fancy x3",
              "ing2": "Wondrous Fancy x3",
              "how": "Treasure Chest in Country of the Musketeers (Sora)"
            },
            {
              "name": "Lord Kyroo",
              "ing1": "Brilliant Fantasy x2",
              "ing2": "Noble Fancy x5",
              "how": "Defeat the Rare Lord Kyroo"
            },
            {
              "name": "Tatsu Blaze",
              "ing1": "Rampant Fancy x3",
              "ing2": "Grim Fancy x3",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 5"
            },
            {
              "name": "Electricorn",
              "ing1": "Fleeting Fantasy x2",
              "ing2": "Lofty Fancy x4",
              "how": "Treasure Chest in Symphony of Sorcery (Sora)"
            },
            {
              "name": "Woeflower",
              "ing1": "Lofty Fancy x3",
              "ing2": "Troubling Fancy x3",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 3"
            },
            {
              "name": "Jestabocky",
              "ing1": "Rampant Figment x4",
              "ing2": "Vibrant Fancy x3",
              "how": "Story progression (Prankster's Paradise, Sora)"
            },
            {
              "name": "Eaglider",
              "ing1": "Prickly Fantasy x1",
              "ing2": "Grim Fancy x3",
              "how": "Treasure Chest in The Grid (Sora)"
            },
            {
              "name": "Me Me Bunny",
              "ing1": "Rampant Figment x6",
              "ing2": "Intrepid Fancy x3",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 6"
            },
            {
              "name": "Drill Sye",
              "ing1": "Intrepid Fancy x5",
              "ing2": "Noble Fantasy x2",
              "how": "Special Portal 2 in La Cité des Cloches (Sora) Purchase from the Medal Shop"
            },
            {
              "name": "Tyranto Rex",
              "ing1": "Epic Fantasy x1",
              "ing2": "Intrepid Fantasy x3",
              "how": "Story progression (Country of the Musketeers, Sora)"
            },
            {
              "name": "Majik Lapin",
              "ing1": "Dulcet Fantasy x2",
              "ing2": "Troubling Figment x8",
              "how": "Purchase from the Medal Shop after reaching Shop Lv. 6"
            },
            {
              "name": "Cera Terror",
              "ing1": "Intrepid Figment x8",
              "ing2": "Grim Fantasy x4",
              "how": "Story progression (Traverse Town 2nd visit, Riku)"
            },
            {
              "name": "Skelterwild",
              "ing1": "Wild Fantasy x2",
              "ing2": "Brilliant Fantasy x1",
              "how": "Treasure Chest in The World That Never Was (Riku)"
            },
            {
              "name": "Ducky Goose",
              "ing1": "Dulcet Fancy x3",
              "ing2": "Vibrant Fancy x3",
              "how": "Treasure Chest in Country of the Musketeers (Riku)"
            },
            {
              "name": "Aura Lion",
              "ing1": "Intrepid Fantasy x3",
              "ing2": "Noble Fantasy x3",
              "how": "Special Portal 1 in Country of the Musketeers (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 8"
            },
            {
              "name": "Ryu Dragon",
              "ing1": "Lofty Fancy x3",
              "ing2": "Brilliant Fantasy x2",
              "how": "Treasure Chest in Symphony of Sorcery (Riku)"
            },
            {
              "name": "Drak Quack",
              "ing1": "Vibrant Fancy x4",
              "ing2": "Wondrous Fantasy x3",
              "how": "Treasure Chest in The World That Never Was (Sora)"
            },
            {
              "name": "Keeba Tiger",
              "ing1": "Prickly Fantasy x1",
              "ing2": "Savage Fantasy x2",
              "how": "Treasure Chest in The World That Never Was (Riku)"
            },
            {
              "name": "Meowjesty",
              "ing1": "Rampant Fantasy x2",
              "ing2": "Malleable Fantasy x1",
              "how": "Purchase from the Medal Shop for 2000 medals after reaching Rank 20 in Flick Rush"
            },
            {
              "name": "Sudo Neku",
              "ing1": "Wild Fantasy x1",
              "ing2": "Noble Fantasy x2",
              "how": "Purchase from the Medal Shop for 2000 medals after reaching Rank 20 in Flick Rush"
            },
            {
              "name": "Frootz Cat",
              "ing1": "Wondrous Fancy x4",
              "ing2": "Grim Fantasy x5",
              "how": "Purchase from the Moogle Shop"
            },
            {
              "name": "Ursa Circus",
              "ing1": "Epic Fantasy x1",
              "ing2": "Intrepid Fantasy x3",
              "how": "Purchase from the Medal Shop for 2000 medals after reaching Rank 20 in Flick Rush"
            },
            {
              "name": "Kab Kannon",
              "ing1": "Grim Figment x4",
              "ing2": "Noble Fantasy x3",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 7"
            },
            {
              "name": "R & R Seal",
              "ing1": "Wondrous Figment x6",
              "ing2": "Vibrant Fantasy x2",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 2"
            },
            {
              "name": "Catanuki",
              "ing1": "Rampant Fancy x4",
              "ing2": "Vibrant Fantasy x4",
              "how": "Treasure Chest in La Cité des Cloches (Sora)"
            },
            {
              "name": "Beatalike",
              "ing1": "Intrepid Fantasy x3",
              "ing2": "Noble Figment x6",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 8"
            },
            {
              "name": "Tubguin Ace",
              "ing1": "Lofty Fancy x3",
              "ing2": "Vibrant Fancy x3",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 2"
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
              "k": "max"
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Combo Plus",
              "max": "3",
              "how": "Kooma Panda, Lord Kyroo, Me Me Bunny, Pricklemane, Ryu Dragon, Staggerceps, Sir Kyroo",
              "g": "Support"
            },
            {
              "name": "Air Combo Plus",
              "max": "3",
              "how": "Halbird, Chef Kyroo, Eaglider, Pegaslick",
              "g": "Support"
            },
            {
              "name": "Combo Master",
              "max": "1",
              "how": "Lord Kyroo, Ryu Dragon",
              "g": "Support"
            },
            {
              "name": "EXP Boost",
              "max": "1",
              "how": "Cera Terror, Drill Sye, Keeba Tiger",
              "g": "Support"
            },
            {
              "name": "EXP Walker",
              "max": "1",
              "how": "Skelterwild",
              "g": "Support"
            },
            {
              "name": "EXP Zero",
              "max": "1",
              "how": "Received by default (Proud and Critical mode only)",
              "g": "Support"
            },
            {
              "name": "Damage Syphon",
              "max": "1",
              "how": "Ducky Goose, Thunderaffe, Ursa Circus",
              "g": "Support"
            },
            {
              "name": "Second Chance",
              "max": "1",
              "how": "Aura Lion, Escarglow, Meowjesty, R & R Seal, Zolephant",
              "g": "Support"
            },
            {
              "name": "Once More",
              "max": "1",
              "how": "Drak Quack, Flowbermeow, Tyranto Rex",
              "g": "Support"
            },
            {
              "name": "Scan",
              "max": "1",
              "how": "Received by default",
              "g": "Support"
            },
            {
              "name": "Leaf Bracer",
              "max": "1",
              "how": "Aura Lion, Electricorn, Fishboné, Juggle Pup, Meow Wow",
              "g": "Support"
            },
            {
              "name": "Treasure Magnet",
              "max": "5",
              "how": "Cyber Yog, Drak Quack, Ducky Goose, Ghostabocky, Jestabocky, Toximander, Woeflower, Yoggy Ram",
              "g": "Support"
            },
            {
              "name": "Link Critical",
              "max": "1",
              "how": "Meow Wow",
              "g": "Spirit"
            },
            {
              "name": "Support Boost",
              "max": "3",
              "how": "Ducky Goose, Electricorn, Fin Fatale, Frootz Cat, Necho Cat, Peepsta Hoo, Tama Sheep, Tatsu Blaze",
              "g": "Spirit"
            },
            {
              "name": "Waking Dream",
              "max": "1",
              "how": "Komory Bat",
              "g": "Spirit"
            }
          ]
        },
        {
          "id": "abstats",
          "cols": [
            {
              "k": "name",
              "name": true
            },
            {
              "k": "max"
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "HP Boost",
              "max": "5",
              "how": "R & R Seal, Zolephant, Cera Terror, Keeba Tiger, Skelterwild, Tama Sheep, Wheeflower, Yoggy Ram, and more",
              "g": "Stats"
            },
            {
              "name": "Fire Boost",
              "max": "3",
              "how": "Hebby Repp, Tyranto Rex, Chef Kyroo, Peepsta Hoo, Ryu Dragon, Tatsu Blaze, Sudo Neku, Yoggy Ram, and more",
              "g": "Stats"
            },
            {
              "name": "Blizzard Boost",
              "max": "3",
              "how": "Iceguin Ace, Skelterwild, Peepsta Hoo, Tatsu Steed, Juggle Pup, Sudo Neku",
              "g": "Stats"
            },
            {
              "name": "Thunder Boost",
              "max": "3",
              "how": "Cyber Yog, Necho Cat, Thunderaffe, Lord Kyroo, Peepsta Hoo, Sudo Neku, Electricorn, Frootz Cat",
              "g": "Stats"
            },
            {
              "name": "Water Boost",
              "max": "3",
              "how": "Fin Fatale, Fishboné, Sir Kyroo, Zolephant",
              "g": "Stats"
            },
            {
              "name": "Cure Boost",
              "max": "3",
              "how": "Sir Kyroo, Lord Kyroo, Wheeflower, Aura Lion, Electricorn, Iceguin Ace, Zolephant",
              "g": "Stats"
            },
            {
              "name": "Item Boost",
              "max": "3",
              "how": "Chef Kyroo, Drak Quack, Ducky Goose, Escarglow, Juggle Pup, Kooma Panda, Ursa Circus, Drill Sye, Meow Wow, Pricklemane",
              "g": "Stats"
            },
            {
              "name": "Attack Haste",
              "max": "5",
              "how": "Frootz Cat, Thunderaffe, Ursa Circus, Eaglider, Electricorn, Flowbermeow, Halbird, Keeba Tiger, Meow Wow, Sir Kyroo, Toximander, and more",
              "g": "Stats"
            },
            {
              "name": "Magic Haste",
              "max": "5",
              "how": "Frootz Cat, Majik Lapin, Flowbermeow, Halbird, Necho Cat, Pegaslick, Sudo Neku, Meow Wow, Toximander, and more",
              "g": "Stats"
            },
            {
              "name": "Attack Boost",
              "max": "3",
              "how": "Keeba Tiger, Tyranto Rex, Ursa Circus, Sir Kyroo, Staggerceps, Tatsu Blaze, Toximander, and more",
              "g": "Stats"
            },
            {
              "name": "Magic Boost",
              "max": "3",
              "how": "Majik Lapin, Sudo Neku, Peepsta Hoo, R & R Seal, Sir Kyroo, Tama Sheep, Woeflower, and more",
              "g": "Stats"
            },
            {
              "name": "Defense Boost",
              "max": "3",
              "how": "Kab Kannon, KO Kabuto, Skelterwild, Pricklemane, R & R Seal, Staggerceps, Tama Sheep, and more",
              "g": "Stats"
            },
            {
              "name": "Fire Screen",
              "max": "5",
              "how": "Yoggy Ram, Hebby Repp, Chef Kyroo, Eaglider, Escarglow, Kab Kannon, KO Kabuto, Tatsu Blaze, Tyranto Rex, Pricklemane",
              "g": "Stats"
            },
            {
              "name": "Blizzard Screen",
              "max": "5",
              "how": "Juggle Pup, KO Kabuto, Tatsu Steed, Escarglow, Iceguin Ace, Kab Kannon, Majik Lapin, Ducky Goose",
              "g": "Stats"
            },
            {
              "name": "Thunder Screen",
              "max": "5",
              "how": "Jestabocky, KO Kabuto, Cyber Yog, Kab Kannon, Thunderaffe, Escarglow",
              "g": "Stats"
            },
            {
              "name": "Water Screen",
              "max": "5",
              "how": "Sir Kyroo, Wheeflower, Zolephant, Escarglow, Kab Kannon, Tama Sheep, Fin Fatale",
              "g": "Stats"
            },
            {
              "name": "Dark Screen",
              "max": "5",
              "how": "Ghostabocky, Staggerceps, Fishboné, Komory Bat, Toximander, Woeflower, Escarglow, Majik Lapin, Me Me Bunny, Meowjesty",
              "g": "Stats"
            },
            {
              "name": "Light Screen",
              "max": "5",
              "how": "Pegaslick, Aura Lion, Flowbermeow, Staggerceps, Escarglow, Me Me Bunny, Meow Wow, Meowjesty",
              "g": "Stats"
            },
            {
              "name": "Mini Block",
              "max": "1",
              "how": "Cera Terror, Drill Sye, Kooma Panda, R & R Seal, Toximander",
              "g": "Stats"
            },
            {
              "name": "Blindness Block",
              "max": "1",
              "how": "Ghostabocky, Iceguin Ace, Jestabocky, Kooma Panda, Peepsta Hoo, Toximander, Ursa Circus, Woeflower",
              "g": "Stats"
            },
            {
              "name": "Confusion Block",
              "max": "1",
              "how": "Cyber Yog, Electricorn, Komory Bat, Kooma Panda, Meow Wow, Necho Cat, Peepsta Hoo, R & R Seal, Tatsu Steed, Toximander",
              "g": "Stats"
            },
            {
              "name": "Bind Block",
              "max": "1",
              "how": "Eaglider, Kooma Panda, Meowjesty, Peepsta Hoo, R & R Seal, Tatsu Blaze, Tatsu Steed, Toximander, Wheeflower, Yoggy Ram",
              "g": "Stats"
            },
            {
              "name": "Poison Block",
              "max": "1",
              "how": "Drill Sye, Fishboné, Meow Wow, Peepsta Hoo, Pricklemane, R & R Seal, Skelterwild, Toximander",
              "g": "Stats"
            },
            {
              "name": "Slow Block",
              "max": "1",
              "how": "Drill Sye, Eaglider, Fin Fatale, Ghostabocky, Hebby Repp, Me Me Bunny, R & R Seal, Sudo Neku, Tama Sheep, Thunderaffe",
              "g": "Stats"
            },
            {
              "name": "Sleep Block",
              "max": "1",
              "how": "Cera Terror, Fin Fatale, Keeba Tiger, Necho Cat, Pricklemane, Tama Sheep, Ursa Circus, Wheeflower",
              "g": "Stats"
            },
            {
              "name": "Stop Block",
              "max": "1",
              "how": "Drill Sye, Halbird, Iceguin Ace, Majik Lapin, Pricklemane, Sir Kyroo, Tama Sheep",
              "g": "Stats"
            },
            {
              "name": "Reload Boost",
              "max": "1",
              "how": "Drak Quack, Flowbermeow, Frootz Cat, Kab Kannon, KO Kabuto, Ryu Dragon, Skelterwild, Sudo Neku",
              "g": "Stats"
            },
            {
              "name": "Defender",
              "max": "1",
              "how": "Cera Terror, Drak Quack, Escarglow, Kab Kannon, Lord Kyroo, Me Me Bunny, Staggerceps, Ursa Circus",
              "g": "Stats"
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
              "how": "Received by default Purchase from the Moogle Shop",
              "g": "Attack"
            },
            {
              "name": "Blizzard Edge",
              "how": "Treasure chest in Traverse Town (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 4",
              "g": "Attack"
            },
            {
              "name": "Dark Break",
              "how": "Ability Link: Fishboné and Cera Terror Purchase as Drop Bonus after reaching Shop Lv. 5",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Slot Edge",
              "how": "Ability Link: Sudo Neku and Juggle Pup Purchase from the Medal Shop",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Blitz",
              "how": "Ability Link: Ursa Circus, Sir Kyroo and more Purchase from the Moogle Shop after reaching Shop Lv. 7",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Meteor Crash",
              "how": "Ability Link: Tatsu Blaze, Ryu Dragon and Tyranto Rex",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Spark Dive",
              "how": "Dive A-Rank reward in Traverse Town (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 3",
              "g": "Attack"
            },
            {
              "name": "Poison Dive",
              "how": "Ability Link: Fishboné, Toximander and Woeflower",
              "g": "Attack"
            },
            {
              "name": "Drain Dive",
              "how": "Ability Link: Komory Bat and Woeflower Purchase from the Medal Shop",
              "g": "Attack"
            },
            {
              "name": "Sliding Dash",
              "how": "Received by default Purchase from the Moogle Shop",
              "g": "Attack"
            },
            {
              "name": "Thunder Dash",
              "how": "Treasure chest in La Cité des Cloches (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 5",
              "g": "Attack"
            },
            {
              "name": "Sonic Blade",
              "how": "Treasure chest in Country of the Musketeers (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 8",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Dark Aura",
              "how": "Ability Link: Ghostabocky and Keeba Tiger",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Zantetsuken",
              "how": "Ability Link: Staggerceps, Cera Terror and more",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Strike Raid",
              "how": "Treasure chest in Traverse Town (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 3",
              "g": "Attack"
            },
            {
              "name": "Spark Raid",
              "how": "Treasure chest in The World That Never Was (Riku)",
              "g": "Attack"
            },
            {
              "name": "Circle Raid",
              "how": "Treasure chest in The Grid (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 5",
              "g": "Attack"
            },
            {
              "name": "Aerial Slam",
              "how": "Treasure chest in Prankster's Paradise (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 6",
              "g": "Attack"
            },
            {
              "name": "Ars Arcanum",
              "how": "Treasure chest in The World That Never Was (Sora)",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Dark Splicer",
              "how": "Treasure chest in The World That Never Was (Riku)",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Gravity Strike",
              "how": "Treasure chest in The Grid (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 5",
              "g": "Attack"
            },
            {
              "name": "Confusing Strike",
              "how": "Ability Link: Komory Bat Purchase from the Moogle Shop after reaching Shop Lv. 4",
              "g": "Attack"
            },
            {
              "name": "Tornado Strike",
              "how": "Treasure chest in Country of the Musketeers (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 7",
              "g": "Attack"
            },
            {
              "name": "Prism Windmill",
              "how": "Treasure chest in Symphony of Sorcery (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 8",
              "g": "Attack"
            },
            {
              "name": "Timestorm",
              "how": "Ability Link: Halbird Purchase from the Moogle Shop after reaching Shop Lv. 6",
              "g": "Attack"
            },
            {
              "name": "Fire Windmill",
              "how": "Treasure chest in La Cité des Cloches (Sora) Purchase from the Medal Shop",
              "g": "Attack"
            },
            {
              "name": "Icebreaker",
              "how": "Ability Link: KO Kabuto Purchase from the Moogle Shop after reaching Shop Lv. 8",
              "g": "Attack"
            },
            {
              "name": "Shadowbreaker",
              "how": "Treasure chest in Country of the Musketeers (Riku)",
              "g": "Attack"
            },
            {
              "name": "Magnet Spiral",
              "how": "Ability Link: Zolephant Purchase from the Moogle Shop after reaching Shop Lv. 8",
              "g": "Attack"
            },
            {
              "name": "Salvation",
              "how": "Treasure chest in The World That Never Was (Sora)",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Limit Storm",
              "how": "Ability Link: Skelterwild and Aura Lion Purchase from the Medal Shop after reaching Shop Lv. 5",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Collision Magnet",
              "how": "Treasure chest in Prankster's Paradise (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 7",
              "g": "Attack"
            },
            {
              "name": "Sacrifice",
              "how": "Ability Link: Keeba Tiger and Aura Lion Purchase from the Moogle Shop after reaching Shop Lv. 5",
              "g": "Attack",
              "c": "riku"
            },
            {
              "name": "Break Time",
              "how": "Ability Link: Halbird and Me Me Bunny",
              "g": "Attack",
              "c": "sora"
            },
            {
              "name": "Fire",
              "how": "Received by default Purchase from the Moogle Shop",
              "g": "Magic"
            },
            {
              "name": "Fira",
              "how": "Treasure chest in La Cité des Cloches (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 5",
              "g": "Magic"
            },
            {
              "name": "Firaga",
              "how": "Treasure chest in Country of the Musketeers (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 7",
              "g": "Magic"
            },
            {
              "name": "Dark Firaga",
              "how": "Ability Link: Tubguin Ace and Kab Kannon Purchase as Drop Bonus after reaching Shop Lv. 7",
              "g": "Magic",
              "c": "riku"
            },
            {
              "name": "Firaga Burst",
              "how": "Ability Link: Eaglider, Tyranto Rex and more Purchase from the Medal Shop after reaching Shop Lv. 8",
              "g": "Magic"
            },
            {
              "name": "Mega Flare",
              "how": "Ability Link: Ryu Dragon and Tyranto Rex",
              "g": "Magic"
            },
            {
              "name": "Blizzard",
              "how": "Received by default Purchase from the Moogle Shop",
              "g": "Magic"
            },
            {
              "name": "Blizzara",
              "how": "Treasure chest in Prankster's Paradise (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 5",
              "g": "Magic"
            },
            {
              "name": "Blizzaga",
              "how": "Treasure chest in Country of the Musketeers (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 7",
              "g": "Magic"
            },
            {
              "name": "Icicle Splitter",
              "how": "Ability Link: Iceguin Ace",
              "g": "Magic"
            },
            {
              "name": "Deep Freeze",
              "how": "Ability Link: Majik Lapin and Skelterwild Purchase from the Medal Shop after reaching Shop Lv. 5",
              "g": "Magic"
            },
            {
              "name": "Ice Barrage",
              "how": "Treasure chest in Symphony of Sorcery (Riku)",
              "g": "Magic"
            },
            {
              "name": "Thunder",
              "how": "Treasure chest in Traverse Town (Riku) Purchase from the Moogle Shop",
              "g": "Magic"
            },
            {
              "name": "Thundara",
              "how": "Treasure chest in The Grid (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 5",
              "g": "Magic"
            },
            {
              "name": "Thundaga",
              "how": "Ability Link: Cyber Yog and Thunderaffe Purchase from the Moogle Shop after reaching Shop Lv. 7",
              "g": "Magic"
            },
            {
              "name": "Triple Plasma",
              "how": "Treasure chest in Symphony of Sorcery (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 8",
              "g": "Magic"
            },
            {
              "name": "Cure",
              "how": "Ability Link: Meow Wow Purchase from the Moogle Shop after reaching Shop Lv. 2",
              "g": "Magic"
            },
            {
              "name": "Cura",
              "how": "Ability Link: Chef Kyroo, Meow Wow and more Purchase from the Moogle Shop after reaching Shop Lv. 6",
              "g": "Magic"
            },
            {
              "name": "Curaga",
              "how": "Treasure chest in The World That Never Was (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 8",
              "g": "Magic"
            },
            {
              "name": "Esuna",
              "how": "Ability Link: Wheeflower and Yoggy Ram Purchase from the Moogle Shop after reaching Shop Lv. 4",
              "g": "Magic"
            },
            {
              "name": "Zero Gravity",
              "how": "Ability Link: Komory Bat and Fin Fatale Purchase from the Moogle Shop after reaching Shop Lv. 3",
              "g": "Magic"
            },
            {
              "name": "Zero Gravira",
              "how": "Treasure chest in Prankster's Paradise (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 6",
              "g": "Magic"
            },
            {
              "name": "Zero Graviga",
              "how": "Dive A-Rank reward in Country of the Musketeers (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 8",
              "g": "Magic"
            },
            {
              "name": "Zero Graviza",
              "how": "Treasure chest in Symphony of Sorcery (Riku)",
              "g": "Magic"
            },
            {
              "name": "Balloon",
              "how": "Treasure chest in Traverse Town (Sora) Purchase from the Moogle Shop",
              "g": "Magic"
            },
            {
              "name": "Balloonra",
              "how": "Treasure chest in The Grid (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 5",
              "g": "Magic"
            },
            {
              "name": "Balloonga",
              "how": "Ability Link: Juggle Pup and R & R Seal Purchase from the Medal Shop after reaching Shop Lv. 5",
              "g": "Magic"
            },
            {
              "name": "Spark",
              "how": "Treasure chest in Traverse Town (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 3",
              "g": "Magic",
              "c": "sora"
            },
            {
              "name": "Sparkra",
              "how": "Treasure chest in La Cité des Cloches (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 6",
              "g": "Magic",
              "c": "sora"
            },
            {
              "name": "Sparkga",
              "how": "Treasure chest in Country of the Musketeers (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 8",
              "g": "Magic",
              "c": "sora"
            },
            {
              "name": "Faith",
              "how": "Ability Link: Aura Lion and Flowbermeow",
              "g": "Magic",
              "c": "sora"
            },
            {
              "name": "Tornado",
              "how": "Treasure chest in Symphony of Sorcery (Sora)",
              "g": "Magic",
              "c": "sora"
            },
            {
              "name": "Meteor",
              "how": "Dive A-Rank reward in The World That Never Was",
              "g": "Magic",
              "c": "riku"
            },
            {
              "name": "Mini",
              "how": "Treasure chest in Prankster's Paradise (Riku) Purchase from the Medal Shop",
              "g": "Magic"
            },
            {
              "name": "Blackout",
              "how": "Ability Link: Peepsta Hoo",
              "g": "Magic"
            },
            {
              "name": "Time Bomb",
              "how": "Ability Link: Pricklemane and Necho Cat Purchase from the Medal Shop",
              "g": "Magic"
            },
            {
              "name": "Confuse",
              "how": "Ability Link: Komory Bat Purchase from the Moogle Shop after reaching Shop Lv. 2",
              "g": "Magic"
            },
            {
              "name": "Bind",
              "how": "Ability Link: Jestabocky, Kooma Panda and Tatsu Seed Purchase from the Moogle Shop after reaching Shop Lv. 4",
              "g": "Magic"
            },
            {
              "name": "Poison",
              "how": "Ability Link: Toximander and Woeflower Purchase from the Moogle Shop after reaching Shop Lv. 3",
              "g": "Magic"
            },
            {
              "name": "Slow",
              "how": "Ability Link: Meow Wow Purchase from the Moogle Shop after reaching Shop Lv. 2",
              "g": "Magic"
            },
            {
              "name": "Sleep",
              "how": "Ability Link: Tama Sheep Purchase from the Moogle Shop",
              "g": "Magic"
            },
            {
              "name": "Sleepra",
              "how": "Treasure chest in La Cité des Cloches (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 5",
              "g": "Magic"
            },
            {
              "name": "Sleepga",
              "how": "Ability Link: Tama Sheep and Woeflower",
              "g": "Magic"
            },
            {
              "name": "Stop",
              "how": "Treasure chest in Country of the Musketeers (Riku) Purchase from the Medal Shop",
              "g": "Magic"
            },
            {
              "name": "Vanish",
              "how": "Ability Link: Ghostabocky",
              "g": "Magic"
            },
            {
              "name": "Potion",
              "how": "Received by default",
              "g": "Item"
            },
            {
              "name": "Hi-Potion",
              "how": "Multiple treasure chests",
              "g": "Item"
            },
            {
              "name": "Mega-Potion",
              "how": "Multiple treasure chests",
              "g": "Item"
            },
            {
              "name": "Drop-Me-Not",
              "how": "Multiple treasure chests",
              "g": "Item"
            },
            {
              "name": "Drop-Me-Never",
              "how": "Ability Link: Ducky Goose",
              "g": "Item"
            },
            {
              "name": "Panacea",
              "how": "Multiple treasure chests",
              "g": "Item"
            },
            {
              "name": "Elixir",
              "how": "Multiple treasure chests",
              "g": "Item"
            },
            {
              "name": "Megalixir",
              "how": "Ability Link: Drak Quack",
              "g": "Item"
            },
            {
              "name": "Dream Candy",
              "how": "Multiple treasure chests",
              "g": "Item"
            },
            {
              "name": "Jump",
              "how": "Received by default",
              "g": "Movement"
            },
            {
              "name": "High Jump",
              "how": "Story progression (Prankster's Paradise)",
              "g": "Movement"
            },
            {
              "name": "Dodge Roll",
              "how": "Received by default",
              "g": "Movement"
            },
            {
              "name": "Slide Roll",
              "how": "Story progression (Country of the Musketeers)",
              "g": "Movement",
              "c": "sora"
            },
            {
              "name": "Dark Roll",
              "how": "Purchase from the Medal Shop after reaching Shop Lv. 8",
              "g": "Movement",
              "c": "riku"
            },
            {
              "name": "Air Slide",
              "how": "Available from the start",
              "g": "Movement"
            },
            {
              "name": "Sonic Impact",
              "how": "Story progression (La Cité des Cloches)",
              "g": "Movement"
            },
            {
              "name": "Double Impact",
              "how": "Story progression (Symphony of Sorcery)",
              "g": "Movement"
            },
            {
              "name": "Glide",
              "how": "Treasure chest in Symphony of Sorcery (Sora)",
              "g": "Movement",
              "c": "sora"
            },
            {
              "name": "Superglide",
              "how": "Ability Link: Ryu Dragon",
              "g": "Movement",
              "c": "sora"
            },
            {
              "name": "Shadow Slide",
              "how": "Story progression (Country of the Musketeers)",
              "g": "Movement",
              "c": "riku"
            },
            {
              "name": "Doubleflight",
              "how": "Treasure chest in The World That Never Was (Riku)",
              "g": "Movement",
              "c": "riku"
            },
            {
              "name": "Block",
              "how": "Received by default",
              "g": "Defense"
            },
            {
              "name": "Wake-Up Block",
              "how": "Story progression (Country of the Musketeers)",
              "g": "Defense"
            },
            {
              "name": "Link Block",
              "how": "Ability Link: KO Kabuto and Staggerceps Purchase from the Moogle Shop after reaching Shop Lv. 8",
              "g": "Defense",
              "c": "sora"
            },
            {
              "name": "Sliding Block",
              "how": "Purchase as Drop Bonus after reaching Shop Lv. 6",
              "g": "Defense"
            },
            {
              "name": "Dark Barrier",
              "how": "Ability Link: Halbird and Me Me Bunny and Majik Lapin Purchase from the Medal Shop after reaching Shop Lv. 8",
              "g": "Defense",
              "c": "riku"
            },
            {
              "name": "Counter Rush",
              "how": "Story progression (The Grid)",
              "g": "Reprisal",
              "c": "sora"
            },
            {
              "name": "Counter Aura",
              "how": "Treasure chest in The Grid (Riku)",
              "g": "Reprisal",
              "c": "riku"
            },
            {
              "name": "Shadow Strike",
              "how": "Story progression (Country of the Musketeers)",
              "g": "Reprisal",
              "c": "riku"
            },
            {
              "name": "Payback Raid",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 7",
              "g": "Reprisal",
              "c": "sora"
            },
            {
              "name": "Payback Blast",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 7",
              "g": "Reprisal",
              "c": "riku"
            },
            {
              "name": "Aerial Recovery",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 6",
              "g": "Reprisal"
            },
            {
              "name": "Steep Climb",
              "how": "Ability Link: Halbird and Cera Terror",
              "g": "Reprisal",
              "c": "sora"
            },
            {
              "name": "Rapid Descent",
              "how": "Ability Link: Tyranto Rex and Electricorn",
              "g": "Reprisal",
              "c": "riku"
            },
            {
              "name": "Sliding Sidewinder",
              "how": "Story progression (Traverse Town, 2nd visit)",
              "g": "Reprisal",
              "c": "sora"
            },
            {
              "name": "Sliding Crescent",
              "how": "Treasure chest in La Cité des Cloches (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 7",
              "g": "Reprisal",
              "c": "riku"
            },
            {
              "name": "Pole Spin",
              "how": "Received by default",
              "g": "Flowmotion"
            },
            {
              "name": "Pole Swing",
              "how": "Received by default",
              "g": "Flowmotion"
            },
            {
              "name": "Rail Slide",
              "how": "Received by default",
              "g": "Flowmotion"
            },
            {
              "name": "Kick Dive",
              "how": "Received by default",
              "g": "Flowmotion"
            },
            {
              "name": "Buzz Saw",
              "how": "Received by default",
              "g": "Flowmotion"
            },
            {
              "name": "Blow-Off",
              "how": "Received by default",
              "g": "Flowmotion"
            },
            {
              "name": "Wheel Rush",
              "how": "Received by default",
              "g": "Flowmotion"
            },
            {
              "name": "Sliding Dive",
              "how": "Received by default",
              "g": "Flowmotion"
            },
            {
              "name": "Shock Dive",
              "how": "Received by default",
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
              "name": "Brilliant Fantasy",
              "how": "Special Portals 1-3 in The World That Never Was (Riku)"
            },
            {
              "name": "Charming Fantasy",
              "how": "Special Portals 4-6 in Traverse Town, La Cité des Cloches and The Grid (Riku)"
            },
            {
              "name": "Dulcet Figment",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 3"
            },
            {
              "name": "Dulcet Fancy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 8"
            },
            {
              "name": "Dulcet Fantasy",
              "how": "Special Portals 1-3 in La Cité des Cloches and The Grid (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 8 (Bargain Day)"
            },
            {
              "name": "Epic Fantasy",
              "how": "Special Portals 4-6 in Prankster's Paradise and Country of the Musketeers (Riku)"
            },
            {
              "name": "Fleeting Figment",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 4"
            },
            {
              "name": "Fleeting Fancy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 7"
            },
            {
              "name": "Fleeting Fantasy",
              "how": "Special Portals 1-3 in Symphony of Sorcery and Country of the Musketeers (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 7 (Bargain Day)"
            },
            {
              "name": "Grim Figment",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 2"
            },
            {
              "name": "Grim Fancy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 7"
            },
            {
              "name": "Grim Fantasy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 7"
            },
            {
              "name": "Intrepid Figment",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 2"
            },
            {
              "name": "Intrepid Fancy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 8"
            },
            {
              "name": "Intrepid Fantasy",
              "how": "Special Portals 1-3 in Symphony of Sorcery (Riku) Purchase from the Moogle Shop after reaching Shop Lv. 8 (Bargain Day)"
            },
            {
              "name": "Lofty Figment",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 3"
            },
            {
              "name": "Lofty Fancy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 8"
            },
            {
              "name": "Lofty Fantasy",
              "how": "Special Portals 1-3 in La Cité des Cloches and The Grid (Sora)"
            },
            {
              "name": "Malleable Fantasy",
              "how": "Special Portals 4-6 in Traverse Town, La Cité des Cloches and The Grid (Sora)"
            },
            {
              "name": "Noble Figment",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 3"
            },
            {
              "name": "Noble Fancy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 5"
            },
            {
              "name": "Noble Fantasy",
              "how": "Special Portals 1-3 in La Cité des Cloches and The Grid (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 5 (Bargain Day)"
            },
            {
              "name": "Prickly Fantasy",
              "how": "Special Portals 4-6 in Prankster's Paradise and Country of the Musketeers (Sora)"
            },
            {
              "name": "Rampant Figment",
              "how": "Purchase from the Moogle Shop"
            },
            {
              "name": "Rampant Fancy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 5"
            },
            {
              "name": "Rampant Fantasy",
              "how": "Special Portals 1-3 in Traverse Town (Sora) Purchase from the Moogle Shop (Bargain Day)"
            },
            {
              "name": "Savage Fantasy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 8"
            },
            {
              "name": "Troubling Figment",
              "how": "Purchase from the Moogle Shop"
            },
            {
              "name": "Troubling Fancy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 3"
            },
            {
              "name": "Troubling Fantasy",
              "how": "Special Portals 1-3 in Traverse Town (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 2 (Bargain Day)"
            },
            {
              "name": "Vibrant Figment",
              "how": "Purchase from the Moogle Shop"
            },
            {
              "name": "Vibrant Fancy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 5"
            },
            {
              "name": "Vibrant Fantasy",
              "how": "Special Portals 1-3 in Traverse Town (Sora) Purchase from the Moogle Shop after reaching Shop Lv. 2 (Bargain Day)"
            },
            {
              "name": "Wild Fantasy",
              "how": "Special Portals 1-3 in The World That Never Was (Sora)"
            },
            {
              "name": "Wondrous Figment",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 4"
            },
            {
              "name": "Wondrous Fancy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 7"
            },
            {
              "name": "Wondrous Fantasy",
              "how": "Purchase from the Moogle Shop after reaching Shop Lv. 8"
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
              "k": "sora"
            },
            {
              "k": "riku"
            },
            {
              "k": "how"
            }
          ],
          "items": [
            {
              "name": "Kingdom Key",
              "sora": "Yes",
              "riku": "—",
              "how": "Received by default"
            },
            {
              "name": "Way to the Dawn",
              "sora": "—",
              "riku": "Yes",
              "how": "Received by default"
            },
            {
              "name": "Skull Noise",
              "sora": "Yes",
              "riku": "Yes",
              "how": "Complete the story of Traverse Town (1st visit)"
            },
            {
              "name": "Guardian Bell",
              "sora": "Yes",
              "riku": "Yes",
              "how": "Complete the story of La Cité des Cloches"
            },
            {
              "name": "Ferris Gear",
              "sora": "Yes",
              "riku": "—",
              "how": "Complete the story of Prankster's Paradise"
            },
            {
              "name": "Ocean's Rage",
              "sora": "—",
              "riku": "Yes",
              "how": "Complete the story of Prankster's Paradise"
            },
            {
              "name": "Dual Disc",
              "sora": "Yes",
              "riku": "Yes",
              "how": "Complete the story of The Grid"
            },
            {
              "name": "Knockout Punch",
              "sora": "Yes",
              "riku": "Yes",
              "how": "Complete the story of Traverse Town (2nd visit)"
            },
            {
              "name": "All for One",
              "sora": "Yes",
              "riku": "Yes",
              "how": "Complete the story of Country of the Musketeers"
            },
            {
              "name": "Counterpoint",
              "sora": "Yes",
              "riku": "Yes",
              "how": "Complete the story of Symphony of Sorcery"
            },
            {
              "name": "Divewing",
              "sora": "Yes",
              "riku": "Yes",
              "how": "Complete every Dive with an \"A\" rank"
            },
            {
              "name": "End of Pain",
              "sora": "Yes",
              "riku": "Yes",
              "how": "Complete all Special Portals"
            },
            {
              "name": "Sweet Dreams",
              "sora": "Yes",
              "riku": "Yes",
              "how": "Complete all Flick Rush cups"
            },
            {
              "name": "Unbound",
              "sora": "Yes",
              "riku": "Yes",
              "how": "Complete all Secret Portals"
            },
            {
              "name": "Ultima Weapon",
              "sora": "Yes",
              "riku": "Yes",
              "how": "Defeat Julius (see More Tips)"
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
              "k": "loc"
            }
          ],
          "variants": {
            "sora": [
              {
                "name": "Ice Cream Cone",
                "area": "First District",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "area": "First District",
                "g": "Traverse Town"
              },
              {
                "name": "Confetti Candy",
                "area": "Second District",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "area": "Second District",
                "g": "Traverse Town"
              },
              {
                "name": "Hi-Potion",
                "area": "Second District",
                "g": "Traverse Town"
              },
              {
                "name": "Vibrant Fantasy",
                "area": "Third District",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Third District",
                "g": "Traverse Town"
              },
              {
                "name": "Shield Cookie",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Water Barrel",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Hi-Potion",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Ice Dream Cone",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Shield Cookie",
                "area": "Fifth District",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "area": "Fifth District",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Fifth District",
                "g": "Traverse Town"
              },
              {
                "name": "Royal Cake",
                "area": "Garden",
                "g": "Traverse Town"
              },
              {
                "name": "Confetti Candy",
                "area": "Garden",
                "g": "Traverse Town"
              },
              {
                "name": "Rampant Figment",
                "area": "Garden",
                "g": "Traverse Town"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Garden",
                "g": "Traverse Town"
              },
              {
                "name": "Rampant Fantasy",
                "area": "Post Office",
                "g": "Traverse Town"
              },
              {
                "name": "Vibrant Fantasy",
                "area": "Post Office",
                "g": "Traverse Town"
              },
              {
                "name": "Troubling Fantasy",
                "area": "Post Office",
                "g": "Traverse Town"
              },
              {
                "name": "Spark",
                "area": "Post Office",
                "g": "Traverse Town"
              },
              {
                "name": "Paint Gun: Red",
                "area": "Post Office",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "area": "Post Office",
                "g": "Traverse Town"
              },
              {
                "name": "Ice Dream Cone",
                "area": "Post Office",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "area": "Fountain Plaza",
                "g": "Traverse Town"
              },
              {
                "name": "Intrepid Figment",
                "area": "Fountain Plaza",
                "g": "Traverse Town"
              },
              {
                "name": "Ice Dream Cone",
                "area": "Fountain Plaza",
                "g": "Traverse Town"
              },
              {
                "name": "Rampant Fantasy",
                "area": "Fountain Plaza",
                "g": "Traverse Town"
              },
              {
                "name": "Strike Raid",
                "area": "Fountain Plaza",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Square",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Balloon",
                "area": "Square",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone",
                "area": "Square",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "area": "Square",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Water Barrel",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Royal Cake",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Dulcet Figment",
                "area": "Bell Tower",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Bell Tower",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Balloon",
                "area": "Bell Tower",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Bell Tower",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Sparkra",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Candy Goggles",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Lofty Figment",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Wheeflower Recipe",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Troubling Fancy",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie",
                "area": "Bridge",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Paint Gun: Red",
                "area": "Bridge",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Bridge",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "area": "Bridge",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy",
                "area": "Outskirts",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Noble Figment",
                "area": "Outskirts",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Balloon",
                "area": "Outskirts",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "area": "Outskirts",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Outskirts",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone",
                "area": "Graveyard Gate",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Graveyard Gate",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "area": "Graveyard Gate",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Sleepra",
                "area": "Tunnels",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Tunnels",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Catanuki Recipe",
                "area": "Tunnels",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Paint Gun: Purple",
                "area": "Tunnels",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone 2",
                "area": "Tunnels",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Noble Fantasy",
                "area": "Tunnels",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Old Graveyard",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Water Barrel",
                "area": "Catacombs",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Fire Windmill",
                "area": "Catacombs",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Toximander Recipe",
                "area": "Catacombs",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Royal Cake",
                "area": "Catacombs",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Catacombs",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie",
                "area": "Catacombs",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Thunder Dash",
                "area": "Court of Miracles",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Hi-Potion",
                "area": "Court of Miracles",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Court of Miracles",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Blizzara",
                "area": "Amusement Park",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Amusement Park",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Balloon",
                "area": "Amusement Park",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Shield Cookie 2",
                "area": "Amusement Park",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Malleable Fantasy",
                "area": "Amusement Park",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Paint Gun: Yellow",
                "area": "Amusement Park",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Ice Dream Cone 2",
                "area": "Amusement Park",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Block-It Chocolate 2",
                "area": "Amusement Park",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "area": "Amusement Park",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Candy Goggles",
                "area": "Amusement Park",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "area": "Promontory",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Water Barrel",
                "area": "Promontory",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Ice Dream Cone 2",
                "area": "Promontory",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Block-It Chocolate 2",
                "area": "Windup Way",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Windup Way",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Aerial Slam",
                "area": "Windup Way",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Royal Cake",
                "area": "Windup Way",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "area": "Windup Way",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Balloon",
                "area": "Circus",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Circus",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Confetti Candy 2",
                "area": "Circus",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Rampant Fancy",
                "area": "Circus",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Panacea",
                "area": "Ocean Floor",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Lofty Fantasy",
                "area": "Ocean Floor",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Paint Gun: Sky Blue",
                "area": "Ocean Floor",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Zero Gravira",
                "area": "Ocean Floor",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Rampant Fancy",
                "area": "Ocean Depths",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Candy Goggles",
                "area": "Ocean Depths",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Royal Cake",
                "area": "Ocean Depths",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Tatsu Steed Recipe",
                "area": "Ocean Depths",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Shield Cookie 2",
                "area": "Ocean Depths",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "area": "City",
                "g": "The Grid"
              },
              {
                "name": "Troubling Fancy",
                "area": "City",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "area": "City",
                "g": "The Grid"
              },
              {
                "name": "Water Barrel",
                "area": "City",
                "g": "The Grid"
              },
              {
                "name": "Block-It Chocolate 2",
                "area": "City",
                "g": "The Grid"
              },
              {
                "name": "Eaglider Recipe",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Candy Goggles",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Paint Gun: Black",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Balloon",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Fleeting Figment",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Circle Raid",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Dulcet Figment",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Royal Cake",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Confetti Candy",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Bridge",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Bridge",
                "g": "The Grid"
              },
              {
                "name": "Confetti Candy 2",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Wondrous Figment",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Fleeting Figment",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Balloon",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Hi-Potion",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Candy Goggles",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Balloonra",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Water Barrel",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Ice Dream Cone 2",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Hi-Potion",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Lofty Fantasy",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Ice Dream Cone",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Cyber Yog Recipe",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie 2",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Ice Dream Cone",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Paint Gun: Green",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Mega-Potion",
                "area": "Grand Lobby",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Confetti Candy 2",
                "area": "Grand Lobby",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Ice Dream Cone 3",
                "area": "Grand Lobby",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "area": "Grand Lobby",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Block-It Chocolate 2",
                "area": "Grand Lobby",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Drop-Me-Not",
                "area": "The Opéra",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "area": "The Opéra",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Block-It Chocolate 2",
                "area": "The Opéra",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Mega-Potion",
                "area": "Training Yard",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Ice Dream Cone 2",
                "area": "Training Yard",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Paint Gun: Sky Blue",
                "area": "Training Yard",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Firaga",
                "area": "Town Road",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dream Candy",
                "area": "Town Road",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Shield Cookie 2",
                "area": "Town Road",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Candy Goggles",
                "area": "Tower",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Tower",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Ice Dream Cone 2",
                "area": "Tower",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Paint Gun: Blue",
                "area": "Shore",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dream Candy",
                "area": "Shore",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Confetti Candy 3",
                "area": "Theatre",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dulcet Fancy",
                "area": "Theatre",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Fleeting Fantasy",
                "area": "Mont Saint-Michel",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Sparkga",
                "area": "Mont Saint-Michel",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "area": "Mont Saint-Michel",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Royal Cake",
                "area": "Mont Saint-Michel",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Block-It Chocolate 3",
                "area": "Dungeon",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Sonic Blade",
                "area": "Dungeon",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Fleeting Fancy",
                "area": "Dungeon",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Chef Kyroo Recipe",
                "area": "Dungeon",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Water Barrel",
                "area": "Dungeon",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Royal Cake",
                "area": "Dungeon",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Tornado Strike",
                "area": "Cell",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dream Candy",
                "area": "Tower Entrance",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Block-It Chocolate 3",
                "area": "Tower",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Elixir",
                "area": "Tower",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Glide",
                "area": "Cloudwalk",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Intrepid Fantasy",
                "area": "Cloudwalk",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Ice Dream Cone 3",
                "area": "Cloudwalk",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Mega-Potion",
                "area": "Cloudwalk",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Prism Windmill",
                "area": "Cloudwalk",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Paint Gun: White",
                "area": "Cloudwalk",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Elixir",
                "area": "Cloudwalk",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Candy Goggles",
                "area": "Cloudwalk",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Tornado",
                "area": "Glen",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Royal Cake",
                "area": "Glen",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Intrepid Fantasy",
                "area": "Glen",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Ice Dream Cone 3",
                "area": "Glen",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Mega-Potion",
                "area": "Glen",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Block-It Chocolate 3",
                "area": "Fields",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Epic Fantasy",
                "area": "Fields",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Electricorn Recipe",
                "area": "Fields",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Triple Plasma",
                "area": "Fields",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Panacea",
                "area": "Fields",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Mega-Potion",
                "area": "Fields",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Shield Cookie 3",
                "area": "Avenue to Dreams",
                "g": "The World That Never Was"
              },
              {
                "name": "Dulcet Fantasy",
                "area": "Avenue to Dreams",
                "g": "The World That Never Was"
              },
              {
                "name": "Savage Fantasy",
                "area": "Avenue to Dreams",
                "g": "The World That Never Was"
              },
              {
                "name": "Salvation",
                "area": "Avenue to Dreams",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "area": "Avenue to Dreams",
                "g": "The World That Never Was"
              },
              {
                "name": "Dream Candy",
                "area": "Avenue to Dreams",
                "g": "The World That Never Was"
              },
              {
                "name": "Water Barrel",
                "area": "Avenue to Dreams",
                "g": "The World That Never Was"
              },
              {
                "name": "Drak Quack Recipe",
                "area": "Avenue to Dreams",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "area": "Contorted City",
                "g": "The World That Never Was"
              },
              {
                "name": "Block-It Chocolate 3",
                "area": "Contorted City",
                "g": "The World That Never Was"
              },
              {
                "name": "Shield Cookie 3",
                "area": "Contorted City",
                "g": "The World That Never Was"
              },
              {
                "name": "Confetti Candy 3",
                "area": "Contorted City",
                "g": "The World That Never Was"
              },
              {
                "name": "Wondrous Fantasy",
                "area": "Contorted City",
                "g": "The World That Never Was"
              },
              {
                "name": "Ice Dream Cone 3",
                "area": "Contorted City",
                "g": "The World That Never Was"
              },
              {
                "name": "Ars Arcanum",
                "area": "Contorted City",
                "g": "The World That Never Was"
              }
            ],
            "riku": [
              {
                "name": "Rampant Fantasy",
                "area": "First District",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "area": "First District",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Second District",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "area": "Second District",
                "g": "Traverse Town"
              },
              {
                "name": "Yoggy Ram Recipe",
                "area": "Second District",
                "g": "Traverse Town"
              },
              {
                "name": "Ice Dream Cone",
                "area": "Third District",
                "g": "Traverse Town"
              },
              {
                "name": "Confetti Candy",
                "area": "Third District",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Intrepid Figment",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Confetti Candy",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Candy Goggles",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Shield Cookie",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Confetti Candy",
                "area": "Fourth District",
                "g": "Traverse Town"
              },
              {
                "name": "Troubling Fantasy",
                "area": "Fifth District",
                "g": "Traverse Town"
              },
              {
                "name": "Hi-Potion",
                "area": "Fifth District",
                "g": "Traverse Town"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Fifth District",
                "g": "Traverse Town"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Garden",
                "g": "Traverse Town"
              },
              {
                "name": "Paint Gun: Green",
                "area": "Garden",
                "g": "Traverse Town"
              },
              {
                "name": "Royal Cake",
                "area": "Garden",
                "g": "Traverse Town"
              },
              {
                "name": "Hi-Potion",
                "area": "Garden",
                "g": "Traverse Town"
              },
              {
                "name": "Troubling Fantasy",
                "area": "Back Streets",
                "g": "Traverse Town"
              },
              {
                "name": "Thunder",
                "area": "Back Streets",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "area": "Back Streets",
                "g": "Traverse Town"
              },
              {
                "name": "Shield Cookie",
                "area": "Back Streets",
                "g": "Traverse Town"
              },
              {
                "name": "Intrepid Fragment",
                "area": "Back Streets",
                "g": "Traverse Town"
              },
              {
                "name": "Paint Gun: Sky Blue",
                "area": "Back Streets",
                "g": "Traverse Town"
              },
              {
                "name": "Potion",
                "area": "Back Streets",
                "g": "Traverse Town"
              },
              {
                "name": "Vibrant Fantasy",
                "area": "Fountain Plaza",
                "g": "Traverse Town"
              },
              {
                "name": "Ice Dream Cone",
                "area": "Fountain Plaza",
                "g": "Traverse Town"
              },
              {
                "name": "Blizzard Edge",
                "area": "Fountain Plaza",
                "g": "Traverse Town"
              },
              {
                "name": "Balloon",
                "area": "Square",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie",
                "area": "Square",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy",
                "area": "Square",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "area": "Square",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie 2",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Fira",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Rampant Figment",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Paint Gun: Yellow",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Nave",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Royal Cake",
                "area": "Bell Tower",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Dulcet Figment",
                "area": "Bell Tower",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Bell Tower",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Bell Tower",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Candy Goggles",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Water Barrel",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Noble Fantasy",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Town",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Balloon",
                "area": "Bridge",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy 2",
                "area": "Bridge",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy",
                "area": "Bridge",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "area": "Bridge",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie",
                "area": "Outskirts",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Potion",
                "area": "Outskirts",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Outskirts",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Paint Gun: Purple",
                "area": "Outskirts",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Confetti Candy",
                "area": "Outskirts",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Windmill",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Sliding Crescent",
                "area": "Windmill",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Water Barrel",
                "area": "Windmill",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Shield Cookie",
                "area": "Windmill",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Ice Dream Cone 2",
                "area": "Monstro: Mouth",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Paint Gun: Blue",
                "area": "Monstro: Mouth",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Balloon",
                "area": "Monstro: Mouth",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Panacea",
                "area": "Monstro: Mouth",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "area": "Monstro: Mouth",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Shield Cookie 2",
                "area": "Monstro: Gullet",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Sir Kyroo Recipe",
                "area": "Monstro: Gullet",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Charming Fantasy",
                "area": "Monstro: Gullet",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Mini",
                "area": "Monstro: Gullet",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "area": "Monstro: Gullet",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Shield Cookie 2",
                "area": "Monstro: Gullet",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Candy Goggles",
                "area": "Monstro: Gullet",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Monstro: Belly",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Confetti Candy 2",
                "area": "Monstro: Belly",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Block-It Chocolate 2",
                "area": "Monstro: Belly",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Hi-Potion",
                "area": "Monstro: Belly",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Collision Magnet",
                "area": "Monstro: Belly",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Confetti Candy 2",
                "area": "Monstro: Cavity",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Royal Cake",
                "area": "Monstro: Cavity",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Water Barrel",
                "area": "Monstro: Cavity",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Monstro: Cavity",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Panacea",
                "area": "Monstro: Cavity",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Confetti Candy",
                "area": "City",
                "g": "The Grid"
              },
              {
                "name": "Thundara",
                "area": "City",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "area": "City",
                "g": "The Grid"
              },
              {
                "name": "Fleeting Figment",
                "area": "City",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "area": "City",
                "g": "The Grid"
              },
              {
                "name": "Confetti Candy 2",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Counter Aura",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Balloon",
                "area": "Docks",
                "g": "The Grid"
              },
              {
                "name": "Royal Cake",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Wondrous Figment",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Noble Fantasy",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Ice Dream Cone 2",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "area": "Throughput",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "area": "Bridge",
                "g": "The Grid"
              },
              {
                "name": "Water Barrel",
                "area": "Bridge",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Troubling Fancy",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Wondrous Figment",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Paint Gun: White",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Hi-Potion",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Candy Goggles",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie 2",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Royal Cake",
                "area": "Solar Sailer",
                "g": "The Grid"
              },
              {
                "name": "Balloon",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Hi-Potion",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Block-It Chocolate",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Shield Cookie 2",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Panacea",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Fleeting Figment",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Peepsta Hoo Recipe",
                "area": "Rectifier 1F",
                "g": "The Grid"
              },
              {
                "name": "Gravity Strike",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Block-It Chocolate 2",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Noble Figment",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Potion",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Confetti Candy 2",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Rectifier 2F",
                "g": "The Grid"
              },
              {
                "name": "Paint Gun: Black",
                "area": "Portal Stairs",
                "g": "The Grid"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Portal Stairs",
                "g": "The Grid"
              },
              {
                "name": "Hi-Potion",
                "area": "Portal Stairs",
                "g": "The Grid"
              },
              {
                "name": "Water Barrel",
                "area": "Grand Lobby",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Confetti Candy 2",
                "area": "Grand Lobby",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Royal Cake",
                "area": "Grand Lobby",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Shadowbreaker",
                "area": "Grand Lobby",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Mega-Potion",
                "area": "Grand Lobby",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "area": "The Opéra",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Shield Cookie 2",
                "area": "The Opéra",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Panacea",
                "area": "The Opéra",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dream Candy",
                "area": "The Opéra",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Candy Goggles",
                "area": "Green Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Prickly Fantasy",
                "area": "Green Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Fleeting Fantasy",
                "area": "Green Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Shield Cookie 3",
                "area": "Green Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "area": "Green Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Stop",
                "area": "Green Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Green Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Confetti Candy 3",
                "area": "Green Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Blizzaga",
                "area": "Machine Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Ducky Goose Recipe",
                "area": "Machine Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Ice Dream Cone 2",
                "area": "Machine Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Machine Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Hi-Potion",
                "area": "Machine Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Mega-Potion",
                "area": "Machine Room",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Royal Cake",
                "area": "Backstage",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Fleeting Fantasy",
                "area": "Backstage",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Dream Candy",
                "area": "Backstage",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Staggerceps Recipe",
                "area": "Backstage",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Backstage",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Mega-Potion",
                "area": "Backstage",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Confetti Candy 2",
                "area": "Theatre",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Balloon",
                "area": "Theatre",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Water Barrel",
                "area": "Tower Entrance",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Royal Cake",
                "area": "Tower",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Dream Candy",
                "area": "Tower",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Zero Graviza",
                "area": "Moonlight Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Confetti Candy 3",
                "area": "Moonlight Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Shield Cookie 3",
                "area": "Moonlight Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Paint Gun: Green",
                "area": "Moonlight Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Mega-Potion",
                "area": "Moonlight Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Moonlight Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Intrepid Fancy",
                "area": "Moonlight Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Elixir",
                "area": "Golden Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Intrepid Fantasy",
                "area": "Golden Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Mega-Potion",
                "area": "Golden Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Paint Gun: Red",
                "area": "Golden Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Ryu Dragon Recipe",
                "area": "Golden Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Ice Barrage",
                "area": "Snowgleam Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Candy Goggles",
                "area": "Snowgleam Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Block-It Chocolate 3",
                "area": "Snowgleam Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Ice Dream Cone 3",
                "area": "Snowgleam Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Dulcet Fancy",
                "area": "Snowgleam Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Confetti Candy 3",
                "area": "Snowgleam Wood",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Dream Candy",
                "area": "Delusive Beginning",
                "g": "The World That Never Was"
              },
              {
                "name": "Curaga",
                "area": "Delusive Beginning",
                "g": "The World That Never Was"
              },
              {
                "name": "Doubleflight",
                "area": "Delusive Beginning",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "area": "Delusive Beginning",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "area": "Delusive Beginning",
                "g": "The World That Never Was"
              },
              {
                "name": "Confetti Candy 3",
                "area": "Delusive Beginning",
                "g": "The World That Never Was"
              },
              {
                "name": "Dulcet Fantasy",
                "area": "Delusive Beginning",
                "g": "The World That Never Was"
              },
              {
                "name": "Dark Splicer",
                "area": "Delusive Beginning",
                "g": "The World That Never Was"
              },
              {
                "name": "Dream Candy",
                "area": "Delusive Beginning",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "area": "Delusive Beginning",
                "g": "The World That Never Was"
              },
              {
                "name": "Keeba Tiger Recipe",
                "area": "Delusive Beginning",
                "g": "The World That Never Was"
              },
              {
                "name": "Ice Dream Cone 3",
                "area": "Walk of Delusions",
                "g": "The World That Never Was"
              },
              {
                "name": "Drop-Me-Not",
                "area": "Walk of Delusions",
                "g": "The World That Never Was"
              },
              {
                "name": "Lofty Fantasy",
                "area": "Walk of Delusions",
                "g": "The World That Never Was"
              },
              {
                "name": "Spark Raid",
                "area": "Fact within Fiction",
                "g": "The World That Never Was"
              },
              {
                "name": "Intrepid Fancy",
                "area": "Fact within Fiction",
                "g": "The World That Never Was"
              },
              {
                "name": "Royal Cake",
                "area": "Fact within Fiction",
                "g": "The World That Never Was"
              },
              {
                "name": "Block-It Chocolate 3",
                "area": "Fact within Fiction",
                "g": "The World That Never Was"
              },
              {
                "name": "Mega-Potion",
                "area": "Fact within Fiction",
                "g": "The World That Never Was"
              },
              {
                "name": "Balloon",
                "area": "Fact within Fiction",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "area": "Fact within Fiction",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "area": "Verge of Chaos",
                "g": "The World That Never Was"
              },
              {
                "name": "Skelterwild Recipe",
                "area": "Verge of Chaos",
                "g": "The World That Never Was"
              },
              {
                "name": "Candy Goggles",
                "area": "Verge of Chaos",
                "g": "The World That Never Was"
              },
              {
                "name": "Wondrous Fantasy",
                "area": "Verge of Chaos",
                "g": "The World That Never Was"
              },
              {
                "name": "Paint Gun: Black",
                "area": "Verge of Chaos",
                "g": "The World That Never Was"
              },
              {
                "name": "Shield Cookie 3",
                "area": "Verge of Chaos",
                "g": "The World That Never Was"
              },
              {
                "name": "Elixir",
                "area": "Verge of Chaos",
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
                "area": "Post Office",
                "unlock": "Unlocked by default",
                "enemy": "Kooma Panda",
                "reward": "Kooma Panda Recipe, Rampant Fantasy, Vibrant Fantasy, Troubling Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #2",
                "area": "Fourth District",
                "unlock": "Unlocked by default",
                "enemy": "Meow Wow, Flowbermeow",
                "reward": "Rampant Fantasy, Vibrant Fantasy, Troubling Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #3",
                "area": "Garden",
                "unlock": "Unlocked by default",
                "enemy": "Kooma Panda, Tama Sheep",
                "reward": "Rampant Fantasy, Vibrant Fantasy, Troubling Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #4",
                "area": "Second District",
                "unlock": "Unlocked during the 2nd visit",
                "enemy": "Thunderaffe",
                "reward": "Thunderaffe Recipe Malleable Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #5",
                "area": "Fifth District",
                "unlock": "Unlocked during the 2nd visit",
                "enemy": "Thunderaffe",
                "reward": "Malleable Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #6",
                "area": "Fountain Plaza",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Thunderaffe",
                "reward": "Malleable Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Secret Portal",
                "area": "Fifth District",
                "unlock": "Beat the game",
                "enemy": "Hockomonkey",
                "reward": "Maximum HP +10",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #1",
                "area": "Catacombs",
                "unlock": "Unlocked by default",
                "enemy": "Necho Cat",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #2",
                "area": "Town",
                "unlock": "Unlocked by default",
                "enemy": "Drill Sye",
                "reward": "Drill Sye Recipe, Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #3",
                "area": "Town",
                "unlock": "Unlocked by default",
                "enemy": "Zolephant",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #4",
                "area": "Court of Miracles",
                "unlock": "Complete La Cité des Cloches",
                "enemy": "Zolephant",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #5",
                "area": "Nave",
                "unlock": "Complete La Cité des Cloches",
                "enemy": "Meow Wow",
                "reward": "Malleable Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #6",
                "area": "Square",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Necho Cat, Zolephant, Drill Sye",
                "reward": "Malleable Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Secret Portal",
                "area": "Square",
                "unlock": "Beat the game",
                "enemy": "Wargoyle",
                "reward": "Maximum HP +10",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #1",
                "area": "Amusement Park",
                "unlock": "Unlocked by default",
                "enemy": "Iceguin Ace",
                "reward": "Iceguin Ace Recipe, Rampant Fantasy, Vibrant Fantasy, Troubling Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #2",
                "area": "Windup Way",
                "unlock": "Unlocked by default",
                "enemy": "Juggle Pup",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #3",
                "area": "Promontory",
                "unlock": "Unlocked by default",
                "enemy": "Flowbermeow",
                "reward": "Rampant Fantasy, Vibrant Fantasy, Troubling Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #4",
                "area": "Ocean Floor",
                "unlock": "Complete Prankster's Paradise",
                "enemy": "Juggle Pup",
                "reward": "Prickly Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #5",
                "area": "Ocean Depths",
                "unlock": "Complete Prankster's Paradise",
                "enemy": "Iceguin Ace",
                "reward": "Prickly Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #6",
                "area": "Circus",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Juggle Pup",
                "reward": "Prickly Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Secret Portal",
                "area": "Promontory",
                "unlock": "Beat the game",
                "enemy": "Chill Clawbster",
                "reward": "Maximum HP +10",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #1",
                "area": "Rectifier 1F",
                "unlock": "Unlocked by default",
                "enemy": "KO Kabuto",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #2",
                "area": "City",
                "unlock": "Unlocked by default",
                "enemy": "Yoggy Ram",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #3",
                "area": "Bridge",
                "unlock": "Unlocked by default",
                "enemy": "KO Kabuto, Yoggy Ram",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #4",
                "area": "Rectifier 2F",
                "unlock": "Complete The Grid",
                "enemy": "KO Kabuto",
                "reward": "Malleable Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #5",
                "area": "Docks",
                "unlock": "Complete The Grid",
                "enemy": "KO Kabuto, Yoggy Ram",
                "reward": "Malleable Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #6",
                "area": "Throughput",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Meow Wow",
                "reward": "Malleable Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Secret Portal",
                "area": "Throneship",
                "unlock": "Beat the game",
                "enemy": "Rinzler",
                "reward": "Maximum HP +10",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #1",
                "area": "Mont Saint-Michel",
                "unlock": "Unlocked by default",
                "enemy": "Me Me Bunny",
                "reward": "Fleeting Fantasy, Grim Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #2",
                "area": "Shore",
                "unlock": "Unlocked by default",
                "enemy": "Halbird",
                "reward": "Halbird Recipe Fleeting Fantasy, Grim Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #3",
                "area": "Tower Road",
                "unlock": "Unlocked by default",
                "enemy": "Tyranto Rex",
                "reward": "Fleeting Fantasy, Grim Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #4",
                "area": "Dungeon",
                "unlock": "Complete Country of the Musketeers",
                "enemy": "Ducky Goose, Tyranto Rex",
                "reward": "Prickly Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #5",
                "area": "Training Yard",
                "unlock": "Complete Country of the Musketeers",
                "enemy": "Halbird",
                "reward": "Prickly Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #6",
                "area": "Theatre",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Aura Lion",
                "reward": "Prickly Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Secret Portal",
                "area": "Theatre",
                "unlock": "Beat the game",
                "enemy": "Beagle Boys & Pete",
                "reward": "Maximum HP +10",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #1",
                "area": "Cloudwalk",
                "unlock": "Unlocked by default",
                "enemy": "Pegaslick",
                "reward": "Pegaslick Recipe, Fleeting Fantasy, Grim Fantasy, Savage Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #2",
                "area": "Mysterious Tower",
                "unlock": "Unlocked by default",
                "enemy": "Ryu Dragon",
                "reward": "Intrepid Fantasy, Grim Fantasy, Savage Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #3",
                "area": "Glen",
                "unlock": "Unlocked by default",
                "enemy": "Ghostabocky",
                "reward": "Intrepid Fantasy, Fleeting Fantasy, Savage Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #4",
                "area": "Precipice",
                "unlock": "Complete Symphony of Sorcery",
                "enemy": "Ryu Dragon",
                "reward": "Prickly Fantasy, Savage Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #5",
                "area": "Fields",
                "unlock": "Complete Symphony of Sorcery",
                "enemy": "Pegaslick",
                "reward": "Prickly Fantasy, Savage Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #6",
                "area": "Cloudwalk",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Pegaslick, Ryu Dragon",
                "reward": "Wild Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Secret Portal",
                "area": "Precipice",
                "unlock": "Beat the game",
                "enemy": "Spellican",
                "reward": "Maximum HP +10",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #1",
                "area": "Avenue to Dreams",
                "unlock": "Unlocked by default",
                "enemy": "Aura Lion",
                "reward": "Intrepid Fantasy, Savage Fantasy, Wild Fantasy",
                "g": "The World That Never Was"
              },
              {
                "name": "Special Portal #2",
                "area": "Contorted City",
                "unlock": "Unlocked by default",
                "enemy": "Pegaslick, Halbird",
                "reward": "Savage Fantasy, Wild Fantasy",
                "g": "The World That Never Was"
              },
              {
                "name": "Special Portal #3",
                "area": "Avenue to Dreams",
                "unlock": "Complete Special Portals 1-2",
                "enemy": "Tyranto Rex, Aura Lion, Ryu Dragon",
                "reward": "Wild Fantasy",
                "g": "The World That Never Was"
              }
            ],
            "riku": [
              {
                "name": "Special Portal #1",
                "area": "Fountain Plaza",
                "unlock": "Unlocked by default",
                "enemy": "Meow Wow",
                "reward": "Rampant Fantasy, Vibrant Fantasy, Troubling Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #2",
                "area": "Second District",
                "unlock": "Unlocked by default",
                "enemy": "Flowbermeow, Kooma Panda",
                "reward": "Flowbermeow Recipe, Rampant Fantasy, Vibrant Fantasy, Troubling Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #3",
                "area": "Fourth District",
                "unlock": "Unlocked by default",
                "enemy": "Tama Sheep",
                "reward": "Tama Sheep Recipe, Rampant Fantasy, Vibrant Fantasy, Troubling Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #4",
                "area": "First District",
                "unlock": "Unlocked during the 2nd visit",
                "enemy": "Thunderaffe",
                "reward": "Thunderaffe Recipe Charming Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #5",
                "area": "Garden",
                "unlock": "Unlocked during the 2nd visit",
                "enemy": "Thunderaffe",
                "reward": "Charming Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #6",
                "area": "Back Streets",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Thunderaffe",
                "reward": "Charming Fantasy",
                "g": "Traverse Town"
              },
              {
                "name": "Secret Portal",
                "area": "Garden",
                "unlock": "Beat the game",
                "enemy": "Hockomonkey",
                "reward": "Maximum HP +10",
                "g": "Traverse Town"
              },
              {
                "name": "Special Portal #1",
                "area": "Windmill",
                "unlock": "Unlocked by default",
                "enemy": "Zolephant, Drill Sye",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #2",
                "area": "Town",
                "unlock": "Unlocked by default",
                "enemy": "Necho Cat",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #3",
                "area": "Outskirts",
                "unlock": "Unlocked by default",
                "enemy": "Necho Cat",
                "reward": "Necho Cat Recipe, Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #4",
                "area": "Square",
                "unlock": "Complete La Cité des Cloches",
                "enemy": "Meow Wow",
                "reward": "Charming Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #5",
                "area": "Outskirts",
                "unlock": "Complete La Cité des Cloches",
                "enemy": "Necho Cat",
                "reward": "Charming Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #6",
                "area": "Nave",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Meow Wow, Zolephant, Drill Sye",
                "reward": "Charming Fantasy",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Secret Portal",
                "area": "Square",
                "unlock": "Beat the game",
                "enemy": "Wargoyle",
                "reward": "Maximum HP +10",
                "g": "La Cité des Cloches"
              },
              {
                "name": "Special Portal #1",
                "area": "Monstro: Mouth",
                "unlock": "Unlocked by default",
                "enemy": "Juggle Pup",
                "reward": "Rampant Fantasy, Vibrant Fantasy, Troubling Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #2",
                "area": "Monstro: Gullet",
                "unlock": "Unlocked by default",
                "enemy": "Iceguin Ace",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #3",
                "area": "Monstro: Cavity (Converted)",
                "unlock": "Unlocked by default",
                "enemy": "Juggle Pup",
                "reward": "Juggle Pup Recipe, Rampant Fantasy, Vibrant Fantasy, Troubling Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #4",
                "area": "Monstro: Belly",
                "unlock": "Complete Prankster's Paradise",
                "enemy": "Juggle Pup, Iceguin Ace",
                "reward": "Epic Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #5",
                "area": "Monstro: Bowels",
                "unlock": "Complete Prankster's Paradise",
                "enemy": "Iceguin Ace",
                "reward": "Epic Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #6",
                "area": "Monstro: Cavity",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Iceguin Ace",
                "reward": "Epic Fantasy",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Secret Portal",
                "area": "Monstro: Bowels",
                "unlock": "Beat the game",
                "enemy": "Char Clawbster",
                "reward": "Maximum HP +10",
                "g": "Prankster's Paradise"
              },
              {
                "name": "Special Portal #1",
                "area": "Rectifier 1F",
                "unlock": "Unlocked by default",
                "enemy": "KO Kabuto",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #2",
                "area": "City",
                "unlock": "Unlocked by default",
                "enemy": "Yoggy Ram",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #3",
                "area": "Bridge",
                "unlock": "Unlocked by default",
                "enemy": "KO Kabuto, Yoggy Ram",
                "reward": "Lofty Fantasy, Dulcet Fantasy, Noble Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #4",
                "area": "Rectifier 2F",
                "unlock": "Complete The Grid",
                "enemy": "KO Kabuto",
                "reward": "Charming Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #5",
                "area": "Docks",
                "unlock": "Complete The Grid",
                "enemy": "KO Kabuto, Yoggy Ram",
                "reward": "Charming Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #6",
                "area": "Portal Stairs",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Meow Wow",
                "reward": "Charming Fantasy",
                "g": "The Grid"
              },
              {
                "name": "Secret Portal",
                "area": "Portal",
                "unlock": "Beat the game",
                "enemy": "Commantis",
                "reward": "Maximum HP +10",
                "g": "The Grid"
              },
              {
                "name": "Special Portal #1",
                "area": "Grand Lobby",
                "unlock": "Unlocked by default",
                "enemy": "Aura Lion",
                "reward": "Aura Lion Recipe, Fleeting Fantasy, Grim Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #2",
                "area": "The Opéra",
                "unlock": "Unlocked by default",
                "enemy": "Ducky Goose, Me Me Bunny",
                "reward": "Fleeting Fantasy, Grim Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #3",
                "area": "Machine Room",
                "unlock": "Unlocked by default",
                "enemy": "Me Me Bunny",
                "reward": "Fleeting Fantasy, Grim Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #4",
                "area": "Backstage",
                "unlock": "Complete Country of the Musketeers",
                "enemy": "Aura Lion",
                "reward": "Epic Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #5",
                "area": "Theatre",
                "unlock": "Complete Country of the Musketeers",
                "enemy": "Halbird",
                "reward": "Epic Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #6",
                "area": "Green Room",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Aura Lion, Me Me Bunny",
                "reward": "Epic Fantasy",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Secret Portal",
                "area": "Backstage",
                "unlock": "Beat the game",
                "enemy": "Beagle Boys & Pete",
                "reward": "Maximum HP +10",
                "g": "Country of the Musketeers"
              },
              {
                "name": "Special Portal #1",
                "area": "Mysterious Tower",
                "unlock": "Unlocked by default",
                "enemy": "Ryu Dragon",
                "reward": "Fleeting Fantasy, Grim Fantasy, Intrepid Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #2",
                "area": "Moonlight Wood",
                "unlock": "Unlocked by default",
                "enemy": "Ghostabocky",
                "reward": "Ghostabocky Recipe, Fleeting Fantasy, Grim Fantasy, Intrepid Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #3",
                "area": "Snowgleam Wood",
                "unlock": "Unlocked by default",
                "enemy": "Pegaslick",
                "reward": "Fleeting Fantasy, Grim Fantasy, Intrepid Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #4",
                "area": "Golden Wood",
                "unlock": "Complete Symphony of Sorcery",
                "enemy": "Ryu Dragon",
                "reward": "Epic Fantasy, Savage Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #5",
                "area": "Moonlight Wood",
                "unlock": "Complete Symphony of Sorcery",
                "enemy": "Pegaslick",
                "reward": "Epic Fantasy, Savage Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #6",
                "area": "Snowgleam Wood",
                "unlock": "Complete Special Portals 1-5",
                "enemy": "Pegaslick, Ryu Dragon",
                "reward": "Brilliant Fantasy",
                "g": "Symphony of Sorcery"
              },
              {
                "name": "Special Portal #1",
                "area": "Fact within Fiction",
                "unlock": "Unlocked by default",
                "enemy": "Aura Lion",
                "reward": "Intrepid Fantasy, Savage Fantasy, Brilliant Fantasy",
                "g": "The World That Never Was"
              },
              {
                "name": "Special Portal #2",
                "area": "Verge of Chaos",
                "unlock": "Unlocked by default",
                "enemy": "Pegaslick, Thunderaffe, Halbird",
                "reward": "Savage Fantasy, Brilliant Fantasy",
                "g": "The World That Never Was"
              },
              {
                "name": "Special Portal #3",
                "area": "Delusive Beginning",
                "unlock": "Complete Special Portals 1-2",
                "enemy": "Tyranto Rex, Aura Lion, Ryu Dragon",
                "reward": "Brilliant Fantasy",
                "g": "The World That Never Was"
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
              "name": "Training Cup",
              "how": "Available from the beginning"
            },
            {
              "name": "Beginner's Cup",
              "how": "Reach Flick Rush Level 2"
            },
            {
              "name": "Rainbow Cup",
              "how": "Complete Prankster's Paradise as either character"
            },
            {
              "name": "Digital Cup",
              "how": "Complete The Grid as either character"
            },
            {
              "name": "Tin Pin Cup",
              "how": "Complete the Rainbow Cup"
            },
            {
              "name": "Speed Cup",
              "how": "Complete the Rainbow Cup"
            },
            {
              "name": "Yummy Cup",
              "how": "Complete Traverse Town (2nd Visit) as either character"
            },
            {
              "name": "Final Cup",
              "how": "Complete Symphony of Sorcery as either character"
            },
            {
              "name": "Horror Cup",
              "how": "Reach Flick Rush Level 13"
            },
            {
              "name": "Secret Cup",
              "how": "Reach Flick Rush Level 16"
            }
          ]
        }
      ]
    }
  ]
};
