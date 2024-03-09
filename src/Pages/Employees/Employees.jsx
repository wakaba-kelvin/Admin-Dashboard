import React from 'react';

const Employees = () => {
  const employeesData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'HR', designation: 'Manager', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'IT', designation: 'Developer', status: 'Inactive' },
    { id: 3, name: 'Alex Johnson', email: 'alex@example.com', department: 'Marketing', designation: 'Analyst', status: 'Active' },
  ];

  return (
    <div>
      <h2>Employee Table</h2>
      <table>
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
          {employeesData.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.status}</td>
              <td>
                
                <button onClick={() => handleEdit(employee.id)}>Edit</button>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                <button onClick={() => handleView(employee.id)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
