import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'mui-image'


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
          <Image src='../../../Media/Club1.jpeg' />
          <Image src='../../../Media/Club2.jpeg' />
          <Image src='../../../Media/Club3.jpeg' />
        </Box>
    </Box>
  );
}