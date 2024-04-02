import React from "react";
import axios from "axios";

import Footer from "../../components/layout/Footer/Footer";
import TitreH1 from "../../components/common/Titres/TitreH1";
import Navbar from "../../components/layout/Menu/Navbar/Navbar";
import FormulaireContact from "../../components/common/Formulaire/FormulaireContact/FormulaireContact";

const Contact = () => {
	const handleEnvoiMail = message => {
		axios
			.post("http://localhost/SERVEURANIMAUX/front/sendMessage", message)
			.then(reponse => {
				console.log(reponse);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<>
			<Navbar />
			<main className="container mt-5 mb-5">
				<TitreH1>Contactez-nous</TitreH1>
				<p className="lead text-center">
					Nous sommes là pour répondre à toutes vos questions
				</p>

				<div className="row mt-5">
					<div className="col-md-6">
						<h3>Informations de Contact</h3>
						<p>
							<strong>Email :</strong> contact@exemple.com
						</p>
						<p>
							<strong>Téléphone :</strong> +33 1 23 45 67 89
						</p>
						<p>
							<strong>Adresse :</strong> 123 Rue Fictive, 1000 Bruxelles, Belgique
						</p>

						<h3>Horaires d'ouverture</h3>
						<p>Du lundi au vendredi : 9h00 - 18h00</p>
						<p>Samedi : 10h00 - 17h00</p>
					</div>

					<div className="col-md-6">
						<h3>Envoyez-nous un message</h3>
						<FormulaireContact sendMail={handleEnvoiMail} />
					</div>
				</div>
			</main>
			<Footer CSS="footer--special" />
		</>
	);
};

export default Contact;
