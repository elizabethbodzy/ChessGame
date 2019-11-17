import React, { createContext, useReducer, useContext } from "react";
import { withRouter } from "react-router";
import { Grid } from "semantic-ui-react";
import Game from "../Game/Game";
import Chat from "../Chat/Chat";
import Navbar from "../Navbar/Navbar";

import Join from "../Join/Join";

// export const ChatContext = createContext()

// export const useChatState = () => {
//   return useContext(ChatContext)
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "SET_USERS":
//       console.log('dispatched: ', action.users)
//       return { ...state, users: action.users, yo: 'yoo' }
//     default:
//       return state;
//   }
// }

// const ChatContextProvider = ({ reducer, initialState = {}, children }) => {
//   const value = useReducer(reducer, initialState);
//   return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
// }


const GameContainer = ({ location }) => {
  return (
    <>

      <Navbar />
      <Grid celled>


        <Grid.Row>
          <Grid.Column width={4}>
          <Chat location={location}/>



          </Grid.Column>
          <Grid.Column width={10}>
            <Game />
          </Grid.Column>

          <Grid.Column width={1}>
            <h3> Moves </h3>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={12}>
            <h3> Pieces Captured </h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default withRouter(GameContainer);
