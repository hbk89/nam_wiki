import React from "react";
import { Observer } from "mobx-react-lite";
import useStore from "../../useStore";

import SectionTitle from "./SectionTitle";
import SectionIndexList from "./SectionIndexList";
import SectionProfile from "./SectionProfile";
import ArticleList from "../Article/ArticleList";

import "../../css/Section.css";

const Section = () => {
  const { wikiStore } = useStore();
  
  return (
    <Observer>
      {() => (
        <div className="section">
          <SectionTitle />
          <SectionProfile wiki={wikiStore.curWiki} />
          <SectionIndexList index={wikiStore.curWiki.wikiContents} />
          <ArticleList articleList={wikiStore.curWiki.wikiContents} />
        </div>
      )}
    </Observer>
  );
};

export default Section;
