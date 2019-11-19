import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import API from '../../utils/API';

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    };

    responseFacebook = response => {
        console.log(this.props);
        if (this.props.pathname === '/auth/signin') {
            console.log('This should sign in');
        } else if (this.props.pathname === '/auth/signup') {
            API.createUser({
                name: response.name,
                email: response.email,
                userID: response.userID
            })
                .then(() => {
                    this.props.history.replace({
                        pathname: '/profile'
                    });
                })
                .catch(err => console.log(err));
        }

        this.setState({
            isLoggedIn: true,
        });
    };

    componentClicked = () => console.log('clicked');

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = null;
        } else {
            fbContent = (
                <FacebookLogin
                    appId='427827818144125'
                    autoLoad={false}
                    fields='name,email,picture'
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                />
            );
        }

        return (
            <>
                {fbContent}
            </>
        )

    }
}

export default withRouter(Facebook);