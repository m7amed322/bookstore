const productRoutes = require("../routes/product");
module.exports = function (app){
    app.use("/bookstore/api/product",productRoutes);
}