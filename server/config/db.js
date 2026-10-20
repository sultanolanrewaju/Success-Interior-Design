import mongoose from 'mongoose';
import dotenv from 'dotenv/config';

// Ensure dotenv loads the .env file variables into process.env
// dotenv.config();

export const ConnectDB = async () => {
  try {
    // Read the environment variable (supporting both lowercase and uppercase naming)
    const nodeEnv = process.env.NODE_ENV || process.env.node_env || 'development';
    
    let MONGO_URI;

    if (nodeEnv === 'development') {
      MONGO_URI = process.env.MONGO_URI_DEV;
      console.log('🔗 Mode: Development (Using Dev Database)');
    } else if (nodeEnv === 'deployment') {
      MONGO_URI = process.env.MONGO_URI;
      console.log('🚀 Mode: Deployment (Using Atlas Production Database)');
    } else {
      console.log(`⚠️ Unknown environment "${nodeEnv}", falling back to Development.`);
      MONGO_URI = process.env.MONGO_URI_DEV;
    }

    if (!MONGO_URI) {
      throw new Error(`MongoDB URI is missing for environment: ${nodeEnv}`);
    }

    console.log(MONGO_URI)
    // Connect to MongoDB
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`✅ MongoDB Connected Successfully: ${conn.connection.host}`);
    
  } catch (error) {
    console.error(`❌ Database Connection Failed: ${error.message}`);
    process.exit(1);
  }
};