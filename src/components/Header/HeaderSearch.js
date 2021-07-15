import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import axios from "axios"

import HeaderSearchList from "./HeaderSearchList";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import "../../css/Header.css";

const HeaderSearch = () => {
  const [searchList, setSearchList] = useState([]);
  const history = useHistory();

  const onEnter = (e) => {
    if (e.key === "Enter") {
      // 도메인 페이지로
      history.push(`/domain/${e.target.value}`)
    }
  };

  const handleChange = (e) => {
    axios
    .get(`http://localhost:8080/api/domain/${e.target.value}`)
    .then((res) => {
      if(res.data)
        setSearchList(res.data.list);
    })
    .catch((err) => console.log(err));
  }
  
  const handleFocus = (e) => {
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
            placeholder="검색"
            autoComplete="off"
            onChange={handleChange}
            onKeyPress={onEnter}
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
