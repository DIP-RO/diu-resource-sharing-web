import { useState } from "react";
import Swal from 'sweetalert2'
const AddQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('');
    const [department, setDepartment] = useState('');
    const [course, setCourse] = useState('');
    const [series, setSeries] = useState('');
    const [questionDescription, setQuestionDescription] = useState('');

    // Function to log data when the button is clicked
    const handlePostQuestion = () => {
        const postData = {
            questionTitle,
            department,
            course,
            series,
            questionDescription,
        };
    
        // Assuming your backend server is running on http://localhost:3000
        fetch('http://localhost:5000/api/v1/question/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            console.log('Question posted successfully:', data.question);
            // You can add additional logic here based on the server response
        })
        .catch(error => {
            console.error('Error posting question:', error.message);
        });
    };
    
    return (
        <div>
            <div className="dashboard-content-container" data-simplebar>
                <div className="dashboard-content-inner" >


                    <div className="dashboard-headline">
                        <h3>Post a Question</h3>


                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li>Post a Question</li>
                            </ul>
                        </nav>
                    </div>


                    <div className="row">


                        <div className="col-xl-12">
                            <div className="dashboard-box margin-top-0">


                                <div className="headline">
                                    <h3><i className="icon-feather-folder-plus"></i> Question Submission Form</h3>
                                </div>

                                <div className="content with-padding padding-bottom-10">
                                    <div className="row">

                                        <div className="col-xl-8">
                                            <div className="submit-field">
                                                <h5>Question Title</h5>
                                                <input
                                                    type="text"
                                                    className="with-border"
                                                    value={questionTitle}
                                                    onChange={(e) => setQuestionTitle(e.target.value)}
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
                                                <h5>Series</h5>
                                                <div className="input-with-icon">
                                                    <input
                                                        className="with-border"
                                                        type="text"
                                                        placeholder="Series"
                                                        value={series}
                                                        onChange={(e) => setSeries(e.target.value)}
                                                    />
                                                    <i className="icon-feather-calendar"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="submit-field">
                                                <h5>Question Description</h5>
                                                <textarea
                                                    cols="30"
                                                    rows="5"
                                                    className="with-border"
                                                    value={questionDescription}
                                                    onChange={(e) => setQuestionDescription(e.target.value)}
                                                ></textarea>
                                                <div className="uploadButton margin-top-30">
                                                    <input className="" type="file" accept="image/*, application/pdf" id="upload" multiple />

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            {/* Button to post a question */}
                            <button onClick={handlePostQuestion} className="button ripple-effect big margin-top-30">
                                <i className="icon-feather-plus"></i> Post a Question
                            </button>
                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
};

export default AddQuestion;