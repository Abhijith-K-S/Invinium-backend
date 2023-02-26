import { Router } from "express"
import { processResult } from "../util/processResult.js"
import { saveResult } from "../util/saveResult.js"

const router = Router()

//calculate class 10 result
router.put("/ten", async (req, res) => {
    try {
        const resultMap = req.body.resultMap

        const result = [
            resultMap["gender"],
            resultMap["maths"],
            resultMap["physics"],
            resultMap["chemistry"],
            resultMap["biology"],
            resultMap["social"],
            resultMap["verbal"],
            resultMap["boardTen"],
            resultMap["boardTwelve"],
            resultMap["studyHours"],
            resultMap["tution"],
            resultMap["learningMethod"],
            resultMap["socialPreference"],
            resultMap["extracurricular"],
            resultMap["approach"],
            resultMap["jobPreference"],
            resultMap["research"],
            resultMap["logical"],
            resultMap["quantitative"],
            resultMap["analytical"],
            resultMap["verbal"]
        ]

        console.log("Processing class 10 request")
        let str = await processResult(JSON.stringify(result), "ten")
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

        await saveResult(req.body.username, "ten", resultMap, response)

        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send(error)
    }
})

//fetch class 12 result
router.put("/twelve", async (req, res) => {
    try {
        const resultMap = req.body.resultMap

        const result = [
            resultMap["gender"],
            resultMap["boardTwelve"],
            resultMap["stream"],
            resultMap["maths"],
            resultMap["phyOrAcc"],
            resultMap["chemOrBs"],
            resultMap["stream"],
            resultMap["verbal"],
            resultMap["studyHours"],
            resultMap["tution"],
            resultMap["entrance"],
            resultMap["learningMethod"],
            resultMap["socialPreference"],
            resultMap["extracurricular"],
            resultMap["approach"],
            resultMap["jobPreference"],
            resultMap["research"],
            resultMap["logical"],
            resultMap["quantitative"],
            resultMap["analytical"],
            resultMap["verbal"]
        ]

        console.log("Processing class 12 request")
        let str = await processResult(JSON.stringify(result), "twelve")
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

        await saveResult(req.body.username, "twelve", resultMap, response)

        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send("Error processing data")
    }
})

//fetch btech result
router.put("/btech", async (req, res) => {
    try {
        const resultMap = req.body.resultMap

        const result = [
            resultMap["gender"],
            resultMap["stream"],
            resultMap["maths"],
            resultMap["physics"],
            resultMap["chemistry"],
            resultMap["other"],
            resultMap["favouriteSubject"],
            resultMap["likedTopicMath"],
            resultMap["likedTopicPhy"],
            resultMap["exhibition"],
            resultMap["figure"],
            resultMap["programmingKnowledge"],
            resultMap["studyHours"],
            resultMap["softwareJob"],
            resultMap["IES"],
            resultMap["work"],
            resultMap["preferredSubject"],
            resultMap["PSU"],
            resultMap["learningMethod"],
            resultMap["socialPreference"],
            resultMap["reason"],
            resultMap["revision"],
            resultMap["difficulty"],
            resultMap["bookRefer"],
            resultMap["extracurricular"],
            resultMap["approach"],
            resultMap["logical"],
            resultMap["quantitative"],
            resultMap["analytical"],
            resultMap["verbal"]
        ]

        console.log("Processing btech request")
        let str = await processResult(JSON.stringify(result), "btech")
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

        await saveResult(req.body.username, "btech", resultMap, response)

        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send("Error processing data")
    }
})

export default router
