import { Router } from "express"
import { default as tenModel } from "../model/questionten.js"
import { default as twelveModel } from "../model/questiontwelve.js"
import { processResult } from "../process/processResult.js"

const router = Router()

//fetch class 10 questions
router.get("/ten", async (req, res) => {
    const questions = await tenModel.find({})
    if (questions) return res.status(200).send(questions)
    else return res.status(400).send("Error fetching data")
})

//fetch class 12 questions
router.get("/twelve/:stream", async (req, res) => {
    let general = await tenModel.find({ questionid: { $lt: 21 } })
    const stream = req.params.stream
    let streamSpecific

    const mathsQuestions = await twelveModel.find({ category: "maths" })
    general = general.concat(mathsQuestions)

    if (stream == "cs" || stream == "biology") {
        const common = await twelveModel.find({
            $or: [{ category: "physics" }, { category: "chemistry" }]
        })

        if (stream == "cs") streamSpecific = await twelveModel.find({ category: "cs" })
        if (stream == "biology") streamSpecific = await twelveModel.find({ category: "biology" })

        general = general.concat(common)
        general = general.concat(streamSpecific)
    } else if (stream == "commerce") {
        streamSpecific = await twelveModel.find({
            $or: [{ category: "accountancy" }, { category: "business" }, { category: "economics" }]
        })

        general = general.concat(streamSpecific)
    }

    if (general) return res.status(200).send(general)
    else return res.status(400).send("Error fetching data")
})

export default router
