import MenuDishItem from "views/ClientView/Menu/MenuDishItem/MenuDishItem"

const CategorySection = ({ dishes, name }) => {

	return (
		<div className="mb-10">
			<div className="font-bold text-zinc-700 text-xl mb-2 pl-2 uppercase">{name}</div>
			{dishes?.map(dish => <MenuDishItem key={dish.id} dish={dish} />)}
		</div>
	)
}

export default CategorySection