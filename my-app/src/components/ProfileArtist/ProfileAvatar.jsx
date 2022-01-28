import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export default function ProfileAvatr() {
  return (
        <Box m={2} >
            <Avatar 
                alt="Remy Sharp"
                src="https://bi.im-g.pl/im/7e/c5/17/z24924286FBW,Kraftwerk-podczas-Festiwalu-Tauron-Nowa-Muzyka.jpg" 
                sx={{ textAlign: 'center', width: 160, height: 160 }}/>
        </Box>
  );
}