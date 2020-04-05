import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import video from '../../assets/moods/Female/3.gif'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { WODContext } from '../../utils/store'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxWidth: 345,
    marginTop: '5px',
    display: "flex",
    justifyContent: "center",
  },

}));


export default function WorkoutList({ workouts }) {
  const classes = useStyles();


  return (
    <Grid container justify="center">
      { workouts && workouts.map(((workout) => {
        let seconds = ("0" + (Math.floor(workout.time / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(workout.time / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(workout.time / 3600000)).slice(-2);
        return (
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root}>
              <CardContent>
                <Typography gutterBottom variant="p" component="p" align="center">
                  Time
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  {hours} : {minutes} : {seconds}
                </Typography>

                <Typography gutterBottom variant="p" component="p" align="center">
                  Exercises
                </Typography>
                <ul>
                  {workout.exercises && workout.exercises.map((exercise) => <li>{exercise}</li>)}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        )
      }))}
    </Grid>
  )
}
