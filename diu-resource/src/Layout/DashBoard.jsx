import { Outlet,Link } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const DashBoard = () => {
    const {logOut} = useContext(AuthContext);
    return (
        <div>
            <Navbar />
            <div className="dashboard-container margin-top-60">


                <div className="dashboard-sidebar">
                    <div className="dashboard-sidebar-inner" data-simplebar>
                        <div className="dashboard-nav-container">


                            <a href="#" className="dashboard-responsive-nav-trigger">
                                <span className="hamburger hamburger--collapse" >
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </span>
                                <span className="trigger-title">Dashboard Navigation</span>
                            </a>


                            <div className="dashboard-nav">
                                <div className="dashboard-nav-inner">

                                    <ul data-submenu-title="Start">
                                        <li className="active"><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                                        <li><a href="dashboard-bookmarks.html"><i className="icon-material-outline-bookmark-border"></i> Bookmarks <span className="nav-tag">9</span></a></li>
                                        <li><a href="dashboard-notifications.html"><i className="icon-material-outline-rate-review"></i> Notifications <span className="nav-tag">3</span></a></li>
                                    </ul>

                                    <ul >
                                        <li><a href="#"><i className="icon-line-awesome-book"></i> Books</a>
                                           
                                                
                                                <li className="margin-left-40"><Link to='/dashboard/addbook'><i className="icon-feather-plus-square"></i> Add Books</Link></li>
                                                
                                                
                                                <li className="margin-left-40"><Link to='/dashboard/managebook'><i className="icon-feather-edit-3"></i> Manage Books</Link></li>
                                                
                                            
                                        </li>


                                        <li><a href="#"><i className="icon-material-outline-file-copy"></i> PDF & Slides</a>
                                            
                                                <li className="margin-left-40"><Link to='/dashboard/addpdf'><i className="icon-feather-plus-square"></i> Add PDF</Link></li>
                                                <li className="margin-left-40"><Link to='/dashboard/managepdf'> <i className="icon-feather-edit-3"></i> Manage PDF</Link></li>
                                            
                                        </li>
                                        <li><a href="#"><i className="icon-line-awesome-question-circle"></i> Questions</a>
                                            
                                                <li className="margin-left-40"><Link to='/dashboard/addquestion'><i className="icon-feather-plus-square"></i> Add Questions</Link></li>
                                                <li className="margin-left-40"><Link to='/dashboard/managequestion'><i className="icon-feather-edit-3"></i> Manage Questions</Link></li>
                                            
                                        </li>
                                        <li><a href="#"><i className="icon-material-outline-note-add"></i> Notes</a>
                                            
                                                <li className="margin-left-40"><Link to='/dashboard/addnotes'><i className="icon-feather-plus-square"></i> Add Notes</Link></li>
                                                <li className="margin-left-40"><Link to='/dashboard/managenote'><i className="icon-feather-edit-3"></i> Manage Notes</Link></li>
                                            
                                        </li>
                                        

                                    </ul>

                                    <ul data-submenu-title="Account">
                                        <li><Link to='/dashboard/setting'><i className="icon-material-outline-settings"></i> Settings</Link></li>
                                        <li onClick={ ()=> logOut()}><a><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="dashboard-content-container" data-simplebar>
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default DashBoard;