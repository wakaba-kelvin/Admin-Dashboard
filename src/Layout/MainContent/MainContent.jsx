import React from 'react'
import {Routes, Router, Route} from 'react-router-dom'
import './Maincontent.scss'
import Navbar from '../../Layout/Navbar/Navbar'
import Container from '../../Components/Container/Container'
import Employees from '../../Pages/Employees/Employees'
import Login from '../../Pages/login/Login'


function MainContent() {
  return (
    <div className="maincontent">
        <Navbar/>
        <Routes>
          <Route path='*' element ={<Container/>}/>
          <Route path='/employees' element ={<Employees/>}/>
          <Route path='/login' element = {<Login/>}/>
        </Routes>
    </div>
    
  )
}

export default MainContent