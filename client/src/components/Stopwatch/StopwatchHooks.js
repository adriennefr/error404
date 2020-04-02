import React, { useState, useEffect } from 'react';
import './Stopwatch.css'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginTop: "10%",
        fontSize: "200%",
    },
    button: {
        margin: theme.spacing(1),
    },
    startBtn: {
        backgroundColor: "rgb(145, 223, 191)",
    },
    pauseBtn: {
        backgroundColor: "rgb(230, 187, 109)",
    },
    resetBtn: {
        backgroundColor: "rgb(148, 153, 155)",
    },
    saveBtn: {
        backgroundColor: "rgb(113, 184, 212)"
    }
}));

function Stopwatch() {
    const classes = useStyles();

    const [timerOn, setTimerOn] = useState(false);
    const [timerStart, setTimerStart] = useState(0);
    const [timerTime, setTimerTime] = useState(0);

    const startTimer = () => {
        setTimerOn(true);
        setTimerTime(timerTime);
        setTimerStart(Date.now() - timerTime);

    };

    const pauseTimer = () => {
        setTimerOn(false);
    };

    const resetTimer = () => {
        setTimerStart(0);
        setTimerTime(0);
    };

    useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setTimerTime(Date.now() - timerStart)
            }, 10);
        } else if (!timerOn) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [timerOn, timerTime]);

    // let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
        <div className="Stopwatch-display">

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    {hours} : {minutes} : {seconds}
                </CardContent>
            </Card>
            {/* <div className="stopwatch"> */}
                
                {/* : {centiseconds} */}
            {/* </div> */}

            <br />

            {timerOn === false && timerTime === 0 && (
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={`${classes.button} ${classes.startBtn}`}
                    startIcon={<PlayCircleOutlineIcon />}
                    onClick={startTimer}
                >
                    Start
                </Button>
            )}
            {timerOn === true && (
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={`${classes.button} ${classes.pauseBtn}`}
                    startIcon={<PauseCircleOutlineIcon />}
                    onClick={pauseTimer}
                >
                    Pause
                </Button>
            )}
            {timerOn === false && timerTime > 0 && (
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={`${classes.button} ${classes.startBtn}`}
                    startIcon={<PlayCircleOutlineIcon />}
                    onClick={startTimer}
                >
                    Resume
                </Button>
            )}
            {timerOn === false && timerTime > 0 && (
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={`${classes.button} ${classes.resetBtn}`}
                    startIcon={<RotateLeftIcon />}
                    onClick={resetTimer}
                >
                    Reset
                </Button>
            )}
        </div>
    )
};

export default Stopwatch;