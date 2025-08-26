const axios = require("axios");

const chainOfThoughtPrompt = async (req, res) => {
  try {
    const { query } = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/auto", // you can choose free ones like "mistralai/mixtral-8x7b-instruct"
        messages: [
          {
            role: "system",
            content: "You are a legal assistant. Reason step by step before answering.",
          },
          {
            role: "user",
            content: `Question: ${query}\nThink through step by step and provide the final answer clearly.`,
          },
        ],
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      answer: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Error with chain-of-thought prompt" });
  }
};

module.exports = { chainOfThoughtPrompt };
