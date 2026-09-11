const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentcation");
const handler = require("../utils/errorHandling");
router.post("/register", handler(authController.register));
router.post("/login", handler(authController.logIn));

module.exports = router; 
