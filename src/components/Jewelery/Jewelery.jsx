import { useState, useEffect } from "react";
import { getCategory } from "../../services";
import ProductCard from "../ProductCard";
import style from './Jewelery.module.scss'

const Jewelery = ({ category }) => {
  console.log(category);
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const wrapper = async () => {
      const jewelery = await getCategory(category);
      setProducts(jewelery);
    };
    wrapper();
  }, []);

  return (
    <main className={style.Container}>
      {products &&
        products.map((product) => 
            <ProductCard key={product.id} productProp={product}/>
        )}
    </main>
  );
};

export default Jewelery;
