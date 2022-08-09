import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './ThankYou.module.scss'

const ThankYou = () => {
  return (
    <div className={style.Container}>
    <div className={style._Text}>Thank You for shopping with us....</div>
    <NavLink to='/jewelery' className={style._Link}>Back to homepage</NavLink>
    </div>
  )
}

export default ThankYou