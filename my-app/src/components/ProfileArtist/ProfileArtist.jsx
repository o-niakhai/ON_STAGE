import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProfileAvatr from './ProfileAvatar';
import ProfileInfoArtist from './ProfileInfoArtist';
import ProfileArtistTabs from './ProfileArtistTabs';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ProfileArtist() {
    return (
        <Box sx={{
            display: 'flex',
            flexGrow: 1,
        }}>
            <Grid container spacing={2} columns={12} sx={{ boxShadow: 0 }}>
                <Grid item xs={3}>
                    <Item sx={{ boxShadow: 0 }}>
                        <ProfileAvatr />
                    </Item>
                </Grid>
                <Grid item xs={9}>
                    <Item sx={{ boxShadow: 0 }}>
                        <ProfileInfoArtist />
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item sx={{ boxShadow: 0 }}>
                    <ProfileArtistTabs />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}