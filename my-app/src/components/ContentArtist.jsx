import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ProfileArtist from './ProfileArtist/ProfileArtist';
import CalendarComp from './ProfileArtist/Calendar/Calendar';
import SideBar from './Sidebar/SideBar';
<<<<<<< HEAD
import Calendar from './Calendar';
=======
// import ArtistVideo from './Sidebar/VideoCmp/ArtistVideo';
>>>>>>> f5129ef3fea92de6ea0dd00a39cc77a35b54ffc3



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function ContentArtist() {
  return (
    <Box sx={{ width: 1, mt: 2 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
        <Box gridColumn="span 8">
          <Item>
            <ProfileArtist />
          </Item>
        </Box>
        <Box gridColumn="span 8">
          <Item>
          <CalendarComp />
          </Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>
            <SideBar />
          </Item>
        </Box>
<<<<<<< HEAD
        <Box gridColumn="span 8">
          <Item><Calendar/></Item>
        </Box>
=======
>>>>>>> f5129ef3fea92de6ea0dd00a39cc77a35b54ffc3
        <Box gridColumn="span 4">
          <Item>
            {/* <ArtistVideo /> */}
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
