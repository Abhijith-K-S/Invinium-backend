import "dotenv/config"
import { spawn } from "child_process"

export const scrapeJobs = async (input) => {
    let pythonProcess
    pythonProcess = spawn("python", [process.env.SCRAPER_PATH, input])

    let data = ""
    for await (const chunk of pythonProcess.stdout) {
        console.log("stdout chunk: " + chunk)
        data += chunk
    }
    let error = ""
    for await (const chunk of pythonProcess.stderr) {
        console.error("stderr chunk: " + chunk)
        error += chunk
    }
    const exitCode = await new Promise((resolve, reject) => {
        pythonProcess.on("close", resolve)
    })

    if (exitCode) {
        throw new Error(`subprocess error exit ${exitCode}, ${error}`)
    }
    return data
}
