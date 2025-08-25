
const oneShotPrompt = (req, res) => {
  const { prompt } = req.body;

  
  const example = {
    input: "Translate 'Hello' to French",
    output: "Bonjour"
  };

  
  res.json({
    success: true,
    inputPrompt: prompt,
    oneShotExample: example,
    message: `This is a One-Shot Prompting response for: "${prompt}"`
  });
};

module.exports = { oneShotPrompt };
