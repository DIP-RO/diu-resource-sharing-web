import { useEffect, useState } from "react";


const AllBook = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLetter, setSelectedLetter] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/books/books")
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.books);
            });
    }, []);


    const handleLetterClick = (letter) => {
        setSelectedLetter(letter);
        setSearchQuery(""); // Clear search query when a letter is selected
    };

    const filteredBooks = books.filter((book) => {
        const titleStartsWithLetter = selectedLetter
            ? book.title.toLowerCase().startsWith(selectedLetter.toLowerCase())
            : true;

        const titleIncludesQuery = book.title.toLowerCase().includes(searchQuery.toLowerCase());

        return titleStartsWithLetter && titleIncludesQuery;
    });
    return (
        <div>
            <div className="margin-top-70"></div>
            <div id="titlebar" className="gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <h2>All Books</h2>


                            <nav id="breadcrumbs" className="dark">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="resources-books-all.html">Books</a></li>
                                    <li>All Books</li>
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
                                    <a key={letter} href="#" onClick={() => handleLetterClick(letter)}>
                                        {letter}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-xl-12">

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
                            <div className="clearfix"></div>
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="pagination-container margin-top-30 margin-bottom-60">
                                        <nav className="pagination">
                                            <ul>
                                                <li className="pagination-arrow"><a href="#"><i
                                                    className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#" className="current-page">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li className="pagination-arrow"><a href="#"><i
                                                    className="icon-material-outline-keyboard-arrow-right"></i></a></li>
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

export default AllBook;