const express = require("express");
const bodyParser = require("body-parser");
const zeroShotRoutes = require("./routes/zeroShotRoutes");
const oneShotRoutes=require("./routes/oneShotRoutes")

const app = express();
app.use(bodyParser.json());

// routes
app.use("/api/zeroshot", zeroShotRoutes);
app.use("/api/oneshot",oneShotRoutes)

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
