import React, { useState, useEffect } from 'react'
import LeaguesCard from '../Componentes/LeaguesCard'
import '../Styles/ArquitecturaUno.css'

const NFL = () => {
    const [nflInfo, setNflInfo] = useState([])

    const url = ('https://v1.american-football.api-sports.io/')

    const configuraciones = {
        headers: {
            "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
            "x-rapidapi-host": "v1.american-football.api-sports.io"
        }
    }

    useEffect(() => {
        fetch(url+'leagues', configuraciones)
        .then(res=>{
          if(res.ok)
          return res.json()
        })
        .then(data=> setNflInfo(data.response))
    }, [])

    console.log(nflInfo);

  return (
    <div className='render-div'>
        <h2 className='titulo'>NFL</h2>
        <div className='cards-div'>
            {nflInfo.map((liga)=>{
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

export default NFL