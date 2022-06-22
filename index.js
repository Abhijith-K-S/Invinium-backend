import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import router from "./routes/auth.js"

const app = express()
const port = process.env.API_PORT

//connecting to mongo database
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true },()=>{
    console.log("Connected to database")
})

app.use(express.json())
app.use('/api/user', router)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});