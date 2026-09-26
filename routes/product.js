const express = require("express");
const productController = require("../controllers//product");
const auth = require("../middlewares/auth");
const admin = require("../middlewares/admin")
const router = express.Router();
router.get("/",auth,productController.getProducts);
router.get("/:id",auth,productController.getProductById);
router.post("/",[auth,admin],productController.createProduct);

module.exports = router;