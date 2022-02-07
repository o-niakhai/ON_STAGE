import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function Rider() {
    return (
        <Grid container
            sx={{
                backgroundColor: '#F5F6FA',
                boxShadow: 2,
                p: 0,
            }}>
            <LocalActivityIcon sx={{ fontSize: 120 }} />
            <Typography>
                Concert Rider
            </Typography>
        </Grid>
    );
}