const express = require("express");
const app = express();
app.use(express.json());
require('dotenv').config();

const openAi = require("openai");

const openai = new openAi({
    apiKey: process.env.OPEN_AI_KEY
})

app.get("/getres", async (req, res) => {
    try {
        const title = req.body.content
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: `Come up with a definition for a topic called ${title}`
                }
            ],
            max_tokens: 100
        });
        res.send(response.choices[0].message.content);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(8000, () => {
    console.log("connected to server")
});
