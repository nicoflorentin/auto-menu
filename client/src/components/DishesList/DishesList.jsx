import React, { useEffect } from "react"
import { deleteDish, archiveDish, clearDishes } from "../../redux/slices/dishesSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { DeleteIcon, EditIcon, ArchiveIcon } from "../../assets/icons"
import DishItem from "../DishItem/DishItem"
import Loading from "components/Loading/Loading"
import Title from "components/Title/Title"

// pasar a archivo de constante

const categoriesOrder = ["platosPrincipales", "entrantes", "bebidas", "postres"]

const RenderDishes = ({dishes, currentConfig, routeName }) =>
(
	<div className="flex flex-wrap gap-5">
		{dishes?.filter(dish => (routeName === "archived" ? dish.archived : !dish.archived))
			.sort((a, b) => categoriesOrder.indexOf(a.category) - categoriesOrder.indexOf(b.category) ).map(dish => (
				<DishItem config={currentConfig} dish={dish} key={dish.id} iconSize="20" archived={dish.archived} />
			))}
	</div>
)

const DishesList = ({ routeName, title }) => {

	const configList = [
		{
			action: id => {
				navigate(`/dashboard/edit/${id}`)
			},
			archive: (dish, token) => {
				dispatch(archiveDish({ dish, token }))
			},
			label: "Edit",
			route: "edit",
			icon: <EditIcon size={20} />,
			archiveIcon: <ArchiveIcon size={20} className='opacity-75' />,
		},
		{
			action: (id, token) => {
				dispatch(deleteDish({ id, token }))
			},
			label: "Delete",
			route: "delete",
			icon: <DeleteIcon size={20} className='text-red-800' />,
		},
		{
			action: id => {
				navigate(`/dashboard/edit/${id}`)
			},
			archive: (dish, token) => {
				dispatch(archiveDish({ dish, token }))
			},
			label: "Archived",
			route: "archived",
			icon: <EditIcon size={20} />,
			archiveIcon: <ArchiveIcon size={20} color='gray' />,
		},
	]

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { loading, dishes } = useSelector(state => state.dishes)
	console.warn({dishes})

	const currentConfig = configList.find(config => config.route === routeName)

	useEffect(() => {
		return () => dispatch(clearDishes())
	}, [routeName])


	return (
		<div className="">
			<Title>{title}</Title>
			<div className="">{loading ? <Loading /> : <RenderDishes dishes={dishes} currentConfig={currentConfig} routeName={routeName} />}</div>
		</div>
	)
}

export default DishesList
