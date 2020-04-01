import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    position: 'absolute', 
    left: '50%', 
    top: '30%',
    transform: 'translate(-50%, -50%)'
  },
  
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} >
        <Grid item xs={4} alignContent="flex-start" direction="row" justify="flex-start" alignItems="center">
          <Paper className={classes.paper} >Logo</Paper>
        </Grid>
        <Grid item xs={12} className={classes.grid} direction="row" justify="center" alignItems="center" >
          <Paper className={classes.paper}>Avatar Goes Here</Paper>
        </Grid>
      </Grid>
    </div>
  );
}