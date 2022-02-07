import * as React from 'react';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player'

export default function SidePlayer() {
    return (
        <Box>
            <ReactPlayer
            width='100%'
            url='https://soundcloud.com/thekraftwerkdatabase/sets/kraftwerk-ralf-und-florian?si=35198e44c6174aeeaabffdd2c4a0e8ef&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' />
        </Box>
    )
}