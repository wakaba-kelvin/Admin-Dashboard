import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
   <div className="navbar">
    <div className="routed">
      <div className="dash">
        <h3>Dashboard</h3>
        </div>
        <div className="user">
            <p>Super Admin</p>
        </div>
    </div>


   </div>
  )
}

export default Navbar