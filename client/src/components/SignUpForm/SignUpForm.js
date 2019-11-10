import React, { Component } from 'react';
import './signup.css';
import API from '../../utils/API';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            user: [],
            userName: '',
            email: '',
            password: '',
        }
    };

    componentDidMount() {
        API.getUser()
            .then(res => {
                this.setState({ user: res.data })
                console.log(res.data);
            })
            .catch(err => {
                throw err;
            });
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSignUpSubmit = event => {
        event.preventDefault();
        if (this.state.userName && this.state.email && this.state.password) {
            fetch('/auth/signup',
                {
                    method: 'POST',
                    credentials: 'include',
                    mode: 'cors',
                    body: JSON.stringify({
                        email: this.state.email,
                        password: this.state.password,
                        userName: this.state.userName
                    }),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                })
                .then(response => {
                    console.log(response);
                    window.location.href = '/home';
                })
                .catch(err => console.log(err));

            this.setState({
                userName: '',
                email: '',
                password: ''
            });
        } else {
            console.log('Please fill out all fields.');
        }
    };

    handleSignInSubmit = event => {
        event.preventDefault();
        fetch('/auth/signin',
            {
                method: 'POST',
                credentials: 'include',
                mode: 'cors',
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(response => {
                console.log(response);
                window.location.href = "/home";
            })
            .catch(err => console.log(err));

            this.setState({
                email: '',
                password: ''
            });
    };

    toggleForm = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <>
                <div className={this.state.toggle ? 'container right-panel-active' : 'container'} id='container'>
                    {/* ===== SIGN UP FORM ===== */}
                    <div className='form-container sign-up-container'>
                        <form action='#'>
                            <h1>Create Account</h1>
                            <input
                                value={this.state.userName}
                                name='userName'
                                onChange={this.handleInputChange}
                                type='text'
                                placeholder='Username' />
                            <input
                                value={this.state.email}
                                name='email'
                                onChange={this.handleInputChange}
                                type='email'
                                placeholder='Email' />
                            <input
                                value={this.state.password}
                                name='password'
                                onChange={this.handleInputChange}
                                type='password'
                                placeholder='Password' />
                            <button onClick={this.handleSignUpSubmit}>Sign Up</button>
                        </form>
                    </div>
                    {/* ===== SIGN IN FORM ===== */}
                    <div className='form-container sign-in-container'>
                        <form action='#'>
                            <h1>Sign In</h1>
                            <input
                                value={this.state.email}
                                name='email'
                                onChange={this.handleInputChange}
                                type='email'
                                placeholder='Email' />
                            <input
                                value={this.state.password}
                                name='password'
                                onChange={this.handleInputChange}
                                type='password'
                                placeholder='Password' />
                            <a href='#'>Forgot your password?</a>
                            <button onClick={this.handleSignInSubmit}>Sign In</button>
                        </form>
                    </div>
                    {/* ===== OVERLAY CONTAINER FOR THE ENTIRE FORM ===== */}
                    <div className='overlay-container'>
                        <div className='overlay'>
                            <div className='overlay-panel overlay-left'>
                                <h1>Welcome Back!</h1>
                                <p>To reconnect with us, please sign in.</p>
                                <button className='ghost' id='signIn' onClick={this.toggleForm}>Sign In</button>
                            </div>
                            <div className='overlay-panel overlay-right'>
                                <h1>Hello, Player!</h1>
                                <p>Sign Up to start playing chess online!</p>
                                <button className='ghost' id='signUp' onClick={this.toggleForm}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SignUpForm;