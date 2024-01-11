import React, { useState, useEffect } from 'react'

const Rugby = () => {
    const [infoRugby, setInfoRugby] = useState([])

    const url = ('https://v1.rugby.api-sports.io/')

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

  return (
    <div>Rugby</div>
  )
}

export default Rugby