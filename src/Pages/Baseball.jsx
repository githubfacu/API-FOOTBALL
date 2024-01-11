import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import '../Styles/ArquitecturaUno.css'

export default function Baseball(){
    const [info, setInfo] = useState([])

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

    const mouseClick = () => {
        toast.info('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }


    return (
        <div className='render-div'>
            <div className='baseball'>
                <h2 className='titulo'>Ligas de Baseball</h2>
                <ul className='lista-ul'>
                    {info.map((liga)=>{
                    return <> 
                        <li key={liga.id}>
                        <h2>{liga.name}</h2>
                        <img className='logo' onClick={mouseClick}
                        src={liga.logo} alt={"logo de la liga: " + `${liga.name}`} />                
                        </li>
                    </>
                    })}
                </ul>   
            </div>
            
        </div>
    )
}
