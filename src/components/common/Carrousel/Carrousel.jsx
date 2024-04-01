import PropTypes from "prop-types";

const Carrousel = ({ images }) => {
	return (
		<div
			id="carouselExampleSlidesOnly"
			className="carousel slide mb-5"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner d-flex">
				{images.map((image, index) => (
					<div className={`carousel-item ${index === 0 ? "active" : ""}`} key={image}>
						<img
							src={image.src}
							className="d-block mx-auto"
							alt={image.alt}
							style={{ height: image.height || "128px" }}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

Carrousel.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
			height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	).isRequired,
};

export default Carrousel;
