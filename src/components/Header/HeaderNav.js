import HeaderSearch from "./HeaderSearch";
import HeaderMy from "./HeaderMy";

const HeaderNav = () => {
  return (
    <nav className="nav">
      <a href="/">나므위키</a>
      <HeaderSearch />
      <HeaderMy />
    </nav>
  );
};

export default HeaderNav;
