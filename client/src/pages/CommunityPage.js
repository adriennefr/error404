import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../components/Logo/Logo'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100%",
        height: "100%"
    },
    image: {
        width: "97%",
        [`@media (min-width: 768px)`]: {
            width: "555px"
        }
    },
    comingSoon: {
        fontFamily: "Bellota",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginBottom: "-15px",
        marginTop: "45px",
        [`@media (min-width: 768px)`]: {
            marginTop: "-30px"
        }
    },
    title: {
        fontFamily: "Bellota",
        color: "#4E5659",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "10px",
        fontSize: "33px",
        marginBottom: "4px",
        [`@media (min-width: 768px)`]: {
            fontSize: "60px",
            marginBottom: "-113px"
        }
    }
}));

export default function SimpleContainer() {

    const classes = useStyles();

    return (
        <div>
            <Container className={classes.root}>
                <Logo />
                <Container className={classes.root} maxWidth="sm">

                    <Typography component="div" className={classes.title}>
                        Community Page
                </Typography>
                    <img className={classes.image} src={require("../assets/images/ComingSoon.png")}></img>
                    <Typography component="div" className={classes.comingSoon}>
                        Coming Soon!
                </Typography>
                </Container>
                <NavBar />
            </Container>
        </div>
    );
}