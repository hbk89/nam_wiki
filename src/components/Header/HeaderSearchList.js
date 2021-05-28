import React from "react";
import useStore from "../../useStore";

const HeaderSearchList = (props) => {
  const { wikiStore } = useStore();

  const route = (id) => {
    console.log(id + "컴온");
    wikiStore.getWiki(id);
  };

  return (
    <div className="header-search-list">
      {props.searchList.map((item) => (
        <div
          className="header-search-item"
          key={item._id}
          onClick={() => route(item.id)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default HeaderSearchList;
