import React, { useEffect } from "react"
import { fetchDishes, clearDishes } from "../../redux/slices/dishesSlice"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useMatch, useNavigate } from "react-router-dom"
import { DeleteIcon, EditIcon } from "../../assets/icons"

const DishItem = ({ dish, action, iconSize }) => {
	const { category, celiac, description, id, image, price, title, vegetarian } = dish
	return (
		<div className="flex flex-col border border-slate-200 w-96 p-2">
			<div className="flex">
				<span className="font-semibold">{title}</span>
				<span onClick={action && (() => action.action(id))} className="ml-auto">
					{action && action.icon}
				</span>
			</div>
			<span className="text-xs">{category}</span>
			<p>{description}</p>
			<span className="uppercase text-xs mt-auto text-end font-semibold">{vegetarian ? "Veggie" : ""}</span>
			<span>{celiac ? "Gluten Free" : ""}</span>
			<p className="text-end text-xl mt-auto">{price}</p>
		</div>
	)
}

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
			action: () => {
				alert("DELETE")
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
	const { loading, dishes } = useSelector(state => state.dishes) // Usa el slice para los platos

	useEffect(() => {
		dispatch(fetchDishes(loggedUserData.token))

		return () => dispatch(clearDishes())
	}, [dispatch])

	const renderDishes = dishes?.map(dish => (
		<DishItem action={actions.find(action => action.route === actionRoute)} dish={dish} key={dish.id} iconSize="20" />
	))

	return (
		<div className="">
			<ul className="flex flex-wrap gap-5">{loading ? <p>loading</p> : renderDishes}</ul>
		</div>
	)
}

export default DishesList
