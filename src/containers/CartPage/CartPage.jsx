import React, { useEffect, useState } from "react";
import style from "./CartPage.module.scss";
import { ItemsInCartContext } from "../../Context/Context";
import { NoOfItemsInCartContext } from "../../Context/NoOfItemsPRovider";
import { useContext, useRef } from "react";

const CartPage = () => {
  const { items, setItems } = useContext(ItemsInCartContext);
  const { noOfItems, setNoOfItems } = useContext(NoOfItemsInCartContext);
  console.log(items);
  const repeatedItem = [];
  const firstMount = useRef(true);
  const [total, setTotal] = useState(0);
  const [qtyOrdered, setQtyOrdered] = useState(
    items.map((item) => item.quantityOrdered)
  );

  // console.log(qtyOrdered);

  const increment = (index) => {
    const qtyInput = document.getElementById("qty").value;
    console.log(items[index].quantity);
    console.log(qtyInput);
    if (items[index].quantity > qtyInput) {
      items[index].quantityOrdered += 1;
      setQtyOrdered(items.map((itm) => itm.quantityOrdered));
    } else {
      alert("No available stock");
    }
    setNoOfItems(
      items.reduce((acc, current) => (acc += current.quantityOrdered), 0)
    );
  };

  const decrement = (index) => {
    const qtyInput = document.getElementById("qty").value;
    if (qtyInput > 1) {
      items[index].quantityOrdered -= 1;
      setQtyOrdered(items.map((itm) => itm.quantityOrdered));
    }

    else {
      // items[index] = null;
      // setQtyOrdered(items.filter((item,i)=>{if(i!=index)return item.quantityOrdered}))
      // setItems(items.filter((item,i)=>i!=index))
    }

    setNoOfItems(
      items.reduce((acc, current) => (acc += current.quantityOrdered), 0)
    );
  };

  const test = (item) => {
    setQtyOrdered(item.quantityOrdered);
    // return qtyOrdered
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
    setItems(Object.values(repeatedItem));
    setQtyOrdered(items.map((itm) => itm.quantityOrdered));
    console.log(items);

    const totalPaid = items.reduce(
      (acc, current) => (acc += current.quantityOrdered * current.price),
      0
    );
    setTotal(totalPaid);
    // console.log(test);
  }, []);

  return (
    <>
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
              {/* <p>{test}</p> */}
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
                <input type="number" id="qty" value={qtyOrdered[index]} />
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
    </>
  );
};

export default CartPage;
