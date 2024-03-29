import { useSelector } from "react-redux"
import { formatCategory } from "../../utilities/formatCategory"
import { VegetarianIcon, GlutenFreeIcon } from 'assets/icons'
import { Button, Chip, Tooltip, useTooltip } from "@nextui-org/react";
import { longStringTrunc } from "utilities/longStringTrunc";

const DishItem = ({ dish, config }) => {
	const { token } = useSelector(state => state.login.data)
	const { category, celiac, description, id, image, price, title, vegetarian } = dish
	const titleMaxLength = 25

	const archivedItemStyles = () => {
		return dish.archived ? "opacity-80 grayscale" : ""
	}

	return (
		<div className={`flex flex-col w-72 h-40 px-2 py-3 ${archivedItemStyles()} bg-secondary text-secondary-foreground rounded-small`}>
			<div className="flex items-center justify-between">
				<Chip color="default" size="sm" variant='solid' className="h-4 px-0 uppercase text-tiny text-secondary rounded">{formatCategory(category)}</Chip>
				{dish.archived && <p className="text-tiny">(Archived)</p>}
				<div className="flex gap-1">
					<span onClick={config && (() => config.archive(dish, token))} className="ml-auto cursor-pointer hover:scale-125">
						{config && config.archiveIcon}
					</span>
					<span onClick={config && (() => config.action(id, token))} className="cursor-pointer hover:scale-125">
						{config && config.icon}
					</span>
				</div>
			</div>
			{title.length > titleMaxLength
				? <Tooltip showArrow={true} placement='top-end' content={title}><p className="font-bold text-medium">{longStringTrunc(title, titleMaxLength)}</p></Tooltip>
				: <p className="font-bold text-medium">{title}</p>
			}
			<p className="text-small">{description}</p>
			<div className="flex mt-auto">
				<p className="text-end text-large font-semibold">{price} <span className="text-medium">USD</span></p>
				<span className="flex ml-auto items-center">
					{vegetarian ? <Tooltip placement='top-end' content="Vegetarian recipe"><div><VegetarianIcon size='23' className='text-green-700' /></div></Tooltip> : ""}
					{celiac ? <Tooltip placement='top-end' content='Gluten Free'><div><GlutenFreeIcon size='25' className='text-foreground' /></div></Tooltip> : ""}
				</span>
			</div>
		</div>
	)
}

export default DishItem
