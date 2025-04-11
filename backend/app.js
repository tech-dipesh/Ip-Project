import geminiRoutes from "./geminiservice.js"



import express from 'express';
const app=express()
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import helmet from 'helmet';
import flash from 'connect-flash';
import Joi from 'joi';


const port=process.env.PORT || 8888;

dotenv.config()

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(flash());

main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect(process.env.MONGOURL);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log("Successfully connected ip database");
  } catch (error) {
    console.error("Error while connected to the database")
    console.log("Database connection error:", error)
  }
}

app.use("/chat", geminiRoutes);


app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
}); 


app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.listen(path, ()=>{
  console.log("port is 5000");
})