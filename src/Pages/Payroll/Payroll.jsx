import React, { useState } from 'react';
import './Payroll.scss'; 

const Payroll = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [employeeNames, setEmployeeNames] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDepartmentChange = (event) => {
    // Set the selected department when dropdown changes
    setSelectedDepartment(event.target.value);
  };

  const handleFilterEmployees = () => {
    // Implement logic to filter employees based on the selected department
    // Replace this with your actual data fetching
    // For now, just simulate fetching employee names
    setEmployeeNames(['Employee 1', 'Employee 2', 'Employee 3']);
  };

  const handleCalendarChange = (event) => {
    // Set the selected date when the calendar changes
    setSelectedDate(event.target.value);
  };

  const handleNext = () => {
    // Implement logic to move to the next step
    console.log('Moving to the next step');
  };

  return (
    <form>
      <h2>Select Department and Employees</h2>

      {/* Department Dropdown */}
      <div className="form-group">
        <label htmlFor="departmentDropdown">Select Department:</label>
        <select
          id="departmentDropdown"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
        >
          <option value="">Select Department</option>
          <option value="HR">Human Resources</option>
          <option value="IT">Information Technology</option>
          {/* Add more department options as needed */}
        </select>
      </div>

      {/* Button to filter employee names */}
      <button onClick={handleFilterEmployees}>Filter Employees</button>

      {/* Employee Names Display */}
      {employeeNames.length > 0 && (
        <div>
          <h3>Employee Names:</h3>
          <ul>
            {employeeNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Calendar */}
      <div className="form-group">
        <label htmlFor="calendar">Select Date:</label>
        <input
          type="date"
          id="calendar"
          value={selectedDate}
          onChange={handleCalendarChange}
        />
      </div>

      {/* Next Button */}
      <button onClick={handleNext}>Next</button>
    </form>
  );
};

export default Payroll;
