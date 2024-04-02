import { useState, useEffect } from "react";
import axios from "axios";
import "./Animaux.css";

import TitreH1 from "../../components/common/Titres/TitreH1";
import Footer from "../../components/layout/Footer/Footer";
import Navbar from "../../components/layout/Menu/Navbar/Navbar";
import CardAnimal from "../../components/common/Card/CardAnimal/CardAnimal";
import SkeletonLoader from "../../components/common/Loader/SkeletonLoader/SkeletonLoader";

const Animaux = () => {
	const [animaux, setAnimaux] = useState([]);
	const [erreur, setErreur] = useState("");
	const [chargement, setChargement] = useState(false);
	const [continents, setContinents] = useState([]);
	const [familles, setFamilles] = useState([]);
	const [filtreContinent, setFiltreContinent] = useState("");
	const [filtreFamille, setFiltreFamille] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			setChargement(true);
			try {
				const [animauxRes, continentsRes, famillesRes] = await Promise.all([
					axios.get("http://localhost/projets/zoo/api/front/animaux"),
					axios.get("http://localhost/projets/zoo/api/front/continents"),
					axios.get("http://localhost/projets/zoo/api/front/familles"),
				]);
				setAnimaux(Object.values(animauxRes.data));
				setContinents(continentsRes.data);
				setFamilles(famillesRes.data);
				console.log(continents);
				console.log(familles);
			} catch (error) {
				console.error("Erreur lors de la récupération des données:", error);
				setErreur(
					"Impossible de charger les données en ce moment. Veuillez réessayer plus tard.",
				);
			} finally {
				setChargement(false);
			}
		};

		fetchData();
	}, []);

	const filtrerAnimaux = () => {
		return animaux.filter(animal => {
			return (
				(filtreContinent === "" ||
					animal.continents.some(
						continent => continent.libelleContinent === filtreContinent,
					)) &&
				(filtreFamille === "" || animal.famille.libelle === filtreFamille)
			);
		});
	};

	const resetFiltres = () => {
		setFiltreContinent("");
		setFiltreFamille("");
	};

	return (
		<>
			<Navbar />
			<main className="container mt-5">
				<TitreH1>Les animaux du parc</TitreH1>
				<p className="lead text-center">Page listant les animaux du zoo</p>
				<div className="grid">
					<select
						value={filtreContinent}
						onChange={e => setFiltreContinent(e.target.value)}
						className="form-select mb-3 g-col-5"
					>
						<option value="">Sélectionnez un continent</option>
						{continents.map(continent => (
							<option key={continent.continent_id} value={continent.continent_libelle}>
								{continent.continent_libelle}
							</option>
						))}
					</select>

					<select
						value={filtreFamille}
						onChange={e => setFiltreFamille(e.target.value)}
						className="form-select mb-3 g-col-5"
					>
						<option value="">Sélectionnez une famille</option>
						{familles.map(famille => (
							<option key={famille.famille_id} value={famille.famille_libelle}>
								{famille.famille_libelle}
							</option>
						))}
					</select>

					<button onClick={resetFiltres} className="btn btn-secondary mb-3 g-col-2">
						Réinitialiser
					</button>
				</div>

				{chargement ? (
					<div className="container mt-5">
						<div className="row">
							<SkeletonLoader count={6} />
						</div>
					</div>
				) : (
					<div className="container mt-5">
						<div className="row">
							{filtrerAnimaux().map(animal => (
								<CardAnimal key={animal.id} animal={animal} />
							))}
						</div>
					</div>
				)}

				{erreur && <p className="text-danger">{erreur}</p>}
			</main>
			<Footer CSS="footer--relative" />
		</>
	);
};

export default Animaux;
