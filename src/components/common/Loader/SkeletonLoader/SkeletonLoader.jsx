import PropTypes from "prop-types";
import "./SkeletonLoader.css";

const SkeletonLoader = ({ count }) => {
	return (
		<>
			{[...Array(count)].map((_, index) => (
				<div key={index} className="col-lg-4 col-md-6 mb-4">
					<div className="card h-100 shadow-sm">
						<div className="skeleton"></div>
						<div className="card-body">
							<div className="skeleton-text"></div>
							<div className="skeleton-text"></div>
							<div className="skeleton-text"></div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

SkeletonLoader.propTypes = {
	count: PropTypes.number,
};

SkeletonLoader.defaultProps = {
	count: 1,
};

export default SkeletonLoader;
