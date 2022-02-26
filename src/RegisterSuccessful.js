import React from 'react';
import { Link } from 'react-router-dom';

export default class RegisterSuccessful extends React.Component {

    render() {
        return <div style={{ textAlign: 'center' }}>
            <br /><br />
            <h2>Registration Successful</h2><br />
            <p>Thank you for your registration</p><br />
            <Link to="/">Click to return to home page</Link>
        </div>
    }
}