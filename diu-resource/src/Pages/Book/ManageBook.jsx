import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
const ManageBook = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/book-submission/"
      );
      setBooks(response.data); 
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleDeleteBook = async (bookId) => {
    // Update the state locally to remove the book immediately
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));

    try {
        const response = await axios.delete(`http://localhost:8000/api/book-submission/${bookId}`);

        if (response.status === 200) {
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Book has been deleted',
                showConfirmButton: false,
                timer: 1500,
            });
            
            fetchBooks();
        } else {
            console.error('Failed to delete book');
        }
    } catch (error) {
        console.error('Error deleting book:', error);
    }
};


  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleUpdateBook = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/book-submission/${editingBook.id}/`,
        editingBook
      );

      if (response.status === 200) {
        fetchBooks();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Book has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        setEditingBook(null); // Reset editing state after update
      } else {
        console.error("Failed to update book");
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleInputChange = (e, field) => {
    setEditingBook({
      ...editingBook,
      [field]: e.target.value,
    });
  };
  return (
    <div>
      <div className="dashboard-content-container" data-simplebar>
        <div className="dashboard-content-inner">
          <div className="dashboard-headline">
            <h3>Manage Books</h3>

            <nav id="breadcrumbs" className="dark">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="dashboard.html">Dashboard</a>
                </li>
                <li>Books</li>
              </ul>
            </nav>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="dashboard-box margin-top-0">
                <div className="headline">
                  <h3>
                    <i className="icon-line-awesome-book"></i> Manage Books
                  </h3>
                </div>
                <div className="content">
                  <ul className="dashboard-box-list">
                    {books.map((book) => (
                      <li key={book.id}>
                        <div className="resource-listing">
                          <div className="resource-listing-details">
                            <div className="resource-listing-company-logo">
                              <img
                                src="https://i.ibb.co/smZ6hCH/image.png"
                                alt=""
                              />
                            </div>
                            <div className="resource-listing-description">
                              <h3 className="resource-listing-title">
                                {book.title}
                              </h3>
                              <p className="resource-listing-text">
                                {book.description}
                              </p>
                            </div>
                          </div>
                          <div className="resource-listing-footer">
                            <ul>
                              <li>
                                <i className="icon-feather-users"></i>{" "}
                                {book.authors}
                              </li>
                              <li>
                                <i className="icon-material-outline-local-offer"></i>{" "}
                                {book.category}
                              </li>
                              <li>
                                <i className="icon-line-awesome-pencil"></i>{" "}
                                {book.edition}
                              </li>
                            </ul>
                            <a
                              href={book.pdfLink}
                              download={book.pdfName}
                              className="download-button"
                            >
                              Download Now
                              <i className="icon-feather-download"></i>
                            </a>
                          </div>
                        </div>
                        <div className="buttons-to-right">
                          <button
                            onClick={() => handleEditBook(book)}
                            className="button blue ripple-effect ico"
                            title="Edit"
                            data-tippy-placement="left"
                          >
                            <i className="icon-feather-edit"></i>
                          </button>
                          <button
                            onClick={() => handleDeleteBook(book.id)}
                            className="button red ripple-effect ico"
                            title="Remove"
                            data-tippy-placement="left"
                          >
                            <i className="icon-feather-trash-2"></i>
                          </button>
                        </div>
                        {editingBook && editingBook.id === book.id && (
                          <div>
                            {/* Edit form for the selected book */}
                            <input
                              type="text"
                              value={editingBook.title}
                              onChange={(e) => handleInputChange(e, "title")}
                            />
                            {/* Add other input fields for editing other book details */}
                            <button onClick={handleUpdateBook}>Update</button>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBook;
