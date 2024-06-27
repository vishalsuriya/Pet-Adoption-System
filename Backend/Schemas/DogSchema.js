const mongoose = require('mongoose')

const dogSchema = mongoose.Schema({
    name : {
        type : String, 
        required : false
    },
    origin : {
        type : String, 
        required : false
    },
    size : {
        type : String, 
        required : false
    },
    temperament : {
        type : String, 
        required : false
    },
    cost : {
        type : String, 
        required : false
    },
    lifespan : {
        type : String, 
        required : false
    },
    characteristics : {
        type : String, 
        required : false
    },
    age : {
        type : String,
        required : false
    },
    gender : {
        type : String,
        required : false
    },
    species : {
        type : String,
        required : false
    },
    weight : {
        type : String,
        required : false
    },
    breed : {
        type : String,
        required : false
    }
})

const dogModel = mongoose.model("DogDetails", dogSchema)
module.exports = mongoose.model("DogDetails", dogSchema)
exports.dogModel = dogModel
