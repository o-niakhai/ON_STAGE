import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#F5F6FA' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default function Riders() {
    return (
        <div style={{ width: '100%' }}>
            <Box
                sx={{ display: 'flex', flexDirection: 'column'}}
            >
                <Typography >Rider</Typography>
                <Item sx={{ order: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: 160,
                            height: 160
                        }}>
                        <Box
                            sx={{
                                width: 160,
                                height: 160,
                            }}>
                                <Typography>
                                    Concert Rider
                                </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: 160,
                                height: 160,
                            }}>
                                <Typography>
                                    Accommodation
                                </Typography>
                        </Box>
                    </Box>
                </Item>
            </Box>
        </div>
    );
}