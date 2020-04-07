import React, { useState, useEffect } from "react";
// import "./App.css";
import Stopwatch from '../components/Stopwatch/Stopwatch'
import FinishBtn from '../components/FinishBtn/FinishBtn'
import GoalCard from '../components/GoalCard/GoalCard'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
import Logo from '../components/Logo/Logo';
import Goal from '../components/GoalInput/GoalInput';
import API from "../utils/API";
import { useAuth } from "../utils/store";
import { useHistory } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#B8C0DB",
        height: "100%",
        minHeight: '100vh',
        marginBottom: '64px'
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

}));

function WorkoutPage() {

    const classes = useStyles();

    // const { own } = useContext(OwnContext)
    const { user, setCurrentUser } = useAuth();
    const history = useHistory()
    // console.log(user)
    const goalsData = ["", "", "", "", ""]
    const [goals, setGoals] = useState(goalsData)

    useEffect(() => {
        localStorage.setItem('exercise', JSON.stringify(goals))
    }, [])


    const handleChange = (item, index) => {
        //let key = item.getAttribute('name');
        let temp = [...goals];
        //temp.splice(key, 1, item.value);
        temp[index] = item.value;
        console.log(temp)


        setGoals(temp)
    }

    const [currentTime, setCurrentTime] = useState(0)
    console.log(currentTime)
    const handleFinish = (res) => {
        API.updateUser({
            time: currentTime,
            exercises: goals
        }, user._id).then((res) => {
            // Send user to workoutlog...
            if (res.data.success) {
                console.log(res.data)
                setCurrentUser(res.data._doc);
                history.push('/workoutlog')
            }
        })
    }




    return (
        <Container className={classes.root}>
            <Logo />
            <Stopwatch onTimeChange={(time) => setCurrentTime(time)} />
            <br />
            <FinishBtn onClick={() => handleFinish()} />
            <br />
            <Card className={classes.card} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Enter your exercises to help guide your workout!
                    </Typography>
                    <div className="goalInput" style={{ color: "white" }}>
                        <Grid container spacing={2}>
                            {goals.map((goal, i) =>
                                <>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Exercise"
                                            InputLabelProps={{ style: { fontFamily: 'Bellota', color: 'white' } }}
                                            inputProps={{ style: { fontFamily: 'Bellota', color: 'white' } }}
                                            // id="filled-size-small"
                                            defaultValue={goal}
                                            variant="filled"
                                            name={i}
                                            onChange={(e) => handleChange(e.target, i)}
                                            size="small"
                                            style={{ width: "100%", margin: "auto", backgroundColor: "#BFBFBF" }}
                                        />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </div>
                </CardContent>
            </Card>
            <NavBar />
        </Container>
    );
}

export default WorkoutPage;
