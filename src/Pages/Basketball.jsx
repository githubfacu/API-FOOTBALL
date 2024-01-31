import React, { useState, useEffect } from 'react'
import LeaguesCard from '../Componentes/LeaguesCard'
import '../Styles/Pages.css'


const Basketball = () => {
    const [infoBasketball, setInfoBasketball] = useState([])
    const deporte = 'Basketball'
    const url = ('https://v1.basketball.api-sports.io/')

    const configuraciones = {
        headers: {
            "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
            "x-rapidapi-host": "v1.basketball.api-sports.io"
        }
    }

    useEffect(()=>{
        fetch(url+'leagues', configuraciones)
        .then(res=>{
            if(res.ok)
            return res.json()
        })
        .then(data=>setInfoBasketball(data.response))
    },[])

    console.log(infoBasketball);

  return (
    <div className='render-div'>
        <h2 className='titulo'>{deporte}</h2>
        <div className='cards-div'>
            {infoBasketball.map((liga)=>{
                return <LeaguesCard 
                    id = {liga.id}
                    name = {liga.name}
                    logo = {liga.logo}
                    url = {url}
                    deporte = {deporte}
                />
            })}
        </div>
    </div>
  )
}

export default Basketball