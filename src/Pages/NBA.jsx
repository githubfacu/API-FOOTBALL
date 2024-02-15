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
        <img style={{alignSelf: 'center', marginTop: '2.5rem', padding: '1rem 0', background: '#090909'}} onClick={navegarNBAStandings} height={'210px'} src="/Images/National-Basketball-Association-Logo-1969-2017.png" alt="NBA-logo" />
    </div>
  )
}

export default NBA