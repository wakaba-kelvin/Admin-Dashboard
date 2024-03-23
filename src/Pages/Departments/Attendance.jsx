import React, { useState, useEffect } from 'react';
import { useGetAllEmployeesQuery, useDeleteEmployeeMutation, useUpdateEmployeeMutation } from '../../Feature/Employee/Employee';
import './Attendance.scss';

function Employees() {
  const { data: employeesData, error, isLoading, refetch } = useGetAllEmployeesQuery();
  const [deleteEmployeeMutation] = useDeleteEmployeeMutation();
  const [updateEmployeeMutation] = useUpdateEmployeeMutation();
  const [deletedEmployeeId, setDeletedEmployeeId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [displayedEmployees, setDisplayedEmployees] = useState([]); // State to store displayed employees
  const [employeeIdToUpdate, setEmployeeIdToUpdate] = useState(null); // State to store the ID of the employee to update
  const [updatedFields, setUpdatedFields] = useState({}); // State to store updated employee fields

  useEffect(() => {
    if (employeesData) {
      // Sort employees by EmployeeID in ascending order
      const sortedEmployees = [...employeesData].sort((a, b) => a.EmployeeID - b.EmployeeID);
      setDisplayedEmployees(sortedEmployees);
    }
  }, [employeesData]);

  const handleDelete = async (employeeId) => {
    try {
      await deleteEmployeeMutation(employeeId);
      setDeletedEmployeeId(employeeId);
      refetch();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateEmployeeMutation({ id: employeeIdToUpdate, updatedFields });
      console.log(`Successfully updated employee with ID: ${employeeIdToUpdate}`);
      refetch();
      setIsModalOpen(false); // Close the modal after updating
    } catch (error) {
      console.error(`Error updating employee with ID ${employeeIdToUpdate}:`, error);
    }
  };

  const openModal = (employeeId) => {
    setEmployeeIdToUpdate(employeeId);
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  return (
    <div className="view">
      <div className="me"></div>
      <div className="employed">
        <h2>Employee Table</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Position</th>
              <th>CheckInTime</th>
              <th>CheckOutTime</th>
              {/* <th>Department</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedEmployees.map((employee) => (
              <tr key={employee.EmployeeID}>
                <td>{employee.EmployeeID}</td>
                <td>{`${employee.FirstName} ${employee.LastName}`}</td>
                <td>{employee.Position}</td>
                <td>{employee.CheckInTime}</td>
                <td>{employee.CheckOutTime}</td>
                {/* <td>{employee.Department}</td> */}
                <td>
                  <button className="edit-button" onClick={() => openModal(employee.EmployeeID)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(employee.EmployeeID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deletedEmployeeId && (
          <div className="toast">Employee with ID {deletedEmployeeId} deleted successfully.</div>
        )}
      </div >
      {isModalOpen && (
         <div className="modal-overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <div className="modal" style={{ width: '400px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
           <span className="close" onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize: '20px', color: '#555' }}>&times;</span>
           <h2 style={{ marginBottom: '20px' }}>Update Employee Information</h2>
           <div style={{ marginBottom: '20px' }}>
             <label htmlFor="checkIn">Check-in:</label>
             <input type="text" id="checkIn" name="checkIn" onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
             <label htmlFor="checkOut">Check-out:</label>
             <input type="text" id="checkOut" name="checkOut" onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
             <label htmlFor="position">Position:</label>
             <input type="text" id="position" name="position" onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
             <label htmlFor="department">Department:</label>
             <input type="text" id="department" name="department" onChange={handleChange} style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
           </div>
           <button onClick={handleUpdate} style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Update</button>
         </div>
       </div>
      )}
    </div>
  );
}

export default Employees;
