// routes/tokenRoutes.js
const express = require("express");
const { tokenizeText } = require("../controllers/tokenController");

const router = express.Router();

// POST /api/tokens
router.post("/tokens", tokenizeText);

module.exports = router;
