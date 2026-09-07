const { string, number, required } = require("joi");
const mongoose = require("mongoose");
const { object } = require("underscore");
const joi = require("joi");
const schema = joi.object({
  name:joi.string().required(),
  price:joi.number().required(),
  description:joi.string().required(),
  pages:joi.number().required()
});
const productValidate = function (reqBody) {
  return schema.validate(reqBody);
}
 schema.validate;
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, max: 1500, min: 0, required: true },
  description: {type:String , required:true,},
  pages:{type:Number, required:true}
});
const Product = mongoose.model("products",productSchema);
module.exports = {Product,productValidate};
