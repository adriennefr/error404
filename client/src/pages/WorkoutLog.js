import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import FitMoodji from '../components/Fitmoodji/Fitmoodji'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../components/Logo/Logo'
import {useAuth} from "../utils/store";
import WorkoutList from "../components/WorkoutList/WorkoutList";
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#B8C0DB",
        height: "100%",
        minHeight: '100vh',
        marginBottom: '64px'
    },
}));

function WorkoutLog() {
    const classes = useStyles();
    const { user } = useAuth();
    useEffect(()=> {
        API.getLog(user._id)
        .then((res) => setLog(res.data.completedWorkouts))
    },[])

const [log, setLog] = useState([]);


    return (
            <Container maxWidth="lg" className={classes.root}>
                <Logo />
                <WorkoutList workouts={log}/>
                <NavBar />
            </Container>
    );
}
export default WorkoutLog;
