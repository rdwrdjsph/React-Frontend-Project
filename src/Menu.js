import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {

    logoutUser = () => {
            localStorage.removeItem("activeUser");
    }

    render() {
        return (
            <ul>
            <li><Link to="/Chat">Group Chat</Link></li>
            <li><Link to="/UsersList">Manage Users</Link></li>
            <li><Link to="/ManageDocuments">Manage Documents</Link></li>
            <li><Link to="/Logout" onClick={this.logoutUser}>Logout</Link></li>
        </ul>
        )
    }
}