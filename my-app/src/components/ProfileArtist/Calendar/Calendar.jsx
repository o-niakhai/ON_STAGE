import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Box from '@mui/material/Box';

export default function CalendarCmp () {
  const [value, onChange] = useState(new Date());
  return (
    <Box 
    sx={{
      display: 'flexbox',
      alignItems: 'stretch',
      width: '100%',
      height: '100%',
      "&:hover": {
        backgroundColor: 'rgba(0, 0, 0, 0.01)'
      },}}>
        <Calendar 
        onChange={onChange} 
        value={value}
        />
    </Box>
  );
}
