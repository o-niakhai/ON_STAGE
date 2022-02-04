import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Riders from '../CooperationComponents/Riders'
import Feedbacks from '../CooperationComponents/Feedbacks'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: (0),
}));

export default function CooperationComponents() {
  return (
      <Grid container columnSpacing={1} boxShadow={0}
      sx={{ 
        pl: 2,
        boxShadow: 0 
    }}
    style={{boxShadow: 0 }}
    >
        <Grid item xs={6} boxShadow={0}>
          <Item sx={{ boxShadow: 0 }}><Riders/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 0 }}><Feedbacks /></Item>
        </Grid>
      </Grid>
  );
}
