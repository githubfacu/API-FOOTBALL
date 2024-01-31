import React from 'react'
import MenuLateralCard from './MenuLateralCard'
import '../Styles/MenuLateral.css'

const MenuLateral = () => {

  const ligas = [{
    deporte: 'Baseball', liga1: 'Bundesliga', liga1id: '48', liga2: 'LMBP', liga2id: '57', liga3: 'LMP', liga3id: '22'
  }, {
    deporte: 'Basketball', liga1: 'Euroleague', liga1id: '120', liga2: 'Latvia-Estonian League', liga2id: '204', liga3: 'BIG3', liga3id: '178'
  },{
    deporte: 'Football', liga1: '', liga1id: '', liga2: '', liga2id: '', liga3: '', liga3id: ''
  }, {
    deporte: 'Handball', liga1: 'NLA', liga1id: '115', liga2: 'Premijer Liga', liga2id: '8', liga3: 'HLA', liga3id: '2'
  },{
    deporte: 'Hockey', liga1: 'LNHH', liga1id: '46', liga2: 'VHL', liga2id: '36', liga3: 'BeNe League', liga3id: '147'
  }, {
    deporte: 'NBA'
  },{
    deporte: 'NFL'
  }, {
    deporte: 'Rugby', liga1: 'Major League Rugby', liga1id: '44', liga2: 'Top 14', liga2id: '16', liga3: 'Premiership', liga3id: '5'
  },{
    deporte: 'Volleyball', liga1: 'Super League', liga1id: '52', liga2: 'LVA', liga2id: '4', liga3: 'Liga Women', liga3id: '3'
  }]


  return (
    <div className='menu-lateral'>
      {ligas.map((liga)=>{
        return <MenuLateralCard props={liga}/>
      })}
    </div>
  )
}

export default MenuLateral