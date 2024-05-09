import { useEffect, useState } from "react";


const ManagePdf = () => {
	const [pdfs, setPdf] = useState([]);


	useEffect(() => {
		fetch("http://localhost:5000/api/v1/pdfSlides/pdfs")
			.then((response) => response.json())
			.then((data) => {
				setPdf(data.pdfs);
			});
	}, []);
	console.log(pdfs);
	const handleDeletePdf = async (pdfId) => {
		try {
			const response = await fetch(`http://localhost:5000/api/v1/pdfSlides/delete/${pdfId}`, {
				method: 'DELETE',
			});

			if (response.ok) {
				// PDF/Slide successfully deleted, update the state to remove the deleted PDF/Slide
				setPdf((prevPdfs) => prevPdfs.filter((pdf) => pdf._id !== pdfId));
			} else {
				console.error('Failed to delete PDF/Slide');
			}
		} catch (error) {
			console.error('Error deleting PDF/Slide:', error);
		}
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
										<i className="icon-material-outline-file-copy"></i> Bookmarked PDF/Slides
									</h3>
								</div>
								<div className="content">
									<ul className="dashboard-box-list">
										{
											pdfs.length > 0 ? (
												pdfs.map((pdf) => (

													<li key={pdf._id}>

														<div className="resource-listing">

															<div className="resource-listing-details">

																<div className="resource-listing-company-logo">
																	<img src="images/slide.png" alt='' />
																</div>

																<div className="resource-listing-description">
																	<h3 className="resource-listing-title">{pdf.title}</h3>
																	<p className="resource-listing-text">This slide covers a wide range
																		of essential topics in engineering, and they are all highly
																		regarded by engineering educators and professionals.</p>
																</div>
															</div>

															<div className="resource-listing-footer">
																<ul>
																	<li>
																		<i className="icon-material-outline-bookmark-border"></i> {pdf.department}
																	</li>
																	<li>
																		<i className="icon-material-outline-local-offer"></i> Me
																	</li>
																	<li>
																		<i className="icon-feather-user"></i> {pdf.teacher}
																	</li>
																	<li>
																		<i className="icon-line-awesome-pencil"></i> Student Name
																	</li>
																</ul>
																<a href="documents/sample_slide.pptx" download="sample_slide.pptx"
																	className="download-button">Download Now <i
																		className="icon-feather-download"></i>
																</a>
															</div>
														</div>

														<div className="buttons-to-right">
															<a href="#" className="button blue ripple-effect ico" title="Edit"
																data-tippy-placement="left">
																<i className="icon-feather-edit"></i>
															</a>
															<button
																onClick={() => handleDeletePdf(pdf._id)}
																className="button red ripple-effect ico"
																title="Remove"
																data-tippy-placement="left"
															>
																<i className="icon-feather-trash-2"></i>
															</button>
														</div>
													</li>
												))
											) : (
												<p>No pdfs found</p>
											)
										}
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