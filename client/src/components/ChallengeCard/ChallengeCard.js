import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import ChallengeItem from '../ChallengeItem/ChallengeItem'
import './ChallengeCard.css';
import {WODContext} from '../../utils/store'

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

export default function ChallengeCard() {
  const classes = useStyles();
  const {wod} = useContext(WODContext)
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} id="challengeCard" variant="outlined">
      <CardContent>
        {wod.map(a=>
          <ChallengeItem text={a}/>)}
      </CardContent>
    </Card>
  );
}
