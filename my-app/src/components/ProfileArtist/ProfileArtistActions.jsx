import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';


export default function ProfileArtistActions() {
    return (
        <Box mr={2}
            sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            }}>
            <Button style={{fontSize: '0.7rem', color: '#45D083' }} startIcon={<AddCommentRoundedIcon />}>Message</Button>
            <Button style={{fontSize: '0.7rem', color: '#45D083' }} startIcon={<FeaturedPlayListRoundedIcon />}>About</Button>
            <Button style={{fontSize: '0.7rem', color: '#45D083' }} startIcon={<BusinessCenterRoundedIcon />}>Coopertion</Button>
            <Button style={{fontSize: '0.7rem', color: '#45D083' }} startIcon={<BadgeRoundedIcon />}>Residents</Button>
            <Button style={{fontSize: '0.7rem', color: '#45D083' }} startIcon={<ScreenShareRoundedIcon />}>Share</Button>
        </Box> 
    );
}