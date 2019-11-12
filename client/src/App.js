import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import Board from './components/Game/Board/Board'
import Navbar from './components/Navbar/Navbar';
import GameContainer from './components/GameContainer/GameContainer'
// import SignUpForm from './components/SignUpForm/SignUpForm';
// import './App.css';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <>
    {/* <SignUpForm /> */}
      <Navbar /> 
      <GameContainer> 
      <Router>
      <Route path= "/" exact component = {Join} />
        <Route path= "/chat" component = {Chat} />
      </Router>

      </GameContainer>
      {/* <Board></Board> */}
      
    </>
  );
}



export default App;