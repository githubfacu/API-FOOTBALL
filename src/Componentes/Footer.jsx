import React from 'react'

const Footer = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        background: 'beige',
        marginTop: '2rem',
        padding: '.3rem 3rem .1rem',
        zIndex: '10'
    }}>
      <a href='https://github.com/githubfacu' target='blank' style={{color: '#002ecc', fontSize: '22px', alignSelf: 'center', marginRight: '.5rem'}}><i className="fa-brands fa-github" ></i></a>
      <p style={{fontFamily: 'sportsjersey', fontSize: '20px', color: '#002ecc', paddingBottom:'3px'}}>facus</p>
    </div>
  )
}

export default Footer