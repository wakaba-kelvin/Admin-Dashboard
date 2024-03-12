import React, { useState } from 'react';

const SummaryForm = () => {
  const [basicSalary, setBasicSalary] = useState('');
  const [totalAllowance, setTotalAllowance] = useState('');
  const [totalDeductions, setTotalDeductions] = useState('');
  const [netSalary, setNetSalary] = useState('');
  const [status, setStatus] = useState('');

  const handleBasicSalaryChange = (event) => {
    setBasicSalary(event.target.value);
  };

  const handleTotalAllowanceChange = (event) => {
    setTotalAllowance(event.target.value);
  };

  const handleTotalDeductionsChange = (event) => {
    setTotalDeductions(event.target.value);
  };

  const handleNetSalaryChange = (event) => {
    setNetSalary(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="modal-form">
      <h2>Summary Form</h2>
      <form>
        <label htmlFor="basicSalary">Basic Salary:</label>
        <input
          type="text"
          id="basicSalary"
          value={basicSalary}
          onChange={handleBasicSalaryChange}
        />

        <label htmlFor="totalAllowance">Total Allowance:</label>
        <input
          type="text"
          id="totalAllowance"
          value={totalAllowance}
          onChange={handleTotalAllowanceChange}
        />

        <label htmlFor="totalDeductions">Total Deductions:</label>
        <input
          type="text"
          id="totalDeductions"
          value={totalDeductions}
          onChange={handleTotalDeductionsChange}
        />

        <label htmlFor="netSalary">Net Salary:</label>
        <input
          type="text"
          id="netSalary"
          value={netSalary}
          onChange={handleNetSalaryChange}
        />

        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          value={status}
          onChange={handleStatusChange}
        />
      </form>
    </div>
  );
};

export default SummaryForm;
