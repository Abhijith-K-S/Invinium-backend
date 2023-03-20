import "dotenv/config"
import { spawn } from "child_process"

export const processResult = async (input, type) => {
    let pythonProcess
    if (type == "ten") pythonProcess = spawn("python", [process.env.ML_MODEL_PATH_10, input])
    else if (type == "twelve")
        pythonProcess = spawn("python", [process.env.ML_MODEL_PATH_12, input])
    else if (type == "btech")
        pythonProcess = spawn("python", [process.env.ML_MODEL_PATH_BTECH, input])
    else if (type == "graduate")
        pythonProcess = spawn("python", [process.env.ML_MODEL_PATH_GRADUATE, input])

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
