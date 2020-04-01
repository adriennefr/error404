import React from "react";
import StopwatchHooks from '../components/Stopwatch/StopwatchHooks';
import FinishBtn from '../components/FinishBtn/FinishBtn';
import ChallengeCard from '../components/ChallengeCard/ChallengeCard';

function ChallengePage() {

    return (
        <div>
            <h1>Logo?</h1>
                <StopwatchHooks />
                    <br />
                <FinishBtn href="/homepage" />
                    <br />
                <ChallengeCard />

        </div>
    );
}

export default ChallengePage;