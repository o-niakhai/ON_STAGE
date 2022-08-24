import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ProfileArtist from './ProfileArtist/ProfileArtist';
import SideBar from './Sidebar/SideBar';



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
        <Box gridColumn="span 4">
          <Item>
            <SideBar />
          </Item>
        </Box>
        <Box gridColumn="span 8">
          <Item>xs=8</Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>xs=4</Item>
        </Box>
      </Box>
    </Box>
  );
}
