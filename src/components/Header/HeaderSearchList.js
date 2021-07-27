import React from "react";
import {Link} from "react-router-dom"

const HeaderSearchList = (props) => {
  return (
    <div className="header-search-list">
      {props.searchList.map((item) => (
        <div key = {item._id}>
          <Link to= {`/domain/${item.name}`}
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
