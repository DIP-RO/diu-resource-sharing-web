const Setting = () => {
  return (
    <div>
      <div className="dashboard-content-container" data-simplebar>
        <div className="dashboard-content-inner">
          <div className="dashboard-headline">
            <h3>Settings</h3>

            <nav id="breadcrumbs" className="dark">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>Settings</li>
              </ul>
            </nav>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="dashboard-box margin-top-0">
                <div className="headline">
                  <h3>
                    <i className="icon-material-outline-account-circle"></i> My
                    Account
                  </h3>
                </div>

                <div className="content with-padding padding-bottom-0">
                  <div className="row">
                    <div className="col-auto">
                      <div
                        className="avatar-wrapper"
                        data-tippy-placement="bottom"
                        title="Change Avatar"
                      >
                        <img
                          className="profile-pic"
                          src="images/user-avatar-small-01.jpg"
                          alt=""
                        />
                        <div className="upload-button"></div>
                        <input
                          className="file-upload"
                          type="file"
                          accept="image/*"
                        />
                      </div>
                    </div>

                    <div className="col">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="submit-field">
                            <h5>First Name</h5>
                            <input
                              type="text"
                              className="with-border"
                              value="Md. Jahangir"
                            />
                          </div>
                        </div>

                        <div className="col-xl-6">
                          <div className="submit-field">
                            <h5>Last Name</h5>
                            <input
                              type="text"
                              className="with-border"
                              value="Alam"
                            />
                          </div>
                        </div>

                        <div className="col-xl-6">
                          <div className="submit-field">
                            <h5>Email</h5>
                            <input
                              type="text"
                              className="with-border"
                              value="vc@Daffodil.ac.bd"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="dashboard-box">
                <div className="headline">
                  <h3>
                    <i className="icon-material-outline-face"></i> My Profile
                  </h3>
                </div>

                <div className="content">
                  <ul className="fields-ul">
                    <li>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="submit-field">
                            <h5>Roll Number</h5>
                            <input
                              type="text"
                              className="with-border"
                              value="19XXXXX"
                            />
                          </div>
                        </div>

                        <div className="col-xl-6">
                          <div className="submit-field">
                            <h5>Department</h5>
                            <select
                              className="selectpicker with-border"
                              data-size="7"
                              title="Select Your Department"
                              data-live-search="true"
                            >
                              <option value="CSE">
                                Computer Science and Engineering (CSE)
                              </option>
                              <option value="EEE">
                                Electrical and Electronics Engineering (EEE)
                              </option>
                              <option value="ECE">
                                Electrical and Computer Engineering (ECE)
                              </option>
                              <option value="ETE">
                                Electrical and Telecommunication Engineering
                                (ETE)
                              </option>
                              <option value="ME">
                                Mechanical Engineering (ME)
                              </option>
                              <option value="CE">Civil Engineering (CE)</option>
                              <option value="GCE">
                                Glass and Ceramics Engineering (GCE)
                              </option>
                              <option value="MSE">
                                Material Science and Engineering (MSE)
                              </option>
                              <option value="MTE">
                                Mechatronics Engineering (MTE)
                              </option>
                              <option value="BECM">BECM (BECM)</option>
                              <option value="CFPE">CFPE (CFPE)</option>
                              <option value="IPE">IPE (IPE)</option>
                              <option value="Arch">Architecture (Arch)</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-xl-12">
                          <div className="submit-field">
                            <h5>Introduce Yourself</h5>
                            <textarea
                              cols="30"
                              rows="5"
                              className="with-border"
                            >
                              Leverage agile frameworks to provide a robust
                              synopsis for high level overviews. Iterative
                              approaches to corporate strategy foster
                              collaborative thinking to further the overall
                              value proposition. Organically grow the holistic
                              world view of disruptive innovation via workplace
                              diversity and empowerment.
                            </textarea>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div id="test1" className="dashboard-box">
                <div className="headline">
                  <h3>
                    <i className="icon-material-outline-lock"></i> Password &
                    Security
                  </h3>
                </div>

                <div className="content with-padding">
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="submit-field">
                        <h5>Current Password</h5>
                        <input type="password" className="with-border" />
                      </div>
                    </div>

                    <div className="col-xl-4">
                      <div className="submit-field">
                        <h5>New Password</h5>
                        <input type="password" className="with-border" />
                      </div>
                    </div>

                    <div className="col-xl-4">
                      <div className="submit-field">
                        <h5>Repeat New Password</h5>
                        <input type="password" className="with-border" />
                      </div>
                    </div>

                    <div className="col-xl-12">
                      <div className="checkbox">
                        <input type="checkbox" id="two-step" checked />
                        <label>
                          <span className="checkbox-icon"></span> Enable
                          Two-Step Verification via Email
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <a href="#" className="button ripple-effect big margin-top-30">
                Save Changes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
