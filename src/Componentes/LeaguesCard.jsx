import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Pages.css'

const LeaguesCard = ({ id, name, logo, url, deporte}) => {
  const navigate = useNavigate()

  const navegacion = () => {
    sessionStorage.setItem('url', url)
    navigate('/Standings/'+deporte+'/'+id)
  }


  return (
    <div className='card' id={id}>
      <h2 onClick={navegacion}>{name}</h2>
      <img onClick={navegacion} className='logo'
        src={logo} alt={"bandera de la liga: " + `${name}`} />
    </div>
  )
}

export default LeaguesCard