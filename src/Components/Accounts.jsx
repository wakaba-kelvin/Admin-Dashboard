import React from 'react';
import Reports from '../assets/report-comment-svgrepo-com.svg'
import Resellers from '../assets/cpanel-svgrepo-com.svg'
import setting from '../assets/settings-svgrepo-com.svg'
import services from '../assets/road-map-svgrepo-com.svg'
import accoun from '../assets/savings-euro-svgrepo-com.svg'
import network from '../assets/translation-2-svgrepo-com.svg'
import usericon from '../assets/user-9-svgrepo-com.svg'
// import guidline from '../assets/deep-learning-svgrepo-com.svg'
import service from '../assets/recycle-electricity-svgrepo-com.svg'
import './Acounts.scss'


const Accounts = () => {

  const itemsArray = [
    { 
      icon: service, 
      category: 'Services', 
      details: usericon
   },
    { 
      icon: network,
      category: 'Network',
      details: usericon
    },
    { 
      icon: Reports,
      category: 'Reports',
     details: usericon
    },
    { 
      icon: Resellers,
      category: 'Resellers',
      details: usericon 
    },
    { 
        icon: setting,
        category: 'Settings',
        details: usericon 
      },
      { 
        icon: services,
        category: 'Guidelines',
        details: usericon 
      },
  ];

  return (
    <div className='Accounts'>
        <div className="header">  
      <h3>Final Accounts</h3>
        <img src={accoun} alt="" />
      </div>

      <ul>
        {itemsArray.map((item, index) => (
          <li key={index}>
            <div className='menu-items'>
              {/* <img src={item.icon} alt={item.category} /> */}
              <p>{item.category}</p>
              <img src={item.icon} alt={item.details} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;
