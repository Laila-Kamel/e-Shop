import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById,getListOfFavouritedItems } from "../../services";
import style from "./ProductPage.module.scss";
import { IoIosHeart } from "react-icons/io";
import ColorVariant from "../../components/ColorVariant/ColorVariant";
import { ItemsInCartContext } from "../../Context/Context";
import { NoOfItemsInCartContext } from "../../Context/NoOfItemsPRovider";
import { NoOfFaouritedItemsContext } from "../../Context/NoOfFaouritedItemsProvider";
import { isFavourited } from "../../services";

const ProductPage = () => {
  const params = useParams();
  const{items,setItems}=useContext(ItemsInCartContext);
  const { noOfFavouritedItems, setnoOfFavouritedItems } = useContext(
    NoOfFaouritedItemsContext
  );
  const {noOfItems,setNoOfItems}=useContext(NoOfItemsInCartContext)
  const { productId } = params;
  console.log(params);
  console.log(productId);
  const [product, setProduct] = useState("");
  const [clicked, setClicked] = useState();
  const [prdctID,setPrdctID]=useState(productId);
  const [loading, setLoading] = useState(false);


  const check=(e)=>{
  
    if(e.target.value>product.quantity){
    alert(`No enough Stock,the available stock is ${product.quantity}`)
    e.target.value=1;}
  }
  const addToCartClicked=()=>{
    const qty=parseInt(document.getElementById("qty").value);
    console.log(qty);
    console.log(product.quantity);
    if(product.quantity<qty){
      alert(`No enough stock, the available stock is ${product.quantity} pieces`);
    }
    else{
    items.push({...product,quantityOrdered:qty})
    setItems(items)
    console.log(items);
    console.log(items.length);
    const totalItemsOrdered=items.reduce((acc,current)=>{
      acc+=parseInt(current.quantityOrdered);
      return acc
    },0)
    setNoOfItems(totalItemsOrdered)//
    console.log(qty);
    console.log(noOfItems);//
    console.log(totalItemsOrdered);
  }
}
const favouriteBtnClicked=async(isfavourite,id)=>{
  setClicked(!clicked);
  await isFavourited(isfavourite,id);
}
  

  useEffect(() => {
    setClicked(product.favourited)
    console.log(product.favourited);
    console.log(clicked);
    setItems(items)
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
  }, [prdctID,product.favourited]);

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
              <select id="qty" type="number" onChange={check}>
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
                onClick={(e)=>{e.preventDefault();favouriteBtnClicked(product.favourited,product.id)}}
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
