import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Club1 from '../../../Media/Club1.jpeg'
import Club2 from '../../../Media/Club2.jpeg'
import Club3 from '../../../Media/Club3.jpeg'



export default function Residents() {
  return (
    <Box>
        <Typography variant="h5" textAlign="left">
            Residents
        </Typography>
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1}}>
          <img src={Club1} />;
          <img src={Club2} />;
          <img src={Club3} />
        </Box>
    </Box>
  );
}