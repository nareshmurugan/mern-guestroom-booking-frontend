import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "../App.css"

const DateComp = ({startDate,endDate,setStartDate, setEndDate}) => {


  return (
    <div >
      <div
        className="d-flex justify-content-center align-text-center"
        style={{ width: "100%", margin: "10px" }}
      >
        
        <DatePicker className="form-control me-2"
        style={{ width: "max(150px,30%)" }}
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          placeholderText="Select Check-In Date"
        />
      <h1>=</h1>
       
        <DatePicker
        className="form-control me-2"
        style={{ width: "max(150px,30%)" }}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Select Check-Out Date"
        />
</div>
    </div>
  );
};

export default DateComp;
