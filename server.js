const app = require("./setup/app");
const PORT = process.env.port
app.listen(PORT || 3000,()=>console.log(`Listening to port ${PORT} ....`));