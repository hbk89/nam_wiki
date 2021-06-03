import React from "react";
import { Observer } from "mobx-react-lite";
import useStore from "../../useStore";

import HeaderSearchList from "./HeaderSearchList";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import "../../css/Header.css";

const HeaderSearch = () => {
  const { searchStore } = useStore();

  const handleChange = (e) => {
      searchStore.getSearchList(e.target.value);
  };

  const handleFocus = (e) => {
    handleChange(e);
    console.log("focus");
  };

  const handleBlur = () => {
    console.log("focusOut");
  };

  return (
    <Observer>
      {() => (
        <form>
          <div className="search" >
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
              <HeaderSearchList searchList={searchStore.searchList} />
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
      )}
    </Observer>
  );
};

export default HeaderSearch;
