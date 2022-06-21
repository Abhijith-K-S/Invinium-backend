const mongoose = require("mongoose")
const Joi = require("joi")

//schema definition
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//schema validation
const userSchemaValidation = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(5)
        .max(255)
        .required(),
    
    //regex=> 8-32 characters and minimum 1 uppercase, 1 lowercase, 1 number, 1 special character
    password: Joi.string()
        .pattern(new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/))
        .required()
})

module.exports = {
    userModel: mongoose.model('user',userSchema),
    userValidation: userSchemaValidation
}