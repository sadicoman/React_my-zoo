import PropTypes from "prop-types";

const TitreH1 = props => {
	let textColor = props.textColor ? props.textColor : "text-body-emphasis";
	let monCss = `${textColor} fw-bold text-center pt-5`;

	return <h1 className={monCss}>{props.children}</h1>;
};

TitreH1.propTypes = {
	children: PropTypes.node.isRequired,
	textColor: PropTypes.string,
};

export default TitreH1;
