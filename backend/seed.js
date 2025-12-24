import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Task from './models/Task.js';

dotenv.config();

const tasks = [
  // === TANVEER - MASTER OF EXPLORATION & RESOURCES ===
  // Quick Start
  { title: "Dig starter mine entrance with lighting (right-hand rule)", category: "Quick Start", assignedTo: "Tanveer", role: "Master of Exploration", priority: 10 },
  { title: "Gather 64 iron ore and smelt for team distribution", category: "Quick Start", assignedTo: "Tanveer", role: "Master of Exploration", priority: 10 },
  { title: "Mark spawn coordinates and establish cardinal direction paths", category: "Quick Start", assignedTo: "Tanveer", role: "Master of Exploration", priority: 9 },
  
  // Early Game
  { title: "Build underground storage room with labeled chests (ores, stone, tools)", category: "Early Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Create safe mining station with beds, crafting table, and furnaces", category: "Early Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Craft full iron sets for all 5 players", category: "Early Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Find and document first village location with coordinates", category: "Early Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Establish strip mine at Y-level -54 for diamonds", category: "Early Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  
  // Mid Game
  { title: "Build industrial mining complex with 10+ furnaces", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Organize mega storage system (cobble/stone, ores, valuables, mob drops)", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Scout and map 3+ biomes for resource diversity (dark oak, jungle, desert, mesa)", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Create overworld highway system with lit markers to key locations", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Establish Nether portal network for fast travel", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Stock communal 'Emergency Supplies' chest with food, tools, torches", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  
  // Late Game
  { title: "Lead End expedition - find stronghold and prepare portal", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Collect elytra and shulker boxes for entire team", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Build perimeter defense walls with watchtowers around capital", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Create netherite upgrade station and craft sets for all players", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Build War Room with interactive map wall showing all territories", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration" },
  { title: "Maintain team gear vault with backup equipment sets", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration" },

  // === ARPIT - LORD OF FARMS & AUTOMATION ===
  // Quick Start
  { title: "Capture and pen 2 of each: cows, sheep, chickens, pigs", category: "Quick Start", assignedTo: "Arpit", role: "Lord of Farms", priority: 10 },
  { title: "Plant initial wheat farm (2x 9×9 plots with water center)", category: "Quick Start", assignedTo: "Arpit", role: "Lord of Farms", priority: 10 },
  { title: "Set up 'Food for All' community chest near farms", category: "Quick Start", assignedTo: "Arpit", role: "Lord of Farms", priority: 9 },
  
  // Early Game
  { title: "Fence farm district perimeter and build main barn entrance", category: "Early Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Expand to 4 crop types (wheat, carrots, potatoes, beetroot)", category: "Early Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Build animal breeding station with separate pens for each type", category: "Early Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Start composting system for bone meal production", category: "Early Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Plant tree farm with all sapling types collected by team", category: "Early Game", assignedTo: "Arpit", role: "Lord of Farms" },
  
  // Mid Game
  { title: "Build automatic sugarcane farm (observer + piston system)", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Create pumpkin/melon farm with auto-harvest mechanism", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Build mob grinder (spawner or dark room) for XP and drops", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Establish villager trading hall - capture and cure 6+ villagers", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Get key trades: librarians (mending, silk touch), farmers, toolsmiths", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Build honey farm with beehives for automated honey collection", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms" },
  
  // Late Game
  { title: "Build iron farm for unlimited iron ingots", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Create gold farm in Nether for XP and gold ingots", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Build central item sorting system with auto-storage", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Design and build automatic street lighting (daylight sensors)", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Create hidden vault with secret redstone piston door entrance", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Establish server economy - set currency and create shop system", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms" },
  { title: "Host weekly trading events, auctions, and gambling games", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms" },

  // === MUKUL - GRAND ARCHITECT & CITY DESIGNER ===
  // Quick Start
  { title: "Build central plaza with fountain/campfire and seating areas", category: "Quick Start", assignedTo: "Mukul", role: "Grand Architect", priority: 10 },
  { title: "Place notice board with quest signs and welcome message", category: "Quick Start", assignedTo: "Mukul", role: "Grand Architect", priority: 10 },
  { title: "Establish main road grid (N/S/E/W) connecting all future districts", category: "Quick Start", assignedTo: "Mukul", role: "Grand Architect", priority: 9 },
  
  // Early Game
  { title: "Design and build Tanveer's house (warrior/explorer theme with gear)", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Design and build Arpit's house (farm/redstone theme with crops)", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Design and build Mukul's house (architect studio with materials)", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Design and build Sunny's house (admin tower with server utilities)", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Design and build Mehul's house (creative theme reflecting his style)", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Create uniform path system with lanterns and decorative fences", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect" },
  
  // Mid Game
  { title: "Develop residential district with 5+ additional houses", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Build enchanting tower with full 15-bookshelf setup", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Create potion laboratory with brewing stands and ingredient storage", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Design decorative Nether portal shrine as town landmark", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Build docks district with piers, boats, and fishing shacks", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Construct lighthouse as navigational beacon and landmark", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Add aesthetic touches: gardens, fountains, statues, banners", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect" },
  
  // Late Game
  { title: "Build grand castle overlooking town with multiple towers", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Design throne room for ceremonial events", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Build museum showcasing rare items, dragon egg, and server history", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Create library with written books documenting server lore", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Build PvP arena with spectator stands for tournaments", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Design parkour course integrated into city architecture", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Build dungeon/catacombs beneath castle for exploration", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect" },
  { title: "Create decorative NPC scenes with armor stands and signs", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect" },

  // === MEHUL - THE VERSATILE PIONEER ===
  // Quick Start
  { title: "Build emergency shelter with beds and supplies for the team", category: "Quick Start", assignedTo: "Mehul", role: "Versatile Pioneer", priority: 10 },
  { title: "Gather mixed starter resources: wood, food, stone, and basic tools", category: "Quick Start", assignedTo: "Mehul", role: "Versatile Pioneer", priority: 10 },
  { title: "Scout nearby areas and mark interesting locations (caves, villages, biomes)", category: "Quick Start", assignedTo: "Mehul", role: "Versatile Pioneer", priority: 9 },
  
  // Early Game
  { title: "Build community workshop with shared crafting tables and tools", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Help Arpit set up animal breeding - gather wheat and leads", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Assist Mukul with gathering decorative blocks (flowers, vines, colored terracotta)", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Create mob-proof safe paths connecting all districts with torches", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Build fishing dock and start fishing for food and treasure", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Collect and organize team's excess materials into community chests", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  
  // Mid Game
  { title: "Build multi-purpose utility building (anvils, grindstone, smithing table, loom)", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Help Tanveer with Nether exploration - gather quartz and basalt", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Create XP bank system with enchanting area and bottle o' enchanting storage", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Build firework launch tower for celebrations and elytra testing", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Design and build town's market stalls for player trading", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Hunt for rare items: saddles, horse armor, name tags from structures", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Build automatic kelp/seaweed farm for fuel and food", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Create potion station with brewing stands and organized ingredients", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  
  // Late Game
  { title: "Assist with Ender Dragon fight - bring potions and backup gear", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Build End city raiding gear and shulker box collection mission", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Create innovation lab - test new redstone contraptions and building techniques", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Build automated chicken farm for food and feather supplies", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Design obstacle course with all game mechanics (swimming, climbing, flying)", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Establish secondary base in extreme biome (ice spikes, mesa, mushroom)", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Create server time capsule - collect one item from each player's build", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer" },
  { title: "Build secret hideout with hidden entrances and treasure storage", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer" },

  // === SUNNY - SERVER ADMIN & EVENT COORDINATOR ===
  // Quick Start
  { title: "Configure server whitelist and player permissions", category: "Quick Start", assignedTo: "Sunny", role: "Server Admin", priority: 10 },
  { title: "Set spawn protection and establish server rules board", category: "Quick Start", assignedTo: "Sunny", role: "Server Admin", priority: 10 },
  { title: "Create backup schedule and test world save system", category: "Quick Start", assignedTo: "Sunny", role: "Server Admin", priority: 9 },
  
  // Early Game
  { title: "Build admin tower with server control room", category: "Early Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Set up player information board with coordinates and rules", category: "Early Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Monitor server performance and optimize settings", category: "Early Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Create starter kit system for new players", category: "Early Game", assignedTo: "Sunny", role: "Server Admin" },
  
  // Mid Game
  { title: "Establish Nether portal hub with clear signage to all destinations", category: "Mid Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Coordinate weekly server backups and world downloads", category: "Mid Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Build spawn area improvements and welcome center", category: "Mid Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Create community bulletin board with weekly quests", category: "Mid Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Monitor and repair any grief or accidental damage", category: "Mid Game", assignedTo: "Sunny", role: "Server Admin" },
  
  // Late Game  
  { title: "Schedule and host boss fight events (Dragon, Wither)", category: "Late Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Organize seasonal building competitions with prizes", category: "Late Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Create Hall of Fame showcasing player achievements", category: "Late Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Run weekly events: treasure hunts, races, build challenges", category: "Late Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Maintain server lag checks and optimize entity counts", category: "Late Game", assignedTo: "Sunny", role: "Server Admin" },
  { title: "Document server timeline and create anniversary celebrations", category: "Late Game", assignedTo: "Sunny", role: "Server Admin" },

  // === TEAM PROJECTS - EVERYONE TOGETHER ===
  { title: "Choose capital location (plains/hills near multiple biomes)", category: "Joint Projects", assignedTo: "All", priority: 10 },
  { title: "Mark town center and lay out district zones with logs/signs", category: "Joint Projects", assignedTo: "All", priority: 10 },
  { title: "Build town hall for team meetings and decision making", category: "Joint Projects", assignedTo: "All", priority: 8 },
  { title: "Ender Dragon raid - prepare gear, potions, and strategy", category: "Joint Projects", assignedTo: "All" },
  { title: "Post-dragon celebration - build End memorial and display egg", category: "Joint Projects", assignedTo: "All" },
  { title: "Ocean Monument expedition - prepare water breathing and clear monument", category: "Joint Projects", assignedTo: "All" },
  { title: "Create community resource pool for shared materials", category: "Joint Projects", assignedTo: "All" },
  { title: "Weekly co-op build night (2 hours) to work on town together", category: "Joint Projects", assignedTo: "All" },
  { title: "Seasonal decoration updates (winter, spring, summer, autumn)", category: "Joint Projects", assignedTo: "All" },
  { title: "Build community garden and picnic area near town center", category: "Joint Projects", assignedTo: "All" },
  { title: "Create server photo wall with memorable screenshots", category: "Joint Projects", assignedTo: "All" },
  { title: "Host monthly town meetings to plan next projects", category: "Joint Projects", assignedTo: "All" },
];


async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas');

    // Clear existing tasks
    await Task.deleteMany({});
    console.log('🗑️  Cleared existing tasks');

    // Insert new tasks
    const result = await Task.insertMany(tasks);
    console.log(`✅ Successfully seeded ${result.length} tasks`);

    mongoose.connection.close();
    console.log('👋 Database connection closed');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
