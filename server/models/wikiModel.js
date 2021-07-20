const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wikiSchema = new Schema({
  name: String,
  brief: String,
  def: String,
});

// REGACY
// const wikiSchema = new Schema({
//   name: String,
//   list: [
//     {
//       id: String, // 개요, 생애 등
//       def: String, // 설명
//     },
//   ],
// });

module.exports = mongoose.model("wiki", wikiSchema);
