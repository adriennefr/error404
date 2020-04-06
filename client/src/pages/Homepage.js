import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import FitMoodji from '../components/Fitmoodji/Fitmoodji'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../components/Logo/Logo'
import API from '../utils/API';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#B8C0DB",
        height: "100%",
        minHeight: '101vh',
        marginBottom: '64px'
    },
    tip: {
        fontFamily: "helvetica",
        fontSize: 18,
    },
    card: {
        maxWidth: 345,
        maxHeight: 200,
        marginTop: '5px',
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#d3d9eb",
    },
    title: {
        fontSize: 14,
        fontFamily: "helvetica"
    },
    icon: {
        fontSize: "small",
    }
}));

function Homepage() {

    const classes = useStyles();
    const [tip, setTip] = useState("");

    useEffect(() => {
        API.getTip().then(res => {
            console.log(res.data.tip)
            setTip(res.data.tip)
        })
    }, [])

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Logo />
            <FitMoodji />
            <br />
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <FitnessCenterIcon className={classes.icon}/>
                            Today's Tip 
                        <FitnessCenterIcon className={classes.icon}/>
                    </Typography>
                    <Typography className={classes.tip}>{tip}</Typography>    

                </CardContent>
            </Card>
            
            <NavBar />
        </Container>
    );
}
export default Homepage;