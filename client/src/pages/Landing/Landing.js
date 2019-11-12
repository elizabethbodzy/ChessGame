import React, { Component } from 'react';
import API from '../../utils/API';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class Landing extends Component {
    state = {
        userName: '',
        email: '',
        password: '',
        createdUser: false,
        error: null
    };

    handleSignUp = (userName, email, password) => {
        API.createUser({
            userName: userName,
            email: email,
            password: password
        })
        .then(res => {
            this.setState({
                userName: '',
                email: '',
                password: ''
            })
        })
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <SignUpForm />
        )
    }
};

export default Landing;