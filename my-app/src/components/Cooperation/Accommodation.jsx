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
                borderRadius: 2,
                width: 170,
                height: 140
            }}>
            <KingBedIcon sx={{ fontSize: 50 }} />
            <Typography>
                Accommodation
            </Typography>
        </Grid>
    );
}