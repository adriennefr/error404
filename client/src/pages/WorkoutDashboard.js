import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import WorkoutButtons from '../components/WorkoutButtons/WorkoutButtons'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#B8C0DB",
        height: "100vh"
    },
}));

function WorkoutDashboard() {

    const classes = useStyles();

    return (
            <Container maxWidth="sm" className={classes.background}>
                <WorkoutButtons />
                <NavBar />
            </Container>
    );
}
export default WorkoutDashboard;
