import React, { useState, useEffect, useRef } from 'react'
import LeaguesCard from '../Componentes/LeaguesCard'
import Spinner from '../Componentes/Spinner'
import { handleScroll } from '../utils/WheelScroll'
import '../Styles/Pages.css'

const Hockey = () => {
    const [infoHockey, setInfoHockey] = useState([])
    const deporte = 'Hockey'
    const url = ('https://v1.hockey.api-sports.io/')
    const containerRef = useRef(null);

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

    const handleWheel = (event) => {
        handleScroll(event, containerRef);
    };

  return (
    <div className='render-div'>
        <h2 className='titulo'>{deporte}</h2>
        <div className='contenido-pages'>
            {infoHockey.length === 0 ? <Spinner /> : <div ref={containerRef} onWheel={handleWheel} className='cards-div'>
                {infoHockey.map((liga)=>{
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

export default Hockey