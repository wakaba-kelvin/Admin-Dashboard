import React from 'react'
import './Maincontent.scss'
import Navbar from '../Components/Navbar'
import Container from '../Components/Container'

function MainContent() {
  return (
    <div className="maincontent">
        <Navbar/>
        <Container/>
    </div>
    
  )
}

export default MainContent