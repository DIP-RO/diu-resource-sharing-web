import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/departments/"
      );
      setDepartments(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <>
        <div
          className="intro-banner"
          data-background-image="images/home-background.jpg"
        >
          <div className="container">
            {/* <!-- Intro Headline --> */}
            <div className="row">
              <div className="col-md-12">
                <div className="banner-headline">
                  <h3>
                    <strong>
                      Search for any document that you&apos;re looking for.
                    </strong>
                    <br />
                    <span>
                      With more than thousands of resources{" "}
                      <strong className="color">Daffodil Document</strong>
                      can help you get the best preparation for your classNamees
                      and exams
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* <!-- Search Bar --> */}
            <div className="row">
              <div className="col-md-12">
                <div className="intro-banner-search-form margin-top-95">
                  {/* <!-- Search Field --> */}
                  <div className="intro-search-field with-autocomplete">
                    <label className="field-title ripple-effect">
                      What are you looking for?
                    </label>
                    <div className="input-with-icon">
                      <input
                        id="autocomplete-input"
                        type="text"
                        placeholder="Document Title"
                      />
                      <i className="icon-brand-searchengin"></i>
                    </div>
                  </div>

                  {/* <!-- Search Field --> */}
                  <div className="intro-search-field">
                    <label className="field-title ripple-effect">
                      What type of document
                    </label>
                    <select
                      className="selectpicker"
                      multiple
                      data-selected-text-format="count"
                      data-size="7"
                      title="All Categories"
                    >
                      <option>Books</option>
                      <option>PDF & Slides</option>
                      <option>Questions</option>
                      <option>Forum Discussion</option>
                      <option>Handnotes</option>
                    </select>
                  </div>

                  {/* <!-- Button --> */}
                  <div className="intro-search-button">
                    <button className="button ripple-effect">Search</button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Stats --> */}
            <div className="row">
              <div className="col-md-12">
                <ul className="intro-stats margin-top-45 hide-under-992px">
                  <li>
                    <strong className="counter">1,586</strong>
                    <span>Documents Posted</span>
                  </li>
                  <li>
                    <strong className="counter">3,543</strong>
                    <span>Discussions</span>
                  </li>
                  <li>
                    <strong className="counter">1,232</strong>
                    <span>Students</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Content
================================================== --> */}

        {/* <!-- Popular Categories --> */}

        {/* <!-- Popular Categories / End --> */}

        {/* <!-- Features Books --> */}
        <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                {/* <!-- Section Headline --> */}
                <div className="section-headline margin-top-0 margin-bottom-35">
                  <h3>Featured Books</h3>
                  <a href="#" className="headline-link">
                    Browse All Books
                  </a>
                </div>

                {/* <!-- Resource Container --> */}
                <div className="listings-container compact-list-layout margin-top-35">
                  {/* <!-- Resource Listing --> */}
                  <div className="resource-listing with-apply-button">
                    {/* <!-- Resource Listing Details --> */}
                    <div className="resource-listing-details">
                      {/* <!-- Logo --> */}
                      <div className="resource-listing-company-logo">
                        <img src="images/book.png" alt="" />
                      </div>

                      {/* <!-- Details --> */}
                      <div className="resource-listing-description">
                        <h3 className="resource-listing-title">
                          Engineering Mechanics: Statics and Dynamics
                        </h3>

                        {/* <!-- Resource Listing Footer --> */}
                        <div className="resource-listing-footer short">
                          <ul>
                            <li>
                              <i className="icon-feather-users"></i> James L.
                              Meriam and L. G. Kraige
                            </li>
                            <li>
                              <i className="icon-material-outline-local-offer"></i>{" "}
                              ME
                            </li>
                            <li>
                              <i className="icon-line-awesome-pencil"></i> 5th
                              Edition
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* <!-- Apply Button --> */}
                      <span className="list-apply-button ripple-effect">
                        Download Now
                      </span>
                    </div>
                  </div>

                  {/* <!-- Resource Listing --> */}
                  <div className="resource-listing with-apply-button">
                    {/* <!-- Resource Listing Details --> */}
                    <div className="resource-listing-details">
                      {/* <!-- Logo --> */}
                      <div className="resource-listing-company-logo">
                        <img src="images/book.png" alt="" />
                      </div>

                      {/* <!-- Details --> */}
                      <div className="resource-listing-description">
                        <h3 className="resource-listing-title">
                          Engineering Mathematics
                        </h3>

                        {/* <!-- Resource Listing Footer --> */}
                        <div className="resource-listing-footer short">
                          <ul>
                            <li>
                              <i className="icon-feather-users"></i> K. A.
                              Stroud and D. J. Booth
                            </li>
                            <li>
                              <i className="icon-material-outline-local-offer"></i>{" "}
                              CSE
                            </li>
                            <li>
                              <i className="icon-line-awesome-pencil"></i> 17th
                              Edition
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* <!-- Apply Button --> */}
                      <span className="list-apply-button ripple-effect">
                        Download Now
                      </span>
                    </div>
                  </div>

                  {/* <!-- Resource Listing --> */}
                  <div className="resource-listing with-apply-button">
                    {/* <!-- Resource Listing Details --> */}
                    <div className="resource-listing-details">
                      {/* <!-- Logo --> */}
                      <div className="resource-listing-company-logo">
                        <img src="images/book.png" alt="" />
                      </div>

                      {/* <!-- Details --> */}
                      <div className="resource-listing-description">
                        <h3 className="resource-listing-title">
                          Fundamentals of Electric Circuits
                        </h3>

                        {/* <!-- Resource Listing Footer --> */}
                        <div className="resource-listing-footer short">
                          <ul>
                            <li>
                              <i className="icon-feather-users"></i> Charles K.
                              Alexander and Matthew N. O. Sadiku
                            </li>
                            <li>
                              <i className="icon-material-outline-local-offer"></i>{" "}
                              EEE
                            </li>
                            <li>
                              <i className="icon-line-awesome-pencil"></i> 9th
                              Edition
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* <!-- Apply Button --> */}
                      <span className="list-apply-button ripple-effect">
                        Download Now
                      </span>
                    </div>
                  </div>

                  {/* <!-- Resource Listing --> */}
                  <div className="resource-listing with-apply-button">
                    {/* <!-- Resource Listing Details --> */}
                    <div className="resource-listing-details">
                      {/* <!-- Logo --> */}
                      <div className="resource-listing-company-logo">
                        <img src="images/book.png" alt="" />
                      </div>

                      {/* <!-- Details --> */}
                      <div className="resource-listing-description">
                        <h3 className="resource-listing-title">
                          Thermodynamics: An Engineering Approach
                        </h3>

                        {/* <!-- Resource Listing Footer --> */}
                        <div className="resource-listing-footer short">
                          <ul>
                            <li>
                              <i className="icon-feather-users"></i> Yunus A.
                              Çengel and Michael A. Boles
                            </li>
                            <li>
                              <i className="icon-material-outline-local-offer"></i>{" "}
                              CE
                            </li>
                            <li>
                              <i className="icon-line-awesome-pencil"></i> 4th
                              Edition
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* <!-- Apply Button --> */}
                      <span className="list-apply-button ripple-effect">
                        Download Now
                      </span>
                    </div>
                  </div>

                  {/* <!-- Resource Listing --> */}
                  <div className="resource-listing with-apply-button">
                    {/* <!-- Resource Listing Details --> */}
                    <div className="resource-listing-details">
                      {/* <!-- Logo --> */}
                      <div className="resource-listing-company-logo">
                        <img src="images/book.png" alt="" />
                      </div>

                      {/* <!-- Details --> */}
                      <div className="resource-listing-description">
                        <h3 className="resource-listing-title">
                          Engineering Design: A Project-Based Approach
                        </h3>

                        {/* <!-- Resource Listing Footer --> */}
                        <div className="resource-listing-footer short">
                          <ul>
                            <li>
                              <i className="icon-feather-users"></i> Carl L.
                              Bass and John W. Stempfle
                            </li>
                            <li>
                              <i className="icon-material-outline-local-offer"></i>{" "}
                              MSE
                            </li>
                            <li>
                              <i className="icon-line-awesome-pencil"></i> 7th
                              Edition
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* <!-- Apply Button --> */}
                      <span className="list-apply-button ripple-effect">
                        Download Now
                      </span>
                    </div>
                  </div>
                </div>
                {/* <!-- Resource Container / End --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Featured Jobs / End --> */}

        {/* <!-- Features Cities --> */}
        <div className="section margin-top-65 margin-bottom-65">
          <div className="container">
            <div className="row">
              {/* <!-- Section Headline --> */}
              <div className="col-xl-12">
                <div className="section-headline centered margin-top-0 margin-bottom-45">
                  <h3>Featured Departments</h3>
                </div>
              </div>
              {departments.map((department) => (
                <div key={department.id} className="col-xl-3 col-md-6">
                  <a href="#" className="photo-box">
                    <img src={department.img} />
                    <div className="photo-box-content">
                      <h3>{department.name}</h3>
                      <span>{department.contents_count} Contents</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
      </>
    </div>
  );
};

export default Home;
