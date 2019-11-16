import React, { createContext, useReducer, useContext } from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GameContainer from './components/GameContainer/GameContainer'
import SignUpForm from './components/SignUpForm/SignUpForm';
import Profile from './components/ProfilePage/Profile';

export const ChatContext = createContext()

export const useChatState = () => {
  return useContext(ChatContext)
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      console.log('dispatched: ', action.users)
      return { ...state, users: action.users, yo: 'yoo' }
    default:
      return state;
  }
}

const ChatContextProvider = ({ reducer, initialState = {}, children }) => {
  const value = useReducer(reducer, initialState);
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}


function App() {
  return (
    <Router>
          <Switch>
            <ChatContextProvider>
            <Route exact path='/' component={SignUpForm} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/game' component={GameContainer} />
            </ChatContextProvider>
          </Switch>
      </Router>
  );
}

export default App;