const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// App
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// DB
const mongoose = require('mongoose');

// DB connect
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('디비 연결 완료!')
})

mongoose.connect('mongodb://localhost/namwiki', {useNewUrlParser: true, useUnifiedTopology: true});

// Model
const wikiModel = require('./models/wikiModel');
const domainModel = require('./models/domainModel');

// route
const wikiRouter = require('./routes/wikiRouter')(app, wikiModel, domainModel);
const domainRouter = require('./routes/domainRouter')(app,domainModel);

// PORT
const port = process.env.port || 8080;

// run
const server = app.listen(port, function() {
    console.log('서버 런!');
})