const {User,userValidate} = require("../models/users");
const bcrypt = require("bcrypt");
const _=require("lodash")
module.exports = {
    register:async(req,res,next)=>{
        const {error} = userValidate(req.body);
        if(error){
            return next(error.details[0]);
        }
        let user = await User.find({email:req.body.email});
        if(user.length>0){
            return next(new Error("the email is already registered"));
        }
        user = new User({
            fullName:req.body.fullName,
            email:req.body.email
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password,salt);
        await user.save();
        res.send({message:"email created successfully",
            user:_.pick(user,['fullName','email'])
        })
    }
}