import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rider from './Rider'
import Accommodation from './Accommodation'
import Equipment from './Equipment'
import Benefits from './Benefits'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: (0),
}));

export default function CooperationComponents() {
  return (
      <Grid display="grid" gridTemplateColumns="repeat(12, 1fr)" boxShadow={0}
      sx={{ 
        pl: 0,
        boxShadow: 0 
    }}
    style={{boxShadow: 0 }}>
        <Grid item xl={6} md={6} sm={12} xs={12} boxShadow={0}>
          <Item sx={{ boxShadow: 0 }}><Rider/></Item>
        </Grid>
        <Grid item xl={6} md={6} sm={12} xs={12}>
          <Item sx={{ boxShadow: 0 }}><Accommodation/></Item>
        </Grid>
        <Grid item xl={6} md={6} sm={12} xs={12}>
          <Item sx={{ boxShadow: 0 }}><Equipment/></Item>
        </Grid>
        <Grid xl={6} md={6} sm={12} xs={12}>
          <Item sx={{ boxShadow: 0 }}><Benefits/></Item>
        </Grid>
      </Grid>
  );
}
