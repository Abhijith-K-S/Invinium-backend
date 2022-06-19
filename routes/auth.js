const user = require('../model/user')
const router = require('express').Router()

router.post('/register', async(req, res) => {
    const newUser = new user({
        username: req.body.username,
        password: req.body.password
    })

    try{
        const savedUser = await newUser.save()
        console.log(savedUser)
        res.send(savedUser)
    }catch(error){
        res.status(400).send(error)
        console.log(error)
    }
})

module.exports = router