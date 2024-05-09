import { useEffect, useState } from "react";


const AllNotes = () => {
    const [selectedLetter, setSelectedLetter] = useState(null);

    const [questions, setQuestions] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/notes/get-all-notes")
            .then((response) => response.json())
            .then((data) => {
                setQuestions(data);
            });
    }, []);


    const handleLetterClick = (letter) => {
        setSelectedLetter(letter);
        setSearchQuery(""); // Clear search query when a letter is selected
    };

    const filteredBooks = questions.filter((book) => {
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
                            <h2>All Notes</h2>
                            <nav id="breadcrumbs" className="dark">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="resources-notes-all.html">Notes</a></li>
                                    <li>All Notes</li>
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
                            {
                                filteredBooks.map((question) =>  (
                                    <div className="resource-listing" key={question._id}>


                                    <div className="resource-listing-details">
    
                                        <div className="resource-listing-company-logo">
                                            <img src="images/note.png" alt="" />
                                        </div>
    
    
                                        <div className="resource-listing-description">
                                            <h3 className="resource-listing-title">classNamenotes for the Course GCE 4110</h3>
                                            <p className="resource-listing-text">This slide covers a wide range of essential topics in engineering, and they are all highly regarded by engineering educators and professionals.</p>
                                        </div>
    
    
                                        <span className="bookmark-icon"></span>
                                    </div>
    
    
                                    <div className="resource-listing-footer">
                                        <ul>
                                            <li><i className="icon-material-outline-bookmark-border"></i> GCE 4110</li>
                                            <li><i className="icon-material-outline-local-offer"></i> GCE</li>
                                            <li><i className="icon-line-awesome-pencil"></i> Student Name</li>
                                        </ul>
    
                                        <a href="documents/sample_classNamenote.pdf" download="sample_classNamenote.pdf" className="download-button">Download Now <i className="icon-feather-download"></i></a>
                                    </div>
                                </div>
                                    )
                                )
                            }


                            <div className="clearfix"></div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="pagination-container margin-top-30 margin-bottom-60">
                                        <nav className="pagination">
                                            <ul>
                                                <li className="pagination-arrow"><a href="#"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#" className="current-page">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li className="pagination-arrow"><a href="#"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
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

export default AllNotes;