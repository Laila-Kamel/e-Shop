import { useState, useEffect,useContext } from "react";
import { getProducts } from "../../services";
import Carousel from "../Carousel";
import ProductCard from "../ProductCard";
import style from './Jewelery.module.scss';
import { ItemsInCartContext } from "../../Context/Context";

const Jewelery = ({ category }) => {
  console.log(category);
  const [products, setProducts] = useState([]);
  const{items,setItems}=useContext(ItemsInCartContext);
  const [noOfItemsInCart,setNoOfItemsInCart]=useState(0)
  
  useEffect(() => {
    const wrapper = async () => {
      const jewelery = await getProducts();
      console.log(jewelery);
      setProducts(jewelery);
    };
    wrapper();
  }, []);

  getProducts();
  return (
    <>
    <Carousel/>
    <main className={style.Container}>
      {products &&
        products.map((product) => 
            <ProductCard key={product.id} productProp={product}/>
        )}
    </main>
    </>
  );
};

export default Jewelery;
