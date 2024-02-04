import React from 'react'
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
        <a href="/Baseball">
          <img width={'100px'} src="/Images/baseball-logo.png" alt="" />
          <h2>Baseball</h2>
        </a>
        <a href="/Basketball">
          <img width={'100px'} src="/Images/min-basketball.png" alt="" />
          <h2>Basketball</h2>
        </a>
        <a href="/Football">
          <img width={'100px'} src="/Images/hero-banner-1.png" alt="" />
          <h2>Football</h2>
        </a>
        <a href="/Handball">
          <img width={'100px'} src="/Images/min-handball.png" alt="" />
          <h2>Handball</h2>
        </a>
        <a href="/Hockey">
          <img width={'100px'} src="/Images/min-hockey.png" alt="" />
          <h2>Hockey</h2>
        </a>
        <a href="/NBA">
          <img width={'100px'} src="/Images/min-nba.png" alt="" />
          <h2>NBA</h2>
        </a>
        <a href="/NFL">
          <img width={'100px'} src="/Images/min-nfl.png" alt="" />
          <h2>NFL</h2>
        </a>
        <a href="/Rugby">
          <img width={'100px'} src="/Images/min-rugby.png" alt="" />
          <h2>Rugby</h2>
        </a>
        <a href="/Volleyball">
          <img width={'100px'} src="/Images/min-volleyball.png" alt="" />
          <h2>Volleyball</h2>
        </a>
    </div>
  )
}

export default Home