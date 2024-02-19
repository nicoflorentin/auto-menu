import React from "react"
import { useFormik } from "formik"

const initialValues = { email: "" }

const FormAdd = () => {
	const { formik, values, handleChange, handleSubmit } = useFormik({
		initialValues,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		},
	})


	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="title">Name</label>
			<input id="title" name="title" type="text" onChange={handleChange} value={values.email} />
			<label htmlFor="email">Email Address</label>
			<input id="email" name="email" type="email" onChange={handleChange} value={values.email} />
			<label htmlFor="email">Email Address</label>
			<input id="email" name="email" type="email" onChange={handleChange} value={values.email} />

			<button type="submit">Submit</button>
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