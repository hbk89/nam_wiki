//const domain = require("../models/domain");

module.exports = function (app, wikiModel, domainModel) {
  // 위키 전체 조회 (test)
  app.get("/api/wiki/all", function (req, res) {
    wikiModel.find(function (err, wikiList) {
      if (err) return res.status(500).send({ error: "조회 실패!" });
      res.send(wikiList);
    });
  });

  app.get("/api/wiki/:id", function (req, res) {
    wikiModel.findById(req.params.id, function (err, wiki) {
      if (err) return res.status(500).send({ error: "조회 실패" });
      res.send(wiki);
    });
  });

  // 위키 생성
  app.post("/api/wiki", function (req, res) {
    const wiki = new wikiModel();
    wiki.name = req.body.name;
    wiki.brief = req.body.brief;
    wiki.def = req.body.def;
    //에딧 로그 푸쉬
    wiki.editLogs.push(req.body.editLog);
    

    wiki.save(function (err) {
      if (err) {
        return res.send({ error: "위키 생성 실패" });
      }
      domainModel.updateOne(
        { name: wiki.name },
        { $push: { list: { id: wiki._id, brief: wiki.brief } } },
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

      if (req.body.brief || req.body.def) {
        wiki.brief = req.body.brief;
        wiki.def = req.body.def;
        wiki.editLogs.push(req.body.editLog);
      }

      wiki.save(function (err) {
        if (err) {
          return res.send({ error: "위키 수정 실패" });
        }
        domainModel.updateOne(
          { list: { $elemMatch: { id: wiki._id } } },
          { $set: { list: { id: wiki._id, brief: wiki.brief } } },
          function (err) {
            if (err) return res.send({ error: "도메인 수정 실패" });
          }
        );
      });
      res.json(wiki);
    });
  });

  // 좋아요
  app.put("/api/like/:wiki_id", function (req, res) {
    wikiModel.updateOne(
      { _id: req.params.wiki_id },
      { $push: { likerList: {...req.body} } },
      { upsert: true },
      function (err, wiki) {
        if (err) {
          return res.send({ error: "좋아요 등록 실패" });
        }
      }
    );
    res.send("좋아요 등록 성공");
  });

  // 좋아요 취소
  app.put("/api/unlike/:wiki_id", function(req, res) {
    wikiModel.updateOne(
      { likerList :{ $elemMatch: {id : req.body.id}}},
      { $pull:{likerList:{id: req.body.id}}},
      function(err, output) {
        if (err) return res.status(500).send({ error: "디비 실패" });
        if (!output) return res.status(404).send({ error: "없는데요?" });
      }
    )
    res.send("좋아요 취소 성공");
  })

  app.delete("/api/wiki/:wiki_id", function (req, res) {
    // remove(deprecated) -> deleteOne, deleteMany
    // 생성은 위키가 먼저, 그 다음 도메인
    // 삭제는 도메인이 먼저, 그 다음 위키

    domainModel.updateOne(
      { list: { $elemMatch: { id: req.params.wiki_id } } },
      { $pull: {list : {id: req.params.wiki_id}}},
      function (err, output) {
        if (err) return res.status(500).send({ error: "디비 실패" });
        if (!output) return res.status(404).send({ error: "없는데요?" });

        wikiModel.deleteOne({ _id: req.params.wiki_id }, function (err) {
          if (err) return res.send({ error: "위키 삭제 실패" });
        });
        res.status(204).send("위키 & 도메인 삭제 완료");
      }
    );
  });
};
