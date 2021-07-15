import React from 'react';
import HeaderSearch from "./HeaderSearch";
import HeaderMyPage from "./HeaderMyPage";

import '../../css/Header.css'

const Header = () => {
  return (
    <nav className="header nav">
      <a href="/">나므위키</a>
      <HeaderSearch />
      <HeaderMyPage />
    </nav>
  );
};

export default Header;
