import React from 'react';
import Container from '@material-ui/core/Container';
import FitMoodji from '../components/Fitmoodji/Fitmoodji'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../components/Logo/Logo'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#B8C0DB",
        height: "100%",
        minHeight: '100vh',
        marginBottom: '64px'
    },
}));

function Homepage() {

    const classes = useStyles();

    return (
            <Container maxWidth="lg" className={classes.root}>
                <Logo />
                <FitMoodji />
                <NavBar />
            </Container>
    );
}
export default Homepage;
