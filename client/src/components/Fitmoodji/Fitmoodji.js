import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import video from '../../assets/moods/Female/3.mp4'

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


export default function FullWidthGrid() {

  // const [developerState, setDeveloperState] = useState({
  //   videoAvatarSrc: '',
  // });

  // useEffect(() => {
  //   // For demonstration purposes, we mock an API call.
  //   API.getDeveloper.then((res) => {
  //     setDeveloperState({videoAvatarSrc: res})
  //   }); 
  // }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} >
        <Grid item xs={12} className={classes.grid} direction="row" justify="center" alignItems="center" >

        </Grid>
      </Grid>
      
      <video>
        <source src={video} />
      </video>
    </div>
  );
}
