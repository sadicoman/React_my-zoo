import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Accueil from "../pages/Accueil/Accueil";
import App from "../App";
import Error from "../pages/Error/Error";
import Animaux from "../pages/Animaux/Animaux";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App />,
			children: [
				{
					path: "/",
					element: <Accueil />,
				},
				{
					path: "/animaux",
					element: <Animaux />,
				},
				{
					path: "/contact",
					element: <h1>Page contact</h1>,
				},
				{
					path: "*",
					element: <Error type="404">La page n'existe pas</Error>,
				},
			],
		},
	],
	// {
	// 	basename: "/MyZoo/", // Ajoutez votre chemin de base ici
	// },
);

export default router;
