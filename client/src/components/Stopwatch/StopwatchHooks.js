import React, { useState, useEffect } from 'react';
import './Stopwatch.css'

function Stopwatch() {

    const [ timerOn, setTimerOn ] = useState(false);
    const [ timerStart, setTimerStart] = useState(0);
    const [ timerTime, setTimerTime ] = useState(0);

    const startTimer = () => {
        setTimerOn(true);
        setTimerTime(timerTime);
        setTimerStart(Date.now() - timerTime);

    };

    const pauseTimer = () => {
        setTimerOn(false);
    };

    const resetTimer = () => {
        setTimerStart(0);
        setTimerTime(0);
    };

    useEffect(() => {
        let interval = null;
        if(timerOn) {
            interval = setInterval(() => {
                setTimerTime(Date.now() - timerStart)
            }, 10);
        } else if (!timerOn){
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [timerOn, timerTime]);

    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return(
        <div className="Stopwatch-display">
            <div className="stopwatch">
                {hours} : {minutes} : {seconds} : {centiseconds}
            </div>
            
            <br />

            {timerOn === false && timerTime === 0 && (
                <button className="timerBtn" onClick={startTimer}>Start</button>
            )}
            {timerOn === true && (
                <button className="timerBtn" onClick={pauseTimer}>Pause</button>
            )}
            {timerOn === false && timerTime > 0 && (
                <button className="timerBtn" onClick={startTimer}>Resume</button>
            )}
            {timerOn === false && timerTime > 0 && (
                <button className="timerBtn" onClick={resetTimer}>Reset</button>
            )}
        </div>
    )
};

export default Stopwatch;