import React from 'react';
import clientIcon from '../assets/user-9-svgrepo-com.svg'
import usericon from '../assets/user-alt-1-svgrepo-com (1).svg'
import complainicon from '../assets/complaint-dissatisfaction-expression-svgrepo-com.svg'
import invoiceIcon from '../assets/invoice-warranty-line-svgrepo-com.svg'
import Expense from '../assets/expense-register-svgrepo-com.svg'
import Dashboar from '../assets/dashboard-svgrepo-com.svg'
import './Dashboard.scss'

const Dashboard = () => {

  const itemsArray = [
    { 
      icon: clientIcon, 
      category: 'Clients', 
      details: usericon
   },
    { 
      icon: complainicon,
      category: 'Complaints',
      details: usericon
      
    },
    { 
      icon: invoiceIcon,
      category: 'Invoices',
     details: usericon
    },
    { 
      icon: Expense,
      category: 'Expenses',
      details: usericon 
    },
  ];

  return (
    <div className='Dashboard'>
      <div className="header">
      <h3>Dashboard</h3>
      <img src={Dashboar} alt="" />
      </div>
      <ul>
        {itemsArray.map((item, index) => (
          <li key={index}>
            <div className='items'>
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

export default Dashboard;
