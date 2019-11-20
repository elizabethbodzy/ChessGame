import React, { createContext, useReducer, useContext, useState, useEffect } from "react";
import { withRouter } from "react-router";
import { Grid } from "semantic-ui-react";
import Game from "../Game/Game";
import Chat from "../Chat/Chat";
import Navbar from "../Navbar/Navbar";
import queryString from "query-string";
import connect from "../../socket";

import Join from "../Join/Join";


// export const ChatContext = createContext()


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

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {

    const { name, room } = queryString.parse(location.search);


    connect().then((socket) => {
      // socket.on("getMove", move => {
      //   console.log(move)
      //   // this.movePiece(move.start, move.end)
      // });
      socket.emit("join", { name, room }, error => {
        if (error) {
          alert(error);
        }
      });
    })

    setName(name);
    setRoom(room);


  }, []);

  return (
    <>

      <Navbar />
      <Grid celled>


        <Grid.Row>
          <Grid.Column width={4}>
            <Chat location={location} name={name} room={room} />



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

export default GameContainer;
