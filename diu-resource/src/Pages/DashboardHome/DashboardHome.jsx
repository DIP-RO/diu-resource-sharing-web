

const DashboardHome = () => {
    return (
        <div>
            <div className="dashboard-content-container" data-simplebar>
                <div className="dashboard-content-inner" >


                    <div className="dashboard-headline">
                        <h3>Howdy, Tom!</h3>
                        <span>We are glad to see you again!</span>


                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Dashboard</li>
                            </ul>
                        </nav>
                    </div>


                    <div className="fun-facts-container">
                        <div className="fun-fact" data-fun-fact-color="#36bd78">
                            <div className="fun-fact-text">
                                <span>Books Shared</span>
                                <h4>2</h4>
                            </div>
                            <div className="fun-fact-icon"><img src="images/book.png" alt="" /></div>
                        </div>
                        <div className="fun-fact" data-fun-fact-color="#b81b7f">
                            <div className="fun-fact-text">
                                <span>PDF/Slides Shared</span>
                                <h4>4</h4>
                            </div>
                            <div className="fun-fact-icon"><img src="images/slide.png" /></div>
                        </div>
                        <div className="fun-fact" data-fun-fact-color="#efa80f">
                            <div className="fun-fact-text">
                                <span>Discussion Started</span>
                                <h4>28</h4>
                            </div>
                            <div className="fun-fact-icon"><img src="images/discussion.png" /></div>
                        </div>
                        <div className="fun-fact" data-fun-fact-color="#2a41e6">
                            <div className="fun-fact-text">
                                <span>Questions Posted</span>
                                <h4>0</h4>
                            </div>
                            <div className="fun-fact-icon"><img src="images/question.png" /></div>
                        </div>
                        <div className="fun-fact" data-fun-fact-color="#8DC34C">
                            <div className="fun-fact-text">
                                <span>Handnotes Supplied</span>
                                <h4>22</h4>
                            </div>
                            <div className="fun-fact-icon"><img src="images/note.png" /></div>
                        </div>
                        <div className="fun-fact" data-fun-fact-color="#F06392">
                            <div className="fun-fact-text">
                                <span>Resources Bookmared</span>
                                <h4>9</h4>
                            </div>
                            <div className="fun-fact-icon"><i className="icon-feather-bookmark"></i></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DashboardHome;