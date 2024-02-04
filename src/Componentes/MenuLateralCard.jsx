import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MenuLateralCard = ({props}) => {


    const locacion = window.location.pathname

    console.log(props);


  return (
    <>
        <Link to={`/${props.deporte}`}>{props.deporte}</Link>
    </>
  )
}

export default MenuLateralCard