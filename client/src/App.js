import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Board from './components/Game/Board/Board'
import Navbar from './components/Navbar/Navbar';
import GameContainer from './components/GameContainer/GameContainer'
import SignUpForm from './components/SignUpForm/SignUpForm';
import Chat from './components/Chat/Chat';
// import './App.css';


function App() {
  return (
    <Router>
          <Switch>
            <Route exact path='/' component={SignUpForm} />
            {/* <Route exact path='/profile' component={Profile} /> */}
            <Route exact path='/home'>
              <Navbar />
              <GameContainer />
            </Route>
            
            <Route path='/chat' >
              <Navbar />
              <GameContainer/>
            </Route>


          </Switch>
      </Router>
  );
}



export default App;