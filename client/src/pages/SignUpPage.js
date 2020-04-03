import React from 'react';
import SignUpCard from '../components/SignUpCard/SignUpCard';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: "#B8C0DB",
        height: "130vh"
    },
}));

function SignUpPage() {

    const classes = useStyles();
    return(
        <Container className={classes.background}>
            <SignUpCard />
        </Container>
    )
}

export default SignUpPage;