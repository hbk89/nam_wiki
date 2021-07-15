import React from "react";
import {Link} from "react-router-dom"

const HeaderSearchList = (props) => {
  const onRoute = (id) => {
    console.log(id + "컴온");

  };

  return (
    <div className="header-search-list">
      {props.searchList.map((item) => (
        <div key = {item.id}>
          <Link to= {`/wiki/${item.id}`}
          className="header-search-item"
          >
          {item.id}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeaderSearchList;
