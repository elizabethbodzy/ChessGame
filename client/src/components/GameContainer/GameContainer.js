import React from 'react'
import { Grid } from 'semantic-ui-react'
import Game from '../Game/Game'
// import ChatBox from '../ChatBox/ChatBox'
// import Chat from '../Chat/Chat';
import Input from '../Input/Input';
import InfoBar from '../InfoBar/InfoBar';
import Navbar from '../Navbar/Navbar';
// import Join from '../Join/Join';



const GameContainer = () => (
  <>
    <Navbar />
    <Grid celled>


      <Grid.Row>
        <Grid.Column width={3}>
          {/* <Join /> */}
          <InfoBar />
          {/* <Chat /> */}

          <Input />
        </Grid.Column>
        <Grid.Column width={9}>
          <Game />
        </Grid.Column>
        <Grid.Column width={3}>
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
)

export default GameContainer;