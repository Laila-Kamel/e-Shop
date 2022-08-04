import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";

const Nav = () => {
  const activeStyle = ({ isActive }) =>
    isActive ? `${style.Link} ${style.Link_Active}` : style.Link;
  return (
    <nav className={style.Nav}>
      <NavLink className={activeStyle} to="/">
        Home
      </NavLink>
      <NavLink className={activeStyle} to="/electronics">
        Electronics
      </NavLink>
      <NavLink className={activeStyle} to="/jewelery" category="jewelery">
        Jewelery
      </NavLink>
      <NavLink className={activeStyle} to="/men">
        Men's clothing
      </NavLink>
      <NavLink className={activeStyle} to="/women">
        Women's clothing
      </NavLink>
    </nav>
  );
};

export default Nav;
