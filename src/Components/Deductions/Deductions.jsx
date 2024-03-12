import React, { useState } from 'react';

const DeductionsForm = () => {
  const [deductions, setDeductions] = useState([{ name: '', amount: '' }]);

  const handleDeductionChange = (index, key, value) => {
    const updatedDeductions = [...deductions];
    updatedDeductions[index][key] = value;
    setDeductions(updatedDeductions);
  };

  const handleAddDeduction = () => {
    setDeductions([...deductions, { name: '', amount: '' }]);
  };

  return (
    <div className="modal-form">
      <h2>Deductions Form</h2>
      <form>
        {deductions.map((deduction, index) => (
          <div key={index}>
            <label htmlFor={`deductionName${index}`}>Deduction Name:</label>
            <input
              type="text"
              id={`deductionName${index}`}
              value={deduction.name}
              onChange={(e) => handleDeductionChange(index, 'name', e.target.value)}
            />

            <label htmlFor={`deductionAmount${index}`}>Deduction Amount:</label>
            <input
              type="text"
              id={`deductionAmount${index}`}
              value={deduction.amount}
              onChange={(e) => handleDeductionChange(index, 'amount', e.target.value)}
            />
          </div>
        ))}

        <button type="button" onClick={handleAddDeduction}>
          Add Deduction
        </button>
      </form>
    </div>
  );
};

export default DeductionsForm;
