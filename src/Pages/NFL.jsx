import React, { useState, useEffect } from 'react'

const NFL = () => {
    const [nflInfo, setNflInfo] = useState([])

    const url = ('https://v1.american-football.api-sports.io/')

    const configuraciones = {
        headers: {
            "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
            "x-rapidapi-host": "v1.american-football.api-sports.io"
        }
    }

    useEffect(() => {
        fetch(url+'leagues', configuraciones)
        .then(res=>{
          if(res.ok)
          return res.json()
        })
        .then(data=> setNflInfo(data.response))
    }, [])

    console.log(nflInfo);

  return (
    <div>NFL</div>
  )
}

export default NFL