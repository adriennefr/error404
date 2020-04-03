import React from "react";
// import "./App.css";
import StopwatchHooks from '../components/Stopwatch/StopwatchHooks'
import FinishBtn from '../components/FinishBtn/FinishBtn'
import GoalCard from '../components/GoalCard/GoalCard'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
import Logo from '../components/Logo/Logo'

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#B8C0DB",
        height: "150vh"
    },
}));

function WorkoutPage() {

    const classes = useStyles();

    return (
        <Container className={classes.background}>
            <Logo />
            <StopwatchHooks />
            <br />
            <FinishBtn href="/homepage" />
            <br />
            <GoalCard />
            <NavBar />
        </Container>
    );
}

export default WorkoutPage;
