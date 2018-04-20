import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import getUser from '../../ducks/reducer';

class Auth extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            redirect: false,
            username: '',
            password: ''
        }

        this.usernameInput = this.usernameInput.bind(this);
        this.passwordInput = this.passwordInput.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.registerClick = this.registerClick.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    usernameInput(text)
    {   
        //console.log(text);
        this.setState({ username: text });
    }

    passwordInput(text)
    {
        //console.log(text);
        this.setState({ password: text });
    }

    registerUser(username, password)
    {
        axios.post('/register', {username, password}).then(res =>
        {
            console.log('register user axios call')
            this.setState({ redirect: true });
        });

    }

    registerClick()
    {
        this.registerUser(this.state.username, this.state.password);
        this.setState(
        {
            username: '',
            password: ''
        });
    }

    loginUser(username, password)
    {
        console.log('getting here?')
        axios.post('/login', {username, password}).then(res =>
        {
            console.log('login user axios call')
            this.setState({ redirect: true });
        });

    }

    loginClick()
    {
        this.loginUser(this.state.username, this.state.password);
        this.setState(
        {
            username: '',
            password: ''
        });
    }

    render()
    {
        //const { username, img } = this.props;
        
        const { redirect } = this.state;
        if (redirect)
        {
            return <Redirect to='/dashboard' />;
        }
        return (
            <div>
                <input value={this.state.username} placeholder="Username" onChange={(e) => this.usernameInput(e.target.value)} />                
                <input value={this.state.password} placeholder="Password" onChange={(e) => this.passwordInput(e.target.value)} />
                <button onClick={this.loginClick}>Login</button>
                <button onClick={this.registerClick}>Register</button>


            </div>
        )
    } 

}


export default connect(null, {getUser})(Auth);