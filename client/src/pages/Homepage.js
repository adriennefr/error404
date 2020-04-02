import React from 'react';
import Container from '@material-ui/core/Container';
import FitMoodji from '../components/Fitmoodji/Fitmoodji'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#B8C0DB",
        height: "100vh"
    },
}));

function Homepage() {

    const classes = useStyles();

    return (
            <Container maxWidth="sm" className={classes.background}>
                <FitMoodji />
                <NavBar />
            </Container>
    );
}
export default Homepage;
