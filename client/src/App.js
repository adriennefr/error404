import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import Homepage from './pages/Homepage';
import WorkoutDashboard from './pages/WorkoutDashboard';
import DoYourOwn from './pages/DoYourOwn';
import ChallengePage from './pages/ChallengePage';
import WorkoutLog from './pages/WorkoutLog'
import API from './utils/API';
import {WODContext, useAuth, AuthContext} from './utils/store';

function PrivateRoute({ children, ...rest }) {
  const { user } = useAuth();

  console.log( 'private route', user, rest, children )

  return (
    <>
      { user && <Route {...rest}>{children}</Route>}
      { !user && <Redirect
          to={{
            pathname: "/",
          }}
        />}
    </>
  );
}

function App() {
  const [WodState, setWodState] = useState({
    WOD: [],
  });

  // Check if user is logged in... VERY UNSAFE
  const existingUser = JSON.parse(localStorage.getItem("user"));
  const [currentUser, setCurrentUser] = useState(existingUser);

  const setUser = (user) => {
    if( user ) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
    setCurrentUser(user);
  }

  const signOut = () => {
    setUser();
  }

  const changeWod =()=>{
    setWodState({WOD: ['filler', 'filler', 'filler', 'filler']})
  }

  useEffect(async () => {
    if(localStorage.getItem('exercises')){
      let exercises = JSON.parse(localStorage.getItem('exercises'));
      setWodState({WOD: exercises})
    }else{
      API.getWod().then((res) => {
        if( res.data ) {
          localStorage.setItem('exercises', JSON.stringify(res.data.exercises))
          setWodState({ WOD: res.data.exercises })
        }
      });
    }
  }, [])

  return (
    <WODContext.Provider value={{wod: WodState.WOD, doSomething: changeWod}}>
      <AuthContext.Provider value={{user: currentUser, setUser: setUser, signOut: signOut}}>
        <Router>
          <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <PrivateRoute exact path="/homepage" component={Homepage} />
                <PrivateRoute exact path="/workoutlog" component={WorkoutLog} />
                <PrivateRoute exact path="/workoutdashboard" component={WorkoutDashboard} />
                <PrivateRoute exact path="/doyourown" component={DoYourOwn} />
                <PrivateRoute exact path="/challenge" component={ChallengePage} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </WODContext.Provider>
  );
}

export default App;


