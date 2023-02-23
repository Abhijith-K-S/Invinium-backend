import { default as userModel } from "../model/user.js"
import { default as resultModel } from "../model/result.js"

export const saveResult = async (username, category, marks, prediction) => {
    //check if username exists in the database
    const usernameAlreadyExists = await userModel.findOne({ username: username })
    if (!usernameAlreadyExists) return res.status(400).send("User does not exist!")

    const resultAlreadyExists = await resultModel.findOne({
        username: username,
        category: category
    })

    if (resultAlreadyExists) {
        try {
            const updatedResult = await resultModel.updateOne(
                { username: username, category: category },
                { $set: { marks: marks, prediction: prediction } }
            )

            return updatedResult
        } catch (error) {
            return error
        }
    } else {
        const newResult = new resultModel({
            username: username,
            category: category,
            marks: marks,
            prediction: prediction
        })
        try {
            const savedResult = await newResult.save()
            return savedResult
        } catch (error) {
            return error
        }
    }
}
