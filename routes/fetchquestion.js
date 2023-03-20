import { Router } from "express"
import {
    aptitudeModel,
    btechModel,
    tenModel,
    twelveModel,
    graduateModel
} from "../model/question.js"

const router = Router()

//fetch class 10 questions
router.get("/ten", async (req, res) => {
    const aptitude = await aptitudeModel.find({})
    const questions = await tenModel.find({})
    const response = aptitude.concat(questions)

    if (response) return res.status(200).send(response)
    else return res.status(400).send("Error fetching data")
})

//fetch class 12 questions
router.get("/twelve/:stream", async (req, res) => {
    const aptitude = await aptitudeModel.find({})
    const stream = req.params.stream
    let streamSpecific, response

    const mathsQuestions = await twelveModel.find({ category: "maths" })

    if (stream == "cs" || stream == "biology") {
        const common = await twelveModel.find({
            $or: [{ category: "physics" }, { category: "chemistry" }]
        })

        if (stream == "cs") streamSpecific = await twelveModel.find({ category: "cs" })
        if (stream == "biology") streamSpecific = await twelveModel.find({ category: "biology" })

        response = aptitude.concat(mathsQuestions, common, streamSpecific)
    } else if (stream == "commerce") {
        streamSpecific = await twelveModel.find({
            $or: [{ category: "accountancy" }, { category: "business" }, { category: "economics" }]
        })

        response = aptitude.concat(mathsQuestions, streamSpecific)
    }

    if (response) return res.status(200).send(response)
    else return res.status(400).send("Error fetching data")
})

//fetch engineering questions
router.get("/btech", async (req, res) => {
    const aptitude = await aptitudeModel.find({})
    const questions = await btechModel.find({})
    const response = aptitude.concat(questions)

    if (response) return res.status(200).send(response)
    else return res.status(400).send("Error fetching data")
})

//fetch graduate questions
router.get("/graduate", async (req, res) => {
    const aptitude = await aptitudeModel.find({})
    const maths = await twelveModel.find({ category: "maths" })
    const questions = await graduateModel.find({})
    const response = aptitude.concat(maths, questions)

    if (response) return res.status(200).send(response)
    else return res.status(400).send("Error fetching data")
})

export default router
