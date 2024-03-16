import { useState } from 'react'
import './App.scss'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import MainContent from './Layout/MainContent/MainContent'
import { BrowserRouter } from 'react-router-dom'
import Hero from './Components/Hero/Hero'
import Login from './Pages/login/Login'



function App() {
  

  return (
     <BrowserRouter>
    {/* <div className="container">
    <Hero/> */}
     <Routes>
          <Route path='/' element = {<Login/>}/>
          <Route path='/*' element = { <Hero/>} />
     </Routes>
     
   </BrowserRouter>
  )
}

export default App
