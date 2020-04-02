import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SignUp from '../SignUpForm/SignUpForm'
import './SignUpCard.css'

const useStyles = makeStyles({
  root: {
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
});

export default function SignUpCard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      <h1 id="logo">Logo Here</h1>
      <Card className={classes.root} id="signUpCard" variant="outlined">
        <CardContent>
          <SignUp />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}