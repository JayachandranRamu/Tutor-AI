const express = require("express");
const { HistoryModel } = require("../Model/history.model");
const historyRouter = express.Router();

historyRouter.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const data = await HistoryModel.find({ user_id: id })
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({ "message": "Something went wrong.", "err": error })
    }
})

historyRouter.get("/singleData/:id", async (req, res) => {
    const {id} = req.params;
   
    try {
        const data = await HistoryModel.findOne({ _id: id })
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({ "message": "Something went wrong.", "err": error })
    }
})


historyRouter.post("/add", async (req, res) => {
    try {
        let data = new HistoryModel(req.body);
        await data.save();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = { historyRouter };