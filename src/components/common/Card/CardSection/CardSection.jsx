import PropTypes from "prop-types";

const Card = ({ title, text, imageSrc, imageAlt, linkHref, linkText }) => (
	<div className="col-lg-4 mb-3">
		<div className="card">
			<img src={imageSrc} className="card-img-top" alt={imageAlt} />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
				<a href={linkHref} className="btn btn-primary">
					{linkText}
				</a>
			</div>
		</div>
	</div>
);

const CardSection = ({ cards }) => {
	return (
		<div className="row">
			{cards.map((card, index) => (
				<Card key={index} {...card} />
			))}
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
	linkHref: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
};

CardSection.propTypes = {
	cards: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			imageSrc: PropTypes.string.isRequired,
			imageAlt: PropTypes.string.isRequired,
			linkHref: PropTypes.string.isRequired,
			linkText: PropTypes.string.isRequired,
		}),
	).isRequired,
};

export default CardSection;
