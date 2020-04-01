import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import './GoalInput.css';
import API from '../../utils/API'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
        button: {
            margin: theme.spacing(1),
        }
    },
}));

export default function TextFieldSizes() {
    const classes = useStyles();
    const [goals, setGoals] = useState([])

    useEffect(()=>{
        API.getGoals().then(res=>console.log(res))
    },[])

    const handleChange=(item)=>{
        let key = item.getAttribute('name');
        let temp = goals;
        temp.splice(key, 1 , item.value);
        console.log(temp)
        setGoals(temp)
    }

    return (
        <div className="goalInput">
            <Grid container>
                <Grid item xs={12}>
                    <>
                        <TextField
                            label="Goal"
                            id="filled-size-small"
                            defaultValue="#1"
                            variant="filled"
                            size="small"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        />
                    </>
                </Grid>

                {goals.map((goal, i) =>
                    <>
                        <Grid item xs={12}>
                            <TextField
                                label="Goal"
                                id="filled-size-small"
                                defaultValue={goal}
                                variant="filled"
                                name={i}
                                onChange={(e) => handleChange(e.target)}
                                size="small"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                className={classes.button}
                                startIcon={<SaveIcon />}
                            />
                        </Grid>
                    </>
                    )}
            </Grid>
        </div>

    )
}