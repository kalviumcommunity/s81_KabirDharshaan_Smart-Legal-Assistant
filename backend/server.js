const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const zeroShotRoutes = require("./routes/zeroShotRoutes");
const oneShotRoutes = require("./routes/oneShotRoutes");
const multiShotRoutes = require("./routes/multiShotRoutes");
const functionCallingRoutes = require("./routes/functionCallingRoutes");
const chainOfThoughtRoutes = require("./routes/chainOfThoughtRoutes");
const tokenRoutes = require("./routes/tokenRoutes");
const dynamic=require("./routes/dynamicPromptRoutes")

const app = express();
app.use(bodyParser.json());

// ✅ Correct route mounting (use a URL prefix)
app.use("/api/zero-shot", zeroShotRoutes);
app.use("/api/one-shot", oneShotRoutes);
app.use("/api/multi-shot", multiShotRoutes);
app.use("/api/function-calling", functionCallingRoutes);
app.use("/api/chain-of-thought", chainOfThoughtRoutes);
app.use("/api/tokens", tokenRoutes);
app.use("/api/dynamic", dynamic);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
