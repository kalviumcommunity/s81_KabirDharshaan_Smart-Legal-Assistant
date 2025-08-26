const express = require("express");
const { chainOfThoughtPrompt } = require("../controllers/chainOfThoughtController");

const router = express.Router();

router.post("/cot", chainOfThoughtPrompt);

module.exports = router;
