import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar'
import Sidenav from '../../Layout/Sidenav/Sidenav'
import MainContent from '../../Layout/MainContent/MainContent'
import './hero.scss'
import LoginForm from '../../Pages/login/Login'



function Hero() {
  return (
    <div className="hero">
      {/* <div className="memo"> */}
       <Sidenav/>
       {/* <Navbar/> */}
       <MainContent/>
       {/* </div> */}
    
   
    
    </div>
  )
}

export default Hero