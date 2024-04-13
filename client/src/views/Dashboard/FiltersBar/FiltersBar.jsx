import React, { useEffect, useState } from "react"
import { useFormik } from "formik"
import FilterElement from "../../../components/FilterElement/FilterElement"
import dishServices from "../../../services/dishServices"
import { useDispatch } from "react-redux"
import { fetchDishes } from "../../../redux/slices/dishesSlice"
import Checkbox from "../../../components/Checkbox/Checkbox"
import useToken from "../../../hooks/useToken"
import logo from 'assets/page-logo.png'
import SearchBar from "components/SearchBar/SearchBar"
import { PencilIcon } from "assets/icons"

const FiltersBar = ({ routeName }) => {
	const dispatch = useDispatch()
	const [categories, setCategories] = useState([])
	const token = useToken()
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

	console.log(values);

	return (
		<div className="flex items-center h-15">
			<img src={logo} alt="" className="w-44" />
			{routeName !== 'restaurant' && <form className="ml-auto mr-10 self-end">
				<div className="flex items-center gap-2 px-1">
					<Checkbox
						onChange={e => handleChange({ target: { name: "vegetarian", value: e.target.checked } })}
						name="vegetarian"
						label="Vegetarian"
						isSelected={values.vegetarian}
						size='sm'
					/>
					<Checkbox
						onChange={e => handleChange({ target: { name: "celiac", value: e.target.checked } })}
						name="celiac"
						label="Gluten Free"
						isSelected={values.celiac}
						size='sm'
					/>
					<FilterElement
						label="Category"
						name="category"
						selectionMode="single"
						value={values.category}
						// selectedKeys=''
						onChange={handleChange}
						options={categories}
						radius="md"
					/>
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
						endContent={
							<PencilIcon size='25' className='text-zinc-500' />
						}
						className='w-40	'
					/>
				</div>
			</form>}
		</div>

	)
}

export default FiltersBar
