import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import '../Styles/ArquitecturaUno.css'

export default function Handball(){
    const [handballInfo, setHandballInfo] = useState([])

    const url = ('https://v1.handball.api-sports.io/')


    // useEffect(()=>{

    //         axios(url, {
    //             headers: {
    //             'x-rapidapi-key': '5e4589f6667afda2b7b7e7fdd88c8fad',
    //             'x-rapidapi-host': 'v1.baseball.api-sports.io',
    //             },
    //         })

    //         .then((res)=> setInfo(res.data.response))  
    //         .catch((err) => console.log(err))

    // }, [])


    // useEffect(()=>{
    //     const fetchInfo = async () => {

    //         try{
    //             const res = await axios(url+'leagues', {
    //                 headers: {
    //                     'x-rapidapi-key': '5e4589f6667afda2b7b7e7fdd88c8fad',
    //                     'x-rapidapi-host': 'v1.handball.api-sports.io',
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
    //             setHandballInfo(res.data.response)
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

    const headers = {"x-rapidapi-key": "5e4589f6667afda2b7b7e7fdd88c8fad","x-rapidapi-host": "v1.handball.api-sports.io"}

    useEffect(() => {
        fetch(url+'leagues',{headers: headers})
            .then(res=>{
                if(res.ok)
                return res.json()
                throw new Error(res.status)
            })
            .then(data=>setHandballInfo(data.response))
            .catch(err=>console.log(err.message))
    }, [])

    console.log(handballInfo);


    return (
        <div className='render-div'>
            <h2 className='titulo'>Handball</h2>
            <ul className='lista-ul'>
                {handballInfo.map((liga)=>{
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
    )
}
