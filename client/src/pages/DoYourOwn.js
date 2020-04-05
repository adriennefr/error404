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
    root: {
        backgroundColor: "#B8C0DB",
        height: "100%",
        marginBottom: '64px'
    },
}));

function WorkoutPage() {

    const classes = useStyles();

    const handleFinish = () => {

    }

    return (
        <Container className={classes.root}>
            <Logo />
            <StopwatchHooks />
            <br />
            <FinishBtn href="/homepage" onClick={() => handleFinish()} />
            <br />
            <GoalCard />
            <NavBar />
        </Container>
    );
}

export default WorkoutPage;
