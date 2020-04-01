import React from "react";
// import "./App.css";
import StopwatchHooks from '../components/Stopwatch/StopwatchHooks'
import FinishBtn from '../components/FinishBtn/FinishBtn'
import GoalInput from '../components/GoalInput/GoalInput'

function WorkoutPage() {

    return (
        <div>
            <h1>Logo?</h1>
                <StopwatchHooks />
                    <br />
                <FinishBtn href="/homepage" />
                    <br />
                <GoalInput />

        </div>
    );
}

export default WorkoutPage;