const CategorySection = ({dishes, name}) => {

	return (
		<div className="border border-black">
			<div>{name}</div>
			{dishes?.map(dish => <p>{dish.title}</p>)}
		</div>
	)
}

export default CategorySection