
import React from 'react';

const RowLimitDropdown = ({ onChange }) => {
  const options = [20, 50, 100];

  return (
    <select onChange={(e) => onChange(parseInt(e.target.value))}>
      {options.map((option) => (
        <option key={option} value={option}>
          Show {option} rows
        </option>
      ))}
    </select>
  );
};

export default RowLimitDropdown;
