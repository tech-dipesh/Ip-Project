import geminiRoutes from "./geminiservice.js";
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import helmet from 'helmet';
import flash from 'connect-flash';
import Joi from 'joi';

dotenv.config();

const app = express();
const port = process.env.PORT || 8888;

app.use(express.json());
app.use(helmet());
app.use(session({ 
  secret: process.env.SESSION_SECRET || 'fallback-secret', 
  resave: false, 
  saveUninitialized: true 
}));
app.use(flash());

app.use(cors({
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error("Error while connecting to the database");
    console.log("Database connection error:", error);
  }
}

app.use("/chat", geminiRoutes);

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.listen(port, () => {
  console.log(`Server is running on the port: ${port}`);
  
});