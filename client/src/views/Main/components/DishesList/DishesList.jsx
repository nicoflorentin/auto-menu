import React, { useEffect } from "react"
import { fetchDishes } from "../../../../redux/slices/dishesSlice"
import { useDispatch, useSelector } from "react-redux"

const DishItem = ({ dish }) => {
	const { category, celiac, description, id, image, price, title, vegetarian } = dish
	return <div className="flex flex-col border border-slate-200 w-96 p-2">
		<h2 className="font-semibold">{title}</h2>
		<span className="text-xs">{category}</span>
		<p>{description}</p>
		<span className="uppercase text-xs mt-auto text-end font-semibold">{vegetarian ? 'Veggie' : ''}</span>
		<span>{celiac ? 'Gluten Free' : ''}</span>
		<p className="text-end text-xl mt-auto">{price}</p>
		</div>
}

const Main = () => {
	const dispatch = useDispatch()
	const { loading, error, data: response } = useSelector(state => state.dishes) // Usa el slice para los platos

	useEffect(() => {
		dispatch(fetchDishes())
	}, [dispatch])

	const renderDishes = !response.error && response.data?.map(dish => <DishItem dish={dish} />)

	return (
		<div className="m-10">
			<h1>Dishes</h1>
			<ul className="flex flex-wrap gap-10">{loading ? <p>loading</p> : renderDishes}</ul>
		</div>
	)
}

export default Main
