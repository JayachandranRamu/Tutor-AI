const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
const { connection } = require("./db");
require('dotenv').config();
const openAi = require("openai");

const { interviewRouter } = require("./Router/interviewRouter");
const { userRouter } = require("./Router/user.router");
const { historyRouter } = require("./Router/historyRouter");
app.use(cors())
app.use("/interview", interviewRouter);
app.use("/user", userRouter);
app.use("/history", historyRouter);

const openai = new openAi({
    apiKey: process.env.OPEN_AI_KEY
})

app.get("/openai", async (req, res) => {
    try {
        const prompt = req.body.content
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            max_tokens: 1000
        });
        res.send(response.choices[0].message.content);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(8080, async () => {
    try {
        await connection;
        console.log("Server Is Running At PORT 8000")
    } catch (error) {
        console.log(error);
    }
});
