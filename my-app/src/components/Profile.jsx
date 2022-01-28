import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import FeaturedPlayListRoundedIcon from '@mui/icons-material/FeaturedPlayListRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ImageAvatars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={12}>
            <Grid item xs={3}>
                <Item sx={{ boxShadow: 0 }}>
                    <Box m={2} >
                    <Avatar 
                        alt="Remy Sharp"
                        src="https://bi.im-g.pl/im/7e/c5/17/z24924286FBW,Kraftwerk-podczas-Festiwalu-Tauron-Nowa-Muzyka.jpg" 
                        sx={{ textAlign: 'center', width: 160, height: 160 }}/>
                        </Box>
                </Item>
            </Grid>
            <Grid item xs={9}>
                <Item sx={{ 
                    height: '98%',
                    width: '98%',
                    boxShadow: 0,
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    }}>
                    <Typography variant="h1" style={{fontSize: '2rem', fontWeight: 'bold'}}>
                        Kraftwerk
                        <Button
                        variant="contained"
                        sx={{ borderRadius: '20px', ml: 50 }}
                        style={{ background: '#45D083', width: '140px' }}
                        >
                            Follow
                        </Button>
                    </Typography>
                    <Typography variant="h2"
                        style={{fontSize: '1rem', fontWeight: 'light'}} >
                        <Link href="#" underline="hover" style={{ color: '#4F4F4F'}}>Musician</Link> / 
                        <Link href="#" underline="hover" style={{ color: '#4F4F4F'}}>Dj</Link> / 
                        <Link href="#" underline="hover" style={{ color: '#4F4F4F'}}>Electro</Link> / 
                        <Link href="#" underline="hover" style={{ color: '#4F4F4F'}}>Techno</Link> / 
                        <Link href="#" underline="hover" style={{ color: '#4F4F4F'}}>Minimal</Link>
                            
                    </Typography>
                    <Typography variant="h6" style={{fontSize: '1rem'}}>
                        <LocationOnOutlinedIcon 
                            style={{ color: '#45D083' }}/> 
                                Berlin, Germany
                    </Typography>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item sx={{ boxShadow: 0 }}>
                    <Box mr={2}
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            }}>
                        <Button style={{fontSize: '0.7rem', color: '#45D083' }} startIcon={<AddCommentRoundedIcon />}>Message</Button>
                        <Button style={{fontSize: '0.7rem', color: '#45D083' }} startIcon={<FeaturedPlayListRoundedIcon />}>About</Button>
                        <Button style={{fontSize: '0.7rem', color: '#45D083' }} startIcon={<BusinessCenterRoundedIcon />}>Coopertion</Button>
                        <Button style={{fontSize: '0.7rem', color: '#45D083' }} startIcon={<BadgeRoundedIcon />}>Residents</Button>
                        <Button style={{fontSize: '0.7rem', color: '#45D083' }} startIcon={<ScreenShareRoundedIcon />}>Share</Button>
                    </Box> 
                </Item>    
            </Grid>
        </Grid>
    </Box>
  );
}