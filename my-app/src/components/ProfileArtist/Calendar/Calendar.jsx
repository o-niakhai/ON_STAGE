import React from "react";
import Datepicker from "react-datepicker";

export default function Calendar () {
  return (
    <>
      <Datepicker 
        controls={['calendar']}
        min="1920-01-01"
        max="2050-01-01"
      />
    </>
  );
}
