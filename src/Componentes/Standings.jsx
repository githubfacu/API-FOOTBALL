import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StandingCard from './StandingCard'
import SelectYear from './SelectYear'

const Standings = () => {
  const [info, setInfo] = useState([])
  const [season, setSeason] = useState('2023')
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

  const cargandoDatos = () => {
    setTimeout(() => {
      if (info.length === 0) {
        return <p>Vuelve a intentar</p>
      }
    }, 5000);
  }
  
  console.log(info);
  console.log(url);

  return (
    <div>
      <SelectYear selectSeason={selectSeason}/>
      {info.length === 0 ? (<p>Cargando datos...</p>) : (
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