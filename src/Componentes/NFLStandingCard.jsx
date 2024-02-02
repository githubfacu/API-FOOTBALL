import React from 'react'

const NFLStandingCard = ({club}) => {

  return (
    <>
        <li className='nfl-li' key={club.team.id}>
            <h3>{club.position}</h3>
            <div className='club-names' style={{width: '50%'}}>
              <img src={club.team.logo} alt="esc" width={'30px'} height={'30px'}/>
              <h3 style={{width: '80%'}}>{club.team.name}</h3>              
            </div>
            <h3>{club.won}</h3>
            <h3>{club.lost}</h3>
            <h3>{club.points.for}</h3>
            <h3>{club.points.against}</h3>
        </li>
    </>
  )
}

export default NFLStandingCard