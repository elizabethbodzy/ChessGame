import React from 'react'
<<<<<<< HEAD
import { Grid } from 'semantic-ui-react'
import Board from '../Game/Board/Board'
// import ChatBox from '../ChatBox/ChatBox'
// import Chat from '../Chat/Chat';
import Input from '../Input/Input';

import InfoBar from '../InfoBar/InfoBar';
// import Join from '../Join/Join';


=======
import { Grid, Image } from 'semantic-ui-react'
import ChatBox from '../ChatBox/ChatBox'
import Game from '../Game/Game'
>>>>>>> master

const GameContainer = () => (
  <Grid celled>


    <Grid.Row>
      <Grid.Column width={3}>
<<<<<<< HEAD
        {/* <Join /> */}
          <InfoBar />
                    {/* <Chat /> */}

          <Input />
=======
        <ChatBox />
>>>>>>> master
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
)

export default GameContainer;