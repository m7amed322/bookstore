const {NotFoundError,AuthnError,AuthzError,ValidationError,BadReqError} = require("../models/error") ;
module.exports = function (err, req, res, next) {
  if (err instanceof AuthzError) {
    res.status(err.status).json({ error_message: err.message });
    return;
  }
  else if (err instanceof AuthnError) {
    res.status(err.status).json({ error_message: err.message });
    return;
  }
  else if (err instanceof NotFoundError) {
    res.status(err.status).json({error_message: "Not Found" });
  }
  else if(err instanceof ValidationError){
    res.status(err.status).json({ error_message: "Validation Error ensure your request body" });
  }else if(err instanceof BadReqError){
    res.status(err.status).json({ error_message: err.message });
  }
  else{
    res.status(500).json({ error_message: err.message });
  }
};
