import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import Calendar from 'react-calendar';
import Box from '@mui/material/Box';


const [value, onChange] = useState(new Date());

export default function CalendarCmp () {
  return (
    <Box>
      <Box>
       <DatePicker 
        controls={['calendar']}
        min="1920-01-01"
        max="2050-01-01" /> 
      </Box>
      <Box>
        <Calendar 
        onChange={onChange} 
        value={value} />
      </Box>
    </Box>
  );
}
