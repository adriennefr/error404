import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import video from '../../assets/moods/Female/3.mov'



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
        maxHeight: 200,
        marginTop: '5px',
    },

}));


export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <CardMedia
                        component="img"
                        alt="WOD Rendered"
                        height="140"
                        image=""
                        title="WOD"
                    />
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        WOD
          </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}