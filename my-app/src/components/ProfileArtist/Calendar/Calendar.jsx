import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Box from '@mui/material/Box';

export default function CalendarCmp () {
  const [value, onChange] = useState(new Date());
  return (
    <Box>
        <Calendar 
        onChange={onChange} 
        value={value} 
        sx={{m: 0,
          boxShadow: 5,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main'} }}
        />
    </Box>
  );
}
