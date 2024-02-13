import React from 'react'
import money from '../assets/money-pay-svgrepo-com.svg'
import client from '../assets/user2.svg'
import clients from '../assets/users-svgrepo-com.svg'
import complain from '../assets/atom-core-svgrepo-com.svg'
import './Container.scss'

function Container() {
  return (
        <div className="body">
          <div className="first-row">
  <div className="card">
<div className="header">
  <h3>Income Today</h3>
</div>
<div className="money">
  <div className="icon">
    <img src={money} alt="no pic" />
  </div>
  <div className="revenue">
    <h3><span>0</span></h3>
    <p>Revenue Today</p>
  </div>
</div>
  </div>
  <div className="card">
<div className="header">
  <h3>Income This Month</h3>
</div>
<div className="money">
  <div className="icon">
    <img src={money} alt="no pic" />
  </div>
  <div className="revenue">
    <h3><span>0</span></h3>
    <p>Revenue Today</p>
  </div>
</div>
  </div>
  <div className="card">
<div className="header">
  <h3>Active Client</h3>
</div>
<div className="money">
  <div className="icon">
    <img src={client} alt="no pic" />
  </div>
  <div className="revenue">
    <h3><span>342</span></h3>
    <p>Revenue Today</p>
  </div>
</div>
  </div>
  <div className="card">
<div className="header">
  <h3>Total Clients</h3>
</div>
<div className="money">
  <div className="icon">
    <img src={clients} alt="no pic" />
  </div>
  <div className="revenue">
    <h3><span>356</span></h3>
    <p>Revenue Today</p>
  </div>
</div>
  </div>
  </div>
  <div className="second-row">
  <div className="card">
<div className="header">
  <h4>Old Client</h4>
</div>
<div className="money">
  <div className="icon">
    <img src={clients} alt="no pic" />
  </div>
  <div className="revenue">
    <h3><span>6</span></h3>
    <p>Revenue Today</p>
  </div>
</div>
  </div>
  <div className="card">
<div className="header">
  <h4>Pending Complain</h4>
</div>
<div className="money">
  <div className="icon">
    <img src={complain} alt="no pic" />
  </div>
  <div className="revenue">
    <h3><span>0</span></h3>
    <p>Revenue Today</p>
  </div>
</div>
  </div>
  <div className="card">
<div className="header">
  <h3>Income Today</h3>
</div>
<div className="money">
  <div className="icon">
    <img src={money} alt="no pic" />
  </div>
  <div className="revenue">
    <h3><span>0</span></h3>
    <p>Revenue Today</p>
  </div>
</div>
  </div>
  </div>
      <div className="third">
        <div className="Expire">
          <div className="header">
            <h4>Today Expire Clients</h4>
          </div>
          <div className="cont">
            <div className="id">#</div>
            <div className="client-name">Client Name</div>
            <div className="balance">Balance</div>
            <div className="due">Due</div>
            <div className="Branch-Name">Branch Name</div>
          </div>
        </div>
        <div className="new-client">
          <div className="header">
            <h3>This Month New Client</h3>
          </div>
          <div className="cont">
          <div className="id">#</div>
          <div className="Client-name">Client Name</div>
          <div className="Branch-Name">Branch Name</div>
        </div>
        </div>
      </div>
    </div>
  );
};


export default Container