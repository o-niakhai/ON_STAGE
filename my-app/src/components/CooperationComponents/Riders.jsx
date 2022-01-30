import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Link } from '@mui/material';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import KingBedIcon from '@mui/icons-material/KingBed';

export default function Riders() {
    return (
        <Box>
            <Typography textAlign="left">Rider</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'colum',
                    justifyContent: 'space-between',
                    width: 180,
                    height: 180,
                }}>
                <Container
                    sx={{
                        backgroundColor: '#F5F6FA',
                        width: '100%',
                        height: '170',
                        p: 1
                    }}>
                    <LocalActivityIcon sx={{ fontSize: 120 }} />
                    <Typography>
                        Concert Rider
                                </Typography>
                </Container>
                <Container
                    sx={{
                        backgroundColor: '#F5F6FA',
                        width: '170',
                        height: '170',
                        p: 1
                    }}>
                    <KingBedIcon sx={{ fontSize: 120 }} />
                    <Typography>
                        Accommodation
                                    </Typography>
                </Container>
            </Box>
        </Box>
    );
}