const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wikiSchema = new Schema({
  name: String,
  brief: String,
  def: String,
  likerList: [
    {
      id:String,
      name:String,
      provider:String,
    }
  ],
});

module.exports = mongoose.model("wiki", wikiSchema);
