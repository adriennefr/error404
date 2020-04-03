import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import video from '../../assets/moods/Male/5.gif'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import API from '../../utils/API'

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxWidth: 345,
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

  const [fitmoodjiState, setFitmoodjiState] = useState({
    fitmoodji: '',
  });
  
  useEffect(() => {
    // For demonstration purposes, we mock an API call.
    API.getFitmoodji().then((res) => {
      setFitmoodjiState({videoAvatarSrc: res})
    }); 
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Fitmoodji"
          height="280"
          src={video}
          title="Fitmoodji Mood"
          autoPlay={true}
          loop={true}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Your Mood
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}