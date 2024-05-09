

const SearchDiscussion = () => {
    return (
        <div>
            <div id="titlebar" className="gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <h2>Browse Discussion</h2>


                            <nav id="breadcrumbs" className="dark">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="resources-discussion-all.html">Discussion</a></li>
                                    <li>Find Discussion</li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="sidebar-container">


                                <div className="sidebar-widget">
                                    <h3>Title</h3>
                                    <div className="input-with-icon">
                                        <div id="autocomplete-container">
                                            <input id="autocomplete-input" type="text" placeholder="Title" />
                                        </div>
                                        <i className="icon-material-outline-bookmark-border"></i>
                                    </div>
                                </div>


                                <div className="sidebar-widget">
                                    <h3>Departmetns</h3>
                                    <div className="keywords-container">
                                        <div className="keyword-input-container">
                                            <input type="text" className="keyword-input" placeholder="e.g. CSE" />
                                            <button className="keyword-input-button ripple-effect"><i
                                                className="icon-material-outline-add"></i></button>
                                        </div>
                                        <div className="keywords-list"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>


                                <div className="sidebar-widget">
                                    <h3>Document Type</h3>

                                    <div className="switches-list">
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span
                                                className="switch-button"></span>Books</label>
                                        </div>

                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span
                                                className="switch-button"></span>PDF & Slides</label>
                                        </div>

                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span
                                                className="switch-button"></span>Questions</label>
                                        </div>

                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" checked /><span
                                                className="switch-button"></span>Forum Discussion</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span
                                                className="switch-button"></span>Handnotes</label>
                                        </div>
                                    </div>

                                </div>


                                <div className="sidebar-widget">
                                    <h3>Popular Tags</h3>

                                    <div className="tags-container">
                                        <div className="tag">
                                            <input type="checkbox" id="tag1" />
                                            <label >mathematics</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag2" />
                                            <label >thermodynamics</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag3" />
                                            <label >coding</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag4" />
                                            <label >velocity</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag5" />
                                            <label >mechanics</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag6" />
                                            <label >networking</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag7" />
                                            <label >electronics</label>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 content-left-offset">


                            <div className="section-headline margin-bottom-35">
                                <h4>Recent Discussion</h4>
                            </div>


                            <a href="resources-question-details.html" className="resource-post resource-listing">

                                <div className="resource-post-content">
                                    <span className="resource-post-date">22 July 2023</span>
                                    <h3>What is the purpose of a heat exchanger in a thermal power plant,
                                        and how does it work?</h3>
                                    <p>Efficiently myocardinate market-driven innovation via open-source
                                        alignments. Dramatically engage high-payoff infomediaries rather than.
                                    </p>
                                </div>

                                <div className="resource-post-details">
                                    <ul>
                                        <li><i className="icon-material-outline-bookmark-border"></i> ME 2109</li>
                                        <li><i className="icon-material-outline-local-offer"></i> ME</li>
                                        <li><i className="icon-line-awesome-pencil"></i> Student Name</li>
                                    </ul>
                                </div>

                                <span className="bookmark-icon"></span>
                            </a>


                            <a href="resources-question-details.html" className="resource-post resource-listing">

                                <div className="resource-post-content">
                                    <span className="resource-post-date">29 June 2023</span>
                                    <h3>Explain the difference between stress and strain in materials
                                        engineering. How are these properties measured and calculated?</h3>
                                    <p>Efficiently myocardinate market-driven innovation via open-source
                                        alignments. Dramatically engage high-payoff infomediaries rather than.
                                    </p>
                                </div>

                                <div className="resource-post-details">
                                    <ul>
                                        <li><i className="icon-material-outline-bookmark-border"></i> MSE 3105</li>
                                        <li><i className="icon-material-outline-local-offer"></i> MSE</li>
                                        <li><i className="icon-line-awesome-pencil"></i> Student Name</li>
                                    </ul>
                                </div>

                                <span className="bookmark-icon"></span>
                            </a>


                            <a href="resources-question-details.html" className="resource-post resource-listing">

                                <div className="resource-post-content">
                                    <span className="resource-post-date">10 June 2023</span>
                                    <h3>What is the significance of the Reynolds number in fluid mechanics,
                                        and how is it calculated? Provide an example of a high and low
                                        Reynolds number flow.</h3>
                                    <p>Efficiently myocardinate market-driven innovation via open-source
                                        alignments. Dramatically engage high-payoff infomediaries rather than.
                                    </p>
                                </div>

                                <div className="resource-post-details">
                                    <ul>
                                        <li><i className="icon-material-outline-bookmark-border"></i> MTE 2151</li>
                                        <li><i className="icon-material-outline-local-offer"></i> MTE</li>
                                        <li><i className="icon-line-awesome-pencil"></i> Student Name</li>
                                    </ul>
                                </div>

                                <span className="bookmark-icon"></span>
                            </a>


                            <a href="resources-question-details.html" className="resource-post resource-listing">

                                <div className="resource-post-content">
                                    <span className="resource-post-date">5 June 2023</span>
                                    <h3>Describe the basic principles of electrical circuits and explain
                                        Ohm law. How is it applied to calculate voltage, current, and
                                        resistance in a circuit?</h3>
                                    <p>Efficiently myocardinate market-driven innovation via open-source
                                        alignments. Dramatically engage high-payoff infomediaries rather than.
                                    </p>
                                </div>

                                <div className="resource-post-details">
                                    <ul>
                                        <li><i className="icon-material-outline-bookmark-border"></i> EEE 3113</li>
                                        <li><i className="icon-material-outline-local-offer"></i> EEE</li>
                                        <li><i className="icon-line-awesome-pencil"></i> Student Name</li>
                                    </ul>
                                </div>

                                <span className="bookmark-icon"></span>
                            </a>


                            <div className="clearfix"></div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="pagination-container margin-top-10 margin-bottom-20">
                                        <nav className="pagination">
                                            <ul>
                                                <li><a href="#" className="current-page ripple-effect">1</a></li>
                                                <li><a href="#" className="ripple-effect">2</a></li>
                                                <li><a href="#" className="ripple-effect">3</a></li>
                                                <li className="pagination-arrow"><a href="#" className="ripple-effect"><i
                                                    className="icon-material-outline-keyboard-arrow-right"></i></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>


                <div className="padding-top-40"></div>


            </div>
        </div>
    );
};

export default SearchDiscussion;