import mongoose from "mongoose"

const makeSchema = (collectionName) => {
    const questionSchema = new mongoose.Schema(
        {
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
        { collection: collectionName }
    )

    return questionSchema
}

export const aptitudeModel = mongoose.model("questionAptitude", makeSchema("questionaptitude"))
export const tenModel = mongoose.model("questionTen", makeSchema("questionten"))
export const twelveModel = mongoose.model("questionTwelve", makeSchema("questiontwelve"))
export const btechModel = mongoose.model("questionEngineering", makeSchema("questionengineering"))
export const graduateModel = mongoose.model("questionGraduate", makeSchema("questiongraduates"))
