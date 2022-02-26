import React from "react";
import { Link } from 'react-router-dom';

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: ""
        }
    }

    setUpload = () => {
        if (localStorage.getItem("uploads")) {
            let uploads = JSON.parse(localStorage.getItem("uploads"));
            for (let upload of uploads) {
                if (upload.id == this.props.upload.id) {
                    this.setState(
                        {
                            label: upload.label
                        }
                    );
                }
            }
        }

    }

    componentDidMount() {
        this.setUpload();
    }

    handleChange = (event) => {
        const element = event.target;
        this.setState(
            {
                [element.name]: element.value
            }
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const label = event.target.elements.label.value;

        if (label) {
            if (label == this.props.upload.label) {
                this.closeModal();
            } else {
                let uploads = JSON.parse(localStorage.getItem("uploads"));
                for (let upload of uploads) {
                    if (upload.id == this.props.upload.id) {
                        upload.label = label;
                    }
                }
                localStorage.setItem("uploads", JSON.stringify(uploads));
                this.closeModal();
                window.location.reload();
            }
        } else {
            alert("Description must not be empty!");
        }
    }

    closeModal = () => {
        for (let modal of document.getElementsByClassName("btn-close")) {
            modal.click();
        }
    }

    deleteUpload = () => {
        if (localStorage.getItem("uploads")) {
            let uploads = JSON.parse(localStorage.getItem("uploads"));
            const newUploads = uploads.filter((el) => {
                return el.id !== this.props.upload.id;
            });
            localStorage.setItem("uploads", JSON.stringify(newUploads));
            window.location.href = "./ManageDocuments";
        }
    }

    shareUpload = () => {
        let fileShare = {
            id: this.props.upload.id,
            label: this.props.upload.label,
            fileName: this.props.upload.fileName
        }
        localStorage.setItem("fileShare", JSON.stringify(fileShare));
    }

    render() {
        return <tr className='trList'>
            <td className='tdList' style={{ textAlign: 'left' }}>{this.props.upload.label}</td>
            <td className='tdList'>{this.props.upload.fileName}</td>
            <td className='tdList'>
                <a href=" " className="text-decoration-none link-dark" data-bs-toggle="modal"
                    data-bs-target={"#editUploadModal" + this.props.upload.id} onClick={this.setUpload}>Edit</a>
                <div className="modal fade" id={"editUploadModal" + this.props.upload.id} tabIndex="-1" aria-labelledby={"uploadEditModalLabel" + this.props.upload.id} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-md">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h6 className="modal-title w-100 fw-bold" id={"uploadEditModalLabel" + this.props.upload.id}><b>Edit</b></h6>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="text-center p-4">
                                        <div className="row mb-3">
                                            <div className="col-sm-4">
                                                <b style={{ lineHeight: "35px" }}>File Description</b>
                                            </div>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control bordered" name="label" value={this.state.label} onChange={this.handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <button type="submit" className="btn bg-gray btn-sm bordered btn-width-2" style={{ margin: "0px 10px", width: "25%", borderRadius: "8px", backgroundColor: '#CCCCCC' }}><b>Save</b></button>
                                        <button type="button" className="btn bg-gray btn-sm bordered btn-width-2" style={{ margin: "0px 10px", width: "25%", borderRadius: "8px", backgroundColor: '#CCCCCC' }}
                                            data-bs-dismiss="modal"><b>Cancel</b></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> |
                <a href=" " className="text-decoration-none link-dark" data-bs-toggle="modal"
                    data-bs-target={"#deleteUploadModal" + this.props.upload.id}> Delete</a>
                <div className="modal fade" id={"deleteUploadModal" + this.props.upload.id} tabIndex="-1" aria-labelledby={"uploadModalLabel" + this.props.upload.id} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-sm">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h6 className="modal-title w-100 fw-bold" id={"uploadModalLabel" + this.props.upload.id}>Confirm Upload Deletion</h6>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center p-4">
                                    <p style={{ height: "50px", lineHeight: "50px", margin: "0" }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWJD3erWVhAdm6XJZaDN93ddDnI51mtq8sg&usqp=CAU" style={{ width: '30px', height: '30px' }} alt='This is icon' />&nbsp;&nbsp;<b>Are you sure?</b></p>
                                </div>
                                <div className="text-center">
                                    <button type="button" className="btn btn-sm btn-width-1"
                                        style={{ border: "2px solid black", margin: "0px 5px", borderRadius: "8px" }} onClick={this.deleteUpload}>Okay</button>
                                    <button type="button" className="btn btn-sm bordered btn-width-1"
                                        data-bs-dismiss="modal" style={{ margin: "0px 5px", borderRadius: "8px" }}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> |
                <Link to="/UploadSharing" className="text-decoration-none link-dark" onClick={this.shareUpload}> Share</Link>
            </td>
        </tr>
    }
}