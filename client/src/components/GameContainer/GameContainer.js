import React from "react";
import { withRouter } from "react-router";
import { Grid } from "semantic-ui-react";
import Game from "../Game/Game";
import Chat from "../Chat/Chat";
import Navbar from "../Navbar/Navbar";

import Join from "../Join/Join";

const GameContainer = ({ location }) => {
  return (
    <>
    {/* <Navbar /> */}
      <Grid celled>
        

        <Grid.Row>
          <Grid.Column width={4}>
           
            {location.pathname === "/chat" ? <Chat location={location} /> : <Join />}

           
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
