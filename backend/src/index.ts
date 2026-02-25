import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { MONGO_URL } from './config.js';
import todoRouter from './routes/todo.routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('api/v1/todo', todoRouter);

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL || MONGO_URL);
    console.log('connected to db.');

    app.listen(3000, () => {
      console.log('This app is listening on port 3000');
    });
  } catch (err) {
    console.log('Error connecting to db.');
  }
}
startServer();
