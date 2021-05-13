import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = (props) => {
  return (
    <div>
      {props.articleList.map((item) => (
        <ArticleItem {...item} key={item.id} />
      ))}
    </div>
  );
};

export default ArticleList;
