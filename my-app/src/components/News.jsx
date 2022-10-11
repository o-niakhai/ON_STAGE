import React from 'react';
import Typography from '@mui/material/Typography';

export default function News() {
  return (
    <div >
      <Typography>
          News page
      </Typography>
      <Box>
        <Box  display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
        <Box gridColumn="span 2">
          <Item>
            
          </Item>
        </Box>
        <Box gridColumn="span 2">
          <Item>
            
          </Item>
        </Box>
        <Box gridColumn="span 2">
          <Item>
            
          </Item>
        </Box>
        <Box gridColumn="span 2">
          <Item>
            
          </Item>
        </Box>
        </Box>
      </Box>
    </div>
  );
}
