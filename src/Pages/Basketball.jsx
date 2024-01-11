import React, { useState, useEffect } from 'react'

const Basketball = () => {
    const [infoBasketball, setInfoBasketball] = useState([])

    const url = ('https://v1.basketball.api-sports.io/')

    const configuraciones = {
        headers: {
            "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
            "x-rapidapi-host": "v1.basketball.api-sports.io"
        }
    }

    useEffect(()=>{
        fetch(url+'leagues', configuraciones)
        .then(res=>{
            if(res.ok)
            return res.json()
        })
        .then(data=>setInfoBasketball(data.response))
    },[])

    console.log(infoBasketball);

  return (
    <div>Basketball</div>
  )
}

export default Basketball