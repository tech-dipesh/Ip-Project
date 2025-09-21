import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

class GeminiService {
  constructor() {
    if (!process.env.GEMINI_API_KEY) {
      console.warn('GEMINI_API_KEY not found in environment variables. Using mock responses.');
      this.useMock = true;
      return;
    }
    
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
    this.useMock = false;
  }

  async generateText(prompt) {
    try {
      if (this.useMock) {
        return {
          text: `Mock response for prompt: ${prompt}`,
          usage: {
            promptTokens: prompt.length,
            completionTokens: 50,
            totalTokens: prompt.length + 50
          }
        };
      }

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      return {
        text: text,
        usage: {
          promptTokens: prompt.length,
          completionTokens: text.length,
          totalTokens: prompt.length + text.length
        }
      };
    } catch (error) {
      console.error("Error generating text:", error);
      throw new Error("Failed to generate text");
    }
  }

  async generateChat(messages) {
    try {
      if (this.useMock) {
        return {
          text: `Mock chat response for ${messages.length} messages`,
          usage: {
            promptTokens: messages.length * 10,
            completionTokens: 40,
            totalTokens: messages.length * 10 + 40
          }
        };
      }

      const chatHistory = messages.map(msg => `${msg.role}: ${msg.content}`).join('\n');
      
      const result = await this.model.generateContent(chatHistory);
      const response = await result.response;
      const text = response.text();
      
      return {
        text: text,
        usage: {
          promptTokens: chatHistory.length,
          completionTokens: text.length,
          totalTokens: chatHistory.length + text.length
        }
      };
    } catch (error) {
      console.error("Error generating chat:", error);
      throw new Error("Failed to generate chat response");
    }
  }
}

export default new GeminiService();