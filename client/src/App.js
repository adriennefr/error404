import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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

  console.log( 'private route', user, children )

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
 // const existingUser = JSON.parse(localStorage.getItem("user"));
  const [currentUser, setCurrentUser] = useState(null);

  // const setUser = (user) => {
  //   if( currentUser ) {
  //     localStorage.setItem("user", JSON.stringify(currentUser));
  //   } else {
  //     localStorage.removeItem('user');
  //   }
  //   setCurrentUser(user);
  // }
  

  const signOut = () => {
    setCurrentUser(null);
    window.location.replace("/")
    localStorage.clear();
  }

  useEffect(async () => {
    if(localStorage.getItem('exercises')){
      let exercises = JSON.parse(localStorage.getItem('exercises'));
      setWodState({WOD: exercises})
    }else{
      API.getWod().then((res) => {
        if( res.data ) {
          console.log(res.data)
          let rand = Math.floor(Math.random()*res.data.length)
          console.log(rand)
          localStorage.setItem('exercises', JSON.stringify(res.data[rand].exercises))
          setWodState({ WOD: res.data[rand].exercises })
        }
      });
    }
  }, [])

  return (
    <WODContext.Provider value={{wod: WodState.WOD}}>
      <AuthContext.Provider value={{user: currentUser, setCurrentUser: setCurrentUser, signOut: signOut}}>
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


