import React from 'react'
import {Routes, Router, Route} from 'react-router-dom'
import './Maincontent.scss'
import Navbar from '../../Layout/Navbar/Navbar'
import Container from '../../Components/Container/Container'
import Employees from '../../Pages/Employees/Employees'
import Login from '../../Pages/login/Login'
import AddEmployee from '../../Pages/Employees/AddEmployee'
import Departments from '../../Pages/Departments/Departments'
import Attendance from '../../Pages/Departments/Attendance'
import Payroll from '../../Pages/Payroll/Payroll'



function MainContent() {
  return (
    <div className="maincontent">
        <Navbar/>
        <Routes>
          <Route path='*' element ={<Container/>}/>
          
          <Route path='/employees' element ={<Employees/>}/>
          {/* <Route path='/login' element = {<Login/>}/> */}
          <Route path='/addEmployee' element={<AddEmployee/>}/>
          <Route path='/departments' element={<Departments/>}/>
          <Route path='/attendance' element={<Attendance/>}/>
          <Route path='/payroll' element={<Payroll/>}/>
        </Routes>
    </div>
    
  )
}

export default MainContent