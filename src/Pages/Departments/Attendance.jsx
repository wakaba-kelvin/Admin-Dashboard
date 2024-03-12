import React, { useState } from 'react';
import './Attendance.scss'; // Adjust the path based on your project structure

// Sample Employee component for the filtered list
const Employee = ({ id, name, schedule, date, timeIn, timeOut }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{schedule}</td>
    <td>{date}</td>
    <td>{timeIn}</td>
    <td>{timeOut}</td>
  </tr>
);

const Attendance = () => {
  const [departmentsData, setDepartmentsData] = useState([
    { id: 1, department: 'Human Resources', designation: 'HR Manager', totalEmployees: 5, schedule: '9 AM - 5 PM' },
    { id: 2, department: 'IT', designation: 'Software Engineer', totalEmployees: 20, schedule: '10 AM - 6 PM' },
    { id: 3, department: 'Marketing', designation: 'Marketing Specialist', totalEmployees: 10, schedule: '8 AM - 4 PM' },
  ]);

  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(departmentsData[0].id);
  const [selectedDate, setSelectedDate] = useState('');

  const handleFilterEmployees = () => {
    // Assuming you have a function to fetch employees based on department and date
    // Replace this logic with your actual data fetching
    const employees = fetchEmployees(selectedDepartment, selectedDate);
    setFilteredEmployees(employees);
  };

  const fetchEmployees = (departmentId, date) => {
    // Simulating data fetching
    // Replace this with your actual data fetching logic
    return [
      { id: 1, name: 'John Doe', schedule: '9 AM - 5 PM', date: '2024-03-15', timeIn: '9 AM', timeOut: '5 PM' },
      { id: 2, name: 'Jane Smith', schedule: '9 AM - 5 PM', date: '2024-03-15', timeIn: '9 AM', timeOut: '5 PM' },
      // ... add more employee data
    ];
  };

  return (
    <div>
      {/* Dropdown for selecting department */}
      <label htmlFor="departmentDropdown">Select Department:</label>
      <select
        id="departmentDropdown"
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(Number(e.target.value))}
      >
        {departmentsData.map((department) => (
          <option key={department.id} value={department.id}>
            {department.department}
          </option>
        ))}
      </select>

      {/* HTML5 date input for selecting a date */}
      <label htmlFor="datePicker">Select Date:</label>
      <input
        type="date"
        id="datePicker"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      {/* Button to filter employees based on department and date */}
      <button onClick={handleFilterEmployees}>Get Employees List</button>

      {/* Table for displaying filtered employees */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Schedule</th>
            <th>Date</th>
            <th>Time In</th>
            <th>Time Out</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <Employee key={employee.id} {...employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
