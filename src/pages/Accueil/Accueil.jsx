import React, { Component } from "react";

import CardSection from "../../components/common/Card/CardSection/CardSection";
import Carrousel from "../../components/common/Carrousel/Carrousel";
import TitreH1 from "../../components/common/Titres/TitreH1";
import Navbar from "../../components/layout/Menu/Navbar/Navbar";

const images = [
	{ src: "../../assets/images/chien.png", alt: "Chien", height: "128px" },
	{ src: "../../assets/images/cochon.png", alt: "Cochon", height: "128px" },
	{ src: "../../assets/images/croco.png", alt: "Croco", height: "128px" },
	{ src: "../../assets/images/requin.png", alt: "Requin", height: "128px" },
	{ src: "../../assets/images/serpent.png", alt: "Serpent", height: "128px" },
];

const cardData = [
	{
		title: "Nos Expositions",
		text: "Découvrez les expositions actuelles et à venir. Il y a toujours quelque chose de nouveau à voir!",
		imageSrc: "../../assets/images/expositions.webp",
		imageAlt: "Expositions",
		linkHref: "#",
		linkText: "Explorer",
	},
	{
		title: "Informations sur les Billets",
		text: "Planifiez votre visite dès aujourd'hui. Achetez vos billets en ligne et économisez.",
		imageSrc: "../../assets/images/billets.webp",
		imageAlt: "Billets",
		linkHref: "#",
		linkText: "Acheter des Billets",
	},
	{
		title: "Nos Événements",
		text: "Rejoignez-nous pour des événements spéciaux tout au long de l'année.",
		imageSrc: "../../assets/images/evenements.webp",
		imageAlt: "Événements",
		linkHref: "#",
		linkText: "Voir les Événements",
	},
];

class Accueil extends Component {
	componentDidMount() {
		document.title = "MyZoo | Accueil";
	}

	render() {
		return (
			<>
				<Navbar />
				<main className="container mt-5">
					<TitreH1>MyZoo</TitreH1>
					<p className="lead mb-5">
						Bienvenue à MyZoo, l'endroit parfait pour découvrir et apprendre sur une
						multitude d'animaux incroyables. Venez voir nos dernières expositions et vivez
						une expérience inoubliable en famille ou entre amis.
					</p>
					<Carrousel images={images} />

					<div className="container mt-5 mb-5">
						<CardSection cards={cardData} />
					</div>
				</main>
			</>
		);
	}
}

export default Accueil;
