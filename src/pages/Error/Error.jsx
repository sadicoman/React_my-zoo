import PropTypes from "prop-types";

import TitreH1 from "../../components/common/Titres/TitreH1";
import Navbar from "../../components/layout/Menu/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";

const Error = props => {
	return (
		<>
			<Navbar />
			<main className="container">
				<TitreH1 textColor="text-danger">Erreur {props.type}</TitreH1>
				<p className="lead text-center">{props.children}</p>
			</main>
			<Footer CSS="footer--absolute" />
		</>
	);
};

Error.propTypes = {
	type: PropTypes.string,
	children: PropTypes.node,
};

export default Error;
