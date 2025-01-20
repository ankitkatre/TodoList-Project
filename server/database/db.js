import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todolistcluster.t75bb.mongodb.net/?retryWrites=true&w=majority&appName=todolistcluster`;

  // Correct the option and remove unnecessary deprecated options
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('Database is connected successfully'))
    .catch((error) => console.error('Error while connecting with the database:', error.message));

  mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
  });

  mongoose.connection.on('error', (error) => {
    console.error('Database connection error:', error.message);
  });
};

export default Connection;
