// -------
#Includes
// -------

$Include: "amb_downtown.cts"

// -------
#Groups
// -------

// -------
#Navpoints
// -------

$Navpoint:	"sr2_mp_gb_tokho1_$r000"
$Type:		"ground"
$Pos:			<-311.965912 155.88 -886.86>
$Orient:		[-2.061546]

$Navpoint:	"sr2_mp_gb_tokho1_$r001"
$Type:		"ground"
$Pos:			<-311.965912 155.88 -886.86>
$Orient:		[-1.607308]

$Navpoint:	"sr2_mp_gb_tokho1_$r002"
$Type:		"ground"
$Pos:			<-311.965912 155.88 -886.86>
$Orient:		[-1.607308]

$Navpoint:	"sr2_mp_gb_tokho1_$r003"
$Type:		"ground"
$Pos:			<-311.965912 155.88 -886.86>
$Orient:		[-1.607308]

$Navpoint:	"sr2_mp_gb_tokho1_$r004"
$Type:		"ground"
$Pos:			<-311.965912 155.88 -886.86>
$Orient:		[-1.607308]

$Navpoint:	"sr2_mp_gb_tokho1_$r005"
$Type:		"ground"
$Pos:			<-311.965912 155.88 -886.86>
$Orient:		[-1.607308]

$Navpoint:	"sr2_mp_gb_tokho1_$r006"
$Type:		"ground"
$Pos:			<-311.965912 155.88 -886.86>
$Orient:		[-1.607308]

$Navpoint:	"sr2_mp_gb_tokho1_$r007"
$Type:		"ground"
$Pos:			<-311.965912 155.88 -886.86>
$Orient:		[-1.607308]

$Navpoint:	"sr2_mp_gb_tokho1_$fallWarpEnter"
$Type:		"floating"
$Pos:			<-281.060699 51.329498 -913.669128>
$Orient:		[-1.607308]

$Navpoint:	"sr2_mp_gb_tokho1_$fallWarpExit"
$Type:		"floating"
$Pos:			<-282.667297 18.5784 -914.02533>
$Orient:		[I]

// -------
#Paths
// -------

// -------
#Items
// -------

// -------
#Triggers
// -------

//Test warp
// This is to attempt to save the player from dying when falling from the top level of the hotel
// at least if they dont hit a wall coming down lol.
// I want to say this warp is placed on level 5 or 6,
// so if you use this map and create warps per level (elevator), avoid the level where the fall warp is located
$Trigger:		"sr2_mp_gb_tokho1_$fallWarpEnter"
$Trigger type:			"cylinder"
$Trigger action:	"warp"
$Trigger max fires:	0
$Trigger delay:		1
$Start nav:		"sr2_mp_gb_tokho1_$fallWarpEnter"
$Cylinder size:				1.000000 100.000000
+Warp Nav:		"sr2_mp_gb_tokho1_$fallWarpExit"

// -------
#Vehicles
// -------

// -------
#Respawns
// -------

$Respawn:		"sr2_mp_gb_tokho1_$r000"
$Start nav:		"sr2_mp_gb_tokho1_$r000"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"sr2_mp_gb_tokho1_$r001"
$Start nav:		"sr2_mp_gb_tokho1_$r001"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"sr2_mp_gb_tokho1_$r002"
$Start nav:		"sr2_mp_gb_tokho1_$r002"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"sr2_mp_gb_tokho1_$r003"
$Start nav:		"sr2_mp_gb_tokho1_$r003"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"sr2_mp_gb_tokho1_$r004"
$Start nav:		"sr2_mp_gb_tokho1_$r004"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"sr2_mp_gb_tokho1_$r005"
$Start nav:		"sr2_mp_gb_tokho1_$r005"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"sr2_mp_gb_tokho1_$r006"
$Start nav:		"sr2_mp_gb_tokho1_$r006"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"sr2_mp_gb_tokho1_$r007"
$Start nav:		"sr2_mp_gb_tokho1_$r007"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000


// -------
#Humans
// -------

// -------
#Spawn NPC Regions
// -------

// -------
#Action Nodes
// -------

// -------
#Parking
// -------

// -------
#Chunk Streaming Test Cases
// -------

// -------
#Ambients
// -------

// ----------
#DSP Regions
// ----------

// -------------
#Audio Cluders
// -------------

// -------
#Nodes
// -------

// -------
#Searchlights
// -------

// -------
#Movers
// -------

// -------
#Interiors
// -------


#End
