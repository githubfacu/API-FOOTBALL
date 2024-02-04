import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/Pages.css'

const NavigateButton = () => {

    const [show, setShow] = useState(false)
    const location = window.location.pathname
    const navigate = useNavigate()

    useEffect(()=>{
        setShow(true)
        if(location === '/'){
            setShow(false)
        }
    }, [location])

    console.log(window.location.pathname)

    const navegarAtras = (()=>{
        navigate(-1)
    })


  return (
    <>
        {show && <div className='navigate-button' onClick={navegarAtras}>
            <i style={{color: 'beige'}} className="fa-solid fa-share-from-square fa-rotate-180 fa-2xl"></i>
        </div>}
    </>
  )
}

export default NavigateButton