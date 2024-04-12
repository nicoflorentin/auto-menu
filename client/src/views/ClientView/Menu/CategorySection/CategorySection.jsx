import MenuDishItem from "views/ClientView/Menu/MenuDishItem/MenuDishItem"
import { Element } from 'react-scroll';

const CategorySection = ({ dishes, label, name }) => {
	return (
		<div className="mb-10">
			<Element name={name}>
				<div className="font-bold text-zinc-700 text-xl mb-2 pl-2 uppercase">{label}</div>
			</Element>
			{dishes?.map(dish => <MenuDishItem key={dish.id} dish={dish} />)}
		</div>
	)
}

export default CategorySection