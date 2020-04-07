import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import GroupIcon from '@material-ui/icons/Group';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import red from '@material-ui/core/colors/red';
import { Link } from 'react-router-dom'
import { useAuth } from "../../utils/store";

// const theme = createMui(
//     //theme
// )
const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        background: "linear-gradient(180deg, #737373 30%, #4E5659 90%)",

    },
    buttonColor: {
        color: "#85FFCE",
    },

}));

export default function BottomAppBar() {
    const classes = useStyles();

    const { signOut } = useAuth();

    return (
        <React.Fragment>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Box mx="auto">
                        <Link to='/homepage'>
                            <IconButton size='medium' >
                                <HomeIcon className={classes.buttonColor} />
                            </IconButton>
                        </Link>

                        <Link to='/workoutlog'>
                            <IconButton size="medium" color="inherit">
                                <BarChartIcon className={classes.buttonColor} />
                            </IconButton>
                        </Link>

                        <Link to='/workoutdashboard'>
                            <IconButton size="medium" color="inherit">
                                <FitnessCenterIcon className={classes.buttonColor} />
                            </IconButton>
                        </Link>

                        <Link to='/community'>
                            <IconButton size="medium" color="inherit">
                                <GroupIcon className={classes.buttonColor} />
                            </IconButton>
                        </Link>

                        <IconButton size="medium" color="inherit" onClick={() => signOut()}>
                            <ExitToAppIcon className={classes.buttonColor} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
