// -------
#Includes
// -------

$Include: "amb_underground.cts"

// -------
#Groups
// -------

// -------
#Navpoints
// -------

$Navpoint:	"sr2_mp_gb_pyramS_$r000"
$Type:		"ground"
$Pos:			<992.664734 -28.657063 189.3>
$Orient:		[-2.061546]

$Navpoint:	"sr2_mp_gb_pyramS_$r001"
$Type:		"ground"
$Pos:			<992.664734 -28.657063 189.3>
$Orient:		[-1.607308]

$Navpoint:	"sr2_mp_gb_pyramS_$warp1Enter"
$Type:		"ground"
$Pos:			<1056.769 -29.001 232.394>
$Orient:		[-1.607308]

$Navpoint:	"sr2_mp_gb_pyramS_$warp1Exit"
$Type:		"ground"
$Pos:			<1190.334 -18.167 -4.751>
$Orient:		[0.1]

$Navpoint:	"sr2_mp_gb_pyramS_$warp2Enter"
$Type:		"ground"
$Pos:			<1195.749 -16.187 -19.446>
$Orient:		[-1.607308]

$Navpoint:	"sr2_mp_gb_pyramS_$warp2Exit"
$Type:		"ground"
$Pos:			<1049.510 -29.001 228.624>
$Orient:		[-1.607308]

// -------
#Paths
// -------

// -------
#Items
// -------

// -------
#Triggers
// -------

$Trigger:		"sr2_mp_gb_pyramS_$warp1Enter"
$Trigger type:			"sphere"
$Trigger action:	"warp"
$Trigger max fires:	0
$Trigger delay:		1
$Start nav:		"sr2_mp_gb_pyramS_$warp1Enter"
$Sphere radius:		6.300000
+Warp Nav:		"sr2_mp_gb_pyramS_$warp1Exit"

$Trigger:		"sr2_mp_gb_pyramS_$warp2Enter"
$Trigger type:			"sphere"
$Trigger action:	"warp"
$Trigger max fires:	0
$Trigger delay:		1
$Start nav:		"sr2_mp_gb_pyramS_$warp2Enter"
$Sphere radius:		7.000000
+Warp Nav:		"sr2_mp_gb_pyramS_$warp2Exit"

// -------
#Vehicles
// -------

// -------
#Respawns
// -------

$Respawn:		"sr2_mp_gb_pyramS_$r000"
$Start nav:		"sr2_mp_gb_pyramS_$r000"
$Box size:		-2.000000 0.000000 -2.000000 2.000000 2.000000 2.000000

$Respawn:		"sr2_mp_gb_pyramS_$r001"
$Start nav:		"sr2_mp_gb_pyramS_$r001"
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
