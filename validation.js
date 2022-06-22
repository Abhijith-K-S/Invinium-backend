import joi from "joi"

export const registerValidation = joi.object({
    username: joi.string()
        .alphanum()
        .min(5)
        .max(255)
        .required(),
    
    //regex=> 8-32 characters and minimum 1 uppercase, 1 lowercase, 1 number, 1 special character
    password: joi.string()
        .pattern(new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/))
        .required()
})