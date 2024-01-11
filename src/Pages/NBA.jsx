import React, { useState, useEffect } from 'react'

const NBA = () => {
    const [infoNBA, setInfoNBA] = useState([])

    const url = ('https://v2.nba.api-sports.io/')

    const configuraciones = {
        headers: {
            "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
            "x-rapidapi-host": "v2.nba.api-sports.io"
        }
    }

    useEffect(()=>{
        fetch(url+'leagues', configuraciones)
        .then(res=>res.json())
        .then(data=>setInfoNBA(data.response))
    }, [])

    console.log(infoNBA);

  return (
    <div>NBA</div>
  )
}

export default NBA