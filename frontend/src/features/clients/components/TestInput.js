import React, {useRef, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";

function TestInput() {
    const [state, setState] = useState('');
    return (
        <Stack spacing={3}>
            <TextField value={state} onChange={e => setState(e.target.value)}/>
            <Typography variant={'h1'} sx={{bgcolor: 'red'}}>{state}</Typography>
        </Stack>
    );
}

export default TestInput;