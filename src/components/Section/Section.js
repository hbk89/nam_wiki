import React, { useEffect, useState } from "react";
import axios from "axios";

import SectionTitle from "./SectionTitle";
import SectionIndexList from "./SectionIndexList";
import SectionProfile from "./SectionProfile";
import ArticleList from "../Article/ArticleList";

import "../../css/Section.css";

const Section = (props) => {
  return (
    <div className="section">
      <SectionTitle name={props.name} />

      {/* 도메인, 위키 리스트
       <SectionProfile wiki={wikiStore.curWiki} />
          <SectionIndexList index={wikiStore.curWiki.wikiContents} />
          <ArticleList articleList={wikiStore.curWiki.wikiContents} /> 
      */}
    </div>
  );
};

export default Section;
