const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const domainSchema = new Schema({
  name: String, // 이름
  list:
    // 동명이인 리스트
    [
      {
        wikiId: String, // 위키 id
        brief: String, // 간략 설명
      },
    ],
});

module.exports = mongoose.model("domain", domainSchema);
