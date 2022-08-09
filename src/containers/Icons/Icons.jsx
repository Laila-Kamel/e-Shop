import React from 'react';
import style from './Icons.module.scss'
import CartIcon from '../../components/CartIcon';
import FavouriteListIcon from '../../components/FavouriteListIcon';

const Icons = () => {
  return (
    <div className={style.Container}>
    <FavouriteListIcon/>
    <CartIcon/>
    </div>
  )
}

export default Icons