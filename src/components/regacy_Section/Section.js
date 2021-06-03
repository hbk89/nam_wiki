import React from "react";
import { Observer } from "mobx-react-lite";
import useStore from "../../useStore";

import SectionTitle from "./SectionTitle";
import SectionIndexList from "./SectionIndexList";
import SectionProfile from "./SectionProfile";
import ArticleList from "../../components/Article/ArticleList";

import "../../css/Section.css";

const Section = (props) => {
  const { wikiStore } = useStore();
  
  return (
    <Observer>
      {() => (
        <div className="section">
          {props.name}
          <SectionTitle name={wikiStore.curWiki.name}></SectionTitle>
          <SectionProfile wiki={wikiStore.curWiki} />
          <SectionIndexList index={wikiStore.curWiki.wikiContents} />
          <ArticleList articleList={wikiStore.curWiki.wikiContents} />
        </div>
      )}
    </Observer>
  );
};

export default Section;
