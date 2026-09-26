class ReqValidationError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class AuthnError extends Error {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}
class AuthzError extends Error {
  constructor(message) {
    super(message);
    this.status = 403;
  }
}
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}
class BadReqError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class ConfilctionError extends Error {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}
module.exports = {
  ReqValidationError,
  AuthnError,
  AuthzError,
  NotFoundError,
  BadReqError,
  ConfilctionError,
};
