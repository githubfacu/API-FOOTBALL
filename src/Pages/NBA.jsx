import React, { useState, useEffect } from 'react'
import LeaguesCard from '../Componentes/LeaguesCard'
import '../Styles/ArquitecturaUno.css'

const NBA = () => {
    const [infoNBA, setInfoNBA] = useState([])

    const url = ('https://v2.nba.api-sports.io/')

    const configuraciones = {
        headers: {
            "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
            "x-rapidapi-host": "v2.nba.api-sports.io"
        }
    }

    useEffect(()=>{
        fetch(url+'leagues', configuraciones)
        .then(res=>res.json())
        .then(data=>setInfoNBA(data.response))
    }, [])

    console.log(infoNBA);

  return (
    <div className='render-div'>
        <h2 className='titulo'>NBA</h2>
        <div className='cards-div'>
            {infoNBA.map((liga)=>{
                return <LeaguesCard 
                    id = {liga.id}
                    name = {liga.name}
                    logo = {liga.logo}
                    url = {url}
                />
            })}
        </div>
    </div>
  )
}

export default NBA