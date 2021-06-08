const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// ex) 1. 이덕호, 89년생 
const list = new Schema({
    id : String, // 타겟 id
    content : {}, // 설명
})

const domainSchema = new Schema({
    name : String,
    contents : [list],
})

module.exports = mongoose.model("search", searchSchema);