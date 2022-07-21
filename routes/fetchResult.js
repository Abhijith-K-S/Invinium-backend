import { Router } from "express"
import { processResult } from "../process/processResult.js"

const router = Router()

//calculate class 10 result
router.get("/ten/:input", async (req, res) => {
    try {
        console.log("Processing class 10 request")
        const response = await processResult(req.params.input, "ten")
        console.log(response)
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send("Error processing data")
    }
})

//fetch class 12 result
router.get("/twelve/:input", async (req, res) => {
    try {
        console.log("Processing class 12 request")
        const response = await processResult(req.params.input, "twelve")
        console.log(response)
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send("Error processing data")
    }
})

export default router
