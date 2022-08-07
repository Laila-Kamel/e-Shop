import { useEffect, useState } from "react";
import style from "./CartIcon.module.scss";
import { useContext } from "react";
import { NoOfItemsInCartContext } from "../../Context/NoOfItemsPRovider";
import { IoIosCart } from "react-icons/io";
import { NavLink } from "react-router-dom";

const CartIcon = () => {
  // const {items, setItems}=useContext(ItemsInCartContext);
  // setItems(items);

  // // const newItems= [...items];
  //     // setItems(newItems);
  // useEffect(()=>{
  // //    const test=items
  // console.log("test");
  // setItems(items)
  // },[items])

  const { noOfItems, setNoOfItems } = useContext(NoOfItemsInCartContext);

  // const {noOfItems,setNoOfItems}=useContext(NoOfItemsInCartContext);
  // setItems(items.length)
  // [noOfItems,setNoOfItems]=useState(0)
  //   const [noOfItemsInCart,setNoOfItemsInCart]=useState(0)
  //   console.log(items.length);
  // const length=items.length
  // useEffect(()=>{
  //     setNoOfItems(items.length);
  //     console.log(noOfItems);
  // },[])
  return (
    <>
      {/* {()=>setNoOfItemsInCart(items.length)} */}
      {/* {items.map((item)=><p>{item}</p>)} */}
      <div className={style.Container}>
        <NavLink to={'/cart'} className={style._Icon}> <IoIosCart className={style._Icon} /></NavLink>
        <p className={style._Number}>{noOfItems}</p>
      </div>
    </>
  );
};

export default CartIcon;
