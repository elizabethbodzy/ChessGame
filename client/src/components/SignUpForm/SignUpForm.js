import React, { Component } from 'react';
import axios from 'axios';
import API from '../../utils/API';
import { email, password, minLength, required } from '../../utils/validators';
import './signUp.css';

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
            loggedIn: false,
            error: null
        }
    };

    componentDidMount() {
        // console.log(this.props);
        document.body.style.height = '100vh';
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.margin = '-20px 0 50px';
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };



    handleSignUp = (event) => {
        event.preventDefault();
        API.createUser({
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        })
            .then(res => {
                this.setState({
                    userName: '',
                    email: '',
                    password: ''
                })
                this.props.history.replace({ pathname: '/profile' });
            })
            .catch(err => console.log(err));
    };

    updateUser = () => {
        API.getCurrentUser()
            .then(res => {
                this.setState({
                    user: res.data.user,
                    loggedIn: true,
                })
            })
            .then(res => {
                this.setState({
                    email: '',
                    password: ''
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
                    this.props.history.replace({ pathname: '/profile' });
                }
                if (res.data.error) {
                    this.setState({ error: res.data.error });
                    alert('Incorrect email or password');
                }
            })
            .catch(err => console.log(err));
    };

    toggleForm = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    };

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
                {/* ===== RESPONSIVE SIGN UP/SIGN IN FORM ===== */}
                <div className='container responsive-container responsive-container-signup'>
                    <div className='responsive-signup'>
                        <form action='#' className='responsive-form'>
                            <h1>Create Account</h1>
                            <input
                                value={this.state.userName}
                                name='userName'
                                onChange={this.handleInputChange}
                                type='text'
                                placeholder='Username' />
                            <input
                                validators={[required, email]}
                                value={this.state.email}
                                name='email'
                                onChange={this.handleInputChange}
                                type='email'
                                placeholder='Email' />
                            <input
                                validators={[required, password, minLength(6)]}
                                value={this.state.password}
                                name='password'
                                onChange={this.handleInputChange}
                                type='password'
                                placeholder='Password' />
                            <button className='signup' onClick={this.handleSignUp}>Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className='separator'>Or</div>
                <div className='container responsive-container responsive-container-signin'>
                    <div className='responsive-signin'>
                        <form action='#' className='responsive-form'>
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
                            <button className='signin' onClick={this.handleSignIn}>Sign In</button>
                        </form>
                    </div>
                </div>
                {/* ===== DESKTOP CONTAINER ===== */}
                <div className={this.state.toggle ? 'container right-panel-active' : 'container'} id='container'>
                    {/* ===== SIGN UP FORM ===== */}
                    <div className='form-container sign-up-container'>
                        <form action='#'>
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                            <span>or create an account</span>
                            <input
                                value={this.state.userName}
                                name='userName'
                                onChange={this.handleInputChange}
                                type='text'
                                placeholder='Username' />
                            <input
                                validators={[required, email]}
                                value={this.state.email}
                                name='email'
                                onChange={this.handleInputChange}
                                type='email'
                                placeholder='Email' />
                            <input
                                validators={[required, password, minLength(6)]}
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
                            <div class="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            </div>
                            <span>or sign in using your email</span>
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