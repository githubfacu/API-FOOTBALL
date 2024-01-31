import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Pages.css'

const NBA = () => {
    const navigate = useNavigate()

    const navegarNBAStandings = () => {
        navigate('/NBAStandings')
    }

  return (
    <div className='render-div'>
        <h2 className='titulo'>NBA</h2>
        <img style={{alignSelf: 'center', marginTop: '-.5rem'}} onClick={navegarNBAStandings} width={'370'} src="/Images/National-Basketball-Association-Logo-1969-2017.png" alt="NBA-logo" />
    </div>
  )
}

export default NBA