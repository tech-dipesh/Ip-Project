const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINIAPI);

class GeminiService {
  constructor() {
    this.model = genAI.getGenerativeModel({ model: "gemini-pro" });
  }

  async generateText(prompt) {
    try {
      const result = await this.model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error("Error generating content:", error);
      throw error;
    }
  }

  async generateChat(messages) {
    try {
      const chat = this.model.startChat();
      
      const result = await chat.sendMessage(messages);
      return result.response.text();
    } catch (error) {
      console.error("Error in chat generation:", error);
      throw error;
    }
  }
}

module.exports = new GeminiService();