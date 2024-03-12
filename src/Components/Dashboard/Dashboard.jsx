import React from 'react';
import { Menu, Dropdown } from 'antd';
import clientIcon from '../../assets/client-svgrepo-com.svg';
import usericon from '../../assets/user-alt-1-svgrepo-com (1).svg';
import complainicon from '../../assets/complaint-dissatisfaction-expression-svgrepo-com.svg';
import invoiceIcon from '../../assets/invoice-warranty-line-svgrepo-com.svg';
import Expense from '../../assets/expense-register-svgrepo-com.svg';
import Dashboar from '../../assets/dashboard-svgrepo-com.svg';
import './Dashboard.scss';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  const itemsArray = [
    {
      icon: Dashboar,
      category: 'Dashboard',
      details: usericon,
      path: '*'
    },
    {
      icon: clientIcon,
      category: 'Employees',
      details: usericon,
      path: '/employees',
      dropdown: [
        { label: 'View Employees', path: '/employees' },
        { label: 'Add Employee', path: '/addemployee' },
      ],
    },
    {
      icon: complainicon,
      category: 'Departments',
      details: usericon,
      path: '/departments',
      dropdown: [
        { label: 'View Departments', path: '/departments' },
        { label: 'Attendance', path: '/attendance' },
      ],
    },
    {
      icon: invoiceIcon,
      category: 'Leave',
      details: usericon,
      path: '/leave',
    },
    {
      icon: Expense,
      category: 'Payroll',
      details: usericon,
      path: '/payroll',
    },
  ];

  const renderDropdownMenu = (dropdownItems) => (
    <Menu>
      {dropdownItems.map((item, index) => (
        <Menu.Item key={index}>
          <NavLink to={item.path}>{item.label}</NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="Dashboard">
      <div className="header">
        <h3>Menu</h3>
        <img src={Dashboar} alt="" />
      </div>
      <ul>
        {itemsArray.map((item, index) => (
          <li key={index} className="dashboard-item">
            {item.dropdown ? (
              <Dropdown overlay={renderDropdownMenu(item.dropdown)} placement="bottomLeft">
                <div className="items with-dropdown">
                  <p>{item.category}</p>
                  <img src={item.icon} alt={item.details} />
                </div>
              </Dropdown>
            ) : (
              <NavLink to={item.path} activeClassName="active">
                <div className="items">
                  <p>{item.category}</p>
                  <img src={item.icon} alt={item.details} />
                </div>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
