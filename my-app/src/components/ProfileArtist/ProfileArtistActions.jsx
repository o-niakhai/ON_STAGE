import * as React from 'react';
import Box from '@mui/material/Box';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {  Outlet, NavLink } from "react-router-dom";



export default function ProfileArtistActions() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box
                mr={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                <Tabs
                    TabIndicatorProps={{
                        sx: {
                            bgcolor: "#45D083",
                            height: "2px"
                        }
                    }}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    sx={{ height: '10%' }}>

                    <NavLink to="/" className={setActive}>Home
                        <Tab style={{ fontSize: '0.7rem', color: '#949494' }} 
                        icon={<FeaturedPlayListRoundedIcon />} 
                        iconPosition="start" value="About" label="About" />
                    </NavLink>
                    <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<AddCommentRoundedIcon />} iconPosition="start" value="Message" label="Message" />
                    <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<BusinessCenterRoundedIcon />} iconPosition="start" value="Cooperation" label="Cooperation" />
                    <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<BadgeRoundedIcon />} iconPosition="start" value="Residents" label="Residents" />
                    <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<ScreenShareRoundedIcon />} iconPosition="start" value="Share" label="Share" />
                </Tabs>
            </Box>
        </div>
    );
}