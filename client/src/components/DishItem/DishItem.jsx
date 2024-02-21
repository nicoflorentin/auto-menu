import { useSelector } from "react-redux"

const DishItem = ({ dish, action }) => {
	const { token } = useSelector(state => state.login.data)
	
	const { category, celiac, description, id, image, price, title, vegetarian } = dish
	return (
		<div className="flex flex-col border border-slate-200 w-96 p-2">
			<div className="flex">
				<span className="font-semibold">{title}</span>
				<span onClick={action && (() => action.action(id, token))} className="ml-auto cursor-pointer hover:scale-125">
					{action && action.icon}
				</span>
			</div>
			<span className="text-xs">{category}</span>
			<p>{description}</p>
			<span className="uppercase text-xs mt-auto text-end font-semibold">{vegetarian ? "Veggie" : ""}</span>
			<span className="uppercase text-xs mt-auto text-end font-semibold">{celiac ? "Gluten Free" : ""}</span>
			<p className="text-end text-xl mt-auto">{price}</p>
		</div>
	)
}

export default DishItem
