import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import Homepage from './pages/Homepage';
import WorkoutDashboard from './pages/WorkoutDashboard';
import DoYourOwn from './pages/DoYourOwn';
import ChallengePage from './pages/ChallengePage';
import API from './utils/API';
import WODContext from './utils/store';

function App() {
  const [WodState, setWodState] = useState({
    WOD: [],
  });

  const changeWod =()=>{
    setWodState({WOD: ['filler', 'filler', 'filler', 'filler']})
  }

  useEffect(async () => {
    if(localStorage.getItem('cache')){
      let exercises = JSON.parse(localStorage.getItem('cache'));
      setWodState({WOD: exercises})
    }else{
      API.getWod().then((res) => {
      console.log(res)
      
      let rand = Math.floor(Math.random() * res.data.length)
      localStorage.setItem('cache', JSON.stringify(res.data[rand].exercises))
      setWodState({ WOD: res.data[rand].exercises })
    });
    }
  }, [])

  return (

    <Router>
      <Switch>
        <WODContext.Provider value={{ wod: WodState.WOD, doSomething: changeWod}}>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/workoutdashboard" component={WorkoutDashboard} />
          <Route exact path="/doyourown" component={DoYourOwn} />
          <Route exact path="/challenge" component={ChallengePage} />
        </WODContext.Provider>
      </Switch>
    </Router>

  );
}

export default App;


