import React, { useState, useEffect } from 'react'
import SelectYear from './SelectYear'


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
    <div>
    <SelectYear selectSeason={selectSeason}/>
    {infoNBA.length === 0 ? (<p>Cargando datos...</p>) : (
      <div className='standings-render'>
        <article>
            <div>
                <h2>Conferencia Este</h2>
                <div className='datos-de-tabla'>
                    <h3>Pos</h3>
                    <h3>Club</h3>
                    <h3>PG</h3>
                    <h3>PP</h3>
                </div>                
            </div>
            <ul className='tabla'>
                {infoNBA.map((club)=>{
                    if(club.conference.name === 'east'){
                    return <li key={club.team.id}>
                    <h3>{club.conference.rank}</h3>
                    <img src={club.team.logo} alt="esc" width={'30px'} height={'30px'}/>
                    <h3>{club.team.name}</h3>
                    <h3>{club.conference.win}</h3>
                    <h3>{club.conference.loss}</h3>
                </li>}
                })}
            </ul>

        </article>

        <article>
            <div>
                <h2>Conferencia Oeste</h2>
                <div className='datos-de-tabla'>
                    <h3>Pos</h3>
                    <h3>Club</h3>
                    <h3>PG</h3>
                    <h3>PP</h3>
                </div>
            </div>
            <ul className='tabla'>
                {infoNBA.map((club)=>{if(club.conference.name === 'west'){
                    return <li key={club.team.id}>
                    <h3>{club.conference.rank}</h3>
                    <img src={club.team.logo} alt="esc" width={'30px'} height={'30px'}/>
                    <h3>{club.team.name}</h3>
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