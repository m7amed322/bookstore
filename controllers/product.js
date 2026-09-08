const {Product,productValidate} = require("../models/products");
module.exports = {
     getProducts:async(req,res,next)=>{
        const results = await Product.find({},{});
        if(!results){
            res.status(404).send("not found");
            return;
        }
        res.send(results);
    },
    getProductById:async(req,res,next)=>{
        const product = await Product.findById(req.params.id)
        if(!product){
            res.status(404).send("not found");
            return;
        }
        res.send(`the product is : 
            ${product}`);
    },
    createProduct:async(req,res,next)=>{
    const result = productValidate(req.body);
    if(result.error){
        res.status(400).send(result.error.message);
        return;
    }
    const p =await Product.find({name:req.body.name});
    if(p.length>0){
    res.status(400).send("the product is already created");
        return;
    }
    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        pages:req.body.pages
    });
    await product.save();
    res.send("the product created successfully",product);
}
}
