import MenuDishItem from "views/ClientView/Menu/MenuDishItem/MenuDishItem"
import { Element } from 'react-scroll';

const CategorySection = ({ dishes, label, name, categoryObj }) => {


console.log(categoryObj);	
	return (
		<div className="mb-10">
			<Element name={name}>
				<div className="font-bold text-zinc-700 text-2xl uppercase mb-2 pl-2">{label}</div>
			</Element>
			{dishes?.map(dish => <MenuDishItem key={dish.id} dish={dish} />)}
		</div>
	)
}

export default CategorySection