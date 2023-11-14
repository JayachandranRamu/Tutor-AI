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

interviewRouter.get("/data/:id", async (req, res) => {
    let {id}=req.params;
    try {
        const data = await InterviewModel.findOne({_id:id});
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
})


module.exports = { interviewRouter };