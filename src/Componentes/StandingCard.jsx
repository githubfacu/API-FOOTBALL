import React from 'react'
import '../Styles/Standings.css'

const StandingCard = ({props}) => {

  const liga = props[0].league
  const puntos = props[0].points
  const clubes = props

  console.log(clubes)
  console.log(clubes[1].team)
  console.log(puntos)
  console.log(liga)

  const imgHover = () => {
    return <p>as</p>
  }

  return (
    <>
    <h2>{liga.name}</h2>
    <div className='datos-de-tabla'>
      <h3>Pos</h3>
      <h3>Club</h3>
      {puntos.for ? (<h3>PF</h3>) : (<h3>PTS</h3>)}
      {puntos.against && (<h3>PC</h3>)}
    </div>
    <ul className='tabla'>
      {clubes.map((club)=>(<li key={club.league.standing ? (club.league.standing.team.id) : (club.team.id)}>
        {club.league.standing ? (<h3>{club.league.standing.rank}</h3>) : (<h3>{club.position}</h3>)}
          <img src={club.team.logo} alt="esc" width={'30px'} height={'30px'}/>
        {club.league.standing ? (<h3>{club.league.standing.team.name}</h3>) : (<h3>{club.team.name}</h3>)}
        
          {club.points.for ? (<h3>{club.points.for}</h3>) : (<h3>{club.points}</h3>)}
          {club.points.against && (<h3>{club.points.against}</h3>)}
        </li>)
      )}
    </ul>
    </>
  )
}

export default StandingCard