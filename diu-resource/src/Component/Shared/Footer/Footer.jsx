const Footer = () => {
  return (
    <div>
      <footer id="footer">
        {/* <!-- Footer Top Section --> */}
        <div className="footer-top-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                {/* <!-- Footer Rows Container --> */}
                <div className="footer-rows-container">
                  {/* <!-- Left Side --> */}
                  <div className="footer-rows-left">
                    <div className="footer-row">
                      <div className="footer-row-inner footer-logo">
                        <img src="https://iconape.com/wp-content/files/kc/193611/svg/193611.svg" alt="" />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right Side --> */}
                  <div className="footer-rows-right">
                    {/* <!-- Language Switcher --> */}
                    <div className="footer-row">
                      <div className="footer-row-inner">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>English</option>
                          <option>Bangla</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Footer Rows Container / End --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Top Section / End --> */}

        {/* <!-- Footer Copyrights --> */}
        <div className="footer-bottom-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                © 2024 <strong>Daffodil Documents</strong>. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Copyrights / End --> */}
      </footer>
    </div>
  );
};

export default Footer;
