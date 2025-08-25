const express = require("express");
const { oneShotPrompt } = require("../controllers/oneShotController");

const router = express.Router();


router.post("/", oneShotPrompt);

module.exports = router;
