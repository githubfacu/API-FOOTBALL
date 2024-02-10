import React from 'react'
import { Link } from 'react-router-dom'

const MenuLateralCard = ({props}) => {

    console.log(props);

  return (
    <>
        <Link to={`/${props.deporte}`}>{props.deporte}</Link>
    </>
  )
}

export default MenuLateralCard