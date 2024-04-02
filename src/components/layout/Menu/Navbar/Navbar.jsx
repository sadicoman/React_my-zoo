import { Link, useLocation } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";

const Navbar = () => {
	const location = useLocation();

	const isActive = path => {
		return location.pathname === path;
	};

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img className="rounred" src={logo} alt="Logo my zoo" width="30" height="24" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								className={`nav-link ${isActive("/") ? "nav-link active" : ""}`}
								aria-current="page"
								to="/"
							>
								Accueil
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${isActive("/animaux") ? "nav-link active" : ""}`}
								aria-current="page"
								to="/animaux"
							>
								Animaux
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${isActive("/contact") ? "nav-link active" : ""}`}
								aria-current="page"
								to="/contact"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
