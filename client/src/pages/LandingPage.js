import React from 'react';
import SignInCard from '../components/SignInCard/SignInCard'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './style.css'

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#B8C0DB",
        height: "105vh"
    },
}));

function LandingPage() {
    const classes = useStyles();
    return(
        <Container className={classes.background}>
            <SignInCard />
        </Container>
    );
}

export default LandingPage;