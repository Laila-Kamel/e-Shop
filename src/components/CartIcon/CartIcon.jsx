import { useEffect, useState } from "react";
import style from "./CartIcon.module.scss";
import { useContext } from "react";
import { NoOfItemsInCartContext } from "../../Context/NoOfItemsPRovider";
import { IoIosCart } from "react-icons/io";
import { NavLink } from "react-router-dom";

const CartIcon = () => {

  const { noOfItems, setNoOfItems } = useContext(NoOfItemsInCartContext);

  return (
    <>
      <div className={style.Container}>
        <NavLink to={'/cart'} className={style._Icon}> <IoIosCart className={style._Icon} /></NavLink>
        <p className={style._Number}>{noOfItems}</p>
      </div>
    </>
  );
};

export default CartIcon;
