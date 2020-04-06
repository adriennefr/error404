import React from 'react';
import './FinishBtn.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';

const finishRed = red[400]

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    // finishBtn : {
    //     color: finishRed,
    //     borderColor: finishRed,
    // },
    buttonStyle: {
        fontSize: '14px',
        fontFamily: "Bellota",
        color: "red",
        fontWeight: "bold"
        }
}));

function FinishBtn({ onClick }) {
    const classes = useStyles();

    return (
        <div className="finishBtn-content">
            <Button
            variant="contained"
            className={`${classes.button} ${classes.buttonStyle}`}
            onClick={() => {console.log('clicked');onClick()}}>
                Finish Workout
            </Button>
        </div>
    );
};

export default FinishBtn;
