import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { Box } from '@mui/material';

export default function Rider() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignItems: 'flex-end',
                backgroundColor: '#F5F6FA',
                boxShadow: 2,
                borderRadius: 2,
                width: 170,
                height: 140,
            }}>
            <LocalActivityIcon
                sx={{
                    fontSize: 50,
                }} />
            <Typography
                sx={{
                    borderTop: 1,
                    borderTopColor: '#36385E'
                }}>
                Concert Rider
            </Typography>
        </Box>
    );
}