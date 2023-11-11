const express = require("express");
const app = express();
const { OpenAIAPI, OpenAIAPIConfiguration } = require("openai");
require('dotenv').config();

const config = new OpenAIAPIConfiguration({
    apiKey: process.env.OPEN_AI_KEY
});

const openai = new OpenAIAPI(config);
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     apiKey: process.env.OPEN_AI_KEY,
// });
// const openai = new OpenAIApi(configuration);

app.post("/start", async (req, res) => {
    try {
        const title = "Amazing Video Title";
        const description = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: 'user',
                    content: `Come up with a description for a YouTube video called ${title}`
                }
            ],
            max_tokens: 100
        });
        console.log(description.choices[0].message.content);
        res.send("Hi");
    } catch (error) {
        res.status(400).send(error);
    }
    // let API_URL = "https://api.openai.com/v1/chat/completions";
    // const API_KEY = process.env.OPEN_AI_KEY;
    // try {
    //     const response = await fetch(API_URL, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${API_KEY}`,
    //         },
    //         body: JSON.stringify({
    //             model: "gpt-3.5-turbo",
    //             messages: [{ role: "user", content: req.body.content }],
    //         }),
    //     });
    //     const data = await response.json();
    //     console.log(data)
    //     res.send(data);
    // } catch (error) {
    //     console.error("Error:", error);
    // }
});

app.listen(8000, () => {
    console.log("connected to server")
});
