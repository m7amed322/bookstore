const productRoutes = require("../routes/product");
const authRoutes = require("../routes/authentcation");
const error  =require("../middlewares/error")
module.exports = function (app){
    app.use("/bookstore/api/product",productRoutes);
    app.use("/bookstore/api/auth",authRoutes)
    app.use(error);
}