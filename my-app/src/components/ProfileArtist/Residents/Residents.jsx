import * as React from 'react';
import Box from '@mui/material/Box';
import Club1 from '../../../Media/Club1.jpg'
import Club2 from '../../../Media/Club2.jpg'
import Club3 from '../../../Media/Club3.jpg'



export default function Residents() {
  return (
    <Box>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 150,
          p: 1,
          m: 1
        }}>
        <img src={Club1} alt='club' />
        <img src={Club2} alt='club' />
        <img src={Club3} alt='club' />
      </Box>
    </Box>
  );
}