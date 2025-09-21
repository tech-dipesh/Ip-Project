import express from "express";
import geminiService from "../services/geminiService.js"; 
const router = express.Router();

const authenticate = (req, res, next) => {
  // middleware
  next();
};

router.post("/generate-text", authenticate, async (req, res) => {
  try {
    const { prompt } = req.body;
   
    if (!prompt) {
      return res.status(400).json({ error: "Please enter the prompt: " });
    }
   
    res.json({ response: "Text generation endpoint working" });
  } catch (error) {
    console.error("Error in generate-text endpoint:", error);
    res.status(500).json({ error: "Failed to generate content" });
  }
});

router.post("/generate-chat", authenticate, async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }
    res.json({ response: "Chat generation endpoint working" });
  } catch (error) {
    console.error("Error in generate-chat endpoint:", error);
    res.status(500).json({ error: "Failed to generate chat response" });
  }
});

export default router;