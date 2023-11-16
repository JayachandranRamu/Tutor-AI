const mongoose = require("mongoose");
const interviewSchema = mongoose.Schema({
    interviewee: String,
    name: String,
    timing: Object,
    type: String,
    topics: Array,
    chatGPTPrompt: Array
})
const InterviewModel = mongoose.model("interviewDetail", interviewSchema);
module.exports = { InterviewModel };