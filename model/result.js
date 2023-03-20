import mongoose from "mongoose"

const resultSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    category: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    marks: {
        type: Object,
        required: true
    },
    prediction: {
        type: Object,
        required: true
    }
})

export default mongoose.model("result", resultSchema)
