class ValidationError extends Error{
  constructor(message){
  super(message);
  this.status = 400
  }
}
class AuthnError extends Error{
  constructor(message){
  super(message);
  this.status = 401
  }
}
class AuthzError extends Error{
  constructor(message){
  super(message);
  this.status = 403
  }
}
class NotFoundError extends Error{
  constructor(message){
  super(message);
  this.status = 404
  }
}
class BadReqError extends Error{
  constructor(message){
    super(message);
    this.status=400
  }
}
module.exports={ValidationError,AuthnError,AuthzError,NotFoundError,BadReqError}