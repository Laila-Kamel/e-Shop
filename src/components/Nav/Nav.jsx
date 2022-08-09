import { NavLink } from "react-router-dom";
import CartIcon from "../CartIcon";
import FavouriteListIcon from "../../components/FavouriteListIcon";
import style from "./Nav.module.scss";
import Icons from "../../containers/Icons";
import logo from "./../../images/logo.png";

const Nav = () => {
  const activeStyle = ({ isActive }) =>
    isActive ? `${style.Link} ${style.Link_Active}` : style.Link;
  return (
    <nav className={style.Nav}>
      <div className={style.Image_Container}>
        <img src={logo} alt="eShop Logo" className={style.logo}/>
      </div>

      <Icons/>
    </nav>
  );
};

export default Nav;
