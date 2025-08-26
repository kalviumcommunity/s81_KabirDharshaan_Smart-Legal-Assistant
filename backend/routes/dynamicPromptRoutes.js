const express = require("express");
const { getDynamicPromptResponse } = require("../controllers/dynamicPromptController");

const router = express.Router();


router.post("/", getDynamicPromptResponse);

module.exports = router;
