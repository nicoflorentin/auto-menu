import CategorySection from "views/ClientView/Menu/CategorySection/CategorySection";
import { toCamelCase } from "utilities/toCamelCase";

const CategorizedDishes = ({ dishes, categories }) => {

	const orderDishes = (dishes) => {
		const orderedDishes = categories.map(category => ({
			title: toCamelCase(category),
			label: category,
			dishes: dishes.filter(dish => dish.category === toCamelCase(category)).sort((a, b) => a.price - b.price),
		}));
		console.log(orderedDishes);
		return orderedDishes;
	}

	const orderedDishes = orderDishes(dishes);
	return orderedDishes.map((category, index) => (
		<CategorySection key={index} dishes={category.dishes} name={category.label} />
	));
};

export default CategorizedDishes