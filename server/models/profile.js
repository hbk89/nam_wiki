const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema(
  {
    relation: String,
    name: String,
  }
);

const eduSchema = new Schema(
  {
    name: String,
    kind: String,
  }
);

const contact_etc = new Schema(
  {
    name: String,
    address : String,
  }
);

const profileSchema = new Schema({
  name: String,
  photo: String,
  birth: {
    date: Date,
    place: String,
  },
  nationality: String,
  body: {
    height: String,
    weight: String,
    bloodType: String,
  },
  family: [familySchema],
  education: [eduSchema],
  military: {
    kind: String,
    status: String,
  },
  contact: {
    mail: String,
    mobile: String,
    etc: [contact_etc],
  },
});

module.exports = mongoose.model('profile', profileSchema);