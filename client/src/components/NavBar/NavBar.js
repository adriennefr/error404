import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import GroupIcon from '@material-ui/icons/Group';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import red from '@material-ui/core/colors/red';
import { Link } from 'react-router-dom'

// const theme = createMui(
//     //theme
// )
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
                            <Link to='/homepage'>
                                <IconButton size='medium' >
                                    <HomeIcon />
                                </IconButton>
                            </Link>

                            <IconButton size="medium" color="inherit">
                                <BarChartIcon />
                            </IconButton>

                            <Link to='/wokoutdashboard'>
                                <IconButton size="medium" color="inherit">
                                    <FitnessCenterIcon />
                                </IconButton>
                            </Link>

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