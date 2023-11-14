const mongoose = require("mongoose");
const historySchema = mongoose.Schema({
    user_id: String,
    interview_name: String,
    interviewee_name: String,
    VideoLink: String,
    score: String,
    conversation: Array,
    Interrview_Duration: String,
    Interview_Time: String
});
const HistoryModel = mongoose.model("history", historySchema);

module.exports = { HistoryModel };