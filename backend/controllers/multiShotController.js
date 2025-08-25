
const multiShotPrompt = (req, res) => {
  const { prompt } = req.body;

  
  const examples = [
    { input: "Translate 'Hello' to French", output: "Bonjour" },
    { input: "Translate 'Good Morning' to French", output: "Bonjour" },
    { input: "Translate 'Thank you' to French", output: "Merci" }
  ];

  res.json({
    success: true,
    inputPrompt: prompt,
    multiShotExamples: examples,
    message: `This is a Multi-Shot Prompting response for: "${prompt}"`
  });
};

module.exports = { multiShotPrompt };
