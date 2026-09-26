const {
  NotFoundError,
  AuthnError,
  AuthzError,
  ReqValidationError,
  BadReqError,
} = require("../utils/error");
module.exports = function (err, req, res, next) {
  if (err instanceof AuthzError) {
    res.status(err.status).json({ error_message: err.message });
    return;
  } else if (err instanceof AuthnError) {
    res.status(err.status).json({ error_message: err.message });
    return;
  } else if (err instanceof NotFoundError) {
    res.status(err.status).json({ error_message: "Not Found" });
    return;
  } else if (err instanceof ReqValidationError) {
    res.status(err.status).json({
      error_message:
        "Validation Error ensure your request body\n" + err.message,
    });
    return;
  } else if (err instanceof BadReqError) {
    res.status(err.status).json({ error_message: err.message });
    return;
  } else {
    res.status(500).json({ error_message: "internal server error" });
    return;
  }
};
