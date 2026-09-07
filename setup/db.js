const mongoose = require("mongoose");
module.exports = function () {
    mongoose
  .connect("mongodb://localhost/bookStore")
  .then(() => console.log("db connected..."))
  .catch((err) => console.log("failed to connect to db", err));
}