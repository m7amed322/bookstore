const express = require("express");
const productController = require("../controllers//product");
const router = express.Router();
const handler = require("../utils/errorHandling");
router.get("/",handler(productController.getProducts));
router.get("/:id",handler(productController.getProductById));
router.post("/",handler(productController.createProduct));

module.exports = router;