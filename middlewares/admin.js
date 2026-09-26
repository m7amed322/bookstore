const { AuthzError } = require("../utils/error");
module.exports = async (req, res, next) => {
  if (req.tokenPayload.role != "admin") {
    next(new AuthzError("unauthorized"));
  }
  next();
};
