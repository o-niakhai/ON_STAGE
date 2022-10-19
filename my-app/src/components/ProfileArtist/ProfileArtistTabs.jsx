import * as React from 'react';
// import PropTypes from 'prop-types';
// import {  Routes, Route } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
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

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}>
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }
// export default function ProfileArtistTabs() {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
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
            {/* <Routes>
                <Route>
                    <Route path='./About/About' element={<About/>} />
                    <Route path='./Calendar/Calendar.jsx' element={<CalendarComp/>} />
                    <Route path='./Message/Message.jsx' element={<Message/>} />
                    <Route path='./Cooperation/Cooperation.jsx' element={<Cooperation/>} />
                    <Route path='./Residents/Residents.jsx' element={<Residents/>} />
                </Route>
            </Routes> */}
        </Box>
    );
}
export default ProfileArtistTabs;