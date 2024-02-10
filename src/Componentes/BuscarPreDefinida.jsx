import React, { useState } from 'react'

const BuscarPreDefinida = () => {

  const [over, setOver] = useState(false)

    const mostrarMenu = (() => {
        setOver(true)
    })
    
    const ocultarMenu = (() => {
        setOver(false)
    })

  return (
    <div onMouseOut={ocultarMenu} onMouseOver={mostrarMenu} style={{
        display: 'flex',
        alignItems: 'center',
        height:'100px',
        padding: '10px',
        width: '200px',
        justifyContent: 'center',
        background: '#141414'
    }}>
        {over ? 
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <p>Captura un Error</p>
                <i className="fa-solid fa-angle-right fa-rotate-90 fa-lg"></i>
                <p>Asian Games</p>
            </div> : 
            <h2>&lt; / &gt;</h2>
        }
    </div>
  )
}

export default BuscarPreDefinida