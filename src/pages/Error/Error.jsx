import PropTypes from "prop-types";

import TitreH1 from "../../components/common/Titres/TitreH1";
import Navbar from "../../components/layout/Menu/Navbar/Navbar";

const Error = props => {
	return (
		<>
			<Navbar />
			<main className="container">
				<TitreH1 className="text-danger">Erreur {props.type}</TitreH1>
				<p className="lead text-center">{props.children}</p>
			</main>
		</>
	);
};

Error.propTypes = {
	type: PropTypes.string,
	children: PropTypes.node,
};

export default Error;