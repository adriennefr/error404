import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import GroupIcon from '@material-ui/icons/Group';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },

}));

export default function BottomAppBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Box mx="auto">
                        <IconButton size='medium' color="inherit">
                            <HomeIcon />
                        </IconButton>
                        <IconButton size="medium" color="inherit">
                            <BarChartIcon />
                        </IconButton>
                        <IconButton size="medium" color="inherit">
                            <FitnessCenterIcon />
                        </IconButton>
                        <IconButton size="medium" color="inherit">
                            <GroupIcon />
                        </IconButton>
                        <IconButton size="medium" color="inherit">
                            <AccountBoxIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}