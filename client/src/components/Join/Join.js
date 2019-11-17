import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useChatState } from '../../App'
// import Chat from "../Chat/Chat";

import "./Join.css";

const Join = ({toggleChat}) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState(0);

  //hello

  const [state, dispatch] = useChatState()

  useEffect(() => {
    console.log(state)
  }, [])


  const handleJoin = event => {
    toggleChat();
    return (!name || !room) ? event.preventDefault() : null;
  
  }


  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join Chat Room</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        <Link
          to={`/game?name=${name}&room=${room}`}
          onClick={handleJoin}
        >
          
          <button className="button mt-20" type="button">
            Join Game
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
