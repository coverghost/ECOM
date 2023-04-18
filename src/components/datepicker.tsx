import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date:any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date:any) => {
    setEndDate(date);
  };

  return (
    <div>
      <div>
        <label>From Date:</label>{" "}
        <DatePicker selected={startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        <label>To Date:</label>{" "}
        <DatePicker selected={endDate} onChange={handleEndDateChange} />
      </div>
    </div>
  );
}

export default DateRangePicker;
