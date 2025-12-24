# Tri-Kingdom Survival Server - Task Tracker

A full-stack web application to track Minecraft server tasks for Tanveer, Arpit, and Mukul.

## Features

- ✅ Task checklist with real-time updates
- 🎮 Filter by player (Tanveer, Arpit, Mukul)
- 📊 Filter by game stage (Quick Start, Early/Mid/Late Game, Joint Projects)
- 📈 Progress tracking for each player
- 🎨 Minecraft-themed design
- 💾 MongoDB Atlas cloud database

## Setup Instructions

### 1. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Create a database user with password

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/minecraft-tasks?retryWrites=true&w=majority
PORT=5000
```

Seed the database with tasks:
```bash
npm run seed
```

Start the backend server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

### 3. Frontend Setup

```bash
cd mc
npm install
```

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Usage

1. Make sure MongoDB Atlas is configured and backend is running
2. Run the seed script to populate tasks
3. Start the frontend
4. Filter tasks by player or game stage
5. Check off tasks as you complete them!

## Tech Stack

**Frontend:**
- React 19
- Axios
- Vite

**Backend:**
- Node.js
- Express
- MongoDB with Mongoose
- CORS

## API Endpoints

- `GET /api/tasks` - Get all tasks (with optional filters)
- `GET /api/tasks/:id` - Get single task
- `POST /api/tasks` - Create new task
- `PATCH /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `GET /api/tasks/stats/summary` - Get progress statistics

## Project Structure

```
minecraft-tasks/
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── seed.js
│   └── package.json
├── mc/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
└── plan.md
```

## Players & Roles

- **Tanveer** - Warden of Industry & Exploration
- **Arpit** - Lord of Farms & Redstone
- **Mukul** - Architect & City Planner
