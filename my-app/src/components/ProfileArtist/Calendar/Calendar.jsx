import React from "react";
import DatePicker from "react-datepicker";

export default function News() {
  return (
    <div >
      <DatePicker 
        controls={['calendar']}
        min="1920-01-01"
        max="2050-01-01"
      />
    </div>
  );
}
