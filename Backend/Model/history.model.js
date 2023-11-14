const mongoose = require("mongoose");
const historySchema = mongoose.Schema({
    user_id: String,
    interview_name: String,
    VideoLink: String,
    score: String,
    conversation: Array,
    Interview_Duration: String,
    Interview_Time: String,
});
const HistoryModel = mongoose.model("history", historySchema);

module.exports = { HistoryModel };