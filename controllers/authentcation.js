const { User, userValidate, loginValidation } = require("../models/users");
const {
  ReqValidationError,
  ConfilctionError,
  BadReqError,
} = require("../utils/error");
const bcrypt = require("bcrypt");
const _ = require("lodash");
module.exports = {
  register: async (req, res, next) => {
    const { error } = userValidate(req.body);
    if (error) {
      return next(new ReqValidationError(error.details[0].message));
    }
    let user = await User.find({ email: req.body.email });
    if (user.length > 0) {
      return next(new ConfilctionError("the email is already exist"));
    }
    user = new User({
      fullName: req.body.fullName,
      email: req.body.email,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    await user.save();
    const token = user.genToken();
    res.send({
      message: "email created successfully",
      user: _.pick(user, ["fullName", "email"]),
      jwt: token,
    });
  },
  logIn: async (req, res, next) => {
    const { error } = loginValidation(req.body);
    if (error) {
      return next(new ReqValidationError(error.details[0].message));
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      next(new BadReqError("invalid email or password"));
      return;
    }
    const truePass = await bcrypt.compare(req.body.password, user.password);
    if (!truePass) {
      next(new BadReqError("invalid email or password"));
      return;
    }
    const token = user.genToken();
    res.send({
      message: "successfully logged in ",
      email: user.email,
      jwt: token,
    });
  },
};
