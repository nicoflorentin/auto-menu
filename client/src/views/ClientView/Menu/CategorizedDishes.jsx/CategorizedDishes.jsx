import CategorySection from "views/ClientView/Menu/CategorySection/CategorySection";
import { toCamelCase } from "utilities/toCamelCase";

const CategorizedDishes = ({ dishes, categories }) => {

	const orderDishes = (dishes) => {
		const orderedDishes = categories?.map(category => ({
			title: toCamelCase(category),
			label: category,
			dishes: dishes?.filter(dish => dish.category === toCamelCase(category)).sort((a, b) => a.price - b.price),
		}));
		return orderedDishes;
	}
	const orderedDishes = orderDishes(dishes);

	return (
		<div className="px-2">
			{orderedDishes?.map((category, index) => (
				<CategorySection key={index} dishes={category.dishes} name={category.label} />
			))}
		</div>
	)
};

export default CategorizedDishes