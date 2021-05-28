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

// const profileSchema = new Schema({
//   name: String,
//   photo: String,
//   birth: {
//     date: Date,
//     place: String,
//   },
//   nationality: String,
//   body: {
//     height: String,
//     weight: String,
//     bloodType: String,
//   },
//   family: [familySchema],
//   edu: [eduSchema],
//   military: {
//     kind: String,
//     status: String,
//   },
//   contact: {
//     mail: String,
//     mobile: String,
//     etc: [contactEtcSchema],
//   },
// });

const profileItemSchema = new Schema({
  head : String,
  content: Array,
});

const wikiSchema = new Schema({
  name: String,
  profile: [profileItemSchema],
  wikiContents: [wikiItemSchema],
});

module.exports = mongoose.model("wiki", wikiSchema);
