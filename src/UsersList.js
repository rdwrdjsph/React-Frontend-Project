import React from 'react';
import Menu from './Menu';
import User from './User';

export default class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: "",
                    name: "",
                    email: ""
                }
            ]
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        if (localStorage.getItem("users")) {
            this.setState({ users: JSON.parse(localStorage.getItem("users")) });
        }
    }

    render() {
        return <div>
            <Menu />
            <br />
            <h3>Users</h3>
            <div>
                <table className='tableList'>
                    <thead>
                        <tr className='trList'>
                            <th className='thList' style={{ textAlign: 'left' }}>Name</th>
                            <th className='thList'>User Email ID</th>
                            <th className='thList'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, index) => (
                            <User key={index} user={user} />
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }
}