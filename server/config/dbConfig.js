// import mongoose from 'mongoose';
// import dotenv from 'dotenv'

// // Initializing the environment configurations required for the project
// dotenv.config();

// //connecting mongodb
// mongoose.connect(String(process.env.MONGO_HOST))
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log("Failed to connect", err);
//   });

// export default mongoose;

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Disable strict query mode
mongoose.set('strictQuery', false);

const connectToDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(
      `mongodb+srv://techshravand:${process.env.DATABASE_PASSWORD}@enzigma.nwky1.mongodb.net/?retryWrites=true&w=majority&appName=Enzigma`
    );
    console.log(`Connected to Database: ${connection.host}`);
  } catch (err) {
    console.error("Failed to connect to the database", err);
  }
};

export default connectToDatabase;
