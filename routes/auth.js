import { registerValidation, loginValidation } from "../validation.js"
import { default as userModel } from "../model/user.js"
import { Router } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = Router()
const saltRounds = 10

//user registration
router.post("/register", async (req, res) => {
    const { error } = registerValidation.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //check if email already exist in the database
    const emailAlreadyExists = await userModel.findOne({ email: req.body.email })
    if (emailAlreadyExists)
        return res.status(400).send("E-mail is already registered to another account")

    //check if username already exists in the database
    const usernameAlreadyExists = await userModel.findOne({ username: req.body.username })
    if (usernameAlreadyExists) return res.status(400).send("Username already exists")

    //hashing password
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new userModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword
    })

    try {
        const savedUser = await newUser.save()
        res.send({ userID: savedUser._id })
    } catch (error) {
        res.status(400).send(error)
    }
})

//user login
router.post("/login", async (req, res) => {
    const { error } = loginValidation.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //check if username exists in the database
    const usernameExists = await userModel.findOne({ username: req.body.username })
    if (!usernameExists) return res.status(400).send("Invalid username!")

    //user authentication
    const checkPassword = await bcrypt.compare(req.body.password, usernameExists.password)
    if (!checkPassword) return res.status(400).send("Invalid login credentials!")

    //issue token
    const token = jwt.sign({ _id: usernameExists._id }, process.env.TOKEN_SECRET)
    res.header("auth-token", token).send(token)
})

export default router
