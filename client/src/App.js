import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameContainer from './components/GameContainer/GameContainer'
import SignUpForm from './components/SignUpForm/SignUpForm';
import Profile from './components/ProfilePage/Profile';

function App() {
  return (
    <Router>
          <Switch>
            <Route exact path='/' component={SignUpForm} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/game' component={GameContainer} />
          </Switch>
      </Router>
  );
}

export default App;