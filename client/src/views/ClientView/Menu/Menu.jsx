import React from "react";
import RestaurantProfile from "views/ClientView/Menu/RestaurantProfile/RestaurantProfile";
import { useParams } from "react-router-dom";
import NavBar from "views/ClientView/Menu/NavBar/NavBar";
import CategorizedDishes from "views/ClientView/Menu/CategorizedDishes.jsx/CategorizedDishes";

const Menu = () => {
	const categories = ['Platos Principales', 'Entrantes', 'Postres', 'Bebidas'];
	const dishes = [
		{ category: 'platosPrincipales', title: 'Pollo', price: 11, description: 'A brief yummy description' },
		{ category: 'platosPrincipales', title: 'Asado', price: 9, description: 'A brief yummy description' },
		{ category: 'entrantes', title: 'Rabas', price: 4, description: 'A brief yummy description' },
		{ category: 'postres', title: 'Helado', price: 2, description: 'A brief yummy description' },
		{ category: 'bebidas', title: 'Vino', price: 15, description: 'A brief yummy description' },
	];

	const { restaurantName } = useParams();

	return (
		<div className="font-inter">
			<RestaurantProfile name={restaurantName} />
			<NavBar />
			<CategorizedDishes dishes={dishes} categories={categories} />
		</div>
	);
};

export default Menu;
