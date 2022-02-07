import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FastfoodIcon from '@mui/icons-material/Fastfood';

export default function Benefits() {
    return (
        <Grid
            sx={{
                backgroundColor: '#F5F6FA',
                boxShadow: 2,
                p: 1,
                borderRadius: 2
            }}>
                <FastfoodIcon sx={{ fontSize: 100 }} />
                <Typography>
                Benefits
                </Typography>
        </Grid>
    );
}