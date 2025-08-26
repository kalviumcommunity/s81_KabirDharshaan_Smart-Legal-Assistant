// controllers/tokenController.js
const OpenAI = require("openai");

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

exports.tokenizeText = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    // Use a tokenizer-friendly model
    const response = await client.chat.completions.create({
      model: "mistralai/mistral-7b-instruct", // free tier friendly
      messages: [
        {
          role: "system",
          content: "You are a tokenizer. Break down text into tokens and count them.",
        },
        {
          role: "user",
          content: `Tokenize this text and count tokens: ${text}`,
        },
      ],
    });

    res.json({
      input: text,
      tokens: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Tokenization Error:", error);
    res.status(500).json({ error: "Failed to tokenize text" });
  }
};
