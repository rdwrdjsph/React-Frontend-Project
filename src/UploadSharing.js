import React from 'react';
import Menu from './Menu';

export default class Share extends React.Component {

    getFileShare = () => {
        if (localStorage.getItem("fileShare")) {
            let fileShare = JSON.parse(localStorage.getItem("fileShare"));
            return fileShare.label;
        }
    }

    render() {
        return <div>
            <Menu />
            <div><br />
                <h4><b>Upload Sharing :</b> <span style={{ fontWeight: 'normal' }}>{this.getFileShare()}</span></h4>
            </div>

            <div>
                <table className="tableList">
                    <tr className="trList">
                        <th className="thList" style={{ textAlign: 'left' }}>Shared User</th>
                        <th className="thList">Action</th>
                    </tr>
                    <tr className="trList">
                        <td className="tdList" style={{ textAlign: 'left' }}>Anne Hunter</td>
                        <td className="tdList"><a href=" " className="text-decoration-none link-dark" data-bs-toggle="modal" data-bs-target="#deleteUserModal"> Remove</a></td>
                    </tr>
                    <tr className="trList">
                        <td className="tdList" style={{ textAlign: 'left' }}>User</td>
                        <td className="tdList"><a href=" " className="text-decoration-none link-dark" data-bs-toggle="modal" data-bs-target="#deleteUserModal"> Remove</a></td>
                    </tr>
                    <tr className="trList">
                        <td className="tdList"><br /></td>
                        <td className="tdList"><br /></td>
                    </tr>
                    <tr className="trList">
                        <td className="tdList"><br /></td>
                        <td className="tdList"><br /></td>
                    </tr>
                </table>
            </div>

            <div><br />
                <h4><b>Add Sharing</b></h4>
            </div>

            <div>
                <table className="tableList">
                    <tr>
                        <td className="tdList" style={{ paddingLeft: '95px', paddingRight: '205px', paddingTop: '10px', paddingBottom: '10px', textAlign: 'left' }}>
                            <b>Choose User:</b>&nbsp;&nbsp;&nbsp;
                            <select name="users"
                                style={{ height: '35px', width: '270px', textAlign: 'center', border: 'solid 2px black', borderRadius: '8px' }}>
                                <option value="J Bose">J Bose</option>
                                <option value="HR">HR</option>
                                <option value="Harsh Zaveri">Harsh Zaveri</option>
                            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button style={{ backgroundColor: '#CCCCCC' }}>Add Share</button>
                        </td>
                    </tr>
                </table>
            </div>

            <div className="modal fade" id="deleteUserModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h6 className="modal-title w-100 fw-bold" id="userModalLabel">Confirm User Deletion</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center p-4">
                                <p style={{ height: "50px", lineHeight: "50px", margin: "0" }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWJD3erWVhAdm6XJZaDN93ddDnI51mtq8sg&usqp=CAU"style={{ width: '30px', height: '30px' }} alt='This is icon' />&nbsp;&nbsp;<b>Are you sure?</b></p>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-sm btn-width-1"
                                    style={{ border: "2px solid black", margin: "0px 5px",borderRadius: "8px" }}>Okay</button>
                                <button type="button" className="btn btn-sm bordered btn-width-1"
                                    data-bs-dismiss="modal" style={{ margin: "0px 5px", borderRadius: "8px" }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}