import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import ChatBox from '../ChatBox/ChatBox'
import Game from '../Game/Game'

const GameContainer = () => (
  <Grid celled>


    <Grid.Row>
      <Grid.Column width={3}>
        <ChatBox />
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