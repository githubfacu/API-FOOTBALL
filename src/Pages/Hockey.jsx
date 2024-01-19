import React, { useState, useEffect } from 'react'
import LeaguesCard from '../Componentes/LeaguesCard'
import '../Styles/ArquitecturaUno.css'

const Hockey = () => {
    const [infoHockey, setInfoHockey] = useState([])

    const url = ('https://v1.hockey.api-sports.io/')

    const headers = {
        "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
        "x-rapidapi-host": "v1.hockey.api-sports.io"
    }

    useEffect(()=>{
        fetch(url+'leagues', {headers: headers})
        .then(res=>res.json())
        .then(data=>setInfoHockey(data.response))
    }, [])

    console.log(infoHockey);

  return (
    <div className='render-div'>
        <h2 className='titulo'>Hockey</h2>
        <div className='cards-div'>
            {infoHockey.map((liga)=>{
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

export default Hockey