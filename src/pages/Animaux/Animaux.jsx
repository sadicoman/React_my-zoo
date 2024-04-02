import { useState, useEffect } from "react";
import axios from "axios";
import "./Animaux.css";

import TitreH1 from "../../components/common/Titres/TitreH1";
import Footer from "../../components/layout/Footer/Footer";
import Navbar from "../../components/layout/Menu/Navbar/Navbar";
import CardAnimal from "../../components/common/Card/CardAnimal/CardAnimal";
import SkeletonLoader from "../../components/common/Loader/SkeletonLoader/SkeletonLoader";

const Animaux = () => {
	const [animaux, setAnimaux] = useState([]); // Initialisation de l'état avec un tableau vide
	const [erreur, setErreur] = useState("");
	const [chargement, setChargement] = useState(false);

	useEffect(() => {
		// Effectuer la requête API lors du montage du composant
		const fetchAnimaux = async () => {
			setChargement(true);
			try {
				const response = await axios.get(
					"http://localhost/projets/zoo/api/front/animaux",
				);
				setAnimaux(Object.values(response.data)); // Supposons que la réponse contienne un tableau d'animaux
			} catch (error) {
				console.error("Erreur lors de la récupération des animaux:", error);
				setErreur(
					"Impossible de charger les animaux en ce moment. Veuillez réessayer plus tard.",
				);
			} finally {
				setChargement(false);
			}
		};

		fetchAnimaux();
	}, []); // Le tableau vide indique que cet effet ne dépend d'aucune variable et ne s'exécutera qu'une fois après le premier rendu

	return (
		<>
			<Navbar />
			<main className="container mt-5">
				<TitreH1>Les animaux du parc</TitreH1>
				<p className="lead text-center">Page listant les animaux du zoo</p>
				{chargement ? (
					<div className="container mt-5">
						<div className="row">
							<SkeletonLoader count={6} />
						</div>
					</div>
				) : (
					<div className="container mt-5">
						<div className="row">
							{animaux.map(animal => (
								<CardAnimal key={animal.id} animal={animal} />
							))}
						</div>
					</div>
				)}

				{erreur && <p className="text-danger">{erreur}</p>}
			</main>
			<Footer />
		</>
	);
};

export default Animaux;
