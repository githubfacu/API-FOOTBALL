import React, { useState, useEffect, useRef } from 'react'
import LeaguesCard from '../Componentes/LeaguesCard'
import Spinner from '../Componentes/Spinner'
import { handleScroll } from '../utils/WheelScroll'
import '../Styles/Pages.css'

const Volleyball = () => {
    const [infoVolley, setInfoVolley] = useState([])
    const deporte = 'Volley'
    const url = ('https://v1.volleyball.api-sports.io/')
    const containerRef = useRef(null);

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

    const handleWheel = (event) => {
        handleScroll(event, containerRef);
    };

  return (
    <div className='render-div'>
        <h2 className='titulo'>{deporte}</h2>
        <div className='contenido-pages'>
            {infoVolley.length === 0 ? <Spinner /> : <div ref={containerRef} onWheel={handleWheel} className='cards-div'>
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
    </div>
  )
}

export default Volleyball