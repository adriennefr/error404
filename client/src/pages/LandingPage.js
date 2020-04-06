import React from 'react';
import SignInCard from '../components/SignInCard/SignInCard'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './style.css'
import { useAuth } from "../utils/store";
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#B8C0DB",
        minHeight: '100vh',
        height: "100%",
    },
}));

function LandingPage() {
    const classes = useStyles();

    const { user } = useAuth();

    if( user  ) {
        return <Redirect to={{
            pathname: "/homepage",
        }}/>
    }

    return(
        <Container className={classes.root}>
            <SignInCard />
        </Container>
    );
}

export default LandingPage;
