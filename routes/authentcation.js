const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentcation")
const handler = require("../utils/errorHandling");
router.post("/register",handler(authController.register));

module.exports = router;