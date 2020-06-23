import React from 'react';
// import logo from './logo.svg';
import './App.css';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <label for="username">Username</label>
                    <input type="text" id="username"></input>
                    <br />
                    <label for="password">Password</label>
                    <input type="password" id="password"></input>
                </div>
            </header>
        </div>
    );
}

export default Login;
