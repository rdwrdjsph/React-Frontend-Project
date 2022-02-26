import React from 'react';
import Menu from './Menu';
import Message from './Message';

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    timestamp: "",
                    name: "",
                    content: ""
                }
            ]
        }
    }



    componentDidMount() {
        this.getData();
    }

    getData = () => {
        if (localStorage.getItem("messages")) {
            this.setState({ messages: JSON.parse(localStorage.getItem("messages")) });
        }
    }

    getName = () => {
        if (localStorage.getItem("activeUser")) {
            let user = JSON.parse(localStorage.getItem("activeUser"));
            return user.name;
        }
    }

    setTwoDigit = (number) => {
        if (number < 10) {
            return "0" + number.toString();
        }
        return number;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let date = new Date();
        const timestamp = date.getFullYear() + "-" + this.setTwoDigit(date.getMonth() + 1) + "-" + this.setTwoDigit(date.getDate()) + " " +
            this.setTwoDigit(date.getHours()) + ":" + this.setTwoDigit(date.getMinutes()) + ":" + this.setTwoDigit(date.getSeconds());
        const content = event.target.elements.content.value;

        const message = {
            timestamp: timestamp,
            name: this.getName(),
            content: content
        }

        if (content) {
            if (localStorage.getItem("messages")) {
                let messages = JSON.parse(localStorage.getItem("messages"));
                messages.push(message);
                localStorage.setItem("messages", JSON.stringify(messages));
                event.target.elements.content.value = "";
            }
        }

        window.location.reload();
    }

    refresh = () => {
        window.location.reload();
    }

    render() {
        return <div>
            <Menu />
            <div className="row gx-0 mt-5 rounded-1 p-1 bordered">
                <div className="col text-center">
                   <b>Group Chat</b> 
                </div>
            </div>
            <div className="row gx-0 bg-white rounded-1 p-1 bordered" style={{ marginTop: "-2px" }}>
                <div className="col">
                    <div className="mt-4 mb-4" style={{ height: "40vh" }}>
                        {this.state.messages.map((message, index) => (
                            <Message key={index} message={message} />
                        ))
                        }
                    </div>
                </div>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="row gx-0 bg-white rounded-1 p-2 bordered" style={{ marginTop: "-2px" }}>
                    <div className="col-md-2 text-end p-2">
                        <b>{this.getName()}</b>
                    </div>
                    <div className="col-md-8 text-center">
                        <input type="text" className="form-control bordered" name="content" />
                    </div>
                    <div className="col-md-2 text-start">
                        <button type="submit" className="btn bordered btn-width-2 ms-2 me-2" style={{border: 'solid 2px black', borderRadius: '8px', height: '40px' , width: '80px'}}><b>Send</b></button>
                        <button type="button" className="btn bordered btn-width-2" style={{border: 'solid 2px black', borderRadius: '8px', height: '40px', width: '90px'}} onClick={this.refresh}><b>Refresh</b></button>
                    </div>
                </div>
            </form>
        </div>
    }
}