import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StandingCard from './StandingCard'
import SelectYear from './SelectYear'
import Spinner from './Spinner'
import '../Styles/Standings.css'

const Standings = () => {
  const [info, setInfo] = useState([])
  const [season, setSeason] = useState('2023')
  const [cargandoDatos, setCargandoDatos] = useState(true)
  const params = useParams()
  console.log(params)
  const url = sessionStorage.getItem('url')
  const endpoint = (url+`standings?league=${params.id}&season=${season}`)

  const deporte = params.deporte
  console.log(deporte);

  const configuraciones = {
    headers: {
        "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
        "x-rapidapi-host": "v1.baseball.api-sports.io"
    }
  }

  useEffect(()=>{
    fetch(endpoint, configuraciones)
    .then(res=>{
      if(res.ok){
        return res.json()        
      } else{
        throw new Error(`Error en la solicitud: ${res.status} - ${res.statusText}`)
      }
    })
    .then(data=>setInfo(data.response))
    .catch(error=>console.error(error))
  }, [season])

  const selectSeason = (value) => {
    setSeason(value)
  }

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setCargandoDatos(false)
    }, 3000);

    return () => clearTimeout(temporizador)
  }, [season])

  console.log(info);
  console.log(url);


  return (
    <div className='standing-table'>
      <div style={{position: 'absolute', left: '65%'}}><SelectYear selectSeason={selectSeason}/></div>

        {(info.length === 0 && cargandoDatos) && <div className='spinner-container' style={{marginTop: '10rem'}}><Spinner /></div>}
        {(info.length === 0 && !cargandoDatos) && <p style={{
          marginTop: '4.5rem', padding: '.5rem 1rem', background: '#090909'}}>Datos no encontrados para esta liga, seleccione otra liga, temporada, o vuelva a intentarlo mas tarde</p>}
      
        {info.length !== 0 && (
        <div className='standings-render'>
          {info.map((club)=>{
            return <StandingCard props={club}/>
          })}
          <p className='izquierda'>{deporte}</p>
          <p className='derecha'>{deporte}</p>
        </div>
      )}

    </div>
  )
}

export default Standings