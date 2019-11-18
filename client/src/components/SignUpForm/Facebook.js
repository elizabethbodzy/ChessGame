import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    };

    componentClicked = () => console.log('clicked');

    responseFacebook = response => {
        // console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <div></div>
            )
        } else {
    fbContent = (
        <FacebookLogin
            appId='427827818144125'
            autoLoad={true}
            fields='name, email, picture'
            onClick={componentClicked}
            callback={this.responseFacebook}
            render={renderProps => (
                <button oncClick={renderProps.oncClick} id='facebook'>
                    <span><i class="fab fa-facebook-f"></i></span>
                </button>
            )}>
        </FacebookLogin>);
}
return (

    <>
        {fbContent}
    </>
)
    }
}
