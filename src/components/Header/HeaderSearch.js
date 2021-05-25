import React from "react";
import {Observer} from "mobx-react-lite";
import useStore from "../../useStore";

import HeaderSearchList from "./HeaderSearchList";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const HeaderSearch = () => {
  const {searchStore} = useStore();

  const handleChange = (e) =>{
    searchStore.search(e.target.value);
  }

  const handleFocus = (e) => {
    let a= 1;
  }

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
            onChange={handleChange}
            onFocus={handleFocus}
          />
                <Observer>
        {() => (
          <HeaderSearchList searchList={searchStore.searchList} />
          )}
          </Observer>
        </div>
        <span>
          <button type="button">
            <AiOutlineSearch className="search-icon"/>
          </button>
          <button type="button">
            <AiOutlineArrowRight className="forward-icon"/>
          </button>
        </span>
      </div>
    </form>
  );
};

export default HeaderSearch;
