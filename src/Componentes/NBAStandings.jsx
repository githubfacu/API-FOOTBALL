import React, { useState, useEffect } from 'react'
import SelectYear from './SelectYear'
import Spinner from './Spinner'
import '../Styles/Standings.css'

const NBAStandings = () => {

    const [infoNBA, setInfoNBA] = useState([])
    const [season, setSeason] = useState('2023')
    const url = (`https://v2.nba.api-sports.io/standings?league=standard&season=${season}`)

    const configuraciones = {
        headers: {
            "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
            "x-rapidapi-host": "v2.nba.api-sports.io"
        }
    }

    useEffect(()=>{
        fetch(url, configuraciones)
        .then(res=>res.json())
        .then(data=>setInfoNBA(data.response))
    }, [season])

    console.log(infoNBA)

    const selectSeason = (value) => {
        setSeason(value)
    }


  return (
    <div className='standing-table'>
      <div style={{position: 'absolute', left: '65%'}}><SelectYear selectSeason={selectSeason}/></div>
    {infoNBA.length === 0 ? <div style={{marginTop: '10rem'}} className='spinner-container'><Spinner /></div> : (
      <div className='standings-render' style={{margin: '0'}}>
        <article>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1rem',
                background: '#181818',
                }}>
                <img style={{position: 'absolute', right: '65%'}} width={'125px'} src="/Images/eastern_conference_all_stars.png" alt="nba-logo" />
                <h2 className='basketball'>CONFERENCIA ESTE</h2>
            </div>
            <div className='datos-de-tabla'>
                <h3 style={{width: '14%'}}>Pos</h3>
                <h3 style={{width: '62%', textAlign:'start', paddingLeft: '2rem'}}>Club</h3>
                <h3>PG</h3>
                <h3>PP</h3>
            </div>                
            <ul className='tabla'>
                {infoNBA.map((club)=>{
                    if(club.conference.name === 'east'){
                    return <li key={club.team.id}>
                    <h3 style={{width: '14%'}}>{club.conference.rank}</h3>
                    <div className='club-names'>
                        <img src={club.team.logo} alt="esc" width={'30px'} height={'30px'}/>
                        <h3 style={{width: '80%'}}>{club.team.name}</h3>                        
                    </div>
                    <h3>{club.conference.win}</h3>
                    <h3>{club.conference.loss}</h3>
                </li>}
                })}
            </ul>

        </article>

        <article>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '2rem 0 1rem',
                background: '#181818'
                }}>
                <img style={{position: 'absolute', right: '65%'}} width={'125px'} src="/Images/nba-Western_Conference.png" alt="nba-logo" />
                <h2 className='basketball'>CONFERENCIA OESTE</h2>
            </div>                
            <div className='datos-de-tabla'>
                <h3 style={{width: '14%'}}>Pos</h3>
                <h3 style={{width: '62%', textAlign:'start', paddingLeft: '2rem'}}>Club</h3>
                <h3>PG</h3>
                <h3>PP</h3>
            </div>
            <ul className='tabla'>
                {infoNBA.map((club)=>{if(club.conference.name === 'west'){
                    return <li key={club.team.id}>
                    <h3 style={{width: '14%'}}>{club.conference.rank}</h3>
                    <div className='club-names' >
                        <img src={club.team.logo} alt="esc" width={'30px'} height={'30px'}/>
                        <h3 style={{width: '80%'}}>{club.team.name}</h3>                        
                    </div>
                    <h3>{club.conference.win}</h3>
                    <h3>{club.conference.loss}</h3>
                </li>}
                })}
            </ul>
        </article>
        <p className='izquierda'>NBA</p>
        <p className='derecha'>NBA</p>
      </div>
    )}
  </div>
  )
}

export default NBAStandings