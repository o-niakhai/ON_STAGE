import React from "react";
import DatePicker from "react-datepicker";

export default function Calendar () {
  return (
    <>
      <DatePicker 
        controls={['calendar']}
        min="1920-01-01"
        max="2050-01-01"
      />
    </>
  );
}
