const express = require("express");
const { multiShotPrompt } = require("../controllers/multiShotController");

const router = express.Router();


router.post("/", multiShotPrompt);

module.exports = router;
