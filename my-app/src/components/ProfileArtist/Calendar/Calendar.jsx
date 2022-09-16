import * as React from 'react';
 import DatePicker from "react-datepicker";
import  useState  from 'react';
import Calendar from 'react-calendar';

export default function Calendar () {
  const [value, onChange] = useState(new Date());
  return (
    <>
       <DatePicker 
        controls={['calendar']}
        min="1920-01-01"
        max="2050-01-01" /> 
        
        <Calendar 
        onChange={onChange} 
        value={value} />
    </>
  );
}
