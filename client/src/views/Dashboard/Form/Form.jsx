import React, { useEffect, useState } from "react"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { Button, Input, Select, SelectItem, useDisclosure } from "@nextui-org/react"
import Checkbox from "../../../components/Checkbox/Checkbox"
import { useDispatch, useSelector } from "react-redux"
import { createDish, editDish, clearError } from "../../../redux/slices/dishesSlice"
import dishServices from "../../../services/dishServices"
import { useParams } from "react-router"
import Spinner from "../../../components/Spinner"
import useToken from "../../../hooks/useToken"
import AskConfirmationModal from "../../../components/modals/AskConfirmationModal/AskConfirmationModal"
import ErrorModal from "../../../components/modals/ErrorModal/ErrorModal"
import toast, { Toaster } from "react-hot-toast"
import Title from "components/Title/Title"

const initialValues = {
	title: "",
	category: "",
	description: "",
	image: "",
	price: "",
	celiac: false,
	vegetarian: false,
}

const initialCategories = [
	{
		// label: "",
		value: "",
	},
]

const Form = ({ title }) => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const [categories, setCategories] = useState(initialCategories)
	const token = useToken()
	const { loading, error } = useSelector((state) => state.dishes)
	const [loadingFields, setLoadingFields] = useState(false)
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const { values, handleChange, handleSubmit, setValues } = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log("Submitted form with values:", values)
		},
	})
	const navigate = useNavigate()

	const submitHandler = () => {
		// si hay id en params edita un dish y si no hay, crea un dish
		id
			? dispatch(editDish({ id, values, token })).then((res) => {
				console.log(res);
				// navigate("/dashboard/dishes")
				!res.error && toast(
					`${values.title} edited successfully!`, {
					position: 'bottom-center'
				})
				setTimeout(() => {
					navigate('/dashboard/dishes')
				}, 2000);
			})
			: dispatch(createDish({ values, token })).then((res) => {
				console.log("res", res)
				!res.error && toast(
					`${values.title} created successfully!`, {
					position: 'bottom-center'
				})
				setValues(initialValues)
			})
	}

	useEffect(() => {
		//si hay un id en params, trae los datos del dish y rellena el formulario con los campos del dish
		if (id) {
			setLoadingFields(true)
			setValues({
				title: "Loading...",
				category: "Loading...",
				description: "Loading...",
				image: "Loading...",
				price: "Loading...",
				celiac: false,
				vegetarian: false,
			})

			dishServices.getOneDish(id, token).then((res) => {
				setValues(res.data)
				setLoadingFields(false)
			})
		}
		return () => setValues(initialValues)
	}, [id, token])

	useEffect(() => {
		dishServices.getCategories(token).then((res) => {
			console.log(res)
			setCategories(res.data)
		})
	}, [])

	return (
		<>
			<Title>{title}</Title>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<label htmlFor='title'>Name</label>
				<Input
					id='title'
					name='title'
					type='text'
					onChange={handleChange}
					value={values.title}
					isDisabled={loadingFields || loading}
				/>
				<label htmlFor='description'>Description</label>
				<Input
					id='description'
					name='description'
					type='text'
					onChange={handleChange}
					value={values.description}
					isDisabled={loadingFields || loading}
				/>
				<label htmlFor='category'>Category</label>
				<Select
					name='category'
					label='Category'
					placeholder='Select a category'
					selectionMode='single'
					selectedKeys={values.category ? [values.category] : null}
					className=''
					onChange={handleChange}
					isDisabled={loadingFields || loading}
				>
					{categories?.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</Select>
				<label htmlFor='price'>Price</label>
				<Input
					id='price'
					name='price'
					type='number'
					onChange={handleChange}
					value={values.price}
					isDisabled={loadingFields || loading}
				/>
				{/* <label htmlFor='image'>Image URL</label>
				<Input
					id='image'
					name='image'
					type='text'
					onChange={handleChange}
					value={values.image}
					isDisabled={loadingFields || loading}
				/> */}
				{/* <label htmlFor='celiac'>Gluten</label> */}
				<Checkbox
					onChange={(e) => handleChange({ target: { name: "celiac", value: e.target.checked } })}
					name='celiac'
					label='Gluten Free'
					isSelected={values.celiac}
					isDisabled={loadingFields || loading}
				/>
				<Checkbox
					onChange={(e) => handleChange({ target: { name: "vegetarian", value: e.target.checked } })}
					name='vegetarian'
					label='Vegetarian'
					isSelected={values.vegetarian}
					isDisabled={loadingFields || loading}
				/>
				{!loading ? (
					<Button color='primary' variant='solid' onPress={onOpen} isDisabled={loadingFields}>
						{id ? "Edit" : "Create"}
					</Button>
				) : (
					<Button variant='solid' color='primary' spinner={<Spinner />} isLoading>
						Loading
					</Button>
				)}
				<AskConfirmationModal isOpen={isOpen} onOpenChange={onOpenChange} acceptFunction={submitHandler} />
				<ErrorModal error={error} isOpen={error} acceptFunction={() => dispatch(clearError())} />
			</form>
			<Toaster></Toaster>
		</>
	)
}

export default Form
