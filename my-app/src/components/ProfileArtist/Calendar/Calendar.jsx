import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
import Box from '@mui/material/Box';

export default function CalendarCmp () {
  const [value, onChange] = useState(new Date());
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
