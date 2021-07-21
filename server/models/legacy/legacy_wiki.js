const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema({
  relation: String,
  name: String,
});

const eduSchema = new Schema({
  name: String,
  level: String,
  status: String,
});

const contactEtcSchema = new Schema({
  name: String,
  address: String,
});

const wikiItemSchema = new Schema({
  id: Number,
  head: String,
  content: String,
});

const profileItemSchema = new Schema({
  head : String,
  content: Array,
});

const wikiSchema = new Schema({
  name: String,
  profile: [profileItemSchema],
  wikiContents: [wikiItemSchema],
});

//module.exports = mongoose.model("wiki", wikiSchema);
