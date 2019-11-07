import React, { Component } from 'react';
import './signup.css';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
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
                            <input type='text' placeholder='Username' />
                            <input type='email' placeholder='Email' />
                            <input type='password' placeholder='Password' />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    {/* ===== SIGN IN FORM ===== */}
                    <div className='form-container sign-in-container'>
                        <form action='#'>
                            <h1>Sign In</h1>
                            <input type='email' placeholder='Email' />
                            <input type='password' placeholder='Password' />
                            <a href='#'>Forgot your password?</a>
                            <button>Sign In</button>
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