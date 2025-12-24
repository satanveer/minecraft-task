import { Client, Databases, ID } from 'node-appwrite';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const envLocal = fs.readFileSync(join(__dirname, 'mc', '.env.local'), 'utf8');
const projectId = envLocal.match(/VITE_APPWRITE_PROJECT_ID=(.*)/)[1];
const databaseId = envLocal.match(/VITE_APPWRITE_DATABASE_ID=(.*)/)[1];
const collectionId = envLocal.match(/VITE_APPWRITE_COLLECTION_ID=(.*)/)[1];

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(projectId)
  .setKey(process.env.APPWRITE_API_KEY);

const databases = new Databases(client);

const tasks = [
  // === TANVEER - MASTER OF EXPLORATION & RESOURCES ===
  { title: "Dig starter mine entrance with lighting (right-hand rule)", category: "Quick Start", assignedTo: "Tanveer", role: "Master of Exploration", priority: 10, completed: false },
  { title: "Gather 64 iron ore and smelt for team distribution", category: "Quick Start", assignedTo: "Tanveer", role: "Master of Exploration", priority: 10, completed: false },
  { title: "Mark spawn coordinates and establish cardinal direction paths", category: "Quick Start", assignedTo: "Tanveer", role: "Master of Exploration", priority: 9, completed: false },
  { title: "Build underground storage room with labeled chests (ores, stone, tools)", category: "Early Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Create safe mining station with beds, crafting table, and furnaces", category: "Early Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Craft full iron sets for all 5 players", category: "Early Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Find and document first village location with coordinates", category: "Early Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Establish strip mine at Y-level -54 for diamonds", category: "Early Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Build industrial mining complex with 10+ furnaces", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Organize mega storage system (cobble/stone, ores, valuables, mob drops)", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Scout and map 3+ biomes for resource diversity (dark oak, jungle, desert, mesa)", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Create overworld highway system with lit markers to key locations", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Establish Nether portal network for fast travel", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Stock communal 'Emergency Supplies' chest with food, tools, torches", category: "Mid Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Lead End expedition - find stronghold and prepare portal", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Collect elytra and shulker boxes for entire team", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Build perimeter defense walls with watchtowers around capital", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Create netherite upgrade station and craft sets for all players", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Build War Room with interactive map wall showing all territories", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },
  { title: "Maintain team gear vault with backup equipment sets", category: "Late Game", assignedTo: "Tanveer", role: "Master of Exploration", completed: false },

  // === ARPIT - LORD OF FARMS & AUTOMATION ===
  { title: "Capture and pen 2 of each: cows, sheep, chickens, pigs", category: "Quick Start", assignedTo: "Arpit", role: "Lord of Farms", priority: 10, completed: false },
  { title: "Plant initial wheat farm (2x 9×9 plots with water center)", category: "Quick Start", assignedTo: "Arpit", role: "Lord of Farms", priority: 10, completed: false },
  { title: "Set up 'Food for All' community chest near farms", category: "Quick Start", assignedTo: "Arpit", role: "Lord of Farms", priority: 9, completed: false },
  { title: "Fence farm district perimeter and build main barn entrance", category: "Early Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Expand to 4 crop types (wheat, carrots, potatoes, beetroot)", category: "Early Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Build animal breeding station with separate pens for each type", category: "Early Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Start composting system for bone meal production", category: "Early Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Plant tree farm with all sapling types collected by team", category: "Early Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Build automatic sugarcane farm (observer + piston system)", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Create pumpkin/melon farm with auto-harvest mechanism", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Build mob grinder (spawner or dark room) for XP and drops", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Establish villager trading hall - capture and cure 6+ villagers", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Get key trades: librarians (mending, silk touch), farmers, toolsmiths", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Build honey farm with beehives for automated honey collection", category: "Mid Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Build iron farm for unlimited iron ingots", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Create gold farm in Nether for XP and gold ingots", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Build central item sorting system with auto-storage", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Design and build automatic street lighting (daylight sensors)", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Create hidden vault with secret redstone piston door entrance", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Establish server economy - set currency and create shop system", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },
  { title: "Host weekly trading events, auctions, and gambling games", category: "Late Game", assignedTo: "Arpit", role: "Lord of Farms", completed: false },

  // === MUKUL - GRAND ARCHITECT & CITY DESIGNER ===
  { title: "Build central plaza with fountain/campfire and seating areas", category: "Quick Start", assignedTo: "Mukul", role: "Grand Architect", priority: 10, completed: false },
  { title: "Place notice board with quest signs and welcome message", category: "Quick Start", assignedTo: "Mukul", role: "Grand Architect", priority: 10, completed: false },
  { title: "Establish main road grid (N/S/E/W) connecting all future districts", category: "Quick Start", assignedTo: "Mukul", role: "Grand Architect", priority: 9, completed: false },
  { title: "Design and build Tanveer's house (warrior/explorer theme with gear)", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Design and build Arpit's house (farm/redstone theme with crops)", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Design and build Mukul's house (architect studio with materials)", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Design and build Sunny's house (admin tower with server utilities)", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Design and build Mehul's house (creative theme reflecting his style)", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Create uniform path system with lanterns and decorative fences", category: "Early Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Develop residential district with 5+ additional houses", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Build enchanting tower with full 15-bookshelf setup", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Create potion laboratory with brewing stands and ingredient storage", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Design decorative Nether portal shrine as town landmark", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Build docks district with piers, boats, and fishing shacks", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Construct lighthouse as navigational beacon and landmark", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Add aesthetic touches: gardens, fountains, statues, banners", category: "Mid Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Build grand castle overlooking town with multiple towers", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Design throne room for ceremonial events", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Build museum showcasing rare items, dragon egg, and server history", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Create library with written books documenting server lore", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Build PvP arena with spectator stands for tournaments", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Design parkour course integrated into city architecture", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Build dungeon/catacombs beneath castle for exploration", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },
  { title: "Create decorative NPC scenes with armor stands and signs", category: "Late Game", assignedTo: "Mukul", role: "Grand Architect", completed: false },

  // === MEHUL - THE VERSATILE PIONEER ===
  { title: "Build emergency shelter with beds and supplies for the team", category: "Quick Start", assignedTo: "Mehul", role: "Versatile Pioneer", priority: 10, completed: false },
  { title: "Gather mixed starter resources: wood, food, stone, and basic tools", category: "Quick Start", assignedTo: "Mehul", role: "Versatile Pioneer", priority: 10, completed: false },
  { title: "Scout nearby areas and mark interesting locations (caves, villages, biomes)", category: "Quick Start", assignedTo: "Mehul", role: "Versatile Pioneer", priority: 9, completed: false },
  { title: "Build community workshop with shared crafting tables and tools", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Help Arpit set up animal breeding - gather wheat and leads", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Assist Mukul with gathering decorative blocks (flowers, vines, colored terracotta)", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Create mob-proof safe paths connecting all districts with torches", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Build fishing dock and start fishing for food and treasure", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Collect and organize team's excess materials into community chests", category: "Early Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Build multi-purpose utility building (anvils, grindstone, smithing table, loom)", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Help Tanveer with Nether exploration - gather quartz and basalt", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Create XP bank system with enchanting area and bottle o' enchanting storage", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Build firework launch tower for celebrations and elytra testing", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Design and build town's market stalls for player trading", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Hunt for rare items: saddles, horse armor, name tags from structures", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Build automatic kelp/seaweed farm for fuel and food", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Create potion station with brewing stands and organized ingredients", category: "Mid Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Assist with Ender Dragon fight - bring potions and backup gear", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Build End city raiding gear and shulker box collection mission", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Create innovation lab - test new redstone contraptions and building techniques", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Build automated chicken farm for food and feather supplies", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Design obstacle course with all game mechanics (swimming, climbing, flying)", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Establish secondary base in extreme biome (ice spikes, mesa, mushroom)", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Create server time capsule - collect one item from each player's build", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },
  { title: "Build secret hideout with hidden entrances and treasure storage", category: "Late Game", assignedTo: "Mehul", role: "Versatile Pioneer", completed: false },

  // === SUNNY - SERVER ADMIN & EVENT COORDINATOR ===
  { title: "Configure server whitelist and player permissions", category: "Quick Start", assignedTo: "Sunny", role: "Server Admin", priority: 10, completed: false },
  { title: "Set spawn protection and establish server rules board", category: "Quick Start", assignedTo: "Sunny", role: "Server Admin", priority: 10, completed: false },
  { title: "Create backup schedule and test world save system", category: "Quick Start", assignedTo: "Sunny", role: "Server Admin", priority: 9, completed: false },
  { title: "Build admin tower with server control room", category: "Early Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Set up player information board with coordinates and rules", category: "Early Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Monitor server performance and optimize settings", category: "Early Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Create starter kit system for new players", category: "Early Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Establish Nether portal hub with clear signage to all destinations", category: "Mid Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Coordinate weekly server backups and world downloads", category: "Mid Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Build spawn area improvements and welcome center", category: "Mid Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Create community bulletin board with weekly quests", category: "Mid Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Monitor and repair any grief or accidental damage", category: "Mid Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Schedule and host boss fight events (Dragon, Wither)", category: "Late Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Organize seasonal building competitions with prizes", category: "Late Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Create Hall of Fame showcasing player achievements", category: "Late Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Run weekly events: treasure hunts, races, build challenges", category: "Late Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Maintain server lag checks and optimize entity counts", category: "Late Game", assignedTo: "Sunny", role: "Server Admin", completed: false },
  { title: "Document server timeline and create anniversary celebrations", category: "Late Game", assignedTo: "Sunny", role: "Server Admin", completed: false },

  // === TEAM PROJECTS - EVERYONE TOGETHER ===
  { title: "Choose capital location (plains/hills near multiple biomes)", category: "Joint Projects", assignedTo: "All", priority: 10, completed: false },
  { title: "Mark town center and lay out district zones with logs/signs", category: "Joint Projects", assignedTo: "All", priority: 10, completed: false },
  { title: "Build town hall for team meetings and decision making", category: "Joint Projects", assignedTo: "All", priority: 8, completed: false },
  { title: "Ender Dragon raid - prepare gear, potions, and strategy", category: "Joint Projects", assignedTo: "All", completed: false },
  { title: "Post-dragon celebration - build End memorial and display egg", category: "Joint Projects", assignedTo: "All", completed: false },
  { title: "Ocean Monument expedition - prepare water breathing and clear monument", category: "Joint Projects", assignedTo: "All", completed: false },
  { title: "Create community resource pool for shared materials", category: "Joint Projects", assignedTo: "All", completed: false },
  { title: "Weekly co-op build night (2 hours) to work on town together", category: "Joint Projects", assignedTo: "All", completed: false },
  { title: "Seasonal decoration updates (winter, spring, summer, autumn)", category: "Joint Projects", assignedTo: "All", completed: false },
  { title: "Build community garden and picnic area near town center", category: "Joint Projects", assignedTo: "All", completed: false },
  { title: "Create server photo wall with memorable screenshots", category: "Joint Projects", assignedTo: "All", completed: false },
  { title: "Host monthly town meetings to plan next projects", category: "Joint Projects", assignedTo: "All", completed: false },
];

async function seedTasks() {
  try {
    console.log('🌱 Starting task seeding...\n');
    console.log(`📊 Total tasks to import: ${tasks.length}\n`);

    let successCount = 0;
    let errorCount = 0;

    for (const task of tasks) {
      try {
        await databases.createDocument(
          databaseId,
          collectionId,
          ID.unique(),
          task
        );
        successCount++;
        process.stdout.write(`\r✅ Imported: ${successCount}/${tasks.length}`);
      } catch (error) {
        errorCount++;
        console.error(`\n❌ Error importing task: ${task.title}`);
        console.error(error.message);
      }
    }

    console.log(`\n\n🎉 Seeding complete!`);
    console.log(`✅ Successfully imported: ${successCount}`);
    if (errorCount > 0) {
      console.log(`❌ Failed: ${errorCount}`);
    }

  } catch (error) {
    console.error('❌ Seeding error:', error.message);
  }
}

seedTasks();
