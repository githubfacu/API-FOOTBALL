import React from 'react'

const NFLStandingCard = ({club}) => {

  return (
    <>
        <li key={club.team.id}>
            <h3>{club.position}</h3>
            <img src={club.team.logo} alt="esc" width={'30px'} height={'30px'}/>
            <h3>{club.team.name}</h3>
            <h3>{club.won}</h3>
            <h3>{club.lost}</h3>
            <h3>{club.points.for}</h3>
            <h3>{club.points.against}</h3>
        </li>
    </>
  )
}

export default NFLStandingCard