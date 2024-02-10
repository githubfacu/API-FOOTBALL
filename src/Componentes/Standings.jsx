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
      <SelectYear selectSeason={selectSeason}/>

        {(info.length === 0 && cargandoDatos) && <div className='spinner-container'><Spinner /></div>}
        {(info.length === 0 && !cargandoDatos) && <p style={{
          marginTop: '2rem', padding: '.5rem 1rem', background: '#121212'}}>Datos no encontrados para esta liga, seleccione otra liga, temporada, o vuelva a intentarlo mas tarde</p>}
      
        {info.length !== 0 && (
        <div className='standings-render'>
          {info.map((club)=>{
            return <StandingCard props={club}/>
          })}
        </div>
      )}

    </div>
  )
}

export default Standings