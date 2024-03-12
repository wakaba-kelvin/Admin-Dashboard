import React, { useState } from 'react';
import './Payroll.scss';

const Payroll = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const employees = [
    {
      name: 'John Doe',
      payPerHour: 15,
      totalHoursWorked: 40,
      overtimePerHour: 5,
      grossPay: 700,
      incomeTax: 50,
      otherDeductions: 20,
    },
  ];

  const downloadSlip = () => {
    if (selectedEmployee) {
      console.log(`Downloading slip for ${selectedEmployee.name}`);
    } else {
      console.log('No employee selected.');
    }
  };

  return (
    <div>
      <h2>Employee Payroll Table</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Pay/Hour</th>
            <th>Total Hours Worked</th>
            <th>Overtime/Hour</th>
            <th>Gross Pay</th>
            <th>Income Tax</th>
            <th>Other Deductions</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.payPerHour}</td>
              <td>{employee.totalHoursWorked}</td>
              <td>{employee.overtimePerHour}</td>
              <td>{employee.grossPay}</td>
              <td>{employee.incomeTax}</td>
              <td>{employee.otherDeductions}</td>
              <td>
                <button onClick={() => setSelectedEmployee(employee)}>
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {selectedEmployee && (
          <div>
            <h3>Selected Employee: {selectedEmployee.name}</h3>
          </div>
        )}
      </div>

      <div>
      </div>
    </div>
  );
};

export default Payroll;
