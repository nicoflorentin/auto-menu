import MenuDishItem from "views/ClientView/Menu/MenuDishItem/MenuDishItem"

const CategorySection = ({dishes, name}) => {

	return (
		<div className="border border-black">
			<div className="font-bold">{name}</div>
			{dishes?.map(dish => <MenuDishItem dish={dish}/>)}
		</div>
	)
}

export default CategorySection