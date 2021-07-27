const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema(
  {
    id:String,
    name:String,
    provider:String,
  }
)

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
  editLogs:[
    {
      date:Date,
      editType: String, // 편집 요청, 생성
      brief:String,
      def:String, // 이전 버전
      user,
    }
  ]
});

module.exports = mongoose.model("wiki", wikiSchema);
