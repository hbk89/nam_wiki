import React from "react";
import { Observer } from "mobx-react-lite";
import useStore from "../../useStore";

import SectionTitle from "./SectionTitle";
import SectionIndexList from "./SectionIndexList";
import SectionProfile from "./SectionProfile";
import ArticleList from "../Article/ArticleList";

import "../../css/Section.css";

const Section = () => {
  // 본문
  const { wikiStore } = useStore();
  const id = "60ac976ab6df1d3624c350cc";
  wikiStore.getWiki(id);

  return (
    <Observer>
      {() => (
        <div className="section">
          <SectionTitle />
          <SectionProfile profile={wikiStore.curWiki.profile} />
          <SectionIndexList index={wikiStore.curWiki.wikiList} />
          <ArticleList articleList={wikiStore.curWiki.wikiList} />
        </div>
      )}
    </Observer>
  );
};

export default Section;
