const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wikiSchema = new Schema({
    name : String,
    contents : String,
})

module.exports = mongoose.model("wiki", wikiSchema);