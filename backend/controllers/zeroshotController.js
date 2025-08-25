const zeroShotPrompt = (req, res) => {
  const { prompt } = req.body;

  // Example: return result (no AI integration yet)
  res.json({
    success: true,
    inputPrompt: prompt,
    message: `This is a Zero-Shot Prompting example response for: "${prompt}"`
  });
};

module.exports = { zeroShotPrompt };
