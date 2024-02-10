import React, { useState, useEffect } from 'react'
import LeaguesCard from '../Componentes/LeaguesCard'
import '../Styles/Pages.css'
import Spinner from '../Componentes/Spinner'

const Volleyball = () => {
    const [infoVolley, setInfoVolley] = useState([])
    const deporte = 'Volley'
    const url = ('https://v1.volleyball.api-sports.io/')

    const configuraciones = {
        headers: {
            "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
            "x-rapidapi-host": "v1.volleyball.api-sports.io"
        }
    }

    useEffect(()=>{
        fetch(url+'leagues', configuraciones)
        .then(res=>{
            if(res.ok)
            return res.json()
        })
        .then(data=>setInfoVolley(data.response))
    }, [])

    console.log(infoVolley);

  return (
    <div className='render-div'>
        <h2 className='titulo'>{deporte}</h2>
        {infoVolley.length === 0 ? <Spinner /> : <div className='cards-div'>
            {infoVolley.map((liga)=>{
                return <LeaguesCard 
                    id = {liga.id}
                    name = {liga.name}
                    logo = {liga.logo}
                    url = {url}
                    deporte = {deporte}
                />
            })}
        </div>
        }
    </div>
  )
}

export default Volleyball