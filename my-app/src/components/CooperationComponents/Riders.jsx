import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import KingBedIcon from '@mui/icons-material/KingBed';

export default function Riders() {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography textAlign="left">Rider</Typography>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{
                    width: 180,
                    height: 180,
                }}>
                <Grid item xs={6}>
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
                <Grid item xs={6}>
                            <Box
                            style={{
                                backgroundColor: '#F5F6FA',
                                width: '170',
                                height: '170',
                                p: 1
                            }}>
                        <KingBedIcon sx={{ fontSize: 120 }} />
                        <Typography>
                            Accommodation
                        </Typography>
                        </Box>
                </Grid>
            </Grid>
        </Box>
    );
}