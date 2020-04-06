import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "7%",
    },
    
    logo: {
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        [`@media (min-width: 768px)`] : {
            width: '150%'
          }
    },

}));

export default function FullWidthGrid() {

    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Grid container spacing={4} >
            <Grid className={classes.logo} item xs={4} alignContent="flex-start" direction="row" justify="flex-start" alignItems="center">
                <img src={require('../../assets/images/fitmoodji.png')} alt="Fitmoodji Logo" width="210" className={classes.logo}/>
            </Grid>
        </Grid>
    </div>
    );
}