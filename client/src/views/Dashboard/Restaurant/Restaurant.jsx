import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Loading from "components/Loading/Loading";
import Subtitle from "components/Subtitle/Subtitle";
import Title from "components/Title/Title";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editRestaurantById, fetchRestaurantById } from "redux/slices/restaurantSlice";
import { openWidget } from "utilities/cloudinary";

const Restaurant = () => {

	const [restaurantLoading, setRestaurantLoading] = useState(false)
	const [loadingWidget, setLoadingWidget] = useState(false)
	const { restaurantId, token } = useSelector(state => state.login.data)
	const { name, description, image } = useSelector(state => state.restaurant.data)
	const dispatch = useDispatch()
	const { values, handleChange, handleSubmit, setValues } = useFormik({
		initialValues: {
			name,
			description,
			image
		},
		onSubmit: (values) => {
			console.log("Submitted form with values:", values)
		},
	})

	const fieldsWasChanged = name !== values.name || description !== values.description || image !== values.image

	useEffect(() => {
		if (!name) {
			setRestaurantLoading(true)
			dispatch(fetchRestaurantById({ restaurantId, token }))
				.then((res) => {
					const { name, image, description } = res.payload.data
					setValues({ name, image, description })
					setRestaurantLoading(false)
				})
		}
	}, [])

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

	const submitHandler = () => {
		dispatch(editRestaurantById({ restaurantId, body: { ...values }, token }))
	}

	return (
		<div className="flex flex-col gap-5">
			<Title>Restaurant Configuration</Title>
			<div className="flex gap-4">
				<div className="grow">
					<Subtitle>Restaurant name</Subtitle>
					<Input
						// className="w-96"
						id='name'
						name='name'
						type='text'
						onChange={handleChange}
						value={values.name}
						isDisabled={restaurantLoading || loadingWidget}
					/>
				</div>
				<div className="grow">
					<Subtitle>Restaurant description</Subtitle>
					<Input
						className="grow"
						id='description'
						name='description'
						type='text'
						onChange={handleChange}
						value={values.description}
						isDisabled={restaurantLoading || loadingWidget}
					/>
				</div>
			</div>
			<div>
				<Subtitle>Portrait image</Subtitle>
				<div className="">
					<div className="flex items-center  h-40 bg-slate-50 text-center rounded-xl  text-black overflow-hidden">
						{
							!values.image
								? <p className="m-auto">No image has been uploaded yet</p>
								: <img className="w-full h-auto block" src={values.image} alt="selected portrait image" />
						}
					</div>
					<div className="flex gap-5 items-center">
						<Button className="my-2" color='secondary' onPress={() => widgetHandler()} isDisabled={restaurantLoading || loadingWidget}>
							Select image
						</Button>
						{loadingWidget && <span className="ml-5"><Loading content='Opening window' /></span>}
					</div>
					{name &&
						<div>
							<Subtitle>Restaurant menu</Subtitle>
							<div className="flex flex-col pr-10 ml-auto text-sm gap-1">
								<span>Go to menu: <a className="ml-2 underline underline-offset-4" href={`http://localhost:5173/menu/${name?.replace(' ', '%20')}`}>{name}</a></span>
								<span>Share this link: <span className="ml-2">{`http://localhost:5173/menu/${name?.replace(' ', '%20')}`}</span></span>
							</div>
						</div>}
					<br />
					{
						fieldsWasChanged &&
						<div>
							<Button className="my-2" color='primary' onPress={() => submitHandler()} isDisabled={restaurantLoading || loadingWidget}>
								Save
							</Button>
							<span className="text-sm ml-2">There are unsaved changes!</span>
						</div>
					}
				</div>

			</div>
		</div>
	)
}

export default Restaurant