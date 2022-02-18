import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Feedbacks from './Feedbacks';
import AboutArtist from './AboutArtist';

export default function About() {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <AboutArtist />
                </Grid>
                <Grid item xs={6}>
                    <Feedbacks />
                </Grid>
            </Grid>
        </Box>
    );
}