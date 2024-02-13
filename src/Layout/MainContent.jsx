import React from 'react'
import {Routes, Router, Route} from 'react-router-dom'
import './Maincontent.scss'
import Navbar from '../Components/Navbar'
import Container from '../Components/Container'
import Clients from '../Pages/Clients'

function MainContent() {
  return (
    <div className="maincontent">
        <Navbar/>
        <Routes>
          <Route path='*' element ={<Container/>}/>
          <Route path='/Clients' element ={<Clients/>}/>

        </Routes>
    </div>
    
  )
}

export default MainContent