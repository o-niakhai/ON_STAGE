import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function ProfileInfoArtist() {
  return (
        <Box
            sx={{ 
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
        </Typography>
        <Button
            variant="contained"
            sx={{ borderRadius: '20px', ml: 50 }}
            style={{ background: '#45D083', width: '140px' }}>
                Follow
        </Button>
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
    </Box>
  );
}