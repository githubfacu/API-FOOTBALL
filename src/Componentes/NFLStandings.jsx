import React, { useState, useEffect } from 'react'
import SelectYear from './SelectYear'
import NFLStandingCard from './NFLStandingCard'


const NFLStandings = () => {
    const [nflInfo, setNflInfo] = useState([])
    const [season, setSeason] = useState('2023')

    const url = (`https://v1.american-football.api-sports.io/standings?league=1&season=${season}`)

    const configuraciones = {
        headers: {
            "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
            "x-rapidapi-host": "v1.american-football.api-sports.io"
        }
    }

    useEffect(() => {
        fetch(url, configuraciones)
        .then(res=>{
          if(res.ok)
          return res.json()
        })
        .then(data=> setNflInfo(data.response))
    }, [season])

    console.log(nflInfo);

    const selectSeason = (value) => {
        setSeason(value)
    }

  return (
    <div>
    <SelectYear selectSeason={selectSeason}/>
    {nflInfo.length === 0 ? (<p>Cargando datos...</p>) : (
      <div className='standings-render'>
        <article>
            <div>
                <h2>American Football Conference</h2>
                <h3>AFC East</h3>
                <div className='datos-de-tabla'>
                    <h3>Pos</h3><h3>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
                </div>
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'American Football Conference' && club.division === 'AFC East'){
                    return <NFLStandingCard club={club}/>
                    }
                })}
            </ul>
        </article>

        <article>
            <div>
                <h2>American Football Conference</h2>
                <h3>AFC North</h3>
                <div className='datos-de-tabla'>
                    <h3>Pos</h3><h3>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
                </div>                
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'American Football Conference' && club.division === 'AFC North'){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <div>
                <h2>American Football Conference</h2>
                <h3>AFC South</h3>
                <div className='datos-de-tabla'>
                    <h3>Pos</h3><h3>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
                </div>                
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'American Football Conference' && club.division === 'AFC South'){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <div>
                <h2>American Football Conference</h2>
                <h3>AFC West</h3>
                <div className='datos-de-tabla'>
                    <h3>Pos</h3><h3>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
                </div>                
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'American Football Conference' && club.division === 'AFC West'){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <div>
                <h2>National Football Conference</h2>
                <h3>NFC East</h3>
                <div className='datos-de-tabla'>
                    <h3>Pos</h3><h3>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
                </div>                
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'National Football Conference' && club.division === 'NFC East'){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <div>
                <h2>National Football Conference</h2>
                <h3>NFC North</h3>
                <div className='datos-de-tabla'>
                    <h3>Pos</h3><h3>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
                </div>                
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'National Football Conference' && club.division === 'NFC North'){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <div>
                <h2>National Football Conference</h2>
                <h3>NFC South</h3>
                <div className='datos-de-tabla'>
                    <h3>Pos</h3><h3>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
                </div>                
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'National Football Conference' && club.division === 'NFC South'){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <div>
                <h2>National Football Conference</h2>
                <h3>NFC West</h3>
                <div className='datos-de-tabla'>
                    <h3>Pos</h3><h3>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
                </div>                
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'National Football Conference' && club.division === 'NFC West'){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

      </div>
    )}
  </div>
  )
}

export default NFLStandings