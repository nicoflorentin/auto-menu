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
import { openWidget } from "utilities/cloudinary"
import Loading from "components/Loading/Loading"
import MenuDishItem from "views/ClientView/Menu/MenuDishItem/MenuDishItem"
import { useRef } from "react"
import Subtitle from "components/Subtitle/Subtitle"

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
	const [loadingFields, setLoadingFields] = useState(false)
	const [loadingWidget, setLoadingWidget] = useState(false)
	const [categories, setCategories] = useState(initialCategories)
	const { loading, error } = useSelector((state) => state.dishes)
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const originalDishValues = useRef(initialValues)
	const { id } = useParams()
	const token = useToken()
	const { values, handleChange, handleSubmit, setValues } = useFormik({
		initialValues,
		onSubmit: (values) => {
			console.log("Submitted form with values:", values)
		},
	})
	const navigate = useNavigate()

	const loadingPlaceholderHandler = () => {
		return loading ? 'Loading...' : ''
	}

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
					navigate('/admin/dashboard/dishes')
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
			dishServices.getOneDish(id, token).then((res) => {
				setValues(res.data)
				originalDishValues.current = res.data
				setLoadingFields(false)
			})
		}
		return () => {
			originalDishValues.current = initialValues
			setValues(initialValues)
		}
	}, [id, token])

	useEffect(() => {
		dishServices.getCategories(token).then((res) => {
			setCategories(res.data)
		})
	}, [])

	const resetImageHandler = () => {
		setValues({ ...values, image: '' })
	}

	const widgetHandler = () => {
		setLoadingWidget(true)
		openWidget((error, result) => {
			if (!error && result && result.event === "success") {
				console.log('Done. Image info: ', result.info)
				setValues({ ...values, image: result.info.secure_url })
				setLoadingWidget(false)
			}
			setLoadingWidget(false)
		}
		)
	}

	const fieldsWasChanged =
		originalDishValues.current.title !== values.title ||
		originalDishValues.current.description !== values.description ||
		originalDishValues.current.category !== values.category ||
		originalDishValues.current.image !== values.image ||
		originalDishValues.current.price !== values.price ||
		originalDishValues.current.celiac !== values.celiac ||
		originalDishValues.current.vegetarian !== values.vegetarian;

	console.log('original values', originalDishValues);
	console.log('values', values);
	console.log('fields changed', fieldsWasChanged)

	return (
		<>
			<div className="flex">
				<Title>{title}</Title>

				{fieldsWasChanged &&
					<div className="ml-auto flex items-center">
						{!loading ? (<div>
							{id && <span className="text-sm mr-2">There are unsaved changes</span>}
							<Button color='primary' variant='solid' onPress={onOpen} isDisabled={loadingFields}>
								{id ? "Save" : "Create"}
							</Button>
						</div>
						) : (
							<Button variant='solid' color='primary' spinner={<Spinner />} isLoading>
								Loading
							</Button>
						)}
					</div>}
			</div>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<Subtitle htmlFor='title'>Name</Subtitle>
				<Input
					id='title'
					name='title'
					type='text'
					placeholder={loadingPlaceholderHandler()}
					onChange={handleChange}
					value={values.title}
					isDisabled={loadingFields || loading}
				/>
				<Subtitle htmlFor='description'>Description</Subtitle>
				<Input
					id='description'
					name='description'
					type='text'
					placeholder={loadingPlaceholderHandler()}
					onChange={handleChange}
					value={values.description}
					isDisabled={loadingFields || loading}
					className=""
				/>
				<Subtitle htmlFor='category'>Category</Subtitle>
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
				<Subtitle htmlFor='price'>Price</Subtitle>
				<Input
					id='price'
					name='price'
					type={loadingFields ? 'text' : 'number'}
					placeholder={loadingPlaceholderHandler()}
					onChange={handleChange}
					value={values.price}
					isDisabled={loadingFields || loading}
				/>
				<Subtitle htmlFor='image'>Image</Subtitle>
				<div className="flex gap-3">
					<Button className="" color='secondary' onPress={() => widgetHandler()} isDisabled={loadingFields || loadingWidget}>
						Select image
					</Button>
					<Button className="" color='warning' onPress={() => resetImageHandler()} isDisabled={loadingFields || loadingWidget}>
						Delete Image
					</Button>
					{loadingWidget && <span className="ml-5"><Loading content='Opening window' /></span>}
				</div>
				{/* <label htmlFor='celiac'>Gluten</label> */}
				<div className="flex gap-5">
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
				</div>
				<label htmlFor='preview'>Preview</label>
				<MenuDishItem dish={values} className='w-96 text-zinc-900' />
				<AskConfirmationModal isOpen={isOpen} onOpenChange={onOpenChange} acceptFunction={submitHandler} />
				<ErrorModal error={error} isOpen={error} acceptFunction={() => dispatch(clearError())} />
			</form>
			<Toaster></Toaster>
		</>
	)
}

export default Form