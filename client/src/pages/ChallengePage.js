import React from "react";
import StopwatchHooks from '../components/Stopwatch/StopwatchHooks';
import FinishBtn from '../components/FinishBtn/FinishBtn';
import ChallengeCard from '../components/ChallengeCard/ChallengeCard';
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Logo from '../components/Logo/Logo'
import WOD from '../components/WOD/WOD'

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#B8C0DB",
        height: "100vh"
    },
}));

function ChallengePage() {

    const classes = useStyles();

    return (
        <Container className={classes.background}>
            
                <Logo />
                <StopwatchHooks />
                <br />
                <FinishBtn href="/homepage" />
                <br />
                <WOD />
                <NavBar />
        
        </Container>
    );
}

export default ChallengePage;
