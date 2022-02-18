import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'

export default function AboutArtist() {
    return (
        <Box>
            <Typography variant="h5" textAlign="left">
                About
                </Typography>
            <Typography textAlign="left">
                Kraftwerk is a German band that became famous in the 1970s for their use of electronic musical instruments and innovative recording techniques. While groups like the Beatles and the Beach Boys had experimented with electronic keyboard instruments and cutting-edge studio mixing and editing. 
            </Typography>
        </Box>
    );
}