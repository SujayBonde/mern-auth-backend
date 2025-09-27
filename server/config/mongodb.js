import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  const uri = process.env.MONGODB_URI; // ✅ Must match .env key exactly

  console.log('MongoDB URI:', uri); // ✅ Should print the full URI

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ Connection error:', error);
  }
};

export default connectDB;