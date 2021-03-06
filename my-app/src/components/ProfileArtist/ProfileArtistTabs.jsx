import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';
import About from './About/About';
import Message from './Message/Message';
import Cooperation from './Cooperation/Cooperation';
import Residents from './Residents/Residents';
import { Routes, Route, Link } from "react-router-dom";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                    TabIndicatorProps={{
                        sx: {
                            bgcolor: "#45D083",
                            height: "2px"
                        }
                    }}>
                    <Tab
                        to="/"
                        label="About" {...a11yProps(0)}
                        style={{ fontSize: '0.7rem', color: '#949494' }}
                        icon={<FeaturedPlayListRoundedIcon />}
                        iconPosition="start"
                        value="About"
                    />
                    <Tab
                        to="/message"
                        label="Message" {...a11yProps(1)}
                        style={{ fontSize: '0.7rem', color: '#949494' }}
                        icon={<AddCommentRoundedIcon />}
                        iconPosition="start"
                        value="Message"
                    />
                    <Tab
                        label="Cooperation" {...a11yProps(2)}
                        style={{ fontSize: '0.7rem', color: '#949494' }}
                        icon={<BusinessCenterRoundedIcon />}
                        iconPosition="start"
                        value="Cooperation"
                    />
                    <Tab
                        label="Residents" {...a11yProps(3)}
                        style={{ fontSize: '0.7rem', color: '#949494' }}
                        icon={<BadgeRoundedIcon />}
                        iconPosition="start"
                        value="Residents"
                    />
                    <Tab
                        label="Share" {...a11yProps(4)}
                        style={{ fontSize: '0.7rem', color: '#949494' }}
                        icon={<ScreenShareRoundedIcon />}
                        iconPosition="start"
                        value="Share"
                    />
                </Tabs>
            </Box>
            <Routes>
            <TabPanel value={About} index={0}>
                <Route path="/" element={<About/>}/>
            </TabPanel>
            <TabPanel value={Message} index={1}>
                <Message />
            </TabPanel>
            <TabPanel value={Cooperation} index={2}>
                <Cooperation />
            </TabPanel>
            <TabPanel value={Residents} index={3}>
                <Residents />
            </TabPanel>
            </Routes>
        </Box>
    );
}