const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema({
    id : String,
    name : String,
})

//module.exports = mongoose.model("search", searchSchema);