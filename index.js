import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import { default as authRouter } from "./routes/auth.js"
import { default as questionRouter } from "./routes/fetchQuestion.js"
import { default as resultRouter } from "./routes/fetchResult.js"
import cors from "cors"

const app = express()
const port = process.env.API_PORT

//connecting to mongo database
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, () => {
    console.log("Connected to database")
})

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
    res.setHeader("Access-Control-Allow-Credentials", true)
    next()
})
app.use(cors())

app.use("/api/user", authRouter)
app.use("/api/question", questionRouter)
app.use("/api/result", resultRouter)

const corsOption = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
