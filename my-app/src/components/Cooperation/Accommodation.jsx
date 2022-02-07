import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import KingBedIcon from '@mui/icons-material/KingBed';

export default function Accommodation() {
    return (
        <Grid
            sx={{
                backgroundColor: '#F5F6FA',
                boxShadow: 2,
                p: 1,
            }}>
            <KingBedIcon sx={{ fontSize: 120 }} />
            <Typography>
                Accommodation
            </Typography>
        </Grid>
    );
}