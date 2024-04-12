import React, { useEffect } from "react";
import RestaurantProfile from "views/ClientView/Menu/RestaurantProfile/RestaurantProfile";
import { useParams } from "react-router-dom";
import NavBar from "views/ClientView/Menu/NavBar/NavBar";
import CategorizedDishes from "views/ClientView/Menu/CategorizedDishes.jsx/CategorizedDishes";
import { useDispatch } from "react-redux";
import { fetchRestaurantData } from "redux/slices/restaurantSlice";

const Menu = ({ restaurantData }) => {
	const { categories: unformattedCategories, description, dishes, profileImage } = restaurantData
	const categories = unformattedCategories?.map(category => category.label)
	const { restaurantName } = useParams();
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchRestaurantData(restaurantName))
	}, [])

	return (
		<div className="font-inter m-auto">
			<RestaurantProfile name={restaurantName} description={description} profileImage={profileImage} />
			<NavBar />
			<CategorizedDishes dishes={dishes} categories={categories} />
		</div>
	);
};

export default Menu;
