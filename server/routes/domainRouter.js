const domain = require("../models/domain")

module.exports = function (app, domainModel) {
    // 도메인 전체 조회
    app.get("/api/domain/all", function(req, res) {
        domainModel.find(function (err, domainList){
            if(err) return res.status(500).send({ error: "조회 실패!"});
            if(!domainList) return res.status(404).send({error: "없는데요?"});
            res.json(domainList);
        });
    });

    // 도메인 조회
    app.get("/api/domain/:name", function(req, res) {
        domainModel.findOne({name: new RegExp(req.params.name)}, function (err, domain){
            if(err) return res.status(500).send({ error: "조회 실패!"});
            //if(!domain) return res.status(404).send({ error:"없는데요?"});
            res.json(domain);
        });
    });
}