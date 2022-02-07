import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

export default function Equipment() {
    return (
        <Grid item xl={6} md={6} sm={12} xs={12}
            sx={{
                boxShadow: 2,
                p: 1,
            }}>
            <Box
                style={{
                    backgroundColor: '#F5F6FA',
                    width: '170',
                    height: '170',
                    p: 1
                }}>
                <SettingsInputComponentIcon sx={{ fontSize: 120 }} />
                <Typography>
                    Equipment
                </Typography>
            </Box>
        </Grid>
    );
}