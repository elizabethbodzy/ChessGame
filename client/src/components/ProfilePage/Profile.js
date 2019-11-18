import React, { Component } from 'react';
import { withRouter } from "react-router";
import Navbar from '../Navbar/Navbar';
import { Segment, Button, Divider, Grid } from 'semantic-ui-react';
import './profile.css';
import Join from '../Join/Join';
import Chat from '../Chat/Chat';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleChat: false,
            userName: ''
            // totalGames: this.state.totalGames,
            // points: this.state.points,
            // wins: this.state.wins,
            // losses: this.state.losses,
            // draws: this.state.draws
        }
    };

    componentDidMount() {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.boxSizing = 'border-box';
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.height = '100vh';
        document.body.style.width = '100%';
    };

    toggleChat = () => {
        this.setState({toggleChat : true})
    };

    render() {
        return (
            <>
                <Navbar />
                <Grid className='page-container'>
                    <Grid.Row columns={2} className='profile-container'>
                        <Grid.Column width={7} className='info-container'>
                            <Segment className='info'>
                                <h1>Profile</h1>
                                <hr />
                                <div className='avatar-user-container'>
                                    <div className='avatar'>
                                        <img src='./images/default-profile.png' />
                                        <a href='#'><i class="fas fa-camera"></i> Add Photo</a>
                                    </div>
                                    <div className='user-info'>
                                        <h3>{this.state.userName}</h3>
                                    </div>
                                </div>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={7} className='stats-container'>
                            <Segment className='stats'>
                                <h1>Stats</h1>
                                <hr />
                                <div className='progress'>
                                    <div className='games-played'>
                                        <h3>Games Played</h3>
                                        <span>0</span>
                                    </div>
                                    <div className='points-earned'>
                                        <h3>Points</h3>
                                        <span>500</span>
                                    </div>
                                    <div className='record'>
                                        <h3>W/L/D</h3>
                                        <span>0/0/0</span>
                                    </div>
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row width={16} className='join-lobby-container'>
                        <Grid.Column>
                            <Segment className='join'>
                                {
                                    this.state.toggleChat ? <Chat location={this.props.location}/> : <Join toggleChat={this.toggleChat} />
                                }
                            
                                
                                <hr />
                            </Segment>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        )
    }

};

export default  withRouter(Profile);