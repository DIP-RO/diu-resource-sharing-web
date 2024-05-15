import  { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

const ManagePdf = () => {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/resources/');
                setResources(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchResources();
    }, []);

    const handleDeleteResource = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/resources/${id}/`);

            if (response.status === 204) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Resource has been deleted',
                    showConfirmButton: false,
                    timer: 1500,
                });

                // Remove the deleted resource from the state
                setResources(prevResources => prevResources.filter(resource => resource.id !== id));
            }
        } catch (error) {
            console.error('Error deleting resource:', error);
        }
    };

    const handleDownloadResource = async (url, filename) => {
        try {
            const response = await axios({
                url: url,
                method: 'GET',
                responseType: 'blob',
            });

            const url2 = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url2;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error downloading resource:', error);
        }
    };

    const handleUpdateResource = async (id) => {
        // Logic to navigate to the update resource page or open a modal for updating resource details
        console.log('Update resource:', id);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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
                                        <i className="icon-material-outline-file-copy"></i> Bookmarked PDF/Slides
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
                                                                <img src="images/slide.png" alt='' />
                                                            </div>
                                                            <div className="resource-listing-description">
                                                                <h3 className="resource-listing-title">{resource.title}</h3>
                                                                <p className="resource-listing-text">{resource.description}</p>
                                                            </div>
                                                        </div>
                                                        <div className="resource-listing-footer">
                                                            <ul>
                                                                <li>
                                                                    <i className="icon-material-outline-bookmark-border"></i> {resource.department}
                                                                </li>
                                                                <li>
                                                                    <i className="icon-feather-user"></i> {resource.teacher}
                                                                </li>
                                                            </ul>
                                                            <a href={resource.file} download={resource.title} className="download-button">
                                                                Download Now <i className="icon-feather-download"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="buttons-to-right">
                                                        <a href="#" className="button blue ripple-effect ico" title="Edit" data-tippy-placement="left" onClick={() => handleUpdateResource(resource.id)}>
                                                            <i className="icon-feather-edit"></i>
                                                        </a>
                                                        <button
                                                            onClick={() => handleDeleteResource(resource.id)}
                                                            className="button red ripple-effect ico"
                                                            title="Remove"
                                                            data-tippy-placement="left"
                                                        >
                                                            <i className="icon-feather-trash-2"></i>
                                                        </button>
                                                        <button
                                                            onClick={() => handleDownloadResource(resource.file, resource.title)}
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
                </div>
            </div>
        </div>
    );
};

export default ManagePdf;
