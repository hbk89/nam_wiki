import React, { useState } from "react";
import axios from "axios";

import HeaderSearchList from "./HeaderSearchList";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import "../../css/Header.css";

const HeaderSearch = () => {
  const [searchList, setSearchList] = useState([]);

  const handleChange = (e) => {
    if (e.target.value) {
      axios
        .get("http://localhost:8080/api/wikiList/name/" + e.target.value)
        .then((res) => {
          setSearchList(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleFocus = (e) => {
    handleChange(e);
    console.log("focus");
  };

  const handleBlur = () => {
    console.log("focusOut");
  };

  return (
    <form>
      <div className="search">
        <span className="search-random">랜덤</span>
        <div className="search-input" onFocus={handleFocus} onBlur={handleBlur}>
          <input
            className="search-input-input"
            type="search"
            placeholder="Search"
            tabIndex="1"
            autoComplete="off"
            onChange={handleChange}
          />
          <HeaderSearchList searchList={searchList} />
        </div>
        <span>
          <button type="button">
            <AiOutlineSearch className="search-icon" />
          </button>
          <button type="button">
            <AiOutlineArrowRight className="forward-icon" />
          </button>
        </span>
      </div>
    </form>
  );
};

export default HeaderSearch;
