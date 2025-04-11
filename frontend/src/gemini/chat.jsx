import React, { useState } from 'react';
import axios from 'axios';

const GeminiChat = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await axios.post('/api/gemini/generate-text', { prompt });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Failed to get a response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gemini-chat">
      <h2>Gemini AI Chat</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask Gemini something..."
          rows={4}
          className="prompt-input"
        />
        <button type="submit" disabled={loading || !prompt}>
          {loading ? 'Processing...' : 'Send'}
        </button>
      </form>
      
      {response && (
        <div className="response-container">
          <h3>Response:</h3>
          <div className="response">{response}</div>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;