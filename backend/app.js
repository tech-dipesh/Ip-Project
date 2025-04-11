import geminiRoutes from "./geminiservice.js"



import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import helmet from 'helmet';
import flash from 'connect-flash';
import Joi from 'joi';


const path=8888;

dotenv.config()

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(flash());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ip');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
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