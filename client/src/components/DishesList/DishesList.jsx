import React, { useEffect, useState } from "react"
import { fetchDishes, clearDishes, deleteDish, editDish, archiveDish } from "../../redux/slices/dishesSlice"
import { useDispatch, useSelector } from "react-redux"
import { useMatch, useNavigate } from "react-router-dom"
import { DeleteIcon, EditIcon, ArchiveIcon } from "../../assets/icons"
import DishItem from "../DishItem/DishItem"
import FiltersBar from "../../views/Dashboard/FiltersBar/FiltersBar"

const DishesList = () => {
	const configList = [
		{
			action: id => {
				navigate(`/dashboard/edit/${id}`)
			},
			archive: (id, values, token) => {
				dispatch(archiveDish({ id, values, token }))
			},
			label: "Edit",
			route: "edit",
			icon: <EditIcon size={20} />,
			archiveIcon: <ArchiveIcon size={20} color="black" />,
		},
		{
			action: (id, token) => {
				dispatch(deleteDish({ id, token }))
			},
			label: "Delete",
			route: "delete",
			icon: <DeleteIcon size={20} />,
		},
		{
			action: id => {
				navigate(`/dashboard/edit/${id}`)
			},
			archive: (id, values, token) => {
				dispatch(archiveDish({ id, values, token }))
			},
			label: "Archived",
			route: "archived",
			icon: <EditIcon size={20} />,
			archiveIcon: <ArchiveIcon size={20} color="black" />,
		},
	]

	const navigate = useNavigate()
	const match = useMatch("dashboard/:actionRoute")
	const { actionRoute } = match.params
	const [filters, setFilters] = useState({
		archived: actionRoute === "archived",
	})

	const dispatch = useDispatch()
	const { token } = useSelector(state => state.login.data)
	const { loading, dishes } = useSelector(state => state.dishes)

	console.log(dishes)

	useEffect(() => {
		setFilters({
			archived: actionRoute === "archived",
		})
		// return () => dispatch(clearDishes())
	}, [])

	useEffect(() => {
		console.log("dishes fetch with filters")
		dispatch(fetchDishes({ token, filters }))

		// return () => dispatch(clearDishes())
	}, [dispatch, filters])

	const currentConfig = configList.find(config => config.route === actionRoute)
	console.log("Current config", currentConfig)

	const RenderDishes = () => {
		const toShowDishes = dishes?.filter(dish => {
			if (currentConfig?.route === "archived") {
				return dish.archived === true
			} else {
				return dish.archived === false
			}
		})
		console.log(toShowDishes)
		return (
			<div>
				<div className="flex flex-wrap gap-5">
					{toShowDishes.map(dish => (
						<DishItem config={currentConfig} dish={dish} key={dish.id} iconSize="20" archived={dish.archived} />
					))}
				</div>
			</div>
		)
	}

	return (
		<div className="">
			<FiltersBar />
			<ul>{loading ? <p>loading</p> : <RenderDishes />}</ul>
		</div>
	)
}

export default DishesList
