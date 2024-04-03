import React from "react";
import RestaurantProfile from "views/ClientView/Menu/RestaurantProfile/RestaurantProfile";
import { useParams } from "react-router-dom";
import NavBar from "views/ClientView/Menu/NavBar/NavBar";
import CategorizedDishes from "views/ClientView/Menu/CategorizedDishes.jsx/CategorizedDishes";

const Menu = () => {
	const categories = ['Platos Principales', 'Entrantes', 'Postres', 'Bebidas'];
	const dishes = [
		{ category: 'platosPrincipales', title: 'Pollo' },
		{ category: 'platosPrincipales', title: 'Asado' },
		{ category: 'entrantes', title: 'Rabas' },
		{ category: 'postres', title: 'Helado' },
		{ category: 'bebidas', title: 'Vino' },
	];

	const { restaurantName: name } = useParams();

	return (
		<div className="font-ubuntu">
			<RestaurantProfile name={name} />
			<NavBar />
			<CategorizedDishes dishes={dishes} categories={categories} />
		</div>
	);
};

export default Menu;
