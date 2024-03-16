import { useSelector } from "react-redux"
import { formatCategory } from "../../utilities/formatCategory"

const DishItem = ({ dish, config }) => {
	const { token } = useSelector(state => state.login.data)

	const archivedItemStyles = () => {
		return dish.archived ? "text-slate-500" : ""
	}

	const { category, celiac, description, id, image, price, title, vegetarian } = dish
	return (
		<div className={`flex flex-col gap-1 w-72 h- p-2 ${archivedItemStyles()} bg-secondary text-secondary-foreground rounded-small`}>
			<div className="flex gap-1">
				<span className="font-bold">{title}</span>
				<span onClick={config && (() => config.archive(dish, token))} className="ml-auto cursor-pointer hover:scale-125">
					{config && config.archiveIcon}
				</span>
				<span onClick={config && (() => config.action(id, token))} className="cursor-pointer hover:scale-125">
					{config && config.icon}
				</span>
			</div>
			<span className="text-xs">{formatCategory(category)}</span>
			<p className="text-small">{description}</p>
			<span className="uppercase text-xs mt-auto text-end font-semibold">{vegetarian ? "Veggie" : ""}</span>
			<span className="uppercase text-xs mt-auto text-end font-semibold">{celiac ? "Gluten Free" : ""}</span>
			<p className="text-end text-xl mt-auto">{price}</p>
		</div>
	)
}

export default DishItem
