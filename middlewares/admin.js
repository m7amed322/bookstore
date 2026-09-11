module.exports = async(req,res,next)=>{
    if(req.tokenPayload.role != "admin"){
        throw new Error("unauthorized");
    }
    next();
}