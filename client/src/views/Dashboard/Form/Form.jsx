import React, { useEffect, useState } from "react"
import { useFormik } from "formik"
import { Button, Input, Select, SelectItem } from "@nextui-org/react"
import Checkbox from "../../../components/Checkbox/Checkbox"
import { useDispatch, useSelector } from "react-redux"
import { createDish, editDish } from "../../../redux/slices/dishesSlice"
import dishServices from "../../../services/dishServices"
import { useParams } from "react-router"
import Spinner from "../../../components/Spinner"
import { formatCategory } from "../../../utilities/formatCategory"

const initialValues = { title: "", category: "", description: "", image: "", celiac: false, vegetarian: false }
const initialCategories = [
	{
		label: null,
		value: null,
	},
]

const Form = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const [categories, setCategories] = useState(initialCategories)
	const { token } = useSelector(state => state.login.data)
	const { loading } = useSelector(state => state.dishes)
	const { values, handleChange, handleSubmit, setValues } = useFormik({
		initialValues,
		onSubmit: values => {
			id ? dispatch(editDish({ id, values, token })) : dispatch(createDish({ values, token }))
		},
	})

	useEffect(() => {
		//si hay un id en params, trae los datos del dish y rellena el formulario
		id &&
			dishServices.getOneDish(id, token).then(res => {
				setValues(res.data)
				console.log("autofill response", res.data)
			})
		return () => setValues(initialValues)
	}, [id])

	useEffect(() => {
		dishServices.getCategories(token).then(res => {
			console.log(res)
			setCategories(res.data)
		})
	}, [])

	console.log("cateogories", categories)

	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<label htmlFor="title">Name</label>
			<Input id="title" name="title" type="text" onChange={handleChange} value={values.title} />
			<label htmlFor="description">Description</label>
			<Input id="description" name="description" type="text" onChange={handleChange} value={values.description} />
			<label htmlFor="category">Category</label>
			<Select
				name="category"
				label="Category"
				placeholder="Select a category"
				selectionMode="single"
				selectedKeys={values.category ? [values.category] : null}
				className=""
				onChange={handleChange}
			>
				{categories?.map(option => (
					<SelectItem key={option.value} value={option.value}>
						{option.label}
					</SelectItem>
				))}
			</Select>
			<label htmlFor="price">Price</label>
			<Input id="price" name="price" type="number" onChange={handleChange} value={values.price} />
			<label htmlFor="image">Image URL</label>
			<Input id="image" name="image" type="text" onChange={handleChange} value={values.image} />
			<label htmlFor="celiac">Gluten</label>
			<Checkbox
				onChange={e => handleChange({ target: { name: "celiac", value: e.target.checked } })}
				name="celiac"
				label="Gluten Free"
				isSelected={values.celiac}
			/>
			<Checkbox
				onChange={e => handleChange({ target: { name: "vegetarian", value: e.target.checked } })}
				name="vegetarian"
				label="Vegetarian"
				isSelected={values.vegetarian}
			/>
			{/* <Button type="submit">Submit</Button> */}
			{!loading ? (
				<Button color="primary" type="submit" variant="solid">
					{id ? "Edit" : "Create"}
				</Button>
			) : (
				<Button variant="solid" color="primary" spinner={<Spinner />} isLoading>
					Loading
				</Button>
			)}
		</form>
	)
}

export default Form

// {
// 	"title":"Fideos con Manteca y Limón",
// 	"description":"Esto no deberia postearse, cuidado",
// 	"category":"Platos principales",
// 	"price":10,
// 	"image":"",
// 	"celiac":true,
// 	"vegetarian":true,
// 	"archived":false
// }
