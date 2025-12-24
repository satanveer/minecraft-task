# Appwrite Setup Guide

## 1. Create Database & Collection in Appwrite

1. Go to your Appwrite Console
2. Create a new Database:
   - Name: `minecraft-tasks`
   - Copy the Database ID

3. Create a Collection:
   - Name: `tasks`
   - Copy the Collection ID

4. Add Attributes to the Collection:
   - `title` (String, 500 characters, required)
   - `category` (String, 50 characters, required)
   - `assignedTo` (String, 50 characters, required)
   - `role` (String, 100 characters)
   - `priority` (Integer)
   - `completed` (Boolean, default: false, required)

5. Set Permissions:
   - Go to Settings → Permissions
   - Add Role: `Any`
   - Enable: Read, Create, Update (for anyone to use the app)

## 2. Environment Variables

Add these in Cloudflare Pages:

```
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_COLLECTION_ID=your-collection-id
```

For local development, create `mc/.env.local` with the same variables.

## 3. Seed Data

Use the Appwrite console to import data, or create a seed script using the Appwrite Node SDK from the `backend/seed.js` data.

You're all set! Deploy to Cloudflare Pages and it will work perfectly! 🚀
