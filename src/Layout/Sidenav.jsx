import React from 'react'
import './Sidenav.scss'
import Dashboard from '../Components/Dashboard'
import Accounts from '../Components/Accounts'


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
        <div className="accounts">
        <Accounts/>
        </div>
        </div>
    </div>
  )
}

export default Sidenav