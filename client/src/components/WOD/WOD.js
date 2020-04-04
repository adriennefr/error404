import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import video from '../../assets/moods/Female/3.gif'
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
        maxHeight: 200,
        marginTop: '5px',
        display: "flex",
        justifyContent: "center",
    },

}));


export default function ImgMediaCard() {
    const classes = useStyles();

    const [WodState, setWodState] = useState({
        WOD: [],
    });

    useEffect(() => {
        API.getWod().then((res) => {
            setWodState({ WOD: res.data.exercises })

        });
    }, []);



    // const workoutComp = data.map(wo => (<p>{wo}</p>))

    // const workoutContext = React.createContext(workoutComp)
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    {WodState.WOD.map(item => <p>{item}</p>)}
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        WOD
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}