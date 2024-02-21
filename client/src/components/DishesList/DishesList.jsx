import React, { useEffect } from "react"
import { fetchDishes, clearDishes, deleteDish } from "../../redux/slices/dishesSlice"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useMatch, useNavigate } from "react-router-dom"
import { DeleteIcon, EditIcon } from "../../assets/icons"
import DishItem from "../DishItem/DishItem"

const DishesList = () => {
	const actions = [
		{
			action: id => {
				navigate(`/dashboard/edit/${id}`)
			},
			label: "Edit",
			route: "edit",
			icon: <EditIcon size={20} />,
		},
		{
			action: (id, token) => {
				dispatch(deleteDish({id, token}))
			},
			label: "Delete",
			route: "delete",
			icon: <DeleteIcon size={20} />,
		},
	]

	const navigate = useNavigate()
	const match = useMatch("dashboard/:actionRoute")
	const { actionRoute } = match.params
	const dispatch = useDispatch()
	const { data: loggedUserData } = useSelector(state => state.login)
	const { loading, dishes } = useSelector(state => state.dishes)

	useEffect(() => {
		dispatch(fetchDishes(loggedUserData.token))

		return () => dispatch(clearDishes())
	}, [dispatch])

	const renderDishes = dishes?.map(dish => {
		return (
			<DishItem action={actions.find(action => action.route === actionRoute)} dish={dish} key={dish.id} iconSize="20" />
		)
	})

	return (
		<div className="">
			<ul className="flex flex-wrap gap-5">{loading ? <p>loading</p> : renderDishes}</ul>
		</div>
	)
}

export default DishesList
