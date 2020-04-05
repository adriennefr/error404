import React from 'react';
import SignUpCard from '../components/SignUpCard/SignUpCard';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useAuth} from "../utils/store";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#B8C0DB",
        minHeight: '100vh',
        height: "100%"
    },
}));

function SignUpPage() {

    const classes = useStyles();

    const { user } = useAuth();

    if( user ) {
        return <Redirect to={{
            pathname: "/homepage",
        }}/>
    }


    return(
        <Container className={classes.root}>
            <SignUpCard />
        </Container>
    )
}

export default SignUpPage;
