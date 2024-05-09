import { useState } from "react";
import Swal from 'sweetalert2'

const AddNotes = () => {
    const [handnoteTitle, setHandnoteTitle] = useState('');
    const [department, setDepartment] = useState('');
    const [course, setCourse] = useState('');
    const [handnoteBy, setHandnoteBy] = useState('');
    const [handnoteDescription, setHandnoteDescription] = useState('');

    // Function to handle data submission
    const handlePostNotes = () => {
        // Prepare the data to be sent to the server
        const postData = {
          title: handnoteTitle,
          department: department,
          course: course,
          handnoteBy: handnoteBy,
          description: handnoteDescription,
        };
      
        // Make a POST request to the server
        fetch('http://localhost:5000/api/v1/notes/post-note', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        })
          .then((response) => response.json())
          .then((data) => {
            // Log the server response (optional)
            console.log('Server Response:', data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            // You can handle the response here if needed
            // For example, redirecting to another page or updating the UI
          })
          .catch((error) => {
            console.error('Error:', error);
            // Handle errors as needed
          });
      };
      
    return (
        <div>
            <div className="dashboard-content-container" data-simplebar>
                <div className="dashboard-content-inner" >


                    <div className="dashboard-headline">
                        <h3>Post a Handnote</h3>


                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li>Post a Handnote</li>
                            </ul>
                        </nav>
                    </div>


                    <div className="row">


                        <div className="col-xl-12">
                            <div className="dashboard-box margin-top-0">


                                <div className="headline">
                                    <h3><i className="icon-feather-folder-plus"></i> Handnote Submission Form</h3>
                                </div>

                                <div className="content with-padding padding-bottom-10">
                                    <div className="row">

                                        <div className="col-xl-8">
                                            <div className="submit-field">
                                                <h5>Handnote Title</h5>
                                                <input
                                                    type="text"
                                                    className="with-border"
                                                    value={handnoteTitle}
                                                    onChange={(e) => setHandnoteTitle(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Department <i className="help-icon" data-tippy-placement="right" title="e.g. CSE, EEE, etc."></i></h5>
                                                <div className="keywords-container">
                                                    <div className="keyword-input-container">
                                                        <input
                                                            type="text"
                                                            className="keyword-input with-border"
                                                            placeholder="CSE"
                                                            value={department}
                                                            onChange={(e) => setDepartment(e.target.value)}
                                                        />
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
                                                    <input
                                                        className="with-border"
                                                        type="text"
                                                        placeholder="Course Code"
                                                        value={course}
                                                        onChange={(e) => setCourse(e.target.value)}
                                                    />
                                                    <i className="icon-line-awesome-pencil"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-6">
                                            <div className="submit-field">
                                                <h5>Handnote by</h5>
                                                <div className="input-with-icon">
                                                    <input
                                                        className="with-border"
                                                        type="text"
                                                        placeholder="Student Name"
                                                        value={handnoteBy}
                                                        onChange={(e) => setHandnoteBy(e.target.value)}
                                                    />
                                                    <i className="icon-feather-user"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="submit-field">
                                                <h5>Handnote Description</h5>
                                                <textarea
                                                    cols="30"
                                                    rows="5"
                                                    className="with-border"
                                                    value={handnoteDescription}
                                                    onChange={(e) => setHandnoteDescription(e.target.value)}
                                                ></textarea>
                                                <div className="uploadButton margin-top-30">
                                                    <input type="file" accept="image/*, application/pdf" id="upload" multiple />

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            {/* Button to post notes */}
                            <button
                                onClick={handlePostNotes}
                                className="button ripple-effect big margin-top-30"
                            >
                                <i className="icon-feather-plus"></i> Post a Handnote
                            </button>
                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
};

export default AddNotes;