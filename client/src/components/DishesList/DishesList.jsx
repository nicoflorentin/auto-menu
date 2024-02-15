import React, { useEffect } from "react"
import { fetchDishes, clearDishes } from "../../redux/slices/dishesSlice"
import { useDispatch, useSelector } from "react-redux"

const DishItem = ({ dish }) => {
	const { category, celiac, description, id, image, price, title, vegetarian } = dish
	return (
		<div className="flex flex-col border border-slate-200 w-96 p-2">
			<div className="flex">
				<span className="font-semibold">{title}</span>
				<span className="ml-auto">action</span>
			</div>
			<span className="text-xs">{category}</span>
			<p>{description}</p>
			<span className="uppercase text-xs mt-auto text-end font-semibold">{vegetarian ? "Veggie" : ""}</span>
			<span>{celiac ? "Gluten Free" : ""}</span>
			<p className="text-end text-xl mt-auto">{price}</p>
		</div>
	)
}

const Main = () => {
	const dispatch = useDispatch()
	const { data: loggedUserData } = useSelector(state => state.login)
	const { loading, dishes } = useSelector(state => state.dishes) // Usa el slice para los platos

	useEffect(() => {
		dispatch(fetchDishes(loggedUserData.token))

		return () => dispatch(clearDishes())
	}, [dispatch])

	const renderDishes = dishes?.map(dish => <DishItem dish={dish} key={dish.id} />)

	return (
		<div className="">
			<ul className="flex flex-wrap gap-5">{loading ? <p>loading</p> : renderDishes}</ul>
		</div>
	)
}

export default Main
