import React from "react"
import { useFormik } from "formik"
import { Button, Input, Select, SelectItem } from "@nextui-org/react"
import Checkbox from "../../../components/Checkbox/Checkbox"

const initialValues = { title: "", category: "", description: "", glutenFree: false, vegetarian: false }
const options = [
	{ label: "Platos principal", value: "plato-principal" },
	{ label: "Postre", value: "postre" },
	{ label: "Bebida", value: "bebida" },
]

const FormAdd = () => {
	const { values, handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		},
	})

	console.log(values)

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
				className="max-w-xs"
				onChange={handleChange}
			>
				{options.map(option => (
					<SelectItem key={option.value} value={option.value}>
						{option.label}
					</SelectItem>
				))}
			</Select>
			<label htmlFor="gluten">Gluten</label>
			<Checkbox
				onChange={(e) => handleChange({ target: { name: "glutenFree", value: e.target.checked } })}
				name="gluten"
        label='Gluten Free'
			/>
			<Checkbox
				onChange={(e) => handleChange({ target: { name: "vegetarian", value: e.target.checked } })}
				name="vegetarian"
        label='Vegetarian'
			/>
			<Button type="submit">Submit</Button>
		</form>
	)
}

export default FormAdd

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
