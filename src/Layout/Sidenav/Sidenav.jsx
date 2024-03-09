import React from 'react'
import './Sidenav.scss'
import Dashboard from '../../Components/Dashboard/Dashboard'



function Sidenav() {
  return (
    <div className="sidenav">
        <div className="navbar">
            <h2>Premiernets</h2>
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