import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Riders from '../CooperationComponents/Riders'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(),
  color: theme.palette.text.secondary,
}));

export default function CooperationComponents() {
  return (
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={6}>
          <Item><Riders/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Feedbacks</Item>
        </Grid>
      </Grid>
  );
}
