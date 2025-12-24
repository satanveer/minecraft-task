import { Client, Databases, ID } from 'node-appwrite';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client()
  .setEndpoint(process.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.VITE_APPWRITE_PROJECT_ID || '')
  .setKey(process.env.APPWRITE_API_KEY || '');

const databases = new Databases(client);
const DATABASE_ID = process.env.VITE_APPWRITE_DATABASE_ID || '';
const COLLECTION_ID = process.env.VITE_APPWRITE_COLLECTION_ID || '';

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

  // Add all other players' tasks here (Mukul, Mehul, Sunny, Joint Projects)
  // I'll add just a few more for brevity...
  
  { title: "Build central plaza with fountain/campfire and seating areas", category: "Quick Start", assignedTo: "Mukul", role: "Grand Architect", priority: 10, completed: false },
  { title: "Place notice board with quest signs and welcome message", category: "Quick Start", assignedTo: "Mukul", role: "Grand Architect", priority: 10, completed: false },
  
  { title: "Build emergency shelter with beds and supplies for the team", category: "Quick Start", assignedTo: "Mehul", role: "Versatile Pioneer", priority: 10, completed: false },
  { title: "Gather mixed starter resources: wood, food, stone, and basic tools", category: "Quick Start", assignedTo: "Mehul", role: "Versatile Pioneer", priority: 10, completed: false },
  
  { title: "Configure server whitelist and player permissions", category: "Quick Start", assignedTo: "Sunny", role: "Server Admin", priority: 10, completed: false },
  { title: "Set spawn protection and establish server rules board", category: "Quick Start", assignedTo: "Sunny", role: "Server Admin", priority: 10, completed: false },
  
  { title: "Choose capital location (plains/hills near multiple biomes)", category: "Joint Projects", assignedTo: "All", priority: 10, completed: false },
  { title: "Mark town center and lay out district zones with logs/signs", category: "Joint Projects", assignedTo: "All", priority: 10, completed: false },
];

async function seedAppwrite() {
  try {
    console.log('🚀 Starting Appwrite seed...');
    
    // Clear existing documents (optional)
    try {
      const existing = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
      for (const doc of existing.documents) {
        await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, doc.$id);
      }
      console.log('🗑️  Cleared existing documents');
    } catch (error) {
      console.log('No existing documents to clear');
    }
    
    // Insert all tasks
    let count = 0;
    for (const task of tasks) {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        task
      );
      count++;
    }
    
    console.log(`✅ Successfully seeded ${count} tasks to Appwrite`);
  } catch (error) {
    console.error('❌ Error seeding Appwrite:', error);
  }
}

seedAppwrite();
