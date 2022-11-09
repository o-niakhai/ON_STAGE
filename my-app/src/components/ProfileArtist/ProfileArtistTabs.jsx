import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import About from './About/About';
import Message from './Message/Message';
import Cooperation from './Cooperation/Cooperation';
import Residents from './Residents/Residents';
import CalendarCmp from './Calendar/Calendar'
import ScreenShareIcon from '@mui/icons-material/ScreenShare';

const ProfileArtistTabs = props => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "About",
    1: "Message",
    2: "Cooperation",
    3: "Residents",
    4: "Calendar"
  };

  const indexToTabName = {
    About: 0,
    Message: 1,
    Cooperation: 2,
    Residents: 3,
    Calendar: 4
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={selectedTab} onChange={handleChange}
                    TabIndicatorProps={{
                        sx: {
                            bgcolor: "#45D083",
                            height: "2px"
                        }
                    }}>
                    <Tab
                        label="About" 
                        style={{ fontSize: '0.7rem', color: '#949494' }}
                        icon={<FeaturedPlayListRoundedIcon />}
                        iconPosition="start"/>
                    <Tab
                        label="Message" 
                        style={{ fontSize: '0.7rem', color: '#949494' }}
                        icon={<AddCommentRoundedIcon />}
                        iconPosition="start"/>
                    <Tab
                        label="Cooperation"
                        style={{ fontSize: '0.7rem', color: '#949494' }}
                        icon={<BusinessCenterRoundedIcon />}
                        iconPosition="start"
                        value="Cooperation"/>
                    <Tab
                        label="Residents" 
                        style={{ fontSize: '0.7rem', color: '#949494' }}
                        icon={<BadgeRoundedIcon />}
                        iconPosition="start"/>
                    <Tab
                        label="Calendar" 
                        style={{ fontSize: '0.7rem', color: '#949494' }}
                        icon={<ScreenShareIcon />}
                        iconPosition="start"/> 
                </Tabs>
            </Box>
            {selectedTab === 0 && <About/>}
            {selectedTab === 1 && <Message/>}
            {selectedTab === 2 && <Cooperation/>}
            {selectedTab === 3 && <Residents/>}
            {selectedTab === 4 && <CalendarCmp/>}
        </Box>
    );
}
export default ProfileArtistTabs;