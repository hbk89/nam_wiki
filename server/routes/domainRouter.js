const domain = require("../models/domain")

module.exports = function (app, domainModel) {
    // 도메인 전체 조회
    app.get("/api/domainList", function(req, res) {
        domainModel.find(function (err, domainList){
            if(err) return res.status(500).send({ error: err});
            res.json(domainList);
        });
    });

    // 도메인 조회
    app.get("/api/domainList/:name", function(req, res) {
        domainModel.find({name: new RegExp(req.params.name)}, function (err, domainList){
            if(err) return res.status(500).send({ error: err});
            res.json(domainList);
        });
    });
}