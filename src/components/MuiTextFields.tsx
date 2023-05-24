import React from 'react';
import {Stack, TextField, InputAdornment} from "@mui/material";
import {useState} from 'react';

export const MuiTextFields = () => {
    const [value, setValue] = useState('');

    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
                <TextField label="Form Input" variant="outlined" required value={value} onChange={e => setValue(e.target.value)} error={!value}
                    helperText={!value ? "Required" : "Do not share your password with anyone"}
                ></TextField>
                <TextField label="name" variant="filled"></TextField>
                <TextField label="name" variant="standard"></TextField>
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Small secondary" size="small" color="secondary" variant="outlined"></TextField>
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Form input" required></TextField>
                <TextField label="Form input" helperText="do not share "></TextField>
                <TextField label="Password" type="password"></TextField>
                <TextField label="Password" type="password" disabled></TextField>
                <TextField label="Read only" InputProps={{readOnly: true}}></TextField>
                <TextField label="Read only" InputProps={{readOnly: true}}></TextField>
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Amount" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}></TextField>
                <TextField label="Weight" InputProps={{
                    endAdornment: <InputAdornment position="end">kg</InputAdornment>
                }}></TextField>
            </Stack>
        </Stack>

    );
};
