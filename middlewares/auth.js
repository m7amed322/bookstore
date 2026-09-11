const jwt = require("jsonwebtoken");
const jwtPrivateKey = process.env.jwtprivatekey;
module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    throw new Error("accses denied, no token provided ");
  }
  const payload = jwt.verify(token, jwtPrivateKey);
  req.tokenPayload = payload;
  next();
};
