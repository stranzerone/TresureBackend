import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { routes } from './routes/TransactionRoutes.js';

// Load environment variables from .env file
dotenv.config({ path: '.env' });

const app = express();
const PORT = process.env.PORT || 5000;
const DATABASE_URI = process.env.DATABASE_URI;
const FRONTEND_URI = process.env.FRONTEND;

app.use(bodyParser.json());
app.use(cors({ origin: FRONTEND_URI }));

const connectDatabase = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error while connecting to database:', error);
    process.exit(1); // Exit process with failure
  }
};

connectDatabase();

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
