import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import WorkoutButtons from '../components/WorkoutButtons/WorkoutButtons'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import WOD from '../components/WOD/WOD'
import Logo from '../components/Logo/Logo'
import WorkoutFitmoodji from '../components/WorkoutFitmoodji/WorkoutFitmoodji'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#B8C0DB",
        height: "100%",
        minHeight: '100vh',
        marginBottom: '64px'
    },
}));

function WorkoutDashboard() {

    const classes = useStyles();

    return (
            <Container maxWidth="lg" className={classes.root}>
                <Logo />
                <WOD />
                <WorkoutButtons />
                <br></br>
                <WorkoutFitmoodji />
                <NavBar />
            </Container>
    );
}
export default WorkoutDashboard;
