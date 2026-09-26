const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentcation");
router.post("/register", authController.register);
router.post("/login", authController.logIn);

module.exports = router;
