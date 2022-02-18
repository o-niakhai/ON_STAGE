import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Message() {
    return (
        <Box>
            <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Send Message"
                multiline
                rows={6}
                sx={{
                    '& .MuiOutlinedInput-input:hover': {
                        '& > fieldset': {
                            borderColor: '#45D083'
                        }
                    },
                    '& .MuiOutlinedInput-root:hover': {
                        '& > fieldset': {
                            borderColor: '#45D083'
                        }
                    }
                }} />
        </Box>
    );
}