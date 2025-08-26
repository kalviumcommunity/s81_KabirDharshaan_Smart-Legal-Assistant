const express = require("express");
const bodyParser = require("body-parser");
const zeroShotRoutes = require("./routes/zeroShotRoutes");
const oneShotRoutes=require("./routes/oneShotRoutes")
const multiShotRoutes=require("./routes/multiShotRoutes")
const functionCallingRoutes=require("./routes/functionCallingRoutes")
const chainOfThoughtRoutes=require('./routes/chainOfThoughtRoutes.js')
const app = express();
app.use(bodyParser.json());

// routes
app.use("./routes/zeroShotRoutes.js", zeroShotRoutes);
app.use("./routes/oneShotRoutes.js",oneShotRoutes);
app.use("./routes/multiShotRoutes.js",multiShotRoutes);
app.use("./routes/functionCallingRoutes.js",functionCallingRoutes);
app.use("/api/chainofthought", chainOfThoughtRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
