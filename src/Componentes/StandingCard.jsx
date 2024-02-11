import React, { useEffect, useState } from 'react'
import '../Styles/Standings.css'

const StandingCard = ({props}) => {

  const [liga, setLiga] = useState({})
  const [puntos, setPuntos] = useState({})

  const clubes = props
  const pais = props[0].country.name.toUpperCase()

  console.log(clubes)
  console.log(puntos)
  console.log(liga)
  console.log(pais);

  useEffect(()=>{
    if(props[0].league){
      setLiga(props[0].league)
    }
    if(props[0].points){
      setPuntos(props[0].points)
    }
    if(props[0].points){
      setPuntos(props[0].points)
    }
  }, [])

  return (
    <>
    <img style={{maxWidth: '400px', maxHeight:'350px'}} src={liga.logo} alt="" />
    <h2>{liga.name} ({pais})</h2>
    <div className='datos-de-tabla'>
      <h3 style={{width: '14%'}}>Pos</h3>
      <h3 style={{width: '62%', textAlign:'start', paddingLeft: '2rem'}}>Club</h3>
      {puntos.for ? (<h3>PF</h3>) : (<h3 style={{width: '24%'}}>PTS</h3>)}
      {puntos.against && (<h3>PC</h3>)}
    </div>
    <ul className='tabla'>
      {clubes.map((club)=>(<li key={club.league.standing ? (club.league.standing.team.id) : (club.team.id)}>
        {club.league.standing ? (<h3 style={{width: '14%'}}>{club.league.standing.rank}</h3>) : (<h3 style={{width: '14%'}}>{club.position}</h3>)}
        <div className='club-names'>
          <img src={club.team.logo} alt="esc" width={'30px'} height={'30px'}/>
          {club.league.standing ? (<h3>{club.league.standing.team.name}</h3>) : (<h3 style={{width: '80%'}}>{club.team.name}</h3>)}            
        </div>
          {club.points.for ? (<h3>{club.points.for}</h3>) : (<h3 style={{width: '24%'}}>{club.points}</h3>)}
          {club.points.against && (<h3>{club.points.against}</h3>)}
        </li>)
      )}
    </ul>
    </>
  )
}

export default StandingCard