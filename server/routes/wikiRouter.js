const domain = require("../models/domain");

module.exports = function (app, wikiModel, domainModel) {
  // 위키 전체 조회
  app.get("/api/wikiList", function (req, res) {
    wikiModel.find(function (err, wikiList) {
      if (err) return res.status(500).send({ error: "조회 실패!" });
      res.send(wikiList);
    });
  });

  // 위키 생성
  app.post("/api/wiki", function (req, res) {
    const wiki = new wikiModel();
    wiki.name = req.body.name;
    wiki.contents = req.body.contents;

    wiki.save(function (err) {
      if (err) {
        res.send({ error: "위키 생성 실패" });
        return;
      }
      domainModel.updateOne(
        { name: wiki.name },
        { $push: { list: { id: wiki._id, brief: wiki.contents } } },
        { upsert: true },
        function (err) {
          if (err) {
            res.send({ error: "도메인 생성 실패" });
            return;
          }
        }
      );
      res.send({ result: "위키 & 도메인 생성 완료" });
    });
  });

  // 프로필 업데이트 (검색)
  app.put("/api/wiki/:wiki_id", function (req, res) {
    wikiModel.findById(req.params.wiki_id, function (err, wiki) {
      if (err) return res.status(500).send({ error: "디비 실패" });
      if (!wiki) return res.status(404).send({ error: "없는데요?" });

      if (req.body.name) wiki.name = req.body.name;
      if (req.body.birth.date) wiki.birth.date = req.body.birth.date;
      if (req.body.birth.place) wiki.birth.place = req.body.birth.place;

      wiki.save(function (err) {
        if (err) res.status(500).send({ error: "업데이트 실패" });
        res.send({ message: "업데이트 완료!" });
      });
    });
  });

  //프로필 업데이트 (검색 없이)
  app.put("/api/wikiList/:wiki_id", function (req, res) {
    wikiModel.update(
      { _id: req.params.wiki_id },
      { $set: req.body },
      function (err, output) {
        if (err) res.status(500).send("디비 실패");
        console.log(output);
        if (!output.n) return res.status(404).send("없는데요?");
        res.send({ message: "업데이트 완료!" });
      }
    );
  });

  app.delete("/api/wikiList/:wiki_id", function (req, res) {
    // remove(deprecated) -> deleteOne, deleteMany
    wikiModel.deleteOne({ _id: req.params.wiki_id }, function (err, output) {
      if (err) res.status(500).send("디비 실패");
      res.status(204).end();
    });
  });

  app.delete("/api/wikiList/searchList/:search_id", function (req, res) {
    searchModel.deleteOne(
      { _id: req.params.search_id },
      function (err, output) {
        if (err) res.status(500).send("디비 실패");
        res.status(204).end();
      }
    );
  });
};
