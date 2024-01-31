import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Pages.css'

const NFL = () => {
    const navigate = useNavigate()

    const navegarNFLStandings = () => {
        navigate('/NFLStandings')
    }


  return (
    <div className='render-div'>
        <h2 className='titulo'>NFL</h2>
        <img style={{alignSelf: 'center', marginTop: '-1.2rem'}} onClick={navegarNFLStandings} width={'350'} src="/Images/logo-NFL.png" alt="NFL-logo" />
    </div>
  )
}

export default NFL