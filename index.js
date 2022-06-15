const express = require("express")
const app = express()
const dotenv = require('dotenv').config()
const authRoute = require("./routes/auth")

const port = 8080
app.use('/api/user', authRoute)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});