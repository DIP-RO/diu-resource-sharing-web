import { useEffect, useState } from "react";

const SearchBook = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/books/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.books);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div id="titlebar" className="gradient margin-top-60">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Browse Books</h2>
              <nav id="breadcrumbs" className="dark">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="resources-books-all.html">Books</a></li>
                  <li>Find Books</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="sidebar-container">
              <div className="sidebar-widget">
                <h3>Title</h3>
                <div className="input-with-icon">
                  <div id="autocomplete-container">
                    <input
                      id="autocomplete-input"
                      type="text"
                      placeholder="Title"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                  </div>
                  <i className="icon-feather-users"></i>
                </div>
              </div>

              {/* ... other sidebar widgets ... */}

            </div>
          </div>
          <div className="col-xl-9 col-lg-8 content-left-offset">

            <h3 className="page-title">Search Results</h3>

            <div className="listings-container margin-top-35">
              {filteredBooks.map((book) => (
                <div className="resource-listing" key={book._id}>
                  <div className="resource-listing-details">
                    <div className="resource-listing-company-logo">
                      <img src="images/book.png" alt="" />
                    </div>
                    <div className="resource-listing-description">
                      <h3 className="resource-listing-title">{book.title}</h3>
                      <p className="resource-listing-text">{book.description}</p>
                    </div>
                    <span className="bookmark-icon"></span>
                  </div>
                  <div className="resource-listing-footer">
                    <ul>
                      <li><i className="icon-feather-users"></i> {book.author}</li>
                      <li><i className="icon-material-outline-local-offer"></i> {book.department}</li>
                      <li><i className="icon-line-awesome-pencil"></i> {book.edition}</li>
                    </ul>
                    <a href={book.filePath} download={book.title} className="download-button">Download Now <i className="icon-feather-download"></i></a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBook;
