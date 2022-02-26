import React from 'react';

export default class Register extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const fullName = event.target.elements.fullName.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const confirmPassword = event.target.elements.confirmPassword.value;

        const user = {
            id: this.setId(),
            name: fullName,
            email: email,
            password: password
        }

        if (fullName && email && password && confirmPassword) {
            if (this.isEmailExist(email)) {
                alert("Email already registered!");
            } else {
                if (password === confirmPassword) {
                    this.props.onAddUser(user);
                    this.props.onHistory.push("./RegisterSuccessful");
                } else {
                    alert("Password should be match!");
                }
            }
        } else {
            alert("Please fill out the form!");
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

    setId = () => {
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));
            if (users.length > 0) {
                return users[users.length - 1].id + 1;
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    }

    render() {
        return <div>
            <br />
            <form onSubmit={this.handleSubmit}>
                <table style={{ border: '1px', marginLeft: '450px', marginRight: 'auto' }}>
                    <tr>
                        <td><br /></td>
                        <td style={{ textAlign: 'center' }}>
                            <h3><b>Register</b></h3>
                        </td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right' }}><b>Full Name:</b>&nbsp;&nbsp;&nbsp;</td>
                        <td><input type="text" name="fullName" size="20" style={{ height: '30px' }} /></td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td><br /></td>
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
                        <td style={{ textAlign: 'right' }}><b>Confirm Password:</b>&nbsp;&nbsp;&nbsp;</td>
                        <td> <input type="password" name="confirmPassword" size="20" style={{ height: '30px' }} /></td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td><br /></td>
                    </tr>
                    <tr>
                        <td><br /></td>
                        <td style={{ textAlign: 'center' }}><button type='Submit' style={{ backgroundColor: 'cyan' }}><b>Register</b></button></td>
                    </tr>
                </table>
            </form>
        </div>
    }
}