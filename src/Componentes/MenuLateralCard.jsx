import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const MenuLateralCard = ({props}) => {
    const [visibilidad, setVisibilidad] = useState(false)
    const [validar, setValidar] = useState(false)

    const darVisibilidad = (() => {
        setVisibilidad(true)
    })

    const quitarVisibilidad = (() =>{
        setVisibilidad(false)
    })

    useEffect(()=>{
        if(props.deporte === 'NBA' || props.deporte === 'NFL'){
            return setValidar(false)
        } 
        if(visibilidad) {
            setValidar(true)
        } else{
            setValidar(false)
        }
    }, []) //Aca se deberia colocar visivilidad en el Array de dependencias


  return (
    <div className='deporte' onMouseOver={darVisibilidad} onMouseOut={quitarVisibilidad}>
        <Link to={`/${props.deporte}`}>{props.deporte}</Link>
        {validar &&
        <ul>
            <li><a href={`/Standings/${props.deporte}/${props.liga1id}`}>{props.liga1}</a></li>
            <li><a href={`/Standings/${props.deporte}/${props.liga2id}`}>{props.liga2}</a></li>
            <li><a href={`/Standings/${props.deporte}/${props.liga3id}`}>{props.liga3}</a></li>
            <li style={{textAlign:'end', fontSize: '16px', fontWeight: '900'}}><a href={`/${props.deporte}`}>...</a></li>
        </ul>
        }  
    </div>
  )
}

export default MenuLateralCard