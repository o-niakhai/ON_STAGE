import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

const preventDefault = (event) => event.preventDefault();
const tags = ["electro", "experimental", "techno", "technopop", "synthesizer", "synthpop", "krautrock", "germany", "synthmusic", "florianschneider", "smusic"];

export default function ArtistTags() {
    return (
        <Box
            sx={{
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                    ml: 2,
                },
            }}
            onClick={preventDefault}>
            {tags.map((tags) => (
                <Typography textAlign="left">
                    <Link href="#" color="inherit" variant="body2" >
                        {tags}
                    </Link>
                </Typography>
            ))}



        </Box>
    );
}