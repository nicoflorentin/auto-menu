import { useSelector } from "react-redux"
import { formatCategory } from "../../utilities/formatCategory"

const DishItem = ({ dish, config }) => {
	const { token } = useSelector(state => state.login.data)

	const archivedItemStyle = () => {
		return dish.archived ? "text-slate-400" : ""
	}

	const { category, celiac, description, id, image, price, title, vegetarian } = dish
	return (
		<div className={`flex flex-col border border-slate-300 w-96 p-2 ${archivedItemStyle()}`}>
			<div className="flex gap-1">
				<span className="font-semibold">{title}</span>
				<span onClick={config && (() => config.archive(dish, token))} className="ml-auto cursor-pointer hover:scale-125">
					{config && config.archiveIcon}
				</span>
				<span onClick={config && (() => config.action(id, token))} className=" cursor-pointer hover:scale-125">
					{config && config.icon}
				</span>
			</div>
			<span className="text-xs">{formatCategory(category)}</span>
			<p>{description}</p>
			<span className="uppercase text-xs mt-auto text-end font-semibold">{vegetarian ? "Veggie" : ""}</span>
			<span className="uppercase text-xs mt-auto text-end font-semibold">{celiac ? "Gluten Free" : ""}</span>
			<p className="text-end text-xl mt-auto">{price}</p>
		</div>
	)
}

export default DishItem
