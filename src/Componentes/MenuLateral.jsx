import React, { useState } from 'react'
import MenuLateralCard from './MenuLateralCard'
import '../Styles/MenuLateral.css'

const MenuLateral = () => {

  const [over, setOver] = useState(false)
  
  const ligas = [
    {deporte: 'Baseball'},
    {deporte: 'Basketball'},
    {deporte: 'Football'},
    {deporte: 'Handball'},
    {deporte: 'Hockey'},
    {deporte: 'NBA'},
    {deporte: 'NFL'},
    {deporte: 'Rugby'},
    {deporte: 'Volleyball'}
  ]

  const mostrarMenu = (() => {
    setOver(true)
  })

  const ocultarMenu = (() => {
    setOver(false)
  })

  return (
    <div className='menu-lateral' onMouseOut={ocultarMenu} onMouseOver={mostrarMenu}>
      {over ? <div className='desplegable'>
        <img src="/Images/115-sm.jpg" alt="logo-futbol" />
        {ligas.map((liga)=>{
          return <MenuLateralCard props={liga}/>
        })}
      </div> : <i className="fa-solid fa-angle-right fa-xl"></i>}

    </div>
  )
}

export default MenuLateral