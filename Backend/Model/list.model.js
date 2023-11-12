const mongoose = require("mongoose");
const listSchema = mongoose.Schema({
    token: String,
}, {
    versionKey: false
})
const ListModel = mongoose.model("list", listSchema);
module.exports = { ListModel };