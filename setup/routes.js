const productRoutes = require("../routes/product");
const error  =require("../middlewares/error")
module.exports = function (app){
    app.use("/bookstore/api/product",productRoutes);
    app.use(error);
}