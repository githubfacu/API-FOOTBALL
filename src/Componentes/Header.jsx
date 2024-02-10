import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Header.css'

const Header = () => {
  const navigate = useNavigate()

  const homeNavigate = ()=>{
    navigate('/')
  }


  return (
    <div className='header'>
      <div className='caja'>
        <img src="/Images/favicon.ico" alt="API-FOOTBALL icono" />
        <h2 onClick={homeNavigate}>API-FOOTBALL</h2>
      </div>
    </div>
  )
}

export default Header