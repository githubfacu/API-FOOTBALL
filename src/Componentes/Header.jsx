import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Header.css'

const Header = () => {
  const navigate = useNavigate()

  const onClick = ()=>{
    navigate('/')
  }

  return (
    <div className='header'>
      <div className='caja'>
        <h2 onClick={onClick}>API-FOOTBALL</h2>
        <img src="/Images/favicon.ico" alt="API-FOOTBALL icono" />           
      </div>
    </div>
  )
}

export default Header