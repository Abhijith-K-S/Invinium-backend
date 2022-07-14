import { Router } from "express"
import { default as tenModel } from "../model/questionten.js"

const router = Router()

//fetch class 10 questions
router.get("/ten", async (req, res) => {
    const questions = await tenModel.find({ category: "logical" })
    if (questions) return res.status(200).send(questions)
    else return res.status(400).send("Error fetching data")
})

export default router
