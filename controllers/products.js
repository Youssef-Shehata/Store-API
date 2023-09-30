
const Product = require('../models/product')
const companies = ['ikea', 'liddy', 'caressa', 'marcos']

const getAllProductsStatic = async(req,res) =>{
    const products = await Product.find({company: 'ikea'})

    res.status(200)
        .json({products,nhits : products.length})
}

const getAllProducts = async(req,res) =>{
    const {featured , company ,  name} = req.query
    const queryObject = {}
    if(featured ){
        queryObject.featured = featured === 'true' ? true : false
    }


    if(company && companies.includes(company)){
        queryObject.company = company
    }


    if(name){
        queryObject.name = {$regex: name , $options: 'i'}
    }
    const products = await Product.find(queryObject)
    console.log(queryObject.featured)
    res.status(200)
        .json({products,nHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}