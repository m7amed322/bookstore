const jwt = require("jsonwebtoken");
const { AuthnError } = require("../utils/error");
const jwtPrivateKey = process.env.jwtprivatekey;
module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    next(new AuthnError("accses denied, no token provided "));
  }
  const payload = jwt.verify(token, jwtPrivateKey);
  req.tokenPayload = payload;
  next();
};
