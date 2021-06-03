const { requirePropFactory } = require("@material-ui/core");
const search = require("../models/search");

module.exports = function (app, wikiModel, searchModel) {
  // 위키 전체 조회
  app.get("/api/wikiList", function (req, res) {
    wikiModel.find(function (err, wikiList) {
      if (err) return res.status(500).send({ error: "조회 실패!" });
      res.json(wikiList);
    });
  });

  // 검색 조회
  app.get("/api/wikiList/searchList", function (req, res) {
    searchModel.find(function (err, searchList) {
      if (err) return res.status(500).send({ error: "조회 실패!" });
      res.json(searchList);
    });
  });

  // id 조회
  app.get("/api/wikiList/:wiki_id", function (req, res) {
    wikiModel.findOne({ _id: req.params.wiki_id }, function (err, wiki) {
      if (err) return res.status(500).json({ error: err });
      if (!wiki) return res.status(404).json({ error: "이 id의 위키는 없어!" });
      res.json(wiki);
    });
  });

  // 이름 조회 (검색 리스트)
  app.get("/api/wikiList/name/:wiki_name", function (req, res) {
    searchModel.find(
      { name: new RegExp(req.params.wiki_name) },
      function (err, searchList) {
        if (err) return res.status(500).json({ error: err });
        //if(searchList.length === 0) return res.status(404).json({error: '이 name의 검색결과는 없어!'});
        res.json(searchList);
      }
    );
  });

  // 하나만 조회 (도메인)
  app.get("/api/wiki/name/:wiki_name", function (req, res) {
    wikiModel.findOne(
      { name: new RegExp(req.params.wiki_name) },
      function (err, searchList) {
        if (err) return res.status(500).json({ error: err });
        //if(searchList.length === 0) return res.status(404).json({error: '이 name의 검색결과는 없어!'});
        res.json(searchList);
      }
    );
  });

  // 랜덤 조회 (아무 검색어 없을때)
  app.get("api/wikiList/name", function (req, res) {});

  // 위키 생성
  app.post("/api/wiki", function (req, res) {
    const wiki = new wikiModel();

    // todo. 객체 const 복사 어떻게..?
    wiki.name = req.body.name;
    wiki.profile = req.body.profile;
    wiki.wikiContents = req.body.wikiContents;

    wiki.save(function (err) {
      if (err) {
        console.log(err);
        res.json({ result: "위키 생성 실패" });
        return;
      } else {
        const search = new searchModel();
        search.id = wiki._id;
        search.name = wiki.name;
        search.save(function (err1) {
          if (err) {
            console.log(err1);
            res.json({ result: "검색 생성 실패" });
            return;
          }
        });
        res.json({ result: "위키 검색 생성" });
      }
    });
  });

  // 프로필 업데이트 (검색)
  // app.put("/api/wiki/:wiki_id", function (req, res) {
  //   wikiModel.findById(req.params.wiki_id, function(err, wiki){
  //     if(err) return res.status(500).json({error: '디비 실패'});
  //     if(!wiki) return res.status(404).json({error: '없는데요?'});

  //     if(req.body.name) wiki.name = req.body.name;
  //     if(req.body.birth.date) wiki.birth.date = req.body.birth.date;
  //     if(req.body.birth.place) wiki.birth.place = req.body.birth.place;

  //     wiki.save(function (err) {
  //       if(err) res.status(500).json({error: "업데이트 실패"});
  //       res.json({message: "업데이트 완료!"});
  //     })
  //   })
  // });

  //프로필 업데이트 (검색 없이)
  app.put("/api/wikiList/:wiki_id", function (req, res) {
    wikiModel.update(
      { _id: req.params.wiki_id },
      { $set: req.body },
      function (err, output) {
        if (err) res.status(500).json("디비 실패");
        console.log(output);
        if (!output.n) return res.status(404).json("없는데요?");
        res.json({ message: "업데이트 완료!" });
      }
    );
  });

  app.delete("/api/wikiList/:wiki_id", function (req, res) {
    // remove(deprecated) -> deleteOne, deleteMany
    wikiModel.deleteOne({ "_id": req.params.wiki_id }, function (err, output) {
      if (err) res.status(500).json("디비 실패");
      res.status(204).end();
    });
  });

  app.delete("/api/wikiList/searchList/:search_id", function (req, res){
    searchModel.deleteOne({"_id": req.params.search_id}, function(err, output) {
      if (err) res.status(500).json("디비 실패");
      res.status(204).end();
    });
  })
};
