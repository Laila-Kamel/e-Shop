import {NavLink} from "react-router-dom";
import style from "./ProductCard.module.scss";


const ProductCard = ({ productProp }) => {
  const { category, description, id, image, price, rating, title } =
    productProp;
  return (
    <section className={style.Card}>
      <NavLink to={`/${id}`} className={style.Image_Container}><img className={style.Card_Image} src={image} alt={title} /> </NavLink>
      <NavLink to={`/${id}`} className={style.Card_Title}>{title}</NavLink>
      <NavLink to={`/${id}`} className={style.Card_Price}>AU${price}</NavLink>
      {/* <p>{product.rating}</p> */}
    </section>
  );
};

export default ProductCard;
