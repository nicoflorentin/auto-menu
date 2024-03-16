import React, { useEffect, useState } from "react"
import { useFormik } from "formik"
import FilterElement from "../../../components/FilterElement/FilterElement"
import dishServices from "../../../services/dishServices"
import { useDispatch } from "react-redux"
import { clearDishes, fetchDishes } from "../../../redux/slices/dishesSlice"
import Checkbox from "../../../components/Checkbox/Checkbox"
import useToken from "../../../hooks/useToken"
import { Button } from "@nextui-org/button"

const FiltersBar = ({ routeName }) => {
	const dispatch = useDispatch()
	const [categories, setCategories] = useState([])
	const token = useToken()
	const [orderFilters] = useState([
		{ label: "High first", value: "descendant" },
		{ label: "Low first", value: "ascendant" },
	])

	const initialValues = {
		celiac: false,
		vegetarian: false,
		order: '',
		category: '',
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
					filters: { ...values, archived: routeName === "archived" },
				})
			)
	}, [values, routeName, token])

	const resetFilters = () => {
		console.log("reset filters")
		setValues(initialValues)
		// setUpdate(state=> !state)
	}

	return (
		<form>
			<div className="flex justify-end gap-5 mb-1 px-3">
				<Checkbox
					onChange={e => handleChange({ target: { name: "vegetarian", value: e.target.checked } })}
					name="vegetarian"
					label="Vegetarian"
					isSelected={values.vegetarian}
				/>
				<Checkbox
					onChange={e => handleChange({ target: { name: "celiac", value: e.target.checked } })}
					name="celiac"
					label="Gluten Free"
					isSelected={values.celiac}
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
				<FilterElement
					label="Order by price"
					name="order"
					selectionMode="single"
					// selectedKeys=""
					onChange={handleChange}
					options={orderFilters}
					radius="md"
				/>
				{/* aca iria la searchbar */}
				<Button onClick={() => resetFilters()}>Reset</Button>
			</div>
		</form>
	)
}

export default FiltersBar
