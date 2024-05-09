import { useState } from "react";
import Swal from 'sweetalert2'

const AddPdf = () => {
    const [pdfData, setPdfData] = useState({
        title: '',
        department: '',
        teacher: '',
        course: '',
        resourceType: 'PDF',
        description: '',
      });
    
      const handleInputChange = (e, field) => {
        setPdfData({
          ...pdfData,
          [field]: e.target.value,
        });
      };
    
      const handlePostPdfSlide = async () => {
        const apiUrl = 'http://localhost:5000/api/v1/pdfSlides/pdf-slides';
    
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(pdfData),
          });
    
          const data = await response.json();
          console.log('Server Response:', data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          // Add logic to handle the server response if needed
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
                        <h3>Post a PDF/Slide</h3>


                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="#">Dashboard</a></li>
                                <li>Post a PDF/Slide</li>
                            </ul>
                        </nav>
                    </div>


                    <div className="row">


                        <div className="col-xl-12">
                            <div className="dashboard-box margin-top-0">


                                <div className="headline">
                                    <h3><i className="icon-feather-folder-plus"></i> PDF/Slide Submission Form</h3>
                                </div>

                                <div className="content with-padding padding-bottom-10">
                                    <div className="row">

                                        <div className="col-xl-8">
                                            <div className="submit-field">
                                                <h5>PDF/Slide Title</h5>
                                                <input
                                                    type="text"
                                                    className="with-border"
                                                    placeholder="PDF/Slide Title"
                                                    value={pdfData.title}
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
                                                            value={pdfData.department}
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
                                                <h5>Teacher</h5>
                                                <div className="input-with-icon">
                                                    <input
                                                        className="with-border"
                                                        type="text"
                                                        placeholder="Teacher Name"
                                                        value={pdfData.teacher}
                                                        onChange={(e) => handleInputChange(e, 'teacher')}
                                                    />
                                                    <i className="icon-feather-user"></i>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Course</h5>
                                                <div className="input-with-icon">
                                                    <input
                                                        className="with-border"
                                                        type="text"
                                                        placeholder="Course Code"
                                                        value={pdfData.course}
                                                        onChange={(e) => handleInputChange(e, 'course')}
                                                    />
                                                    <i className="icon-line-awesome-pencil"></i>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Resource Type</h5>
                                                <select
                                                    className=""
                                                    data-size="2"
                                                    title="Select Resource Type"
                                                    value={pdfData.resourceType}
                                                    onChange={(e) => handleInputChange(e, 'resourceType')}
                                                >
                                                    <option>PDF</option>
                                                    <option>Slides</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="uploadButton margin-top-30">
                                            <input
                                                className=""
                                                type="file"
                                                accept="image/*, application/pdf"
                                                id="upload"
                                                multiple
                                                
                                            />

                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12">
                            <a
                                href="#"
                                className="button ripple-effect big margin-top-30"
                                onClick={handlePostPdfSlide}
                            >
                                <i className="icon-feather-plus"></i> Post a PDF/Slide
                            </a>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddPdf;