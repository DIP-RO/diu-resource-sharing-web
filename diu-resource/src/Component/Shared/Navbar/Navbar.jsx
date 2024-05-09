import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <header id="header-container" className="fullwidth fixed-bottom">
                {/* <!-- Header --> */}
                <div id="header">
                    <div className="container">

                        {/* <!-- Left Side Content --> */}
                        <div className="left-side">

                            {/* <!-- Logo --> */}
                            <div id="logo">
                                <a href="index.html"><img src="https://iconape.com/wp-content/files/kc/193611/svg/193611.svg" alt='' /></a>
                            </div>

                            {/* <!-- Main Navigation --> */}
                            <nav id="navigation">
                                <ul id="responsive">

                                    <li><Link to='/' className="current">Home</Link></li>

                                    <li><a href="#">Browse Documents</a>
                                        <ul className="dropdown-nav">
                                            <li><a href="#">Books</a>
                                                <ul className="dropdown-nav">
                                                    <li><Link to='/searchbook'>Search Books</Link></li>
                                                    <li><Link to='/allbook'>All Books</Link></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">PDF & Slides</a>
                                                <ul className="dropdown-nav">
                                                    <li><Link to='/searchpdf'>Search PDF & Slides</Link></li>
                                                    <li><Link to='/allpdf'>All PDF & Slides</Link></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Questions</a>
                                                <ul className="dropdown-nav">
                                                    <li><Link to='/searchquestion'>Search Questions</Link></li>
                                                    <li><Link to='/allquestion'>All Questions</Link></li>
                                                    <li><Link to='/singlequestion'>Single Questions</Link></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Notes</a>
                                                <ul className="dropdown-nav">
                                                    <li><Link to='/searchnotes'>Search Notes</Link></li>
                                                    <li><Link to='/allnotes'>All Notes</Link></li>

                                                </ul>
                                            </li>
                                            <li><a href="#">Discussion</a>
                                                <ul className="dropdown-nav">
                                                    <li><Link to='/searchdiscussion'>Search Discussion</Link></li>
                                                    <li><Link to='/alldiscussion'>All Discussion</Link></li>
                                                    <li><Link to='/singlediscussion'>Single Discussion</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><a href="#">Dashboard</a>
                                        <ul className="dropdown-nav">
                                            <li><Link to='/dashboard'>Dashboard</Link></li>
                                            <li><Link to='/dashboard/setting'>Settings</Link></li>

                                        </ul>
                                    </li>
                                    <li><a href="#">User</a>
                                        <ul className="dropdown-nav">
                                            <li><Link to='/login'>Login</Link></li>
                                            <li><Link to='/signup'>Register</Link></li>

                                        </ul>
                                    </li>

                                </ul>
                            </nav>
                            <div className="clearfix"></div>
                            {/* <!-- Main Navigation / End --> */}

                        </div>
                        {/* <!-- Left Side Content / End --> */}

                        {/* <!-- Right Side Content / End --> */}
                        <div className="right-side">

                            

                            {/* <!-- User Menu --> */}
                            <div className="header-widget">

                                {/* <!-- Bookmarks --> */}
                                <div className="header-notifications user-menu">
                                <Link to='/dashboard/setting'>
                                <div className="header-notifications-trigger">
                                        <a href="#"><div className="user-avatar status-online"><img
                                            src="images/user-avatar-small-01.jpg" alt='' /></div></a>
                                    </div>
                                </Link>

                                    {/* <!-- Dropdown --> */}
                                    <div className="header-notifications-dropdown">

                                        {/* <!-- User Status --> */}
                                        <div className="user-status">

                                            {/* <!-- User Name / Avatar --> */}
                                            <Link to='/dashboard/setting'>
                                            <div className="user-details">
                                                <div className="user-avatar status-online"><img
                                                    src="images/user-avatar-small-01.jpg" alt='' /></div>
                                                <div className="user-name">
                                                    Md. Jahangir Alam <span>Vice Chancellor</span>
                                                </div>
                                            </div>
                                            
                                            </Link>

                                            {/* <!-- User Status Switcher --> */}
                                            <div className="status-switch" id="snackbar-user-status">
                                                <label className="user-online current-status">Online</label>
                                                <label className="user-invisible">Invisible</label>
                                                {/* <!-- Status Indicator --> */}
                                                <span className="status-indicator" aria-hidden="true"></span>
                                            </div>
                                        </div>

                                        <ul className="user-menu-small-nav">
                                            <li><a href="dashboard.html"><i
                                                className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                                            <li><a href="dashboard-settings.html"><i
                                                className="icon-material-outline-settings"></i> Settings</a></li>
                                            <li><a href="index-logged-out.html"><i
                                                className="icon-material-outline-power-settings-new"></i> Logout</a></li>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                            {/* <!-- User Menu / End --> */}

                            {/* <!-- Mobile Navigation Button --> */}
                            <span className="mmenu-trigger">
                                <button className="hamburger hamburger--collapse" type="button">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </span>

                        </div>
                        {/* <!-- Right Side Content / End --> */}

                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;