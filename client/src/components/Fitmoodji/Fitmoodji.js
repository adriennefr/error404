import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useAuth } from "../../utils/store";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
    [`@media (min-width: 375px)`] : {
      width: 375,
      height: "60%",
    },
  },
  grid: {
    position: 'absolute',
    left: '50%',
    top: '30%',
    transform: 'translate(-50%, -50%)'
  },
  logo: {
    margin: '5px',
    marginLeft: '-5px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));


export default function ImgMediaCard() {
  const classes = useStyles();

  // const [fitmoodjiState, setFitmoodjiState] = useState({
  //   fitmoodji: '',
  // });
  
  const { user } = useAuth();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Fitmoodji"
          height="230"
          src={`/moods/${user.gender}/${user.currentMood}.gif`}
          title="Fitmoodji Mood"
          autoPlay={true}
          loop={true}
        />
        <CardContent style={{paddingBottom: "5px"}}>
          <Typography style={{fontFamily: "Bellota", fontWeight: "bold"}} gutterBottom variant="h5" component="h2" align="center">
            Your Mood
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
