import React, { useEffect } from "react"
import { fetchDishes } from "../../../redux/slices/dishesSlice"
import { useDispatch, useSelector } from "react-redux"

const Main = () => {
	const dispatch = useDispatch()
	const { loading, error, data: response } = useSelector(state => state.dishes) // Usa el slice para los platos


	useEffect(() => {
		dispatch(fetchDishes())
	}, [dispatch])

	const renderDishes = !response.error && response.data?.map(dish => <div>{dish.title}</div>)

	return <div>
		<h1>Dishes</h1>
		<ul>
			{loading ? <p>loading</p> : renderDishes}
		</ul>
	</div>
}

export default Main
