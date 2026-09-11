const express = require("express");
const productController = require("../controllers//product");
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin")
const router = express.Router();
const handler = require("../utils/errorHandling");
router.get("/",auth,handler(productController.getProducts));
router.get("/:id",auth,handler(productController.getProductById));
router.post("/",[auth,admin],handler(productController.createProduct));

module.exports = router;