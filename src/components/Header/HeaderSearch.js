import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import HeaderSearchList from "./HeaderSearchList";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import "../../css/Header.css";

const HeaderSearch = () => {
  const [searchWord, setSearchWord] = useState("");
  const [searchList, setSearchList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (searchWord === "") {
      setSearchList([]);
    } else {
      axios
        .get(`http://localhost:8080/api/domain/search/${searchWord}`)
        .then((res) => {
          if (res.data.length) setSearchList(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [searchWord]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // 도메인 페이지로
      history.push(`/domain/${e.target.value}`);
    }
  };

  const handleChange = (e) => {
    console.log("change");
    setSearchWord(e.target.value);
  };

  const handleFocus = (e) => {
    console.log("focus");
    setSearchWord(e.target.value);
  };

  const handleBlur = (e) => {
    console.log("focusOut");
    // 야매라 쓰고 나무위키도 이렇게 한다고 말한다
    setTimeout(() => setSearchWord(""), 500);
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
            onKeyPress={handleKeyPress}
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
