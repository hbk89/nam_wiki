module.exports = function (app, wikiModel) {
  // 프로필 전체 조회
  app.get("/api/wikiList", function (req, res) {
    wikiModel.find(function (err, wikiList) {
      if (err) return res.status(500).send({ error: "조회 실패!" });
      res.json(wikiList);
    });
  });

  // id 조회
  app.get("/api/wikiList/:wiki_id", function (req, res) {
    wikiModel.findOne({"_id": req.params.wiki_id}, function(err, wiki){
      if(err) return res.status(500).json({error: err});
      if(!wiki) return res.status(404).json({error : '이 id의 위키는 없어!'});
      res.json(wiki);
    });
  });

    // 이름 조회
    app.get("/api/wikiList/name/:wiki_name", function(req, res){
      wikiModel.find({"profile.name": new RegExp(req.params.wiki_name)}, function(err, wikiList){
        if(err) return res.status(500).json({error: err});
        if(wikiList.length === 0) return res.status(404).json({error: '이 name의 프로필은 없어!'});
        res.json(wikiList);
      })
    })
  
  
  // 프로필 생성
  app.post("/api/wiki", function (req, res) {
    // 위키
    const wiki = new wikiModel();

    wiki = {...req.body};
    wiki.save(function (err) {
      if (err) {
        console.log(err);
        res.json({ result: 0 });
        return;
      }
      res
      res.json({ result: 1 });
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
  app.put("/api/wikiList/:wiki_id", function (req, res){
    wikiModel.update({_id: req.params.wiki_id}, {$set: req.body},function(err, output){
      if(err) res.status(500).json("디비 실패");
      console.log(output);
      if(!output.n) return res.status(404).json("없는데요?");
      res.json({message: "업데이트 완료!"});
    })
  })

  app.delete("/api/wikiList/:wiki_id", function (req, res) {
    // remove(deprecated) -> deleteOne, deleteMany
    wikiModel.deleteOne({ _id: req.params.wiki_id }, function (err, output) {
      if (err) res.status(500).json("디비 실패");

      /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
      if(!output.result.n) return res.status(404).json({ error: "book not found" });
      res.json({ message: "book deleted" });
      */
     
      res.status(204).end();
    });
  });
};
