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
    justifyContent: "center",
  },
  cardStyle: {
    color: "white",
    backgroundColor: "#737373",
    marginBottom: "10px",
    fontFamily: 'Dosis'
  },
  list: {
    listStyleType: "none",
    marginLeft: "8px",
    fontSize: "20px"
  },
  contentStyle: {
    padding: '16px 16px 16px 16px !important'
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
                <Typography gutterBottom variant="h4" component="h4" align="center" style={{fontFamily: "Dosis"}}>
                  Time
                </Typography>
                <Typography gutterBottom variant="h4" component="h4" align="center" style={{fontFamily: "Dosis"}}>
                  {hours} : {minutes} : {seconds}
                </Typography>

                <Typography gutterBottom variant="h4" component="h4" align="center" style={{fontFamily: "Dosis"}}>
                  Exercises
                </Typography>
                <ul className={classes.list} style={{lineHeight: "32px"}}>
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
