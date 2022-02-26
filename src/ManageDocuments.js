import React from 'react';
import Menu from './Menu';
import Upload from './Upload';
import SharedUpload from './SharedUpload';

export default class DocumentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploads: [
                {
                    label: "",
                    fileName: ""
                }
            ],
            sharedUploads: [
                {
                    label: "",
                    fileName: "",
                    sharedBy: ""
                }
            ]
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        if (localStorage.getItem("uploads")) {
            this.setState({ uploads: JSON.parse(localStorage.getItem("uploads")) });
        }

        if (localStorage.getItem("sharedUploads")) {
            this.setState({ sharedUploads: JSON.parse(localStorage.getItem("sharedUploads")) });
        }
    }

    chooseFile = () => {
        let file = prompt("Input file name:");
        if (file) {
            document.getElementById("file").innerText = file;
            document.getElementById("fileName").value = file;
        }
    }

    setId = () => {
        if (localStorage.getItem("uploads")) {
            let users = JSON.parse(localStorage.getItem("uploads"));
            if (users.length > 0) {
                return users[users.length - 1].id + 1;
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const label = event.target.elements.label.value;
        const fileName = event.target.elements.fileName.value;

        const upload = {
            id: this.setId(),
            label: label,
            fileName: fileName
        }

        if (label && fileName) {
            if (localStorage.getItem("uploads")) {
                let uploads = JSON.parse(localStorage.getItem("uploads"));
                uploads.push(upload);
                localStorage.setItem("uploads", JSON.stringify(uploads));
                window.location.reload();
            }
        } else if (label && !fileName) {
            alert("Please choose a file!");
        } else if (!label && fileName) {
            alert("Please enter the description!");
        } else {
            alert("Enter the description and choose a file!");
        }
    }

    addUpload = () => {
        document.getElementById("label").value = "";
        document.getElementById("fileName").value = "";
        document.getElementById("file").innerText = "[File]";
    }

    render() {
        return <div>
            <Menu />
            <br />
            <h3>My Uploads</h3>
            <div>
                <table className='tableList'>
                    <thead>
                        <tr className='trList'>
                            <th className='thList' style={{ textAlign: 'left' }}>Label</th>
                            <th className='thList'>File Name</th>
                            <th className='thList'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.uploads.map((upload, index) => (
                            <Upload key={index} upload={upload} />
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <br />
            <h3>Shared Uploads</h3>
            <div>
                <table className='tableList'>
                    <thead>
                        <tr className='trList'>
                            <th className='thList' style={{ textAlign: 'left' }}>Label</th>
                            <th className='thList'>File Name</th>
                            <th className='thList'>Shared By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.sharedUploads.map((sharedUpload, index) => (
                            <SharedUpload key={index} sharedUpload={sharedUpload} />
                        ))
                        }
                    </tbody>
                </table>
            </div>
            
            <br />
            <div style={{ textAlign: 'left' }}>
                <button type="button" data-bs-toggle="modal" data-bs-target="#addUploadModal" border-radius="1px" style={{ width: '120px', backgroundColor: '#CCCCCC'}} onClick={this.addUpload}>+ Add Upload</button>
            </div>

            <div className="modal fade" id="addUploadModal" tabIndex="-1" aria-labelledby="addUploadModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h6 className="modal-title w-100 fw-bold" id="addUploadModalLabel"><b>Upload</b></h6>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4 text-center">
                                            <b style={{ lineHeight: "35px" }}>File Description</b>
                                        </div>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control bordered" id="label" name="label" />
                                            <input type="hidden" id="fileName" name="fileName" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4 text-center">
                                            <b style={{ lineHeight: "35px" }}>File Upload</b>
                                        </div>
                                        <div className="col-sm-4">
                                            <button type="button" className="btn bg-gray btn-sm bordered"
                                                style={{ borderRadius: "10px" , backgroundColor: '#CCCCCC' }} onClick={this.chooseFile}><b>Choose File</b></button>
                                        </div>
                                        <div className="col-sm-4">
                                            <b style={{ lineHeight: "35px" }} id="file">[File]</b>
                                        </div>
                                    </div>
                                    <div className="row text-start">
                                        <div className="col-sm-4  text-center">
                                            <button type="submit"
                                                className="btn bg-gray btn-sm bordered btn-width-2" style={{ width: "80%", backgroundColor: "#CCCCCC", borderRadius: "10px" }}><b>Upload Now</b></button>
                                        </div>
                                        <div className="col-sm-4">
                                            <button type="button" className="btn bg-gray btn-sm bordered btn-width-2"
                                                data-bs-dismiss="modal" style={{ width: "70%", backgroundColor: '#CCCCCC',borderRadius: "10px" }}><b>Cancel</b></button>
                                        </div>
                                        <div className="col-sm-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}