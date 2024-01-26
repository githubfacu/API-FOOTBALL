import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/ArquitecturaUno.css'

const NBA = () => {
    const navigate = useNavigate()

    const navegarNBAStandings = () => {
        navigate('/NBAStandings')
    }

  return (
    <div className='render-div'>
        <h2 className='titulo'>NBA</h2>
        <div className='cards-div' style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
            <img onClick={navegarNBAStandings} width={'350px'} src="/Images/National-Basketball-Association-Logo-1969-2017.png" alt="NBA-logo" />
        </div>
    </div>
  )
}

export default NBA