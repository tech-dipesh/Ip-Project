import express from "express"

const router = express.Router();
const geminiService = require("../services/geminiService");
import geminiService from "./gemini.js"

// Middleware to authenticate requests (implement as needed)
const authenticate = (req, res, next) => {
  // Implement your authentication logic here
  next();
};

// Endpoint for text generation
router.post("/generate-text", authenticate, async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    
    const response = await geminiService.generateText(prompt);
    res.json({ response });
  } catch (error) {
    console.error("Error in generate-text endpoint:", error);
    res.status(500).json({ error: "Failed to generate content" });
  }
});

// Endpoint for chat completion
router.post("/generate-chat", authenticate, async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }
    
    const response = await geminiService.generateChat(messages);
    res.json({ response });
  } catch (error) {
    console.error("Error in generate-chat endpoint:", error);
    res.status(500).json({ error: "Failed to generate chat response" });
  }
});

module.exports = router;