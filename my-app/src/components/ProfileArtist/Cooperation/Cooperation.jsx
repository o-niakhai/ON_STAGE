import * as React from 'react';
import Grid from '@mui/material/Grid';
import Rider from './Rider'
import Accommodation from './Accommodation'
import Equipment from './Equipment'
import Benefits from './Benefits'

export default function CooperationComponents() {
  return (
    <Grid display="grid" gridTemplateColumns="repeat(4, 1fr)" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Rider />
      <Accommodation />
      <Equipment />
      <Benefits />
    </Grid>
  );
}