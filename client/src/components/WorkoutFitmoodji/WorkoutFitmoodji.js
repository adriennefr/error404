import React from 'react';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import {useAuth} from "../../utils/store";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
    },
    bitmoji:{
        [`@media (min-width: 768px)`] : {
            height: 400,
        },
    },
  }));

export default function SimpleContainer() {

    const classes = useStyles();
    const { user } = useAuth();

    return (
        <React.Fragment>
            <br></br>
            <Container maxWidth="sm" className={classes.container}>
                    <img className={classes.bitmoji} style={{marginTop: "-13px"}} src={`/images/work-${user.gender}.png`} height="240" ></img>
            </Container>
        </React.Fragment>
    );
}
