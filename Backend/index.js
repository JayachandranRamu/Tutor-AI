const express = require("express");
const app = express();
app.use(express.json());
require('dotenv').config();

const openAi = require("openai");

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

app.listen(8000, () => {
    console.log("connected to server")
});
