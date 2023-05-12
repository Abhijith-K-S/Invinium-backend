import { Router } from "express"
import { scrapeJobs } from "../util/scrapeJobs.js"

const router = Router()

router.get("/", async (req, res) => {
    try {
        const keyword = req.query.keyword

        console.log("fetching jobs mathing keyword: ", keyword)
        let jobs = await scrapeJobs(keyword)
        const result = JSON.parse(jobs)

        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send(error)
    }
})

export default router
