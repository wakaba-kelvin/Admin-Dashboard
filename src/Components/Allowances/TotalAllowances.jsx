import React, { useState } from 'react';

const TotalAllowance = () => {
  const [allowances, setAllowances] = useState([{ type: '', amount: '' }]);

  const handleAllowanceChange = (index, key, value) => {
    const updatedAllowances = [...allowances];
    updatedAllowances[index][key] = value;
    setAllowances(updatedAllowances);
  };

  const handleAddAllowance = () => {
    setAllowances([...allowances, { type: '', amount: '' }]);
  };

  return (
    <div className="modal-form">
      <h2>Allowances Form</h2>
      <form>
        {allowances.map((allowance, index) => (
          <div key={index}>
            <label htmlFor={`allowanceType${index}`}>Allowance Type:</label>
            <input
              type="text"
              id={`allowanceType${index}`}
              value={allowance.type}
              onChange={(e) => handleAllowanceChange(index, 'type', e.target.value)}
            />

            <label htmlFor={`allowanceAmount${index}`}>Allowance Amount:</label>
            <input
              type="text"
              id={`allowanceAmount${index}`}
              value={allowance.amount}
              onChange={(e) => handleAllowanceChange(index, 'amount', e.target.value)}
            />
          </div>
        ))}

        <button type="button" onClick={handleAddAllowance}>
          Add Allowance
        </button>
      </form>
    </div>
  );
};

export default TotalAllowance;
