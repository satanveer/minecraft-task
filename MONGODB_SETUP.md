# MongoDB Atlas Data API Setup

## Steps to Enable Data API:

1. Go to MongoDB Atlas: https://cloud.mongodb.com
2. Select your cluster → Data API (left sidebar)
3. Enable Data API
4. Create an API Key
5. Copy the following:
   - **App ID** (from the endpoint URL)
   - **API Key** (the key you just created)

## Environment Variables for Cloudflare Pages:

Add these in Cloudflare Pages settings:

```
VITE_DATA_API_URL=https://data.mongodb-api.com/app/YOUR-APP-ID/endpoint/data/v1
VITE_DATA_API_KEY=your-api-key-here
```

## Local Development (.env file in /mc folder):

Create `mc/.env.local`:
```
VITE_DATA_API_URL=https://data.mongodb-api.com/app/YOUR-APP-ID/endpoint/data/v1
VITE_DATA_API_KEY=your-api-key-here
```

## Security Note:
The API key will be exposed in the frontend. Set access restrictions in MongoDB Atlas:
- Limit to specific IP addresses (if possible)
- Set read/write permissions only for the 'tasks' collection
- Enable request validation rules in Atlas

The backend folder is no longer needed for deployment!
