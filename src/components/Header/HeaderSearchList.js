import React from "react";
import useStore from "../../useStore";

const HeaderSearchList = (props) => {
  const { wikiStore, searchStore } = useStore();

  const route = (id) => {
    console.log(id + "컴온");
    // 검색하고 이동후 초기화
    // todo. 나중에는 아예 route로 도메인을 돌릴 예정
    // 즉 이 과정이 필요 없음
    wikiStore.getWiki(id);
    // input.reset();
    searchStore.initSearchList();
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
