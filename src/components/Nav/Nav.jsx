import { NavLink } from "react-router-dom";
import CartIcon from "../CartIcon";
import FavouriteListIcon from "../../components/FavouriteListIcon";
import style from "./Nav.module.scss";
import Icons from "../../containers/Icons";

const Nav = () => {
  const activeStyle = ({ isActive }) =>
    isActive ? `${style.Link} ${style.Link_Active}` : style.Link;
  return (
    <nav className={style.Nav}>
      <div className={style.Image_Container}>
        <image src="../../images/logo.png" alt="eShop Logo"/>
      </div>
      <div className={style.Nav_Links}>
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
      </div>
      <Icons/>
    </nav>
  );
};

export default Nav;
