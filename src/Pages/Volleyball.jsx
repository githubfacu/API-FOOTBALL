import React, { useState, useEffect } from 'react'

const Volleyball = () => {
    const [infoVolley, setInfoVolley] = useState([])

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
    <div>Volleyball</div>
  )
}

export default Volleyball