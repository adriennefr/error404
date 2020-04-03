import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        marginTop: "5px"
    },
    margin: {
        margin: theme.spacing(1),
    },
    buttonText: {
        fontSize: '12px'
    }
}
));

export default function OutlinedButtons() {
    const classes = useStyles();

    return (
        <>
        <Container className={classes.container}>
            <Grid>
                <Link to='/challenge'>
                    <Button variant="outlined" size="small" color="primary" className={classes.margin, classes.buttonText}>
                        Challenge
                    </Button>
                </Link>
            </Grid>
        </Container>

        <Container className={classes.container}>
            <Grid>
                <Link to='/doyourown'>
                    <Button variant="outlined" size="small" color="primary" className={classes.margin, classes.buttonText}>
                        Do Your Own
                </Button>
                </Link>
            </Grid>
        </Container>
        </>
    )
};
