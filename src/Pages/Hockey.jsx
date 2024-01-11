import React, { useState, useEffect } from 'react'

const Hockey = () => {
    const [infoHockey, setInfoHockey] = useState([])

    const url = ('https://v1.hockey.api-sports.io/')

    const headers = {
        "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
        "x-rapidapi-host": "v1.hockey.api-sports.io"
    }

    useEffect(()=>{
        fetch(url+'leagues', {headers: headers})
        .then(res=>res.json())
        .then(data=>setInfoHockey(data.response))
    }, [])

    console.log(infoHockey);

  return (
    <div>Hockey</div>
  )
}

export default Hockey