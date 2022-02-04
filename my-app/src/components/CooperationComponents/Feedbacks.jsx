import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RatingArtist from './RatingArtist';


export default function Feedbacks() {
    return (
        <Box>
            <Typography variant="h5" textAlign="left">Feedbacks</Typography>
            <Grid container columns
                sx={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Grid
                    style={{ width: '100%' }}
                    sx={{
                        boxShadow: 0,
                        p: 1,
                    }}>
                    <Box
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between' 
                        }}
                        style={{
                            width: '170',
                            height: '170',
                            p: 1
                        }}>
                        <Typography>
                            Calvin Johnes
                        </Typography>
                        <Typography>
                            <RatingArtist />
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xl={6} md={6} sm={12} xs={12}
                    sx={{
                        boxShadow: 0,
                        p: 1,
                    }}>
                    <Box
                        style={{
                            width: '170',
                            height: '170',
                            p: 1
                        }}>
                        <Typography>
                        "I have never been to a concert like that before, ... in my life.  That wasn't a concert, that was a service!!! ... The presence of the Lord was there!"
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}