import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { Container, Button, Grid, Form } from 'semantic-ui-react';
import './profile.css';

class Profile extends Component {
    render() {
        return (
            <>
                {/* <Navbar /> */}
                <Grid.Row className='profile-container'>
                    <Container className='info-container'>
                        <Grid.Column className='info'>
                            <h1>Username</h1>
                        </Grid.Column>
                    </Container>
                    <Container className='stats-container'>
                        <Grid.Column className='stats'>
                            <h1>Stats</h1>
                        </Grid.Column>
                    </Container>
                </Grid.Row>
            </>
        )
    }

};

export default Profile;