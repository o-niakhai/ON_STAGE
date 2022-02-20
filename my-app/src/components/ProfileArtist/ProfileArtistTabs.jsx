import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';
import Cooperation from './Cooperation/Cooperation';
import About from './About/About';
import Message from './Message/Message';
import Residents from './Residents/Residents';

export default function ProfileArtistTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<FeaturedPlayListRoundedIcon />} iconPosition="start" value="About" label="About" />
                        <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<AddCommentRoundedIcon />} iconPosition="start" value="Message" label="Message" />
                        <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<BusinessCenterRoundedIcon />} iconPosition="start" value="Cooperation" label="Cooperation" />
                        <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<BadgeRoundedIcon />} iconPosition="start" value="Residents" label="Residents" />
                        <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<ScreenShareRoundedIcon />} iconPosition="start" value="Share" label="Share" />
                    </TabList>
                </Box>
                <TabPanel value="About"><About/></TabPanel>
                <TabPanel value="Message"><Message/></TabPanel>
                <TabPanel value="Cooperation"><Cooperation/></TabPanel>
                <TabPanel value="Residents"><Residents/></TabPanel>
                <TabPanel value="Share">Share</TabPanel>
            </TabContext>
        </Box>
    );
}