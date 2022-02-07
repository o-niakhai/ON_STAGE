import * as React from 'react';
import Grid from '@mui/material/Grid';
import Rider from './Rider'
import Accommodation from './Accommodation'
import Equipment from './Equipment'
import Benefits from './Benefits'



export default function CooperationComponents() {
  return (
    <Grid display="grid" gridTemplateColumns="repeat(4, 1fr)" boxShadow={0}
      sx={{
        pl: 0,
        boxShadow: 0
      }}
      style={{ boxShadow: 0 }}>
        <Rider />
        <Accommodation />
        <Equipment />
        <Benefits />
    </Grid>
  );
}
