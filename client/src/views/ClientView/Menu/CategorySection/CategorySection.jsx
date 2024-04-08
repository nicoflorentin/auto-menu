import MenuDishItem from "views/ClientView/Menu/MenuDishItem/MenuDishItem"

const CategorySection = ({dishes, name}) => {

	return (
		<div className="mb-7">
			<div className="font-bold text-zinc-700 text-lg mb-2">{name}</div>
			{dishes?.map(dish => <MenuDishItem dish={dish}/>)}
		</div>
	)
}

export default CategorySection