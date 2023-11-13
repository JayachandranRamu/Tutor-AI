const express = require("express");
const interviewRouter = express.Router();
const { InterviewModel } = require("../Model/interviewModel")

interviewRouter.get("/data", async (req, res) => {
    try {
        const data = await InterviewModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = { interviewRouter };