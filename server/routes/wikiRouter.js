//const domain = require("../models/domain");

module.exports = function (app, wikiModel, domainModel) {
  // 위키 전체 조회 (test)
  app.get("/api/wiki/all", function (req, res) {
    wikiModel.find(function (err, wikiList) {
      if (err) return res.status(500).send({ error: "조회 실패!" });
      res.send(wikiList);
    });
  });

  app.get("/api/wiki/:id", function(req, res) {
    wikiModel.findById(req.params.id, function(err, wiki){
      if(err) return res.status(500).send({ error: "조회 실패"});
      res.send(wiki);
    })
  });

  // 위키 생성
  app.post("/api/wiki", function (req, res) {
    const wiki = new wikiModel();
    wiki.name = req.body.name;
    wiki.brief = req.body.brief;
    wiki.def = req.body.def;

    wiki.save(function (err) {
      if (err) {
        return res.send({ error: "위키 생성 실패" });
      }
      domainModel.updateOne(
        { name: wiki.name },
        { $push: {list: { id: wiki._id, brief: wiki.brief } } },
        { upsert: true },
        function (err) {
          if (err) {
            return res.send({ error: "도메인 생성 실패" });
          }
        }
      );
      res.json(wiki);
    });
  });

  // 위키 수정 (검색)
  app.put("/api/wiki/:wiki_id", function (req, res) {
    wikiModel.findById(req.params.wiki_id, function (err, wiki) {
      if (err) return res.status(500).send({ error: "디비 실패" });
      if (!wiki) return res.status(404).send({ error: "없는데요?" });

      if(req.body.brief||req.body.def){
        wiki.brief = req.body.brief;
        wiki.def = req.body.def;
      }

      wiki.save(function (err) {
        if (err) {
          return res.send({ error: "위키 수정 실패" });
        }
        domainModel.updateOne(
          { list: {$elemMatch: {id: new RegExp(wiki._id)}}},
          { $set: {list : { id: wiki._id, brief: wiki.brief}}},
          function (err) {
            if (err)  return res.send({ error: "도메인 수정 실패" });
          }
        );
      });
      //res.send({ message: "위키 & 도메인 수정 완료" });
      res.json(wiki);
    });
  });

  app.delete("/api/wiki/:wiki_id", function (req, res) {
    // remove(deprecated) -> deleteOne, deleteMany
    wikiModel.deleteOne({ _id: req.params.wiki_id }, function (err, output) {
      if (err) res.status(500).send("디비 실패");
      res.status(204).end();
    });
  });

};
