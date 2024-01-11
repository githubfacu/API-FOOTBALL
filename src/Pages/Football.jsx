import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify'
import '../Styles/ArquitecturaUno.css'

export default function Football(){
    const [infoFutbol, setInfoFutbol] = useState([])

    const endpointFutbol = ('https://v3.football.api-sports.io/')


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
        fetch(endpointFutbol+'leagues',{headers: headers})
            .then(res=>{
                if(res.ok)
                return res.json()
                throw new Error(res.status)
            })
            .then(data=>setInfoFutbol(data.response))
            .catch(err=>console.log(err.message))
    }, [])

    console.log(infoFutbol);


    return (
        <div className='render-div'>
            <div>
                 <h2 className='titulo'>Futbol</h2>
                 <ul className='lista-ul'>
                    {infoFutbol.map((liga)=>{
                    return <> 
                        <li key={liga.league.id}>
                        <h2>{liga.league.name}</h2>
                        <img className='logo' onClick={mouseClick}
                        src={liga.league.logo} alt={"bandera de la liga: " + `${liga.league.name}`} />                
                        </li>
                    </>
                    })}
                </ul>   
            </div>
            
        </div>
    )
}
