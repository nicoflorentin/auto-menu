import React, { useEffect } from "react"
import { fetchDishes } from "../../../../redux/slices/dishesSlice"
import { useDispatch, useSelector } from "react-redux"
import withAuth from "../../../Login/withAuth"

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

const Main = ({loggedUserData}) => {
	const dispatch = useDispatch()
	const { loading, error, data: response } = useSelector(state => state.dishes) // Usa el slice para los platos

	useEffect(() => {
		dispatch(fetchDishes(loggedUserData.token))
	}, [dispatch])

	const renderDishes = !response.error && response.data?.map(dish => <DishItem dish={dish} />)

	return (
		<div className="">
			<ul className="flex flex-wrap gap-5 justify-center">{loading ? <p>loading</p> : renderDishes}</ul>
		</div>
	)
}

export default withAuth(Main)
