require('dotenv').config()
require('express-async-errors')
const express = require('express')

const notFoundMiddleware =require('./middleware/not-found') 
const errorMiddleware =require('./middleware/error-handler')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
const app = express()



const port= process.env.PORT || 3000
const url = process.env.MONGO_URI


//middleware
app.use(express.json())




//routes

app.get('/' , (req,res)=>{
    res.send('<h1> Store Api </h1> <a href = "api/v1/products">products route</a>')
})

app.use('/api/v1/products',productsRouter)

// products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log('server is listening on port 3000')        )
    } catch (error) {
        console.log(error)
    }
}

start()