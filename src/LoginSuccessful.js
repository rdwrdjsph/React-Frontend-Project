import React from 'react';
import Menu from './Menu';

export default class LoginSuccessful extends React.Component {
   
    getEmail = () => {
        if (localStorage.getItem("activeUser")) {
            let user = JSON.parse(localStorage.getItem("activeUser"));
            return user.email;
        }
    }

    render() {
        return <div>
            <Menu />
            <div style={{ textAlign: 'center' }}>
                <br /><br />
                <h3>Login Successful</h3><br />
                <p><b>Welcome!</b> {this.getEmail()}</p>
            </div>
        </div>       
    }
}