import axios from 'axios'
import React from 'react'
const API = axios.create({
  baseURL: 'http://localhost:8888',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINIAPI });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works",
  });
  console.log(response.text);
}

await main();

export const signup = () => API.get('/signup');
export const login = (id) => API.get(`/tools/${id}`);

