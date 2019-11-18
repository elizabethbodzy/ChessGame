import React, { useState, useEffect, useContext } from "react";
import {Message} from "semantic-ui-react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

import { useChatState } from '../GameContainer/GameContainer'

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // const [state, dispatch] = useChatState()

  const ENDPOINT = "/";

  // useEffect(() => {
  //     console.log(state)
  // }, [])

//   useEffect(() => {
      
//       socket.on('connect', () => console.log('yaahahahhahahah'))
//       console.log(socket)
//   }, [])

  

  useEffect(() => {
      
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    // console.log(socket);


    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      console.log(users)
        // dispatch({ type: "SET_USERS", users })
    
      setUsers(users);
    
    });

    

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [messages]);

  

  //function for sending messages
  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

//   console.log(message, messages);
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        
        {/* {users.length > 2 ? (
            <Message negative>
            <Message.Header>We're sorry we can't apply that discount</Message.Header>
            <p>That offer has expired</p>
          </Message>
        ):  } */}
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  );
};

export default Chat;
