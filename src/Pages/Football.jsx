import React, {useState, useEffect, useRef} from 'react'
import { toast } from 'react-toastify'
import LeaguesCard from '../Componentes/LeaguesCard'
import Spinner from '../Componentes/Spinner'
import { handleScroll } from '../utils/WheelScroll'
import '../Styles/Pages.css'

export default function Football(){
    const [infoFutbol, setInfoFutbol] = useState([])
    const deporte = 'Football'
    const url = ('https://v3.football.api-sports.io/')
    const containerRef = useRef(null);

    const mouseClick = () => {
        toast.info('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    const headers = {"x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad","x-rapidapi-host": "v3.football.api-sports.io"}

    useEffect(() => {
        fetch(url+'leagues',{headers: headers})
            .then(res=>{
                if(res.ok)
                return res.json()
                throw new Error(res.status)
            })
            .then(data=>setInfoFutbol(data.response))
            .catch(err=>console.log(err.message))
    }, [])

    console.log(infoFutbol);

    const handleWheel = (event) => {
        handleScroll(event, containerRef);
    };

    return (
        <div className='render-div'>
            <h2 className='titulo'>{deporte}</h2>
            <div className='contenido-pages'>
                {infoFutbol.length === 0 ? <Spinner /> : <div ref={containerRef} onWheel={handleWheel} className='cards-div'>
                {infoFutbol.map((liga)=>{
                    return <LeaguesCard 
                        id = {liga.league.id}
                        name = {liga.league.name}
                        logo = {liga.league.logo}
                        url = {url}
                        deporte = {deporte}
                    />
                })}
                </div>}
            </div>
        </div>
    )
}
