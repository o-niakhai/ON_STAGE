import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

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
                <Box textAlign="left"
                sx={{ 
                    display: 'inline-flex'}}
                        style={{
                            backgroundColor: '#fff',}}>
                    <Link href="#" color="inherit" variant="body2" >
                        {tags}
                    </Link>
                </Box>
            ))}
        </Box>
    );
}