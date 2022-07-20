import mongoose from "mongoose"

const questiontwelveSchema = new mongoose.Schema(
    {
        questionid: {
            type: Number,
            required: true,
            min: 1
        },
        category: {
            type: String,
            required: true,
            min: 1
        },
        level: {
            type: String,
            required: true,
            min: 1
        },
        question: {
            type: String,
            required: true,
            min: 1
        },
        optiona: {
            type: String,
            required: true,
            min: 1
        },
        optionb: {
            type: String,
            required: true,
            min: 1
        },
        optionc: {
            type: String,
            required: true,
            min: 1
        },
        optiond: {
            type: String,
            required: true,
            min: 1
        },
        answer: {
            type: String,
            required: true,
            min: 1
        }
    },
    { collection: "questiontwelve" }
)

export default mongoose.model("questiontwelve", questiontwelveSchema)
