import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CalendarWithSearch.scss';

const CalendarWithSearch = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSearch = () => {
    if (selectedDate) {
      console.log('Searching for:', selectedDate);
    } else {
      console.log('Please select a date before searching');
    }
  };

  return (
    <div>
     
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd/yyyy"
        placeholderText="Select a date"
        className="custom-datepicker"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CalendarWithSearch;
