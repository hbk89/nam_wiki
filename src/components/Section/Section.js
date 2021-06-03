import React from "react";
import { Observer } from "mobx-react-lite";
import axios from 'axios';

import useStore from "../../useStore";
import SectionTitle from "./SectionTitle";
import SectionIndexList from "./SectionIndexList";
import SectionProfile from "./SectionProfile";
import ArticleList from "../Article/ArticleList";

import "../../css/Section.css";

const Section = (props) => {
  //const { wikiStore, searchStore } = useStore();
  
  // 이름 검색
  axios.get("http://localhost:8080/w/name/" + props.name)
  .then((res) => {
    let a = res.data;
  })
  .catch((err) => console.log(err));

  // 등록
  // wikiStore.getWiki(id);
  
  return (
    <Observer>
      {() => (
        <div className="section">
          <SectionTitle name={props.name}></SectionTitle>
          {/* <SectionProfile wiki={wikiStore.curWiki} />
          <SectionIndexList index={wikiStore.curWiki.wikiContents} />
          <ArticleList articleList={wikiStore.curWiki.wikiContents} /> */}
        </div>
      )}
    </Observer>
  );
};

export default Section;
