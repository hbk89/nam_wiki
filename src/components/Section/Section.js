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
  const { articleList, profileStore } = useStore();
  const id = "60ab105ab3a0f8175485e9d3";
  profileStore.getProfile(id);

  return (
    <Observer>
      {() => (
        <div className="section">
          <SectionTitle />
          <SectionProfile profile={profileStore.curProfile} />
          <SectionIndexList index={articleList} />
          <ArticleList articleList={articleList} />
        </div>
      )}
    </Observer>
  );
};

export default Section;
