import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import video from '../../assets/moods/Female/3.mp4'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="video"
          alt="Fitmoodji"
          height="140"
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

























  // const [developerState, setDeveloperState] = useState({
  //   videoAvatarSrc: '',
  // });

  // useEffect(() => {
  //   // For demonstration purposes, we mock an API call.
  //   API.getDeveloper.then((res) => {
  //     setDeveloperState({videoAvatarSrc: res})
  //   }); 
  // }, []);























// export default function FullWidthGrid() {

// const classes = useStyles();


//   return (
//     <div className={classes.root}>
//       <Grid container spacing={4} >
//         <Grid item xs={12} className={classes.grid} direction="row" justify="center" alignItems="center" >

//         </Grid>
//       </Grid>

//       <video>
//         <source src={video} />
//       </video>
//     </div>
//   );
// }
