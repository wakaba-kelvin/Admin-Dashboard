import React, { useState } from 'react';
import './Departments.scss'; 

const Departments = () => {
  const [departmentsData, setDepartmentsData] = useState([
    { id: 1, department: 'Human Resources', designation: 'HR Manager', totalEmployees: 5, schedule: '9 AM - 5 PM' },
    { id: 2, department: 'IT', designation: 'Software Engineer', totalEmployees: 20, schedule: '10 AM - 6 PM' },
    { id: 3, department: 'Marketing', designation: 'Marketing Specialist', totalEmployees: 10, schedule: '8 AM - 4 PM' },
  ]);

  const [actions, setActions] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const handleAction = (departmentId, action) => {
    setActions((prevActions) => ({
      ...prevActions,
      [departmentId]: action,
    }));

    if (action === 'Edit') {
      const selected = departmentsData.find((department) => department.id === departmentId);
      setSelectedDepartment(selected);
      setIsEditFormVisible(true);
    } else if (action === 'Delete') {
      
      const updatedDepartments = departmentsData.filter((department) => department.id !== departmentId);
      setDepartmentsData(updatedDepartments);
    }
  };

  const handleEditSubmit = (editedData) => {
    
    const updatedDepartments = departmentsData.map((department) =>
      department.id === selectedDepartment.id ? { ...department, ...editedData } : department
    );

    setDepartmentsData(updatedDepartments);
    setIsEditFormVisible(false);
    setSelectedDepartment(null);
  };

  const handleEditFormClose = () => {
    setIsEditFormVisible(false);
    setSelectedDepartment(null);
  };

  return (
    <div className='attendance'>
      <table>
        <thead>
          <tr>
            <th>Departments</th>
            <th>Designation</th>
            <th>Total Employees</th>
            <th>Schedule</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {departmentsData.map((department) => (
            <tr key={department.id}>
              <td>{department.department}</td>
              <td>{department.designation}</td>
              <td>{department.totalEmployees}</td>
              <td>{department.schedule}</td>
              <td>
                <button onClick={() => handleAction(department.id, 'Edit')}>Edit</button>
                <button onClick={() => handleAction(department.id, 'Delete')}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      {isEditFormVisible && (
        <div className="edit-form-overlay">
          <div className="edit-form-container">
            <h2>Edit Employee</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="editedPosition">Position:</label>
                <input
                  type="text"
                  id="editedPosition"
                  value={selectedDepartment.designation}
                  onChange={(e) =>
                    setSelectedDepartment((prev) => ({ ...prev, designation: e.target.value }))
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="editedDepartment">Department:</label>
                <input
                  type="text"
                  id="editedDepartment"
                  value={selectedDepartment.department}
                  onChange={(e) =>
                    setSelectedDepartment((prev) => ({ ...prev, department: e.target.value }))
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="editedSchedule">Schedule:</label>
                <input
                  type="text"
                  id="editedSchedule"
                  value={selectedDepartment.schedule || ''}
                  onChange={(e) =>
                    setSelectedDepartment((prev) => ({ ...prev, schedule: e.target.value }))
                  }
                />
              </div>

              <div className="button-group">
                <button type="submit" onClick={() => handleEditSubmit(selectedDepartment)}>
                  Save Changes
                </button>
                <button type="button" onClick={handleEditFormClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Departments;
