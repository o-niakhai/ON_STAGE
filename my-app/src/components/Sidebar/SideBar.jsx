import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArtistTags from './ArtistTags';
import SidePlayer from './ArtistPlayer';


export default function SideBar() {
  return (
    <Box style={{ backgroundColor: '#F5F6FA' }}>
      <Grid container columnSpacing={2} boxShadow={0}>
        <Grid item xs={12}>
          <Typography variant="h6" textAlign="left">
            Tags
            </Typography>
          <ArtistTags />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" textAlign="left">
            Music
          </Typography>
          <>
            <SidePlayer />
          </>
        </Grid>
      </Grid>
    </Box>
  )
}