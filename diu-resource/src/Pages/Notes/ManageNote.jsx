

const ManageNote = () => {
    return (
        <div>
            <div className="dashboard-content-container" data-simplebar>
                <div className="dashboard-content-inner">

                    <div className="dashboard-headline">
                        <h3>Manage Books</h3>

                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="dashboard.html">Dashboard</a>
                                </li>
                                <li>Books</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="row">

                        <div className="col-xl-12">

                            <div className="dashboard-box margin-top-0">

                                <div className="headline">
                                    <h3>
                                        <i className="icon-material-outline-note-add"></i> Bookmarked Handnotes
                                    </h3>
                                </div>
                                <div className="content">
                                    <ul className="dashboard-box-list">
                                        <li>


                                            <div className="resource-listing">


                                                <div className="resource-listing-details">

                                                    <div className="resource-listing-company-logo">
                                                        <img src="images/note.png" alt='' />
                                                    </div>


                                                    <div className="resource-listing-description">
                                                        <h3 className="resource-listing-title">classNamenotes for the Course EEE
                                                            2251</h3>
                                                        <p className="resource-listing-text">This slide covers a wide range
                                                            of essential topics in engineering, and they are all highly
                                                            regarded by engineering educators and professionals.</p>
                                                    </div>
                                                </div>


                                                <div className="resource-listing-footer">
                                                    <ul>
                                                        <li><i className="icon-material-outline-bookmark-border"></i> EEE
                                                            2251</li>
                                                        <li><i className="icon-material-outline-local-offer"></i> EEE</li>
                                                        <li><i className="icon-line-awesome-pencil"></i> Student Name</li>
                                                    </ul>

                                                    <a href="documents/sample_classNamenote.pdf"
                                                        download="sample_classNamenote.pdf" className="download-button">Download
                                                        Now <i className="icon-feather-download"></i></a>
                                                </div>
                                            </div>

                                            <div className="buttons-to-right">
                                                <a href="#" className="button red ripple-effect ico" title="Remove"
                                                    data-tippy-placement="left">
                                                    <i className="icon-feather-trash-2"></i>
                                                </a>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>




                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageNote;