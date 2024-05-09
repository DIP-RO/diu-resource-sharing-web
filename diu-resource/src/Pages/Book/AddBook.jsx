import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
const AddBook = () => {
    const [bookData, setBookData] = useState({
        title: '',
        department: '',
        author: '',
        edition: '',
        subject: '',
        description: '',
        img: null,
    });

    const handleInputChange = (e, field) => {
        setBookData({
            ...bookData,
            [field]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setBookData({
            ...bookData,
            img: selectedFile,
        });
    };

    const handlePostBook = async () => {
        const apiUrl = 'http://127.0.0.1:8000/api/book-submission/';

        try {
            const formData = new FormData();
            formData.append('title', bookData.title);
            formData.append('department', bookData.department);
            formData.append('author', bookData.author);
            formData.append('edition', bookData.edition);
            formData.append('subject', bookData.subject);
            formData.append('description', bookData.description);
            formData.append('img', bookData.img);

            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Server Response:', response.data);
            // Add logic to handle the server response if needed
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.error('Error:', error);
            // Handle errors here
        }
    };
      
    return (
        <div>
            <div className="dashboard-content-container" data-simplebar>
                <div className="dashboard-content-inner" >
                    <div className="dashboard-headline">
                        <h3>Post a Book</h3>
                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li>Post a Book</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="dashboard-box margin-top-0">
                                <div className="headline">
                                    <h3><i className="icon-feather-folder-plus"></i> Book Submission Form</h3>
                                </div>
                                <div className="content with-padding padding-bottom-10">
                                    <div className="row">

                                        <div className="col-xl-8">
                                            <div className="submit-field">
                                                <h5>Book Title</h5>
                                                <input
                                                    type="text"
                                                    className="with-border"
                                                    placeholder="Book Title"
                                                    value={bookData.title}
                                                    onChange={(e) => handleInputChange(e, 'title')}
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
                                                            value={bookData.department}
                                                            onChange={(e) => handleInputChange(e, 'department')}
                                                        />
                                                        <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
                                                    </div>
                                                    <div className="keywords-list"></div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Author</h5>
                                                <div className="input-with-icon">
                                                    <input
                                                        className="with-border"
                                                        type="text"
                                                        placeholder="Book Authors"
                                                        value={bookData.author}
                                                        onChange={(e) => handleInputChange(e, 'author')}
                                                    />
                                                    <i className="icon-feather-users"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Edition</h5>
                                                <div className="input-with-icon">
                                                    <input
                                                        className="with-border"
                                                        type="text"
                                                        placeholder="Book Edition"
                                                        value={bookData.edition}
                                                        onChange={(e) => handleInputChange(e, 'edition')}
                                                    />
                                                    <i className="icon-line-awesome-pencil"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Subject</h5>
                                                <div className="input-with-icon">
                                                    <input
                                                        className="with-border"
                                                        type="text"
                                                        placeholder="Subject Code"
                                                        value={bookData.subject}
                                                        onChange={(e) => handleInputChange(e, 'subject')}
                                                    />
                                                    <i className="icon-material-outline-bookmark-border"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="submit-field">
                                                <h5>Book Description</h5>
                                                <textarea
                                                    cols="30"
                                                    rows="5"
                                                    className="with-border"
                                                    value={bookData.description}
                                                    onChange={(e) => handleInputChange(e, 'description')}
                                                ></textarea>
                                                <div className=" margin-top-30">
                                                    <input
                                                        className=""
                                                        type="file"
                                                        
                                                        id="upload"
                                                        onChange={handleFileChange}
                                                    />
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <a
                                href="#"
                                className="button ripple-effect big margin-top-30"
                                onClick={handlePostBook}
                            >
                                <i className="icon-feather-plus"></i> Post a Book
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;