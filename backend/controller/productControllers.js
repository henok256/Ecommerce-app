const Product = require('../models/product');

const getAllProducts = async (req, res)=>{
    try{
        const products = await Product.find({});
        res.jsoin(products);

    } catch(error) {
        console.error(error);
        res.status(500).json({message:"sesrver error"});

    }
}

const getProductById = async (req, res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.jsoin(product);

    } catch(error) {
        console.error(error);
        res.status(500).json({message:"sesrver error"});

    }
};

module.exports ={
    getAllProducts,
    getProductById
}