import React from 'react';
import Menu from './Menu';

export default class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            email: ""
        }
    }

    getId = () => {
        return localStorage.getItem("editUserId");
    }

    getEmail = () => {
        if (localStorage.getItem("editUserId")) {
            let users = JSON.parse(localStorage.getItem("users"));
            for (let user of users) {
                if (user.id == this.getId()) {
                    return user.email;
                }
            }
        }
    }

    setUser = () => {
        if (localStorage.getItem("editUserId")) {
            let users = JSON.parse(localStorage.getItem("users"));
            for (let user of users) {
                if (user.id == this.getId()) {
                    this.setState(
                        {
                            fullname: user.name,
                            email: user.email
                        }
                    );
                }
            }
        }
    }

    componentDidMount() {
        this.setUser();
    }

    handleChange = (event) => {
        const element = event.target;
        this.setState({
            [element.name]: element.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const fullname = event.target.elements.fullname.value;
        const email = event.target.elements.email.value;

        if (fullname && email) {
            if (this.isInfoChange(fullname, email)) {
                if (this.isEmailExist(email)) {
                    alert("Email has been taken!");
                } else {
                    if (localStorage.getItem("users")) {
                        let users = JSON.parse(localStorage.getItem("users"));
                        for (let user of users) {
                            if (this.getId() == user.id) {
                                user.name = fullname;
                                user.email = email;
                            }
                        }
                        localStorage.setItem("users", JSON.stringify(users));

                        let activeUser = JSON.parse(localStorage.getItem("activeUser"));
                        activeUser.name = fullname;
                        activeUser.email = email;

                        localStorage.setItem("activeUser", JSON.stringify(activeUser));
                        this.props.onHistory.push("./UsersList");
                        localStorage.removeItem("editUserId");
                    }
                }
            } else {
                this.props.onHistory.push("./UsersList");
            }
        } else {
            alert("Fields should not be blank!")
        }
    }

    isEmailExist = (email) => {
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));
            for (let user of users) {
                if (email == this.getEmail()) {
                    continue;
                } else if (user.email == email) {
                    return true;
                }
            }
            return false;
        }
    }

    isInfoChange = (fullname, email) => {
        if (localStorage.getItem("activeUser")) {
            let activeUser = JSON.parse(localStorage.getItem("activeUser"));
            if (fullname == activeUser.name && email == activeUser.email) {
                return false;
            }
            return true;
        }
    }

    render() {
        return <div>
            <Menu />
            <div style={{ textAlign: 'center' }}>
                <br /><br />
                <form onSubmit={this.handleSubmit}>
                    <table style={{ border: '1px', marginLeft: '470px', marginRight: 'auto' }}>
                        <tr>
                            <td><br /></td>
                            <td>
                                <h4><b>Edit User Information</b></h4>
                            </td>
                        </tr>
                        <tr>
                            <td><br /></td>
                            <td><br /></td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'right' }}><b>Full Name:</b></td>
                            <td><input type="text" name="fullname" value={this.state.fullname} onChange={this.handleChange} size="20" style={{ height: '30px' }} /></td>
                        </tr>
                        <tr>
                            <td><br /></td>
                            <td><br /></td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'right' }}><b>Email:</b></td>
                            <td> <input type="email" name="email" value={this.state.email} onChange={this.handleChange} size="20" style={{ height: '30px' }} /></td>
                        </tr>
                        <tr>
                            <td><br /></td>
                            <td><br /></td>
                        </tr>
                        <tr>
                            <td><br /></td>
                            <td><button type="submit" style={{ backgroundColor: 'cyan' }}><b>Save</b></button></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    }
}