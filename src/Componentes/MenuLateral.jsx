import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/MenuLateral.css'

const MenuLateral = () => {
  return (
    <div className='menu-lateral'>
        <Link to={'/Baseball'}>Baseball</Link>
        <Link to={'/Basketball'}>Basketball</Link>
        <Link to={'/Football'}>Football</Link>            
        <Link to={'/Handball'}>Handball</Link>
        <Link to={'/Hockey'}>Hockey</Link>
        <Link to={'/NBA'}>NBA</Link>
        <Link to={'/NFL'}>NFL</Link>
        <Link to={'/Rugby'}>Rugby</Link>
        <Link to={'/Volleyball'}>Volleyball</Link>
    </div>
  )
}

export default MenuLateral