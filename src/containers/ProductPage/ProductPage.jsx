import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services";
import style from "./ProductPage.module.scss";
import { IoIosHeart } from "react-icons/io";
import ColorVariant from "../../components/ColorVariant/ColorVariant";
import { ItemsInCartContext } from "../../Context/Context";
import { NoOfItemsInCartContext } from "../../Context/NoOfItemsPRovider";

const ProductPage = () => {
  const params = useParams();
  const{items,setItems}=useContext(ItemsInCartContext);
  const {noOfItems,setNoOfItems}=useContext(NoOfItemsInCartContext)
  const { productId } = params;
  console.log(params);
  console.log(productId);
  const [product, setProduct] = useState("");
  const [clicked, setClicked] = useState(false);
  const [prdctID,setPrdctID]=useState(productId);
  // const [noOfItemsInCart,setNoOfItemsInCart]=useState(0);
  const [orderItems,setOrderItems]=useState([]);


  const addToCartClicked=()=>{
    const qty=parseInt(document.getElementById("qty").value);
    console.log(qty);
    console.log(product.quantity);
    if(product.quantity<qty){
      alert(`No enough stock, the available stock is ${product.quantity} pieces`);
    }
    else{
    items.push({...product,quantityOrdered:qty})//
    setItems(items)//
    // items.push(product);
    // console.log(orderItems);
    console.log(items);
    console.log(items.length);
    // setNoOfItemsInCart(items.length)//
    const totalItemsOrdered=items.reduce((acc,current)=>{
      acc+=parseInt(current.quantityOrdered);
      return acc
    },0)
    // setNoOfItems(items.length)
    setNoOfItems(totalItemsOrdered)//
    console.log(qty);
    console.log(noOfItems);//
    console.log(totalItemsOrdered);
  }
}
  
  const isClicked = () => {
    setClicked(true);
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setItems(items)
    // setNoOfItems(items.length);
    setItems(items)//
    setLoading(true);
    const wrapper = async () => {
      try {
        const data = await getProductById(prdctID);
        console.log(data);
        setProduct(data);
      } catch (error) {
        alert("Product could not be found!");
      } finally {
        setLoading(false);
      }
    };
    wrapper();
  }, [prdctID]);

  console.log(product);

  return (
    <>
      {loading && <p>Loading....</p>}
      {product && (
        <div className={style.Container}>
          <div className={style.Image_Container}>
            <img className={style.Image} src={product.image} />
          </div>
          <div className={style.Text_Container}>
            <p className={style.Title}>{product.title}</p>
            <div className={style.RatingWithID}>
              <p>SKU: {prdctID}</p>
              <p className={style.Rating}>
                Rate:
                {product.rating}/5
                <span>{product.count} reviews</span>
              </p>
            </div>
            <p>AU$ {product.price}</p>
            <form onSubmit={(e)=>{e.preventDefault(); addToCartClicked()}}>
              <ColorVariant title={product.title} productid={prdctID} setProductId={setPrdctID}/>

              <label htmlFor="qty">Quantity</label>
              <select id="qty" type="number">
                <option value="1" default>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br></br>
              <input
                className={style.SubmitBtn}
                type="submit"
                value="Add To Cart"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setClicked(!clicked);
                }}
                className={style._FavouritedBtn}
              >
                <IoIosHeart className={clicked ? style.black : style.grey} />
              </button>
            </form>
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
