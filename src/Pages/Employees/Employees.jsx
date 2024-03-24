import React, { useState } from 'react';
import { useGetAllEmployeesQuery, useDeleteEmployeeMutation } from '../../Feature/Employee/Employee';
import "./Employees.scss"

function Employees() {
  const { data: employeesData, error, isLoading, refetch } = useGetAllEmployeesQuery();
  const [deleteEmployeeMutation] = useDeleteEmployeeMutation();
  const [deletedEmployeeId, setDeletedEmployeeId] = useState(null);

  const handleDelete = async (employeeId) => {
    try {
      await deleteEmployeeMutation(employeeId);
      setDeletedEmployeeId(employeeId);
      refetch();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    
    <div className="employeee">
      <h2>Employee Table</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Schedule</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="5">Error: {error.message}</td>
            </tr>
          ) : (
            employeesData && employeesData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.EmployeeID}</td>
                <td>{`${employee.FirstName} ${employee.LastName}`}</td>
                <td>{employee.Position}</td>
                <td>{employee.Schedule}</td>
                <td>
                  <button className='delete' onClick={() => handleDelete(employee.EmployeeID)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {deletedEmployeeId && (
        <div className="toast">Employee with ID {deletedEmployeeId} deleted successfully.</div>
      )}
    </div>
  );
}

export default Employees;
