import React, { useState } from "react";
// import "./App.css";
import Stopwatch from '../components/Stopwatch/Stopwatch'
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
        minHeight: '100vh',
        marginBottom: '64px'
    },
}));

function WorkoutPage() {
    const [currentTime, setCurrentTime] = useState(0);

    const classes = useStyles();

    const handleFinish = () => {

    }

    return (
        <Container className={classes.root}>
            <Logo />
            <Stopwatch onTimeChange={(time) => setCurrentTime(time)} />
            <br />
            <FinishBtn href="/homepage" onClick={() => handleFinish()} />
            <br />
            <GoalCard />
            <NavBar />
        </Container>
    );
}

export default WorkoutPage;
