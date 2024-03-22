import React from 'react'
import './Sidenav.scss'
import logo from "../../assets/logo2.png"
import Dashboard from '../../Components/Dashboard/Dashboard'




function Sidenav() {
  return (
    <div className="sidenav">
        <div className="navbar1">
            <h2>Premiernets</h2>
            <img src={logo} alt="" style={{ width: "100px", height: "30px", marginLeft: "3rem"}}/>
        </div>
        <div className="menu">
        <div className="dashboard">
             <Dashboard/>
        </div>
        
        </div>
    </div>
  )
}

export default Sidenav