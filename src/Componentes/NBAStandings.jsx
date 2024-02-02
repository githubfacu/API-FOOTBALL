import React, { useState, useEffect } from 'react'
import SelectYear from './SelectYear'
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
    <SelectYear selectSeason={selectSeason}/>
    {infoNBA.length === 0 ? (<p>Cargando datos...</p>) : (
      <div className='standings-render'>
        <article>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'relative',
                margin: '5% 0 7%'
                }}>
                <img style={{
                    maxWidth: '150px', 
                    maxHeight:'150px', 
                    position: 'absolute',
                    left: '5%'
                    }} src="/Images/eastern_conference_all_stars.png" alt="nba-logo" />
                <h2 style={{fontSize: '32px'}}>Conferencia Este</h2>
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
                position: 'relative',
                margin: '7% 0'
                }}>
                <img style={{
                    maxWidth: '150px', 
                    maxHeight:'150px', 
                    position: 'absolute',
                    left: '5%'
                    }}src="/Images/nba-Western_Conference.png" alt="nba-logo" />
                <h2 style={{fontSize: '32px'}}>Conferencia Oeste</h2>
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

      </div>
    )}
  </div>
  )
}

export default NBAStandings