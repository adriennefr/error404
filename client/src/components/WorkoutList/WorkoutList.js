import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxWidth: 345,
    marginTop: '5px',
    display: "flex",
    // justifyContent: "center",
  },
  cardStyle: {
    color: "white",
    backgroundColor: "#737373",
    margin: "10px",
    fontFamily: 'Bellota',

  },
  list: {
    listStyleType: "none",
    fontSize: "15px",
    textAlign: "center"
  },
  contentStyle: {
    padding: '10px 10px 10px 10px !important'
  }
  

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
            <Card className={classes.root, classes.cardStyle}>
              <CardContent className={classes.contentStyle}>
                <Typography variant="h5" component="h5" align="center" style={{fontFamily: "Bellota", marginTop: "-10px", color:"#85FFCE"}}>
                  Time
                </Typography>
                <Typography variant="h5" component="h5" align="center" style={{fontFamily: "Bellota", marginTop: "-5px"}}>
                  {hours} : {minutes} : {seconds}
                </Typography>

                <Typography variant="h5" component="h5" align="center" style={{fontFamily: "Bellota", marginTop: "10px", marginBottom: "-10px", color:"#85FFCE"}}>
                  Exercises
                </Typography>
                <ul className={classes.list} style={{lineHeight: "21px", padding: "0px"}}>
                  {workout.exercises && workout.exercises.map((exercise,i) => <li key={i}>{exercise}</li>)}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        )
      }))}
    </Grid>
  )
}
