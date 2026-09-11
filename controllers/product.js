const { Product, productValidate } = require("../models/products");
module.exports = {
  getProducts: async (req, res, next) => {
    const results = await Product.find({}, {});
    if (results.length<1) {
      return next(new Error("not found"));
    }
    res.send(results);
  },
  getProductById: async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(new Error("not found"));
    }
    res.send({product});
  },
  createProduct: async (req, res, next) => {
    const {error} = productValidate(req.body);
    if (error) {
      return next(error.details[0]);
    }
    const p = await Product.find({ name: req.body.name });
    if (p.length > 0) {
      return next(new Error("the product is already created"));
    }
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      pages: req.body.pages,
    });
    await product.save();
    res.send({message:"the product created successfully", product});
  },
};
