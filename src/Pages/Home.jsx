import React from 'react'
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
        <img src="/Images/hero-banner.png" alt="logo de API-FOOTBALL" />
        <div className='titulo'>
          <h2>dfdf</h2>
          <p>sdasd</p>
        </div>
        <a href="/Baseball"><h2>Baseball</h2></a>
        <a href="/Basketball"><h2>Basketball</h2></a>
        <a href="/Football"><h2>Football</h2></a>
        <a href="/Handball"><h2>Handball</h2></a>
        <a href="/Hockey"><h2>Hockey</h2></a>
        <a href="/NBA"><h2>NBA</h2></a>
        <a href="/NFL"><h2>NFL</h2></a>
        <a href="/Rugby"><h2>Rugby</h2></a>
        <a href="/Volleyball"><h2>Volleyball</h2></a>
    </div>
  )
}

export default Home