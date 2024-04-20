import MenuDishItem from "views/ClientView/Menu/MenuDishItem/MenuDishItem"
import { Element } from 'react-scroll';

const CategorySection = ({ dishes, label, name, categoryObj }) => {
	return (
		<div className="mb-16">
			<Element name={name}>
				<div className="font-bold text-zinc-700 text-lg uppercase mb-3 pl-1 mx-4 border-b-2 border-zinc-600 ">{label}</div>
			</Element>
			{dishes?.map(dish => <MenuDishItem key={dish.id} dish={dish} />)}
		</div>
	)
}

export default CategorySection