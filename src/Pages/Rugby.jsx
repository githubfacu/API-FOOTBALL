import React, { useState, useEffect, useRef } from 'react'
import LeaguesCard from '../Componentes/LeaguesCard'
import Spinner from '../Componentes/Spinner'
import { handleScroll } from '../utils/WheelScroll'
import '../Styles/Pages.css'

const Rugby = () => {
    const [infoRugby, setInfoRugby] = useState([])
    const deporte = 'Rugby'
    const url = ('https://v1.rugby.api-sports.io/')
    const containerRef = useRef(null);

    const configuraciones = {
        headers: {
            "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
            "x-rapidapi-host": "v1.rugby.api-sports.io"
        }
    }

    useEffect(()=>{
        fetch(url+'leagues',configuraciones)
        .then(res=>{
            if(res.ok)
            return res.json()
        })
        .then(data=>setInfoRugby(data.response))
    }, [])

    console.log(infoRugby);

    const handleWheel = (event) => {
        handleScroll(event, containerRef);
    };

  return (
    <div className='render-div'>
        <h2 className='titulo'>{deporte}</h2>
        <div className='contenido-pages'>
            {infoRugby.length === 0 ? <Spinner /> : <div ref={containerRef} onWheel={handleWheel} className='cards-div'>
                {infoRugby.map((liga)=>{
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
    </div>
  )
}

export default Rugby