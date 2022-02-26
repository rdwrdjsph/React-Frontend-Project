import React from 'react';
import { Link } from 'react-router-dom';

export default class User extends React.Component {

    deleteUser = () => {
        if (localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));
            const newUsers = users.filter((el) => {
                return el.id !== this.props.user.id;
            });
            localStorage.setItem("users", JSON.stringify(newUsers));
            if (JSON.parse(localStorage.getItem("activeUser")).id == this.props.user.id) {
                localStorage.setItem("logout", true);
                localStorage.removeItem("activeUser");
                window.location.href = "./";
            } else {
                for (let modal of document.getElementsByClassName("btn-close")) {
                    modal.click();
                }
                window.location.reload();
            }
        }
    };

    editUserId = () => {
        localStorage.setItem("editUserId", this.props.user.id);
    }

    hideDelete = () => {
        if((JSON.parse(localStorage.getItem("activeUser")).id == this.props.user.id)) {
                const myStyle = {
                display: 'none'         
                }
        }
    }

    render() {
        return <tr className='trList'>
            <td className='tdList' style={{ textAlign: 'left' }}>{this.props.user.name}</td>
            <td className='tdList'>{this.props.user.email}</td>
            <td className='tdList'>
                <Link to="/UserEdit" className="text-decoration-none link-dark" onClick={this.editUserId}>Edit</Link> |
                <a href=" " className="text-decoration-none link-dark" data-bs-toggle="modal"
                    data-bs-target={"#deleteUserModal" + this.props.user.id}> Delete</a>
                <div className="modal fade" id={"deleteUserModal" + this.props.user.id} tabIndex="-1" aria-labelledby={"userModalLabel" + this.props.user.id} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-sm">
                        <div className="modal-content">
                            <div className="modal-header text-center" >
                                <h6 className="modal-title w-100 fw-bold" id={"userModalLabel" + this.props.user.id}>Confirm User Deletion</h6>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center p-4">
                                    <p style={{ height: "50px", lineHeight: "50px", margin: "0" }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWJD3erWVhAdm6XJZaDN93ddDnI51mtq8sg&usqp=CAU" style={{ width: '30px', height: '30px' }} alt='This is icon' />&nbsp;&nbsp;<b>Are you sure?</b></p>
                                </div>
                                <div className="text-center">
                                    <button type="button" className="btn btn-sm btn-width-1"
                                        style={{ border: "2px solid black", margin: "0px 5px", borderRadius: "8px" }} onClick={this.deleteUser}>Okay</button>
                                    <button type="button" className="btn btn-sm bordered btn-width-1"
                                        data-bs-dismiss="modal" style={{ margin: "0px 5px", borderRadius: "8px" }}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    }
}