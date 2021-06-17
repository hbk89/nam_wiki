const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const domainSchema = new Schema({
  name: String,
  list: [
    {
      id: String, // 타겟 id
      brief: String, // 설명,
    },
  ],
});

module.exports = mongoose.model("domain", domainSchema);
