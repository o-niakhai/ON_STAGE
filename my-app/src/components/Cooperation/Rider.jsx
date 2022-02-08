import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function Rider() {
    return (
        <Grid 
            sx={{
                backgroundColor: '#F5F6FA',
                boxShadow: 2,
                borderRadius: 2,
                width: 170,
                height: 140
            }}>
            <LocalActivityIcon sx={{ fontSize: 50 }} />
            <Typography>
                Concert Rider
            </Typography>
        </Grid>
    );
}