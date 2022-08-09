import {useContext} from 'react'
import style from './FavouriteListIcon.module.scss';
import { NavLink } from 'react-router-dom';
import { IoIosHeart } from 'react-icons/io';
import { NoOfFaouritedItemsContext } from '../../Context/NoOfFaouritedItemsProvider';

const FavouriteListIcon = () => {
  const { noOfFavouritedItems, setnoOfFavouritedItems } = useContext(
    NoOfFaouritedItemsContext
  );
  return (
    <div className={style.Container}>
      <NavLink to={'favouriteList'}  className={style._Icon}><IoIosHeart className={style._Icon} /></NavLink>
      {/* <p className={style._Number}>{noOfFavouritedItems}</p> */}
      </div>
  )
}

export default FavouriteListIcon