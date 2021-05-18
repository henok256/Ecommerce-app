require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product= require('./models/product');

connectDB();

const importData = async () =>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(productsData);

        console.log("Data Import success");
        process.exit();
    }
    catch(error){
        console.log("Error with data importing");
        process.exit(1);

    }
};
//we need to run the import data

importData();