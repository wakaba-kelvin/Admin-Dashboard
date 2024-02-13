import React from 'react'
import CalendarWithSearch from '../Components/CalendarWithSearch'
import './Clients.scss'


function Clients() {
  return (
    <div className="clients">
        <div className="upper">
            <div className="up1">
                <div className="btn-up1">
                    <button className='btn1'>Branches Clients</button>
                    <button className='btn2'>All Clients</button>
                    <button className='btn3'>Add New Client</button>
                </div>
                <div className="search">
                 <CalendarWithSearch/>
                </div>
            </div>
        </div>
        <div className="up-footer">
            <div className="print">
                <div className="print-all">
                    
                </div>
                <div className="btns-down"></div>
            </div>
            <div className="search-btn">
                <search/>
            </div>
        </div>
    </div>
  )
}

export default Clients