import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

export default function Equipment() {
    return (
        <Grid
            sx={{
                backgroundColor: '#F5F6FA',
                boxShadow: 2,
                p: 1,
            }}>
            <SettingsInputComponentIcon sx={{ fontSize: 120 }} />
            <Typography>
                Equipment
                </Typography>
        </Grid>
    );
}