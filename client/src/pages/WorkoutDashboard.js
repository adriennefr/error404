import React from 'react';
import Container from '@material-ui/core/Container';
import WorkoutButtons from '../components/WorkoutButtons/WorkoutButtons'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import WOD from '../components/WOD/WOD'
import Logo from '../components/Logo/Logo'
import WorkoutFitmoodji from '../components/WorkoutFitmoodji/WorkoutFitmoodji';
import {useAuth} from '../utils/store'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#B8C0DB",
        height: "100%",
        minHeight: '100%',
        marginBottom: '56px'
    },
    wod: {
        display: "flex",
        justifyContent: "center",
    }
}));

function WorkoutDashboard() {

    const {user} = useAuth()
    const classes = useStyles();
    console.log(user)

    return (
            <Container maxWidth="lg" className={classes.root}>
                <Logo />
                <div className={classes.wod}>
                    <WOD />
                </div>
                
                <WorkoutButtons />
                <WorkoutFitmoodji />
                <NavBar />
            </Container>
    );
}
export default WorkoutDashboard;
