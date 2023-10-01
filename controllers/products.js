
const Product = require('../models/product')
const companies = ['ikea', 'liddy', 'caressa', 'marcos']


//static testing::>

// const getAllProductsStatic = async(req,res) =>{
//     const products = await Product.find({company: 'ikea'})

//     res.status(200)
//         .json({products,nhits : products.length})
// }

const getAllProducts = async(req,res) =>{
    const {featured , company ,  name, sort,fields ,numericFilters } = req.query
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




    let result =  Product.find(queryObject)

    if(sort){
        const sortList = sort.split(',').join(' ')
        console.log(sortList)

        result = result.sort(sortList)
    }else{
        result.sort('createdAt')
    }


    if(fields){
        const fieldList  = fields.split(',').join(' ')
        console.log(fieldList)

        result = result.select(fieldList)
    }


    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) ||4
    let skip = (page-1)* limit 
    if(numericFilters){
    
        const operatorMap= {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g

        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
        const options = ['price','rating']
        filters = filters.split(',').forEach( item =>{
            
            const [field, operator,value] = item.split('-')
            if(options.includes(field)){
            queryObject[field] = {[operator] : Number(value)}
            }
            
        })
        
        result  = result.find(queryObject)
    }

    const products = await result


    result = result.skip(skip).limit(limit)
    res.status(200)
        .json({products,nHits: products.length})

}

module.exports = {
    getAllProducts
}