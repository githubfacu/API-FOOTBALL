import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavigateButton = () => {

    const [locacion, setLocacion] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        if(window.location.pathname === '/'){
            setLocacion(false)
        } else{
            setLocacion(true)
        }
    }, [locacion])

    console.log(window.location.pathname)

    const navegarAtras = (()=>{
        navigate(-1)
    })

  return (
    <>
        {locacion && <div style={{
            display: 'flex',
            width: '50px',
            height: '50px',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#003ecc',
            position: 'fixed',
            right: '3rem',
            bottom: '3rem',
            borderRadius: '5px',
            cursor: 'pointer',
            paddingRight: '3px',
            border: '5px solid #f56005'
        }} onClick={navegarAtras}>
            <i style={{color: 'beige'}} class="fa-solid fa-share-from-square fa-rotate-180 fa-2xl"></i>
        </div>}
    </>
  )
}

export default NavigateButton