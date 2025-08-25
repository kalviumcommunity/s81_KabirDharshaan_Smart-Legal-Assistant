// controllers/functionCallingController.js
const axios = require("axios");

exports.functionCalling = async (req, res) => {
  try {
    const { userMessage } = req.body;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini", // free models available on OpenRouter
        messages: [
          { role: "system", content: "You are a helpful assistant with function calling ability." },
          { role: "user", content: userMessage }
        ],
        functions: [
          {
            name: "get_current_weather",
            description: "Get the current weather in a given location",
            parameters: {
              type: "object",
              properties: {
                location: { type: "string", description: "City name" },
                unit: { type: "string", enum: ["celsius", "fahrenheit"] }
              },
              required: ["location"]
            }
          }
        ],
        function_call: "auto" // let AI decide when to call
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, // use OpenRouter key here
          "HTTP-Referer": "http://localhost:3000", // your app domain
          "X-Title": "Smart Legal Assistant"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong with OpenRouter API" });
  }
};
