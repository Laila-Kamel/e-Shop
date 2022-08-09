import { useEffect, useState } from "react";
import style from "./FavouriteListPage.module.scss";
import { useContext } from "react";
// import { NoOfFaouritedItemsContext } from "../../Context/NoOfFaouritedItemsProvider";
import { getListOfFavouritedItems } from "../../services";

const FavouriteListPage = () => {
  // const { noOfFavouritedItems, setnoOfFavouritedItems } = useContext(
  //   NoOfFaouritedItemsContext
  // );
  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    const wrapper = async () => {
      const favouritedItems = await getListOfFavouritedItems();
      console.log(favouritedItems);
      setFavItems(favouritedItems);
      // setnoOfFavouritedItems(favouritedItems.length);
    };
    wrapper();
  }, []);

  return (
    <>
      {favItems.length != 0 &&(
        <div>
          <div className={style._Headers}>
            <p>Item</p>
            <p>Price</p>
            <p>Color</p>
          </div>
        {favItems.map((favitem) => (
          <div key={favitem.id} className={style._Container}>
            <p>{favitem.title}</p>
            <p>{favitem.price}</p>
            <p>{favitem.color}</p>
          </div>
        ))}
        </div>)}
    </>
  );
};

export default FavouriteListPage;
