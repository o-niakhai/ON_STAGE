// import * as React from 'react';
// import Box from '@mui/material/Box';
// import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
// import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
// import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
// import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
// import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';


// export default function ProfileArtistActions() {
//     const [value, setValue] = React.useState('one');

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//     return (
//         <div>
//             <Box
//                 mr={2}
//                 sx={{
//                     display: 'flex',
//                     justifyContent: 'flex-end'
//                 }}>
//                 <Tabs
//                     TabIndicatorProps={{
//                         sx: {
//                             bgcolor: "#45D083",
//                             height: "2px"
//                         }
//                     }}
//                     value={value}
//                     onChange={handleChange}
//                     indicatorColor="secondary"
//                     sx={{ height: '10%' }}>
//                     <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<FeaturedPlayListRoundedIcon />} iconPosition="start" value="About" label="About" />
//                     <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<AddCommentRoundedIcon />} iconPosition="start" value="Message" label="Message" />
//                     <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<BusinessCenterRoundedIcon />} iconPosition="start" value="Cooperation" label="Cooperation" />
//                     <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<BadgeRoundedIcon />} iconPosition="start" value="Residents" label="Residents" />
//                     <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<ScreenShareRoundedIcon />} iconPosition="start" value="Share" label="Share" />
//                 </Tabs>
//             </Box>
//         </div>
//     );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
<<<<<<< HEAD
import {
AddCommentRounded as AddCommentRoundedIcon,
FeaturedPlayListRounded as FeaturedPlayListRoundedIcon,
BusinessCenterRounded as BusinessCenterRoundedIcon,
BadgeRounded as BadgeRoundedIcon,
ScreenShareRounded as ScreenShareRoundedIcon,
} from '@mui/icons-material';
=======
import {  Outlet, NavLink } from "react-router-dom";
import CalendarComp from "./Calendar/Calendar"

>>>>>>> f5129ef3fea92de6ea0dd00a39cc77a35b54ffc3

const TABS_CONFIG = [
{ value: 'About', label: 'About', icon: <FeaturedPlayListRoundedIcon /> },
{ value: 'Message', label: 'Message', icon: <AddCommentRoundedIcon /> },
{ value: 'Cooperation', label: 'Cooperation', icon: <BusinessCenterRoundedIcon /> },
{ value: 'Residents', label: 'Residents', icon: <BadgeRoundedIcon /> },
{ value: 'Share', label: 'Share', icon: <ScreenShareRoundedIcon /> },
];

export default function ProfileArtistActions() {
<<<<<<< HEAD
const [value, setValue] = React.useState(TABS_CONFIG[0].value);

const handleChange = (event, newValue) => {
setValue(newValue);
};

const renderTabs = () => {
return TABS_CONFIG.map((tab) => (
<Tab
key={tab.value}
value={tab.value}
label={tab.label}
icon={tab.icon}
iconPosition="start"
sx={{ fontSize: '0.7rem', color: '#949494' }}
/>
));
};

return (
<Box
mr={2}
sx={{
display: 'flex',
justifyContent: 'flex-end',
}}
>
<Tabs
value={value}
onChange={handleChange}
TabIndicatorProps={{
sx: {
bgcolor: '#45D083',
height: '2px',
},
}}
indicatorColor="secondary"
sx={{ height: '10%' }}
>
{renderTabs()}
</Tabs>
</Box>
);
=======
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

                    <NavLink to="../Calendar/Calendar.jsx" className={setActive}>CalendarComp<CalendarComp/>
                        <Tab style={{ fontSize: '0.7rem', color: '#949494' }} 
                        icon={<FeaturedPlayListRoundedIcon />} 
                        iconPosition="start" value="CalendarComp" label="Calendar" />
                    </NavLink>
                    <NavLink to="/my-app/src/components/ProfileArtist/About/About.jsx"
                         className={setActive}>Message</NavLink>
                        <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<AddCommentRoundedIcon />} iconPosition="start" value="Message" label="Message" />
                        <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<BusinessCenterRoundedIcon />} iconPosition="start" value="Cooperation" label="Cooperation" />
                        <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<BadgeRoundedIcon />} iconPosition="start" value="Residents" label="Residents" />
                        <Tab style={{ fontSize: '0.7rem', color: '#949494' }} icon={<ScreenShareRoundedIcon />} iconPosition="start" value="Share" label="Share" />
                </Tabs>
            </Box>
        </div>
    );
>>>>>>> f5129ef3fea92de6ea0dd00a39cc77a35b54ffc3
}