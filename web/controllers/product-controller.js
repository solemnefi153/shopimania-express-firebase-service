const firesotre = require('../db');
const Product = require('../models/product-module');


const addProduct = async (req, res) => {
    try{
        //Sanitize and validate all the data
        const data = req.body;
        await firesotre.collection('products').doc().set(data);
        res.send('Record saved successfuly');
    }catch(error){
        res.status(400).send(error.message);
    }                                                                                                                                                                                                                                                                                                                                                                                                                  
}

const getProducts = async (req, res) => {
    try{
        const productsRef = await firesotre.collection("products");
        const productsDocs = await productsRef.get();
        res.send(productsDocs);
    }catch(error){
        res.status(400).send(error.message);
    }                                                                                                                                                                                                                                                                                                                                                                                                                  
}

module.exports = {
    addProduct,
    getProducts
}