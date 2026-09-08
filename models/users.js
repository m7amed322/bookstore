const mongoose = require("mongoose");
const joi = require("joi");
const schema = joi.object({
  fullName:joi.string().required(),
  email:joi.string().email().required(),
  password:joi.string().required(),
});
const userValidate = function (reqBody) {
  return schema.validate(reqBody);
}
const userSchema = new mongoose.Schema({
 fullName: { type: String, required: true },
  email: { type: String,  required: true ,unique:true},
  password: {type:String , required:true,},
  role:{type:String,enum:['customer','seller','admin'], required:true , default:"customer"}
});
const User = mongoose.model("users",userSchema);
module.exports = {User,userValidate};
