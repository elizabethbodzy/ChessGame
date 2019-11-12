import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Board from './components/Game/Board/Board'
// import Navbar from './components/Navbar/Navbar';
import GameContainer from './components/GameContainer/GameContainer'
import SignUpForm from './components/SignUpForm/SignUpForm';
// import './App.css';

// import Join from './components/Join/Join';
// import Chat from './components/Chat/Chat';

function App() {
  return (
    <Router>
          <Switch>
            <Route exact path='/' component={SignUpForm} />
            {/* <Route exact path='/profile' component={Profile} /> */}
            <Route exact path='/home' component={GameContainer} />
          </Switch>
      </Router>
  );
}



export default App;