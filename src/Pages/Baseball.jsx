import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import LeaguesCard from '../Componentes/LeaguesCard'
import '../Styles/Pages.css'

export default function Baseball(){
    const [info, setInfo] = useState([])
    const deporte = 'Baseball'
    const url = ('https://v1.baseball.api-sports.io/')

    const configuraciones = {
        headers: {
            "x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad",
            "x-rapidapi-host": "v1.baseball.api-sports.io"
        }
    }

    useEffect(()=>{
        fetch(url+'leagues', configuraciones)
        .then(res=>{
            if(res.ok)
            return res.json()
        })
        .then(data=>setInfo(data.response))
    }, [])

    // useEffect(()=>{

    //         axios(url+'leagues', configuraciones)
    //         .then((res)=> setInfo(res.data.response))  
    //         .catch((err) => console.log(err))

    // }, [])


    // useEffect(()=>{
    //     const fetchInfo = async () => {

    //         try{
    //             const res = await axios(url, {
    //                 headers: {
    //                     'x-rapidapi-key': '5e4589f6667afda2b7b7e7fdd88c8fad',
    //                     'x-rapidapi-host': 'v1.baseball.api-sports.io',
    //                 },
    //             })
    //             toast.info('🦄 Wow so easy!', {
    //                 position: "bottom-right",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //                 })
    //             setInfo(res.data.response)
    //         }
    //         catch (error){toast('toast de error')}
    //     }
    //     fetchInfo()
    // },[])

    console.log(info);

    return (
        <div className='render-div'>
            <h2 className='titulo'>{deporte}</h2>
            {info && <div className='cards-div'>
            {info.map((liga)=>{
                return <LeaguesCard 
                    id = {liga.id}
                    name = {liga.name}
                    logo = {liga.logo}
                    url = {url}
                    deporte = {deporte}
                />
            })}
            </div>}
        </div>
    )
}
