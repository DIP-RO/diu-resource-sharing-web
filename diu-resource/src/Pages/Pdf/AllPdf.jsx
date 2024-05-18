import { useEffect, useState } from "react";
import axios from "axios";

const AllPdf = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/resources/"
        );
        setResources(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);
  const handleDownloadResource = async (url, filename) => {
    try {
      const response = await axios({
        url: url,
        method: "GET",
        responseType: "blob",
      });

      const url2 = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url2;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading resource:", error);
    }
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearchQuery(""); // Clear search query when a letter is selected
  };

  return (
    <div>
      <div id="titlebar" className="gradient margin-top-60">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>All PDF/Slides</h2>

              <nav id="breadcrumbs" className="dark">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="resources-pdf-slide-all.html">PDF/Slides</a>
                  </li>
                  <li>All PDF/Slides</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="letters-list">
              {Array.from({ length: 26 }, (_, index) => {
                const letter = String.fromCharCode(65 + index);
                return (
                  <a
                    key={letter}
                    href="#"
                    onClick={() => handleLetterClick(letter)}
                  >
                    {letter}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-xl-12">
            <div className="listings-container margin-top-35">
              <div className="row">
                <div className="col-xl-12">
                  <div className="dashboard-box margin-top-0">
                    <div className="headline">
                      <h3>
                        <i className="icon-material-outline-file-copy"></i>{" "}
                        Bookmarked PDF/Slides
                      </h3>
                    </div>
                    <div className="content">
                      <ul className="dashboard-box-list">
                        {resources.length > 0 ? (
                          resources.map((resource) => (
                            <li key={resource.id}>
                              <div className="resource-listing">
                                <div className="resource-listing-details">
                                  <div className="resource-listing-company-logo">
                                    <img src="images/slide.png" alt="" />
                                  </div>
                                  <div className="resource-listing-description">
                                    <h3 className="resource-listing-title">
                                      {resource.title}
                                    </h3>
                                    <p className="resource-listing-text">
                                      {resource.description}
                                    </p>
                                  </div>
                                </div>
                                <div className="resource-listing-footer">
                                  <ul>
                                    <li>
                                      <i className="icon-material-outline-bookmark-border"></i>{" "}
                                      {resource.department}
                                    </li>
                                    <li>
                                      <i className="icon-feather-user"></i>{" "}
                                      {resource.teacher}
                                    </li>
                                  </ul>
                                  <a
                                    href={resource.file}
                                    download={resource.title}
                                    className="download-button"
                                  >
                                    Download Now{" "}
                                    <i className="icon-feather-download"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="buttons-to-right">
                                <button
                                  onClick={() =>
                                    handleDownloadResource(
                                      resource.file,
                                      resource.title
                                    )
                                  }
                                  className="button green ripple-effect ico"
                                  title="Download"
                                  data-tippy-placement="left"
                                >
                                  <i className="icon-feather-download"></i>
                                </button>
                              </div>
                            </li>
                          ))
                        ) : (
                          <p>No resources found</p>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>
              <div className="row">
                <div className="col-md-12">
                  <div className="pagination-container margin-top-30 margin-bottom-60">
                    <nav className="pagination">
                      <ul>
                        <li className="pagination-arrow">
                          <a href="#">
                            <i className="icon-material-outline-keyboard-arrow-left"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#" className="current-page">
                            2
                          </a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li className="pagination-arrow">
                          <a href="#">
                            <i className="icon-material-outline-keyboard-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPdf;
