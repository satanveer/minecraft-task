import { Client, Databases, Permission, Role } from 'node-appwrite';
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

async function fixPermissions() {
  try {
    console.log('🔧 Fixing collection permissions...\n');

    // Update collection to allow public access
    await databases.updateCollection(
      databaseId,
      collectionId,
      'tasks',
      [
        Permission.read(Role.any()),
        Permission.create(Role.any()),
        Permission.update(Role.any()),
        Permission.delete(Role.any())
      ]
    );

    console.log('✅ Permissions updated successfully!');
    console.log('\n📝 Collection now allows:');
    console.log('  ✓ Anyone can read documents');
    console.log('  ✓ Anyone can create documents');
    console.log('  ✓ Anyone can update documents');
    console.log('  ✓ Anyone can delete documents');
    console.log('\n🎉 Try refreshing your frontend now!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

fixPermissions();
