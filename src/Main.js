import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/style.css';
import Welcome from './Welcome';
import Register from './Register';
import RegisterSuccessful from './RegisterSuccessful';
import Login from './Login';
import LoginSuccessful from './LoginSuccessful';
import Chat from './Chat';
import UsersList from './UsersList';
import UserEdit from './UserEdit';
import ManageDocuments from './ManageDocuments'
import UploadSharing from './UploadSharing';
import Logout from './Logout';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.setData();
    }

    setData = () => {
        if (!localStorage.getItem("users")) {
            let users = [
                {
                    id: 1,
                    name: "Text User",
                    email: "textuser@gmail.com",
                    password: "123456"
                },
                {
                    id: 2,
                    name: "Anne Hunter",
                    email: "anne.hunter@mail.com",
                    password: "123456"
                },
                {
                    id: 3,
                    name: "Jale Boser",
                    email: "jale@yahoo.com",
                    password: "123456"
                }
            ]

            localStorage.setItem("users", JSON.stringify(users));
        }

        if (!localStorage.getItem("messages")) {
            let messages = [
                {
                    timestamp: "2013-01-27 01:00:16",
                    name: "Text User",
                    content: "Lorem ipsum dolor sit amet"
                },
                {
                    timestamp: "2013-01-27 01:05:22",
                    name: "Text User",
                    content: "consetetur sadipscing elitr, sed diam nonumy eirmod"
                },
                {
                    timestamp: "2013-01-27 01:11:14",
                    name: "Anne Hunter",
                    content: "tempor invidunt ut labore et dolore magna"
                },
                {
                    timestamp: "2013-01-27 02:11:35",
                    name: "Jack Washk",
                    content: "aliquyam erat, sed diam voluptua. At vero eos et"
                }
            ]

            localStorage.setItem("messages", JSON.stringify(messages));
        }

        if (!localStorage.getItem("uploads")) {
            let uploads = [
                {
                    id: 1,
                    label: "Sales Report",
                    fileName: "Sales-Sept2014.xls"
                },
                {
                    id: 2,
                    label: "Quarterly Summary",
                    fileName: "SummaryQ4-2014.ppt"
                },
                {
                    id: 3,
                    label: "Projection 2013-2014",
                    fileName: "SalesProfitProjection.xls"
                }
            ]

            localStorage.setItem("uploads", JSON.stringify(uploads));
        }

        if (!localStorage.getItem("sharedUploads")) {
            let sharedUploads = [
                {
                    label: "Sales Team Attendance Sept 2014",
                    fileName: "Sales-Attend-Sept2014.xls",
                    sharedBy: "anne.hunter@mail.com"
                },
                {
                    label: "Office Rules",
                    fileName: "OfficeRule.doc",
                    sharedBy: "hr@office.com"
                }
            ]

            localStorage.setItem("sharedUploads", JSON.stringify(sharedUploads));
        }

        if (!localStorage.getItem("sharedUsers")) {
            let sharedUsers = [
                {
                    id: 1,
                    name: "Anne Hunter"
                },
                {
                    id: 2,
                    name: "Text User"
                }
            ]

            localStorage.setItem("sharedUsers", JSON.stringify(sharedUsers));
        }
    }

    addUser = (user) => {
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
        }
    }

    sendMessage = (message) => {
        if (localStorage.getItem("messages")) {
            let messages = JSON.parse(localStorage.getItem("messages"));
            messages.push(message);
            localStorage.setItem("messages", JSON.stringify(messages));
        }
    }

    render() {
        return <div>
            <Route exact path="/" render={({ history }) => <Welcome onHistory={history} />} />
            <Route exact path="/Register" render={({ history }) => <Register onAddUser={(addUser) => this.addUser(addUser)} onHistory={history} />} />
            <Route exact path="/RegisterSuccessful" render={({ history }) => <RegisterSuccessful onHistory={history} />} />
            <Route exact path="/Login" render={({ history }) => <Login onHistory={history} />} />
            <Route exact path="/LoginSuccessful" render={({ history }) => <LoginSuccessful onHistory={history} />} />
            <Route exact path="/Chat" render={({ history }) => <Chat onSendMessage={(sendMessage) => this.sendMessage(sendMessage)} onHistory={history} />} />
            <Route exact path="/UsersList" render={({ history }) => <UsersList onHistory={history} />} />
            <Route exact path="/UserEdit" render={({ history }) => <UserEdit onHistory={history} />} />
            <Route exact path="/ManageDocuments" render={({ history }) => <ManageDocuments onHistory={history} />} />
            <Route exact path="/UploadSharing" render={({ history }) => <UploadSharing onHistory={history} />} />
            <Route exact path="/Logout" render={({ history }) => <Logout onHistory={history} />} />
        </div>
    }
}