import "./Footer.css";

import PropTypes from "prop-types";

import facebook from "../../../assets/images/footer/fb.png";
import twitter from "../../../assets/images/footer/twitter.png";
import youtube from "../../../assets/images/footer/youtube.png";

const Footer = props => {
	let CSS = props.CSS ? props.CSS : "";
	let monCss = `footer ${CSS}`;

	return (
		<div className={monCss}>
			<footer className="container py-5">
				<div className="row">
					<div className="col-6 col-md-2 mb-3">
						<h5>Explorez</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Accueil
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Nos Animaux
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Plan du Zoo
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Activités
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Horaires & Tarifs
								</a>
							</li>
						</ul>
					</div>

					<div className="col-6 col-md-2 mb-3">
						<h5>Participez</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Événements Spéciaux
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Programmes Éducatifs
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Devenir Bénévole
								</a>
							</li>
						</ul>
					</div>

					<div className="col-6 col-md-2 mb-3">
						<h5>Informations</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									À Propos du Zoo
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Conservation
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									Contactez-Nous
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-body-secondary">
									FAQs
								</a>
							</li>
						</ul>
					</div>

					<div className="col-md-5 offset-md-1 mb-3">
						<form data-dashlane-rid="2faa5648dfa483ea" data-form-type="newsletter">
							<h5>Abonnez-vous à notre newsletter.</h5>
							<p>Résumé mensuel de ce qui est nouveau et excitant de notre part.</p>
							<div className="d-flex flex-column flex-sm-row w-100 gap-2">
								<label className="visually-hidden">Adresse e-mail</label>
								<input
									id="newsletter1"
									type="text"
									className="form-control"
									placeholder="Email address"
									data-dashlane-rid="360fd1dc4056cc11"
									data-form-type="email"
									data-kwimpalastatus="alive"
									data-kwimpalaid="1712073739170-0"
								/>
								<button
									className="btn btn-primary"
									type="button"
									data-dashlane-label="true"
									data-dashlane-rid="3e98ace2c30f2767"
									data-form-type="action,subscribe"
								>
									S'abonner
								</button>
							</div>
						</form>
					</div>
				</div>

				<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
					<p>© 2024 MyZoo, Inc. Tous droits réservés.</p>
					<ul className="list-unstyled d-flex">
						<li className="ms-3">
							<a className="link-body-emphasis footer__social" href="#">
								<img src={facebook} alt="facebook" width="24" height="24" />
							</a>
						</li>
						<li className="ms-3">
							<a className="link-body-emphasis footer__social" href="#">
								<img src={twitter} alt="facebook" width="24" height="24" />
							</a>
						</li>
						<li className="ms-3">
							<a className="link-body-emphasis footer__social" href="#">
								<img src={youtube} alt="facebook" width="24" />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

Footer.propTypes = {
	children: PropTypes.node.isRequired,
	CSS: PropTypes.string,
};

export default Footer;
