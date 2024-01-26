import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/ArquitecturaUno.css'

const NFL = () => {
    const navigate = useNavigate()

    const navegarNFLStandings = () => {
        navigate('/NFLStandings')
    }


  return (
    <div className='render-div'>
        <h2 className='titulo'>NFL</h2>
        <div className='cards-div' style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
            <img onClick={navegarNFLStandings} width={'350px'} src="/Images/logo-NFL.png" alt="NFL-logo" />
        </div>
    </div>
  )
}

export default NFL