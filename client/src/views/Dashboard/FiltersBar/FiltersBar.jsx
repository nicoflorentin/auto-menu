import React, { useEffect, useState } from "react"
import { useFormik } from "formik"
import FilterElement from "../../../components/FilterElement/FilterElement"
import dishServices from "../../../services/dishServices"
import { useDispatch } from "react-redux"
import { fetchDishes } from "../../../redux/slices/dishesSlice"
import Checkbox from "../../../components/Checkbox/Checkbox"
import useToken from "../../../hooks/useToken"
import logo from 'assets/img/page-logo.png'
import SearchBar from "components/SearchBar/SearchBar"
import { useParams } from "react-router-dom"
import { GlutenFreeIcon, SearchIcon, VegetarianIcon } from "assets/icons"

const FiltersBar = ({ routeName }) => {
	const dispatch = useDispatch()
	const [categories, setCategories] = useState([])
	const token = useToken()
	const { id } = useParams()
	const mustRenderForm = routeName !== 'restaurant' && routeName !== 'add' && !id
	// const [orderFilters] = useState([
	// 	{ label: "High first", value: "descendant" },
	// 	{ label: "Low first", value: "ascendant" },
	// ])

	const initialValues = {
		celiac: false,
		vegetarian: false,
		order: '',
		category: '',
		query: ''
	}

	const iconSize = 25

	const { values, handleChange, setValues } = useFormik({
		initialValues,
	})

	useEffect(() => {
		dishServices.getCategories().then(res => setCategories(res.data))
	}, [])

	useEffect(() => {
		token &&
			dispatch(
				fetchDishes({
					token,
					// filters: { ...values, archived: routeName === "archived" },
					filters: {
						celiac: values.celiac,
						vegetarian: values.vegetarian,
						order: values.order,
						category: values.category,
						name: values.query,
						archived: routeName === "archived"
					}
				})
			)
	}, [values, routeName, token])

	// const resetFilters = () => {
	// 	console.log("reset filters")
	// 	setValues(initialValues)
	// }

	return (
		<div className="flex flex-col items-center sm:flex-row">
			<img src={logo} alt="" className="sm:w-44 w-32 sm:mx-0 m-auto mt-2" />
			{/* {mustRenderForm || false && <form className="ml-auto sm:mr-10 self-end"> */}
			{mustRenderForm && <form className="pt-5 sm:w-auto sm:ml-auto sm:mr-10 sm:self-end">
				<div className="flex flex-row flex-wrap gap-1 sm:gap-2">
					<div className="flex gap-2 order-2 items-center w-full px-10 sm:px-0 sm:w-auto sm:order-first">
						<Checkbox
							onChange={(e) => handleChange({ target: { name: "vegetarian", value: e.target.checked } })}
							name="vegetarian"
							label="Vegetarian"
							image={<VegetarianIcon className={'text-green-600'} size={iconSize} />}
							isSelected={values.vegetarian}
							size="sm"
						/>
						<Checkbox
							onChange={(e) => handleChange({ target: { name: "celiac", value: e.target.checked } })}
							name="celiac"
							label="Gluten Free"
							image={<GlutenFreeIcon className={'text-white'} size={iconSize} />}
							isSelected={values.celiac}
							size="sm"
						/>
						<div className="flex-grow" /> {/* Este div ocupa el espacio restante */}
						<FilterElement
							label={!values.category ? 'Category' : ''}
							name="category"
							selectionMode="single"
							value={values.category}
							onChange={handleChange}
							options={categories}
							radius="md"
							size="xs"
							className="ml-auto"
						/>
					</div>
					{/* <FilterElement
						label="Order by price"
						name="order"
						selectionMode="single"
						// selectedKeys=""
						onChange={handleChange}
						options={orderFilters}
						radius="md"
					/> */}
					<SearchBar
						name='query'
						value={values.query}
						onChange={handleChange}
						size
						type="email"
						placeholder="Search"
						endContent={<SearchIcon size='25' className='text-zinc-500' />}
						className='w-screen px-3 sm:p-0 sm:w-80'
					/>
				</div>
			</form>}
		</div>

	)
}

export default FiltersBar
