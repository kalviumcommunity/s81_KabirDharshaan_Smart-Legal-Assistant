const axios = require("axios");
require("dotenv").config();

exports.getDynamicPromptResponse = async (req, res) => {
  try {
    const { userName, topic, style } = req.body;

    // Dynamic Prompt Construction
    const prompt = `
You are a helpful assistant.
Write a short paragraph about "${topic}" in a "${style}" style.
Make sure to greet the user by their name: ${userName}.
    `;

    // OpenRouter API Call
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini", // you can swap with any available model
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      success: true,
      prompt: prompt,
      response: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.error("Dynamic Prompt Error:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
};
