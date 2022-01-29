import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function ProfileArtistActions() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box mr={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                    
                }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="black"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    style={{ heith: 2 }}>
                    <Tab style={{ fontSize: '0.7rem', color: '#949494',  p: '2'}} icon={<AddCommentRoundedIcon />} iconPosition="start" value="Message" label="Message"/>
                    <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<FeaturedPlayListRoundedIcon />} iconPosition="start" value="About" label="About"/>
                    <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<BusinessCenterRoundedIcon />} iconPosition="start" value="Coopertion" label="Coopertion"/>
                    <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<BadgeRoundedIcon />} iconPosition="start" value="Residents" label="Residents"  />
                    <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<ScreenShareRoundedIcon />} iconPosition="start" value="Share" label="Share"  />
                </Tabs>
            </Box>
        </div>
    );
}