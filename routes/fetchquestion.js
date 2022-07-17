import { Router } from "express"
import { default as tenModel } from "../model/questionten.js"
import { processResultTen } from "../process/processResultTen.js"

const router = Router()

//fetch class 10 questions
router.get("/ten", async (req, res) => {
    const questions = await tenModel.find({})
    if (questions) return res.status(200).send(questions)
    else return res.status(400).send("Error fetching data")
})

//calculate class 10 result
router.get("/ten/result/:input", async (req, res) => {
    try {
        const response = await processResultTen(req.params.input)
        return res.status(200).send(JSON.stringify(response).replace(/\\r\\n/g, ""))
    } catch (error) {
        return res.status(500).send("Error processing data")
    }
})

export default router
