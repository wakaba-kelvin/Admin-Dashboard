import { useState } from 'react';
import client from '../../assets/user2.svg';
import clients from '../../assets/users-svgrepo-com.svg';
import './Container.scss';
import Graph from '../Graph/Graph';
import { UserData } from '../../Components/Data/Data';

function Container() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
    }]
  });



  return (
        <div className="cont">
          <div className="first-row">
  <div className="card">
<div className="header">
  <h3>Total Employees</h3>
</div>
<div className="money">
  <div className="icon">
    <img src={clients} alt="no pic" />
  </div>
  <div className="revenue">
    <h3><span>0</span></h3>
    <p>Number of people</p>
  </div>
</div>
  </div>
  <div className="card">
<div className="header">
  <h3>Present Today</h3>
</div>
<div className="money">
  <div className="icon">
    <img src={clients} alt="no pic" />
  </div>
  <div className="revenue">
    <h3><span>0</span></h3>
    <p>Number of  people</p>
  </div>
</div>
  </div>
  <div className="card">
<div className="header">
  <h3>Departments</h3>
</div>
<div className="money">
  <div className="icon">
    <img src={client} alt="no pic" />
  </div>
  <div className="revenue">
    <h3><span>5</span></h3>
    <p>Departments</p>
  </div>
</div>
  </div>
  <div className="card">
<div className="header">
  <h3>On leave</h3>
</div>
<div className="money">
  <div className="icon">
    <img src={clients} alt="no pic" />
  </div>
  <div className="revenue">
    <h3><span>356</span></h3>
    <p>On leave</p>
  </div>
</div>
  </div>
  </div>
  <div className="second-row">
    <div className="quote">
      <h3>Do the do before the do do you</h3>
    </div>
    <div className="Activity-log">
      Notes
    </div>
  </div>
      <div className="third">
      <div className="graph">
        <Graph chartData={userData}/>
      </div>
      </div>
    </div>
  );
};


export default Container