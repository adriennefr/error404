import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import Homepage from './pages/Homepage';
import WorkoutPage from './pages/WorkoutPage';
import ChallengePage from './pages/ChallengePage';

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/workout" component={WorkoutPage} />
        <Route exact path="/challenge" component={ChallengePage} />
      </Switch>
      
    </Router>

    // <LandingPage />
  

  );
}

export default App;
