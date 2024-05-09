

const AddDiscussion = () => {
    return (
        <div>
            <div className="dashboard-content-container" data-simplebar>
                <div className="dashboard-content-inner" >


                    <div className="dashboard-headline">
                        <h3>Post a Discussion</h3>


                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li>Post a Discussion</li>
                            </ul>
                        </nav>
                    </div>


                    <div className="row">


                        <div className="col-xl-12">
                            <div className="dashboard-box margin-top-0">


                                <div className="headline">
                                    <h3><i className="icon-feather-folder-plus"></i> Discussion Submission Form</h3>
                                </div>

                                <div className="content with-padding padding-bottom-10">
                                    <div className="row">

                                        <div className="col-xl-12">
                                            <div className="submit-field">
                                                <h5>Discussion Title</h5>
                                                <input type="text" className="with-border" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="submit-field">
                                                <h5>Department <i className="help-icon" data-tippy-placement="right" title="e.g. CSE, EEE, etc."></i></h5>
                                                <div className="keywords-container">
                                                    <div className="keyword-input-container">
                                                        <input type="text" className="keyword-input with-border" placeholder="CSE" />
                                                        <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
                                                    </div>
                                                    <div className="keywords-list"></div>
                                                    <div className="clearfix"></div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-xl-6">
                                            <div className="submit-field">
                                                <h5>Course</h5>
                                                <div className="input-with-icon">
                                                    <input className="with-border" type="text" placeholder="Course Code" />
                                                    <i className="icon-line-awesome-pencil"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="submit-field">
                                                <h5>Discussion Description</h5>
                                                <textarea cols="30" rows="5" className="with-border"></textarea>
                                                <div className="uploadButton margin-top-30">
                                                    <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                                                    <label className="uploadButton-button ripple-effect" >Upload Files</label>
                                                    <span className="uploadButton-file-name">Attach the File</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            <a href="#" className="button ripple-effect big margin-top-30"><i className="icon-feather-plus"></i> Post a Discussion</a>
                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
};

export default AddDiscussion;