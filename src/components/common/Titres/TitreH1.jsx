import PropTypes from "prop-types";

const TitreH1 = props => {
	let textColor = props.textColor ? props.textColor : "";
	let monCss = `fw-bold text-body-emphasis text-center pt-5 ${textColor}`;

	return <h1 className={monCss}>{props.children}</h1>;
};

TitreH1.propTypes = {
	children: PropTypes.node.isRequired,
	textColor: PropTypes.string,
};

export default TitreH1;
