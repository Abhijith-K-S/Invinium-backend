import { registerValidation } from "../validation.js"
import { default as userModel } from "../model/user.js"
import { Router } from "express"
import bcrypt from "bcrypt"

const router = Router()
const saltRounds = 10

//user registration
router.post('/register', async(req, res) => {
    const { error } = registerValidation.validate(req.body)
    if(error) 
        return res.status(400).send(error.details[0].message)

    //check if username already exists in the database
    const usernameAlreadyExists = await userModel.findOne({ username: req.body.username })
    if(usernameAlreadyExists)
        return res.status(400).send('Username already exists')
    
    //hashing password
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new userModel({
        username: req.body.username,
        password: hashedPassword
    })

    try{
        const savedUser = await newUser.save()
        res.send({userID: savedUser._id})
    }catch(error){
        res.status(400).send(error)
    }
})

export default router