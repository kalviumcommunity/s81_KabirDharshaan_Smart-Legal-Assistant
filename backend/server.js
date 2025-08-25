const express = require("express");
const bodyParser = require("body-parser");
const zeroShotRoutes = require("./routes/zeroShotRoutes");

const app = express();
app.use(bodyParser.json());

// routes
app.use("/api/zeroshot", zeroShotRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
