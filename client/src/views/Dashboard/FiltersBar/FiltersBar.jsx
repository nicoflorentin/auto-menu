import React, { useEffect, useState } from "react"
import { useFormik } from "formik"
import FilterElement from "../../../components/FilterElement/FilterElement"
import dishServices from "../../../services/dishServices"
import { useDispatch, useSelector } from "react-redux"
import { fetchDishes } from "../../../redux/slices/dishesSlice"

const FiltersBar = () => {
	const dispatch = useDispatch()
	const {token} = useSelector(state => state.login.data)
	const [categories, setCategories] = useState([])
	const [orderFilters] = useState([
		{ label: "High first", value: "descendant" },
		{ label: "Low first", value: "ascendant" },
	])

	useEffect(() => {
		dishServices.getCategories().then(res => setCategories(res.data))
	}, [])

	const { values, handleChange, handleSubmit } = useFormik({
		initialValues: {
			category: "",
			order: "",
			celiac: false,
			vegetarian: false,
		},
	})

	useEffect(() => {
		dispatch(fetchDishes(token, values)).then(() => console.log('fetch dishes with filters', values))
	}, [values])

	return (
		<form>
			<div className="flex justify-end gap-5 mb-1 px-3">
				<FilterElement
					label="Category"
					name="category"
					radius="md"
					selectionMode="single"
					selectedKeys=""
					onChange={handleChange}
					options={categories}
				/>
				<FilterElement
					label="Order by price"
					name="order"
					radius="md"
					selectionMode="single"
					selectedKeys=""
					onChange={handleChange}
					options={orderFilters}
				/>
			</div>
			{/* Aquí puedes agregar botones de submit o cualquier otro elemento del formulario */}
			<button type="submit">APPLY FILTERS</button>
		</form>
	)
}

export default FiltersBar
