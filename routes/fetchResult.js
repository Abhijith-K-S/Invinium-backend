import { Router } from "express"
import { processResult } from "../process/processResult.js"

const router = Router()

//calculate class 10 result
router.get("/ten/:input", async (req, res) => {
    try {
        console.log("Processing class 10 request")
        let str = await processResult(req.params.input, "ten")
        str = str.replace("[[", "")
        str = str.replace("]]", "")
        str = str.split(" ")
        let arr = []
        for (let i = 0; i < str.length; ++i) if (str[i] != "") arr.push(parseFloat(str[i]))

        let response = {
            cs: arr[0],
            biology: arr[1],
            humanities: arr[2],
            commerce: arr[3]
        }

        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send("Error processing data")
    }
})

//fetch class 12 result
router.get("/twelve/:input", async (req, res) => {
    try {
        console.log("Processing class 12 request")
        let str = await processResult(req.params.input, "twelve")
        str = str.replace("[[", "")
        str = str.replace("]]", "")
        str = str.split(" ")
        let arr = []
        for (let i = 0; i < str.length; ++i) if (str[i] != "") arr.push(parseFloat(str[i]))

        let response = {
            engineering: arr[0],
            medicine: arr[1],
            pharmacy: arr[2],
            commerce: arr[3],
            arts: arr[4],
            nursing: arr[5],
            management: arr[6]
        }

        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send("Error processing data")
    }
})

//fetch btech result
router.get("/btech/:input", async (req, res) => {
    try {
        console.log("Processing btech request")
        let str = await processResult(req.params.input, "btech")
        console.log("str" + str)
        str = str.replace("[[", "")
        str = str.replace("]]", "")
        str = str.split(" ")
        let arr = []
        for (let i = 0; i < str.length; ++i) if (str[i] != "") arr.push(parseFloat(str[i]))

        let response = {
            electronics: arr[0],
            computer: arr[1],
            civil: arr[2],
            mechanical: arr[3],
            electrical: arr[4]
        }

        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send("Error processing data")
    }
})

export default router
