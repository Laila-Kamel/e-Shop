import React, { useEffect, useState } from "react";
import style from "./CartPage.module.scss";
import { ItemsInCartContext } from "../../Context/Context";
import { NoOfItemsInCartContext } from "../../Context/NoOfItemsPRovider";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { addConfirmedOrder, updateQuantity } from "../../services";

const CartPage = () => {
  const { items, setItems } = useContext(ItemsInCartContext);
  const { noOfItems, setNoOfItems } = useContext(NoOfItemsInCartContext);
  console.log(items);
  let repeatedItem = [];
  const firstMount = useRef(true);
  const [total, setTotal] = useState(0);
  const navigate=useNavigate();

  const confirmOrder=()=>{
    console.log("jk");
    // items.forEach(item=> addConfirmedOrder(item))
    addConfirmedOrder(items)
    console.log(items);
    items.forEach((item)=>updateQuantity(item.id,item.quantityOrdered,item.quantity));
    navigate('/thankYou');
    setItems("");
    setNoOfItems(0);
    setItems(0);
    repeatedItem=[];
    setTotal(0)
  }

  
  const totalPaid = () => {
    console.log(items);
    return items.reduce(
      (acc, current) => (acc += (current.quantityOrdered * current.price)),
      0
    );
  };

  const increment = (index) => {
    console.log(items[index].quantity);
    if (items[index].quantity > items[index].quantityOrdered) {
      items[index].quantityOrdered += 1;
    } else {
      alert("No available stock");
    }
    setNoOfItems(
      items.reduce((acc, current) => (acc += current.quantityOrdered), 0)
    );
    setTotal(totalPaid());
  };

  const decrement = (index) => {
    items[index].quantityOrdered -= 1;
    setTotal(totalPaid);
    setNoOfItems(
      items.reduce((acc, current) => (acc += current.quantityOrdered), 0)
    );
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setItems({ ...items, [name]: value });
  };

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    items.forEach((item) => {
      if (item.id in repeatedItem) {
        repeatedItem[item.id].quantityOrdered += item.quantityOrdered;
      } else {
        repeatedItem[item.id] = item;
      }
    });
    setItems(Object.values(repeatedItem).filter(item=>item.quantityOrdered!=0));
    console.log(items);
    setTotal(totalPaid);
  }, [noOfItems]);

  return (
    <>{items.length!=0?(
      <div>
      <table className={style.Container}>
        <tr>
          <th>Item</th>
          <th>Color</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {items &&
          items.map((item, index) => (
            <tr key={item.id} className={style.ItemContainer}>
              <td>{item.title}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    decrement(index);
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  name="quantityOrdered"
                  id="qty"
                  value={item.quantityOrdered}
                  onChange={onInputChange}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    increment(index);
                  }}
                >
                  +
                </button>
              </td>
              <td>{item.quantityOrdered * item.price}</td>
            </tr>
          ))}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td className={style.bold}>Total:</td>
          <td className={style.bold}>{total}</td>
        </tr>
      </table>
      <button className={style.confirmBtn} onClick={confirmOrder}>Confirm Order</button></div>):navigate("/")}
    </>
  );
};

export default CartPage;
