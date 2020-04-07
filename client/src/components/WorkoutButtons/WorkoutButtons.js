import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        marginTop: "10px"
    },
    div: {
        [`@media (min-width: 768px)`]: {
            display: "flex",
            justifyContent: "center",
            margin: "15px"
        },

    },
    margin: {
        margin: theme.spacing(1),
    },
    buttonStyle: {
        fontSize: '12px',
        fontFamily: "Bellota",
        color: "#85FFCE",
        backgroundColor: "#4E5659",
        '&:hover': {
            backgroundColor: "#85FFCE",
            color: "#4E5659"
        },
        [`@media (min-width: 768px)`]: {
            width: "130%",
            fontSize: 16,
        },
    },
}));

export default function OutlinedButtons() {
    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Container className={classes.container}>
                <Link to='/challenge' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" className={classes.margin, classes.buttonStyle}>
                        Challenge Yourself!
                     </Button>
                </Link>
            </Container>

            <Container className={classes.container}>
                <Link to='/doyourown' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" className={classes.margin, classes.buttonStyle}>
                        Do Your Own Workout!
                     </Button>
                </Link>
            </Container>
        </div>
    )
};
