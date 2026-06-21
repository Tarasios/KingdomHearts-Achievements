/* =====================================================================
   KH Birth by Sleep — melding data
   Source: Final Fantasy Kingdom's melding chart.
   Loaded before js/kh-melding.js; exposes the globals consumed there.
   Game terms stay in English (the calculator's UI chrome is translated).

   Globals defined here (each documented inline below):
     CRYSTALS       — the 7 crystal columns, in chart order.
     CRYSTAL_TABLE  — recipe type letter (A–P) -> ability per crystal,
                      same column order as CRYSTALS.
     RECIPES        — array of fixed-length tuples; the field order is
                      [command, ing1, ing2, type, pct, category, usableBy].
                      js/kh-melding.js maps these to named fields (cmd, a, b,
                      type, pct, cat, own) in its `recipes` array.
     ABILITY_META   — ability name -> { cat, crystal, max } (max = how many
                      copies count as "complete"); declaration order is the
                      in-game ability order used by the Ability Tracker.
   ===================================================================== */

// Crystal columns, in chart order.
const CRYSTALS = ["Shimmering","Fleeting","Pulsing","Wellspring","Soothing","Hungry","Abounding"];

// Crystal table: recipe type letter -> ability per crystal (same order as CRYSTALS).
const CRYSTAL_TABLE = {
 A:["Fire Boost","Magic Haste","Leaf Bracer","Air Combo Plus","HP Boost","HP Prize Plus","Link Prize Plus"],
 B:["Fire Boost","Reload Boost","Finish Boost","Once More","Damage Syphon","HP Prize Plus","EXP Chance"],
 C:["Fire Screen","Attack Haste","Finish Boost","Combo Plus","HP Boost","HP Prize Plus","Link Prize Plus"],
 D:["Fire Screen","Attack Haste","Leaf Bracer","Combo Plus","HP Boost","HP Prize Plus","Link Prize Plus"],
 E:["Blizzard Boost","Magic Haste","Leaf Bracer","Combo Plus","Item Boost","HP Prize Plus","Lucky Strike"],
 F:["Blizzard Boost","Reload Boost","Second Chance","Air Combo Plus","Damage Syphon","HP Prize Plus","Lucky Strike"],
 G:["Blizzard Screen","Attack Haste","Leaf Bracer","Air Combo Plus","Item Boost","HP Prize Plus","Lucky Strike"],
 H:["Blizzard Screen","Magic Haste","Combo F Boost","Air Combo Plus","Item Boost","HP Prize Plus","EXP Walker"],
 I:["Thunder Boost","Magic Haste","Combo F Boost","Air Combo Plus","HP Boost","Treasure Magnet","Link Prize Plus"],
 J:["Thunder Boost","Reload Boost","Combo F Boost","Once More","Defender","Treasure Magnet","EXP Chance"],
 K:["Thunder Screen","Attack Haste","Finish Boost","Combo Plus","HP Boost","Treasure Magnet","Link Prize Plus"],
 L:["Thunder Screen","Attack Haste","Finish Boost","Combo Plus","HP Boost","Treasure Magnet","Lucky Strike"],
 M:["Cure Boost","Magic Haste","Combo F Boost","Combo Plus","Item Boost","Treasure Magnet","Lucky Strike"],
 N:["Cure Boost","Reload Boost","Second Chance","Combo Plus","Defender","Treasure Magnet","Lucky Strike"],
 O:["Dark Screen","Attack Haste","Finish Boost","Air Combo Plus","Item Boost","Treasure Magnet","Lucky Strike"],
 P:["Dark Screen","Magic Haste","Combo F Boost","Air Combo Plus","Item Boost","Treasure Magnet","EXP Walker"]
};

// Recipes: [command, ing1, ing2, type, pct, category, usableBy("T"/"V"/"A" letters)]
const RECIPES = [
["Blitz","Quick Blitz","Slot Edge","O",90,"Attack","TVA"],["Blitz","Barrier Surge","Wishing Edge","P",90,"Attack","A"],["Blitz","Stun Edge","Slot Edge","K",90,"Attack","TVA"],
["Meteor Crash","Blitz","Quake","N",100,"Attack","T"],["Meteor Crash","Fire Strike","Brutal Blast","D",100,"Attack","T"],
["Magic Hour","Blitz","Zero Graviga","O",90,"Attack","A"],["Magic Hour","Barrier Surge","Aeroga","N",90,"Attack","A"],
["Fire Dash","Sliding Dash","Fire","D",100,"Attack","TVA"],["Fire Dash","Sliding Dash","Fira","C",100,"Attack","TVA"],["Fire Dash","Confusion Strike","Fire","D",100,"Attack","TVA"],
["Dark Haze","Fire Dash","Zero Gravira","D",100,"Attack","T"],["Dark Haze","Fire Dash","Blackout","A",100,"Attack","T"],["Dark Haze","Fire Surge","Zero Gravity","C",100,"Attack","T"],
["Sonic Blade","Blitz","Dark Haze","D",90,"Attack","T"],["Sonic Blade","Blitz","Air Slide","N",90,"Attack","TVA"],["Sonic Blade","Fire Dash","Thunder Surge","K",90,"Attack","TVA"],
["Chaos Blade","Dark Haze","Sonic Blade","B",90,"Attack","T"],
["Zantetsuken","Dark Haze","Stopga","B",80,"Attack","T"],["Zantetsuken","Sonic Blade","Stopga","F",80,"Attack","T"],
["Strike Raid","Quick Blitz","Sliding Dash","O",100,"Attack","TVA"],
["Freeze Raid","Strike Raid","Blizzara","I",100,"Attack","TVA"],["Freeze Raid","Blizzard Edge","Binding Strike","K",100,"Attack","TVA"],
["Treasure Raid","Strike Raid","Slot Edge","O",100,"Attack","V"],["Treasure Raid","Slot Edge","Magnet","D",100,"Attack","V"],["Treasure Raid","Slot Edge","Magnera","K",100,"Attack","V"],
["Spark Raid","Freeze Raid","Magnega","J",100,"Attack","V"],["Spark Raid","Treasure Raid","Magnega","N",100,"Attack","V"],["Spark Raid","Thunder Surge","Dodge Roll","P",20,"Attack","V"],["Spark Raid","Thundaga","Dodge Roll","L",20,"Attack","V"],["Spark Raid","Dodge Roll","Stun Block","L",20,"Attack","V"],
["Wind Raid","Freeze Raid","Aeroga","B",100,"Attack","V"],["Wind Raid","Treasure Raid","Aeroga","F",100,"Attack","V"],
["Fire Surge","Fire Dash","Ignite","D",100,"Attack","TVA"],["Fire Surge","Fire Strike","Fira","A",100,"Attack","TVA"],["Fire Surge","Confusion Strike","Fira","O",100,"Attack","TVA"],["Fire Surge","Binding Strike","Fira","K",100,"Attack","TVA"],
["Barrier Surge","Fire Dash","Barrier","D",100,"Attack","A"],["Barrier Surge","Stun Edge","Barrier","K",100,"Attack","A"],
["Thunder Surge","Fire Dash","Thundara","D",100,"Attack","TVA"],["Thunder Surge","Freeze Raid","Thundara","G",100,"Attack","TVA"],["Thunder Surge","Stun Edge","Thundara","I",100,"Attack","TVA"],["Thunder Surge","Confusion Strike","Thundara","I",95,"Attack","TVA"],
["Aerial Slam","Fire Dash","High Jump","A",100,"Attack","TVA"],["Aerial Slam","Fire Surge","Aero","D",100,"Attack","TVA"],["Aerial Slam","Fire Strike","Aerora","C",90,"Attack","TVA"],
["Ars Solum","Dark Haze","Sonic Blade","B",20,"Attack","T"],["Ars Solum","Dark Haze","Stopga","B",20,"Attack","T"],["Ars Solum","Sonic Blade","Stopga","F",20,"Attack","T"],["Ars Solum","Sliding Dash","Thunder","K",5,"Attack","T"],["Ars Solum","Strike Raid","Thunder","L",5,"Attack","T"],["Ars Solum","Strike Raid","Thundara","K",5,"Attack","T"],["Ars Solum","Confusion Strike","Thundara","I",5,"Attack","T"],
["Ars Arcanum","Blitz","Aerial Slam","F",100,"Attack","V"],["Ars Arcanum","Quick Blitz","Slot Edge","O",10,"Attack","V"],["Ars Arcanum","Fire Strike","Aerora","C",10,"Attack","V"],["Ars Arcanum","Quick Blitz","Blizzard","G",5,"Attack","V"],["Ars Arcanum","Quick Blitz","Blizzara","H",5,"Attack","V"],["Ars Arcanum","Sliding Dash","Blizzard","E",5,"Attack","V"],["Ars Arcanum","Sliding Dash","Blizzara","G",5,"Attack","V"],["Ars Arcanum","Poison Edge","Cura","P",5,"Attack","V"],["Ars Arcanum","Blizzard Edge","Cura","G",5,"Attack","V"],
["Time Splicer","Aerial Slam","Stopga","F",100,"Attack","VA"],["Time Splicer","Stopga","Barrier","C",20,"Attack","A"],["Time Splicer","Barrier Surge","Wishing Edge","P",10,"Attack","A"],["Time Splicer","Stun Edge","Slot Edge","K",10,"Attack","VA"],
["Poison Edge","Quick Blitz","Poison","O",95,"Attack","TVA"],["Poison Edge","Sliding Dash","Poison","K",95,"Attack","TVA"],["Poison Edge","Strike Raid","Poison","D",95,"Attack","TVA"],
["Wishing Edge","Strike Raid","Barrier Surge","O",100,"Attack","A"],["Wishing Edge","Barrier Surge","Stun Edge","K",100,"Attack","A"],["Wishing Edge","Stun Edge","Binding Strike","J",100,"Attack","A"],
["Blizzard Edge","Quick Blitz","Blizzard","G",95,"Attack","TVA"],["Blizzard Edge","Quick Blitz","Blizzara","H",95,"Attack","TVA"],["Blizzard Edge","Sliding Dash","Blizzard","E",95,"Attack","TVA"],["Blizzard Edge","Sliding Dash","Blizzara","G",95,"Attack","TVA"],
["Stun Edge","Sliding Dash","Thunder","K",95,"Attack","TVA"],["Stun Edge","Strike Raid","Thunder","L",95,"Attack","TVA"],["Stun Edge","Strike Raid","Thundara","K",95,"Attack","TVA"],
["Slot Edge","Wishing Edge","Cure","O",100,"Attack","A"],["Slot Edge","Poison Edge","Cura","P",95,"Attack","TVA"],["Slot Edge","Blizzard Edge","Cura","G",95,"Attack","TVA"],["Slot Edge","Curaga","Renewal Block","N",90,"Attack","TV"],["Slot Edge","Curaga","Focus Block","P",90,"Attack","V"],["Slot Edge","Curaga","Renewal Barrier","N",90,"Attack","A"],["Slot Edge","Curaga","Focus Barrier","P",90,"Attack","A"],
["Fire Strike","Poison Edge","Fira","D",100,"Attack","TVA"],["Fire Strike","Wishing Edge","Ignite","A",100,"Attack","A"],["Fire Strike","Stun Edge","Fire","K",100,"Attack","TVA"],
["Confusion Strike","Quick Blitz","Confuse","O",100,"Attack","TVA"],["Confusion Strike","Sliding Dash","Zero Gravity","K",100,"Attack","TVA"],["Confusion Strike","Strike Raid","Confuse","G",100,"Attack","TVA"],
["Binding Strike","Quick Blitz","Bind","K",100,"Attack","TVA"],["Binding Strike","Strike Raid","Bind","O",100,"Attack","TVA"],["Binding Strike","Stun Edge","Zero Gravity","I",100,"Attack","TVA"],
["Brutal Blast","Stun Edge","Mine Shield","O",70,"Attack","T"],["Brutal Blast","Binding Strike","Mine Square","L",70,"Attack","T"],
["Tornado Strike","Confusion Strike","Aeroga","G",100,"Attack","V"],["Tornado Strike","Binding Strike","Aeroga","F",100,"Attack","V"],
["Magnet Spiral","Binding Strike","Collision Magnet","K",100,"Attack","TVA"],["Magnet Spiral","Binding Strike","Magnega","J",100,"Attack","TVA"],["Magnet Spiral","Quick Blitz","Magnera","K",20,"Attack","TVA"],["Magnet Spiral","Stun Edge","Magnera","L",20,"Attack","TVA"],["Magnet Spiral","Zero Gravira","Magnet","I",20,"Attack","TVA"],
["Windcutter","Binding Strike","Aeroga","F",100,"Attack","T"],["Windcutter","Confusion Strike","Aeroga","G",100,"Attack","T"],
["Limit Storm","Brutal Blast","Confusion Strike","G",100,"Attack","T"],["Limit Storm","Brutal Blast","Binding Strike","D",100,"Attack","T"],
["Salvation","Wind Raid","Curaga","N",100,"Attack","V"],
["Collision Magnet","Quick Blitz","Magnera","K",80,"Attack","TVA"],["Collision Magnet","Stun Edge","Magnera","L",80,"Attack","TVA"],["Collision Magnet","Zero Gravira","Magnet","I",80,"Attack","TVA"],
["Geo Impact","Brutal Blast","Brutal Blast","N",70,"Attack","T"],
["Sacrifice","Dark Haze","Warp","B",100,"Attack","T"],["Sacrifice","Poison Edge","Warp","D",100,"Attack","T"],
["Break Time","Curaga","Renewal Block","N",10,"Attack","TV"],["Break Time","Curaga","Renewal Barrier","N",10,"Attack","A"],["Break Time","Curaga","Focus Block","P",10,"Attack","TV"],["Break Time","Curaga","Focus Barrier","P",10,"Attack","A"],

["Fira","Fire Dash","Fire","D",100,"Magic","TVA"],["Fira","Fire Strike","Fire","D",100,"Magic","TVA"],["Fira","Fire","Fire","A",100,"Magic","TVA"],["Fira","Fire","Ignite","C",100,"Magic","TVA"],
["Firaga","Fire Dash","Fira","D",90,"Magic","TVA"],["Firaga","Fire","Fira","A",90,"Magic","TVA"],["Firaga","Fira","Fira","B",90,"Magic","TVA"],
["Dark Firaga","Dark Haze","Firaga","D",100,"Magic","T"],["Dark Firaga","Firaga","Blackout","B",100,"Magic","T"],
["Fission Firaga","Fira","Aeroga","A",80,"Magic","TVA"],["Fission Firaga","Firaga","Aerora","A",80,"Magic","TVA"],["Fission Firaga","Firaga","Aeroga","B",80,"Magic","TVA"],
["Triple Firaga","Fira","Firaga","A",95,"Magic","A"],["Triple Firaga","Blitz","Firaga","D",90,"Magic","A"],["Triple Firaga","Firaga","Firaga","B",90,"Magic","A"],
["Crawling Fire","Firaga","Slow","A",80,"Magic","TVA"],["Crawling Fire","Firaga","Stopra","D",80,"Magic","TVA"],["Crawling Fire","Firaga","Stopga","B",80,"Magic","TVA"],
["Blizzara","Strike Raid","Blizzard","G",100,"Magic","TVA"],["Blizzara","Blizzard Edge","Blizzard","G",100,"Magic","TVA"],["Blizzara","Blizzard","Blizzard","E",100,"Magic","TVA"],["Blizzara","Blizzard","Aero","H",100,"Magic","TVA"],
["Blizzaga","Blizzard Edge","Blizzara","G",100,"Magic","TVA"],["Blizzaga","Blizzard","Blizzara","E",100,"Magic","TVA"],["Blizzaga","Blizzara","Blizzara","F",100,"Magic","TVA"],
["Triple Blizzaga","Blitz","Blizzaga","G",100,"Magic","A"],["Triple Blizzaga","Blizzara","Blizzaga","E",100,"Magic","A"],["Triple Blizzaga","Blizzaga","Blizzaga","F",100,"Magic","A"],
["Thundara","Stun Edge","Thunder","K",100,"Magic","TVA"],["Thundara","Thunder","Thunder","I",100,"Magic","TVA"],["Thundara","Zero Gravity","Magnet","L",100,"Magic","TVA"],
["Thundaga","Binding Strike","Thundara","K",90,"Magic","TVA"],["Thundaga","Thunder","Thundara","I",90,"Magic","TVA"],["Thundaga","Thundara","Thundara","J",90,"Magic","TVA"],
["Thundaga Shot","Strike Raid","Thundaga","I",85,"Magic","A"],["Thundaga Shot","Freeze Raid","Thundaga","E",85,"Magic","A"],["Thundaga Shot","Firaga","Thundaga","A",85,"Magic","A"],
["Cura","Thunder","Cure","I",100,"Magic","TVA"],["Cura","Cure","Cure","M",100,"Magic","TVA"],["Cura","Cure","Aero","O",100,"Magic","TVA"],
["Curaga","Cure","Cura","M",100,"Magic","TVA"],["Curaga","Cura","Cura","N",100,"Magic","TVA"],
["Mine Shield","Fira","Zero Gravity","A",100,"Magic","TVA"],["Mine Shield","Fira","Block","C",100,"Magic","TV"],["Mine Shield","Ignite","Stop","D",100,"Magic","TVA"],["Mine Shield","Stopra","Block","M",100,"Magic","TV"],
["Mine Square","Fira","Stop","A",100,"Magic","TVA"],["Mine Square","Fira","Barrier","C",100,"Magic","A"],["Mine Square","Aerora","Ignite","D",100,"Magic","TVA"],["Mine Square","Stopra","Barrier","M",100,"Magic","A"],
["Seeker Mine","Mine Shield","Mine Square","B",100,"Magic","A"],["Seeker Mine","Mine Shield","Magnega","C",100,"Magic","A"],["Seeker Mine","Mine Square","Magnega","D",100,"Magic","A"],
["Zero Gravira","Thunder","Zero Gravity","I",90,"Magic","TVA"],["Zero Gravira","Zero Gravity","Zero Gravity","M",90,"Magic","TVA"],["Zero Gravira","Magnet","Aero","P",90,"Magic","TVA"],
["Zero Graviga","Thundara","Zero Gravira","I",80,"Magic","TVA"],["Zero Graviga","Zero Gravity","Zero Gravira","M",80,"Magic","TVA"],["Zero Graviga","Zero Gravira","Zero Gravira","N",80,"Magic","TVA"],
["Magnera","Stun Edge","Magnet","K",100,"Magic","TVA"],["Magnera","Thunder","Magnet","I",100,"Magic","TVA"],["Magnera","Magnet","Magnet","M",100,"Magic","TVA"],
["Magnega","Magnet","Magnera","I",100,"Magic","TVA"],["Magnega","Magnera","Magnera","J",100,"Magic","TVA"],
["Munny Magnet","Wishing Edge","Magnera","K",100,"Magic","A"],["Munny Magnet","Thundara","Magnera","I",100,"Magic","A"],
["Energy Magnet","Cure","Magnera","M",100,"Magic","A"],["Energy Magnet","Cura","Magnera","N",100,"Magic","A"],
["D-Link Magnet","Zero Gravira","Magnera","L",100,"Magic","A"],["D-Link Magnet","Magnera","Stopra","I",100,"Magic","A"],
["Aerora","Quick Blitz","Aero","G",95,"Magic","TVA"],["Aerora","Thunder","Aero","I",95,"Magic","TVA"],["Aerora","Aero","Aero","E",95,"Magic","TVA"],
["Aeroga","Quick Blitz","Aerora","O",90,"Magic","TVA"],["Aeroga","Aero","Aerora","M",90,"Magic","TVA"],["Aeroga","Aerora","Aerora","N",90,"Magic","TVA"],
["Warp","Thundara","Zero Gravira","I",20,"Magic","T"],["Warp","Zero Gravity","Zero Gravira","M",20,"Magic","T"],["Warp","Zero Gravira","Zero Gravira","N",20,"Magic","T"],["Warp","Thunder","Zero Gravity","I",10,"Magic","T"],["Warp","Magnet","Aero","P",10,"Magic","T"],["Warp","Zero Gravity","Zero Gravity","M",10,"Magic","T"],
["Faith","Wind Raid","Break Time","N",100,"Magic","V"],
["Deep Freeze","Freeze Raid","Blizzaga","G",100,"Magic","TVA"],["Deep Freeze","Binding Strike","Blizzaga","H",100,"Magic","TVA"],["Deep Freeze","Blizzaga","Triple Blizzaga","F",100,"Magic","A"],
["Glacier","Blizzaga","Deep Freeze","E",100,"Magic","A"],["Glacier","Triple Blizzaga","Deep Freeze","F",100,"Magic","A"],
["Ice Barrage","Blizzaga","Mine Shield","F",100,"Magic","A"],["Ice Barrage","Blizzaga","Mine Square","H",100,"Magic","A"],
["Firaga Burst","Fira","Aeroga","A",20,"Magic","A"],["Firaga Burst","Firaga","Aerora","A",20,"Magic","A"],["Firaga Burst","Firaga","Aeroga","B",20,"Magic","A"],["Firaga Burst","Firaga","Slow","A",20,"Magic","A"],["Firaga Burst","Firaga","Stopra","D",20,"Magic","A"],["Firaga Burst","Firaga","Stopga","B",20,"Magic","A"],
["Raging Storm","Fission Firaga","Firaga Burst","B",100,"Magic","A"],["Raging Storm","Blitz","Firaga","D",10,"Magic","A"],["Raging Storm","Fire Dash","Fira","D",10,"Magic","A"],["Raging Storm","Fire Surge","Cartwheel","C",10,"Magic","A"],["Raging Storm","Fire","Fira","A",10,"Magic","A"],["Raging Storm","Fira","Fira","B",10,"Magic","A"],["Raging Storm","Fira","Firaga","A",10,"Magic","A"],["Raging Storm","Firaga","Firaga","B",10,"Magic","A"],
["Mega Flare","Fission Firaga","Crawling Fire","B",100,"Magic","TVA"],
["Quake","Brutal Blast","Zero Graviga","B",90,"Magic","T"],["Quake","Brutal Blast","Magnega","C",90,"Magic","T"],["Quake","Stun Edge","Mine Shield","O",30,"Magic","T"],["Quake","Binding Strike","Mine Square","L",30,"Magic","T"],["Quake","Brutal Blast","Brutal Blast","N",30,"Magic","T"],
["Meteor","Geo Impact","Quake","B",100,"Magic","T"],["Meteor","Brutal Blast","Zero Graviga","B",10,"Magic","T"],["Meteor","Brutal Blast","Magnega","C",10,"Magic","T"],
["Tornado","Magnega","Aeroga","N",100,"Magic","V"],["Tornado","Quick Blitz","Aerora","O",10,"Magic","V"],["Tornado","Aero","Aerora","M",10,"Magic","V"],["Tornado","Aerora","Aerora","N",10,"Magic","V"],["Tornado","Quick Blitz","Aero","G",5,"Magic","V"],["Tornado","Thunder","Aero","I",5,"Magic","V"],["Tornado","Aero","Aero","E",5,"Magic","V"],
["Transcendence","Magnet Spiral","Zero Graviga","J",100,"Magic","TVA"],
["Mini","Magnera","Warp","N",100,"Magic","T"],["Mini","Magnega","Magnega","J",100,"Magic","TVA"],["Mini","Magnega","Bind","I",100,"Magic","TVA"],
["Blackout","Zero Gravity","Confuse","M",100,"Magic","TVA"],["Blackout","Zero Gravira","Confuse","N",100,"Magic","TVA"],["Blackout","Zero Gravira","Poison","P",100,"Magic","TVA"],
["Ignite","Fire","Bind","A",100,"Magic","TVA"],["Ignite","Fira","Bind","C",100,"Magic","TVA"],
["Stopra","Slow","Slow","L",100,"Magic","TVA"],["Stopra","Slow","Stop","K",100,"Magic","TVA"],["Stopra","Stop","Stop","I",100,"Magic","TVA"],
["Stopga","Stop","Stopra","I",100,"Magic","TVA"],["Stopga","Stopra","Stopra","J",100,"Magic","TVA"],

["Homing Slide","Sliding Dash","Magnera","P",100,"Action","VA"],["Homing Slide","Sliding Dash","Air Slide","C",100,"Action","VA"],["Homing Slide","Magnet","Air Slide","L",100,"Action","VA"],
["Thunder Roll","Thunder Surge","Dodge Roll","P",80,"Action","V"],["Thunder Roll","Thundaga","Dodge Roll","L",80,"Action","V"],["Thunder Roll","Stun Block","Dodge Roll","L",80,"Action","V"],
["Firewheel","Firaga","Cartwheel","B",100,"Action","A"],["Firewheel","Fission Firaga","Cartwheel","B",100,"Action","A"],["Firewheel","Fire Surge","Cartwheel","C",90,"Action","A"],
["Ice Slide","Blizzard Edge","Air Slide","F",100,"Action","TVA"],["Ice Slide","Blizzaga","Air Slide","H",100,"Action","TVA"],
["Fire Glide","Fire Surge","Glide","C",100,"Action","V"],["Fire Glide","Firaga","Glide","B",100,"Action","V"],
["Renewal Block","Curaga","Block","P",100,"Action","TV"],["Renewal Block","Esuna","Block","C",100,"Action","TV"],
["Stun Block","Stun Edge","Block","L",100,"Action","TV"],["Stun Block","Thundaga","Block","I",100,"Action","TV"],
["Poison Block","Poison Edge","Block","H",80,"Action","TV"],["Poison Block","Poison","Block","P",80,"Action","TV"],
["Renewal Barrier","Curaga","Barrier","P",100,"Action","A"],["Renewal Barrier","Esuna","Barrier","N",100,"Action","A"],
["Confuse Barrier","Confusion Strike","Barrier","C",100,"Action","A"],["Confuse Barrier","Confuse","Barrier","L",100,"Action","A"],
["Stop Barrier","Stopga","Barrier","C",80,"Action","A"],
["Payback Fang","Sliding Dash","Counter Hammer","P",100,"Action","T"],
["Payback Raid","Sliding Dash","Strike Raid","P",100,"Action","V"],
["Payback Surge","Sliding Dash","Fire Surge","C",100,"Action","A"],["Payback Surge","Sliding Dash","Thunder Surge","L",100,"Action","A"],

["Lightning Ray","Blitz","Dark Haze","-",10,"Shotlock","T"],["Lightning Ray","Blitz","Air Slide","-",10,"Shotlock","TVA"],["Lightning Ray","Fire Dash","Thunder Surge","-",10,"Shotlock","TVA"],["Lightning Ray","Binding Strike","Thundara","-",10,"Shotlock","TVA"],["Lightning Ray","Thunder","Thundara","-",10,"Shotlock","TVA"],["Lightning Ray","Thundara","Thundara","-",10,"Shotlock","TVA"],["Lightning Ray","Aeroga","Barrier Surge","-",10,"Shotlock","A"],
["Meteor Shower","Strike Raid","Thundaga","-",15,"Shotlock","A"],["Meteor Shower","Freeze Raid","Thundaga","-",15,"Shotlock","A"],["Meteor Shower","Firaga","Thundaga","-",15,"Shotlock","A"],["Meteor Shower","Blitz","Zero Graviga","-",10,"Shotlock","A"],
["Bio Barrage","Poison Edge","Block","-",20,"Shotlock","TV"],["Bio Barrage","Poison","Block","-",20,"Shotlock","TV"],["Bio Barrage","Quick Blitz","Poison","-",5,"Shotlock","TVA"],["Bio Barrage","Sliding Dash","Poison","-",5,"Shotlock","TVA"],["Bio Barrage","Strike Raid","Poison","-",5,"Shotlock","TVA"]
];

/* Ability metadata (from KH Wiki):
   max = copies before the ability is "completed".
   cat = Prize / Stats / Support. crystal = synthesis material that guarantees it.
   Only meldable abilities are listed (Scan / Zero EXP have no recipe type). */
const ABILITY_META = {
  "Treasure Magnet":{max:5,cat:"Prize",crystal:"Hungry"},
  "HP Prize Plus":{max:3,cat:"Prize",crystal:"Hungry"},
  "Link Prize Plus":{max:3,cat:"Prize",crystal:"Abounding"},
  "Lucky Strike":{max:5,cat:"Prize",crystal:"Abounding"},
  "HP Boost":{max:3,cat:"Stats",crystal:"Soothing"},
  "Fire Boost":{max:3,cat:"Stats",crystal:"Shimmering"},
  "Blizzard Boost":{max:3,cat:"Stats",crystal:"Shimmering"},
  "Thunder Boost":{max:3,cat:"Stats",crystal:"Shimmering"},
  "Cure Boost":{max:3,cat:"Stats",crystal:"Shimmering"},
  "Item Boost":{max:3,cat:"Stats",crystal:"Soothing"},
  "Attack Haste":{max:5,cat:"Stats",crystal:"Fleeting"},
  "Magic Haste":{max:5,cat:"Stats",crystal:"Fleeting"},
  "Combo F Boost":{max:2,cat:"Stats",crystal:"Pulsing"},
  "Finish Boost":{max:2,cat:"Stats",crystal:"Pulsing"},
  "Fire Screen":{max:2,cat:"Stats",crystal:"Shimmering"},
  "Blizzard Screen":{max:2,cat:"Stats",crystal:"Shimmering"},
  "Thunder Screen":{max:2,cat:"Stats",crystal:"Shimmering"},
  "Dark Screen":{max:2,cat:"Stats",crystal:"Shimmering"},
  "Reload Boost":{max:1,cat:"Stats",crystal:"Fleeting"},
  "Defender":{max:1,cat:"Stats",crystal:"Soothing"},
  "Combo Plus":{max:3,cat:"Support",crystal:"Wellspring"},
  "Air Combo Plus":{max:3,cat:"Support",crystal:"Wellspring"},
  "EXP Chance":{max:1,cat:"Support",crystal:"Abounding"},
  "EXP Walker":{max:1,cat:"Support",crystal:"Abounding"},
  "Damage Syphon":{max:1,cat:"Support",crystal:"Soothing"},
  "Second Chance":{max:1,cat:"Support",crystal:"Pulsing"},
  "Once More":{max:1,cat:"Support",crystal:"Wellspring"},
  "Leaf Bracer":{max:1,cat:"Support",crystal:"Pulsing"}
};
