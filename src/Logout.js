import React from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends React.Component {

    render() {
        return <div style={{ textAlign: 'center' }}>
            <br /><br />
            <h2>Welcome to Users Module</h2>
            <br />
            <p><b>Existing Users</b></p>
            <br />
            <button><Link to="/Login">Login</Link></button>
            <br /><br />
            <p><b>New Users</b></p>
            <br />
            <button><Link to="/Register">Register</Link></button>
            <br /><br />
            <p><b>You have been logged out</b></p>
        </div>
    }
}