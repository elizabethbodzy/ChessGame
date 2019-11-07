import React from 'react';
import Board from './components/Game/Board/Board'
import Navbar from './components/Navbar/Navbar';
import GameContainer from './components/GameContainer/GameContainer'
import SignUpForm from './components/SignUpForm/SignUpForm';
// import './App.css';

function App() {
  return (
    <>
    {/* <SignUpForm /> */}
      <Navbar /> 
      <GameContainer />
      {/* <Board></Board> */}
    </>
  );
}

export default App;