import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ImageAvatars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={3}>
                <Item sx={{ boxShadow: 0 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar 
                                alt="Remy Sharp"
                                src="https://bi.im-g.pl/im/7e/c5/17/z24924286FBW,Kraftwerk-podczas-Festiwalu-Tauron-Nowa-Muzyka.jpg" 
                                sx={{ width: 160, height: 160 }}
                            />
                        </Stack>
                    </Box>
                </Item>
            </Grid>
            <Grid item xs={9}>
            <Item sx={{ height: '95%' }}>
                <Box sx={{ textAlign: "left" }} >
                    <Typography variant="h3">
                        Kraftwerk
                    </Typography>
                    <Typography variant="h6" >
                        Musician/ Dj/ Electro/Techno/Minimal
                    </Typography>
                    <Typography variant="h6" style={{fontSize: '1rem'}}>
                        <LocationOnOutlinedIcon style={{ color: '#45D083' }}/>Berlin, Germany
                    </Typography>
                </Box>
            </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>sdfsfsdfs</Item>    
            </Grid>
        </Grid>
    </Box>
  );
}