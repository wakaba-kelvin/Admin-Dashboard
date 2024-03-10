import React, { useState } from 'react';
import './Employees.scss'

const Employees = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; 

  const employeesData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'HR', designation: 'Manager', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'IT', designation: 'Developer', status: 'Inactive' },
    { id: 3, name: 'Alex Johnson', email: 'alex@example.com', department: 'Marketing', designation: 'Analyst', status: 'Active' },
    
  ];

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log(`Edit employee with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Delete employee with ID ${id}`);
  };

  const handleView = (id) => {
    // Implement view functionality
    console.log(`View employee with ID ${id}`);
  };

  const totalPages = Math.ceil(employeesData.length / pageSize);

  const visibleEmployees = employeesData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="employee">  \
    <div className="header">
      <div className="Add-employee">
        <button>Add Employee</button>
      </div>
      </div>  
    <div>
      <h2>Employee Table</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid black', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {visibleEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.status}</td>
              <td>
                <button className='edit' onClick={() => handleEdit(employee.id)}>Edit</button>
                <button className='delete' onClick={() => handleDelete(employee.id)}>Delete</button>
                <button className='view' onClick={() => handleView(employee.id)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <button
              onClick={() => handlePageChange(index + 1)}
              style={{
                textDecoration: 'none',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                backgroundColor: currentPage === index + 1 ? '#ddd' : '#f2f2f2',
                color: '#333',
              }}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
 
  );
};

export default Employees;
