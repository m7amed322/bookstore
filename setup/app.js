const express = require("express");
const app = express();
app.use(express.json());
require("./routes")(app);
require("./db")()
module.exports = app;