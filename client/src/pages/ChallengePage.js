import React from "react";
import StopwatchHooks from '../components/Stopwatch/StopwatchHooks';
import FinishBtn from '../components/FinishBtn/FinishBtn';
import ChallengeItem from '../components/ChallengeItem/ChallengeItem';
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

function ChallengePage() {

    const classes = useStyles();

    return (
        <Container className={classes.background}>
            
                <Typography variant="h4" align="center">Logo?</Typography>
                <StopwatchHooks />
                <br />
                <FinishBtn href="/homepage" />
                <br />
                <ChallengeItem />
                <NavBar />
        
        </Container>
    );
}

export default ChallengePage;
