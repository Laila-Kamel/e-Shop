import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services";
import style from "./ProductPage.module.scss";
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import 'font-awesome/css/font-awesome.min.css';

const ProductPage = () => {
  const params = useParams();
  const { productId } = params;
  console.log(params);
  console.log(productId);
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const wrapper = async () => {
      try {
        const data = await getProduct(productId);
        console.log(data);
        setProduct(data);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }

      // return data
    };
    wrapper(params);
  }, []);

//   const isFavourite=()=>{
//     const classes=
//     return 
//   }

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
              <p>SKU:{product.id}</p>
              <p className={style.Rating}>
                Rate:
                {product.rating.rate}/5
                <span>{product.rating.count} reviews</span>
              </p>
            </div>
            <p>AU$ {product.price}</p>
            <form>
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
              <FontAwesomeIcon icon={faHeart}/>
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
