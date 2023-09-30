

const getAllProductsStatic = async(req,res) =>{
    
    res.status(200)
        .json({msg:"testing products router"})
}

const getAllProducts = async(req,res) =>{
    res.status(200)
        .json({msg:" products route"})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}