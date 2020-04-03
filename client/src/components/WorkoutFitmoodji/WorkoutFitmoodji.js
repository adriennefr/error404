import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
    },
  }));

export default function SimpleContainer() {

    const classes = useStyles();
    
    return (
        <React.Fragment>
            <br></br>
            <Container maxWidth="sm" className={classes.container}>
                    <img src={require("../../assets/images/work-female.png")} height="360" ></img>
            </Container>
        </React.Fragment>
    );
}