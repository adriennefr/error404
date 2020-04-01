import React from "react";
import StopwatchHooks from '../components/Stopwatch/StopwatchHooks';
import FinishBtn from '../components/FinishBtn/FinishBtn';
import ChallengeItem from '../components/ChallengeItem/ChallengeItem';

function ChallengePage() {

    return (
        <div>
            <h1>Logo?</h1>
                <StopwatchHooks />
                    <br />
                <FinishBtn href="/homepage" />
                    <br />
                <ChallengeItem />

        </div>
    );
}

export default ChallengePage;