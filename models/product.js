const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        maxlength: 32
    },
    featured: {
        type: Boolean,
        default: false,

    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    rating: {
        type: Number,
        default: 4.5
    },  
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message: "{VALUE} is not supported"
        }

    }

})