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
        height: "103vh",
        minHeight: "100%",
        marginBottom: "7%",
        backgroundColor: "#B8C0DB",
        paddingBottom: "10%"
    },
    tip: {
        fontFamily: "Bellota",
        fontSize: 18,
        justifyContent: "center"
    },
    card: {
        maxWidth: 345,
        maxHeight: 200,
        marginTop: '10px',
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#d3d9eb",
    },
    title: {
        fontSize: 16,
        fontFamily: "Bellota"
    },
    icon: {
        fontSize: "small",
    },
    // grid: {
    //     height: "100%",
    //     minHeight: "100%",
    //     paddingBottom: "100%",
    // marginTop: "100%"
    // }
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
        <div className={`${classes.root} rootDirectory`}>
            <Container maxWidth="lg">
                <Logo />
                <FitMoodji />
                <Card className={classes.card}>
                    <CardContent>
                        <Typography align="center" className={classes.title} color="textSecondary" gutterBottom>
                            <FitnessCenterIcon className={classes.icon} />
                            Today's Tip
                            <FitnessCenterIcon className={classes.icon} />
                        </Typography>
                        <Typography className={classes.tip}>{tip}</Typography>
                    </CardContent>
                </Card>
                <NavBar />
            </Container>
        </div>
    );
}
export default Homepage;