import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    lastname: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    username: {
        type: String,
        unique: true,
        required: true,
        min: 5,
        max: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
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

export default mongoose.model("user", userSchema)
