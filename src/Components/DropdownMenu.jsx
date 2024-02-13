
import React, { useState, useEffect } from 'react';
import RowLimitDropdown from '../Components/RowlimitDropDown';

const DropdownMenu = () => {
  const [rowCount, setRowCount] = useState(20);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Check if data is available in local storage
    const storedData = JSON.parse(localStorage.getItem('yourDataKey')) || [];

    // If data is available, use it; otherwise, generate dummy data
    setData(storedData.length > 0 ? storedData : generateDummyData());
  }, []);

  const generateDummyData = () => {
    // Dummy data generation logic (similar to the previous example)
    return Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      clientName: `Client ${index + 1}`,
      email: `client${index + 1}@example.com`,
      phone: `123-456-${index.toString().padStart(2, '0')}`,
      area: `Area ${index + 1}`,
      plan: `Plan ${index % 3 + 1}`,
      balance: `$${(Math.random() * 1000).toFixed(2)}`,
      due: `$${(Math.random() * 500).toFixed(2)}`,
      status: index % 2 === 0 ? 'Active' : 'Inactive',
    }));
  };

  useEffect(() => {
    // Save data to local storage whenever it changes
    localStorage.setItem('yourDataKey', JSON.stringify(data));
  }, [data]);

  // Slice the data based on the selected row count
  const displayedData = data.slice(0, rowCount);

  const handleRowCountChange = (newRowCount) => {
    setRowCount(newRowCount);
  };

  return (
    <div>
      {/* Your table component */}
      <h1>Your Table</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Client Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Area</th>
            <th>Plan</th>
            <th>Balance</th>
            <th>Due</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.clientName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.area}</td>
              <td>{item.plan}</td>
              <td>{item.balance}</td>
              <td>{item.due}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Row Limit Dropdown */}
      <RowLimitDropdown onChange={handleRowCountChange} />

      {/* Display the selected row count */}
      <p>Showing {rowCount} rows</p>
    </div>
  );
};

export default DropdownMenu;
