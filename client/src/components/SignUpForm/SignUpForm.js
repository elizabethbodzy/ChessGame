import React, { Component } from 'react';
import axios from 'axios';
import API from '../../utils/API';
import './signup.css';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            user: [],
            userName: '',
            email: '',
            password: '',
            createdUser: false,
            logginIn: false,
            error: null
        }
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
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

    updateUser = () => {
        API.getCurrentUser()
            .then(res => {
                this.setState({
                    user: res.data.user,
                    logginIn: true
                })
            })
            .catch(err => console.log(err));
    };

    handleSignIn = event => {
        event.preventDefault();
        const { email, password } = this.state;
        axios.post('/auth/signin', { email, password })
            .then(res => {
                localStorage.setItem('jwtToken', res.data.token);
                if (res.data.success) {
                    this.updateUser();
                }
                if (res.data.error) {
                    this.setState({ error: res.data.error });
                }
            })
            .catch(err => console.log(err));
    };

    toggleForm = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <>
                {/*MAIN TITLE*/}
                <div className='title-container'>
                    <div className='title-square'>C</div>
                    <div className='title-square'>H</div>
                    <div className='title-square'>E</div>
                    <div className='title-square'>C</div>
                    <div className='title-square'>K</div>
                    <div className='title-square'>M</div>
                    <div className='title-square'>A</div>
                    <div className='title-square'>T</div>
                    <div className='title-square'>E</div>
                </div>
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
                            <button onClick={this.handleSignUp}>Sign Up</button>
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
                            <button onClick={this.handleSignIn}>Sign In</button>
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