import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

export default function Rider() {
    return (
        <Box>
            <Typography variant="h5" textAlign="left">Rider</Typography>
            <Grid container columnSpacing={1}
                sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Grid item  xl={6} md={6} sm={12} xs={12}
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
                        <LocalActivityIcon sx={{ fontSize: 120 }} />
                        <Typography>
                            Concert Rider
                        </Typography>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    );
}