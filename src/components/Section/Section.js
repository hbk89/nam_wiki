import React from "react";
import useStore from "../../useStore";

import SectionTitle from "./SectionTitle";
import SectionIndexList from "./SectionIndexList";
import SectionPhotoProfile from "./SectionPhotoProfile";
import ArticleList from "../Article/ArticleList";

import "../../css/Section.css";

const Section = () => {
  const { articleList } = useStore();

  return (
    <div className="section">
      <SectionTitle />
      <SectionPhotoProfile />
      <SectionIndexList index = {articleList}/>
      <ArticleList articleList = {articleList}/>
    </div>
  );
};

export default Section;
