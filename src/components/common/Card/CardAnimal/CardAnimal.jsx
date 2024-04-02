import "./CardAnimal.css";
import he from "he"; // Assurez-vous d'avoir installé et importé la bibliothèque 'he' pour le décodage HTML
import PropTypes from "prop-types";

// La fonction pour obtenir la classe de couleur en fonction du continent pourrait être déplacée ici ou importée si elle est définie ailleurs
const getCouleurContinent = nomContinent => {
	const couleursContinents = {
		Europe: "bg-primary",
		Asie: "bg-success",
		Afrique: "bg-danger",
		Océanie: "bg-warning",
		Amérique: "bg-info",
	};
	return couleursContinents[nomContinent] || "bg-secondary";
};

// Définition du composant CardAnimal
const CardAnimal = ({ animal }) => (
	<div className="col-lg-4 col-md-6 mb-4">
		<div className="card h-100 shadow-sm">
			<img
				src={`http://localhost/projets/zoo/api/public/images/${animal.image}`}
				className="card-img-top"
				alt={animal.nom}
				style={{ objectFit: "none", height: "200px" }} // Utilisation de 'cover' plutôt que 'none' pour un meilleur rendu
			/>
			<div className="card-body">
				<h5 className="card-title">{animal.nom}</h5>
				<p className="card-text">{he.decode(animal.description)}</p>{" "}
				{/* Décodez la description */}
				<div className="mb-2">
					<h6 className="d-inline">Famille : {animal.famille.libelle}</h6>
					<p className="badge bg-secondary ms-2 mt-2">
						{he.decode(animal.famille.descriptionFamille)}
					</p>
				</div>
			</div>
			<div className="card-footer bg-white">
				<h6 className="text-muted">Continents :</h6>
				<div className="mb-2">
					{animal.continents.map(continent => (
						<span
							key={continent.idContinent}
							className={`badge ${getCouleurContinent(continent.libelleContinent)} me-1`}
						>
							{continent.libelleContinent}
						</span>
					))}
				</div>
			</div>
		</div>
	</div>
);

CardAnimal.propTypes = {
	animal: PropTypes.shape({
		image: PropTypes.string.isRequired,
		nom: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		famille: PropTypes.shape({
			libelle: PropTypes.string.isRequired,
			descriptionFamille: PropTypes.string.isRequired,
		}).isRequired,
		continents: PropTypes.arrayOf(
			PropTypes.shape({
				idContinent: PropTypes.number.isRequired,
				libelleContinent: PropTypes.string.isRequired,
			}),
		).isRequired,
	}).isRequired,
};

export default CardAnimal;
