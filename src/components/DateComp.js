import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "../App.css"

const SearchFil = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleClick = () => {
    const sd = new Date(
      moment(new Date(startDate)).format("YYYY-MM-DD")
    ).getTime();
    const ed = new Date(
      moment(new Date(endDate)).format("YYYY-MM-DD")
    ).getTime();
    console.log(ed, sd);
  };

  return (
    <div>
      <h1>Date Range Picker</h1>
      <div>
        <label>Check-In Date:</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
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

        <Button variant="secondary" onClick={() => handleClick()}>
          Search
        </Button>
      </div>

    </div>
  );
};

export default SearchFil;
