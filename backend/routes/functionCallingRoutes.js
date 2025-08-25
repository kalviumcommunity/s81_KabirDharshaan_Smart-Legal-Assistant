const express =require( "express");
const { functionCalling } =require( "../controllers/functionCallingController.js");

const router = express.Router();

router.post("/function-calling", functionCalling);

module.exports=router;
