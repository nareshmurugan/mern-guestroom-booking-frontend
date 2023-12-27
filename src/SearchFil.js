import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchFil = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div>
      <h1>Date Range Picker</h1>
      <div>
        <label>Check-In Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          placeholderText="Select Check-In Date"
        />
      </div>
      <div>
        <label>Check-Out Date:</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Select Check-Out Date"
        />

<Button variant="secondary">
            Search
          </Button>
      </div>
    </div>
  );
};

export default SearchFil;
