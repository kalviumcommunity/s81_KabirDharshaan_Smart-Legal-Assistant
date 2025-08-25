const express = require("express");
const { zeroShotPrompt } = require("../controllers/zeroshotController");

const router = express.Router();

router.post("/", zeroShotPrompt);

module.exports = router;
