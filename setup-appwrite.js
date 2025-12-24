import { Client, Databases, ID } from 'node-appwrite';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const PROJECT_ID = '694baa54000d036307be';
const API_KEY = process.env.APPWRITE_API_KEY;

if (!API_KEY) {
  console.error('❌ Please set APPWRITE_API_KEY in .env file');
  console.log('\n📝 Steps:');
  console.log('1. Go to https://cloud.appwrite.io/console/project-694baa54000d036307be/settings');
  console.log('2. Go to "API Keys" section');
  console.log('3. Create a new API key with all permissions');
  console.log('4. Copy the key and add to .env file: APPWRITE_API_KEY=your-key-here');
  process.exit(1);
}

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(PROJECT_ID)
  .setKey(API_KEY);

const databases = new Databases(client);

async function setupAppwrite() {
  try {
    console.log('🚀 Starting Appwrite setup...\n');

    // Create Database
    console.log('📦 Creating database...');
    const database = await databases.create(
      ID.unique(),
      'minecraft'
    );
    const DATABASE_ID = database.$id;
    console.log(`✅ Database created: ${DATABASE_ID}\n`);

    // Create Collection
    console.log('📋 Creating tasks collection...');
    const collection = await databases.createCollection(
      DATABASE_ID,
      ID.unique(),
      'tasks'
    );
    const COLLECTION_ID = collection.$id;
    console.log(`✅ Collection created: ${COLLECTION_ID}\n`);

    // Create Attributes
    console.log('🏗️  Creating attributes...');
    
    await databases.createStringAttribute(DATABASE_ID, COLLECTION_ID, 'title', 500, true);
    console.log('  ✓ title');
    
    await databases.createStringAttribute(DATABASE_ID, COLLECTION_ID, 'category', 100, true);
    console.log('  ✓ category');
    
    await databases.createStringAttribute(DATABASE_ID, COLLECTION_ID, 'assignedTo', 100, true);
    console.log('  ✓ assignedTo');
    
    await databases.createStringAttribute(DATABASE_ID, COLLECTION_ID, 'role', 100, false);
    console.log('  ✓ role');
    
    await databases.createBooleanAttribute(DATABASE_ID, COLLECTION_ID, 'completed', false);
    console.log('  ✓ completed');
    
    await databases.createIntegerAttribute(DATABASE_ID, COLLECTION_ID, 'priority', false);
    console.log('  ✓ priority\n');

    console.log('⏳ Waiting for attributes to be ready (30 seconds)...');
    await new Promise(resolve => setTimeout(resolve, 30000));

    // Update .env.local
    const envContent = `# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=${PROJECT_ID}
VITE_APPWRITE_DATABASE_ID=${DATABASE_ID}
VITE_APPWRITE_COLLECTION_ID=${COLLECTION_ID}
`;

    const fs = await import('fs');
    fs.writeFileSync(join(__dirname, 'mc', '.env.local'), envContent);
    console.log('✅ Updated mc/.env.local\n');

    console.log('🎉 Setup complete!');
    console.log(`\n📝 IDs:`);
    console.log(`   PROJECT_ID:    ${PROJECT_ID}`);
    console.log(`   DATABASE_ID:   ${DATABASE_ID}`);
    console.log(`   COLLECTION_ID: ${COLLECTION_ID}`);
    console.log(`\n🌱 Run "node seed-appwrite.js" to populate tasks`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.code === 409) {
      console.log('\n💡 Database or collection might already exist. Check your Appwrite console.');
    }
  }
}

setupAppwrite();
