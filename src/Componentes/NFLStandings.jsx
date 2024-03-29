import React, { useState, useEffect } from 'react'
import SelectYear from './SelectYear'
import NFLStandingCard from './NFLStandingCard'
import Spinner from './Spinner'
import '../Styles/Standings.css'


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
    <div className='standing-table'>
    <SelectYear selectSeason={selectSeason}/>
    {nflInfo.length !== 0 && <>
    <img style={{position: 'absolute', right: '70%', top: '30%', zIndex: '1'}} width={'125px'} src="/Images/logo-NFL.png" alt="nfl-logo" />
    <img style={{position: 'absolute', left: '70%', top: '30%', zIndex: '1'}} width={'125px'} src="/Images/logo-NFL.png" alt="nfl-logo" />
    </> }
    {nflInfo.length === 0 ? <div className='spinner-container'><Spinner /></div> : (
      <div className='standings-render' style={{margin: '1rem'}}>
        <article style={{width: '100%', position: 'relative'}}>
            <h2 className='basketball' style={{textAlign: 'center', margin: '1.5rem 0 0'}}>AMERICAN FOOTBALL CONFERENCE</h2>
            <h3>AFC East</h3>      
            <div className='datos-de-tabla-NFL'>
                <h3>Pos</h3><h3 className='club'>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'American Football Conference' && club.division.includes('East')){
                    return <NFLStandingCard club={club}/>
                    }
                })}
            </ul>
        </article>

        <article>
            <h3>AFC North</h3>
            <div className='datos-de-tabla-NFL'>
                <h3>Pos</h3><h3 className='club'>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'American Football Conference' && club.division.includes('North')){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <h3>AFC South</h3>
            <div className='datos-de-tabla-NFL'>
                <h3>Pos</h3><h3 className='club'>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'American Football Conference' && club.division.includes('South')){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <h3>AFC West</h3>
            <div className='datos-de-tabla-NFL'>
                <h3>Pos</h3><h3 className='club'>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'American Football Conference' && club.division.includes('West')){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <h2 className='basketball' style={{textAlign: 'center', margin: '4rem 0 0'}}>NATIONAL FOOTBALL CONFERENCE</h2>
            <h3>NFC East</h3>
            <div className='datos-de-tabla-NFL'>
                <h3>Pos</h3><h3 className='club'>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'National Football Conference' && club.division.includes('East')){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <h3>NFC North</h3>
            <div className='datos-de-tabla-NFL'>
                <h3>Pos</h3><h3 className='club'>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'National Football Conference' && club.division.includes('North')){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <h3>NFC South</h3>
            <div className='datos-de-tabla-NFL'>
                <h3>Pos</h3><h3 className='club'>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'National Football Conference' && club.division.includes('South')){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>

        <article>
            <h3>NFC West</h3>
            <div className='datos-de-tabla-NFL'>
                <h3>Pos</h3><h3 className='club'>Club</h3><h3>PG</h3><h3>PP</h3><h3>PF</h3><h3>PC</h3>
            </div>
            <ul className='tabla'>
                {nflInfo.map((club)=>{
                    if(club.conference === 'National Football Conference' && club.division.includes('West')){
                    return <NFLStandingCard club={club}/>
                }
                })}
            </ul>
        </article>
        <p className='izquierda'>NFL</p>
        <p className='derecha'>NFL</p>

      </div>
    )}
  </div>
  )
}

export default NFLStandings