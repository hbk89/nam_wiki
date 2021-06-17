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
          <Link to= {`/about/${item.name}`}
          className="header-search-item"
          >
          {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeaderSearchList;
