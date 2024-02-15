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
        <img style={{alignSelf: 'center', marginTop: '2.5rem', padding: '.5rem 1rem .3rem', background: '#090909'}} onClick={navegarNFLStandings} height={'230px'} src="/Images/logo-NFL.png" alt="NFL-logo" />
    </div>
  )
}

export default NFL