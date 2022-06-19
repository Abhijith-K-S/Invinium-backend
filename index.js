const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const dotenv = require("dotenv").config()
const port = process.env.API_PORT

//connecting to mongo database
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true },()=>{
    console.log("Connected to database")
})

app.use(express.json())
app.use('/api/user', authRoute)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});