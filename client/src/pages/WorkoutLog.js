import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import FitMoodji from '../components/Fitmoodji/Fitmoodji'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../components/Logo/Logo'
import {useAuth} from "../utils/store";
import WorkoutList from "../components/WorkoutList/WorkoutList";
import API from '../utils/API';
import Typography from '@material-ui/core/Typography';
// import { Autocomplete } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#B8C0DB",
        height: "100%",
        minHeight: '100%',
        marginBottom: '56px'
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        fontFamily: 'Bellota',
        [`@media (min-width: 768px)`]: {
            fontSize: 50,
            fontWeight: "bold",
            marginBottom: "25px"
        },
    },
    body: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        fontFamily: "Bellota",
        [`@media (min-width: 768px)`]: {
            fontSize: 32,
            fontWeight: "bold",
        },
    }
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
                <Typography align="center" className={classes.title}>
                        Workout Log
                </Typography>

                {log.length === 0 ? 
                    <div>
                        <Typography align="center" className={classes.body}>
                        No logs yet, let's get you movin' to get the mood in!
                        </Typography>
                    </div> : 
                <WorkoutList workouts={log}/>}
                
                <NavBar />
            </Container>
    );
}
export default WorkoutLog;