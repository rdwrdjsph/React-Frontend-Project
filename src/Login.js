import React from 'react';

export default class Login extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;

        if (email && password) {
            if (this.isEmailExist(email)) {
                if (this.getUser(email).password === password) {
                    let user = {
                        id: this.getUser(email).id,
                        name: this.getUser(email).name,
                        email: email
                    };
                    localStorage.setItem("activeUser", JSON.stringify(user));
                    this.props.onHistory.push("./LoginSuccessful");
                } else {
                    alert("Incorrect Password!");
                }
            } else {
                alert("Email doesn't exist!")
            }
        } else {
            alert("Please input your credentials!");
        }
    }

    isEmailExist = (email) => {
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));
            for (let user of users) {
                if (user.email === email) {
                    return true;
                }
            }
            return false;
        }
    }

    getUser = (email) => {
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));
            for (let user of users) {
                if (user.email === email) {
                    return user
                }
            }
        }
    }

    render() {
        return <div style={{ textAlign: 'center' }}>
            <br /><br />
            <form onSubmit={this.handleSubmit}>
                <table style={{ border: '1px', marginLeft: '500px', marginRight: 'auto' }}>
                    <tr>
                        <td><br /></td>
                        <td>
                            <h3><b>Login</b></h3>
                        </td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right' }}><b>Email:</b>&nbsp;&nbsp;&nbsp;</td>
                        <td><input type="email" name="email" size="20" style={{ height: '30px' }} /></td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td><br /></td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right' }}><b>Password:</b>&nbsp;&nbsp;&nbsp;</td>
                        <td> <input type="password" name="password" size="20" style={{ height: '30px' }} /></td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td><br /></td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td><button type="submit" style={{ backgroundColor: 'cyan' }}><b>Login</b></button></td>
                    </tr>
                </table>
            </form>
        </div>
    }
}