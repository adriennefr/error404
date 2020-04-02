import React from "react";
// import "./App.css";
import StopwatchHooks from '../components/Stopwatch/StopwatchHooks'
import FinishBtn from '../components/FinishBtn/FinishBtn'
import GoalInput from '../components/GoalInput/GoalInput'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#B8C0DB",
        height: "100vh"
    },
}));

function WorkoutPage() {

    const classes = useStyles();

    return (
        <Container className={classes.background}>
            <Typography variant="h4" align="center">Logo?</Typography>
            <StopwatchHooks />
            <br />
            <FinishBtn href="/homepage" />
            <br />
            <GoalInput />
            <NavBar />
        </Container>
    );
}

export default WorkoutPage;
