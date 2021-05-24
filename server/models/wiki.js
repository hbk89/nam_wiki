const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wikiItemSchema = new Schema({
    name : String,
    content : String,
});

const wikiSchema = new Schema({
    wikiList: [wikiItemSchema],
})

module.exports = mongoose.model('wiki', wikiSchema);