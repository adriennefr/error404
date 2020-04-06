import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SignIn from '../SignIn/SignIn'
import LandingLogo from '../LandingLogo/LandingLogo'
import './SignInCard.css'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "50%",
    margin: "auto",
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
  logo: {
    [`@media (min-width: 768px)`] : {
      width: '100%'
    }
  }
});

export default function SignInCard() {
  const classes = useStyles();

  return (

    <React.Fragment>
      <LandingLogo />
      <Card className={classes.root} id="signInCard" variant="outlined">
        <CardContent>
          <SignIn />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}