import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const HeaderSearch = () => {
  return (
    <form>
      <div className="search">
        <div>
          <input
            className="input"
            type="search"
            placeholder="Search"
            tabIndex="1"
            autoComplete="off"
          ></input>
        </div>
        <span>
          <button type="button">
            <AiOutlineSearch className="search-icon" onClick="" />
          </button>
          <button type="button">
            <AiOutlineArrowRight className="forward-icon" onClick="" />
          </button>
        </span>
      </div>
    </form>
  );
};

export default HeaderSearch;
