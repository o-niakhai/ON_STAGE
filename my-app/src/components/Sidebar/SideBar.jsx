import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArtistTags from './ArtistTags';


export default function SideBar() {
  return (
    <Box>
      <Grid container columnSpacing={1} boxShadow={0}>
        <Grid item xs={12}>
            <Typography variant="h6" textAlign="left">
              Tags
            </Typography>
            <ArtistTags/>
        </Grid>
        <Grid item xs={12}>
            <Typography>
              354
            </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}