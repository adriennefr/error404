import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import FitMoodji from '../components/Fitmoodji/Fitmoodji'
import NavBar from '../components/NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../components/Logo/Logo'
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#B8C0DB",
        height: "100%",
        minHeight: '100vh',
        marginBottom: '64px'
    },
}));

function Homepage() {

    const classes = useStyles();
    const [ tip, setTip ] = useState("");

    useEffect(() => {
        API.getTip().then(res=> {
            console.log(res)
            let rand = Math.floor(Math.random()*res.data.length)
            setTip(res.data[rand])
        })
    })

    return (
            <Container maxWidth="lg" className={classes.root}>
                <Logo />
                <FitMoodji />
                {tip}
                <NavBar />
            </Container>
    );
}
export default Homepage;
