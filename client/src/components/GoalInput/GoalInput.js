import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './GoalInput.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function TextFieldSizes() {
    const classes = useStyles();

    return (
        <div className="goalInput">
            <TextField
                label="Goal"
                id="filled-size-small"
                defaultValue="#1"
                variant="filled"
                size="small"
            />
        </div>

    )
}